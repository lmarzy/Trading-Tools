import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createServiceClient } from "../_shared/supabase.ts";

function isTrialExpired(user: { trial_enabled?: boolean; trial_ends_at?: string | null }) {
  return Boolean(user.trial_enabled && user.trial_ends_at && new Date(user.trial_ends_at).getTime() <= Date.now());
}

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
      .select("id,label,email,role,active,trial_enabled,trial_ends_at,feature_access")
      .eq("passcode_hash", passcodeHash)
      .eq("active", true);

    if (role) {
      query = query.eq("role", role);
    }

    const { data: user, error } = await query.maybeSingle();

    if (error || !user) {
      return jsonResponse({ user: null });
    }

    if (isTrialExpired(user)) {
      await supabase
        .from("app_users")
        .update({ active: false, disabled_reason: "Trial expired" })
        .eq("id", user.id);
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

    return jsonResponse({
      user: {
        id: user.id,
        label: user.label,
        email: user.email,
        role: user.role,
        trialEnabled: Boolean(user.trial_enabled),
        trialEndsAt: user.trial_ends_at || null,
        featureAccess: user.role === "admin" ? { journal: true, backtesting: true, calculator: true, training: true, challenges: true } : user.feature_access,
      },
    });
  } catch {
    return jsonResponse({ user: null });
  }
});
