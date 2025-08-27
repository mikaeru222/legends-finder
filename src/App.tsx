// src/App.tsx
import { useEffect, useMemo, useState } from "react";
import { useCsvData } from "./hooks/useCsvData";
import { circledCol, matchAll, parsePattern } from "./lib/matcher";
import { useSearchHistory, type HistoryItem } from "./hooks/useSearchHistory";
import { loadCards as loadCx3Cards, loadPositions, type PositionRow, SPECIAL_P } from "./lib/cx3";
import { colorForRarity, toHalf } from "./lib/rarity";

/* ========= ユーティリティ ========= */
const abs = (path: string) => {
  try {
    const baseEnv = (import.meta as any)?.env?.BASE_URL;
    const base = (typeof baseEnv === "string" && baseEnv.length) ? baseEnv : "/";
    const origin = (typeof window !== "undefined" && window.location?.origin)
      ? window.location.origin
      : "http://localhost";
    const baseNorm = base.startsWith("/") ? base : ("/" + base);
    return origin.replace(/\/+$/, "") + baseNorm + String(path).replace(/^\/+/, "");
  } catch { return "/" + String(path).replace(/^\/+/, ""); }
};
const CSV_URL = import.meta.env.VITE_CSV_URL || abs("cards.cx3.csv");
const MAX_LR_CANDIDATES = 4;           // LR/紫P 候補の最大表示数
const SEARCH_BLUE = "#1677FF";         // 検索ボタンの統一色

const CIRCLED_MAP: Record<string, number> = { "①":1,"②":2,"③":3,"④":4,"⑤":5,"⑥":6,"⑦":7,"⑧":8,"⑨":9,"⑩":10,"⑪":11,"⑫":12 };
const toNum = (v:any):number => {
  if (v==null) return NaN;
  const s0 = String(v).trim();
  if (s0 in CIRCLED_MAP) return CIRCLED_MAP[s0 as keyof typeof CIRCLED_MAP];
  const s1 = toHalf(s0).replace(/[()（）［］\[\]\s]/g,"");
  const m = s1.match(/\d+/);
  return m ? parseInt(m[0],10) : NaN;
};
const normalizeCyl = (v:any):"L"|"R" => {
  const raw = String(v ?? "").trim();
  const a = toHalf(raw).toUpperCase();
  if (a.startsWith("R") || raw.includes("右")) return "R";
  return "L";
};

type ByCyl = { L: Record<number, any[]>; R: Record<number, any[]> };
type BuiltIndex = { byCyl: ByCyl; maxRow: number };
function buildIndexLocal(rows: any[]): BuiltIndex {
  const byCyl: ByCyl = { L: {}, R: {} };
  let maxRow = 0;
  for (const r of rows) {
    const cyl = normalizeCyl(r.cyl ?? r["シリンダー"] ?? r["cyl"]);
    const col = toNum(r.col ?? r["列"] ?? r["col"]);
    const row = toNum(r.row ?? r["行"] ?? r["row"]);
    if (!col || !row) continue;
    if (!byCyl[cyl][col]) byCyl[cyl][col] = [];
    byCyl[cyl][col].push({ ...r, row });
    if (row > maxRow) maxRow = row;
  }
  (["L","R"] as const).forEach(k=>{
    Object.keys(byCyl[k]).forEach(c=>{
      byCyl[k][Number(c)].sort((a:any,b:any)=>a.row-b.row);
    });
  });
  return { byCyl, maxRow };
}

type Route = "home" | "leftResults" | "rightResults";
const routeFromHash = (): Route => {
  const h = (location.hash || "").replace("#/","");
  if (h === "leftResults") return "leftResults";
  if (h === "rightResults") return "rightResults";
  return "home";
};
const nav = (r: Route) => { location.hash = "/" + r; };

type Six = [string,string,string,string,string,string];
const blank6: Six = ["","","","","",""];
const isCx3 = (setKey: string) => /CX3|XC3|CX-3/i.test(setKey);

/* ========= App ========= */
export default function App() {
  // GL 系（従来 CSV）
  const { rows, sets, loading, error, reload } = useCsvData(CSV_URL);
  const rowsNorm = useMemo(() => rows.map(r => ({ ...r, set: String(r?.set ?? r?.series ?? r?.["シリーズ"] ?? r?.["弾"] ?? "").trim().toUpperCase() })), [rows]);

  const setOptions = useMemo(() => {
    const seen = new Set<string>();
    rowsNorm.forEach(r => { const key = String(r.set || "").trim(); if (key) seen.add(key); });
    const arr = [...seen];
    if (!arr.includes("CX3")) arr.push("CX3");
    return arr.sort((a,b)=>{
      const na = parseInt(a.replace(/\D+/g,""),10);
      const nb = parseInt(b.replace(/\D+/g,""),10);
      if (!Number.isNaN(na) && !Number.isNaN(nb)) return na-nb;
      return a.localeCompare(b,"ja");
    });
  }, [rowsNorm]);

  const [leftSet, setLeftSet] = useState("CX3");
  const [rightSet, setRightSet] = useState("CX3");
  useEffect(()=>{ if (!leftSet) setLeftSet("CX3"); if (!rightSet) setRightSet("CX3"); },[]);

  const [L, setL] = useState<Six>(blank6);
  const [R, setR] = useState<Six>(blank6);
  const [lQuery, setLQuery] = useState<number[]>([]);
  const [rQuery, setRQuery] = useState<number[]>([]);
  const [route, setRoute] = useState<Route>(routeFromHash());
  const [dirL, setDirL] = useState<"down"|"up">("down"); // 通常=下向き、逆引き=上向き
  const [dirR, setDirR] = useState<"down"|"up">("down");
  useEffect(()=>{ const onHash=()=>setRoute(routeFromHash()); window.addEventListener("hashchange",onHash); return ()=>window.removeEventListener("hashchange",onHash); },[]);

  // GL 用インデックス（CX3 選択時でも生成はしておく）
  const rowsL   = useMemo(() => rowsNorm.filter(r => r.set === leftSet),  [rowsNorm, leftSet]);
  const rowsR   = useMemo(() => rowsNorm.filter(r => r.set === rightSet), [rowsNorm, rightSet]);
  const leftIdx  = useMemo(() => buildIndexLocal(rowsL),  [rowsL]);
  const rightIdx = useMemo(() => buildIndexLocal(rowsR), [rowsR]);

  // GL の逆引きは従来通り「パターンのみ反転」
  const lHitsGL = useMemo(() => {
    const p = dirL === "up" ? [...lQuery].reverse() : lQuery;
    return (leftSet && p.length ? matchAll(rowsNorm, leftSet, "L", p) : []);
  }, [rowsNorm, leftSet, lQuery, dirL]);

  const rHitsGL = useMemo(() => {
    const p = dirR === "up" ? [...rQuery].reverse() : rQuery;
    return (rightSet && p.length ? matchAll(rowsNorm, rightSet, "R", p) : []);
  }, [rowsNorm, rightSet, rQuery, dirR]);

  // 履歴
  const histL = useSearchHistory(`legends:${leftSet}:L`);
  const histR = useSearchHistory(`legends:${rightSet}:R`);
  const [openHistL, setOpenHistL] = useState(false);
  const [openHistR, setOpenHistR] = useState(false);
  function restoreL(item: HistoryItem){ setL(toSix(item.pattern)); setLQuery(item.pattern); setDirL(item.rev?"up":"down"); nav("leftResults"); }
  function restoreR(item: HistoryItem){ setR(toSix(item.pattern)); setRQuery(item.pattern); setDirR(item.rev?"up":"down"); nav("rightResults"); }

  const runSearchL    = () => { const p = parsePattern([...L]); setLQuery(p); setDirL("down"); histL.add(p,false); nav("leftResults"); }
  const runSearchLRev = () => { const p = parsePattern([...L]); setLQuery(p); setDirL("up");   histL.add(p,true);  nav("leftResults"); }
  const clearL        = () => { setL(blank6); setLQuery([]); }
  const runSearchR    = () => { const p = parsePattern([...R]); setRQuery(p); setDirR("down"); histR.add(p,false); nav("rightResults"); }
  const runSearchRRev = () => { const p = parsePattern([...R]); setRQuery(p); setDirR("up");   histR.add(p,true);  nav("rightResults"); }
  const clearR        = () => { setR(blank6); setRQuery([]); }

  /* ===== CX3 カード辞書（コード→レア/名前） ===== */
  const [cx3KeyRarity, setCx3KeyRarity] = useState<Map<string,string>>(new Map());
  const [cx3KeyName,   setCx3KeyName]   = useState<Map<string,string>>(new Map());
  useEffect(() => { (async ()=>{
    try{
      const cards = await loadCx3Cards(abs("cards.cx3.csv"));
      const mpR = new Map<string,string>();
      const mpN = new Map<string,string>();
      for (const c of cards as any[]) {
        const code = String(c.code || "");
        const name = String(c.name || "");
        const m = code.toUpperCase().match(/(\d+)(P)?$/);
        if (!m) continue;
        const key = m[1] + (m[2] ? "P" : "");
        if (!mpR.has(key)) mpR.set(key, String(c.rarity || ""));
        if (name && !mpN.has(key)) mpN.set(key, name);
      }
      setCx3KeyRarity(mpR);
      setCx3KeyName(mpN);
      console.log("CX3 cards ready. keys=", mpR.size);
    }catch(e){ console.warn("cards.cx3.csv 読込失敗:", e); }
  })() }, []);

  // P/非P を厳密に：先頭ゼロは吸収、P の有無は区別
  const getRarityByTokenStrict = (rawToken: string): string | undefined => {
    const t = toHalf(String(rawToken || "")).toUpperCase().trim();
    const direct = cx3KeyRarity.get(t);
    if (direct) return direct;
    const m = t.match(/^(\d+)(P)?$/);
    if (!m) return undefined;
    const n  = String(parseInt(m[1],10));
    const n2 = n.padStart(2,"0");
    const wantP = !!m[2];
    if (wantP) return cx3KeyRarity.get(`${n}P`) || cx3KeyRarity.get(`${n2}P`);
    return cx3KeyRarity.get(n) || cx3KeyRarity.get(n2);
  };

  const getNameByTokenStrict = (rawToken: string): string | undefined => {
    const t = toHalf(String(rawToken || "")).toUpperCase().trim();
    const direct = cx3KeyName.get(t);
    if (direct) return direct;
    const m = t.match(/^(\d+)(P)?$/);
    if (!m) return undefined;
    const n  = String(parseInt(m[1],10));
    const n2 = n.padStart(2,"0");
    const wantP = !!m[2];
    if (wantP) return cx3KeyName.get(`${n}P`) || cx3KeyName.get(`${n2}P`);
    return cx3KeyName.get(n) || cx3KeyName.get(n2);
  };

  /* ===== 位置 CSV（CX3） ===== */
  const [cx3Pos, setCx3Pos] = useState<PositionRow[]>([]);
  const [rowIndexCols, setRowIndexCols] = useState<Set<number>>(new Set());
  useEffect(() => { (async ()=>{
    try{
      const raw:any[] = await loadPositions(abs("cx3_positions.csv"));
      // 行番号カラムの自動判定
      const idx = new Set<number>();
      for (let c=1;c<=12;c++){
        let total = 0, pureNo = 0, hasOther = 0;
        for (const r of raw){
          const arr = (r as any)[`col${c}`] as number[] | undefined;
          total++;
          if (!arr?.length) continue;
          if (arr.length === 1 && arr[0] === r.no) pureNo++;
          else hasOther++;
        }
        if (total>0 && pureNo/total >= 0.9 && hasOther === 0) idx.add(c);
      }
      setCx3Pos(raw);
      setRowIndexCols(idx);
      console.log("CX3 mode ready: positions", raw.length, "rows. indexCols=", [...idx]);
    }catch(e){ console.warn("cx3_positions.csv 読込失敗:", e); }
  })() }, []);

  /* ===== 検索（CX3） ===== */
  type Cx3Hit = { col:number; row:number; matched:number[]; nextLRSteps:number; nextLRMany?:number[]; dir:"down"|"up" };

  // 下向き（通常）
  function findSubseqMultiDown(seq: number[][], pat: number[]): number[] {
    if (!pat.length) return [];
    const res:number[] = [];
    const m = pat.length;
    for (let i=0;i<=seq.length-m;i++){
      let ok = true;
      for (let j=0;j<m;j++){
        const cell = seq[i+j] || [];
        if (!cell.some(v => Number(v) === Number(pat[j]))) { ok = false; break; }
      }
      if (ok) res.push(i+m); // 1-based 末尾行
    }
    return res;
  }
  // 上向き（逆引き：下→上に走査）
  function findSubseqMultiUp(seq: number[][], pat: number[]): number[] {
    if (!pat.length) return [];
    const res:number[] = [];
    const m = pat.length;
    for (let top=m-1; top<seq.length; top++){
      let ok = true;
      for (let j=0;j<m;j++){
        const cell = seq[top-j] || [];
        if (!cell.some(v => Number(v) === Number(pat[j]))) { ok = false; break; }
      }
      if (ok) res.push(top+1); // 1-based の「上端行」を row とする
    }
    return res;
  }

  function buildCx3Hits(
    positions: PositionRow[], pat: number[], rowIndexCols: Set<number>, direction:"down"|"up"
  ): Cx3Hit[] {
    if (!pat.length || !positions?.length) return [];
    const sorted = positions.slice().sort((a,b)=>a.no-b.no);
    const cols: number[][][] = Array.from({length:12}, ()=>[]);
    for (const r of sorted) {
      for (let c=1;c<=12;c++){
        if (rowIndexCols.has(c)) cols[c-1].push([]);
        else {
          const rawArr = (r as any)[`col${c}`] as number[] | undefined;
          const arr = Array.isArray(rawArr) ? rawArr : [];
          const filtered = (arr.length === 1 && arr[0] === r.no) ? [] : arr;
          cols[c-1].push(filtered);
        }
      }
    }
    const hits: Cx3Hit[] = [];
    for (let c=1;c<=12;c++){
      const seq = cols[c-1];
      const rows = direction==="up" ? findSubseqMultiUp(seq, pat) : findSubseqMultiDown(seq, pat);
      for (const endRow of rows) {
        // 次行（方向に合わせる）
        const nextMany = direction==="up" ? (seq[endRow-2] || []) : (seq[endRow] || []);
        hits.push({ col:c, row:endRow, matched:[...pat], nextLRSteps: nextMany.length ? 1 : 0, nextLRMany: nextMany.length ? nextMany : undefined, dir: direction });
      }
    }
    return hits.sort((a,b)=> a.col-b.col || a.row-b.row);
  }

  // ヒット生成（CX3）
  const lHitsCX3_raw = useMemo(
    () => isCx3(leftSet)  ? buildCx3Hits(cx3Pos, lQuery, rowIndexCols, dirL) : [],
    [leftSet,  cx3Pos, lQuery, rowIndexCols, dirL]
  );
  const rHitsCX3_raw = useMemo(
    () => isCx3(rightSet) ? buildCx3Hits(cx3Pos, rQuery, rowIndexCols, dirR) : [],
    [rightSet, cx3Pos, rQuery, rowIndexCols, dirR]
  );

  /* ===== 方向対応：「先に LR/紫P が無いヒット」を除外 ===== */
  const rowMapByNo = useMemo(() => {
    const mp = new Map<number, PositionRow>();
    for (const r of cx3Pos) mp.set(r.no, r);
    return mp;
  }, [cx3Pos]);

  const hasFutureLRorPurple = (col:number, startRow:number, direction:"down"|"up") => {
    const allNos = cx3Pos.map(r=>r.no);
    const maxRowNo = allNos.length ? Math.max(...allNos) : 0;
    const minRowNo = allNos.length ? Math.min(...allNos) : 1;

    if (direction === "down") {
      for (let rr = startRow + 1; rr <= maxRowNo; rr++) {
        const rowObj = rowMapByNo.get(rr);
        const tokens = rowObj ? (rowObj as any)[`raw${col}`] as string[] | undefined : undefined;
        if (!Array.isArray(tokens) || !tokens.length) continue;
        for (const raw of tokens) {
          const t = String(raw).toUpperCase();
          const rar = getRarityByTokenStrict(t) || "";
          if (SPECIAL_P.has(t) || rar.toUpperCase() === "LR") return true;
        }
      }
      return false;
    } else {
      for (let rr = startRow - 1; rr >= minRowNo; rr--) {
        const rowObj = rowMapByNo.get(rr);
        const tokens = rowObj ? (rowObj as any)[`raw${col}`] as string[] | undefined : undefined;
        if (!Array.isArray(tokens) || !tokens.length) continue;
        for (const raw of tokens) {
          const t = String(raw).toUpperCase();
          const rar = getRarityByTokenStrict(t) || "";
          if (SPECIAL_P.has(t) || rar.toUpperCase() === "LR") return true;
        }
      }
      return false;
    }
  };

  const lHitsCX3 = useMemo(
    () => lHitsCX3_raw.filter(h => hasFutureLRorPurple(h.col, h.row, h.dir)),
    [lHitsCX3_raw, rowMapByNo, cx3Pos]
  );
  const rHitsCX3 = useMemo(
    () => rHitsCX3_raw.filter(h => hasFutureLRorPurple(h.col, h.row, h.dir)),
    [rHitsCX3_raw, rowMapByNo, cx3Pos]
  );

  const hlCx3L = useMemo(()=> makeHLCx3(lHitsCX3), [lHitsCX3]);
  const hlCx3R = useMemo(()=> makeHLCx3(rHitsCX3), [rHitsCX3]);

  /* ====== 次の LR / 紫P（方向対応） ====== */
  type Candidate = { code:string; name:string; dist:number; color:string; badge:string };
  const buildLinesForHit = (hit: Cx3Hit): Candidate[] => {
    const col = hit.col;
    const start = hit.row;
    const allNos = cx3Pos.map(r=>r.no);
    const maxRowNo = allNos.length ? Math.max(...allNos) : 0;
    const minRowNo = allNos.length ? Math.min(...allNos) : 1;
    const firstDist = new Map<string, number>();

    if (hit.dir === "down") {
      for (let rr = start + 1; rr <= maxRowNo; rr++) {
        const rowObj = rowMapByNo.get(rr);
        const tokens = rowObj ? (rowObj as any)[`raw${col}`] as string[] | undefined : undefined;
        if (!Array.isArray(tokens) || !tokens.length) continue;
        for (const raw of tokens) {
          const t = String(raw).toUpperCase();
          const rar = getRarityByTokenStrict(t) || "";
          if (!(SPECIAL_P.has(t) || rar.toUpperCase()==="LR")) continue;
          if (!firstDist.has(t)) firstDist.set(t, rr - start);
        }
      }
    } else {
      for (let rr = start - 1; rr >= minRowNo; rr--) {
        const rowObj = rowMapByNo.get(rr);
        const tokens = rowObj ? (rowObj as any)[`raw${col}`] as string[] | undefined : undefined;
        if (!Array.isArray(tokens) || !tokens.length) continue;
        for (const raw of tokens) {
          const t = String(raw).toUpperCase();
          const rar = getRarityByTokenStrict(t) || "";
          if (!(SPECIAL_P.has(t) || rar.toUpperCase()==="LR")) continue;
          if (!firstDist.has(t)) firstDist.set(t, start - rr); // 上向きは距離が逆
        }
      }
    }

    const items: Candidate[] = [];
    firstDist.forEach((dist, t) => {
      const isPurple = SPECIAL_P.has(t);
      const name = getNameByTokenStrict(t) || t;
      items.push({
        code: t,
        name,
        dist,
        color: isPurple ? "#B388FF" : "#EF4444",
        badge: isPurple ? "LR★" : "LR",
      });
    });
    return items.sort((a,b)=>a.dist-b.dist).slice(0, MAX_LR_CANDIDATES);
  };

  /* ========= UI ========= */
  return (
    <main className="app">
      <header className="header">
        <h1>ガンバレジェンズ配列表 検索ツール</h1>
        <div className="tools"><button onClick={reload}>再読込</button></div>
      </header>

      {route === "home" && (
        <>
          {/* 左 */}
          <section className="card">
            <div className="section-title">左シリンダー</div>
            <div className="select-row">
              <select value={leftSet} onChange={e=>{ setLeftSet(e.target.value); setOpenHistL(false); }}>
                {(setOptions.length ? setOptions : sets.length ? sets : ["CX3"]).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <button className="btn btn-teal" onClick={()=>setOpenHistL(!openHistL)}>履歴</button>
            </div>
            <Inputs6 value={L} onChange={(i,v)=>setL(setAt(L,i,v))} onEnter={runSearchL}/>
            <div className="actions3">
              <button className="btn btn-pink" onClick={runSearchLRev}>逆順検索</button>
              <button className="btn btn-gray" onClick={clearL}>クリア</button>
              <button className="btn btn-blue" style={{background:SEARCH_BLUE,borderColor:SEARCH_BLUE}} onClick={runSearchL}>検索</button>
            </div>
            {openHistL && <HistoryPanel items={histL.items} onRestore={restoreL} onDelete={(ts)=>histL.remove(ts)} onClear={histL.clear}/>}
          </section>

          {/* 右 */}
          <section className="card">
            <div className="section-title">右シリンダー</div>
            <div className="select-row">
              <select value={rightSet} onChange={e=>{ setRightSet(e.target.value); setOpenHistR(false); }}>
                {(setOptions.length ? setOptions : sets.length ? sets : ["CX3"]).map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <button className="btn btn-teal" onClick={()=>setOpenHistR(!openHistR)}>履歴</button>
            </div>
            <Inputs6 value={R} onChange={(i,v)=>setR(setAt(R,i,v))} onEnter={runSearchR}/>
            <div className="actions3">
              <button className="btn btn-pink" onClick={runSearchRRev}>逆順検索</button>
              <button className="btn btn-gray" onClick={clearR}>クリア</button>
              <button className="btn btn-blue" style={{background:SEARCH_BLUE,borderColor:SEARCH_BLUE}} onClick={runSearchR}>検索</button>
            </div>
            {openHistR && <HistoryPanel items={histR.items} onRestore={restoreR} onDelete={(ts)=>histR.remove(ts)} onClear={histR.clear}/>}
          </section>
        </>
      )}

      {route === "leftResults" && (
        <section className="card">
          <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:8 }}>
            <button className="btn btn-gray" onClick={()=>nav("home")}>← 戻る</button>
            <strong>左シリンダー結果</strong>
          </div>

          <ResultList
            hits={(isCx3(leftSet) ? lHitsCX3 : lHitsGL) as any}
            getLines={isCx3(leftSet) ? buildLinesForHit : undefined}
          />

          <div style={{ marginTop:12 }}>
            {isCx3(leftSet)
              ? <GridCx3
                  positions={cx3Pos}
                  rowIndexCols={rowIndexCols}
                  getRarityForKey={getRarityByTokenStrict}
                  highlight={hlCx3L}
                />
              : <Grid
                  byCyl={leftIdx.byCyl}
                  maxRow={Math.max(leftIdx.maxRow, 100)}
                  highlightCells={makeHLCells(lHitsGL,leftIdx.byCyl,"L")}
                  cylinder="L"
                />
            }
          </div>
        </section>
      )}

      {route === "rightResults" && (
        <section className="card">
          <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:8 }}>
            <button className="btn btn-gray" onClick={()=>nav("home")}>← 戻る</button>
            <strong>右シリンダー結果</strong>
          </div>

          <ResultList
            hits={(isCx3(rightSet) ? rHitsCX3 : rHitsGL) as any}
            getLines={isCx3(rightSet) ? buildLinesForHit : undefined}
          />

          <div style={{ marginTop:12 }}>
            {isCx3(rightSet)
              ? <GridCx3
                  positions={cx3Pos}
                  rowIndexCols={rowIndexCols}
                  getRarityForKey={getRarityByTokenStrict}
                  highlight={hlCx3R}
                />
              : <Grid
                  byCyl={rightIdx.byCyl}
                  maxRow={Math.max(rightIdx.maxRow, 100)}
                  highlightCells={makeHLCells(rHitsGL,rightIdx.byCyl,"R")}
                  cylinder="R"
                />
            }
          </div>
        </section>
      )}

      <div style={{ marginTop:8, fontSize:12, color:"#6b7280" }}>
        {loading && "読込中…"} {error && `エラー: ${error.message}`}
      </div>
    </main>
  );
}

/* ========= 小パーツ ========= */

function Inputs6({ value, onChange, onEnter }:{
  value: [string,string,string,string,string,string],
  onChange:(i:number,v:string)=>void, onEnter?:()=>void
}) {
  return (
    <div className="six-inputs">
      {value.map((v,i)=>(
        <input key={i} inputMode="numeric" placeholder={`(${i+1})`} value={v}
          onChange={e=>onChange(i, e.target.value.replace(/[^0-9]/g,""))}
          onKeyDown={e=>{ if(e.key==="Enter") onEnter?.(); }} />
      ))}
    </div>
  );
}

function HistoryPanel({ items, onRestore, onDelete, onClear }:{
  items: HistoryItem[], onRestore:(i:HistoryItem)=>void, onDelete:(ts:number)=>void, onClear:()=>void
}) {
  return (
    <div className="history-panel">
      <div className="history-row" style={{ justifyContent:"space-between" }}>
        <div className="history-meta">保存件数: {items.length}</div>
        <div className="history-actions"><button className="history-clear" onClick={onClear}>全消去</button></div>
      </div>
      {items.map(it=>(
        <div key={it.ts} className="history-row">
          <div>
            <div><strong>{it.pattern.join(" → ")}</strong>{it.rev ? "（逆順）":""}</div>
            <div className="history-meta">{new Date(it.ts).toLocaleString("ja-JP")}</div>
          </div>
          <div className="history-actions">
            <button className="history-restore" onClick={()=>onRestore(it)}>復元</button>
            <button className="history-delete" onClick={()=>onDelete(it.ts)}>削除</button>
          </div>
        </div>
      ))}
      {!items.length && <div className="history-meta">まだ履歴はありません。</div>}
    </div>
  );
}

/* === スマート表示（CX3時のみ） === */
function ResultList({ hits, getLines }:{
  hits: any[],
  getLines?: (hit:any)=>Array<{code:string; name:string; dist:number; color:string; badge:string}>
}) {
  if (!hits?.length) return <div style={{ color:"#666", marginTop:8 }}>一致はまだありません。</div>;
  const top = hits.slice(0,3); // 最短パターン：上位3件
  return (
    <div style={{ display:"grid", gap:10, marginTop:8 }}>
      <p style={{ margin:0 }}>
        <strong style={{ color:"crimson" }}>{top.length}</strong>件の最短パターンと一致しました。
      </p>
      {top.map((h,i)=>{
        const lines = getLines ? getLines(h) : undefined;
        return (
          <div key={i} className="result">
            <div style={{ marginBottom:6 }}>
              ヒット位置: <strong>{circledCol(h.col)}</strong> の <strong>{h.row}番目</strong>
            </div>

            {!lines ? (
              <div style={{ marginBottom:6 }}>
                {Array.isArray(h.nextLRMany) && h.nextLRMany.length ? (
                  <>次: <strong>{h.nextLRMany.join("/")}</strong></>
                ) : (
                  <>（あと <strong style={{ color:"crimson" }}>{h.nextLRSteps ?? 0}</strong> 回です）</>
                )}
              </div>
            ) : (
              <div style={{ display:"grid", gap:6 }}>
                {lines.map(b=>(
                  <div key={b.code} style={{ display:"flex", alignItems:"center", flexWrap:"wrap", gap:8, lineHeight:1.35 }}>
                    <span style={{ opacity:0.8, fontSize:14 }}>（あと <strong>{b.dist}</strong> 回です）</span>
                    <span style={{
                      display:"inline-flex", alignItems:"center", gap:4,
                      padding:"2px 8px", borderRadius:6, background:b.color, color:"#fff",
                      fontWeight:700, fontSize:14
                    }}>
                      {b.badge}
                    </span>
                    <span style={{ fontSize:15 }}>
                      {b.code}:{b.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Grid({ byCyl, maxRow, highlightCells, cylinder }:{
  byCyl:any, maxRow:number, highlightCells:Set<string>, cylinder:"L"|"R",
}) {
  const show: Record<number, any[]> = byCyl?.[cylinder] || {};
  const cols = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className="grid-wrap">
      <table className="grid">
        <thead>
          <tr>
            <th style={{ width:36 }}></th>
            {cols.map(c=> <th key={c}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length:maxRow }, (_,r)=>r+1).map(row=>(
            <tr key={row}>
              <td className="rowhead">{row}</td>
              {cols.map(c=>{
                const cell = (show[c] || []).find((x:any)=>x.row===row);
                const isHL = highlightCells?.has?.(`${c}:${row}`);
                const num = cell?.num;
                return (
                  <td key={c} className={`cell ${isHL?"hl":""}`}
                      style={{ background: colorForRarity(cell?.rarity) }}>
                    {typeof num === "number" ? num : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GridCx3({
  positions, rowIndexCols, getRarityForKey, highlight
}:{
  positions: PositionRow[], rowIndexCols: Set<number>,
  getRarityForKey: (key:string)=>string|undefined,
  highlight?: Set<string>
}) {
  const allCols = Array.from({ length: 12 }, (_, i) => i + 1);
  const dataCols = allCols.filter(c => !rowIndexCols?.has?.(c));
  const viewCols = Array.from({ length: 12 }, (_, i) => dataCols[i] ?? null);
  const rows = [...positions].sort((a,b)=>a.no-b.no);

  return (
    <div className="grid-wrap">
      <table className="grid">
        <thead>
          <tr>
            <th style={{ width:36 }}></th>
            {viewCols.map((_, i) => <th key={i}>{circledCol(i+1)}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.no}>
              <td className="rowhead">{r.no}</td>
              {viewCols.map((colIdx, i) => {
                const tokens = colIdx ? ((r as any)[`raw${colIdx}`] as string[] | undefined) : undefined;
                const vals = Array.isArray(tokens) ? tokens : [];
                const isMono = vals.length === 1;
                const token = vals[0];
                const rarKey = isMono ? getRarityForKey(token!) : undefined;
                const isHL = colIdx ? highlight?.has?.(`${colIdx}:${r.no}`) : false;

                const monoBg = ((): string => {
                  if (!isMono) return "#FFFFFF";
                  const t = token!.toUpperCase();
                  if (SPECIAL_P.has(t)) return "#B388FF"; // 紫P
                  const rar = rarKey || "";
                  if (rar.toUpperCase() === "N") return "#FFFFFF";
                  return colorForRarity(rar);
                })();

                const baseStyle: React.CSSProperties = {
                  background: isMono ? monoBg : "#FFFFFF",
                  padding: 2, fontSize: isMono ? 12 : 10,
                  lineHeight: 1.15, verticalAlign: "middle",
                  whiteSpace: "normal", wordBreak: "break-all",
                  boxShadow: isHL ? "inset 0 0 0 3px #ef4444" : undefined
                };

                return (
                  <td key={i} className="cell" style={baseStyle} title={vals.join("/")}>
                    {isMono ? (
                      token ?? ""
                    ) : (
                      <div style={{ display:"flex", flexWrap:"wrap", gap:2, justifyContent:"center" }}>
                        {vals.map((k,idx)=>{
                          const t = String(k).toUpperCase();
                          const rar = getRarityForKey(t) || "";
                          const bg =
                            SPECIAL_P.has(t) ? "#B388FF" :
                            rar.toUpperCase()==="N" ? "#FFFFFF" :
                            colorForRarity(rar);
                          return (
                            <span key={idx}
                              style={{
                                display:"inline-block", padding:"0 2px", borderRadius:3,
                                fontSize:10, lineHeight:1.2, background:bg,
                                border:"1px solid rgba(0,0,0,0.06)"
                              }}>
                              {k}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ========= 共通 util ========= */
function setAt<T extends any[]>(arr:T, idx:number, v:string):T {
  const copy = [...arr] as T; (copy as any)[idx] = v; return copy;
}
function toSix(nums:number[]):[string,string,string,string,string,string] {
  const s = nums.map(n=>String(n));
  return [s[0]||"", s[1]||"", s[2]||"", s[3]||"", s[4]||"", s[5]||""];
}
function makeHLCx3(hits: Array<{col:number; row:number; matched:number[]; dir:"down"|"up"}>): Set<string> {
  const out = new Set<string>();
  for (const h of hits) {
    const len = h.matched.length;
    if (h.dir === "down") {
      const start = h.row - (len - 1);
      for (let j=0;j<len;j++){ const rr = start + j; if (rr > 0) out.add(`${h.col}:${rr}`); }
    } else {
      const start = h.row; // 上端から上向きに len 個
      for (let j=0;j<len;j++){ const rr = start - j; if (rr > 0) out.add(`${h.col}:${rr}`); }
    }
  }
  return out;
}
function makeHLCells(hits: any[], byCyl:any, cyl:"L"|"R"): Set<string> {
  const out = new Set<string>(); if (!hits?.length) return out;
  const cols = byCyl?.[cyl] || {};
  for (const h of hits) {
    const seq = (cols[h.col] || []) as { row:number }[];
    const tailIdx = seq.findIndex(x=>x.row===h.row); if (tailIdx < 0) continue;
    const len = h.matched.length; const start = tailIdx - (len - 1);
    for (let j=0;j<len;j++){
      const r = seq[start+j]?.row;
      if (typeof r === "number") out.add(`${h.col}:${r}`);
    }
  }
  return out;
}
