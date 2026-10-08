# Wave 3 content pack for one world

Read /home/claude/sci/SCHEMA_L.md (and SCHEMA.md / SCHEMA_X.md it points to): accuracy, MOE 2023 Standard syllabus scope for the level, Singapore contexts, fig shapes (bar, line, flow, cycle, magnets, rings, setups, venn, organs, plant, flower, cell, circuit, web), kw rules, escaping. READ ALL existing files for this world first so nothing is duplicated:
- P3 worlds (ids living, plants, animals, fungi, materials, pcycles, acycles, magnets, skills, mixed): bank/<id>.js, bank/<id>_x.js (if exists), bank/<id>_y.js
- other worlds: lv/<id>.js and lv/<id>_x.js

Output file:
- P3 worlds → /home/claude/sci/bank/<id>_z.js with `window.BANKZ = window.BANKZ || {}; BANKZ["<id>"] = {...};`
- other worlds → /home/claude/sci/lv/<id>_y.js with `window.LBY = window.LBY || {}; LBY["<id>"] = {...};`

Contents, upper levels (P3–P6):
- lessons: 1 new worked lesson (same shape as SCHEMA_L) on a mark-costly skill not yet covered
- mcq: 20 — lvl split 3×1, 6×2, 7×3, 4×4. At least 10 carry a fig or tbl. At least 5 use the exam's COMBINATION format (statements A, B, C listed in the stem; options like "A only", "A and B only", "B and C only", "A, B and C"). At least 4 target a specific common misconception (say which in `why`).
- oe: 6 Booklet-B style, ALL multi-part (a)(b)(c) worth 3–4 marks, one kw idea per mark (marks === kw.length). At least 4 are experiment-based with a fig or tbl (aim, variables, fair test, trend, conclusion, improvement). Mark 2 of them x:1.
- tf: 10 (half false, each targeting a real misconception)
- doc: 2 Answer Doctor items
P1–2 worlds (k-*): lessons 1, mcq 20 with THREE options (lvl 7×1, 8×2, 5×3), tf 10, sort 1. No oe/doc. Very simple words; `pic` emoji allowed (never giving the answer away).

BALANCED OPTIONS: the correct option must never stand out by length/detail; distractors plausible and parallel.
Checks (must pass): `node /home/claude/sci/audit.js --files <your file>` → ISSUES 0 (it validates structure, figs, keyword self-marking, length cue) and `node /home/claude/sci/lencheck.js <your file>` → FLAGGED 0. Then self-review as a strict exam setter: re-derive every key (graphs, circuits, food-chain counts, magnet poles, combination options) and fix ambiguity.
Final reply: counts + max 3 lines of flags.
