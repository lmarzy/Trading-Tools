import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createServiceClient } from "../_shared/supabase.ts";

const USER_SELECT = "id,label,first_name,last_name,email,role,passcode_code,active,trial_enabled,trial_weeks,trial_started_at,trial_ends_at,disabled_reason,feature_access,created_at,last_login_at";
const DEFAULT_FEATURE_ACCESS = { journal: true, backtesting: false, calculator: true, training: false, challenges: false };
const ADMIN_FEATURE_ACCESS = { journal: true, backtesting: true, calculator: true, training: true, challenges: true };

function normaliseFeatureAccess(value: unknown, role: string) {
  if (role === "admin") return ADMIN_FEATURE_ACCESS;
  const access = value && typeof value === "object" ? value as Record<string, unknown> : {};
  return Object.fromEntries(
    Object.entries(DEFAULT_FEATURE_ACCESS).map(([key, defaultValue]) => [key, access[key] === undefined ? defaultValue : access[key] === true]),
  );
}

function normaliseTrialWeeks(value: unknown) {
  const weeks = Number(value);
  return Number.isInteger(weeks) && weeks >= 1 && weeks <= 4 ? weeks : null;
}

function getTrialFields(trialEnabled: unknown, trialWeeks: unknown) {
  const weeks = normaliseTrialWeeks(trialWeeks) || 2;
  const enabled = Boolean(trialEnabled);
  const startedAt = enabled ? new Date() : null;
  const endsAt = enabled && startedAt ? new Date(startedAt.getTime() + weeks * 7 * 24 * 60 * 60 * 1000) : null;

  return {
    trial_enabled: enabled,
    trial_weeks: enabled ? weeks : null,
    trial_started_at: enabled ? startedAt?.toISOString() : null,
    trial_ends_at: enabled ? endsAt?.toISOString() : null,
  };
}

function isTrialExpired(user: { trial_enabled?: boolean; trial_ends_at?: string | null }) {
  return Boolean(user.trial_enabled && user.trial_ends_at && new Date(user.trial_ends_at).getTime() <= Date.now());
}

async function expireTrials(supabase: ReturnType<typeof createServiceClient>) {
  await supabase
    .from("app_users")
    .update({ active: false, disabled_reason: "Trial expired" })
    .eq("active", true)
    .eq("trial_enabled", true)
    .lte("trial_ends_at", new Date().toISOString());
}

async function assertAdmin(req: Request, supabase: ReturnType<typeof createServiceClient>) {
  const adminHash = req.headers.get("x-admin-passcode-hash");
  if (!adminHash) {
    return null;
  }

  const { data } = await supabase
    .from("app_users")
    .select("id,label,trial_enabled,trial_ends_at")
    .eq("passcode_hash", adminHash)
    .eq("role", "admin")
    .eq("active", true)
    .maybeSingle();

  if (!data || isTrialExpired(data)) {
    return null;
  }

  return data;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { action, user } = await req.json();
    const supabase = createServiceClient();
    await expireTrials(supabase);
    const adminUser = await assertAdmin(req, supabase);

    if (!adminUser) {
      return jsonResponse({ error: "Invalid passcode" }, 401);
    }

    if (action === "list") {
      const { data, error } = await supabase
        .from("app_users")
        .select(USER_SELECT)
        .order("created_at", { ascending: false });

      if (error) {
        return jsonResponse({ error: "Could not list users" }, 500);
      }

      const userIds = (data || []).map((user) => user.id);
      const { data: userData } = userIds.length
        ? await supabase
          .from("user_data")
          .select("user_id,trades_json,updated_at")
          .in("user_id", userIds)
        : { data: [] };
      const activityByUser = new Map(
        (userData || []).map((row) => [
          row.user_id,
          {
            trade_count: Array.isArray(row.trades_json) ? row.trades_json.length : 0,
            last_saved_at: row.updated_at || null,
          },
        ]),
      );

      return jsonResponse({
        users: (data || []).map((user) => ({
          ...user,
          trade_count: activityByUser.get(user.id)?.trade_count || 0,
          last_saved_at: activityByUser.get(user.id)?.last_saved_at || null,
        })),
      });
    }

    if (action === "create") {
      const { firstName, lastName, email, label, role, passcodeHash, passcodeCode, trialEnabled, trialWeeks, featureAccess } = user || {};
      const displayLabel = label || [firstName, lastName].filter(Boolean).join(" ");
      if (!displayLabel || !passcodeHash) {
        return jsonResponse({ error: "Missing user details" }, 400);
      }
      const userRole = role === "admin" ? "admin" : "user";
      const trialFields = getTrialFields(trialEnabled, trialWeeks);
      const isActive = user.active === false ? false : true;

      const { data, error } = await supabase
        .from("app_users")
        .insert({
          label: displayLabel,
          first_name: firstName || null,
          last_name: lastName || null,
          email: email || null,
          role: userRole,
          passcode_hash: passcodeHash,
          passcode_code: passcodeCode || null,
          active: isActive,
          disabled_reason: isActive ? null : "Manually disabled",
          feature_access: normaliseFeatureAccess(featureAccess, userRole),
          ...trialFields,
        })
        .select(USER_SELECT)
        .single();

      if (error) {
        return jsonResponse({ error: "Could not create user" }, 500);
      }

      await supabase.from("user_data").insert({ user_id: data.id });
      return jsonResponse({ user: data });
    }

    if (action === "update") {
      const { id, firstName, lastName, email, label, role, active, passcodeHash, passcodeCode, trialEnabled, trialWeeks, resetTrial, featureAccess } = user || {};
      if (!id) {
        return jsonResponse({ error: "Missing user id" }, 400);
      }

      const userRole = role === "admin" ? "admin" : "user";
      if ((active === false || userRole !== "admin") && !(await hasAnotherActiveAdmin(supabase, id))) {
        return jsonResponse({ error: "Keep at least one active admin" }, 400);
      }

      const displayLabel = label || [firstName, lastName].filter(Boolean).join(" ") || "Untitled user";
      const updates: Record<string, unknown> = {
        label: displayLabel,
        first_name: firstName || null,
        last_name: lastName || null,
        email: email || null,
        role: userRole,
        active,
        disabled_reason: active ? null : "Manually disabled",
        feature_access: normaliseFeatureAccess(featureAccess, userRole),
      };

      if (resetTrial || trialEnabled !== undefined || trialWeeks !== undefined) {
        Object.assign(updates, getTrialFields(trialEnabled, trialWeeks));
      }

      if (passcodeHash) {
        updates.passcode_hash = passcodeHash;
        updates.passcode_code = passcodeCode || null;
      }

      const { data, error } = await supabase
        .from("app_users")
        .update(updates)
        .eq("id", id)
        .select(USER_SELECT)
        .single();
      if (error) {
        return jsonResponse({ error: "Could not update user" }, 500);
      }

      return jsonResponse({ user: data });
    }

    if (action === "delete") {
      const { id } = user || {};
      if (!id) {
        return jsonResponse({ error: "Missing user id" }, 400);
      }

      if (!(await hasAnotherActiveAdmin(supabase, id))) {
        return jsonResponse({ error: "Keep at least one active admin" }, 400);
      }

      const { error } = await supabase.from("app_users").delete().eq("id", id);
      if (error) {
        return jsonResponse({ error: "Could not delete user" }, 500);
      }

      return jsonResponse({ ok: true });
    }

    return jsonResponse({ error: "Unknown action" }, 400);
  } catch {
    return jsonResponse({ error: "Admin request failed" }, 500);
  }
});

async function hasAnotherActiveAdmin(supabase: ReturnType<typeof createServiceClient>, excludedId: string) {
  const { data, error } = await supabase
    .from("app_users")
    .select("id")
    .eq("role", "admin")
    .eq("active", true)
    .neq("id", excludedId)
    .limit(1);

  return !error && Boolean(data?.length);
}
