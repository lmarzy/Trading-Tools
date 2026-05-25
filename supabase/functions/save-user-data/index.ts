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
    const { userId, config, trades } = await req.json();
    if (!userId) {
      return jsonResponse({ error: "Missing user id" }, 400);
    }

    const supabase = createServiceClient();
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
