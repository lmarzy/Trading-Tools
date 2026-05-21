import { createServiceClient } from "./supabase.ts";

type AuditDetails = Record<string, unknown>;

export async function writeAuditLog(
  supabase: ReturnType<typeof createServiceClient>,
  event: string,
  actorUserId: string | null,
  targetUserId: string | null,
  details: AuditDetails = {},
) {
  await supabase.from("audit_logs").insert({
    event,
    actor_user_id: actorUserId,
    target_user_id: targetUserId,
    details,
  });
}
