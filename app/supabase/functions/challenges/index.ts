import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createServiceClient } from "../_shared/supabase.ts";

async function authenticate(req: Request, supabase: ReturnType<typeof createServiceClient>) {
  const hash = req.headers.get("x-user-passcode-hash");
  if (!hash) return null;
  const { data } = await supabase.from("app_users")
    .select("id,label,first_name,last_name,email,active,trial_enabled,trial_ends_at,feature_access,role")
    .eq("passcode_hash", hash).eq("active", true).maybeSingle();
  if (!data || (data.trial_enabled && data.trial_ends_at && new Date(data.trial_ends_at).getTime() <= Date.now())) return null;
  if (data.role !== "admin" && data.feature_access?.challenges !== true) return null;
  return data;
}

function publicName(user: Record<string, unknown>) {
  return [user.first_name, user.last_name].filter(Boolean).join(" ") || user.label || "Trader";
}

function tradePoints(trade: Record<string, unknown>) {
  const rawLegs = Array.isArray(trade.priceLegs) && trade.priceLegs.length
    ? trade.priceLegs
    : trade.entryPrice !== "" && trade.exitPrice !== "" ? [{ entry: trade.entryPrice, exit: trade.exitPrice, size: 1 }] : [];
  const totals = rawLegs.reduce((acc, leg) => {
    const entry = Number(leg?.entry);
    const exit = Number(leg?.exit);
    const size = Math.max(Number(leg?.size || 1), 0);
    if (!Number.isFinite(entry) || !Number.isFinite(exit) || !Number.isFinite(size) || size <= 0) return acc;
    const points = trade.direction === "Sell" ? entry - exit : exit - entry;
    return { weighted: acc.weighted + points * size, size: acc.size + size };
  }, { weighted: 0, size: 0 });
  return totals.size ? totals.weighted / totals.size : 0;
}

function tradeAmount(trade: Record<string, unknown>) {
  const amount = Number(trade.amount);
  return Number.isFinite(amount) ? amount : 0;
}

function challengeValues(body: Record<string, unknown>) {
  const type = body.challengeType === "prop" ? "prop" : body.challengeType === "custom" ? "custom" : "orb";
  const startDate = type === "prop" ? body.propStartDate : type === "custom" ? body.customStartDate : body.startDate;
  const endDate = type === "prop" ? body.propEndDate : type === "custom" ? body.customEndDate : body.endDate;
  const startsAt = startDate ? new Date(`${startDate}T00:00:00Z`) : null;
  const endsAt = endDate ? new Date(`${endDate}T23:59:59Z`) : null;
  if (!startsAt || !endsAt || Number.isNaN(startsAt.getTime()) || Number.isNaN(endsAt.getTime()) || endsAt < startsAt) return null;
  if (type === "prop") {
    const startingBalance = Number(body.startingBalance);
    const profitTargetPercent = Number(body.profitTargetPercent);
    const dailyDrawdownPercent = Number(body.dailyDrawdownPercent);
    const maxDrawdownPercent = Number(body.maxDrawdownPercent);
    if (![startingBalance, profitTargetPercent, dailyDrawdownPercent, maxDrawdownPercent].every((value) => Number.isFinite(value) && value > 0)) return null;
    return {
      type, startsAt, endsAt, rankingMethod: "profit_percentage",
      rules: { startingBalance, profitTargetPercent, dailyDrawdownPercent, maxDrawdownPercent },
    };
  }
  if (type === "custom") {
    return {
      type, startsAt, endsAt, rankingMethod: "points",
      rules: { scope: "custom", scoring: "points" },
    };
  }
  const session = String(body.session || "").trim();
  const standardMarket = String(body.standardMarket || "").trim();
  if (!session || !standardMarket) return null;
  return {
    type, startsAt, endsAt, rankingMethod: "points",
    rules: {
      session, standardMarket, strategy: "Opening Range Breakout",
      tradeRule: body.tradeRule === "allow-flip" ? "allow-flip" : "initial-only",
      maxTradesPerDay: body.tradeRule === "allow-flip" ? 2 : 1,
    },
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  try {
    const supabase = createServiceClient();
    const currentUser = await authenticate(req, supabase);
    if (!currentUser) return jsonResponse({ error: "Access denied" }, 401);
    const body = await req.json();

    if (body.action === "create") {
      const name = String(body.name || "").trim();
      if (!name) return jsonResponse({ error: "Challenge name is required" }, 400);
      const values = challengeValues(body);
      if (!values) return jsonResponse({ error: "Complete the challenge settings and add a valid date range" }, 400);
      const { data: challenge, error } = await supabase.from("challenges").insert({
        creator_id: currentUser.id, name, description: String(body.description || "").trim() || null,
        status: "active", challenge_type: values.type, ranking_method: values.rankingMethod,
        starts_at: values.startsAt.toISOString(), ends_at: values.endsAt.toISOString(),
        rules_json: values.rules,
      }).select("*").single();
      if (error) return jsonResponse({ error: "Could not create challenge" }, 500);
      await supabase.from("challenge_members").insert({
        challenge_id: challenge.id, user_id: currentUser.id, invited_by: currentUser.id, invitation_status: "accepted", responded_at: new Date().toISOString(),
      });
      return jsonResponse({ challenge });
    }

    if (body.action === "invite") {
      const email = String(body.email || "").trim().toLowerCase();
      const { data: challenge } = await supabase.from("challenges").select("id,creator_id").eq("id", body.challengeId).maybeSingle();
      if (!challenge || challenge.creator_id !== currentUser.id) return jsonResponse({ error: "Only the creator can invite users" }, 403);
      const { data: invitedUser } = await supabase.from("app_users")
        .select("id,label,first_name,last_name,email").ilike("email", email).eq("active", true).maybeSingle();
      if (!invitedUser) return jsonResponse({ error: "No active user found with that email" }, 404);
      if (invitedUser.id === currentUser.id) return jsonResponse({ error: "You are already in this challenge" }, 400);
      const { error } = await supabase.from("challenge_members").upsert({
        challenge_id: challenge.id, user_id: invitedUser.id, invited_by: currentUser.id, invitation_status: "pending", invited_at: new Date().toISOString(), responded_at: null,
      }, { onConflict: "challenge_id,user_id" });
      if (error) return jsonResponse({ error: "Could not send invitation" }, 500);
      return jsonResponse({ member: { name: publicName(invitedUser), email: invitedUser.email, status: "pending" } });
    }

    if (body.action === "update") {
      const { data: existing } = await supabase.from("challenges").select("id,creator_id").eq("id", body.challengeId).maybeSingle();
      if (!existing || existing.creator_id !== currentUser.id) return jsonResponse({ error: "Only the creator can update this challenge" }, 403);
      const name = String(body.name || "").trim();
      const values = challengeValues(body);
      if (!name || !values) return jsonResponse({ error: "Complete the challenge settings and add a valid date range" }, 400);
      const { data, error } = await supabase.from("challenges").update({
        name,
        description: String(body.description || "").trim() || null,
        challenge_type: values.type,
        ranking_method: values.rankingMethod,
        starts_at: values.startsAt.toISOString(),
        ends_at: values.endsAt.toISOString(),
        rules_json: values.rules,
        updated_at: new Date().toISOString(),
      }).eq("id", body.challengeId).select("*").single();
      if (error) return jsonResponse({ error: "Could not update challenge" }, 500);
      return jsonResponse({ challenge: data });
    }

    if (body.action === "delete") {
      const { data: existing } = await supabase.from("challenges").select("id,creator_id").eq("id", body.challengeId).maybeSingle();
      if (!existing || existing.creator_id !== currentUser.id) return jsonResponse({ error: "Only the creator can delete this challenge" }, 403);
      const { error } = await supabase.from("challenges").delete().eq("id", body.challengeId);
      if (error) return jsonResponse({ error: "Could not delete challenge" }, 500);
      return jsonResponse({ ok: true });
    }

    if (body.action === "respond") {
      const status = body.response === "accepted" ? "accepted" : body.response === "declined" ? "declined" : "";
      if (!status) return jsonResponse({ error: "Invalid response" }, 400);
      const { error } = await supabase.from("challenge_members").update({ invitation_status: status, responded_at: new Date().toISOString() })
        .eq("challenge_id", body.challengeId).eq("user_id", currentUser.id).eq("invitation_status", "pending");
      if (error) return jsonResponse({ error: "Could not update invitation" }, 500);
      return jsonResponse({ ok: true });
    }

    if (body.action === "list") {
      const { data: memberships } = await supabase.from("challenge_members").select("challenge_id,invitation_status,invited_at,responded_at")
        .eq("user_id", currentUser.id).neq("invitation_status", "removed");
      const ids = (memberships || []).map((item) => item.challenge_id);
      if (!ids.length) return jsonResponse({ challenges: [] });
      const { data: challenges } = await supabase.from("challenges").select("*").in("id", ids).order("created_at", { ascending: false });
      const { data: members } = await supabase.from("challenge_members")
        .select("challenge_id,user_id,invitation_status,invited_at,responded_at,app_users!challenge_members_user_id_fkey(label,first_name,last_name,email)")
        .in("challenge_id", ids).neq("invitation_status", "removed");
      const acceptedUserIds = [...new Set((members || []).filter((member) => member.invitation_status === "accepted").map((member) => member.user_id))];
      const { data: journals } = acceptedUserIds.length
        ? await supabase.from("user_data").select("user_id,trades_json").in("user_id", acceptedUserIds)
        : { data: [] };
      return jsonResponse({ challenges: (challenges || []).map((challenge) => ({
        ...challenge,
        invitationStatus: memberships?.find((item) => item.challenge_id === challenge.id)?.invitation_status,
        isCreator: challenge.creator_id === currentUser.id,
        members: (members || []).filter((member) => member.challenge_id === challenge.id).map((member) => ({
          userId: member.user_id, name: publicName(member.app_users || {}), status: member.invitation_status,
          ...(challenge.creator_id === currentUser.id ? { email: member.app_users?.email || "" } : {}),
        })),
        leaderboard: (members || []).filter((member) => member.challenge_id === challenge.id && member.invitation_status === "accepted").map((member) => {
          const allTrades = (journals || []).find((journal) => journal.user_id === member.user_id)?.trades_json || [];
          const qualifying = allTrades
            .filter((trade: Record<string, unknown>) => trade.challengeId === challenge.id)
            .sort((a: Record<string, unknown>, b: Record<string, unknown>) => String(a.createdAt || "").localeCompare(String(b.createdAt || "")))
            .filter((trade: Record<string, unknown>, index: number, trades: Record<string, unknown>[]) => {
              if (challenge.challenge_type === "prop" || challenge.challenge_type === "custom") return true;
              const sameDay = trades.filter((item) => item.tradeDate === trade.tradeDate);
              return sameDay.indexOf(trade) < Number(challenge.rules_json?.maxTradesPerDay || 1);
            });
          const netAmount = qualifying.reduce((total, trade) => total + tradeAmount(trade), 0);
          const startingBalance = Number(challenge.rules_json?.startingBalance || 0);
          return {
            userId: member.user_id,
            name: publicName(member.app_users || {}),
            trades: qualifying.length,
            wins: qualifying.filter((trade) => trade.outcome === "Win").length,
            losses: qualifying.filter((trade) => trade.outcome === "Loss").length,
            flipWins: qualifying.filter((trade) => trade.challengeTradeType === "flip" && trade.outcome === "Win").length,
            points: qualifying.reduce((total, trade) => total + tradePoints(trade), 0),
            netAmount,
            profitPercent: startingBalance > 0 ? (netAmount / startingBalance) * 100 : 0,
          };
        }).sort((a, b) => challenge.challenge_type === "prop"
          ? b.profitPercent - a.profitPercent || b.wins - a.wins
          : b.points - a.points || b.wins - a.wins),
      })) });
    }
    return jsonResponse({ error: "Unknown action" }, 400);
  } catch {
    return jsonResponse({ error: "Challenge request failed" }, 500);
  }
});
