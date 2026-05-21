import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createServiceClient } from "../_shared/supabase.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { userId } = await req.json();
    if (!userId) {
      return jsonResponse({ error: "Missing user id" }, 400);
    }

    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("user_data")
      .select("config_json,trades_json,updated_at")
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      return jsonResponse({ error: "Could not load user data" }, 500);
    }

    return jsonResponse({
      config: data?.config_json || { symbols: [], sessions: [], accounts: [], strategies: [], marketTypes: [], accountBalances: {} },
      trades: data?.trades_json || [],
      updatedAt: data?.updated_at || null,
    });
  } catch {
    return jsonResponse({ error: "Could not load user data" }, 500);
  }
});
