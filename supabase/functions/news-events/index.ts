import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createServiceClient } from "../_shared/supabase.ts";

const EVENT_SELECT = "id,title,event_time,currency,impact,notes,source_url,active,created_at,updated_at";

type NewsEventInput = {
  id?: string;
  title?: string;
  eventTime?: string;
  currency?: string;
  impact?: string;
  notes?: string;
  sourceUrl?: string;
  active?: boolean;
};

function normaliseImpact(value: unknown) {
  return ["High", "Medium", "Low"].includes(String(value)) ? String(value) : "High";
}

function normaliseEvent(row: Record<string, unknown>) {
  return {
    id: row.id,
    title: row.title,
    date: row.event_time,
    currency: row.currency,
    country: "",
    impact: row.impact,
    notes: row.notes || "",
    sourceUrl: row.source_url || "",
    active: row.active,
    previous: "",
    forecast: "",
    actual: "",
  };
}

function eventPayload(event: NewsEventInput) {
  return {
    title: String(event.title || "").trim(),
    event_time: event.eventTime,
    currency: String(event.currency || "USD").trim().toUpperCase(),
    impact: normaliseImpact(event.impact),
    notes: event.notes ? String(event.notes).trim() : null,
    source_url: event.sourceUrl ? String(event.sourceUrl).trim() : null,
    active: event.active !== false,
    updated_at: new Date().toISOString(),
  };
}

async function assertAdmin(req: Request, supabase: ReturnType<typeof createServiceClient>) {
  const adminHash = req.headers.get("x-admin-passcode-hash");
  if (!adminHash) {
    return false;
  }

  const { data } = await supabase
    .from("app_users")
    .select("id,trial_enabled,trial_ends_at")
    .eq("passcode_hash", adminHash)
    .eq("role", "admin")
    .eq("active", true)
    .maybeSingle();

  if (!data) {
    return false;
  }

  return !(data.trial_enabled && data.trial_ends_at && new Date(data.trial_ends_at).getTime() <= Date.now());
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { action = "list", event = {}, from, to } = await req.json().catch(() => ({}));
    const supabase = createServiceClient();

    if (action === "list") {
      let query = supabase
        .from("news_events")
        .select(EVENT_SELECT)
        .eq("active", true)
        .order("event_time", { ascending: true });

      if (from) {
        query = query.gte("event_time", `${from}T00:00:00.000Z`);
      }

      if (to) {
        query = query.lte("event_time", `${to}T23:59:59.999Z`);
      }

      const { data, error } = await query;
      if (error) {
        return jsonResponse({ error: "Could not load news events" }, 500);
      }

      return jsonResponse({ events: (data || []).map(normaliseEvent) });
    }

    const isAdmin = await assertAdmin(req, supabase);
    if (!isAdmin) {
      return jsonResponse({ error: "Invalid passcode" }, 401);
    }

    if (action === "admin-list") {
      const { data, error } = await supabase
        .from("news_events")
        .select(EVENT_SELECT)
        .order("event_time", { ascending: false });

      if (error) {
        return jsonResponse({ error: "Could not load news events" }, 500);
      }

      return jsonResponse({ events: data || [] });
    }

    if (action === "create") {
      const payload = eventPayload(event);
      if (!payload.title || !payload.event_time) {
        return jsonResponse({ error: "Missing event details" }, 400);
      }

      const { data, error } = await supabase
        .from("news_events")
        .insert(payload)
        .select(EVENT_SELECT)
        .single();

      if (error) {
        return jsonResponse({ error: "Could not create news event" }, 500);
      }

      return jsonResponse({ event: data });
    }

    if (action === "update") {
      if (!event.id) {
        return jsonResponse({ error: "Missing event id" }, 400);
      }

      const payload = eventPayload(event);
      if (!payload.title || !payload.event_time) {
        return jsonResponse({ error: "Missing event details" }, 400);
      }

      const { data, error } = await supabase
        .from("news_events")
        .update(payload)
        .eq("id", event.id)
        .select(EVENT_SELECT)
        .single();

      if (error) {
        return jsonResponse({ error: "Could not update news event" }, 500);
      }

      return jsonResponse({ event: data });
    }

    if (action === "delete") {
      if (!event.id) {
        return jsonResponse({ error: "Missing event id" }, 400);
      }

      const { error } = await supabase.from("news_events").delete().eq("id", event.id);
      if (error) {
        return jsonResponse({ error: "Could not delete news event" }, 500);
      }

      return jsonResponse({ ok: true });
    }

    return jsonResponse({ error: "Unknown action" }, 400);
  } catch {
    return jsonResponse({ error: "News events request failed" }, 500);
  }
});
