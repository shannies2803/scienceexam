# Wave 5 content pack for one world

Work ONLY inside /home/claude/scienceexam/src (never read or write /home/claude/sci, and ignore any *_w.js file).
Read docs/SCHEMA_L.md (and docs/SCHEMA.md / docs/SCHEMA_X.md / docs/SCHEMA_Y.md it points to): accuracy, MOE 2023 Standard syllabus scope for the level, Singapore contexts, lesson shape, fig shapes (bar, line, flow, cycle, magnets, rings, setups, venn, organs, plant, flower, cell, circuit, web), kw rules (alternatives match at a word START; a single-letter or number alternative matches only the whole word; a keyword the pupil negates does not count unless the model also negates it), escaping. READ ALL existing files for this world first (including flashcards and lessons) so nothing is duplicated:
- P3 worlds (living, plants, animals, fungi, materials, pcycles, acycles, magnets, skills, mixed): bank/<id>.js, _x.js (if any), _y.js, _z.js, _v.js
- other worlds: lv/<id>.js, lv/<id>_x.js, lv/<id>_y.js, lv/<id>_z.js

Output file:
- P3 → src/bank/<id>_u.js : `window.BANKU = window.BANKU || {}; BANKU["<id>"] = {...};`
- others → src/lv/<id>_u.js : `window.LBU = window.LBU || {}; LBU["<id>"] = {...};`

Upper levels (P3–P6):
- glossary: 12 key terms {t, d}. `t` = the term (≤ 40 chars, e.g. "Germination", "Insulator of heat", "Stomata"); `d` = the definition or function in the exact words Singapore markers accept (≤ 200 chars, one or two sentences, at the level). Terms must be central to this world; no two packs of one world may repeat a term already defined in this world's flashcards word for word — phrase it as a definition.
- lessons: 2 NEW worked lessons (shape exactly as SCHEMA_L/SCHEMA_Y: {h, concept, example:{q, fig?, tbl?, marks, think:[3–5], answer}, tip, try:{q, o:[4], a, why, fig?, tbl?}}) on mark-costly skills NOT already covered by this world's existing lessons (read their `h` titles first).
- flash: 12 new flashcards {f, b} (b ≤ 200 chars, marker keywords), different from existing ones.
- mcq: 20 — lvl 4×1, 7×2, 6×3, 3×4. At least 8 with a fig or tbl. Mix formats: data reading, "which is NOT", combination (A/B/C statements), predict-the-result, choose-the-fair-pair, at least 4 everyday Singapore applications.
- oe: 4 multi-part (a)(b)(c) worth 3–4 marks, marks === kw.length, at least 2 with fig/tbl; mark 1 as x:1. Label each part's marks in the stem, e.g. "(a) … [1]".
- tf: 10 (half false, each targeting a real misconception)
P1–2 worlds (k-*): glossary 8 (very simple words, e.g. t "Senses", d "The five ways our body finds out about the world: seeing, hearing, smelling, tasting and touching."), lessons 1 (SCHEMA_L kid shape: try has THREE options), flash 10 (`pic` emoji allowed, never giving the answer away), mcq 16 with THREE options (lvl 6×1, 6×2, 4×3), tf 8. No oe/doc/sort.

BALANCED OPTIONS: the correct option must never stand out by length or detail; distractors plausible and parallel; spread correct positions evenly.
Checks (must pass): `cd /home/claude/scienceexam/src && node audit.js --files <your file>` → ISSUES 0, and `node lencheck.js <your file>` → FLAGGED 0. Then self-review as a strict exam setter: re-derive every key (graphs, circuits, food-chain counts, magnet poles, combination options), check glossary and flashcard wording is exactly right, fix ambiguity.
Final reply: counts + max 3 lines of flags.
