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
    const { userId, currentPasscodeHash, nextPasscodeHash, nextPasscodeCode } = await req.json();
    if (!userId || !currentPasscodeHash || !nextPasscodeHash || !nextPasscodeCode) {
      return jsonResponse({ error: "Invalid passcode" }, 400);
    }

    const supabase = createServiceClient();
    const { data: user, error: lookupError } = await supabase
      .from("app_users")
      .select("id")
      .eq("id", userId)
      .eq("passcode_hash", currentPasscodeHash)
      .eq("active", true)
      .maybeSingle();

    if (lookupError || !user) {
      return jsonResponse({ error: "Invalid passcode" }, 401);
    }

    const { error: updateError } = await supabase
      .from("app_users")
      .update({
        passcode_hash: nextPasscodeHash,
        passcode_code: nextPasscodeCode,
      })
      .eq("id", userId);

    if (updateError) {
      return jsonResponse({ error: "Could not reset passcode" }, 500);
    }

    await writeAuditLog(supabase, "passcode_reset_self", userId, userId);

    return jsonResponse({ ok: true });
  } catch {
    return jsonResponse({ error: "Could not reset passcode" }, 500);
  }
});
