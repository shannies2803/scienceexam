# Depth pack format (lessons + expert tier) for one world

Read /home/claude/scienceexam/src/docs/SCHEMA.md and /home/claude/scienceexam/src/docs/SCHEMA_X.md first: all rules on accuracy, P3 scope (MOE 2023: diversity of living/non-living, plants, animals, fungi & bacteria, materials; life cycles of plants and animals; magnets; process skills — P4 topics such as plant/human systems, heat, light, matter are OUT), Singapore contexts, `fig` shapes, `tbl`, kw rules and escaping apply. Read the world's existing files (bank/<id>.js and bank/<id>_x.js) so you build on them without duplicating.

File: /home/claude/scienceexam/src/bank/<id>_y.js

```js
window.BANKY = window.BANKY || {};
BANKY["<id>"] = {
  lessons: [ /* 5 */ {
    h: "Lesson title, e.g. How to read a classification key",
    concept: "2-4 sentences: the big idea or exam skill, precise, P3 language.",
    example: { q: "A full exam-style question (may have fig or tbl)", fig: optional, tbl: optional, marks: 2,
               think: ["Step 1: what a top scorer notices first…", "Step 2: …", "Step 3: …"],   // 3-5 steps, each 1-2 sentences, showing the reasoning, not just the answer
               answer: "The full-marks model answer" },
    tip: "One-line exam tip (e.g. 'Always name the variable in full: the type of material, not just material.')",
    try: { q: "A NEW question testing the same skill", o: ["","","",""], a: 0, why: "", fig: optional, tbl: optional }
  } ],
  expert: [ /* 12 MCQ, lvl: 4 */ { q, o:[4], a, why, lvl: 4, fig?, tbl? } ],   // at least 6 with fig. Harder than a top-school P3 EOY: multi-step reasoning, combining two observations, eliminating options carefully, unusual-but-correct examples, data with a twist (e.g. an anomaly, two variables in a table where only one comparison is fair). Still 100% within P3 knowledge — difficulty comes from thinking, not from P5/P6 facts. Exactly one defensible answer. `why` must walk through the reasoning (2-3 sentences).
  oex: [ /* 4 */ { q, marks: 3 or 4, kw, model, fig?, tbl? } ]   // expert multi-part (a)(b)(c) open-ended, one kw idea per mark
};
```
Lessons should cover the 5 most mark-costly skills for this world (e.g. for magnets: inferring poles from ring gaps; the repulsion test; designing a fair magnet-strength test; explaining uses from properties; stroke-method pole prediction). Vary the correct `a` positions.

Validation (fix until clean):
node -e "global.window=global; require('/home/claude/scienceexam/src/bank/<id>_y.js'); const y=BANKY['<id>']; console.log('lessons',y.lessons.length,'expert',y.expert.length,'oex',y.oex.length)"
Also check: every mcq/try has 4 options & a in 0..3; expert all lvl 4; every oex model contains a substring of every kw idea (matching starts at a word start: " "+kw); marks === kw.length; figs valid per SCHEMA_X (ring gaps physically consistent).
Final reply: counts + max 3 lines of flags.
