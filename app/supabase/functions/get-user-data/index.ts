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
    const { userId, includeConfig = true, includeTrades = true } = await req.json();
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

    const selectedColumns = [
      includeConfig ? "config_json" : null,
      includeTrades ? "trades_json" : null,
      "updated_at",
    ].filter(Boolean).join(",");

    const { data, error } = await supabase
      .from("user_data")
      .select(selectedColumns)
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      return jsonResponse({ error: "Could not load user data" }, 500);
    }

    return jsonResponse({
      ...(includeConfig ? { config: data?.config_json || { symbols: [], sessions: [], accounts: [], strategies: [], marketTypes: [], accountBalances: {} } } : {}),
      ...(includeTrades ? { trades: data?.trades_json || [] } : {}),
      updatedAt: data?.updated_at || null,
    });
  } catch {
    return jsonResponse({ error: "Could not load user data" }, 500);
  }
});
