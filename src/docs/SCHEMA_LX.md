# Extension pack for an existing P1–2 / P4 / P5 / P6 world

Read /home/claude/scienceexam/src/docs/SCHEMA_L.md (and SCHEMA.md, SCHEMA_X.md it points to) — all rules on accuracy, syllabus scope (MOE 2023 Standard), Singapore context, fig shapes, kw matching (word-start, negation), escaping and answer-position spread apply. Then READ the world's existing file /home/claude/scienceexam/src/lv/<worldId>.js fully, so you add NEW questions that go wider and deeper and never duplicate an existing one (different scenarios, different organisms/objects/data, different question angles).

File to write: /home/claude/scienceexam/src/lv/<worldId>_x.js
```js
window.LBX = window.LBX || {};
LBX["<worldId>"] = { notes:[...], traps:[...], lessons:[...], mcq:[...], tf:[...], oe:[...], doc:[...] , sort:[...] };
```
Upper levels (P4, P5, P6): notes 3, traps 3, lessons 2, mcq 24 (lvl 5×1, 8×2, 7×3, 4×4; at least 10 with a fig), tf 10, oe 8 (at least 5 multi-part 3–4 marks with marks === kw.length; at least 4 with a fig; 2 marked x:1), doc 3, sort 1.
P1–2 (k-* worlds): notes 2, traps 2, lessons 2, mcq 24 with THREE options (lvl 8×1, 10×2, 6×3), tf 10, sort 2. No oe, no doc. Very simple words; `pic` emoji allowed (never giving the answer away).

BALANCED OPTIONS (important): the correct option must NOT stand out by length or detail. Make wrong options equally specific and plausible, grammatically parallel. After writing, run `node /home/claude/scienceexam/src/lencheck.js /home/claude/scienceexam/src/lv/<worldId>_x.js` — it must report FLAGGED 0.

Validation (use your own uniquely named script in the scratchpad; other agents share it): the file loads in node (global.window=global); option counts right; a in range; lvl counts; fig shapes valid (incl. circuit/web/organs/plant/flower/cell rules from SCHEMA_L); oe model contains a word-start match for every kw idea and is not negated differently; doc best in 0..2; sort indices valid. Then self-review as a strict exam setter: re-derive every key (graphs, circuits, food chains, poles), fix ambiguity.
Final reply: counts + max 3 lines of flags.
