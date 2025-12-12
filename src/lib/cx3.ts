// CX-3 用の CSV ローダー（カード定義 & 位置）
import { K, toHalf } from "./rarity";

export type CardRow = { no: number; code: string; rarity: string; name: string };
export type PositionRow = { no: number } & Record<`col${number}`, number[] | string[]>;

function parseCsv(text: string): any[] {
  const [h, ...rows] = text.split(/\r?\n/).filter(Boolean);
  const heads = h.split(",").map(s => s.trim());
  return rows.map(line => {
    const cols = [];
    let cur = "", inQ = false;
    for (let i=0;i<line.length;i++){
      const ch = line[i];
      if (ch === '"'){ inQ = !inQ; continue; }
      if (ch === "," && !inQ){ cols.push(cur); cur=""; continue; }
      cur += ch;
    }
    cols.push(cur);
    const obj: any = {};
    heads.forEach((k, i) => (obj[k] = cols[i]));
    return obj;
  });
}

export async function loadCards(url: string): Promise<CardRow[]> {
  const txt = await fetch(url).then(r => r.text());
  const arr = parseCsv(txt);
  return arr.map((r: any) => ({
    no: Number(r.no ?? r.No ?? r.NO ?? 0),
    code: String(r.code ?? ""),
    rarity: String(r.rarity ?? r.rar ?? ""),
    name: String(r.name ?? ""),
  }));
}

export async function loadPositions(url: string): Promise<PositionRow[]> {
  const txt = await fetch(url).then(r => r.text());
  const arr = parseCsv(txt);
  const out: PositionRow[] = [];

  for (const r of arr) {
    const rowNo = Number(r.no ?? r.No ?? r.row ?? r.Row ?? r.行 ?? 0);
    if (!rowNo) continue;
    const p: any = { no: rowNo };

    // ★ CX100 対応版 parseCell
    const parseCell = (val: any) => {
      // 数値として来たらそのまま 1 個の配列に
      if (typeof val === "number") {
        return { nums: [val], tokens: [String(val)] as string[] };
      }

      let s = String(val ?? "").trim();

      // 空セル
      if (!s) return { nums: [], tokens: [] as string[] };

      // "23" みたいな単数の数字だけ
      if (/^\d+$/.test(s)) {
        const n = Number(s);
        return { nums: [n], tokens: [String(n)] as string[] };
      }

      // "23,10" みたいに数字とカンマ(＋空白)だけ
      if (/^[\d,\s]+$/.test(s)) {
        const parts = s.split(/[^0-9]+/).filter(Boolean);
        const nums = parts.map(n => Number(n));
        const tokens = parts as string[];
        return { nums, tokens };
      }

      // それ以外（P付きなど）は従来ロジック
      const tokens = s
        .split(/[^0-9Pp]+/)
        .filter(Boolean)
        .map(t => toHalf(t).toUpperCase());

      const nums = tokens
        .map(t => parseInt(t.replace(/[^0-9]/g, ""), 10))
        .filter(n => Number.isFinite(n));

      return { nums, tokens };
    };

    for (let c = 1; c <= 12; c++) {
      const v = r[`col${c}`] ?? r[`c${c}`] ?? r[String(c)];
      const { nums, tokens } = parseCell(v);

      // 数値（GL検出用）とトークン（表示用）の両方を保持
      (p as any)[`col${c}`] = nums;
      (p as any)[`raw${c}`] = tokens;
    }

    out.push(p);
  }

  return out;
}


// 「03P/09P/37P だけ紫」の判定用
export const SPECIAL_P = new Set(["03P","09P","37P","3P","9P","37P"]);
