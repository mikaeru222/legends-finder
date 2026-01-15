// src/lib/rarity.ts
export const toHalf = (s: string): string =>
  s
    .replace(/[！-～]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/　/g, " ")
    .replace(/－/g, "-");

// ===== PDF/CX3 完全準拠パレット =====
// LR=赤, LRP=紫, CP=緑, CPP=橙, SR=黄, SRP=橙, R=水色, N=白
export type RarityKey = "LR" | "LR★" | "SR" | "SR★" | "R" | "CP" | "CP★" | "N";

export const RARITY_COLORS: Record<RarityKey, string> = {
  LR:    "#FF3C3C", // 赤
  "LR★": "#c4b5fd", // 紫（LRP）← 候補と同じ薄い紫に変更
  CP:    "#A0FFA0", // 薄緑
  "CP★": "#FF7F29", // 橙（CPP）
  SR:    "#FFFFA0", // 薄黄
  "SR★": "#FF7F29", // 橙（SRP）
  R:     "#A0FFFF", // 水色
  N:     "#FFFFFF", // 白
};


// 表記ゆれ/同義語 → 正規キー
const ALIASES: Record<string, RarityKey> = {
  // LRP
  "LRP": "LR★", "LR_P": "LR★", "LR★": "LR★",
  // SRP
  "SRP": "SR★", "SR_P": "SR★", "SR★": "SR★", "PA": "SR★",
  // CPP
  "CPP": "CP★", "CP_P": "CP★", "CP★": "CP★",

  // ベース
  "LR": "LR", "SR": "SR", "R": "R", "CP": "CP",
  "N": "N", "NORM": "N", "NORMAL": "N", "0": "N",
};

// 文字列の中から「LR|SR|CP|R ＋ 隣接の P/★」だけを抽出
const TOKEN_RE = /(LR|SR|CP|R)(?:\s*(?:P|★))?/i;

export const normalizeRarity = (raw?: string): RarityKey => {
  if (!raw) return "N";

  // 半角化＆整形
  const s0 = toHalf(String(raw)).toUpperCase().trim();
  const s1 = s0.replace(/\s+|_/g, "");

  // 1) 直接一致
  if ((RARITY_COLORS as any)[s0]) return s0 as RarityKey;
  if ((RARITY_COLORS as any)[s1]) return s1 as RarityKey;

  // 2) エイリアス一致
  if (ALIASES[s0]) return ALIASES[s0];
  if (ALIASES[s1]) return ALIASES[s1];

  // 3) テキストから厳密抽出（隣接しているときだけ P/★ を認める）
  const m = s0.match(TOKEN_RE);
  if (m) {
    const base = m[1] as "LR" | "SR" | "CP" | "R";
    const withP = /P|★/i.test(m[0]); // 抽出された“同じトークン内”に P/★ があるか
    return (withP ? (base + "★") : base) as RarityKey;
  }

  // それ以外は N
  return "N";
};

export const colorForRarity = (raw?: string): string =>
  RARITY_COLORS[normalizeRarity(raw)];

// ===== DevTools 用のデバッグフック =====
declare global { interface Window { __rar?: any; debugRarity?: (raw: string) => any } }
if (typeof window !== "undefined") {
  window.__rar = window.__rar || {};
  window.__rar.colorForRarity = colorForRarity;
  window.__rar.normalizeRarity = normalizeRarity;
  window.__rar.toHalf = toHalf;
  window.debugRarity = (raw: string) => {
    const norm = normalizeRarity(raw);
    return { input: raw, norm, color: colorForRarity(raw) };
  };
}
