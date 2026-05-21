import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { createServiceClient } from "../_shared/supabase.ts";
import { writeAuditLog } from "../_shared/audit.ts";

async function assertAdmin(req: Request, supabase: ReturnType<typeof createServiceClient>) {
  const adminHash = req.headers.get("x-admin-passcode-hash");
  if (!adminHash) {
    return null;
  }

  const { data } = await supabase
    .from("app_users")
    .select("id,label")
    .eq("passcode_hash", adminHash)
    .eq("role", "admin")
    .eq("active", true)
    .maybeSingle();

  return data || null;
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
    const adminUser = await assertAdmin(req, supabase);

    if (!adminUser) {
      return jsonResponse({ error: "Invalid passcode" }, 401);
    }

    if (action === "list") {
      const { data, error } = await supabase
        .from("app_users")
        .select("id,label,first_name,last_name,email,role,passcode_code,active,created_at,last_login_at")
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

    if (action === "audit-list") {
      const { data, error } = await supabase
        .from("audit_logs")
        .select(`
          id,
          event,
          details,
          created_at,
          actor:actor_user_id(label,email,role),
          target:target_user_id(label,email,role)
        `)
        .order("created_at", { ascending: false })
        .limit(50);

      if (error) {
        return jsonResponse({ error: "Could not list audit logs" }, 500);
      }

      return jsonResponse({ logs: data || [] });
    }

    if (action === "create") {
      const { firstName, lastName, email, label, role, passcodeHash, passcodeCode } = user || {};
      const displayLabel = label || [firstName, lastName].filter(Boolean).join(" ");
      if (!displayLabel || !passcodeHash) {
        return jsonResponse({ error: "Missing user details" }, 400);
      }
      const userRole = role === "admin" ? "admin" : "user";

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
          active: true,
        })
        .select("id,label,first_name,last_name,email,role,passcode_code,active,created_at,last_login_at")
        .single();

      if (error) {
        return jsonResponse({ error: "Could not create user" }, 500);
      }

      await supabase.from("user_data").insert({ user_id: data.id });
      await writeAuditLog(supabase, "admin_user_created", adminUser.id, data.id, {
        role: data.role,
        email: data.email,
      });
      return jsonResponse({ user: data });
    }

    if (action === "update") {
      const { id, firstName, lastName, email, label, role, active, passcodeHash, passcodeCode } = user || {};
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
      };

      if (passcodeHash) {
        updates.passcode_hash = passcodeHash;
        updates.passcode_code = passcodeCode || null;
      }

      const { data, error } = await supabase
        .from("app_users")
        .update(updates)
        .eq("id", id)
        .select("id,label,first_name,last_name,email,role,passcode_code,active,created_at,last_login_at")
        .single();
      if (error) {
        return jsonResponse({ error: "Could not update user" }, 500);
      }

      await writeAuditLog(supabase, passcodeHash ? "admin_passcode_reset" : "admin_user_updated", adminUser.id, data.id, {
        role: data.role,
        active: data.active,
        email: data.email,
      });

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

      const { data: removedUser } = await supabase
        .from("app_users")
        .select("id,label,email,role")
        .eq("id", id)
        .maybeSingle();
      const { error } = await supabase.from("app_users").delete().eq("id", id);
      if (error) {
        return jsonResponse({ error: "Could not delete user" }, 500);
      }

      await writeAuditLog(supabase, "admin_user_removed", adminUser.id, null, {
        removedUserId: id,
        label: removedUser?.label || null,
        email: removedUser?.email || null,
        role: removedUser?.role || null,
      });

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
