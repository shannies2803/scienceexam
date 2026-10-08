# Full world file for a new level (P1–2, P4, P5, P6)

Background: a gamified Singapore primary science revision web app (already live for P3). Each "world" is one topic. Read /home/claude/scienceexam/src/docs/SCHEMA.md and /home/claude/scienceexam/src/docs/SCHEMA_X.md for the base item shapes, fig shapes, kw rules and escaping rules — they all apply. For reference/tone, skim one existing P3 file such as /home/claude/scienceexam/src/bank/magnets.js and /home/claude/scienceexam/src/bank/magnets_y.js. Keyword matching in the app: a kw alternative matches only at the START of a word in the pupil's answer, and does NOT count if the pupil negates it ("not", "no", "non", "cannot", "doesn't", "without"…) while the model answer does not negate it.

Syllabus: Singapore MOE Primary Science Syllabus 2023, STANDARD Science. Stay inside the named level's scope (earlier-level knowledge may be assumed; never require later-level knowledge). Science must be 100% accurate and phrased the way Singapore markers accept (use the standard keywords, e.g. "digestive juices break down food into simpler substances", "absorbs light energy to make food", "gains heat and expands", "closed circuit"). Use Singapore contexts naturally. Exactly one defensible answer for every MCQ. Spread correct answers evenly across option positions.

## Upper levels (P4, P5, P6)  — file /home/claude/scienceexam/src/lv/<worldId>.js
```js
window.LB = window.LB || {};
LB["<worldId>"] = {
  notes:   [12 × {h, t, kw:[...]}],          // cover the WHOLE topic incl. every learning outcome; t 2-4 sentences
  traps:   [8 strings],
  lessons: [5 × {h, concept, example:{q, fig?, tbl?, marks, think:[3-5 steps], answer}, tip, try:{q,o:[4],a,why,fig?,tbl?}}],   // the 5 most mark-costly skills
  mcq:     [40 × {q, o:[4], a, why, lvl, fig?, tbl?}],   // lvl split: 8×1, 14×2, 12×3, 6×4 (4 = expert: harder than a top-school exam, reasoning-based, still in scope). AT LEAST 16 carry a fig.
  tf:      [20 × {s, a, why}],                // ~half false, targeting real misconceptions
  sort:    [3 × {title, groups, items}],
  oe:      [14 × {q, marks, kw, model, fig?, tbl?, x?}],   // at least 7 multi-part (a)(b)(c) worth 3-4 marks (one kw idea per mark, marks === kw.length); at least 6 with fig; mark 3 of the hardest with x:1 (expert)
  doc:     [5 × {q, marks, answers:[3], best, why}]   // Answer Doctor
};
```
For P6 worlds: questions should feel PSLE-like (PSLE Booklet A MCQ style and Booklet B open-ended style).

## P1–2 "Little Scientists" worlds — file /home/claude/scienceexam/src/lv/<worldId>.js
Singapore has no Science subject in P1–2; this is a friendly discovery track for a bright 7-year-old (who loves animals and pets) that builds the foundations for P3 Science. Language: very short sentences, simple words a P1 child can read (the app also reads text aloud). No typing tasks.
```js
LB["<worldId>"] = {
  notes:   [8 × {h, t, kw:[], pic?}],   // t = 1-2 short sentences; kw = 1-3 "science words" to learn
  traps:   [5 strings],                  // gentle "Watch out!" facts
  lessons: [4 × {h, concept, example:{q, pic?, think:[3 short steps], answer}, tip, try:{q, o:[3], a, why, pic?}}],
  mcq:     [36 × {q, o:[3], a, why, lvl, pic?, fig?}],   // THREE options; lvl 14×1, 14×2, 8×3 (3 = challenge for a bright child)
  tf:      [20 × {s, a, why, pic?}],
  sort:    [4 × {title, groups, items}]  // 8 items, 2-3 groups
};
```
`pic` = a string of 1-4 emoji that shows the thing being asked about (e.g. "🐔🐶🐟"), used as the picture for young readers. Only use emoji that clearly show the thing; never let the emoji give away the answer. `fig` optional (simple bar graph / venn / setups only).

## NEW fig types (in addition to those in SCHEMA_X.md)
- Body systems: { type:"organs", system:"digestive"|"respiratory"|"circulatory", mark:{ <part>: "A", ... } }
  digestive parts: mouth, gullet, stomach, small_intestine, large_intestine, anus
  respiratory parts: nose, windpipe, lungs
  circulatory parts: heart, lungs, blood_vessels
  All parts of the system are drawn; only parts in `mark` get a label (a letter like "A", or the part's name if you want it named).
- Plant: { type:"plant", mark:{ roots:"A", stem:"B", leaf:"C", flower:"D", fruit:"E" } }  (any subset)
- Flower (cross-section): { type:"flower", mark:{ petal, sepal, anther, filament, stigma, style, ovary, ovule } }  (any subset, values = labels)
- Cell: { type:"cell", kind:"plant"|"animal", mark:{ cell_wall, cell_membrane, cytoplasm, nucleus, chloroplast, vacuole } }  (animal cells: only cell_membrane, cytoplasm, nucleus)
- Circuit: { type:"circuit", cells:1-3, main:[items], branches:[[items],[items]] }  — `cells` batteries in series; `main` items are in series on the main loop; optional `branches` (2-3 arrays) are connected in PARALLEL with each other, in series with main. Item: {k:"bulb", label:"A"} | {k:"switch", label:"S1", open:true|false} | {k:"gap", label:"X", text:"steel clip"} (an object placed across the gap between two crocodile clips). Keep at most 4 items per branch/main.
- Food web / chain: { type:"web", links:[["grass","grasshopper"],["grasshopper","frog"],["frog","snake"]] }  — each link [food, eater] draws an arrow from the food to the organism that eats it (energy flow). Use letters (e.g. "P","Q") as names to hide organisms. Max 9 organisms.

## Validation (run and fix until clean)
node -e "global.window=global; require('/home/claude/scienceexam/src/lv/<worldId>.js'); const b=LB['<worldId>']; console.log(Object.keys(b).map(k=>k+':'+b[k].length).join(' '))"
Also check: option counts (4, or 3 for P1–2), a within range, lvl counts, fig counts; kw arrays of lowercase strings; every oe model contains, at a word start, a substring of every kw idea; marks === kw.length for multi-part; doc best in 0..2; every fig matches its schema (circuit items valid, web links arrays of 2 strings, organ part names valid for the system, cell kind rules, ring gaps consistent).
Then do a careful self-review pass as a strict exam setter: re-derive every answer key (esp. lvl 3-4, graphs, circuits, food webs) and fix anything ambiguous or inaccurate.
Final reply: counts + max 3 lines of flags. Do not paste content back.
