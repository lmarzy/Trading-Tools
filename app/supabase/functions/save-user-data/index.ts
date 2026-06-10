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
    const { userId, config, trades } = await req.json();
    if (!userId) {
      return jsonResponse({ error: "Missing user id" }, 400);
    }

    const supabase = createServiceClient();
    const { data: user, error: userError } = await supabase
      .from("app_users")
      .select("id,active,trial_enabled,trial_ends_at")
      .eq("id", userId)
      .maybeSingle();

    if (userError || !user || !user.active) {
      return jsonResponse({ error: "Access denied" }, 401);
    }

    if (isTrialExpired(user)) {
      await supabase
        .from("app_users")
        .update({ active: false, disabled_reason: "Trial expired" })
        .eq("id", user.id);
      return jsonResponse({ error: "Access denied" }, 401);
    }

    const { error } = await supabase.from("user_data").upsert(
      {
        user_id: userId,
        config_json: config || { symbols: [], sessions: [], accounts: [], strategies: [], marketTypes: [], accountBalances: {} },
        trades_json: trades || [],
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );

    if (error) {
      return jsonResponse({ error: "Could not save user data" }, 500);
    }

    return jsonResponse({ ok: true });
  } catch {
    return jsonResponse({ error: "Could not save user data" }, 500);
  }
});
