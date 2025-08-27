// scripts/make-sample-csv.cjs
// 12列×20行 = 240マス/グリッド をフルに埋める。
// 各 set×cyl ごとの分布： LR★=2 / LR=2 / SR=12 / R=40 / 残りは N（必ず2枚連続）
// 書き出しは BOM + CRLF（Windows/Excel/ブラウザで行が崩れない）

const fs = require('fs');
const path = require('path');

const OUT = path.join(process.cwd(), 'public', 'cards.sample.csv');

const SETS = ['GL1', 'GL2'];
const CYLS = ['L', 'R'];
const COLS = 12;
const ROWS = 20;

const COUNT = { LRSTAR: 2, LR: 2, SR: 12, R: 40 };

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildGridWithDistribution() {
  // 空グリッド
  const grid = Array.from({ length: COLS + 1 }, () => Array(ROWS + 1).fill(null));

  // 全座標
  const coords = [];
  for (let c = 1; c <= COLS; c++) for (let r = 1; r <= ROWS; r++) coords.push([c, r]);
  shuffle(coords);

  // 先にレア枠をランダム配置（重複なし）
  const place = (n, rarity) => {
    let k = 0;
    while (k < n && coords.length) {
      const [c, r] = coords.pop();
      if (!grid[c][r]) {
        grid[c][r] = rarity;
        k++;
      }
    }
  };
  place(COUNT.LRSTAR, 'LR★');
  place(COUNT.LR, 'LR');
  place(COUNT.SR, 'SR');
  place(COUNT.R, 'R');

  // N を2枚連続で埋める（縦優先 → 残りを横で）
  // 縦ペア
  for (let c = 1; c <= COLS; c++) {
    for (let r = 1; r <= ROWS - 1; r++) {
      if (!grid[c][r] && !grid[c][r + 1]) {
        grid[c][r] = 'N';
        grid[c][r + 1] = 'N';
        r++; // ペアにしたので次の行はスキップ
      }
    }
  }
  // 横ペア
  for (let r = 1; r <= ROWS; r++) {
    for (let c = 1; c <= COLS - 1; c++) {
      if (!grid[c][r] && !grid[c + 1][r]) {
        grid[c][r] = 'N';
        grid[c + 1][r] = 'N';
        c++; // ペアにしたので次の列はスキップ
      }
    }
  }
  // 予防：単発の穴があれば N で埋める
  for (let c = 1; c <= COLS; c++) for (let r = 1; r <= ROWS; r++) {
    if (!grid[c][r]) grid[c][r] = 'N';
  }

  return grid;
}

function rowsFor(set, cyl, grid) {
  const base = set === 'GL1' ? 0 : 100;  // GL2 は番号帯をズラす
  const out = [];
  for (let c = 1; c <= COLS; c++) {
    for (let r = 1; r <= ROWS; r++) {
      const rarity = grid[c][r];
      // 数字は「列固定で縦に+3」→ 検索ロジックは従来どおり
      const num = (base + c * 7 + r * 3) % 99 + 1; // 1..99
      const name = `サンプル${String(num).padStart(2, '0')}（${set}/${cyl}）`;
      out.push([set, cyl, c, r, num, rarity, name]);
    }
  }
  return out;
}

function buildAll() {
  const lines = [];
  lines.push('set,cyl,col,row,num,rarity,name'); // ← アプリ本線のヘッダー名

  for (const set of SETS) {
    for (const cyl of CYLS) {
      const grid = buildGridWithDistribution();   // set×cyl ごとに分布を作る
      for (const row of rowsFor(set, cyl, grid)) {
        lines.push(row.join(','));
      }
    }
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });

  // ★ BOM + CRLF（Excel/ブラウザで行崩れしない）
  const content = '\uFEFF' + lines.join('\r\n');
  fs.writeFileSync(OUT, content, 'utf8');

  console.log('✅ 生成しました ->', OUT);
}

buildAll();
