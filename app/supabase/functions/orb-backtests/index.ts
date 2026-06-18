import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createServiceClient } from "../_shared/supabase.ts";

type SupabaseClient = ReturnType<typeof createServiceClient>;

async function authenticate(req: Request, supabase: SupabaseClient) {
  const hash = req.headers.get("x-user-passcode-hash");
  if (!hash) return null;
  const { data } = await supabase.from("app_users")
    .select("id,role,active,trial_enabled,trial_ends_at,feature_access")
    .eq("passcode_hash", hash)
    .eq("active", true)
    .maybeSingle();
  if (!data || (data.trial_enabled && data.trial_ends_at && new Date(data.trial_ends_at).getTime() <= Date.now())) return null;
  if (data.role !== "admin" && data.feature_access?.journal !== true) return null;
  return data;
}

function toNumber(value: unknown) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function toDate(value: unknown) {
  const text = String(value || "").trim();
  if (!text) return null;
  const date = new Date(text);
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10);
}

function dbRowToClient(row: Record<string, unknown>) {
  return {
    id: row.id,
    symbol: row.symbol,
    model: row.model,
    rangeTimeframe: row.range_timeframe,
    breakTimeframe: row.break_timeframe,
    importId: row.import_id,
    importName: row.import_name,
    date: row.test_date,
    targetPoints: Number(row.target_points || 0),
    range: Number(row.range_value || 0),
    firstCandleDirection: row.first_candle_direction,
    overallBias: row.overall_bias,
    timeToBreak: row.time_to_break,
    breakDirection: row.break_direction,
    breakAmount: Number(row.break_amount || 0),
    nextCandleReaction: row.next_candle_reaction,
    nextCandlePullback: Number(row.next_candle_pullback || 0),
    result: row.result,
    flip: row.flip,
    flipResult: row.flip_result,
    createdAt: row.created_at,
  };
}

function importRows(rows: Record<string, unknown>[], currentUser: Record<string, unknown>) {
  const importId = crypto.randomUUID();
  return rows.map((row) => ({
    symbol: String(row.symbol || "").trim(),
    model: String(row.model || "").trim(),
    range_timeframe: String(row.rangeTimeframe || "").trim(),
    break_timeframe: String(row.breakTimeframe || "").trim(),
    import_id: importId,
    import_name: String(row.importName || "").trim() || null,
    test_date: toDate(row.date),
    target_points: toNumber(row.targetPoints),
    range_value: toNumber(row.range),
    first_candle_direction: String(row.firstCandleDirection || "").trim() || null,
    overall_bias: String(row.overallBias || "").trim() || null,
    time_to_break: String(row.timeToBreak || "").trim() || null,
    break_direction: String(row.breakDirection || "").trim() || null,
    break_amount: toNumber(row.breakAmount),
    next_candle_reaction: String(row.nextCandleReaction || "").trim() || null,
    next_candle_pullback: toNumber(row.nextCandlePullback),
    result: String(row.result || "").trim() || null,
    flip: String(row.flip || "").trim() || null,
    flip_result: String(row.flipResult || "").trim() || null,
    created_by: currentUser.id,
  })).filter((row) => row.symbol && row.model && row.range_timeframe && row.break_timeframe);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  try {
    const supabase = createServiceClient();
    const currentUser = await authenticate(req, supabase);
    if (!currentUser) return jsonResponse({ error: "Access denied" }, 401);
    const body = await req.json();

    if (body.action === "list") {
      const { data, error } = await supabase.from("orb_backtests").select("*").order("test_date", { ascending: false });
      if (error) return jsonResponse({ error: "Could not load ORB backtests" }, 500);
      return jsonResponse({ rows: (data || []).map(dbRowToClient) });
    }

    if (currentUser.role !== "admin") {
      return jsonResponse({ error: "Admin access required" }, 403);
    }

    if (body.action === "import") {
      const rows = importRows(Array.isArray(body.rows) ? body.rows : [], currentUser);
      if (!rows.length) return jsonResponse({ error: "No valid backtest rows supplied" }, 400);
      const { error } = await supabase.from("orb_backtests").insert(rows);
      if (error) return jsonResponse({ error: "Could not import ORB backtests" }, 500);
      return jsonResponse({ imported: rows.length });
    }

    if (body.action === "clear") {
      const { error } = await supabase.from("orb_backtests").delete().not("id", "is", null);
      if (error) return jsonResponse({ error: "Could not clear ORB backtests" }, 500);
      return jsonResponse({ cleared: true });
    }

    return jsonResponse({ error: "Unknown action" }, 400);
  } catch {
    return jsonResponse({ error: "ORB backtest request failed" }, 500);
  }
});
