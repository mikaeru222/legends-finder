// apply_cx4_full_fix.js
// Usage: node scripts/apply_cx4_full_fix.js
// It will patch src/App.tsx in place and create src/App.tsx.bak

const fs = require('fs');
const path = require('path');

const APP = path.join(process.cwd(), 'src', 'App.tsx');
if (!fs.existsSync(APP)) {
  console.error('src/App.tsx が見つかりません。プロジェクトのルートで実行してください。');
  process.exit(1);
}

const src = fs.readFileSync(APP, 'utf8');
fs.writeFileSync(APP + '.bak', src, 'utf8');

let out = src;

// --- 1) Candidate の badge を拡張
out = out.replace(
  /type\s+Candidate\s*=\s*\{\s*code:string;\s*name:string;\s*dist:number;\s*color:string;\s*badge:"LR"\|"LR★"\s*\};/,
  'type Candidate = { code:string; name:string; dist:number; color:string; badge:"LR"|"LR★"|"CP"|"CP★" };'
);

// --- 2) buildLinesForHit の高レア判定・バッジ設定を拡張
out = out.replace(
  /const\s+buildLinesForHit\s*=\s*\(hit:\s*Cx3Hit,\s*positions:\s*PositionRow\[\]\)\s*=>\s*\{\s*([\s\S]*?)\s*return\s+items\.sort\(\(a,b\)\s*=>\s*a\.dist\s*-\s*b\.dist\)\.slice\(0,\s*MAX_LR_CANDIDATES\);\s*\};/,
  (m, body) => {
    // We will rebuild the function in a robust way, not relying on the captured body.
    return `const buildLinesForHit = (hit: Cx3Hit, positions: PositionRow[]): Candidate[] => {
    const col = hit.col;
    const start = hit.row;
    const rowMap = new Map<number, PositionRow>(positions.map(r => [r.no, r]));
    const allNos = positions.map(r => r.no);
    const maxRowNo = allNos.length ? Math.max(...allNos) : 0;
    const minRowNo = allNos.length ? Math.min(...allNos) : 1;

    const firstDist = new Map<string, number>();
    if (hit.dir === "down") {
      for (let rr = start + 1; rr <= maxRowNo; rr++) {
        const row = rowMap.get(rr);
        const tokens = row ? (row as any)[\`raw\${col}\`] as string[] | undefined : undefined;
        if (!Array.isArray(tokens) || tokens.length === 0) continue;
        for (const raw of tokens) {
          const t = String(raw).toUpperCase();
          const rar = (getRarityByTokenStrict(t) || "").toUpperCase();

          // 高レア判定：SPECIAL_P / LR系 / CP系
          if (!(SPECIAL_P.has(t) || /^LR/i.test(rar) || /^CP/i.test(rar))) continue;
          if (!firstDist.has(t)) firstDist.set(t, rr - start);
        }
        if (firstDist.size >= MAX_LR_CANDIDATES) break;
      }
    } else {
      for (let rr = start - 1; rr >= minRowNo; rr--) {
        const row = rowMap.get(rr);
        const tokens = row ? (row as any)[\`raw\${col}\`] as string[] | undefined : undefined;
        if (!Array.isArray(tokens) || tokens.length === 0) continue;
        for (const raw of tokens) {
          const t = String(raw).toUpperCase();
          const rar = (getRarityByTokenStrict(t) || "").toUpperCase();

          // 高レア判定：SPECIAL_P / LR系 / CP系
          if (!(SPECIAL_P.has(t) || /^LR/i.test(rar) || /^CP/i.test(rar))) continue;
          if (!firstDist.has(t)) firstDist.set(t, start - rr);
        }
        if (firstDist.size >= MAX_LR_CANDIDATES) break;
      }
    }

    const items: Candidate[] = [];
    firstDist.forEach((dist, t) => {
      const rar = (getRarityByTokenStrict(t) || "").toUpperCase();
      let badge: "LR"|"LR★"|"CP"|"CP★" = "LR";

      if (SPECIAL_P.has(t)) {
        badge = "LR★";
      } else if (/^LR/i.test(rar)) {
        badge = rar.includes("★") ? "LR★" : "LR";
      } else if (/^CP/i.test(rar)) {
        badge = rar.includes("★") ? "CP★" : "CP";
      }

      const name = getNameByTokenStrict(t) || t;
      items.push({
        code: t, name, dist,
        color: colorForRarity(badge),
        badge
      });
    });
    return items.sort((a,b) => a.dist - b.dist).slice(0, MAX_LR_CANDIDATES);
  };`;
  }
);

// --- 3) ResultList のバッジ描画を colorForRarity ベースに差し替え
out = out.replace(
  /<span className=\{\`badge \$\{b\.badge === "LR" \? "badge-lr" : "badge-p"\}\`\}>\{b\.badge\}<\/span>/g,
  '<span className={"badge"} style={{background: colorForRarity(b.badge), color:"#fff", borderRadius:6, padding:"2px 8px", fontWeight:700}}>{b.badge}</span>'
);

// 追加：ホーム候補（candSugL/R）のバッジ描画にも同様のスタイルが入るよう、
// 既存のインラインスタイルを colorForRarity に置換（ある程度寛容に置換）
out = out.replace(
  /<span className="badge" style=\{\{\s*background:\s*b\.badge==="LR"\s*\?\s*"[#A-Fa-f0-9]+"\s*:\s*"[#A-Fa-f0-9]+"\s*,\s*color:"#fff",\s*borderRadius:6,\s*padding:"2px 8px",\s*fontWeight:700\s*\}\}\}>\{b\.badge\}<\/span>/g,
  '<span className="badge" style={{background: colorForRarity(b.badge), color:"#fff", borderRadius:6, padding:"2px 8px", fontWeight:700}}>{b.badge}</span>'
);

if (out === src) {
  console.warn('注意：置換に一致しませんでした。コードのバージョンが異なる可能性があります。');
} else {
  console.log('パッチ適用：完了');
}

fs.writeFileSync(APP, out, 'utf8');
console.log('書き込み: src/App.tsx');
