// Full automated audit of all content. usage: node audit.js [--files a.js b.js]  (default: everything)
global.window = global; const fs = require('fs'), path = require('path');
global.esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
eval(fs.readFileSync('fig.js','utf8') + "\n" + fs.readFileSync('fig2.js','utf8') + "\nglobal.fig = fig;");
let files = process.argv.includes('--files') ? process.argv.slice(process.argv.indexOf('--files') + 1) : fs.readdirSync('bank').map(f => 'bank/' + f).concat(fs.readdirSync('lv').map(f => 'lv/' + f));
// keyword matcher copied from app
function norm(s){ return " " + String(s).toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ") + " "; }
const NEG = /(^| )(not|no|non|cannot|cant|can't|doesn't|doesnt|don't|dont|isn't|isnt|didn't|didnt|won't|wont|never|hasn't|hasnt|aren't|arent|without)( |$)/;
function occ(text, k){ const kk = norm(k).trim(); if (!kk) return []; const numeric = /^[0-9 ]+$/.test(kk) || /^[a-z]$/.test(kk), re = new RegExp(" " + kk.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + (numeric ? "(?= )" : ""), "g"), out = []; let m; while ((m = re.exec(text))){ const before = " " + text.slice(0, m.index).trim().split(" ").slice(-3).join(" ") + " "; out.push(NEG.test(before) && !NEG.test(" " + kk + " ")); re.lastIndex = m.index + 1; } return out; }
function hits(q, ans){ const a = norm(ans), md = norm(q.model || ""); return q.kw.map(alts => alts.some(k => { const o = occ(a, k); if (!o.length) return false; const mo = occ(md, k), mneg = mo.length ? mo[0] : false; return o.some(x => x === mneg); })); }
const FIGT = ["bar","line","flow","cycle","magnets","rings","setups","venn","organs","plant","flower","cell","circuit","web"];
const report = {}; let total = {items:0, issues:0};
for (const f of files){
  for (const G of ['BANK','BANKX','BANKY','BANKZ','LB','LBX','LBY']) delete global[G];
  try { delete require.cache[path.resolve(f)]; require(path.resolve(f)); } catch(e){ (report[f] = report[f] || []).push("LOAD ERROR " + e.message); continue; }
  const G = ['BANK','BANKX','BANKY','BANKZ','LB','LBX','LBY'].find(g => global[g]); const id = Object.keys(global[G])[0], b = global[G][id];
  const kid = id.startsWith('k-'), iss = []; const add = (w, m) => iss.push(w + ": " + m);
  const chkFig = (w, q) => { if (!q.fig) return; if (!FIGT.includes(q.fig.type)) return add(w, "unknown fig " + q.fig.type); let out = ""; try { out = fig(q.fig); } catch(e){ return add(w, "fig throws " + e.message); } if (!out) add(w, "fig renders empty (" + q.fig.type + ")");
    const F = q.fig; if (F.type === "rings") F.gaps.forEach((g, i) => { const a = F.rings[i], c = F.rings[i+1]; if (a.top !== "?" && c.top !== "?"){ const cb = c.top === "N" ? "S" : "N"; if ((a.top === cb) !== g) add(w, "ring gap inconsistent"); } }); };
  const chkMcq = (w, q, lvlRange) => { total.items++;
    if (!q || typeof q.q !== "string") return add(w, "bad stem");
    const n = kid ? 3 : 4; if (!Array.isArray(q.o) || q.o.length !== n) add(w, "options " + (q.o||[]).length + " (want " + n + ")");
    if (!Number.isInteger(q.a) || q.a < 0 || q.a >= (q.o||[]).length) add(w, "answer index out of range");
    if (new Set((q.o||[]).map(x => norm(x))).size !== (q.o||[]).length) add(w, "duplicate options");
    if ((q.o||[]).some(x => /all of the above|none of the above/i.test(x))) add(w, "all/none of the above");
    if (!q.why) add(w, "no explanation");
    const L = (q.o||[]).map(s => s.length), s2 = [...L].sort((x, y) => y - x); if (L[q.a] === s2[0] && s2[0] > s2[1] * 1.25 && s2[0] - s2[1] >= 8) add(w, "correct option clearly longest");
    chkFig(w, q); };
  const seen = new Map();
  const dup = (w, s) => { const k = norm(s).trim(); if (k.length < 40) return; if (seen.has(k)) add(w, "duplicate of " + seen.get(k)); else seen.set(k, w); };
  (b.mcq || []).forEach((q, i) => { chkMcq("mcq[" + i + "]", q); dup("mcq[" + i + "]", q.q + (q.o||[]).join()); });
  (b.expert || []).forEach((q, i) => { chkMcq("expert[" + i + "]", q); if (q.lvl !== 4) add("expert[" + i + "]", "lvl not 4"); });
  (b.lessons || []).forEach((l, i) => { if (!l.example || !Array.isArray(l.example.think) || !l.example.answer) add("lesson[" + i + "]", "bad example"); else chkFig("lesson[" + i + "].example", l.example); if (l.try) chkMcq("lesson[" + i + "].try", l.try); else add("lesson[" + i + "]", "no try"); });
  (b.tf || []).forEach((q, i) => { total.items++; if (typeof q.s !== "string" || typeof q.a !== "boolean") add("tf[" + i + "]", "bad tf"); if (!q.why) add("tf[" + i + "]", "no explanation"); dup("tf[" + i + "]", q.s); });
  (b.sort || []).forEach((q, i) => { total.items++; if (!Array.isArray(q.groups) || !Array.isArray(q.items)) return add("sort[" + i + "]", "bad sort"); q.items.forEach(it => { if (!Number.isInteger(it[1]) || it[1] < 0 || it[1] >= q.groups.length) add("sort[" + i + "]", "item group out of range: " + it[0]); }); });
  (b.oe || []).concat(b.oex || []).forEach((q, i) => { total.items++; const w = "oe[" + i + "]";
    if (!Array.isArray(q.kw) || !q.kw.length || !q.kw.every(a => Array.isArray(a) && a.length && a.every(x => typeof x === "string"))) return add(w, "bad kw");
    if (q.kw.some(a => a.some(x => x !== x.toLowerCase()))) add(w, "kw not lowercase");
    if (!Number.isInteger(q.marks) || q.marks < 1 || q.marks > 4) add(w, "marks " + q.marks);
    if (/\(b\)/.test(q.q) && q.marks !== q.kw.length) add(w, "multi-part marks != kw ideas");
    const h = hits(q, q.model); if (h.some(x => !x)) add(w, "model answer misses kw idea(s) " + h.map((x, j) => x ? "" : j + 1).filter(Boolean).join(","));
    
    if (hits(q, "I don't know").some(Boolean) || hits(q, "the answer is because it is").some(Boolean)) add(w, "kw matches a non-answer");
    chkFig(w, q); dup(w, q.q); });
  (b.doc || []).forEach((q, i) => { total.items++; if (!Array.isArray(q.answers) || q.answers.length !== 3 || !Number.isInteger(q.best) || q.best < 0 || q.best > 2) add("doc[" + i + "]", "bad doc"); });
  if (iss.length){ report[f] = iss; total.issues += iss.length; }
}
for (const f in report){ console.log("\n" + f + " (" + report[f].length + ")"); report[f].slice(0, 40).forEach(x => console.log("  " + x)); if (report[f].length > 40) console.log("  …"); }
console.log("\nITEMS", total.items, "ISSUES", total.issues);
