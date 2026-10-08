# Question bank file format (one file per world)

File: /home/claude/scienceexam/src/bank/<worldId>.js  — plain browser JS, no imports, no template literals with ${}.

```js
window.BANK = window.BANK || {};
BANK["<worldId>"] = {
  notes: [ { h: "Short heading", t: "2-4 sentences of the key idea, P3 language, precise.", kw: ["exact phrase examiners want", "..."] } ],   // 8-12 cards, covers ENTIRE topic
  traps: [ "Common mistake -> the correct idea (one line)" ],   // 6-10
  mcq: [ { q: "Question text", o: ["A","B","C","D"], a: 0, why: "1-2 sentence explanation of why the answer is right AND why the tempting wrong one is wrong", lvl: 1, tbl: [["Header1","Header2"],["r1c1","r1c2"]] } ],  // 30. a = index of correct option. lvl 1=recall, 2=apply, 3=tricky/AL1-level. tbl optional (for data/experiment questions). About 8 lvl1, 12 lvl2, 10 lvl3.
  tf: [ { s: "Statement", a: true, why: "One line" } ],   // 16, about half false; false ones should target real misconceptions
  sort: [ { title: "Instruction e.g. Sort these into living and non-living", groups: ["Living","Non-living"], items: [["seed",0],["rock",1]] } ],   // 3 sort tasks, 2-4 groups, 8-10 items each
  oe: [ { q: "Open-ended question (can describe a scenario/experiment)", marks: 2, kw: [["accepted phrase a","synonym"],["second required idea","alt"]], model: "Full model answer in the words a marker gives full marks for.", tbl: optional } ]   // 10. kw = list of required ideas; each idea is a list of lowercase substrings, ANY one of which counts as that idea present in a child's typed answer. Keep substrings short and robust (e.g. ["oxygen"], ["reproduce","young","offspring"]). marks 1-3 (usually = number of kw ideas, max 3).
};
```

Rules
- Target: Singapore MOE Primary Science Syllabus 2023, Primary 3 (lower block, Standard). Child is high-ability, scoring near full marks; goal is AL1 (90+) in P3 End-of-Year. Include the tricky question styles found in top-school P3 EOY papers (e.g. Nanyang, Raffles Girls', Rosyth, Tao Nan, Henry Park): "which statement is NOT true", combination options ("A and C only", "A, B and C only"), classification charts described in text, data tables, fair-test design, explaining observations with the Claim/Evidence/Reasoning (CER) style.
- Science must be 100% accurate and match what Singapore P3 textbooks (e.g. "My Pals Are Here", "Science Doodle"/ "Inquiry-based") and markers accept. No P5/P6 content (e.g. no photosynthesis equations, no reproduction/pollination details beyond P3 level). Avoid ambiguous questions.
- Use Singapore contexts where natural (hawker centre, HDB, MRT, Pulau Ubin, Singapore Zoo, chilli padi, durian, kopi).
- Vary the position of the correct answer in MCQs (spread a across 0-3 roughly evenly).
- Plain ASCII quotes inside JS strings must be escaped properly; prefer double-quoted JS strings and use ’ (curly apostrophe) inside text to avoid escaping issues.
- After writing, validate with node: `node -e "global.window=global; require('/home/claude/scienceexam/src/bank/<id>.js'); const b=BANK['<id>']; console.log(Object.keys(b).map(k=>k+':'+b[k].length).join(' '))"` and also check every mcq has 4 options and 0<=a<=3, every sort item group index is valid, and every oe kw is an array of arrays of lowercase strings. Also check that the model answer of each oe actually contains at least one substring of every kw idea (so a perfect answer auto-scores full marks). Fix any failures.
- Final reply: just the counts per section per file, plus any content decisions worth flagging (1-3 lines). Do not paste the content back.
