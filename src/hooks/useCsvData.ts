// src/hooks/useCsvData.ts
// CSV を読み込んで { rows, sets, loading, error, reload } を返すフック。
// BASE_URL が /legends-finder/ のようにサブパスな場合でも、/xxx.csv を
// /legends-finder/xxx.csv に“強制”で付け替える toAbs を実装。

import { useEffect, useMemo, useState } from "react";

/** 1行ずつ CSV をパース（"..." に対応、BOM 除去） */
function parseCsv(text: string): any[] {
  // BOM 除去
  const t = text.replace(/^\uFEFF/, "");
  const lines = t.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const heads = splitCsvLine(lines[0]);
  const rows: any[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = splitCsvLine(lines[i]);
    const obj: any = {};
    heads.forEach((h, idx) => (obj[h] = cols[idx] ?? ""));
    rows.push(obj);
  }
  return rows;
}

/** CSV 1行を分割（カンマ＆ダブルクォート対応） */
function splitCsvLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      // 連続する "" はエスケープされた "
      if (inQ && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQ = !inQ;
      }
      continue;
    }
    if (ch === "," && !inQ) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

/** BASE_URL を考慮して絶対 URL を作る（今回のキモ） */
const toAbs = (p: string): string => {
  if (!p) return "";
  // すでに http(s)
  if (/^https?:\/\//i.test(p)) return p;

  const baseEnv = (import.meta as any)?.env?.BASE_URL || "/";
  const base = baseEnv.startsWith("/") ? baseEnv : `/${baseEnv}`;
  const baseNorm = base.endsWith("/") ? base : `${base}/`;
  const origin =
    typeof window !== "undefined" && (window as any).location?.origin
      ? (window as any).location.origin.replace(/\/+$/, "")
      : "";

  // 先頭が / のパスでも、BASE_URL が "/" でないなら BASE_URL 配下に付け替える
  if (p.startsWith("/")) {
    return origin + (baseNorm === "/" ? p : baseNorm + p.replace(/^\/+/, ""));
  }
  // 相対パスは常に BASE_URL を前置
  return origin + baseNorm + p.replace(/^\/+/, "");
};

/** CSV の候補「弾」を抽出（set / series / シリーズ / 弾 を統一） */
function deriveSets(rows: any[]): string[] {
  const seen = new Set<string>();
  for (const r of rows) {
    const key = String(
      r?.set ?? r?.series ?? r?.["シリーズ"] ?? r?.["弾"] ?? ""
    )
      .trim()
      .toUpperCase();
    if (key) seen.add(key);
  }
  return [...seen].sort((a, b) => {
    const na = parseInt(a.replace(/\D+/g, ""), 10);
    const nb = parseInt(b.replace(/\D+/g, ""), 10);
    if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
    return a.localeCompare(b, "ja");
  });
}

/** デフォルトの CSV パス（環境変数優先） */
const DEFAULT_URL =
  (import.meta as any)?.env?.VITE_CSV_URL || "cards.sample.csv";

export function useCsvData(csvUrl?: string) {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [nonce, setNonce] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const url = toAbs(csvUrl || DEFAULT_URL);
        // デバッグしたい時はコメント外して確認してください
        // console.log("[useCsvData] finalUrl =", url);

        const res = await fetch(url, { cache: "no-cache" });
        if (!res.ok) {
          throw new Error(`CSV fetch failed: ${res.status} ${res.statusText}`);
        }
        const text = await res.text();
        const arr = parseCsv(text);
        if (!cancelled) setRows(arr);
      } catch (e: any) {
        if (!cancelled) setError(e instanceof Error ? e : new Error(String(e)));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [csvUrl, nonce]);

  const sets = useMemo(() => deriveSets(rows), [rows]);
  const reload = () => setNonce((n) => n + 1);

  return { rows, sets, loading, error, reload };
}

export type UseCsvDataReturn = ReturnType<typeof useCsvData>;
