# Extension bank format (adds depth to an existing world)

Read /home/claude/sci/SCHEMA.md first — all its rules on accuracy, P3 level (MOE 2023 syllabus: P3 = Diversity of living/non-living things & materials, Life cycles of plants & animals, Magnets; P4 topics like plant/human systems, matter, light, heat are OUT), Singapore context, escaping and answer-position spread still apply. Also READ the existing base file /home/claude/sci/bank/<id>.js so you do NOT duplicate its questions — go deeper and wider.

File: /home/claude/sci/bank/<id>_x.js

```js
window.BANKX = window.BANKX || {};
BANKX["<id>"] = {
  notes: [ ...3 deeper notes, same shape as base... ],
  traps: [ ...3 more traps... ],
  mcq:  [ ...20 items; lvl split about 4 lvl1 / 8 lvl2 / 8 lvl3; AT LEAST 9 must carry a `fig` (see below) ... ],
  tf:   [ ...8 items... ],
  oe:   [ ...8 items; AT LEAST 4 with `fig`; AT LEAST 4 are multi-part Booklet-B style "(a) ... (b) ..." (optionally (c)) worth 3 or 4 marks, where kw has one idea per mark ... ],
  doc:  [ ...5 "Answer Doctor" items ... ]
};
```

## doc (Answer Doctor) item
{ q: "Open-ended question", marks: 2, answers: ["answer by pupil 1", "answer by pupil 2", "answer by pupil 3"], best: 1, why: "Why the best one scores full marks and exactly what each weaker answer is missing (e.g. no keyword, claim without reason, repeats the question, says the wrong way round, too vague like 'it is healthy')." }
Exactly one answer must get full marks. The weak answers must be realistic P3 mistakes. Vary `best` position.

## fig (diagram) — rendered as an SVG by the app. Optional field on mcq and oe items. Question text must refer to it ("The diagram shows…", "Study the graph…"). Use exactly one of these shapes:

- Bar graph: { type:"bar", title:"optional", xl:"x-axis label", yl:"y-axis label with unit", bars:[["Paper A",12],["Paper B",30]] }  (2-6 bars, numbers >= 0)
- Line graph: { type:"line", title:"optional", xl:"Day", yl:"Height of plant (cm)", pts:[["0",0],["2",3],["4",6]] }  (3-8 points)
- Classification flowchart (binary key): { type:"flow", root:"Animals", node:{ q:"Has feathers?", yes:"A", no:{ q:"Has 6 legs?", yes:"B", no:"C" } } }  — node is {q,yes,no}; yes/no is either another node or a leaf string (a letter like "A" or a short name). Max depth 3. Questions keep short (<= 28 chars).
- Life cycle diagram: { type:"cycle", stages:["Egg","?","Pupa","Adult"] }  (3-5 stages, drawn in a loop with arrows; use "?" or letters "P","Q" for hidden stages)
- Bar magnets in a row: { type:"magnets", items:[{label:"A", poles:"NS"},{label:"B", poles:"??"},{label:"X", kind:"bar", text:"iron"}], between:["attract","?"] }  poles is 2 chars for left end/right end: "NS","SN", or "??" for unlabelled magnet. kind:"bar" = a plain rod (non-magnet or unknown material) with `text` written on it. between (optional) has length items-1: "attract" | "repel" | "?" | "" drawn in the gap between neighbours.
- Ring magnets on a rod: { type:"rings", rings:[{label:"A", top:"N"},{label:"B", top:"?"},{label:"C", top:"S"}], gaps:[true,false] }  rings listed BOTTOM to TOP; top = pole on the ring’s upper face ("N","S" or "?" hidden); gaps[i] = true if ring i+1 floats above ring i (repel), false if touching. Must be physically consistent where poles are known (facing poles: ring i’s top face vs ring i+1’s bottom face, bottom = opposite of top; same → repel → gap true).
- Experiment set-ups: { type:"setups", items:[{label:"A", icon:"beaker", lines:["Moist cotton wool","In a dark cupboard","25 °C"]}, ...] }  2-4 items; icon one of beaker|dish|jar|pot|box|plate; up to 4 short lines (<= 24 chars each).
- Venn diagram: { type:"venn", a:"Can fly", b:"Lays eggs", onlyA:["bat"], both:["eagle","butterfly"], onlyB:["snake"], neither:["dog"] }  (short labels; any list may be empty; at most 4 per region)

Diagram-based questions must be the kind P3 exam papers actually use: graph reading and comparison, classification keys, identifying groups in a Venn, missing life-cycle stages, predicting attract/repel, identifying which set-ups to compare for a fair test, inferring poles of hidden magnets from ring gaps.

## Validation (run and fix until clean)
node -e "global.window=global; require('/home/claude/sci/bank/<id>.js'); require('/home/claude/sci/bank/<id>_x.js'); const x=BANKX['<id>']; console.log(Object.keys(x).map(k=>k+':'+x[k].length).join(' '))"
Plus check: mcq 4 options, a in 0..3; oe kw array-of-arrays of lowercase strings and model contains a substring from every idea; marks === kw.length for multi-part items; doc has 3 answers and best in 0..2; every fig matches its schema exactly (types, lengths, rings consistency).
Final reply: counts only + 1-3 lines of flags.
