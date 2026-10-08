window.LB = window.LB || {};
LB["k-plants"] = {
  notes: [
    { h: "Roots and stem", t: "Roots grow in the soil. They hold the plant firmly and take in water. The stem holds the plant up and carries water to the leaves.", kw: ["roots", "stem", "take in water"], pic: "🌱" },
    { h: "Leaves, flowers, fruits and seeds", t: "Leaves use sunlight to make food for the plant. Flowers can grow into fruits, and fruits hold seeds.", kw: ["leaves", "fruit", "seed"], pic: "🌿🌸🍎" },
    { h: "What plants need", t: "Plants need water, sunlight and air to live and grow. To care for a plant, water it and keep it in a bright place.", kw: ["water", "sunlight", "air"], pic: "💧☀️" },
    { h: "Plants are living things", t: "Plants grow, need water and air, and make new plants. They cannot walk, but they are alive!", kw: ["living thing", "grow"], pic: "🌳" },
    { h: "Growing a bean seed", t: "Put a bean seed on wet cotton wool. First a root grows out, then a shoot with leaves grows up.", kw: ["seed", "root", "shoot"], pic: "🫘" },
    { h: "Plants we eat", t: "We eat many plant parts. A carrot is a root, spinach is leaves, and a tomato is a fruit.", kw: ["root", "leaves", "fruit"], pic: "🥕🥬🍅" },
    { h: "Big and small plants", t: "Trees are tall and have one thick, woody trunk. Shrubs are shorter and bushy, and grass is small and soft.", kw: ["tree", "shrub", "grass"], pic: "🌳🌿" },
    { h: "Gardens in Singapore", t: "Gardens by the Bay has giant Supertrees and domes full of plants. The Singapore Botanic Gardens grows many orchids, and an orchid is our national flower.", kw: ["orchid", "national flower"], pic: "🌺" }
  ],
  traps: [
    "Plants cannot walk, but they are still living things. They grow and make new plants.",
    "A tomato and a cucumber have seeds inside, so they are fruits.",
    "A seed does not need sunlight to start growing. It needs water and air. The young plant needs sunlight once its leaves come out.",
    "Not all plants are big. Grass is a small plant, but it is still a plant.",
    "The Supertrees at Gardens by the Bay are not real trees. They are tall frames covered with real plants."
  ],
  lessons: [
    {
      h: "Each part has a job",
      concept: "Every part of a plant has a job. Roots take in water. The stem holds the plant up. Leaves make food.",
      example: { q: "Why does a plant need its roots?", pic: "🌱", think: ["Where are the roots? Under the soil.", "What is in the soil? Water.", "Roots also grip the soil so the plant does not fall."], answer: "Roots take in water from the soil and hold the plant firmly in the ground." },
      tip: "Roots = drink and hold. Stem = stand up. Leaves = make food.",
      try: { q: "Which part holds up the leaves and flowers?", o: ["Root", "Stem", "Seed"], a: 1, why: "The stem holds the plant up, so the leaves and flowers can reach the light." }
    },
    {
      h: "What a plant needs",
      concept: "A plant needs water, sunlight and air to stay alive and grow. Take one away and the plant gets weak.",
      example: { q: "Sam kept a plant in a dark cupboard for two weeks. He watered it every day. What happened?", pic: "🪴", think: ["Did it get water? Yes.", "Did it get sunlight? No, the cupboard is dark.", "Without sunlight, the leaves cannot make food."], answer: "The plant became weak and its leaves turned yellow, because it did not get sunlight." },
      tip: "Remember the three friends of a plant: water, sunlight and air.",
      try: { q: "A plant gets sunlight and air, but no water for many days. What will happen?", o: ["It grows faster", "It grows more flowers", "It droops and may die"], a: 2, why: "A plant needs water. Without water, it droops (wilts) and may die." }
    },
    {
      h: "Which part do we eat?",
      concept: "Our food comes from different plant parts. If it has seeds inside, it is a fruit.",
      example: { q: "Is a tomato a root, a leaf or a fruit?", pic: "🍅", think: ["Cut the tomato open.", "Look inside. There are many small seeds.", "Fruits hold seeds."], answer: "A tomato is a fruit, because it has seeds inside." },
      tip: "Look for seeds! Seeds inside means fruit. Grows under the soil like a carrot means root.",
      try: { q: "A cucumber has many seeds inside. Which part of the plant is it?", o: ["Fruit", "Root", "Leaf"], a: 0, why: "A cucumber holds seeds, so it is a fruit, even though we call it a vegetable." }
    },
    {
      h: "Growing a bean seed",
      concept: "A bean seed can grow into a new plant. It needs water and air to start growing.",
      example: { q: "Mei put a bean seed on wet cotton wool. What will she see first?", pic: "🫘💧", think: ["The seed takes in water and swells.", "The seed coat splits open.", "A small root grows out first, then the shoot."], answer: "A small root grows out of the seed first. Then a shoot with leaves grows up." },
      tip: "Root first, shoot next, leaves last.",
      try: { q: "What does a bean seed need to start growing?", o: ["Salt", "Water", "Paint"], a: 1, why: "A seed needs water (and air) to start growing. Salt and paint do not help." }
    }
  ],
  mcq: [
    { q: "Which part of a plant is under the soil and takes in water?", o: ["Leaves", "Roots", "Flower"], a: 1, why: "Roots grow in the soil and take in water. Leaves and flowers are above the soil.", lvl: 1, pic: "🌱" },
    { q: "Which part of a plant holds it up?", o: ["Stem", "Seed", "Flower"], a: 0, why: "The stem holds the plant up. A seed grows into a new plant.", lvl: 1 },
    { q: "Which part of a plant uses sunlight to make food?", o: ["Root", "Fruit", "Leaf"], a: 2, why: "Leaves use sunlight to make food for the plant.", lvl: 1, pic: "☀️" },
    { q: "Which of these does a plant need to live?", o: ["Salt", "Milk", "Sunlight"], a: 2, why: "Plants need sunlight, water and air. They do not need salt or milk.", lvl: 1, pic: "🪴" },
    { q: "What can a seed grow into?", o: ["A new plant", "A stone", "An animal"], a: 0, why: "A seed can grow into a new plant.", lvl: 1 },
    { q: "Look at the plant. Which part is labelled D?", o: ["Flower", "Root", "Stem"], a: 0, why: "D is the flower. It is often colourful.", lvl: 1, fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C", flower: "D" } } },
    { q: "We eat carrots. Which part of the plant is a carrot?", o: ["Leaves", "Root", "Flower"], a: 1, why: "A carrot grows under the soil. It is a root.", lvl: 1, pic: "🥕" },
    { q: "We eat spinach. Which part of the plant is spinach?", o: ["Leaves", "Seeds", "Roots"], a: 0, why: "Spinach is the green leaves of the plant.", lvl: 1, pic: "🥬" },
    { q: "Which of these is a living thing?", o: ["A rock", "A chair", "A rain tree"], a: 2, why: "A rain tree grows and needs water. It is living. Rocks and chairs do not grow.", lvl: 1 },
    { q: "Which kind of plant is tall and has one thick, woody trunk?", o: ["Grass", "Tree", "Shrub"], a: 1, why: "A tree is tall and has one thick trunk. Shrubs are shorter and bushy.", lvl: 1 },
    { q: "Where in Singapore can you see the giant Supertrees?", o: ["Sentosa beach", "Pulau Ubin", "Gardens by the Bay"], a: 2, why: "The Supertrees are at Gardens by the Bay.", lvl: 1 },
    { q: "Which of these is a small plant?", o: ["Grass", "A durian tree", "A rain tree"], a: 0, why: "Grass is small and soft. Durian trees and rain trees are big.", lvl: 1 },
    { q: "What do most fruits have inside?", o: ["Roots", "Seeds", "Leaves"], a: 1, why: "Fruits hold seeds inside.", lvl: 1, pic: "🍉🍎" },
    { q: "How can you care for a potted plant at home?", o: ["Pull off its leaves every day", "Keep it in a dark box all day", "Water it when the soil is dry"], a: 2, why: "Plants need water. Pulling off leaves or keeping it in the dark harms it.", lvl: 1, pic: "🪴" },

    { q: "Which of these do we eat the seeds of?", o: ["Carrot", "Peanut", "Spinach"], a: 1, why: "Peanuts are seeds. Carrot is a root and spinach is leaves.", lvl: 2 },
    { q: "Which part of the plant is a tomato?", o: ["Leaf", "Stem", "Fruit"], a: 2, why: "A tomato has seeds inside, so it is a fruit.", lvl: 2, pic: "🍅" },
    { q: "We eat broccoli. Which part of the plant is it?", o: ["Flowers", "Roots", "Seeds"], a: 0, why: "Broccoli is a bunch of tiny flower buds on short stalks.", lvl: 2, pic: "🥦" },
    { q: "Sugarcane juice comes from the tall, hard part that holds the plant up. Which part is it?", o: ["Root", "Stem", "Flower"], a: 1, why: "The part that holds the plant up is the stem. Sugarcane juice is squeezed from the stem.", lvl: 2 },
    { q: "Ali watered a plant but kept it in a dark cupboard for two weeks. What happened?", o: ["It grew greener and taller", "It grew lots of fruits", "It became weak and yellow"], a: 2, why: "Without sunlight, the plant cannot make food. It becomes weak and yellow.", lvl: 2, pic: "🪴" },
    { q: "A plant was not watered for many days. What will happen to it?", o: ["It droops", "It grows faster", "It grows more flowers"], a: 0, why: "Without water, a plant droops (wilts) and may die.", lvl: 2, pic: "🪴" },
    { q: "Which part carries water from the roots up to the leaves?", o: ["Flower", "Fruit", "Stem"], a: 2, why: "The stem carries water from the roots to the leaves.", lvl: 2 },
    { q: "A hibiscus plant is shorter than a tree. It is bushy with many woody stems. What kind of plant is it?", o: ["Grass", "Shrub", "Tree"], a: 1, why: "A short, bushy plant with many woody stems is a shrub.", lvl: 2, pic: "🌺" },
    { q: "Which of these is NOT a living thing?", o: ["A plastic flower", "A bean seed", "Grass"], a: 0, why: "A plastic flower cannot grow. A bean seed can grow into a plant, so it is living.", lvl: 2 },
    { q: "A bean seed is on wet cotton wool. What grows out of it first?", o: ["Flower", "Root", "Fruit"], a: 1, why: "The root grows out first. Then the shoot grows up.", lvl: 2, pic: "🫘" },
    { q: "What is Singapore’s national flower?", o: ["Sunflower", "Rose", "Orchid"], a: 2, why: "Our national flower is an orchid, the Vanda Miss Joaquim.", lvl: 2 },
    { q: "Look at the plant. Which part is labelled B?", o: ["Root", "Stem", "Leaf"], a: 1, why: "B is the stem. It holds the plant up.", lvl: 2, fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C", flower: "D" } } },
    { q: "A strong wind blew, but the tree did not fall over. Which part held it in the ground?", o: ["Roots", "Flowers", "Fruits"], a: 0, why: "Roots hold the plant firmly in the soil.", lvl: 2, pic: "🌳💨" },
    { q: "Which of these do we eat the root of?", o: ["Spinach", "Apple", "Radish"], a: 2, why: "A radish grows under the soil. It is a root. Spinach is leaves and an apple is a fruit.", lvl: 2 },

    { q: "Mei grew two bean plants. She watered both. Which plant will grow green and healthy?", o: ["Plant A", "Plant B", "Both the same"], a: 0, why: "Plant A gets sunlight to make food. Plant B is in the dark, so it becomes weak and yellow.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "pot", lines: ["Near a sunny window", "Watered daily"] }, { label: "B", icon: "pot", lines: ["In a dark cupboard", "Watered daily"] } ] } },
    { q: "Which of these is a fruit, even though many people call it a vegetable?", o: ["Carrot", "Cucumber", "Lettuce"], a: 1, why: "A cucumber has seeds inside, so it is a fruit. Carrot is a root and lettuce is leaves.", lvl: 3 },
    { q: "Are the Supertrees at Gardens by the Bay real trees?", o: ["Yes, they are the tallest real trees in the world", "No, they are only made of plastic flowers", "No, they are tall frames with real plants on them"], a: 2, why: "Supertrees are tall frames. Many real plants, like ferns, grow on them.", lvl: 3 },
    { q: "The graph shows the height of three bean plants. How much taller is Plant A than Plant C?", o: ["4 cm", "8 cm", "12 cm"], a: 0, why: "Plant A is 12 cm and Plant C is 8 cm. 12 − 8 = 4 cm.", lvl: 3, fig: { type: "bar", xl: "Bean plant", yl: "Height (cm)", bars: [["A", 12], ["B", 3], ["C", 8]] } },
    { q: "Which is true about ALL plants?", o: ["They all have big, bright flowers", "They are all tall and have thick stems", "They are living things and need water"], a: 2, why: "Every plant is living and needs water. Some plants are small, and some have no flowers.", lvl: 3 },
    { q: "Ah Ma waters her plant every day. She keeps it under a table where no light reaches. What is the plant missing?", o: ["Water", "Sunlight", "Air"], a: 1, why: "The plant gets water and air, but no light reaches it. It is missing sunlight.", lvl: 3, pic: "🪴" },
    { q: "One plant has two leaves. Leaf P is in the shade all day. Leaf Q is in the sun all day. Which leaf can make more food?", o: ["Leaf P", "Leaf Q", "Both the same"], a: 1, why: "Leaves use sunlight to make food. Leaf Q gets more sunlight, so it can make more food.", lvl: 3, pic: "🌿" },
    { q: "You open a pea pod and find peas inside. Which is correct?", o: ["The pod is a fruit and the peas are seeds", "The pod is a leaf and the peas are fruits", "The pod is a root and the peas are leaves"], a: 0, why: "The pod grew from a flower and holds seeds, so it is a fruit. Each pea is a seed.", lvl: 3 }
  ],
  tf: [
    { s: "Plants are living things.", a: true, why: "Plants grow, need water and air, and make new plants.", pic: "🌳" },
    { s: "Plants can walk to find water.", a: false, why: "Plants cannot move from place to place. Their roots take in water from the soil." },
    { s: "Roots take in water from the soil.", a: true, why: "Roots grow in the soil and take in water." },
    { s: "A carrot is a root that we eat.", a: true, why: "A carrot grows under the soil. It is a root.", pic: "🥕" },
    { s: "Spinach is the root of a plant.", a: false, why: "We eat the leaves of the spinach plant.", pic: "🥬" },
    { s: "All plants are tall trees.", a: false, why: "Some plants are small, like grass. Some are shrubs." },
    { s: "Leaves use sunlight to make food.", a: true, why: "Leaves need sunlight to make food for the plant.", pic: "☀️🌿" },
    { s: "A plant can live for a long time with no water at all.", a: false, why: "Plants need water. Without it, they droop and die." },
    { s: "Seeds can grow into new plants.", a: true, why: "A seed can grow into a new plant." },
    { s: "A tomato is a fruit.", a: true, why: "A tomato has seeds inside, so it is a fruit.", pic: "🍅" },
    { s: "Fruits grow from flowers.", a: true, why: "A flower can grow into a fruit." },
    { s: "Grass is a kind of tree.", a: false, why: "Grass is a small, soft plant. Trees are tall with a thick trunk." },
    { s: "A bean seed needs sunlight to start growing.", a: false, why: "A seed needs water and air to start growing. It can start growing in the dark." },
    { s: "Most leaves are green.", a: true, why: "Most leaves are green." },
    { s: "The Supertrees at Gardens by the Bay are real trees.", a: false, why: "They are tall frames covered with real plants." },
    { s: "The stem carries water from the roots to the leaves.", a: true, why: "Water moves up the stem to the leaves." },
    { s: "Plants do not need air.", a: false, why: "Plants need air, water and sunlight." },
    { s: "A plastic flower is a living thing.", a: false, why: "A plastic flower cannot grow or make new plants." },
    { s: "Pulling out a plant’s roots helps it grow.", a: false, why: "The plant needs its roots to take in water and to stay in the soil." },
    { s: "Singapore’s national flower is an orchid.", a: true, why: "Our national flower is the Vanda Miss Joaquim orchid.", pic: "🌺" }
  ],
  sort: [
    { title: "Which part of the plant do we eat?", groups: ["Root", "Leaves", "Fruit"], items: [["carrot", 0], ["spinach", 1], ["apple", 2], ["radish", 0], ["lettuce", 1], ["tomato", 2], ["sweet potato", 0], ["cabbage", 1]] },
    { title: "Living or non-living?", groups: ["Living", "Non-living"], items: [["rain tree", 0], ["flower pot", 1], ["grass", 0], ["plastic plant", 1], ["bean seed", 0], ["watering can", 1], ["orchid", 0], ["stone", 1]] },
    { title: "Tree, shrub or grass?", groups: ["Tree", "Shrub", "Grass"], items: [["rain tree", 0], ["hibiscus", 1], ["lawn grass", 2], ["durian tree", 0], ["ixora", 1], ["lalang", 2], ["mango tree", 0], ["rose bush", 1]] },
    { title: "Good or bad for a plant?", groups: ["Good for the plant", "Bad for the plant"], items: [["water it when the soil is dry", 0], ["step on it", 1], ["put it where there is sunlight", 0], ["keep it in a dark cupboard", 1], ["give it a bigger pot as it grows", 0], ["pour salty water on it", 1], ["pull out weeds near it", 0], ["pull off all its leaves", 1]] }
  ]
};
