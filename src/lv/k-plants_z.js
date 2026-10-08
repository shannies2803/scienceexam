window.LBZ = window.LBZ || {};
LBZ["k-plants"] = {
  flash: [
    { f: "The part of a plant that takes in water from the soil", b: "the roots", pic: "🌱" },
    { f: "The part that holds the plant up", b: "the stem" },
    { f: "The part that uses sunlight to make food", b: "the leaves", pic: "☀️" },
    { f: "A flower can grow into a…", b: "fruit", pic: "🌸" },
    { f: "Fruits hold…", b: "seeds", pic: "🍉" },
    { f: "A young plant that has just grown from a seed is called a…", b: "seedling" },
    { f: "Three things a plant needs to live and grow", b: "water, sunlight and air" },
    { f: "What a seed needs to start growing", b: "water, air and warmth (it does not need sunlight or soil)", pic: "🫘" },
    { f: "Singapore’s national flower", b: "an orchid (the Vanda Miss Joaquim)" },
    { f: "A tall plant with one thick, woody trunk is a…", b: "tree" },
    { f: "A plant on a windowsill bends towards the…", b: "light (sunlight)", pic: "🪟🪴" },
    { f: "Which part of the plant is a carrot?", b: "the root", pic: "🥕" }
  ],
  mcq: [
    // lvl 1 (6)
    { q: "We eat corn kernels. Which part of the corn plant are they?", o: ["roots", "seeds", "leaves"], a: 1, why: "Each corn kernel is a seed. It can grow into a new corn plant.", lvl: 1, pic: "🌽" },
    { q: "Which of these is made from a plant?", o: ["a glass jar", "a metal can", "a paper bag"], a: 2, why: "Paper is made from wood, and wood comes from trees. Glass and metal do not come from plants.", lvl: 1 },
    { q: "What does a gardener use a watering can for?", o: ["to give plants water", "to cut the grass", "to dig deep holes"], a: 0, why: "A watering can pours water on plants. Plants need water to live.", lvl: 1 },
    { q: "Which plant has sharp spines?", o: ["lettuce", "cactus", "grass"], a: 1, why: "A cactus has sharp spines. Lettuce and grass are soft.", lvl: 1 },
    { q: "Which of these is the TALLEST plant?", o: ["lawn grass", "a hibiscus shrub", "a coconut tree"], a: 2, why: "A coconut tree is very tall. A shrub is shorter, and grass is small.", lvl: 1 },
    { q: "Which of these can grow into a new plant?", o: ["a bean seed", "a pebble", "a marble"], a: 0, why: "A bean seed is living. It can grow into a seedling and then a new plant. Pebbles and marbles are not living.", lvl: 1 },
    // lvl 2 (6)
    { q: "Kangkong is a green vegetable. Which parts of the plant do we eat?", o: ["roots only", "leaves and stems", "fruits and seeds"], a: 1, why: "We eat the leaves and soft stems of kangkong. We do not eat its roots, fruits or seeds.", lvl: 2 },
    { q: "We drink coconut water at the hawker centre. Which part of the coconut tree does it come from?", o: ["root", "leaf", "fruit"], a: 2, why: "A coconut is the fruit of the coconut tree. It holds a seed inside.", lvl: 2, pic: "🥥" },
    { q: "Ah Gong pulls out the weeds around his chilli plants. Why?", o: ["so his chilli plants get more water", "so his chilli plants get less light", "so the weeds can grow taller"], a: 0, why: "Weeds take water and light that the chilli plants need. Pulling them out leaves more for the chilli plants.", lvl: 2 },
    { q: "Siti’s plant is drooping and its soil is very dry. What should she do?", o: ["put it in the dark", "cut off its leaves", "give it some water"], a: 2, why: "The plant droops because it needs water. Darkness and cutting leaves would harm it.", lvl: 2, pic: "🪴" },
    { q: "Look at the plant. Which part takes in water from the soil?", o: ["Part A", "Part B", "Part C"], a: 2, why: "Part C is the roots. Roots grow in the soil and take in water.", lvl: 2, fig: { type: "plant", mark: { leaf: "A", stem: "B", roots: "C" } } },
    { q: "A mat was left on the school field for a week. The grass under it turned yellow. Why?", o: ["it got too much water", "it got no sunlight", "it got too much air"], a: 1, why: "The mat blocked the sunlight. Grass needs sunlight to make food, so it grew weak and yellow.", lvl: 2 },
    // lvl 3 (4)
    { q: "Ken put 10 bean seeds on cotton wool in each of three dishes. The graph shows how many seeds started to grow. What does it show?", o: ["Seeds need light to start growing", "Seeds need water to start growing", "Seeds need soil to start growing"], a: 1, why: "Seeds grew on wet cotton wool in the light AND in the dark, but none grew when it was dry. No dish had soil, so soil is not needed either.", lvl: 3, fig: { type: "bar", xl: "Dish", yl: "Seeds that grew", bars: [["Wet, light", 8], ["Wet, dark", 8], ["Dry, light", 0]] } },
    { q: "Look at the chart. Which letter could be a rose bush?", o: ["A", "B", "C"], a: 0, why: "A rose bush has flowers, but it is a shrub, not a tree. So it goes to A.", lvl: 3, fig: { type: "flow", root: "Plants", node: { q: "Has flowers?", yes: { q: "Is a tree?", yes: "B", no: "A" }, no: "C" } } },
    { q: "Lena measured her plant every week. Look at the graph. How much did it grow from Week 1 to Week 3?", o: ["7 cm", "9 cm", "3 cm"], a: 0, why: "In Week 1 it was 2 cm. In Week 3 it was 9 cm. 9 − 2 = 7 cm.", lvl: 3, fig: { type: "line", xl: "Week", yl: "Height of plant (cm)", pts: [["1", 2], ["2", 5], ["3", 9], ["4", 10]] } },
    { q: "Which pair are BOTH fruits?", o: ["carrot and tomato", "spinach and cucumber", "tomato and cucumber"], a: 2, why: "Tomatoes and cucumbers have seeds inside, so both are fruits. A carrot is a root and spinach is leaves.", lvl: 3, pic: "🥗" }
  ],
  tf: [
    { s: "A seed needs soil to start growing.", a: false, why: "A seed can start growing on wet cotton wool. It needs water and air.", pic: "🫘" },
    { s: "Plants get their food from the soil.", a: false, why: "Plants make their own food in their leaves, using sunlight. Roots take in water from the soil." },
    { s: "Watering a plant more and more always helps it grow better.", a: false, why: "Too much water can harm a plant. Its roots need air too.", pic: "💧" },
    { s: "Kangkong is a fruit.", a: false, why: "We eat the leaves and stems of kangkong, not a fruit." },
    { s: "Corn kernels are seeds.", a: true, why: "Each kernel is a seed that can grow into a new corn plant.", pic: "🌽" },
    { s: "Paper is made from trees.", a: true, why: "Paper is made from wood, and wood comes from trees.", pic: "📄" },
    { s: "Weeds are plants too.", a: true, why: "Weeds are plants growing where we do not want them. They need water and light too." },
    { s: "A coconut is a fruit.", a: true, why: "A coconut grows on a tree and holds a seed, so it is a fruit.", pic: "🥥" }
  ],
  sort: [
    { title: "Is it a seed?", groups: ["Seed", "Not a seed"], items: [["peanut", 0], ["red bean", 0], ["corn kernel", 0], ["green pea", 0], ["carrot", 1], ["spinach leaf", 1], ["tomato", 1], ["pebble", 1]] }
  ]
};
