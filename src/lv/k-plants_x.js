window.LBX = window.LBX || {};
LBX["k-plants"] = {
  notes: [
    { h: "Seeds travel", t: "Plants cannot walk, so their seeds travel. Light, fluffy seeds are blown by the wind, a coconut can float on the sea, and birds carry seeds from the fruits they eat.", kw: ["seed", "wind", "float"], pic: "🌬️🥥🐦" },
    { h: "Plants help us and animals", t: "Plants give us food, wood, cotton and rubber. They also give animals food and a home, like birds nesting in a tree.", kw: ["food", "wood", "home"], pic: "🌳🐿️🪵" }
  ],
  traps: [
    "A cactus still needs water. It keeps water inside its thick stem, so it can live in a dry desert.",
    "A peanut grows under the soil, but it is a seed, not a root."
  ],
  lessons: [
    {
      h: "From seed to plant",
      concept: "A seed grows into a seedling, a young plant. The seedling grows into an adult plant. The adult plant has flowers, the flowers become fruits, and the fruits hold new seeds.",
      example: { q: "What does a seedling grow into?", pic: "🌱",
        think: ["A seedling is a young plant.", "It gets water, air and sunlight, so it grows bigger.", "Soon it is an adult plant with flowers."],
        answer: "A seedling grows into an adult plant." },
      tip: "Seed, seedling, adult plant, then new seeds again.",
      try: { q: "What does a seed grow into first?", o: ["an adult plant", "a seedling", "a fruit"], a: 1, why: "A seed first grows into a seedling. The seedling later grows into an adult plant.", pic: "🌰" }
    },
    {
      h: "How seeds travel",
      concept: "Seeds need space to grow into new plants. The wind, water and animals carry seeds to new places.",
      example: { q: "How can a coconut get to a new island?", pic: "🥥🌊",
        think: ["A coconut falls from a tree near the beach.", "It rolls into the sea.", "It floats on the water and lands on a new beach."],
        answer: "The coconut floats on the sea to a new island. There it can grow into a new tree." },
      tip: "Light and fluffy = wind. Floats = water. Juicy or hooks = animals.",
      try: { q: "Which seed is most likely carried far by the wind?", o: ["a heavy coconut", "a light, fluffy seed", "a hard mango seed"], a: 1, why: "Light, fluffy seeds are blown far by the wind. Heavy seeds fall close to the plant.", pic: "🌬️" }
    }
  ],
  mcq: [
    { q: "Look at the plant. Which part is labelled E?", o: ["leaf", "fruit", "root"], a: 1, why: "E is the fruit. It grows from the flower and holds seeds.", lvl: 1, fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C", flower: "D", fruit: "E" } } },
    { q: "Which of these comes from a plant?", o: ["wool", "milk", "cotton"], a: 2, why: "Cotton grows on the cotton plant. Wool and milk come from animals.", lvl: 1, pic: "👕" },
    { q: "What do we get from a rubber tree?", o: ["rubber", "glass", "wool"], a: 0, why: "A rubber tree has a white sap. It is made into rubber.", lvl: 1, pic: "🌳" },
    { q: "Where does a water lily grow?", o: ["in a desert", "in a pond", "in a cave"], a: 1, why: "A water lily grows in a pond. Its leaves float on the water.", lvl: 1 },
    { q: "Which plant can live in a hot, dry desert?", o: ["water lily", "moss", "cactus"], a: 2, why: "A cactus keeps water in its thick stem. Water lilies and moss need lots of water.", lvl: 1, pic: "🏜️" },
    { q: "Which part of a durian tree do we eat?", o: ["fruit", "leaf", "root"], a: 0, why: "We eat the durian fruit. It has seeds inside.", lvl: 1 },
    { q: "Which of these grows on a tree?", o: ["carrot", "peanut", "mango"], a: 2, why: "Mangoes grow on mango trees. Carrots and peanuts grow under the soil.", lvl: 1 },
    { q: "Which part of a rose plant is colourful and smells nice?", o: ["flower", "root", "stem"], a: 0, why: "The flower is the colourful part. It often smells sweet.", lvl: 1, pic: "🪴" },

    { q: "Which of these is a seedling?", o: ["a tall durian tree", "a tiny new bean plant", "a ripe red chilli"], a: 1, why: "A seedling is a young plant that has just grown from a seed. A durian tree is an adult plant and a chilli is a fruit.", lvl: 2 },
    { q: "Why do many flowers have bright colours and a sweet smell?", o: ["to bring bees and butterflies", "to scare away the rain", "to keep the roots warm"], a: 0, why: "Bright, sweet-smelling flowers bring bees and butterflies to them.", lvl: 2, pic: "🌸" },
    { q: "A coconut falls into the sea. What can it do?", o: ["sink and melt away", "fly up into the sky", "float to a new place"], a: 2, why: "A coconut floats. The sea can carry it to a new beach, where it may grow.", lvl: 2, pic: "🥥🌊" },
    { q: "A bird eats a juicy fruit and drops the seed far away. What does the bird help the plant do?", o: ["drink more water", "spread its seeds", "make new leaves"], a: 1, why: "The bird carries the seed to a new place. This spreads the plant’s seeds.", lvl: 2, pic: "🐦" },
    { q: "Ben measured his bean plant every two days. Look at the graph. How tall was it on Day 6?", o: ["2 cm", "5 cm", "8 cm"], a: 2, why: "Find Day 6 at the bottom. Go up to the line. It is at 8 cm.", lvl: 2, fig: { type: "line", xl: "Day", yl: "Height of plant (cm)", pts: [["0", 0], ["2", 2], ["4", 5], ["6", 8], ["8", 10]] } },
    { q: "A cactus has a thick stem. What does it keep inside the stem?", o: ["water", "sand", "stones"], a: 0, why: "A cactus keeps water in its stem, so it can live where there is little rain.", lvl: 2, pic: "🌵" },
    { q: "Chilli padi has tiny seeds inside. Which part of the plant is it?", o: ["root", "leaf", "fruit"], a: 2, why: "It holds seeds, so a chilli padi is a fruit.", lvl: 2, pic: "🌶️" },
    { q: "A plant on a windowsill bends towards the window. Why?", o: ["to get more water", "to get more sunlight", "to get away from air"], a: 1, why: "Plants grow towards light. The window lets in sunlight.", lvl: 2, pic: "🪟🪴" },
    { q: "The leaves of a mimosa plant fold up when you touch them. Is it a living thing?", o: ["no, because it cannot walk", "no, because it has no legs", "yes, it moves when touched"], a: 2, why: "Living things respond to touch. A mimosa is a plant, and plants are living things.", lvl: 2, pic: "🌿👆" },
    { q: "Look at the diagram. What is the missing stage?", o: ["adult plant", "seed coat", "flower pot"], a: 0, why: "A seed grows into a seedling. The seedling grows into an adult plant.", lvl: 2, fig: { type: "cycle", stages: ["Seed", "Seedling", "?"] } },

    { q: "Mei wants to find out if a plant needs water. Which TWO pots should she compare?", o: ["A and B", "A and C", "B and C"], a: 1, why: "A and C both get sunlight. Only the water is different, so she can see if water matters.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "pot", lines: ["Sunny window", "Watered daily"] }, { label: "B", icon: "pot", lines: ["Dark cupboard", "Watered daily"] }, { label: "C", icon: "pot", lines: ["Sunny window", "Not watered"] } ] } },
    { q: "A seed has tiny hooks. How is it most likely carried to a new place?", o: ["on animals’ fur", "by the wind", "by floating on water"], a: 0, why: "The hooks stick to an animal’s fur. The animal carries the seed away.", lvl: 3 },
    { q: "Siti counted the leaves on her plant each week. Between which weeks did it grow the MOST new leaves?", o: ["Week 1 to 2", "Week 2 to 3", "Week 3 to 4"], a: 1, why: "From Week 2 to 3 the leaves went from 4 to 9. That is 5 new leaves, the biggest jump.", lvl: 3, fig: { type: "line", xl: "Week", yl: "Number of leaves", pts: [["1", 2], ["2", 4], ["3", 9], ["4", 11]] } },
    { q: "A peanut grows under the soil. Which is true?", o: ["It is a root, as it grows underground", "It is a seed that grows underground", "It is a leaf that fell onto the soil"], a: 1, why: "A peanut is a seed. It grows in a shell under the soil, but it is not a root.", lvl: 3, pic: "🥜" },
    { q: "Birds, squirrels and monkeys live in a big rain tree. What does the tree give them?", o: ["food and a home", "fur and feathers", "milk and eggs"], a: 0, why: "Animals eat parts of the tree and live in it. Fur, feathers, milk and eggs come from animals.", lvl: 3, pic: "🌳" },
    { q: "Look at the diagram. Which plant could go in the part marked ‘?’", o: ["chilli plant", "hibiscus", "rambutan tree"], a: 2, why: "The ‘?’ part is in BOTH circles. A rambutan tree is a tree AND gives fruit we eat. A chilli plant is not a tree.", lvl: 3, fig: { type: "venn", a: "Is a tree", b: "Gives fruit we eat", onlyA: ["rain tree"], both: ["mango tree", "?"], onlyB: ["tomato plant"], neither: ["lawn grass"] } }
  ],
  tf: [
    { s: "Some seeds are carried by the wind.", a: true, why: "Light, fluffy seeds are blown to new places.", pic: "🌬️" },
    { s: "A cactus does not need any water.", a: false, why: "A cactus needs water. It keeps water in its thick stem.", pic: "🌵" },
    { s: "A coconut can float on water.", a: true, why: "A coconut floats, so the sea can carry it to a new place.", pic: "🥥" },
    { s: "A peanut is a root.", a: false, why: "A peanut grows under the soil, but it is a seed.", pic: "🥜" },
    { s: "Bees visit flowers to get food.", a: true, why: "Bees drink sweet juice from flowers.", pic: "🐝🌸" },
    { s: "Plants give animals food and homes.", a: true, why: "Animals eat plants, and birds and squirrels live in trees.", pic: "🌳🐿️" },
    { s: "A seedling is a young plant.", a: true, why: "A seed grows into a seedling, a young plant.", pic: "🌱" },
    { s: "All plants grow in soil on dry land.", a: false, why: "A water lily grows in a pond." },
    { s: "A plant on a windowsill bends away from the light.", a: false, why: "Plants grow and bend towards the light.", pic: "🪟" },
    { s: "Chilli padi is a leaf.", a: false, why: "Chilli padi has seeds inside, so it is a fruit.", pic: "🌶️" }
  ],
  sort: [
    { title: "How does the seed travel?", groups: ["By wind", "By water", "By animals"], items: [["fluffy dandelion seed", 0], ["winged angsana seed", 0], ["fluffy lalang seed", 0], ["coconut 🥥", 1], ["floating mangrove seed", 1], ["seed with tiny hooks", 2], ["seed in a juicy berry", 2], ["seed in a ripe fig", 2]] },
    { title: "Do we get it from plants?", groups: ["From plants", "Not from plants"], items: [["cotton", 0], ["paper", 0], ["wooden chair", 0], ["rice", 0], ["wool", 1], ["glass", 1], ["metal key", 1], ["milk", 1]] }
  ]
};
