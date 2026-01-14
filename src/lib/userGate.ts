import { Timestamp } from "firebase/firestore";

export type SystemConfigLite = {
  stopAt?: Timestamp | null;
};

export type UserLite = {
  enabled?: boolean;
  validUntil?: Timestamp | null;
};

export type GateResult =
  | { ok: true }
  | { ok: false; reason: "disabled" | "globalStop" | "expired" | "noValidUntil" };

export function checkUserGate(
  user: UserLite,
  system: SystemConfigLite | null,
  nowMs: number = Date.now()
): GateResult {
  // 1) ユーザー個別の無効化
  if (user.enabled === false) return { ok: false, reason: "disabled" };

  // 2) 全員停止ライン（stopAt）
  const stopAt = system?.stopAt ?? null;
  if (stopAt instanceof Timestamp) {
    if (nowMs >= stopAt.toMillis()) return { ok: false, reason: "globalStop" };
  }

  // 3) 有効期限（validUntil）
  // 3) 有効期限 (validUntil)
const vu = user.validUntil ?? null;
if (!(vu instanceof Timestamp)) return { ok: true };
if (nowMs >= vu.toMillis()) return { ok: false, reason: "expired" };

return { ok: true };

}
