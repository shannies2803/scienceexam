/* ---------------- diagram renderer: body systems, plants, flowers, cells, circuits, food webs ---------------- */
function leaderLabels(anchors, mark, W, H, lx, rx){
  // anchors: {part:[x,y,side]} ; mark: {part:label}; lx/rx = x of label column on each side
  const L = [], Rt = [];
  Object.keys(mark || {}).forEach(p => { const a = anchors[p]; if (!a) return; (a[2] === "L" ? L : Rt).push({p, x:a[0], y:a[1], t:String(mark[p])}); });
  const spread = arr => { arr.sort((a, b) => a.y - b.y); arr.forEach(o => o.ly = o.y); for (let i = 1; i < arr.length; i++) if (arr[i].ly - arr[i-1].ly < 24) arr[i].ly = arr[i-1].ly + 24; const over = arr.length ? arr[arr.length-1].ly - (H - 14) : 0; if (over > 0) arr.forEach(o => o.ly -= over); };
  spread(L); spread(Rt);
  let s = "";
  const draw = (o, side) => { const x2 = side === "L" ? lx : rx;
    s += '<path d="M' + o.x + ' ' + o.y + ' L' + (side === "L" ? x2 + 10 : x2 - 10) + ' ' + o.ly + '" stroke="var(--ink)" stroke-width="1.4" fill="none"/><circle cx="' + o.x + '" cy="' + o.y + '" r="2.6" fill="var(--ink)"/>';
    const short = o.t.length <= 2, w = short ? 24 : Math.max(24, o.t.length * 7.4 + 12), bx = side === "L" ? x2 + 10 - w : x2 - 10;
    s += '<rect x="' + bx + '" y="' + (o.ly - 11) + '" width="' + w + '" height="22" fill="var(--paper2)" stroke="var(--ink)" stroke-width="1.6"/>' + tx(bx + w / 2, o.ly, o.t, {bold:true, size:12.5}); };
  L.forEach(o => draw(o, "L")); Rt.forEach(o => draw(o, "R"));
  return s;
}
const ST = ' stroke="var(--ink)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"';

function figOrgans(f){
  const W = 440, H = 420, cx = 220; let s = "";
  // body outline
  s += '<ellipse cx="' + cx + '" cy="62" rx="40" ry="46" fill="var(--sunk)"' + ST + '/>'
    + '<path d="M' + (cx-18) + ' 104 v14 M' + (cx+18) + ' 104 v14" fill="none"' + ST + '/>'
    + '<path d="M' + (cx-18) + ' 118 C' + (cx-90) + ' 124 ' + (cx-98) + ' 150 ' + (cx-96) + ' 200 L' + (cx-88) + ' 400 H' + (cx+88) + ' L' + (cx+96) + ' 200 C' + (cx+98) + ' 150 ' + (cx+90) + ' 124 ' + (cx+18) + ' 118 Z" fill="var(--sunk)"' + ST + '/>';
  const A = {};
  if (f.system === "digestive"){
    s += '<path d="M' + (cx-12) + ' 84 q12 8 24 0" fill="none"' + ST + '/>';
    s += '<path d="M' + cx + ' 92 V172" stroke="var(--tang)" stroke-width="7" fill="none" stroke-linecap="round"/>';
    s += '<path d="M' + (cx-2) + ' 170 C' + (cx+40) + ' 158 ' + (cx+62) + ' 176 ' + (cx+56) + ' 204 C' + (cx+50) + ' 232 ' + (cx+8) + ' 234 ' + (cx-8) + ' 218 C' + (cx-14) + ' 206 ' + (cx-6) + ' 196 ' + (cx+4) + ' 194 C' + (cx+20) + ' 192 ' + (cx+26) + ' 184 ' + (cx-2) + ' 170 Z" fill="var(--pink)" fill-opacity=".55"' + ST + '/>';
    s += '<path d="M' + (cx-56) + ' 350 V262 Q' + (cx-56) + ' 244 ' + (cx-38) + ' 244 H' + (cx+38) + ' Q' + (cx+56) + ' 244 ' + (cx+56) + ' 262 V336 Q' + (cx+56) + ' 350 ' + (cx+40) + ' 350 H' + (cx+10) + '" fill="none" stroke="var(--clay)" stroke-width="14" stroke-linecap="round"/>';
    s += '<path d="M' + (cx+10) + ' 350 V386" stroke="var(--clay)" stroke-width="8" fill="none" stroke-linecap="round"/>';
    s += '<path d="M' + (cx-8) + ' 226 q-26 8 -20 24 q30 6 50 -4 q20 14 -6 24 q-40 6 -46 -6 q-8 18 14 26 q34 8 50 -4 q14 16 -8 24 q-30 8 -44 -2 q-6 16 18 20 q20 2 26 -6" fill="none" stroke="var(--yellow)" stroke-width="7" stroke-linecap="round"/>';
    Object.assign(A, {mouth:[cx+10, 86, "R"], gullet:[cx, 140, "L"], stomach:[cx+50, 198, "R"], small_intestine:[cx+4, 290, "L"], large_intestine:[cx+56, 300, "R"], anus:[cx+10, 386, "R"]});
  } else if (f.system === "respiratory"){
    s += '<path d="M' + cx + ' 58 l-8 18 h14" fill="none"' + ST + '/>';
    s += '<path d="M' + cx + ' 96 V192 M' + cx + ' 192 l-30 22 M' + cx + ' 192 l30 22" stroke="var(--aqua)" stroke-width="8" fill="none" stroke-linecap="round"/>';
    s += '<path d="M' + (cx-14) + ' 172 C' + (cx-70) + ' 150 ' + (cx-86) + ' 220 ' + (cx-80) + ' 300 C' + (cx-60) + ' 312 ' + (cx-24) + ' 300 ' + (cx-14) + ' 280 Z" fill="var(--pink)" fill-opacity=".5"' + ST + '/>';
    s += '<path d="M' + (cx+14) + ' 172 C' + (cx+70) + ' 150 ' + (cx+86) + ' 220 ' + (cx+80) + ' 300 C' + (cx+60) + ' 312 ' + (cx+24) + ' 300 ' + (cx+14) + ' 280 Z" fill="var(--pink)" fill-opacity=".5"' + ST + '/>';
    Object.assign(A, {nose:[cx+2, 70, "R"], windpipe:[cx, 140, "L"], lungs:[cx+62, 240, "R"]});
  } else {
    s += '<path d="M' + (cx-14) + ' 172 C' + (cx-70) + ' 150 ' + (cx-86) + ' 220 ' + (cx-80) + ' 290 C' + (cx-60) + ' 300 ' + (cx-24) + ' 292 ' + (cx-14) + ' 272 Z" fill="var(--aqua)" fill-opacity=".25"' + ST + '/>';
    s += '<path d="M' + (cx+14) + ' 172 C' + (cx+70) + ' 150 ' + (cx+86) + ' 220 ' + (cx+80) + ' 290 C' + (cx+60) + ' 300 ' + (cx+24) + ' 292 ' + (cx+14) + ' 272 Z" fill="var(--aqua)" fill-opacity=".25"' + ST + '/>';
    s += '<path d="M' + (cx-2) + ' 236 C' + (cx-40) + ' 206 ' + (cx-30) + ' 180 ' + (cx-8) + ' 194 C' + (cx+10) + ' 176 ' + (cx+36) + ' 196 ' + (cx-2) + ' 236 Z" fill="var(--pink)"' + ST + '/>';
    s += '<path d="M' + (cx-10) + ' 196 V110 M' + (cx+6) + ' 196 V110 M' + (cx-4) + ' 232 V392 M' + (cx-4) + ' 330 L' + (cx-60) + ' 396 M' + (cx-4) + ' 330 L' + (cx+52) + ' 396 M' + (cx-20) + ' 200 L' + (cx-90) + ' 250" stroke="var(--pink)" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
    s += '<path d="M' + (cx+2) + ' 232 V392 M' + (cx+18) + ' 200 L' + (cx+90) + ' 250" stroke="var(--blue)" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
    Object.assign(A, {heart:[cx-4, 216, "L"], lungs:[cx+64, 232, "R"], blood_vessels:[cx-4, 360, "L"]});
  }
  s += leaderLabels(A, f.mark, W, H, 70, W - 70);
  return svgWrap(W, H, s, 440);
}
function figPlant(f){
  const W = 440, H = 360, cx = 200, g = 250; let s = "";
  s += '<rect x="30" y="' + g + '" width="340" height="96" fill="var(--clay)" fill-opacity=".35"/><path d="M30 ' + g + ' H370" stroke="var(--ink)" stroke-width="2"/>';
  s += '<path d="M' + cx + ' ' + g + ' v34 M' + cx + ' ' + (g+10) + ' l-40 40 M' + cx + ' ' + (g+10) + ' l44 36 M' + cx + ' ' + (g+30) + ' l-22 44 M' + cx + ' ' + (g+30) + ' l26 46 M' + (cx-24) + ' ' + (g+34) + ' l-22 16 M' + (cx+26) + ' ' + (g+32) + ' l22 20" fill="none" stroke="var(--clay)" stroke-width="3.5" stroke-linecap="round"/>';
  s += '<path d="M' + cx + ' ' + g + ' V78" stroke="var(--leaf)" stroke-width="7" stroke-linecap="round"/>';
  s += '<path d="M' + cx + ' 200 q-50 -6 -70 -34 q44 -8 70 34z M' + cx + ' 150 q52 -10 72 -38 q-46 -6 -72 38z M' + cx + ' 116 q-40 -4 -54 -26 q34 -4 54 26z" fill="var(--leaf)" fill-opacity=".75"' + ST + '/>';
  for (let i = 0; i < 6; i++){ const a = i * Math.PI / 3; s += '<ellipse cx="' + (cx + 15 * Math.cos(a)) + '" cy="' + (62 + 15 * Math.sin(a)) + '" rx="11" ry="7" transform="rotate(' + (i * 60) + ' ' + (cx + 15 * Math.cos(a)) + ' ' + (62 + 15 * Math.sin(a)) + ')" fill="var(--pink)" fill-opacity=".8"' + ST + '/>'; }
  s += '<circle cx="' + cx + '" cy="62" r="8" fill="var(--yellow)"' + ST + '/>';
  s += '<path d="M' + cx + ' 172 q26 4 30 22" fill="none"' + ST + '/><circle cx="' + (cx+32) + '" cy="206" r="13" fill="var(--tang)"' + ST + '/>';
  s += leaderLabels({roots:[cx+30, g+46, "R"], stem:[cx, 225, "L"], leaf:[cx-50, 180, "L"], flower:[cx+18, 58, "R"], fruit:[cx+44, 208, "R"]}, f.mark, W, H, 70, W - 40);
  return svgWrap(W, H, s, 440);
}
function figFlower(f){
  const W = 460, H = 360, cx = 230; let s = "";
  s += '<path d="M' + cx + ' 340 V272" stroke="var(--leaf)" stroke-width="8" stroke-linecap="round"/>';
  s += '<path d="M' + (cx-20) + ' 268 q-40 6 -56 -14 q30 -18 56 0z M' + (cx+20) + ' 268 q40 6 56 -14 q-30 -18 -56 0z" fill="var(--leaf)" fill-opacity=".8"' + ST + '/>';
  s += '<path d="M' + (cx-34) + ' 250 C' + (cx-120) + ' 230 ' + (cx-150) + ' 120 ' + (cx-110) + ' 70 C' + (cx-80) + ' 120 ' + (cx-60) + ' 190 ' + (cx-34) + ' 250 Z M' + (cx+34) + ' 250 C' + (cx+120) + ' 230 ' + (cx+150) + ' 120 ' + (cx+110) + ' 70 C' + (cx+80) + ' 120 ' + (cx+60) + ' 190 ' + (cx+34) + ' 250 Z" fill="var(--pink)" fill-opacity=".45"' + ST + '/>';
  s += '<path d="M' + (cx-30) + ' 272 H' + (cx+30) + ' Q' + (cx+40) + ' 240 ' + (cx+22) + ' 220 Q' + cx + ' 206 ' + (cx-22) + ' 220 Q' + (cx-40) + ' 240 ' + (cx-30) + ' 272 Z" fill="var(--leaf-t)"' + ST + '/>';
  [[-8, 244], [8, 250], [0, 234]].forEach(p => s += '<ellipse cx="' + (cx + p[0]) + '" cy="' + p[1] + '" rx="5" ry="6" fill="var(--yellow)"' + ST + '/>');
  s += '<path d="M' + cx + ' 214 V112" stroke="var(--leaf)" stroke-width="7" stroke-linecap="round"/><ellipse cx="' + cx + '" cy="104" rx="16" ry="9" fill="var(--leaf)"' + ST + '/>';
  [[-60, 104], [60, 104]].forEach(p => { s += '<path d="M' + (cx + p[0] / 3) + ' 236 Q' + (cx + p[0] * .8) + ' 180 ' + (cx + p[0]) + ' ' + (p[1] + 14) + '" fill="none" stroke="var(--ink2)" stroke-width="2.5"/><ellipse cx="' + (cx + p[0]) + '" cy="' + p[1] + '" rx="9" ry="15" fill="var(--yellow)"' + ST + '/>'; });
  s += leaderLabels({petal:[cx-108, 120, "L"], sepal:[cx+60, 258, "R"], anther:[cx+60, 100, "R"], filament:[cx-40, 176, "L"], stigma:[cx+8, 100, "R"], style:[cx, 160, "R"], ovary:[cx-26, 252, "L"], ovule:[cx+8, 250, "R"]}, f.mark, W, H, 60, W - 50);
  return svgWrap(W, H, s, 460);
}
function figCell(f){
  const W = 460, H = 300, cx = 230, cy = 150; let s = "";
  if (f.kind === "animal"){
    s += '<path d="M' + (cx-120) + ' ' + cy + ' C' + (cx-130) + ' 60 ' + (cx-20) + ' 40 ' + (cx+60) + ' 60 C' + (cx+140) + ' 80 ' + (cx+140) + ' 200 ' + (cx+70) + ' 236 C' + cx + ' 270 ' + (cx-110) + ' 250 ' + (cx-120) + ' ' + cy + ' Z" fill="var(--pink-t)"' + ST + '/>';
    s += '<circle cx="' + (cx+10) + '" cy="' + (cy-4) + '" r="30" fill="var(--plum)" fill-opacity=".45"' + ST + '/><circle cx="' + (cx+16) + '" cy="' + (cy-10) + '" r="8" fill="var(--plum)"/>';
    s += leaderLabels({cell_membrane:[cx+116, cy+30, "R"], cytoplasm:[cx-70, cy+50, "L"], nucleus:[cx+34, cy-18, "R"]}, f.mark, W, H, 60, W - 50);
  } else {
    s += '<rect x="' + (cx-130) + '" y="' + (cy-100) + '" width="260" height="200" rx="14" fill="var(--leaf)" fill-opacity=".22" stroke="var(--ink)" stroke-width="5"/>';
    s += '<rect x="' + (cx-122) + '" y="' + (cy-92) + '" width="244" height="184" rx="10" fill="var(--leaf-t)" stroke="var(--ink)" stroke-width="1.5"/>';
    s += '<rect x="' + (cx-70) + '" y="' + (cy-60) + '" width="150" height="120" rx="30" fill="var(--aqua)" fill-opacity=".22" stroke="var(--ink)" stroke-width="1.8"/>';
    s += '<circle cx="' + (cx-96) + '" cy="' + (cy-50) + '" r="20" fill="var(--plum)" fill-opacity=".45"' + ST + '/><circle cx="' + (cx-92) + '" cy="' + (cy-54) + '" r="6" fill="var(--plum)"/>';
    [[-100, 30], [-86, 64], [96, -66], [100, 10], [96, 62], [-30, 78], [30, 78], [-20, -80], [40, -80]].forEach(p => s += '<ellipse cx="' + (cx + p[0]) + '" cy="' + (cy + p[1]) + '" rx="10" ry="6" fill="var(--leaf)"' + ST.replace('stroke-width="2"', 'stroke-width="1.4"') + '/>');
    s += leaderLabels({cell_wall:[cx+130, cy-70, "R"], cell_membrane:[cx+122, cy+36, "R"], cytoplasm:[cx-110, cy+84, "L"], nucleus:[cx-96, cy-50, "L"], chloroplast:[cx+100, cy+10, "R"], vacuole:[cx+10, cy, "R"]}, f.mark, W, H, 60, W - 44);
  }
  return svgWrap(W, H, s, 460);
}
/* circuits: cells on the left edge, main items on the top edge, branches as parallel rails */
function cItem(it, x, y){
  let s = '<rect x="' + (x - 26) + '" y="' + (y - 5) + '" width="52" height="10" fill="var(--paper)"/>';
  if (it.k === "bulb") s += '<circle cx="' + x + '" cy="' + y + '" r="14" fill="var(--yellow-t)" stroke="var(--ink)" stroke-width="2"/><path d="M' + (x-10) + ' ' + (y-10) + ' L' + (x+10) + ' ' + (y+10) + ' M' + (x+10) + ' ' + (y-10) + ' L' + (x-10) + ' ' + (y+10) + '" stroke="var(--ink)" stroke-width="1.8"/><path d="M' + (x-26) + ' ' + y + ' H' + (x-14) + ' M' + (x+14) + ' ' + y + ' H' + (x+26) + '" stroke="var(--ink)" stroke-width="2"/>';
  else if (it.k === "switch") s += '<path d="M' + (x-26) + ' ' + y + ' H' + (x-14) + ' M' + (x+14) + ' ' + y + ' H' + (x+26) + '" stroke="var(--ink)" stroke-width="2"/><circle cx="' + (x-14) + '" cy="' + y + '" r="3.5" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><circle cx="' + (x+14) + '" cy="' + y + '" r="3.5" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><path d="M' + (x-11) + ' ' + (y - 1) + ' L' + (x+14) + ' ' + (it.open ? y - 16 : y - 3) + '" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round"/>' + tx(x, y + 18, it.open ? "open" : "closed", {mono:true, size:9.5, fill:"var(--ink2)"});
  else if (it.k === "gap") s += '<path d="M' + (x-26) + ' ' + y + ' H' + (x-18) + ' M' + (x+18) + ' ' + y + ' H' + (x+26) + '" stroke="var(--ink)" stroke-width="2"/><rect x="' + (x-18) + '" y="' + (y-7) + '" width="36" height="14" fill="var(--sunk)" stroke="var(--ink)" stroke-width="1.6"/>' + (it.text ? tx(x, y + 20, it.text, {size:10.5, wrap:14, lh:11}) : '');
  else s += '<path d="M' + (x-26) + ' ' + y + ' H' + (x+26) + '" stroke="var(--ink)" stroke-width="2"/>';
  if (it.label) s += tx(x, y - 25, it.label, {bold:true, size:13});
  return s;
}
function figCircuit(f){
  const main = f.main || [], br = f.branches || [], nc = Math.max(1, f.cells || 1);
  const cols = Math.max(main.length, ...br.map(b => b.length), 1);
  const Lx = 70, Rx = Lx + Math.max(260, cols * 96 + 60), T = 50, gap = 78;
  const rails = br.length ? br : [[]];
  const B = T + 110, lastY = B + (rails.length - 1) * gap, W = Rx + 40, H = lastY + 52;
  let s = '<path d="M' + Lx + ' ' + T + ' H' + Rx + ' V' + lastY + ' M' + Lx + ' ' + T + ' V' + lastY + '" fill="none" stroke="var(--ink)" stroke-width="2"/>';
  rails.forEach((r, i) => { const y = B + i * gap; s += '<path d="M' + Lx + ' ' + y + ' H' + Rx + '" stroke="var(--ink)" stroke-width="2"/>'; if (br.length && i < rails.length - 1){ s += '<circle cx="' + Lx + '" cy="' + y + '" r="4" fill="var(--ink)"/><circle cx="' + Rx + '" cy="' + y + '" r="4" fill="var(--ink)"/>'; } });
  // cells on the left edge, vertical
  const cy0 = (T + B) / 2 - (nc - 1) * 11;
  for (let i = 0; i < nc; i++){ const y = cy0 + i * 22; s += '<rect x="' + (Lx - 16) + '" y="' + (y - 8) + '" width="32" height="16" fill="var(--paper)"/><path d="M' + (Lx - 16) + ' ' + (y - 5) + ' H' + (Lx + 16) + '" stroke="var(--ink)" stroke-width="2"/><path d="M' + (Lx - 8) + ' ' + (y + 5) + ' H' + (Lx + 8) + '" stroke="var(--ink)" stroke-width="5"/>'; }
  s += tx(Lx - 36, (T + B) / 2, nc + (nc > 1 ? " batteries" : " battery"), {size:10.5, rot:-90, fill:"var(--ink2)"});
  const place = (items, y) => { const n = items.length; items.forEach((it, k) => { const x = Lx + (Rx - Lx) * (k + 1) / (n + 1); s += cItem(it, x, y); }); };
  place(main, T);
  br.forEach((b, i) => place(b, B + i * gap));
  return svgWrap(W, H, s);
}
function figWeb(f){
  const names = []; f.links.forEach(l => l.forEach(n => { if (!names.includes(n)) names.push(n); }));
  const eats = {}; names.forEach(n => eats[n] = []); f.links.forEach(([food, eater]) => eats[eater].push(food));
  const lvl = {}; const get = (n, seen) => { if (lvl[n] != null) return lvl[n]; if (seen.has(n)) return 0; seen.add(n); const v = eats[n].length ? 1 + Math.max(...eats[n].map(m => get(m, seen))) : 0; lvl[n] = v; return v; };
  names.forEach(n => get(n, new Set()));
  const maxL = Math.max(...names.map(n => lvl[n])), rows = [];
  for (let i = 0; i <= maxL; i++) rows.push(names.filter(n => lvl[n] === i));
  const colW = 128, rowH = 82, maxN = Math.max(...rows.map(r => r.length)), W = Math.max(maxN * colW + 20, 300), H = (maxL + 1) * rowH + 20;
  const pos = {};
  rows.forEach((r, i) => {
    if (i > 0) r.sort((a, b) => { const m = n => { const xs = eats[n].map(x => pos[x] ? pos[x][0] : W / 2); return xs.reduce((t, v) => t + v, 0) / xs.length; }; return m(a) - m(b); });
    r.forEach((n, k) => pos[n] = [W / 2 + (k - (r.length - 1) / 2) * colW, H - 10 - rowH / 2 - i * rowH]);
  });
  let s = "";
  f.links.forEach(([a, b]) => { const p = pos[a], q = pos[b]; const dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy) || 1;
    const bh = 17, bw = 52, t1 = Math.min(bw / Math.abs(dx / len || 1e-6), bh / Math.abs(dy / len || 1e-6)), t2 = t1 + 4;
    s += '<path d="M' + (p[0] + dx / len * t1) + ' ' + (p[1] + dy / len * t1) + ' L' + (q[0] - dx / len * t2) + ' ' + (q[1] - dy / len * t2) + '" stroke="var(--ink)" stroke-width="2" marker-end="url(#ah)"/>'; });
  names.forEach(n => { const p = pos[n], w = Math.max(40, Math.min(112, n.length * 8 + 18));
    s += '<rect x="' + (p[0] - w / 2) + '" y="' + (p[1] - 16) + '" width="' + w + '" height="32" fill="' + (lvl[n] === 0 ? "var(--leaf-t)" : "var(--paper2)") + '" stroke="var(--ink)" stroke-width="2"/>' + tx(p[0], p[1], n, {bold:true, size:n.length <= 2 ? 15 : 12}); });
  return svgWrap(W, H, s);
}
