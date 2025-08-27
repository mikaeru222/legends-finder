// PDF寄りの濃いめ配色 & P/N 規則は App 側で上書き（03P/09P/37P=紫）する
export const RARITY_COLORS: Record<string, { bg: string; fg: string }> = {
  "LR★": { bg: "#B388FF", fg: "#111" }, // 紫（濃いめ）
  LR:     { bg: "#FF6B6B", fg: "#111" }, // 赤
  SR:     { bg: "#FFD43B", fg: "#111" }, // 黄
  R:      { bg: "#6EC1FF", fg: "#111" }, // 水
  N:      { bg: "#FFFFFF", fg: "#111" }, // 白（※Nは白で固定）
  CP:     { bg: "#A6EE7A", fg: "#111" }, // 黄緑
  P_PA:   { bg: "#FFA552", fg: "#111" }, // オレンジ（P系：R_PA / P_PA など）
  OTHER:  { bg: "#DDD6FE", fg: "#111" },
};

export const HIT_OUTLINE = "#EF4444";

// 全角→半角・大文字化
export const toHalf = (s: string) =>
  (s ?? "")
    .replace(/[！-～]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/\u3000/g, " ")
    .trim();

export const K = (s: string) => toHalf(s).toUpperCase();

// レア名→色（未知は OTHER）
export function colorForRarity(rar?: string): string {
  const r = K(rar || "");
  if (r.startsWith("LR★")) return RARITY_COLORS["LR★"].bg;
  if (r.startsWith("LR"))  return RARITY_COLORS.LR.bg;
  if (r.startsWith("SR"))  return RARITY_COLORS.SR.bg;
  // P系（R_PA, P_PA など）は R より先に判定
  if (r.includes("_PA"))   return RARITY_COLORS.P_PA.bg;
  if (r === "R" || r.startsWith("R")) return RARITY_COLORS.R.bg;
  if (r === "N")  return RARITY_COLORS.N.bg;   // N は白
  if (r === "CP") return RARITY_COLORS.CP.bg;
  return RARITY_COLORS.OTHER.bg;
}
