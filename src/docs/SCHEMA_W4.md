# Wave 4 content pack for one world

Work ONLY inside /home/claude/scienceexam/src (do not read or write /home/claude/sci).
Read docs/SCHEMA_L.md (and docs/SCHEMA.md / docs/SCHEMA_X.md it points to): accuracy, MOE 2023 Standard syllabus scope for the level, Singapore contexts, fig shapes (bar, line, flow, cycle, magnets, rings, setups, venn, organs, plant, flower, cell, circuit, web), kw rules (alternatives match at a word START; a single-letter alternative matches only the whole word; a keyword the pupil negates does not count unless the model also negates it), escaping. READ ALL existing files for this world first so nothing is duplicated:
- P3 worlds (living, plants, animals, fungi, materials, pcycles, acycles, magnets, skills, mixed): bank/<id>.js, bank/<id>_x.js (if any), bank/<id>_y.js, bank/<id>_z.js
- other worlds: lv/<id>.js, lv/<id>_x.js, lv/<id>_y.js

Output file:
- P3 → src/bank/<id>_v.js : `window.BANKV = window.BANKV || {}; BANKV["<id>"] = {...};`
- others → src/lv/<id>_z.js : `window.LBZ = window.LBZ || {}; LBZ["<id>"] = {...};`

Upper levels (P3–P6):
- flash: 15 keyword flashcards {f, b}. `f` = a short prompt a pupil must recall ("Function of the stomach", "Define: pollination", "Why does a metal spoon feel colder than a plastic one?"); `b` = the precise answer in the exact keywords Singapore markers reward (max ~200 chars). Cover the world's must-know definitions, functions, cause→effect chains and exam phrases.
- mcq: 20 — lvl 4×1, 7×2, 6×3, 3×4. At least 8 with a fig or tbl. Mix formats: data reading, "which is NOT", combination (A/B/C statements), predict-the-result, choose-the-fair-pair, and at least 4 "everyday Singapore application" items (hawker centre, HDB, MRT, school canteen, Gardens by the Bay, reservoir, etc.).
- oe: 4 multi-part (a)(b)(c) worth 3–4 marks, marks === kw.length, at least 2 with fig/tbl; mark 1 as x:1.
- tf: 10 (half false, each targeting a real misconception)
- sort: 1
P1–2 worlds (k-*): flash 12 (f may carry a `pic` emoji; very simple words, e.g. f "A baby frog is called a…" b "tadpole"), mcq 16 with THREE options (lvl 6×1, 6×2, 4×3), tf 8, sort 1. No oe/doc.

BALANCED OPTIONS: the correct option must never stand out by length/detail; distractors plausible and parallel; spread correct positions evenly.
Checks (must pass): `cd /home/claude/scienceexam/src && node audit.js --files <your file>` → ISSUES 0, and `node lencheck.js <your file>` → FLAGGED 0. Then self-review as a strict exam setter: re-derive every key (graphs, circuits, food-chain counts, magnet poles, combination options), check flashcard backs are exactly right, fix ambiguity.
Final reply: counts + max 3 lines of flags.
