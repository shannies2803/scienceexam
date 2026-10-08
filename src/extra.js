/* ================= toolkit: flashcards, search, quiz builder, drills, saved, settings, backup ================= */
const XV = () => $("#v-x");
const DAYN = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 6e4) / 864e5); };
const lvWorlds = () => WORLDS;
const backBtn = (id, label) => '<button class="back" id="' + id + '">&larr; ' + (label || "Back") + '</button>';
const headH = (num, eyebrow, title, p) => '<div class="d-head"><span class="d-head-num mono">' + num + '</span><div><div class="eyebrow">' + eyebrow + '</div><h2>' + title + '</h2>' + (p ? '<p>' + p + '</p>' : '') + '</div></div>';
const KINDLAB = {custom:"My Quiz", drill:"Weak-spot Drill", saved:"Saved questions", retry:"Retry", find:"Search practice", pick:"Practice"};

/* ---------- 6. settings (this device) ---------- */
const SET = Object.assign({text:"m", theme:"auto", motion:true, speech:1}, ROOT.settings || {});
function applySettings(){
  ROOT.settings = SET;
  document.documentElement.style.setProperty("--zoom", {s:.9, m:1, l:1.12, xl:1.25}[SET.text] || 1);
  if (SET.theme === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", SET.theme);
  document.body.classList.toggle("nomotion", !SET.motion);
}
applySettings();
function seg(name, cur, opts){ return '<div class="seg" role="group" aria-label="' + esc(name) + '">' + opts.map(([v, l]) => '<button class="opt" data-set="' + name + '" data-v="' + v + '"' + (String(cur) === String(v) ? ' data-s="pick" aria-pressed="true"' : ' aria-pressed="false"') + '>' + l + '</button>').join("") + '</div>'; }
let DL = null;
function settingsView(msg){
  let h = '<div class="wrap">' + backBtn("xback") + headH("&#9881;", "This device", "Settings", "Display and sound settings apply to everyone who plays on this device.")
    + '<div class="setgrid">'
    + '<div class="setrow"><h3>Text size</h3>' + seg("text", SET.text, [["s","Small"],["m","Normal"],["l","Large"],["xl","Extra large"]]) + '</div>'
    + '<div class="setrow"><h3>Theme</h3>' + seg("theme", SET.theme, [["auto","Match device"],["light","Light"],["dark","Dark"]]) + '</div>'
    + '<div class="setrow"><h3>Sound effects</h3>' + seg("sound", ROOT.sound ? 1 : 0, [[1,"On"],[0,"Off"]]) + '</div>'
    + '<div class="setrow"><h3>Confetti and animations</h3>' + seg("motion", SET.motion ? 1 : 0, [[1,"On"],[0,"Off"]]) + '<p class="small" style="margin:0">Turn off for fewer distractions.</p></div>'
    + '<div class="setrow"><h3>Read-aloud speed</h3>' + seg("speech", SET.speech, [[.8,"Slow"],[1,"Normal"],[1.15,"Fast"]]) + '</div>'
    + '</div>'
    + '<div class="sec-h" style="margin-top:26px"><h2 style="font-size:24px">Back up progress</h2><span class="eyebrow">All players &middot; all levels</span></div>'
    + '<div class="setrow" style="margin-top:12px"><p class="small" style="margin:0">Save a backup file of every player’s stars, XP, mistakes, flashcards and saved questions. Load it on another device or browser to carry on from there.</p>'
    + '<div class="btnrow"><button class="btn" id="bk-save">Download backup</button><label class="btn alt" for="bk-file" style="display:inline-flex;align-items:center">Restore from file</label><input type="file" id="bk-file" accept=".json,application/json" hidden></div><div id="bk-msg" class="small">' + (msg ? esc(msg) : '') + '</div></div>'
    + '<div style="height:40px"></div></div>';
  XV().innerHTML = h; show("v-x");
  $("#xback").onclick = () => home();
  document.querySelectorAll("[data-set]").forEach(b => b.onclick = () => {
    const k = b.dataset.set, v = b.dataset.v;
    if (k === "sound") ROOT.sound = v === "1"; else if (k === "motion") SET.motion = v === "1"; else if (k === "speech") SET.speech = +v; else SET[k] = v;
    applySettings(); save(); settingsView();
  });
  $("#bk-save").onclick = backupSave;
  $("#bk-file").onchange = e => { const f = e.target.files && e.target.files[0]; if (f) backupLoad(f); };
}
/* ---------- 7. backup & restore ---------- */
async function backupSave(){
  const m = $("#bk-msg"), d = new Date(), name = "science-quest-backup-" + d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0") + ".json";
  const data = JSON.stringify({app:"science-quest", v:1, at:d.toISOString(), root:{players:ROOT.players, cur:ROOT.cur, data:ROOT.data}});
  if (DL){
    try { await DL.save({filename:name, data}); m.textContent = "Backup saved."; return; }
    catch(e){ const c = e && e.code; if (c === "declined"){ m.textContent = "Backup not saved."; return; } if (c === "rate_limited"){ m.textContent = "A save prompt is already open."; return; } }
  }
  try { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([data], {type:"application/json"})); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); m.textContent = "Backup downloaded as " + name + "."; }
  catch(e){ m.textContent = "This browser couldn’t save the file."; }
}
function backupLoad(file){
  const m = $("#bk-msg");
  file.text().then(txt => {
    let j; try { j = JSON.parse(txt); } catch(e){ m.textContent = "That file isn’t a Science Quest backup."; return; }
    const r = j && j.root;
    if (!j || j.app !== "science-quest" || !r || !Array.isArray(r.players) || !r.players.length || typeof r.data !== "object" || !r.players.every(p => p && typeof p.id === "string" && typeof p.name === "string")){ m.textContent = "That file isn’t a Science Quest backup."; return; }
    const lvN = Object.values(r.data).reduce((t, d) => t + Object.keys(d || {}).length, 0);
    m.innerHTML = 'Backup from ' + esc(String(j.at || "").slice(0, 10)) + ': ' + r.players.map(p => esc(p.name)).join(", ") + ' (' + lvN + ' level records). Restoring replaces the progress on this device. <div class="btnrow"><button class="btn" id="bk-go">Restore now</button><button class="btn alt" id="bk-no">Cancel</button></div>';
    $("#bk-no").onclick = () => settingsView();
    $("#bk-go").onclick = () => {
      const now = Date.now();
      ROOT.players = r.players.map(p => ({id:p.id, name:String(p.name).slice(0, 24), level: LEVELS.some(L => L.id === p.level) ? p.level : "p3"}));
      ROOT.data = {}; Object.keys(r.data).forEach(pid => { if (!ROOT.players.some(p => p.id === pid)) return; ROOT.data[pid] = {}; Object.keys(r.data[pid] || {}).forEach(lv => { const st = r.data[pid][lv]; if (st && typeof st === "object" && LEVELS.some(L => L.id === lv)){ st.t = now; ROOT.data[pid][lv] = st; SYNC.dirty.add(dkey(pid, lv)); } }); });
      ROOT.cur = ROOT.players.some(p => p.id === r.cur) ? r.cur : ROOT.players[0].id;
      setLevel(player().level || "p3"); save(true); settingsView("Progress restored.");
    };
  });
}

/* ---------- 1. flashcards with spaced repetition (Leitner boxes) ---------- */
const BOXDAYS = [0, 1, 3, 7, 16, 35];
function flashOf(wid){ const w = W[wid]; return ((w && w.b.flash) || []).map((c, i) => ({id:wid + ":f:" + i, w:wid, c})); }
function flashStats(wids){
  const fc = S.fc || {}, d = DAYN(); let due = 0, fresh = 0, learnt = 0, total = 0;
  wids.forEach(id => flashOf(id).forEach(x => { total++; const r = fc[x.id]; if (!r) fresh++; else { if (r[1] <= d) due++; if (r[0] >= 4) learnt++; } }));
  return {due, fresh, learnt, total};
}
function flashQueue(wids, n){
  const fc = S.fc || {}, d = DAYN(), all = [];
  wids.forEach(id => all.push(...flashOf(id)));
  const due = shuffle(all.filter(x => fc[x.id] && fc[x.id][1] <= d)).sort((a, b) => fc[a.id][1] - fc[b.id][1]);
  const fresh = shuffle(all.filter(x => !fc[x.id]));
  const q = due.slice(0, n); return q.concat(fresh.slice(0, Math.max(0, n - q.length)));
}
function startFlash(wids, back){
  touchStreak();
  const queue = flashQueue(wids, LEVEL.kid ? 10 : 15);
  if (!queue.length){
    XV().innerHTML = '<div class="wrap">' + backBtn("xback") + headH("&#10003;", "Flashcards", "All caught up", "No cards are due right now. Cards you know come back after 1, 3, 7, 16 and then 35 days, so they stay in long-term memory.") + '<div style="height:40px"></div></div>';
    show("v-x"); $("#xback").onclick = back; return;
  }
  const F = {q:queue.slice(), i:0, known:0, seen:0, missed:new Set(), xp:0};
  S.fc = S.fc || {};
  const draw = flipped => {
    const x = F.q[F.i], w = W[x.w], c = x.c;
    SAY.fc = flipped ? c.f + ". " + c.b : c.f;
    XV().innerHTML = '<div class="wrap" style="' + vars(w) + '"><div class="hud"><button class="chip" id="fc-quit">&larr; Done</button><span class="pill">Flashcards</span><div class="bar"><i style="width:' + Math.round(100 * F.i / F.q.length) + '%"></i></div><span class="pill mono">' + (F.i + 1) + '/' + F.q.length + '</span><span class="pill mono">+' + F.xp + ' XP</span></div>'
      + '<div class="fcard' + (flipped ? " flipped" : "") + '"><div class="qtop"><span class="eyebrow">' + esc(w.n) + '</span><span style="display:flex;gap:10px;align-items:center"><span class="eyebrow">' + (S.fc[x.id] ? "Box " + S.fc[x.id][0] : "New card") + '</span>' + speakBtn("fc") + '</span></div>'
      + '<div class="fc-body">' + picH(c.pic) + '<div class="fc-f">' + esc(c.f) + '</div>' + (flipped ? '<div class="fc-b">' + esc(c.b) + '</div>' : '') + '</div>'
      + '<div class="btnrow fc-btns">' + (flipped ? '<button class="btn" id="fc-yes" style="background:var(--good)">I knew it</button><button class="btn alt" id="fc-no">Still learning</button>' : '<button class="btn" id="fc-flip">Flip card</button>') + '</div>'
      + '<p class="small fc-help">' + (flipped ? "Be honest: say “knew it” only if you could say the answer before flipping. Keys 1 and 2 work too." : "Say the answer in your head (or out loud), then flip. Space bar flips.") + '</p></div></div>';
    show("v-x"); bindSpeak();
    $("#fc-quit").onclick = () => finish();
    if (!flipped){ $("#fc-flip").onclick = () => draw(true); $("#fc-flip").focus(); return; }
    const grade = ok => {
      const r = S.fc[x.id] || [0, 0], d = DAYN();
      if (!F.missed.has(x.id)) F.seen++;
      if (ok){ const nb = F.missed.has(x.id) ? 1 : Math.min(5, r[0] + 1); S.fc[x.id] = [nb, d + BOXDAYS[nb]]; if (!F.missed.has(x.id)){ F.known++; F.xp += 4; gain(4); } sfx("y"); }
      else { S.fc[x.id] = [1, d]; if (!F.missed.has(x.id)){ F.missed.add(x.id); F.q.push(x); } sfx("n"); }
      save();
      F.i++; if (F.i >= F.q.length) finish(); else draw(false);
    };
    $("#fc-yes").onclick = () => grade(true); $("#fc-no").onclick = () => grade(false); $("#fc-yes").focus();
  };
  const finish = () => {
    if (F.seen){ logRun("flash", wids.length === 1 ? wids[0] : ""); if (F.known >= 10) award("first"); }
    save();
    const st = flashStats(wids);
    XV().innerHTML = '<div class="wrap"><div class="res"><div class="res-h"><div class="big mono">' + F.known + '/' + F.seen + '</div><div><h2 style="font-size:28px">' + (F.seen === 0 ? "See you next time." : F.known === F.seen ? "Every card known!" : "Good review.") + '</h2><div class="small mono">+' + F.xp + ' XP &middot; ' + st.learnt + '/' + st.total + ' cards in long-term memory (box 4+)</div></div></div><div class="res-b">'
      + '<p style="margin:0">' + (F.missed.size ? F.missed.size + " card" + (F.missed.size > 1 ? "s" : "") + " went back to box 1 and will come up again tomorrow." : "Known cards move up a box and come back later: 1, 3, 7, 16, then 35 days.") + '</p>'
      + '<div class="btnrow"><button class="btn" id="fc-more">More cards</button><button class="btn alt" id="fc-back">Back</button></div></div></div></div>';
    show("v-x"); if (F.seen && F.known === F.seen && F.seen >= 5) confetti(70);
    $("#fc-more").onclick = () => startFlash(wids, back); $("#fc-back").onclick = back; setTimeout(flushToasts, 300);
  };
  draw(false);
}
function flashHub(){
  const ids = lvWorlds().map(w => w.id), all = flashStats(ids);
  let h = '<div class="wrap">' + backBtn("xback") + headH(all.due + all.fresh ? (all.due || all.fresh) : "&#10003;", "Remember it for the exam", "Flashcards", "Quick-fire recall of the facts and keywords that score marks. Cards you know come back less often; cards you miss come back tomorrow.")
    + '<div class="btnrow" style="margin-top:16px"><button class="btn" id="fc-all"' + (all.due + all.fresh ? "" : " disabled") + '>Review all worlds &middot; ' + all.due + ' due, ' + all.fresh + ' new</button></div><div class="lessons" style="margin-top:16px">';
  lvWorlds().forEach((w, i) => { const s = flashStats([w.id]); if (!s.total) return;
    h += '<button class="lrow" data-fw="' + w.id + '" style="' + vars(w) + '"><span class="n">' + (i + 1) + '</span><span><h3>' + esc(w.n) + '</h3><p>' + s.due + ' due &middot; ' + s.fresh + ' new &middot; ' + s.learnt + '/' + s.total + ' learnt</p><div class="meter" style="margin-top:6px"><i style="width:' + Math.round(100 * s.learnt / s.total) + '%"></i></div></span><span class="mono small">&rarr;</span></button>'; });
  h += '</div><div style="height:40px"></div></div>';
  XV().innerHTML = h; show("v-x");
  $("#xback").onclick = () => home();
  $("#fc-all").onclick = () => startFlash(ids, flashHub);
  document.querySelectorAll("[data-fw]").forEach(b => b.onclick = () => startFlash([b.dataset.fw], flashHub));
}

/* ---------- 2. search ---------- */
function itemText(it){ const q = it.q; return it.t === "tf" ? q.s + " " + (q.why || "") : it.t === "doc" ? q.q + " " + q.answers.join(" ") + " " + (q.why || "") : it.t === "oe" ? q.q + " " + q.model : q.q + " " + q.o.join(" ") + " " + (q.why || ""); }
function hl(s, terms){ let out = esc(s); terms.forEach(t => { if (t.length < 2) return; out = out.replace(new RegExp("(" + esc(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); }); return out; }
function snip(s, terms, n){ s = String(s); const low = s.toLowerCase(); let at = -1; terms.forEach(t => { const k = low.indexOf(t); if (k >= 0 && (at < 0 || k < at)) at = k; }); const st = Math.max(0, at - 40); return (st ? "…" : "") + s.slice(st, st + (n || 160)) + (s.length > st + (n || 160) ? "…" : ""); }
let FIND_Q = "";
function findView(){
  XV().innerHTML = '<div class="wrap">' + backBtn("xback") + headH("&#128269;", LEVEL.n + " &middot; every world", "Search", "Look up any idea, word or experiment: questions, Field Notes and flashcards.")
    + '<div class="findbar"><input id="fq" type="search" placeholder="e.g. pupa, magnet poles, germinate, conductor" aria-label="Search" value="' + esc(FIND_Q) + '" autocomplete="off"></div><div id="fres"></div><div style="height:40px"></div></div>';
  show("v-x"); $("#xback").onclick = () => home();
  const inp = $("#fq"); let tm = 0;
  inp.oninput = () => { clearTimeout(tm); tm = setTimeout(() => { FIND_Q = inp.value; runFind(); }, 180); };
  runFind(); setTimeout(() => inp.focus(), 50);
}
function runFind(){
  const box = $("#fres"), terms = FIND_Q.toLowerCase().split(/\s+/).filter(t => t.length >= 2);
  if (!terms.length){ box.innerHTML = '<p class="small">Type at least two letters.</p>'; return; }
  const has = s => { const l = String(s).toLowerCase(); return terms.every(t => l.includes(t)); };
  const res = [];
  lvWorlds().forEach(w => {
    w.b.notes.forEach(n => { if (has(n.h + " " + n.t + " " + (n.kw || []).join(" "))) res.push({k:"Field note", w, h:n.h, body:n.t, kw:n.kw}); });
    (w.b.flash || []).forEach(c => { if (has(c.f + " " + c.b)) res.push({k:"Flashcard", w, h:c.f, body:c.b}); });
  });
  const qs = ALL.filter(it => !it.w.startsWith("c-") && has(itemText(it)));
  const tl = {mcq:"MCQ", tf:"True or false", oe:"Written", doc:"Answer Doctor"};
  let h = '<div class="small mono" style="margin:10px 0">' + (res.length + qs.length) + ' results' + (qs.length ? ' &middot; ' + qs.length + ' questions' : '') + '</div>'
    + (qs.length ? '<div class="btnrow" style="margin-bottom:12px"><button class="btn" id="fplay">Practise ' + Math.min(10, qs.length) + ' of these questions</button></div>' : '');
  h += '<div class="flist">' + res.slice(0, 30).map(r => '<details class="fitem" style="' + vars(r.w) + '"><summary><span class="eyebrow">' + esc(r.w.n) + ' &middot; ' + r.k + '</span><b>' + hl(r.h, terms) + '</b></summary><p>' + hl(r.body, terms) + '</p>' + (r.kw && r.kw.length ? '<div class="kws">' + r.kw.map(k => '<span>' + esc(k) + '</span>').join("") + '</div>' : '') + '</details>').join("")
    + qs.slice(0, 40).map(it => '<details class="fitem" style="' + vars(W[it.w]) + '"><summary><span class="eyebrow">' + esc(W[it.w].n) + ' &middot; ' + tl[it.t] + '</span><span>' + hl(snip(it.t === "tf" ? it.q.s : it.q.q, terms), terms) + '</span></summary>' + reviewItem(it) + '<div class="btnrow"><button class="btn alt" data-fp="' + esc(it.id) + '">Try this question</button></div></details>').join("") + '</div>';
  if (qs.length > 40) h += '<p class="small">Showing the first 40 questions. Add another word to narrow it down.</p>';
  box.innerHTML = h;
  const fp = $("#fplay"); if (fp) fp.onclick = () => startRun({kind:"find", w:null, items: pick(qs, 10), again: () => findView(), back: findView});
  document.querySelectorAll("[data-fp]").forEach(b => b.onclick = () => startRun({kind:"pick", w:null, items:[BYID[b.dataset.fp]], back: findView, again: () => findView()}));
}

/* ---------- 3. custom quiz builder ---------- */
function builderView(){
  const kid = !!LEVEL.kid, c = S.qb = Object.assign({w:[], t:["mcq","tf"], d:"any", n:10}, S.qb || {});
  c.w = c.w.filter(id => WORLDS.some(w => w.id === id));
  const types = kid ? [["mcq","Pick the answer"],["tf","True or false"]] : [["mcq","MCQ"],["tf","True or false"],["oe","Written answers"],["doc","Answer Doctor"]];
  const diffs = kid ? [["any","Any"],["1","Easy"],["2","Medium"],["3","Challenge"]] : [["any","Any"],["12","Recall and Apply"],["3","Challenge"],["4","Expert"]];
  let h = '<div class="wrap">' + backBtn("xback") + headH("&#9998;", "Build your own", "Quiz builder", "Choose the worlds, question types and difficulty. Handy for revising exactly the topics in the next school test.")
    + '<div class="setgrid"><div class="setrow" style="grid-column:1/-1"><h3>Worlds</h3><div class="wchips">' + WORLDS.map(w => '<button class="opt" data-qw="' + w.id + '"' + (c.w.includes(w.id) ? ' data-s="pick" aria-pressed="true"' : ' aria-pressed="false"') + ' style="' + vars(w) + '">' + esc(w.n) + '</button>').join("") + '</div><div class="btnrow"><button class="btn alt" id="qw-all">All worlds</button><button class="btn alt" id="qw-none">Clear</button></div></div>'
    + '<div class="setrow"><h3>Question types</h3><div class="wchips">' + types.map(([v, l]) => '<button class="opt" data-qt="' + v + '"' + (c.t.includes(v) ? ' data-s="pick" aria-pressed="true"' : ' aria-pressed="false"') + '>' + l + '</button>').join("") + '</div></div>'
    + '<div class="setrow"><h3>Difficulty (MCQs)</h3>' + seg("qd", c.d, diffs) + '</div>'
    + '<div class="setrow"><h3>How many</h3>' + seg("qn", c.n, [[5,"5"],[10,"10"],[20,"20"],[30,"30"]]) + '</div></div>'
    + '<div id="qb-info" class="small" style="margin-top:14px"></div><div class="btnrow"><button class="btn" id="qb-go">Start my quiz</button></div><div style="height:40px"></div></div>';
  XV().innerHTML = h; show("v-x"); $("#xback").onclick = () => home();
  const pool = () => ALL.filter(it => c.w.includes(it.w) && c.t.includes(it.t) && (it.t !== "mcq" || c.d === "any" || c.d.includes(String(it.q.lvl || 1))));
  const upd = () => { const p = pool(), n = Math.min(c.n, p.length); $("#qb-info").textContent = !c.w.length ? "Pick at least one world." : !c.t.length ? "Pick at least one question type." : p.length + " questions match. You’ll get " + n + ", the ones seen least first."; $("#qb-go").disabled = !n; };
  document.querySelectorAll("[data-qw]").forEach(b => b.onclick = () => { const id = b.dataset.qw; c.w = c.w.includes(id) ? c.w.filter(x => x !== id) : c.w.concat(id); b.dataset.s = c.w.includes(id) ? "pick" : ""; b.setAttribute("aria-pressed", c.w.includes(id)); upd(); });
  document.querySelectorAll("[data-qt]").forEach(b => b.onclick = () => { const id = b.dataset.qt; c.t = c.t.includes(id) ? c.t.filter(x => x !== id) : c.t.concat(id); b.dataset.s = c.t.includes(id) ? "pick" : ""; b.setAttribute("aria-pressed", c.t.includes(id)); upd(); });
  document.querySelectorAll('[data-set="qd"],[data-set="qn"]').forEach(b => b.onclick = () => { if (b.dataset.set === "qd") c.d = b.dataset.v; else c.n = +b.dataset.v; document.querySelectorAll('[data-set="' + b.dataset.set + '"]').forEach(x => { x.dataset.s = x === b ? "pick" : ""; x.setAttribute("aria-pressed", x === b); }); upd(); });
  $("#qw-all").onclick = () => { c.w = WORLDS.map(w => w.id); builderView(); }; $("#qw-none").onclick = () => { c.w = []; builderView(); };
  $("#qb-go").onclick = () => { save(); const p = pool(), mc = p.filter(x => x.t !== "oe" && x.t !== "doc"), wr = p.filter(x => x.t === "oe" || x.t === "doc"); const nw = wr.length ? Math.min(wr.length, Math.max(1, Math.round(c.n * (mc.length ? .3 : 1)))) : 0; const items = pick(mc, c.n - nw).concat(pick(wr, nw)); startRun({kind:"custom", w:null, items: shuffle(items).sort((a, b) => (a.t === "oe") - (b.t === "oe")), again: () => { builderView(); const b = $("#qb-go"); if (b && !b.disabled) b.click(); }, back: builderView}); };
  upd();
}

/* ---------- 4. weak-spot drill ---------- */
function weakWorlds(){
  const rows = WORLDS.map(w => { const a = S.acc[w.id]; return {w, n: a ? a[1] : 0, p: a && a[1] ? a[0] / a[1] : null}; });
  const rated = rows.filter(r => r.n >= 5).sort((a, b) => a.p - b.p);
  if (rated.length >= 2) return rated.slice(0, 3);
  return rows.sort((a, b) => mastery(a.w.id) - mastery(b.w.id)).slice(0, 3);
}
function startDrill(){
  const ww = weakWorlds(), ids = ww.map(r => r.w.id), kid = !!LEVEL.kid;
  const miss = S.miss || {};
  const fromMist = shuffle(Object.keys(S.mistakes).filter(id => BYID[id] && ids.includes(BYID[id].w) && BYID[id].t !== "oe")).slice(0, 4).map(id => BYID[id]);
  const often = Object.keys(miss).filter(id => BYID[id] && ids.includes(BYID[id].w) && BYID[id].t !== "oe" && !fromMist.some(x => x.id === id)).sort((a, b) => miss[b] - miss[a]).slice(0, 2).map(id => BYID[id]);
  const have = new Set(fromMist.concat(often).map(x => x.id));
  const fresh = pick(ALL.filter(it => ids.includes(it.w) && it.t === "mcq" && !have.has(it.id) && (kid ? it.q.lvl >= 2 : it.q.lvl >= 2 && it.q.lvl <= 3)), 10 - have.size);
  startRun({kind:"drill", w:null, label:"Weak-spot Drill: " + ww.map(r => r.w.n).join(", "), items: shuffle(fromMist.concat(often, fresh)).slice(0, 10), again: startDrill});
}

/* ---------- 5. saved questions (bookmarks) ---------- */
function toggleSave(id){ S.bm = S.bm || {}; if (S.bm[id]) delete S.bm[id]; else S.bm[id] = Date.now(); save(); return !!S.bm[id]; }
function bmBtn(id){ const on = !!(S.bm && S.bm[id]); return '<button class="speak bm' + (on ? " on" : "") + '" data-bm="' + esc(id) + '" aria-pressed="' + on + '" title="Save this question to your review list">' + (on ? "&#9733; Saved" : "&#9734; Save") + '</button>'; }
function bindBm(){ document.querySelectorAll("[data-bm]").forEach(b => b.onclick = e => { e.stopPropagation(); const on = toggleSave(b.dataset.bm); b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); b.innerHTML = on ? "&#9733; Saved" : "&#9734; Save"; }); }
function savedIds(){ return Object.keys(S.bm || {}).filter(id => BYID[id]).sort((a, b) => S.bm[b] - S.bm[a]); }
function savedView(){
  const ids = savedIds();
  let h = '<div class="wrap">' + backBtn("xback") + headH(ids.length, "Your review list", "Saved questions", "Tap &#9734; Save on any question to keep it here: tricky ones, ones to ask a teacher about, or ones to revise the night before.")
    + (ids.length ? '<div class="btnrow" style="margin-top:14px"><button class="btn" id="sv-play">Practise saved questions</button></div>' : '<p class="small" style="margin-top:16px">Nothing saved yet. Look for &#9734; Save at the top of each question.</p>')
    + '<div class="review" style="margin-top:14px">' + ids.map(id => { const it = BYID[id]; return '<div style="' + vars(W[it.w]) + '"><div class="eyebrow" style="display:flex;justify-content:space-between;gap:8px;margin-bottom:4px"><span>' + esc(W[it.w].n) + '</span>' + bmBtn(id) + '</div>' + reviewItem(it) + '</div>'; }).join("") + '</div><div style="height:40px"></div></div>';
  XV().innerHTML = h; show("v-x"); bindBm();
  $("#xback").onclick = () => home();
  const p = $("#sv-play"); if (p) p.onclick = () => startRun({kind:"saved", w:null, items: shuffle(ids.map(id => BYID[id])).slice(0, 20), again: () => { savedView(); const b = $("#sv-play"); if (b) b.click(); }, back: savedView});
}

/* ---------- 10. retry wrong answers ---------- */
function startRetry(items, w, back){ const list = items.filter(Boolean).filter((x, i, a) => a.findIndex(y => y.id === x.id) === i); startRun({kind:"retry", w: w || null, label:"Retry what I missed", items: shuffle(list), again: () => startRetry(list, w, back), back}); }

/* ---------- 9. parent view extras ---------- */
function noteMiss(id){ S.miss = S.miss || {}; S.miss[id] = (S.miss[id] || 0) + 1; const ks = Object.keys(S.miss); if (ks.length > 400){ ks.sort((a, b) => S.miss[a] - S.miss[b]).slice(0, 50).forEach(k => delete S.miss[k]); } }
function heatClass(p){ return p == null ? "h0" : p >= 90 ? "h5" : p >= 80 ? "h4" : p >= 65 ? "h3" : p >= 50 ? "h2" : "h1"; }
function parentExtras(pid){
  const d = ROOT.data[pid] || {}; let h = "";
  const lv = LEVELS.filter(L => d[L.id] && Object.keys(d[L.id].acc || {}).length);
  if (lv.length){
    h += '<div><div class="eyebrow">Accuracy by world</div><div class="heat">' + lv.map(L => '<div class="heat-row"><span class="mono small">' + L.n + '</span><div class="heat-cells">' + L.worlds.map(w => { const a = (d[L.id].acc || {})[w.id], p = a && a[1] >= 3 ? Math.round(100 * a[0] / a[1]) : null; return '<span class="hc ' + heatClass(p) + '" title="' + esc(w.n) + ': ' + (p == null ? "not enough answers" : p + "% correct over " + Math.round(a[1]) + " questions") + '"><b>' + esc(w.n) + '</b><i class="mono">' + (p == null ? "–" : p + "%") + '</i></span>'; }).join("") + '</div></div>').join("") + '</div>'
      + '<div class="heat-key small"><span class="hc h1"></span>under 50% <span class="hc h2"></span>50–64 <span class="hc h3"></span>65–79 <span class="hc h4"></span>80–89 <span class="hc h5"></span>90+ <span class="hc h0"></span>not enough answers</div></div>';
  }
  const miss = []; LEVELS.forEach(L => { const st = d[L.id]; if (!st || !st.miss) return; Object.entries(st.miss).forEach(([id, n]) => { if (BYID[id] && n >= 2) miss.push({it:BYID[id], n, L}); }); });
  miss.sort((a, b) => b.n - a.n);
  if (miss.length) h += '<div><div class="eyebrow">Most-missed questions</div><div class="missl">' + miss.slice(0, 6).map(m => '<details class="fitem" style="' + vars(W[m.it.w]) + '"><summary><span class="eyebrow">' + m.L.n + ' &middot; ' + esc(W[m.it.w].n) + ' &middot; wrong ' + m.n + ' times</span><span>' + esc(snip(m.it.t === "tf" ? m.it.q.s : m.it.q.q, [], 140)) + '</span></summary>' + reviewItem(m.it) + '</details>').join("") + '</div><p class="small" style="margin:6px 0 0">These are worth going through together: the same slip twice usually means a missing idea, not carelessness.</p></div>';
  return h;
}

/* ---------- home toolkit section ---------- */
function toolkitHTML(){
  const kid = !!LEVEL.kid, fs = flashStats(WORLDS.map(w => w.id)), nb = savedIds().length, ww = weakWorlds();
  const card = (c, title, tag, p, btn, id, dis) => '<div class="bosscard" style="--sc:var(--' + c + ');--tintc:var(--' + c + '-t)"><div class="bh"><h3>' + title + '</h3><span class="eyebrow mono">' + tag + '</span></div><div class="bb"><p>' + p + '</p><div class="btnrow" style="margin-top:auto"><button class="btn" id="' + id + '"' + (dis ? " disabled" : "") + '>' + btn + '</button></div></div></div>';
  return '<div class="sec"><div class="sec-h"><h2>Toolkit</h2><span class="eyebrow">Revise your way</span></div><div class="boss" style="grid-template-columns:repeat(auto-fit,minmax(230px,1fr))">'
    + card("leaf", "Flashcards", fs.due + " due &middot; " + fs.fresh + " new", kid ? "Flip a card, say the answer, then check. Cards you know come back later." : "Spaced repetition for the facts and keywords markers want. " + fs.learnt + "/" + fs.total + " cards learnt so far.", "Open flashcards", "tk-flash")
    + card("tang", "Weak-spot Drill", "10 questions", "Aimed at " + ww.map(r => esc(r.w.n) + (r.p != null ? " (" + Math.round(100 * r.p) + "%)" : "")).join(", ") + ": your " + (ww.some(r => r.p != null) ? "lowest-scoring" : "least-explored") + " worlds, with past mistakes mixed in.", "Start drill", "tk-drill")
    + card("blue", "Quiz builder", "Your choice", "Pick worlds, question types and difficulty. Good for revising just the topics in the next school test.", "Build a quiz", "tk-build")
    + card("plum", "Saved questions", nb + " saved", "Questions you starred with &#9734; Save, ready to review before a test.", nb ? "Review saved" : "Nothing saved yet", "tk-saved", !nb)
    + card("sea", "Search", "Everything", "Find any word, idea or experiment across the questions, Field Notes and flashcards.", "Search", "tk-find")
    + '</div></div>';
}
function bindToolkit(){
  const g = (sel, fn) => { const e = $(sel); if (e) e.onclick = fn; };
  g("#tk-flash", flashHub); g("#tk-drill", startDrill); g("#tk-build", builderView); g("#tk-saved", savedView); g("#tk-find", findView);
}
$("#set-btn").onclick = () => settingsView();
document.addEventListener("keydown", e => {
  if (!$("#v-x").classList.contains("on") || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if (e.key === " " && $("#fc-flip")){ e.preventDefault(); $("#fc-flip").click(); }
  else if (e.key === "1" && $("#fc-yes")) $("#fc-yes").click();
  else if (e.key === "2" && $("#fc-no")) $("#fc-no").click();
});
(async () => { try { if (window.claude && window.claude.use) DL = await window.claude.use("downloads"); } catch(e){} })();
