// usage: node lencheck.js <file.js> [...]  -> lists MCQs whose correct option is clearly the longest
global.window = global;
const path = require('path');
let bad = 0;
for (const f of process.argv.slice(2)){
  const before = new Set(Object.keys(global.BANK||{}).concat(Object.keys(global.BANKX||{}), Object.keys(global.BANKY||{}), Object.keys(global.LB||{}), Object.keys(global.LBX||{})));
  delete require.cache[path.resolve(f)]; require(path.resolve(f));
  const groups = [];
  for (const G of ['BANK','BANKX','BANKY','BANKZ','LB','LBX','LBY']) for (const id in (global[G]||{})) {
    const b = global[G][id];
    const srcs = [['mcq', b.mcq], ['expert', b.expert], ['lesson-try', (b.lessons||[]).map(l => l.try)]];
    groups.push([G, id, srcs]);
  }
  const seen = new Set();
  for (const [G, id, srcs] of groups){
    if (!f.includes(id.replace(/^.*\//,''))) continue;
    for (const [k, arr] of srcs) (arr||[]).forEach((q, i) => {
      if (!q || !q.o) return; const key = G+id+k+i; if (seen.has(key)) return; seen.add(key);
      const L = q.o.map(s => s.length), s2 = [...L].sort((a, b) => b - a);
      if (L[q.a] === s2[0] && s2[0] > s2[1] * 1.25 && s2[0] - s2[1] >= 8){ bad++; console.log(`${G}["${id}"].${k}[${i}]  correct=${q.a}  lens=${L.join('/')}  :: ${q.q.slice(0, 70).replace(/\n/g,' ')}`); }
    });
  }
}
console.log('FLAGGED', bad);
