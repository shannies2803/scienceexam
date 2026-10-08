window.LBU = window.LBU || {};
LBU["k-plants"] = {
  glossary: [
    { t: "Roots", d: "The parts of a plant that grow in the soil. They hold the plant firmly and take in water." },
    { t: "Stem", d: "The part of a plant that holds it up. It carries water from the roots to the leaves." },
    { t: "Leaves", d: "The flat, green parts of a plant. They use sunlight to make food for the plant." },
    { t: "Flower", d: "The part of a plant that can grow into a fruit. Many flowers are colourful." },
    { t: "Fruit", d: "The part of a plant that grows from a flower. It holds the seeds." },
    { t: "Seed", d: "A small living part of a plant. It can grow into a new plant when it gets water, air and warmth." },
    { t: "Seedling", d: "A young plant that has just grown out of a seed." },
    { t: "Wilt", d: "When a plant droops and its leaves go soft and floppy, because it does not have enough water." }
  ],
  lessons: [
    {
      h: "Reading a bar graph",
      concept: "A bar graph uses bars to show numbers. The taller the bar, the bigger the number. To read a bar, look at the number next to the top of the bar.",
      example: { q: "Jun grew three bean plants. Look at the graph. Which plant is the tallest, and how tall is it?", fig: { type: "bar", xl: "Bean plant", yl: "Height (cm)", bars: [["A", 6], ["B", 10], ["C", 4]] },
        think: ["Find the tallest bar. It is the bar for Plant B.", "Put your finger at the top of that bar. Move it across to the numbers on the side.", "Your finger reaches 10, so Plant B is 10 cm tall."],
        answer: "Plant B is the tallest. It is 10 cm tall." },
      tip: "Go up to the top of the bar, then across to the number. To find how many more, take away the small number from the big number.",
      try: { q: "Look at the graph. How many more leaves does Plant Q have than Plant P?", o: ["13 leaves", "5 leaves", "3 leaves"], a: 1, why: "Plant Q has 9 leaves and Plant P has 4 leaves. 9 − 4 = 5 more leaves. 13 is what you get if you add them.", fig: { type: "bar", xl: "Plant", yl: "Number of leaves", bars: [["P", 4], ["Q", 9], ["R", 6]] } }
    }
  ],
  flash: [
    { f: "A plant droops when it does not get enough…", b: "water", pic: "🪴" },
    { f: "When a bean seed starts to grow, which part comes out first?", b: "the root (then the shoot grows up)", pic: "🫘" },
    { f: "A short, bushy plant with many woody stems is a…", b: "shrub", pic: "🌺" },
    { f: "The trunk of a tree is its…", b: "stem", pic: "🌳" },
    { f: "A desert plant that keeps water in its thick stem", b: "a cactus", pic: "🏜️" },
    { f: "Three ways seeds travel to new places", b: "by wind, by water and by animals" },
    { f: "Bees and butterflies visit flowers to drink…", b: "the sweet juice in the flower (nectar)", pic: "🐝🦋" },
    { f: "Is a seed living or non-living?", b: "Living. It can grow into a new plant." },
    { f: "Plants give animals food and a…", b: "home, like a bird’s nest in a tree", pic: "🐿️" },
    { f: "What happens to a plant kept in the dark for a long time?", b: "It becomes weak and its leaves turn yellow, because it cannot make food without sunlight." }
  ],
  mcq: [
    // lvl 1 (6)
    { q: "Which of these is NOT a plant?", o: ["bamboo", "sparrow", "lalang"], a: 1, why: "A sparrow is a bird, so it is an animal. Bamboo and lalang are both plants.", lvl: 1 },
    { q: "A sweet potato grows under the soil. Which part of the plant is it?", o: ["leaf", "flower", "root"], a: 2, why: "A sweet potato is a root. It grows under the soil, where roots grow.", lvl: 1 },
    { q: "Ben has lettuce in his burger. Which part of the lettuce plant is he eating?", o: ["leaves", "roots", "seeds"], a: 0, why: "We eat the green leaves of the lettuce plant.", lvl: 1, pic: "🍔" },
    { q: "A plant is growing in a crack in the pavement, where nobody wants it. What do we call it?", o: ["a weed", "a fruit", "a seed"], a: 0, why: "A weed is a plant growing where we do not want it.", lvl: 1 },
    { q: "The tiny white bits on a sesame bun come from a plant. Which part are they?", o: ["roots", "leaves", "seeds"], a: 2, why: "Sesame seeds are seeds of the sesame plant.", lvl: 1 },
    { q: "Where do the roots of most plants grow?", o: ["in the soil", "on the flowers", "in the fruits"], a: 0, why: "Most roots grow in the soil, where they take in water and hold the plant firmly.", lvl: 1 },
    // lvl 2 (6)
    { q: "We buy bananas in bunches at the market. Which part of the banana plant is a banana?", o: ["fruit", "stem", "root"], a: 0, why: "A banana grows from a flower on the banana plant, so it is a fruit.", lvl: 2 },
    { q: "Some mooncakes have a sweet paste made from small, hard parts of the lotus plant. These parts can grow into new lotus plants. What are they?", o: ["roots", "seeds", "leaves"], a: 1, why: "Parts that can grow into new plants are seeds. Lotus seed paste is made from lotus seeds.", lvl: 2 },
    { q: "Taugeh (bean sprouts) are beans that have just started to grow. What are they?", o: ["fruits", "flowers", "seedlings"], a: 2, why: "A bean that has just started to grow is a young plant, called a seedling.", lvl: 2 },
    { q: "A bean seed is planted in the soil. Which part pushes up above the soil first?", o: ["the fruit", "the shoot", "the flower"], a: 1, why: "The shoot grows up above the soil first. Flowers and fruits come much later, on an adult plant.", lvl: 2, pic: "🫘" },
    { q: "Priya counted the flowers on three orchid plants. Look at the graph. Which plant had the FEWEST flowers?", o: ["Plant X", "Plant Y", "Plant Z"], a: 1, why: "The bar for Plant Y is the shortest. It had only 3 flowers.", lvl: 2, fig: { type: "bar", xl: "Orchid plant", yl: "Number of flowers", bars: [["X", 7], ["Y", 3], ["Z", 10]] } },
    { q: "Look at the plant. Which part can grow into a fruit?", o: ["Part A", "Part B", "Part C"], a: 2, why: "Part C is the flower. A flower can grow into a fruit. A is a leaf and B is the stem.", lvl: 2, fig: { type: "plant", mark: { leaf: "A", stem: "B", flower: "C" } } },
    // lvl 3 (4)
    { q: "Caterpillars ate almost all the leaves of Siti’s chilli plant. What will the plant find hard to do now?", o: ["take in water", "make its food", "hold itself up"], a: 1, why: "Leaves use sunlight to make food. With no leaves, the plant cannot make enough food. Roots still take in water and the stem still holds it up.", lvl: 3, pic: "🐛" },
    { q: "Three pots of the same plant were left for one week. Which plant will droop first?", o: ["Pot A", "Pot B", "Pot C"], a: 2, why: "Pot C gets no water, and the hot sun dries its soil. Pots A and B are watered every day.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "pot", lines: ["Sunny ledge", "Watered daily"] }, { label: "B", icon: "pot", lines: ["Shady corner", "Watered daily"] }, { label: "C", icon: "pot", lines: ["Sunny ledge", "Not watered"] } ] } },
    { q: "Look at the diagram. Which plant could go in the part marked ‘?’", o: ["papaya tree", "fern", "hibiscus"], a: 0, why: "The ‘?’ part is in BOTH circles. A papaya tree has flowers AND gives fruit we eat. A fern has no flowers, and we do not eat hibiscus fruit.", lvl: 3, fig: { type: "venn", a: "Has flowers", b: "Gives fruit we eat", onlyA: ["orchid"], both: ["durian tree", "?"], onlyB: [], neither: ["moss"] } },
    { q: "Look at the chart. Which letter could be a water lily?", o: ["A", "B", "C"], a: 0, why: "A water lily has flowers, so follow ‘yes’. It grows in a pond, so follow ‘yes’ again. That leads to A.", lvl: 3, fig: { type: "flow", root: "Plants", node: { q: "Has flowers?", yes: { q: "Grows in water?", yes: "A", no: "B" }, no: "C" } } }
  ],
  tf: [
    { s: "A seed has a tiny baby plant inside it.", a: true, why: "Inside every seed is a tiny baby plant. With water, air and warmth, it starts to grow.", pic: "🫘" },
    { s: "A plant makes its food in its roots.", a: false, why: "Leaves make food using sunlight. Roots take in water." },
    { s: "Every plant has flowers.", a: false, why: "Some plants, like ferns and moss, never have flowers." },
    { s: "Wood comes from the stems of trees.", a: true, why: "A tree trunk is a big, woody stem. Wood comes from it.", pic: "🪵" },
    { s: "A plant that has drooped can never get better.", a: false, why: "If you water a drooping plant soon, it can stand up again.", pic: "🪴" },
    { s: "A mango seed grows into a mango tree.", a: true, why: "A seed grows into the same kind of plant it came from.", pic: "🥭" },
    { s: "The roots of a plant are always under the soil.", a: false, why: "Most roots are under the soil, but some orchids have roots hanging in the air." },
    { s: "Moss is a plant.", a: true, why: "Moss is a tiny, soft, green plant. It grows in wet, shady places." }
  ]
};
