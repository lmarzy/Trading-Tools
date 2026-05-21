import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createServiceClient } from "../_shared/supabase.ts";
import { writeAuditLog } from "../_shared/audit.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { passcodeHash, role } = await req.json();
    if (!passcodeHash) {
      return jsonResponse({ user: null });
    }

    const supabase = createServiceClient();
    let query = supabase
      .from("app_users")
      .select("id,label,email,role,active")
      .eq("passcode_hash", passcodeHash)
      .eq("active", true);

    if (role) {
      query = query.eq("role", role);
    }

    const { data: user, error } = await query.maybeSingle();

    if (error || !user) {
      return jsonResponse({ user: null });
    }

    await supabase.from("user_data").upsert(
      {
        user_id: user.id,
      },
      { onConflict: "user_id" },
    );
    await supabase
      .from("app_users")
      .update({ last_login_at: new Date().toISOString() })
      .eq("id", user.id);
    await writeAuditLog(supabase, "login", user.id, user.id, { role: user.role });

    return jsonResponse({ user: { id: user.id, label: user.label, email: user.email, role: user.role } });
  } catch {
    return jsonResponse({ user: null });
  }
});
