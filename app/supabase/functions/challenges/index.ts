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
  const entry = Number(trade.entryPrice);
  const exit = Number(trade.exitPrice);
  if (!Number.isFinite(entry) || !Number.isFinite(exit) || trade.entryPrice === "" || trade.exitPrice === "") return 0;
  return trade.direction === "Sell" ? entry - exit : exit - entry;
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
      const session = String(body.session || "").trim();
      const standardMarket = String(body.standardMarket || "").trim();
      const startsAt = body.startDate ? new Date(`${body.startDate}T00:00:00Z`) : null;
      const endsAt = body.endDate ? new Date(`${body.endDate}T23:59:59Z`) : null;
      if (!session || !standardMarket || !startsAt || !endsAt || Number.isNaN(startsAt.getTime()) || Number.isNaN(endsAt.getTime()) || endsAt < startsAt) {
        return jsonResponse({ error: "Add a valid market, session, and date range" }, 400);
      }
      const { data: challenge, error } = await supabase.from("challenges").insert({
        creator_id: currentUser.id, name, description: String(body.description || "").trim() || null,
        status: "active", challenge_type: "orb", ranking_method: "points",
        starts_at: startsAt.toISOString(), ends_at: endsAt.toISOString(),
        rules_json: {
          session,
          standardMarket,
          strategy: "Opening Range Breakout",
          tradeRule: body.tradeRule === "allow-flip" ? "allow-flip" : "initial-only",
          maxTradesPerDay: body.tradeRule === "allow-flip" ? 2 : 1,
        },
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
      const session = String(body.session || "").trim();
      const standardMarket = String(body.standardMarket || "").trim();
      const startsAt = body.startDate ? new Date(`${body.startDate}T00:00:00Z`) : null;
      const endsAt = body.endDate ? new Date(`${body.endDate}T23:59:59Z`) : null;
      if (!name || !session || !standardMarket || !startsAt || !endsAt || Number.isNaN(startsAt.getTime()) || Number.isNaN(endsAt.getTime()) || endsAt < startsAt) {
        return jsonResponse({ error: "Add a valid name, market, session, and date range" }, 400);
      }
      const { data, error } = await supabase.from("challenges").update({
        name,
        description: String(body.description || "").trim() || null,
        starts_at: startsAt.toISOString(),
        ends_at: endsAt.toISOString(),
        rules_json: {
          session,
          standardMarket,
          strategy: "Opening Range Breakout",
          tradeRule: body.tradeRule === "allow-flip" ? "allow-flip" : "initial-only",
          maxTradesPerDay: body.tradeRule === "allow-flip" ? 2 : 1,
        },
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
              const sameDay = trades.filter((item) => item.tradeDate === trade.tradeDate);
              return sameDay.indexOf(trade) < Number(challenge.rules_json?.maxTradesPerDay || 1);
            });
          return {
            userId: member.user_id,
            name: publicName(member.app_users || {}),
            trades: qualifying.length,
            wins: qualifying.filter((trade) => trade.outcome === "Win").length,
            losses: qualifying.filter((trade) => trade.outcome === "Loss").length,
            flipWins: qualifying.filter((trade) => trade.challengeTradeType === "flip" && trade.outcome === "Win").length,
            points: qualifying.reduce((total, trade) => total + tradePoints(trade), 0),
          };
        }).sort((a, b) => b.points - a.points || b.wins - a.wins),
      })) });
    }
    return jsonResponse({ error: "Unknown action" }, 400);
  } catch {
    return jsonResponse({ error: "Challenge request failed" }, 500);
  }
});
