/* ================= toolkit 2: glossary, print & download, topic tests, hints, confidence, avatars, breaks ================= */
const AVATARS = ["🦉","🐙","🦊","🐢","🦋","🐬","🦖","🐝","🐼","🦜","🐸","🚀","🔬","🌱","⚡","🧲"];
const avatarOf = p => (p && p.av) || "";

/* ---------- 1. glossary ---------- */
function glossOf(ws){ const out = []; ws.forEach(w => (w.b.glossary || []).forEach((g, i) => out.push({id:w.id + ":g:" + i, w:w.id, t:g.t, d:g.d}))); return out; }
let GLOSS_W = "all", GLOSS_Q = "";
function glossView(){
  const all = glossOf(WORLDS), ws = WORLDS.filter(w => (w.b.glossary || []).length);
  let h = '<div class="wrap">' + backBtn("xback") + headH(new Set(all.map(g => g.t.toLowerCase().trim())).size, LEVEL.n + " key words", "Glossary", "Every science word to learn, in the wording markers accept. Tap Quiz me to test yourself on them.")
    + '<div class="findbar"><input id="gq" type="search" placeholder="Find a word" aria-label="Find a word" value="' + esc(GLOSS_Q) + '"></div>'
    + '<div class="wchips" style="margin-top:12px"><button class="opt" data-gw="all"' + (GLOSS_W === "all" ? ' data-s="pick"' : '') + '>All worlds</button>' + ws.map(w => '<button class="opt" data-gw="' + w.id + '" style="' + vars(w) + '"' + (GLOSS_W === w.id ? ' data-s="pick"' : '') + '>' + esc(w.n) + '</button>').join("") + '</div>'
    + '<div class="btnrow" style="margin-top:12px"><button class="btn" id="g-quiz">Quiz me on these words</button><button class="btn alt" id="g-print">Print or save list</button></div><div id="glist"></div><div style="height:40px"></div></div>';
  XV().innerHTML = h; show("v-x");
  $("#xback").onclick = () => home();
  document.querySelectorAll("[data-gw]").forEach(b => b.onclick = () => { GLOSS_W = b.dataset.gw; glossView(); });
  const uniq = list => { const seen = {}; return list.filter(g => { const k = g.t.toLowerCase().trim(); if (seen[k]){ seen[k].also = (seen[k].also || []).concat(g.w); return false; } seen[k] = g; g.also = []; return true; }); };
  const cur = () => { const src = GLOSS_W === "all" ? uniq(all.slice()) : all.filter(g => g.w === GLOSS_W); const q = GLOSS_Q.toLowerCase().trim(); return (q ? src.filter(g => (g.t + " " + g.d).toLowerCase().includes(q)) : src).sort((a, b) => a.t.localeCompare(b.t)); };
  const draw = () => { const list = cur(); let L = "";
    $("#glist").innerHTML = list.length ? '<dl class="gloss">' + list.map(g => { const l0 = g.t[0].toUpperCase(), head = l0 !== L ? (L = l0, '<div class="gl-l mono">' + esc(l0) + '</div>') : ''; return head + '<div class="gl-e" style="' + vars(W[g.w]) + '"><dt>' + esc(g.t) + (GLOSS_W === "all" ? ' <span class="eyebrow">' + [g.w].concat(g.also || []).filter((x, i, a) => a.indexOf(x) === i).map(x => esc(W[x].n)).join(" &middot; ") + '</span>' : '') + '</dt><dd>' + esc(g.d) + '</dd></div>'; }).join("") + '</dl>' : '<p class="small">No words match.</p>'; };
  let tm = 0; $("#gq").oninput = e => { clearTimeout(tm); tm = setTimeout(() => { GLOSS_Q = e.target.value; draw(); }, 150); };
  $("#g-quiz").onclick = () => startGlossQuiz(cur().length >= 4 ? cur() : all);
  $("#g-print").onclick = () => { const list = cur(); PRINT_BACK = glossView; printDoc(LEVEL.n + " Science glossary", '<h1>' + esc(LEVEL.n) + ' Science glossary</h1>' + (GLOSS_W !== "all" ? '<p class="sub">' + esc(W[GLOSS_W].n) + '</p>' : '') + '<dl>' + list.map(g => '<dt>' + esc(g.t) + '</dt><dd>' + esc(g.d) + '</dd>').join("") + '</dl>'); };
  draw();
}
function startGlossQuiz(pool){
  const kid = !!LEVEL.kid, n = kid ? 3 : 4, all = glossOf(WORLDS);
  const lc = x => x.t.toLowerCase().trim(), seen = {};
  const items = shuffle(pool).filter(g => !seen[lc(g)] && (seen[lc(g)] = 1)).slice(0, 10).map(g => {
    const near = shuffle(all.filter(x => lc(x) !== lc(g) && x.w === g.w)), far = shuffle(all.filter(x => lc(x) !== lc(g) && x.w !== g.w));
    const wrong = []; near.concat(far).forEach(x => { if (wrong.length < n - 1 && !wrong.some(y => y.t.toLowerCase() === x.t.toLowerCase())) wrong.push(x); });
    const o = shuffle([g].concat(wrong)), a = o.indexOf(g);
    return {t:"mcq", id:g.id, w:g.w, q:{q:"Which word matches this meaning?\n“" + g.d + "”", o:o.map(x => x.t), a, why:g.t + ": " + g.d, lvl:2}};
  });
  startRun({kind:"gloss", w:null, label:"Glossary quiz", items, again: () => startGlossQuiz(pool), back: glossView, onEnd: (pct, R) => { if (R.score >= 10) award("gloss"); }});
}

/* ---------- 2 & 3. print and download (worksheets, revision sheets, reports) ---------- */
const PRINT_CSS = 'body{font-family:"Work Sans",Arial,sans-serif;color:#14202B;max-width:760px;margin:24px auto;padding:0 18px;line-height:1.45;font-size:14.5px}h1{font-family:"Bricolage Grotesque",Arial,sans-serif;font-size:26px;margin:0 0 4px}h2{font-size:18px;margin:22px 0 8px;border-bottom:2px solid #14202B;padding-bottom:3px}.sub{color:#55656F;margin:0 0 14px}.q{break-inside:avoid;margin:0 0 16px}.q b{font-family:Arial,sans-serif}ol.o{margin:6px 0 0;padding-left:22px}ol.o li{list-style:none;margin:2px 0}.lines{border-bottom:1px solid #999;height:26px}.key{break-before:page}table{border-collapse:collapse;margin:6px 0}td,th{border:1px solid #999;padding:3px 7px;font-size:13px}dt{font-weight:700;margin-top:8px}dd{margin:2px 0 0 0}ul{padding-left:20px}li{margin:3px 0}.fig svg{max-width:100%;height:auto}.muted{color:#55656F;font-size:12.5px}';
function printDoc(title, body){
  const html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + esc(title) + '</title><style>' + PRINT_CSS + '</style></head><body>' + body + '<p class="muted" style="margin-top:28px">Science Quest &middot; MOE 2023 Primary Science syllabus</p></body></html>';
  XV().innerHTML = '<div class="wrap">' + backBtn("pr-back") + headH("&#128438;", "Ready to print", esc(title), "Print it, save it as a PDF from the print window, or download it as a page to print later.")
    + '<div class="btnrow noprint" style="margin-top:14px"><button class="btn" id="pr-go">Print</button><button class="btn alt" id="pr-dl">Download page</button></div><div id="pr-msg" class="small noprint"></div><div class="printable" id="printable">' + body + '</div><div style="height:40px"></div></div>';
  const back = PRINT_BACK; show("v-x");
  $("#pr-back").onclick = () => back ? back() : home();
  $("#pr-go").onclick = () => { try { window.print(); } catch(e){ $("#pr-msg").textContent = "Printing isn’t available here. Use Download page and print that instead."; } };
  $("#pr-dl").onclick = async () => {
    const name = title.replace(/[^\w\- ]+/g, "").trim().replace(/\s+/g, "-").toLowerCase().slice(0, 60) + ".html";
    if (DL){ try { await DL.save({filename:name, data:html}); $("#pr-msg").textContent = "Saved."; return; } catch(e){ if (e && e.code === "declined"){ $("#pr-msg").textContent = "Not saved."; return; } } }
    try { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([html], {type:"text/html"})); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); $("#pr-msg").textContent = "Downloaded " + name + "."; } catch(e){ $("#pr-msg").textContent = "This browser couldn’t save the file."; }
  };
}
let PRINT_BACK = null;
const pTbl = t => t && t.length ? '<table><tr>' + t[0].map(c => '<th>' + esc(c) + '</th>').join("") + '</tr>' + t.slice(1).map(r => '<tr>' + r.map(c => '<td>' + esc(c) + '</td>').join("") + '</tr>').join("") + '</table>' : '';
const pFig = f => { if (!f) return ""; try { return '<div class="fig">' + fig(f) + '</div>'; } catch(e){ return ""; } };
function worksheet(items, title, back){
  PRINT_BACK = back;
  const L = "ABCD", body = '<h1>' + esc(title) + '</h1><p class="sub">Name: ______________________ &nbsp; Date: ____________ &nbsp; Score: ______</p>'
    + items.map((it, i) => { const q = it.q, n = i + 1;
      if (it.t === "tf") return '<div class="q"><b>' + n + '.</b> True or false? ' + esc(q.s) + '<div>&#9744; True &nbsp;&nbsp; &#9744; False</div></div>';
      if (it.t === "mcq") return '<div class="q"><b>' + n + '.</b> ' + esc(q.q).replace(/\n/g, "<br>") + pFig(q.fig) + pTbl(q.tbl) + '<ol class="o">' + q.o.map((o, k) => '<li>(' + (k + 1) + ') ' + esc(o) + '</li>').join("") + '</ol></div>';
      if (it.t === "doc") return '<div class="q"><b>' + n + '.</b> ' + esc(q.q) + '<p>Which answer gets full marks?</p><ol class="o">' + q.answers.map((a, k) => '<li>' + L[k] + '. ' + esc(a) + '</li>').join("") + '</ol></div>';
      return '<div class="q"><b>' + n + '.</b> ' + esc(q.q).replace(/\n/g, "<br>") + ' <span class="muted">[' + q.marks + ' mark' + (q.marks > 1 ? "s" : "") + ']</span>' + pFig(q.fig) + pTbl(q.tbl) + '<div class="lines"></div>'.repeat(Math.max(2, q.marks + 1)) + '</div>'; }).join("")
    + '<div class="key"><h2>Answer key</h2>' + items.map((it, i) => { const q = it.q, n = i + 1;
      if (it.t === "tf") return '<div class="q"><b>' + n + '.</b> ' + (q.a ? "True" : "False") + '. <span class="muted">' + esc(q.why || "") + '</span></div>';
      if (it.t === "mcq") return '<div class="q"><b>' + n + '.</b> (' + (q.a + 1) + ') ' + esc(q.o[q.a]) + '. <span class="muted">' + esc(q.why || "") + '</span></div>';
      if (it.t === "doc") return '<div class="q"><b>' + n + '.</b> ' + L[q.best] + '. <span class="muted">' + esc(q.why || "") + '</span></div>';
      return '<div class="q"><b>' + n + '.</b> ' + esc(q.model) + '<div class="muted">Key ideas (1 mark each): ' + q.kw.map(a => esc(a[0])).join(" · ") + '</div></div>'; }).join("") + '</div>';
  printDoc(title, body);
}
function revisionSheet(id){
  const w = W[id], b = w.b; PRINT_BACK = () => world(id);
  const flash = shuffle(b.flash || []).slice(0, 12);
  printDoc(w.n + " revision sheet", '<h1>' + esc(w.n) + '</h1><p class="sub">' + esc(LEVEL.n) + ' &middot; ' + esc(w.theme) + ' &middot; one-page revision sheet</p>'
    + '<h2>Key ideas</h2><ul>' + b.notes.map(n => '<li><b>' + esc(n.h) + '.</b> ' + esc(n.t) + (n.kw && n.kw.length ? ' <span class="muted">Keywords: ' + n.kw.map(esc).join(", ") + '</span>' : '') + '</li>').join("") + '</ul>'
    + ((b.glossary || []).length ? '<h2>Key words</h2><dl>' + b.glossary.slice().sort((x, y) => x.t.localeCompare(y.t)).map(g => '<dt>' + esc(g.t) + '</dt><dd>' + esc(g.d) + '</dd>').join("") + '</dl>' : '')
    + (b.traps.length ? '<h2>Traps to avoid</h2><ul>' + b.traps.map(t => '<li>' + esc(t) + '</li>').join("") + '</ul>' : '')
    + (flash.length ? '<h2>Test yourself</h2><table><tr><th>Question</th><th>Answer</th></tr>' + flash.map(c => '<tr><td>' + esc(c.f) + '</td><td>' + esc(c.b) + '</td></tr>').join("") + '</table>' : ''));
}
function weeklyReport(){
  PRINT_BACK = parentView;
  const ws0 = weekStart(), d = new Date();
  let body = '<h1>Weekly science report</h1><p class="sub">Week starting ' + ws0.toDateString() + ' &middot; printed ' + d.toDateString() + '</p>';
  ROOT.players.forEach(p => {
    const wk = weekXP(p.id), data = ROOT.data[p.id] || {};
    body += '<h2>' + esc(avatarOf(p) + " " + p.name).trim() + '</h2><p>This week: <b>' + wk.q + '</b> questions answered, <b>' + wk.xp.toLocaleString() + '</b> XP.</p>';
    LEVELS.forEach(L => { const st = data[L.id]; if (!st || !Object.keys(st.acc || {}).length) return;
      const rows = L.worlds.map(w => { const a = (st.acc || {})[w.id]; return a && a[1] >= 3 ? {n:w.n, p:Math.round(100 * a[0] / a[1]), q:Math.round(a[1])} : null; }).filter(Boolean).sort((a, b) => a.p - b.p);
      const T = st.accT || {}, tl = {mcq:"MCQ", tf:"True/false", oe:"Written", doc:"Answer Doctor"};
      const lm = (st.mocks || []).slice(-1)[0];
      body += '<p><b>' + L.n + '</b> &middot; ' + (st.xp || 0).toLocaleString() + ' XP' + (lm ? ' &middot; last mock ' + lm.score + '/100 (AL' + lm.al + ')' : '') + '</p>'
        + (Object.keys(T).length ? '<p class="muted">By question type: ' + Object.keys(tl).filter(k => T[k] && T[k][1]).map(k => tl[k] + ' ' + Math.round(100 * T[k][0] / T[k][1]) + '%').join(" · ") + '</p>' : '')
        + (rows.length ? '<table><tr><th>World</th><th>Correct</th><th>Answered</th></tr>' + rows.map(r => '<tr><td>' + esc(r.n) + '</td><td>' + r.p + '%</td><td>' + r.q + '</td></tr>').join("") + '</table>' : ''); });
  });
  printDoc("Weekly science report", body);
}

/* ---------- 5. topic test ---------- */
function startTest(id){
  const kid = !!LEVEL.kid, n = kid ? 12 : 20;
  const lv = l => pick(poolOf(id, "mcq", q => q.lvl === l), 99);
  const items = kid ? pick(poolOf(id, "mcq"), 9).concat(pick(poolOf(id, "tf"), 3))
    : lv(1).slice(0, 3).concat(lv(2).slice(0, 6), lv(3).slice(0, 5), lv(4).slice(0, 2), pick(poolOf(id, "tf"), 2), pick(poolOf(id, "oe", q => !q.x), 2));
  startRun({kind:"test", w:id, label:"Topic Test", t0:Date.now(), items: items.slice(0, n).sort((a, c) => (a.t === "oe") - (c.t === "oe")), again: () => startTest(id),
    onEnd: (pct, R) => { const st = ws(id); st.best.test = Math.max(st.best.test || 0, pct); if (pct >= 85) award("test"); }});
}

/* ---------- 6. hints on written answers ---------- */
function hintBtn(it){ return it.t === "oe" ? '<button class="speak" id="oe-hint" title="Reveal one key idea. Each hint lowers the most you can score by 1 mark.">Hint (−1 mark)</button>' : ''; }
function bindHint(it){
  const b = $("#oe-hint"); if (!b) return; R.hints = R.hints || {};
  b.onclick = () => {
    const q = it.q, used = R.hints[it.id] || 0; if (used >= q.marks - 1){ b.disabled = true; return; }
    R.hints[it.id] = used + 1;
    let box = $("#hints"); if (!box){ box = document.createElement("div"); box.id = "hints"; box.className = "tip"; $("#oe-ans").before(box); }
    box.innerHTML = '<b>Hint' + (used + 1 > 1 ? "s" : "") + '.</b> Use these ideas in your answer: ' + q.kw.slice(0, used + 1).map(a => "“" + esc(a[0]) + "”").join(", ") + '. Most you can score now: ' + (q.marks - used - 1) + '/' + q.marks + '.';
    if (used + 1 >= q.marks - 1) b.disabled = true;
  };
}
const hintCap = it => it.q.marks - ((R && R.hints && R.hints[it.id]) || 0);

/* ---------- 4. confidence check ---------- */
function unsureBtn(it){ return (it.t === "mcq" || it.t === "tf") && !(ROOT.settings && ROOT.settings.unsure === false) ? '<button class="speak" id="unsure" aria-pressed="false" title="Tap if you are guessing. A lucky guess goes to the Mistake Clinic so you can check it again.">&#129300; Not sure</button>' : ''; }
function bindUnsure(it){ const b = $("#unsure"); if (!b) return; R.unsure = R.unsure || {}; b.onclick = () => { if (R.locked) return; const on = !R.unsure[it.id]; R.unsure[it.id] = on; b.setAttribute("aria-pressed", on); b.classList.toggle("on", on); }; }
function afterAnswer(it, right){
  if (!(R.unsure && R.unsure[it.id])) return "";
  if (right && BYID[it.id]){ if (!S.mistakes[it.id]) S.mistakes[it.id] = {n:1}; return '<p class="small"><b>Lucky guess?</b> It’s in the Mistake Clinic so you can make sure you really know it.</p>'; }
  return "";
}

/* ---------- 7. accuracy by question type ---------- */
function trackT(t, got, of){ S.accT = S.accT || {}; const a = S.accT[t] || (S.accT[t] = [0, 0]); a[0] += got; a[1] += of; }
function typeRow(st){ const T = st.accT || {}, tl = {mcq:"MCQ", tf:"True/false", oe:"Written", doc:"Answer Doctor"}; const ks = Object.keys(tl).filter(k => T[k] && T[k][1] >= 3); return ks.length ? ks.map(k => '<span class="tstat"><b>' + Math.round(100 * T[k][0] / T[k][1]) + '%</b> ' + tl[k] + '</span>').join("") : ''; }

/* ---------- 10. break reminders & keyboard help ---------- */
const PLAY = {start:0, last:0, warned:0};
function notePlay(){
  const now = Date.now(); if (!PLAY.start || now - PLAY.last > 10 * 6e4){ PLAY.start = now; PLAY.warned = 0; } PLAY.last = now;
  if (ROOT.settings && ROOT.settings.breaks === false) return;
  const mins = (now - PLAY.start) / 6e4, every = LEVEL.kid ? 20 : 30;
  if (mins >= every * (PLAY.warned + 1)){ PLAY.warned++; pendingToasts.push(LEVEL.kid ? "Great work! Time for a 5-minute break: stretch and drink some water." : Math.round(mins) + " minutes of revision. Take a 5-minute break: your brain remembers more after a rest."); }
}
function keysHelp(){
  if (document.querySelector(".overlay")) return;
  const o = document.createElement("div"); o.className = "overlay"; o.setAttribute("role", "dialog"); o.setAttribute("aria-label", "Keyboard shortcuts");
  o.innerHTML = '<div class="keyhelp"><h3>Keyboard shortcuts</h3><dl><dt>1 – 4</dt><dd>Choose an answer</dd><dt>Enter</dt><dd>Next question</dd><dt>Space</dt><dd>Flip a flashcard</dd><dt>1 / 2</dt><dd>Flashcard: knew it / still learning</dd><dt>?</dt><dd>Show this help</dd><dt>Esc</dt><dd>Close</dd></dl><div class="btnrow"><button class="btn" id="kh-ok">Got it</button></div></div>';
  document.body.appendChild(o); const close = () => o.remove(); $("#kh-ok").onclick = close; $("#kh-ok").focus(); o.onclick = e => { if (e.target === o) close(); };
}
document.addEventListener("keydown", e => {
  if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if (e.key === "?") keysHelp(); else if (e.key === "Escape"){ const o = document.querySelector(".overlay .keyhelp"); if (o) o.parentNode.remove(); }
});
$("#foot-keys").onclick = keysHelp;

/* ---------- 9. new badges ---------- */
BADGES.push(["flash50","Memory Master","50 flashcards in long-term memory"], ["drill","Weak Spot Fixer","Score 8+ in a Weak-spot Drill"], ["test","Topic Tested","Score 85%+ in a Topic Test"], ["gloss","Word Wizard","10/10 in a Glossary quiz"], ["builder","Quiz Maker","Finish a quiz you built"]);
function checkFlashBadge(){ if (flashStats(WORLDS.map(w => w.id)).learnt >= 50) award("flash50"); }
