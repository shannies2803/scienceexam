/* ---------------- diagram renderer ---------------- */
function wrapTxt(t, n){ const words = String(t).split(/\s+/), out = []; let cur = ""; words.forEach(w => { if ((cur + " " + w).trim().length > n && cur){ out.push(cur); cur = w; } else cur = (cur + " " + w).trim(); }); if (cur) out.push(cur); return out; }
function tx(x, y, t, o){ o = o || {}; const lines = o.wrap ? wrapTxt(t, o.wrap) : [String(t)]; const lh = o.lh || 14; const y0 = y - (lines.length - 1) * lh / 2; return '<text x="' + x + '" y="' + y0 + '" text-anchor="' + (o.anchor || "middle") + '" dominant-baseline="middle" font-family="' + (o.mono ? "DM Mono,monospace" : "Work Sans,Arial,sans-serif") + '" font-size="' + (o.size || 12.5) + '" font-weight="' + (o.bold ? 700 : 400) + '" fill="' + (o.fill || "var(--ink)") + '"' + (o.rot ? ' transform="rotate(' + o.rot + ' ' + x + ' ' + y + ')"' : '') + '>' + lines.map((l, i) => '<tspan x="' + x + '" dy="' + (i ? lh : 0) + '">' + esc(l) + '</tspan>').join("") + '</text>'; }
function niceScale(v){
  v = Math.max(v, 1); const p = Math.pow(10, Math.floor(Math.log10(v)));
  for (const m of [.1, .2, .25, .5, 1, 2, 2.5, 5, 10]){ const st = m * p; if (v / st <= 6){ const n = Math.ceil(v / st - 1e-9); return {max: st * Math.max(n, 1), steps: Math.max(n, 1)}; } }
  return {max: 10 * p, steps: 5};
}
function niceMax(v){ if (v <= 0) return 5; const p = Math.pow(10, Math.floor(Math.log10(v))); for (const m of [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]) if (m * p >= v) return m * p; return 10 * p; }
const ARROW = '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>';
function svgWrap(w, h, body, maxw){ return '<div class="figwrap"><svg class="fig" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" style="max-width:' + (maxw || w) + 'px" role="img" aria-label="Diagram">' + ARROW + '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="var(--paper)"/>' + body + '</svg></div>'; }

function axes(f, W, H, L, B, T, R, vals){
  const hiV = Math.max(0, Math.max.apply(null, vals)), loV = Math.min(0, Math.min.apply(null, vals)), span = Math.max(hiV - loV, 1), p10 = Math.pow(10, Math.floor(Math.log10(span)));
  let st = p10, lo = 0, hi = 1;
  for (const m of [.1, .2, .25, .5, 1, 2, 2.5, 5, 10]){ st = m * p10; lo = Math.floor(loV / st - 1e-9) * st; hi = Math.ceil(hiV / st - 1e-9) * st; if (hi === lo) hi = lo + st; if ((hi - lo) / st <= 6) break; }
  const max = hi, min = lo, steps = Math.round((hi - lo) / st), pw = W - L - R, ph = H - T - B;
  const Y = v => T + ph - ph * (v - min) / (max - min);
  let s = "";
  for (let i = 0; i <= steps; i++){ const v = min + st * i, y = Y(v); s += '<line x1="' + L + '" y1="' + y + '" x2="' + (W - R) + '" y2="' + y + '" stroke="var(--rule)" stroke-width="1"/>' + tx(L - 8, y, +v.toFixed(2), {anchor:"end", mono:true, size:11}); }
  s += '<line x1="' + L + '" y1="' + T + '" x2="' + L + '" y2="' + (T + ph) + '" stroke="var(--ink)" stroke-width="2"/><line x1="' + L + '" y1="' + Y(0) + '" x2="' + (W - R) + '" y2="' + Y(0) + '" stroke="var(--ink)" stroke-width="2"/>';
  s += tx(14, T + ph / 2, f.yl || "", {rot:-90, size:12, bold:true});
  s += tx(L + pw / 2, H - 12, f.xl || "", {size:12, bold:true});
  if (f.title) s += tx(L + pw / 2, 12, f.title, {size:13, bold:true});
  return {max, min, pw, ph, s, Y};
}
function figBar(f){
  const W = 540, H = 290, L = 62, B = 62, T = f.title ? 30 : 16, R = 16;
  const a = axes(f, W, H, L, B, T, R, f.bars.map(b => b[1]));
  const n = f.bars.length, slot = a.pw / n, bw = Math.min(64, slot * .56);
  let s = a.s;
  f.bars.forEach((b, i) => { const x = L + slot * i + (slot - bw) / 2, y0 = a.Y(0), yv = a.Y(b[1]), y = Math.min(y0, yv), h = Math.abs(y0 - yv);
    s += '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + Math.max(0, h) + '" fill="var(--sc,var(--aqua))" stroke="var(--ink)" stroke-width="2"/>' + tx(x + bw / 2, b[1] >= 0 ? y - 9 : y + h + 10, b[1], {mono:true, size:11.5}) + tx(x + bw / 2, T + a.ph + 18, b[0], {wrap:13, size:11.5, lh:13}); });
  return svgWrap(W, H, s);
}
function figLine(f){
  const W = 540, H = 290, L = 62, B = 62, T = f.title ? 30 : 16, R = 24;
  const a = axes(f, W, H, L, B, T, R, f.pts.map(p => p[1]));
  const n = f.pts.length, step = a.pw / (n - 1 || 1);
  const P = f.pts.map((p, i) => [L + step * i, a.Y(p[1])]);
  let s = a.s + '<polyline points="' + P.map(p => p.join(",")).join(" ") + '" fill="none" stroke="var(--sc,var(--aqua))" stroke-width="3"/>';
  f.pts.forEach((p, i) => { s += '<circle cx="' + P[i][0] + '" cy="' + P[i][1] + '" r="5" fill="var(--paper2)" stroke="var(--ink)" stroke-width="2"/>' + tx(P[i][0], P[i][1] - 13, p[1], {mono:true, size:11}) + tx(P[i][0], T + a.ph + 16, p[0], {mono:true, size:11.5}); });
  return svgWrap(W, H, s);
}
function figFlow(f){
  let leaf = 0; const nodes = [], edges = [];
  function lay(n, d){
    if (typeof n === "string"){ const o = {t:n, leaf:true, d, x:leaf++}; nodes.push(o); return o; }
    const y = lay(n.yes, d + 1), no = lay(n.no, d + 1); const o = {t:n.q, d, x:(y.x + no.x) / 2}; nodes.push(o); edges.push([o, y, "Yes"], [o, no, "No"]); return o;
  }
  const top = lay(f.node, 1); const root = {t:f.root, d:0, x:top.x, root:true}; nodes.push(root); edges.push([root, top, ""]);
  const colW = 124, rowH = 84, depth = Math.max.apply(null, nodes.map(n => n.d)), W = Math.max(leaf * colW + 20, 300), H = (depth + 1) * rowH + 10;
  const X = n => 10 + colW / 2 + n.x * colW, Y = n => 10 + 22 + n.d * rowH;
  let s = "";
  edges.forEach(([a, b, lab]) => { const x1 = X(a), y1 = Y(a) + 22, x2 = X(b), y2 = Y(b) - 22, my = (y1 + y2) / 2;
    s += '<path d="M' + x1 + ' ' + y1 + ' V' + my + ' H' + x2 + ' V' + y2 + '" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#ah)"/>';
    if (lab) s += '<rect x="' + (x2 - 16) + '" y="' + (my - 9) + '" width="32" height="18" fill="var(--paper)"/>' + tx(x2, my, lab, {mono:true, size:11}); });
  nodes.forEach(n => { const w = n.leaf ? (n.t.length <= 3 ? 44 : 108) : 116, x = X(n) - w / 2, y = Y(n) - 22;
    s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="44" fill="' + (n.leaf ? "var(--tintc,var(--yellow-t))" : n.root ? "var(--sunk)" : "var(--paper2)") + '" stroke="var(--ink)" stroke-width="2"/>' + tx(X(n), Y(n), n.t, {wrap:n.leaf ? 14 : 17, size:n.leaf && n.t.length <= 3 ? 16 : 11.5, bold:n.leaf || n.root, lh:13}); });
  return svgWrap(W, H, s);
}
function figCycle(f){
  const n = f.stages.length, W = 460, H = 330, cx = W / 2, cy = H / 2, r = 118, bw = 112, bh = 40;
  const P = f.stages.map((_, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + r * 1.25 * Math.cos(a), cy + r * Math.sin(a)]; });
  let s = "";
  P.forEach((p, i) => { const q = P[(i + 1) % n], dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy);
    const cut = t => { const ux = Math.abs(dx / len), uy = Math.abs(dy / len); return Math.min((bw / 2 + 6) / (ux || 1e-6), (bh / 2 + 6) / (uy || 1e-6)); };
    const c = cut(); const x1 = p[0] + dx / len * c, y1 = p[1] + dy / len * c, x2 = q[0] - dx / len * c, y2 = q[1] - dy / len * c;
    const mx = (x1 + x2) / 2 + (cx - (x1 + x2) / 2) * -.12, my = (y1 + y2) / 2 + (cy - (y1 + y2) / 2) * -.12;
    s += '<path d="M' + x1 + ' ' + y1 + ' Q' + mx + ' ' + my + ' ' + x2 + ' ' + y2 + '" fill="none" stroke="var(--ink)" stroke-width="2.2" marker-end="url(#ah)"/>'; });
  f.stages.forEach((t, i) => { const p = P[i], hid = t === "?" || /^[A-Z]$/.test(t);
    s += '<rect x="' + (p[0] - bw / 2) + '" y="' + (p[1] - bh / 2) + '" width="' + bw + '" height="' + bh + '" fill="' + (hid ? "var(--pink-t)" : "var(--paper2)") + '" stroke="var(--ink)" stroke-width="2"' + (hid ? ' stroke-dasharray="5 3"' : '') + '/>' + tx(p[0], p[1], t, {wrap:14, bold:true, size:hid ? 17 : 12.5, lh:13}); });
  return svgWrap(W, H, s, 460);
}
function magBar(x, y, w, h, poles){
  const known = poles && poles !== "??";
  const c = p => p === "N" ? "var(--pink)" : p === "S" ? "var(--blue)" : "var(--sunk)";
  const L = known ? poles[0] : "", Rr = known ? poles[1] : "";
  return '<rect x="' + x + '" y="' + y + '" width="' + w / 2 + '" height="' + h + '" fill="' + c(L) + '"/><rect x="' + (x + w / 2) + '" y="' + y + '" width="' + w / 2 + '" height="' + h + '" fill="' + c(Rr) + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="none" stroke="var(--ink)" stroke-width="2"/>'
    + (known ? tx(x + w / 4, y + h / 2, L, {bold:true, size:16, fill:"#fff"}) + tx(x + w * 3 / 4, y + h / 2, Rr, {bold:true, size:16, fill:"#fff"}) : '');
}
function figMagnets(f){
  const n = f.items.length, bw = 132, gap = 76, W = n * bw + (n - 1) * gap + 24, H = 124, y = 44;
  let s = "";
  f.items.forEach((it, i) => { const x = 12 + i * (bw + gap);
    s += it.kind === "bar" ? '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="40" fill="var(--sunk)" stroke="var(--ink)" stroke-width="2"/>' + tx(x + bw / 2, y + 20, it.text || "", {size:12.5}) : magBar(x, y, bw, 40, it.poles);
    s += tx(x + bw / 2, y - 16, it.label || "", {bold:true, size:15});
    if (f.between && i < n - 1 && f.between[i]){ const gx = x + bw + gap / 2, lab = f.between[i];
      s += '<rect x="' + (gx - 34) + '" y="' + (y + 56) + '" width="68" height="22" fill="' + (lab === "?" ? "var(--pink-t)" : "var(--paper2)") + '" stroke="var(--ink)" stroke-width="1.5"/>' + tx(gx, y + 67, lab, {mono:true, size:11.5});
      s += '<path d="M' + (gx - 22) + ' ' + (y + 20) + ' H' + (gx + 22) + '" stroke="var(--ink2)" stroke-width="1.5" stroke-dasharray="3 3"/>'; }
  });
  return svgWrap(W, H, s);
}
function figRings(f){
  const n = f.rings.length, rw = 160, rh = 34, gapH = 38, W = 360, base = 40;
  let hTot = n * rh + f.gaps.filter(Boolean).length * gapH; const H = hTot + base + 60;
  const cx = W / 2 - 20; let s = '<rect x="' + (cx - 5) + '" y="16" width="10" height="' + (H - 16 - base + 6) + '" fill="var(--sunk)" stroke="var(--ink)" stroke-width="2"/><rect x="' + (cx - 110) + '" y="' + (H - base) + '" width="220" height="16" fill="var(--clay)" stroke="var(--ink)" stroke-width="2"/>';
  let y = H - base;
  f.rings.forEach((r, i) => { y -= rh; const hid = r.top === "?", top = r.top, bot = hid ? "?" : (top === "N" ? "S" : "N");
    const col = p => p === "N" ? "var(--pink)" : p === "S" ? "var(--blue)" : "var(--sunk)";
    s += '<rect x="' + (cx - rw / 2) + '" y="' + y + '" width="' + rw + '" height="' + rh / 2 + '" fill="' + col(hid ? "" : top) + '"/><rect x="' + (cx - rw / 2) + '" y="' + (y + rh / 2) + '" width="' + rw + '" height="' + rh / 2 + '" fill="' + col(hid ? "" : bot) + '"/><rect x="' + (cx - rw / 2) + '" y="' + y + '" width="' + rw + '" height="' + rh + '" fill="none" stroke="var(--ink)" stroke-width="2"/><rect x="' + (cx - 7) + '" y="' + y + '" width="14" height="' + rh + '" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>';
    if (!hid){ s += tx(cx - rw / 2 + 18, y + rh / 4 + .5, top, {bold:true, size:13, fill:"#fff"}) + tx(cx - rw / 2 + 18, y + rh * 3 / 4 + .5, bot, {bold:true, size:13, fill:"#fff"}) + tx(cx + rw / 2 - 18, y + rh / 4 + .5, top, {bold:true, size:13, fill:"#fff"}) + tx(cx + rw / 2 - 18, y + rh * 3 / 4 + .5, bot, {bold:true, size:13, fill:"#fff"}); }
    else s += tx(cx + rw / 2 - 16, y + rh / 2, "?", {bold:true, size:14});
    s += tx(cx + rw / 2 + 26, y + rh / 2, "Ring " + r.label, {bold:true, size:13, anchor:"start"});
    if (i < n - 1 && f.gaps[i]) y -= gapH;
  });
  return svgWrap(W, H, s, 360);
}
function setupIcon(k, x, y){
  const st = ' stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"';
  switch(k){
    case "dish": return '<ellipse cx="' + x + '" cy="' + (y + 40) + '" rx="46" ry="12" fill="var(--paper2)"' + st + '/><ellipse cx="' + x + '" cy="' + (y + 36) + '" rx="34" ry="7" fill="var(--sunk)"' + st + '/>';
    case "plate": return '<ellipse cx="' + x + '" cy="' + (y + 42) + '" rx="50" ry="10" fill="var(--paper2)"' + st + '/>';
    case "jar": return '<rect x="' + (x - 28) + '" y="' + (y + 4) + '" width="56" height="12" fill="var(--sunk)"' + st + '/><rect x="' + (x - 30) + '" y="' + (y + 16) + '" width="60" height="38" fill="var(--aqua-t)"' + st + '/>';
    case "pot": return '<path d="M' + (x - 32) + ' ' + (y + 18) + ' h64 l-8 36 h-48z" fill="var(--clay)"' + st + '/><path d="M' + x + ' ' + (y + 18) + ' v-16 M' + x + ' ' + (y + 8) + ' q-12 -6 -14 -4 M' + x + ' ' + (y + 6) + ' q12 -8 14 -4" fill="none"' + st + '/>';
    case "box": return '<path d="M' + (x - 30) + ' ' + (y + 20) + ' h52 v34 h-52z" fill="var(--paper2)"' + st + '/><path d="M' + (x - 30) + ' ' + (y + 20) + ' l10 -10 h52 l-10 10 M' + (x + 22) + ' ' + (y + 54) + ' l10 -10 v-34" fill="var(--sunk)"' + st + '/>';
    default: return '<path d="M' + (x - 26) + ' ' + (y + 4) + ' v48 h52 v-48" fill="none"' + st + '/><rect x="' + (x - 24) + '" y="' + (y + 24) + '" width="48" height="27" fill="var(--aqua-t)"/><path d="M' + (x - 26) + ' ' + (y + 4) + ' v48 h52 v-48" fill="none"' + st + '/>';
  }
}
function figSetups(f){
  const n = f.items.length, cw = 160, W = n * cw + (n - 1) * 12 + 16, H = 200;
  let s = "";
  f.items.forEach((it, i) => { const x = 8 + i * (cw + 12), mx = x + cw / 2;
    s += '<rect x="' + x + '" y="8" width="' + cw + '" height="' + (H - 16) + '" fill="var(--paper2)" stroke="var(--ink)" stroke-width="2"/>' + '<rect x="' + (x + 8) + '" y="16" width="28" height="24" fill="var(--ink)"/>' + tx(x + 22, 28.5, it.label, {bold:true, size:14, fill:"var(--paper2)"}) + setupIcon(it.icon, mx, 36);
    (it.lines || []).forEach((l, k) => { s += tx(mx, 112 + k * 18, l, {size:11.8}); }); });
  return svgWrap(W, H, s);
}
function figVenn(f){
  const W = 620, H = 290, ax = 205, bx = 345, cy = 150, r = 112;
  let s = '<rect x="6" y="6" width="' + (W - 12) + '" height="' + (H - 12) + '" fill="var(--paper2)" stroke="var(--ink)" stroke-width="2"/>'
    + '<circle cx="' + ax + '" cy="' + cy + '" r="' + r + '" fill="var(--pink)" fill-opacity=".12" stroke="var(--ink)" stroke-width="2"/><circle cx="' + bx + '" cy="' + cy + '" r="' + r + '" fill="var(--aqua)" fill-opacity=".14" stroke="var(--ink)" stroke-width="2"/>'
    + tx(ax - 40, 24, f.a, {bold:true, size:12.5}) + tx(bx + 40, 24, f.b, {bold:true, size:12.5});
  const list = (arr, x) => { const a = arr || [], h = (a.length - 1) * 20; return a.map((t, i) => tx(x, cy - h / 2 + i * 20, t, {size:12.5})).join(""); };
  s += list(f.onlyA, ax - 52) + list(f.both, (ax + bx) / 2) + list(f.onlyB, bx + 52) + list(f.neither, 540);
  return svgWrap(W, H, s);
}
function fig(f){
  if (!f) return "";
  try { return ({bar:figBar, line:figLine, flow:figFlow, cycle:figCycle, magnets:figMagnets, rings:figRings, setups:figSetups, venn:figVenn, organs:figOrgans, plant:figPlant, flower:figFlower, cell:figCell, circuit:figCircuit, web:figWeb}[f.type] || (() => ""))(f); }
  catch(e){ return ""; }
}
