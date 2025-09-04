// src/lib/cx3RowsHL.ts
// CX-3: rows[]（行×列）ベースでセル単位ハイライトを作るユーティリティ。
// 目的：欠番（空白セル）で赤枠が伸びる問題を解消する。セル単位でピンポイントに枠を出す。

import type { PositionRow } from "./cx3";

/** r{row}c{col} 形式のセルキー */
export type CellKey = `r${number}c${number}`;
const cellKey = (row: number, col: number) => `r${row}c${col}` as CellKey;

/** "69/70" → ["69","70"]、"03p" → ["03P"] のように分解＋大文字化 */
const splitCellTokens = (s: string) =>
  s.split("/").map((t) => t.trim()).filter(Boolean).map((t) => t.toUpperCase());

/**
 * 行オブジェクトから「描画対象の列配列」を取り出す。
 * - row.cols があれば最優先
 * - 無ければ Object.values をそのまま並び順で返す（CSVの列順想定）
 *   ※ 文字列/undefined/null 以外は除去。行ラベル等を値として使っていても、ターゲット集合に無ければヒットしないのでOK。
 */
const readCols = (row: PositionRow): (string | null | undefined)[] => {
  const anyRow = row as any;
  if (Array.isArray(anyRow.cols)) return anyRow.cols as (string | null | undefined)[];
  const vals = Object.values(anyRow).filter(
    (v) => typeof v === "string" || v == null
  ) as (string | null | undefined)[];
  return vals;
};

/** 与えた targetNumbers（例: ["69","70P"]）と一致するセルを rows[] から抽出 */
export function buildCx3Hits(
  rows: PositionRow[],
  targetNumbers: Iterable<string>
): { row: number; col: number; value: string }[] {
  const targets = new Set(Array.from(targetNumbers, (t) => t.toUpperCase()));
  const hits: { row: number; col: number; value: string }[] = [];

  rows.forEach((row, r) => {
    const cols = readCols(row);
    cols.forEach((val, c) => {
      if (!val) return;
      const tokens = splitCellTokens(String(val));
      if (tokens.some((tok) => targets.has(tok))) {
        hits.push({ row: r, col: c, value: String(val) });
      }
    });
  });

  return hits;
}

/** rows[] からハイライト用 Set<CellKey> を作る */
export function makeHLCx3(
  rows: PositionRow[],
  targetNumbers: Iterable<string>
): Set<CellKey> {
  const set = new Set<CellKey>();
  for (const h of buildCx3Hits(rows, targetNumbers)) {
    set.add(cellKey(h.row, h.col));
  }
  return set;
}

/** isHighlighted(row,col) を作るヘルパー（UI側で使いやすいように） */
export function isHighlightedFactory(hl: Set<CellKey>) {
  return (row: number, col: number) => hl.has(cellKey(row, col));
}

/** もし描画側が 2次元配列（string[][]）を直接持っている場合用のバリアント */
export function makeHLCx3FromCols(
  colsMatrix: (string | null | undefined)[][],
  targetNumbers: Iterable<string>
): Set<CellKey> {
  const targets = new Set(Array.from(targetNumbers, (t) => t.toUpperCase()));
  const set = new Set<CellKey>();
  colsMatrix.forEach((cols, r) => {
    cols.forEach((val, c) => {
      if (!val) return;
      const tokens = splitCellTokens(String(val));
      if (tokens.some((tok) => targets.has(tok))) {
        set.add(cellKey(r, c));
      }
    });
  });
  return set;
}
