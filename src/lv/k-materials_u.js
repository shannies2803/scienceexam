window.LBU = window.LBU || {};
LBU["k-materials"] = {
  glossary: [
    { t: "Material", d: "What a thing is made of. Wood, metal, plastic, glass, paper, cloth and rubber are all materials." },
    { t: "Waterproof", d: "Does not let water pass through. Plastic, rubber, glass and metal are waterproof." },
    { t: "See-through", d: "Lets light pass, so we can see things on the other side, like a clear glass window." },
    { t: "Float", d: "To stay on top of the water, like a cork or a wooden block." },
    { t: "Sink", d: "To go down to the bottom of the water, like a coin or a stone." },
    { t: "Stretchy", d: "Gets longer when we pull it, and goes back when we let go, like a rubber band." },
    { t: "Recycle", d: "To make old paper, cans and bottles into new things. Put clean ones in the blue recycling bin." },
    { t: "Fair test", d: "A test where we change only one thing and keep everything else the same." }
  ],
  lessons: [
    {
      h: "Check every need",
      concept: "Sometimes a material must do two jobs. Check each need, one by one. If a material fails even one need, cross it out.",
      example: { q: "Raj needs a cover for his bicycle seat at the void deck. It must keep the rain off AND bend to fit the seat. Which is best: a plastic sheet, a wooden board or a cotton cloth?", pic: "🚲🌧️",
        think: ["Need 1: keep the rain off. Cotton soaks up water. Cross it out.", "Need 2: bend to fit the seat. A wooden board is stiff. Cross it out.", "The plastic sheet passes both needs."],
        answer: "The plastic sheet. It is waterproof, so it keeps the rain off, and it is bendy, so it fits the seat." },
      tip: "Check every need. One ‘no’ means cross it out.",
      try: { q: "Mei has wet swimming clothes. She needs something waterproof AND bendy to carry them home. Which is best?", o: ["a glass jar", "a plastic bag", "a paper bag"], a: 1, why: "A plastic bag is waterproof and bendy. A glass jar is stiff, and a paper bag soaks up water and tears.", pic: "🩱💧" }
    }
  ],
  flash: [
    { f: "Natural rubber comes from…", b: "rubber trees", pic: "🩴" },
    { f: "Leather for shoes comes from…", b: "animal skin, such as cow skin", pic: "👞" },
    { f: "Water in a very cold freezer…", b: "freezes and turns into ice", pic: "💧" },
    { f: "A metal spoon does not bend easily. We say it is…", b: "stiff", pic: "🥄" },
    { f: "Metal, glass and plastic can all look…", b: "shiny" },
    { f: "Wet clay becomes … when it dries.", b: "hard" },
    { f: "Using fewer things, like bringing your own bag, is called…", b: "reducing", pic: "🛍️" },
    { f: "Plastic and glass are not from nature. They are…", b: "made by people in factories" },
    { f: "Change only ONE thing and keep the rest the same. This is a…", b: "fair test" },
    { f: "If you drop a glass cup on a hard floor, it may…", b: "break" }
  ],
  mcq: [
    { q: "What is a red ang pow packet made of?", o: ["glass", "rubber", "paper"], a: 2, why: "An ang pow packet is made of paper. It is thin and folds easily. Glass and rubber are not used.", lvl: 1, pic: "🧧" },
    { q: "Which of these is made of rubber?", o: ["a glass vase", "a balloon", "a wooden ruler"], a: 1, why: "A balloon is made of rubber, so it can stretch when we blow it up.", lvl: 1 },
    { q: "Which of these feels smooth?", o: ["a glass marble", "a pineapple skin", "a tree trunk"], a: 0, why: "A glass marble feels smooth. Pineapple skin and tree bark feel bumpy and rough.", lvl: 1 },
    { q: "Which material comes from a plant?", o: ["glass", "plastic", "cotton"], a: 2, why: "Cotton grows on the cotton plant. Glass and plastic are made by people.", lvl: 1 },
    { q: "Chopsticks at a hawker centre are often made of…", o: ["cloth", "wood", "glass"], a: 1, why: "Many chopsticks are made of wood. Cloth is too soft and glass can break.", lvl: 1, pic: "🥢" },
    { q: "Which of these is usually made of plastic?", o: ["a toothbrush handle", "a five-cent coin", "a glass marble"], a: 0, why: "Most toothbrush handles are plastic. A coin is metal and a marble is glass.", lvl: 1, pic: "🪥" },

    { q: "It is raining. Wei walks to the MRT station. Which shoes will keep her feet dry?", o: ["cloth canvas shoes", "paper slippers", "rubber boots"], a: 2, why: "Rubber is waterproof, so rubber boots keep her feet dry. Cloth and paper soak up water.", lvl: 2, pic: "🌧️🚇" },
    { q: "Which of these is NOT waterproof?", o: ["a tissue", "a plastic file", "a metal tray"], a: 0, why: "A tissue soaks up water. Plastic and metal do not let water through.", lvl: 2, pic: "💧" },
    { q: "Nina put marbles into three paper bags, X, Y and Z, one at a time, until each bag tore. Look at the graph. Which bag is the weakest?", o: ["Bag X", "Bag Y", "Bag Z"], a: 1, why: "Bag Y tore with only 7 marbles, the fewest. So it is the weakest. Bag Z held the most, so it is the strongest.", lvl: 2, fig: { type: "bar", title: "Marbles each bag held", xl: "Paper bag", yl: "Number of marbles", bars: [["X", 12], ["Y", 7], ["Z", 25]] } },
    { q: "Mei dips a dry sponge into a bowl of water. She lifts it out and squeezes it. What will happen?", o: ["water drips out of it", "it stays dry inside", "it goes hard like stone"], a: 0, why: "The sponge soaked up the water. Squeezing it pushes the water out.", lvl: 2, pic: "🧽" },
    { q: "Durian sellers wear gloves to hold the spiky durians. What must the gloves be like?", o: ["thin and see-through", "thick and strong", "soft and soaks up juice"], a: 1, why: "Thick, strong gloves stop the sharp durian thorns from hurting their hands. Thin gloves would let the thorns poke through.", lvl: 2 },
    { q: "Which group has ONLY things that float on water?", o: ["cork, coin, leaf", "stone, leaf, cork", "cork, leaf, feather"], a: 2, why: "A cork, a leaf and a feather all float. A coin and a stone sink.", lvl: 2, pic: "🌊" },

    { q: "Zara covers three cups and pours water on each cover. She wants to find out which material keeps water out. Which two set-ups should she compare?", o: ["A and B", "B and C", "A and C"], a: 1, why: "In B and C, only the cover material changes. Both get 1 cup of water, so it is a fair test. A and B use the same material.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "jar", lines: ["Plastic cover", "Pour 3 cups of water"] }, { label: "B", icon: "jar", lines: ["Plastic cover", "Pour 1 cup of water"] }, { label: "C", icon: "jar", lines: ["Cloth cover", "Pour 1 cup of water"] } ] } },
    { q: "Look at the diagram. How many objects in it float?", o: ["4 objects", "2 objects", "3 objects"], a: 0, why: "Count BOTH parts of the Floats circle: wooden block and cork, plus leaf and feather. That makes 4.", lvl: 3, fig: { type: "venn", a: "Floats", b: "Bends easily", onlyA: ["wooden block", "cork"], both: ["leaf", "feather"], onlyB: ["metal chain"], neither: ["stone", "glass marble"] } },
    { q: "Ben said: A. Glass is see-through. B. Cloth is waterproof. C. Rubber can stretch. Which of his sentences are correct?", o: ["A and B only", "B and C only", "A and C only"], a: 2, why: "Glass is see-through and rubber can stretch. Cloth is NOT waterproof, because it soaks up water.", lvl: 3 },
    { q: "Aunty Lim wants a picnic mat for wet grass at East Coast Park. It must keep her dry and fold up small. Which is best?", o: ["a plastic sheet", "a cotton blanket", "a thick wooden board"], a: 0, why: "A plastic sheet is waterproof and bendy. A cotton blanket soaks up water, and a wooden board cannot fold.", lvl: 3, pic: "🌳🧺" }
  ],
  tf: [
    { s: "A dry sponge gets heavier after it soaks up water.", a: true, why: "The sponge takes in the water and holds it. The water adds to its weight, so it gets heavier.", pic: "🧽" },
    { s: "Shiny aluminium foil is see-through.", a: false, why: "Foil is shiny, but we cannot see through it. Shiny is not the same as see-through." },
    { s: "All plastic is see-through.", a: false, why: "Clear plastic is see-through, but a red plastic chair or a toy brick is not." },
    { s: "Cloth is soft and bends easily.", a: true, why: "We can fold and squeeze cloth, so it is soft and bendy.", pic: "👕" },
    { s: "Light things always float on water.", a: false, why: "A small coin is light, but it sinks. Being light does not always mean it floats.", pic: "🪙🌊" },
    { s: "Chopsticks can be made of wood, plastic or metal.", a: true, why: "One kind of thing can be made of different materials.", pic: "🥢" },
    { s: "All metal things are heavy.", a: false, why: "A paper clip and aluminium foil are made of metal, but they are very light." },
    { s: "Rubber is bendy and waterproof.", a: true, why: "Rubber bends easily and does not let water through, like rubber boots." }
  ]
};
