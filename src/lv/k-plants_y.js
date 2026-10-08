window.LBY = window.LBY || {};
LBY["k-plants"] = {
  lessons: [
    {
      h: "Change only ONE thing",
      concept: "To find out what a plant needs, we set up two pots that are the same in every way except ONE thing. Then we can see if that one thing matters.",
      example: { q: "Lily wants to find out if a plant needs sunlight. Look at the pots. Which TWO pots should she compare?", fig: { type: "setups", items: [ { label: "A", icon: "pot", lines: ["Sunny window", "Watered daily"] }, { label: "B", icon: "pot", lines: ["Dark cupboard", "Watered daily"] }, { label: "C", icon: "pot", lines: ["Sunny window", "Not watered"] } ] },
        think: ["She is testing sunlight, so only the light should be different.", "A and B both get water. A is in the sun and B is in the dark.", "A and C are different in water, not light, so they are not the right pair."],
        answer: "Pots A and B, because only the sunlight is different." },
      tip: "Ask: what am I testing? Only THAT thing should change.",
      try: { q: "Ken wants to find out if a bean seed needs water to start growing. Which TWO set-ups should he compare?", o: ["P and Q", "P and R", "Q and R"], a: 0, why: "P and Q are both in a cupboard. Only the water is different, so he can see if water matters.", fig: { type: "setups", items: [ { label: "P", icon: "dish", lines: ["Wet cotton wool", "In a cupboard"] }, { label: "Q", icon: "dish", lines: ["Dry cotton wool", "In a cupboard"] }, { label: "R", icon: "dish", lines: ["Dry cotton wool", "On a table"] } ] } }
    }
  ],
  mcq: [
    // lvl 1 (7)
    { q: "Pandan gives kaya and cakes a nice smell. Which part of the pandan plant do we use?", o: ["leaves", "roots", "seeds"], a: 0, why: "We use the long green leaves of the pandan plant in cooking.", lvl: 1 },
    { q: "The red beans in ice kacang come from a plant. Which part of the plant are they?", o: ["roots", "leaves", "seeds"], a: 2, why: "Beans are seeds. A bean can grow into a new plant.", lvl: 1, pic: "🍧" },
    { q: "Which of these is a plant?", o: ["snail", "fern", "worm"], a: 1, why: "A fern is a green plant. A snail and a worm are animals.", lvl: 1 },
    { q: "Which of these can grow from a seed?", o: ["a rambutan tree", "a round pebble", "a sandcastle"], a: 0, why: "A rambutan seed can grow into a new rambutan tree. Pebbles and sandcastles are not living.", lvl: 1 },
    { q: "Which part of a plant can grow into a fruit?", o: ["root", "flower", "stem"], a: 1, why: "A flower can grow into a fruit, and the fruit holds seeds.", lvl: 1 },
    { q: "Which of these is the SMALLEST plant?", o: ["moss", "rain tree", "coconut tree"], a: 0, why: "Moss is a tiny, soft plant. Rain trees and coconut trees are very tall.", lvl: 1 },
    { q: "Which animal likes to visit flowers?", o: ["fish", "crab", "butterfly"], a: 2, why: "Butterflies visit flowers to drink sweet juice. Fish and crabs live in water.", lvl: 1, pic: "🌸" },
    // lvl 2 (8)
    { q: "Which fruit has only ONE big seed inside?", o: ["papaya", "mango", "watermelon"], a: 1, why: "A mango has one big seed. A papaya and a watermelon have many seeds.", lvl: 2 },
    { q: "Which part of a tree is its thick, woody trunk?", o: ["root", "leaf", "stem"], a: 2, why: "The trunk is the stem of the tree. It holds the tree up.", lvl: 2, pic: "🌳" },
    { q: "Which plant grows in muddy sea water at Sungei Buloh?", o: ["mangrove tree", "cactus", "sunflower"], a: 0, why: "Mangrove trees grow in muddy water by the sea. A cactus lives in a dry desert.", lvl: 2 },
    { q: "A pitcher plant has leaves shaped like a cup. What does the cup catch?", o: ["stones", "insects", "fish"], a: 1, why: "Insects fall into the slippery cup and cannot climb out.", lvl: 2 },
    { q: "Aisha cut open three fruits and counted the seeds. Look at the graph. Which fruit had the MOST seeds?", o: ["Fruit P", "Fruit Q", "Fruit R"], a: 1, why: "The bar for Fruit Q is the tallest. It had 15 seeds.", lvl: 2, fig: { type: "bar", xl: "Fruit", yl: "Number of seeds", bars: [["P", 6], ["Q", 15], ["R", 2]] } },
    { q: "Look at the pots. Which pot has everything a plant needs to grow well?", o: ["Pot A", "Pot B", "Pot C"], a: 2, why: "Pot C gets sunlight and water. Pot A has no water and Pot B has no light.", lvl: 2, fig: { type: "setups", items: [ { label: "A", icon: "pot", lines: ["Sunny spot", "Not watered"] }, { label: "B", icon: "pot", lines: ["Dark cupboard", "Watered daily"] }, { label: "C", icon: "pot", lines: ["Sunny spot", "Watered daily"] } ] } },
    { q: "Ali’s plant in a dark room looks weak and yellow. What should he do?", o: ["Move it to a bright place", "Give it some salt water", "Cut off all its roots"], a: 0, why: "The plant needs sunlight to make food. Salt water and cutting roots would harm it.", lvl: 2, pic: "🪴" },
    { q: "Which is NOT a job of the roots?", o: ["take in water", "hold the plant in the soil", "make food with sunlight"], a: 2, why: "Leaves make food with sunlight. Roots take in water and hold the plant firmly.", lvl: 2 },
    // lvl 3 (5)
    { q: "Look at the diagram. Which plant has flowers but does NOT grow in water?", o: ["water lily", "hibiscus", "fern"], a: 1, why: "Hibiscus is only in the ‘Has flowers’ circle. A water lily is in both circles, and a fern is in neither.", lvl: 3, fig: { type: "venn", a: "Has flowers", b: "Grows in water", onlyA: ["hibiscus"], both: ["water lily", "lotus"], onlyB: [], neither: ["fern"] } },
    { q: "A fern is a plant. What does a fern NEVER have?", o: ["leaves", "flowers", "roots"], a: 1, why: "A fern has roots, a stem and leaves, but it never has flowers.", lvl: 3 },
    { q: "Ravi measured his plant every two days. Look at the graph. Between which days did the plant NOT grow at all?", o: ["Day 0 to 2", "Day 2 to 4", "Day 6 to 8"], a: 2, why: "From Day 6 to Day 8 the line stays flat at 8 cm, so the plant did not grow.", lvl: 3, fig: { type: "line", xl: "Day", yl: "Height of plant (cm)", pts: [["0", 1], ["2", 3], ["4", 6], ["6", 8], ["8", 8]] } },
    { q: "Ken put one bean seed on wet cotton wool and one on dry cotton wool. Both were in a dark cupboard. Which seed starts to grow?", o: ["the seed on wet cotton wool", "the seed on dry cotton wool", "neither, as it is too dark"], a: 0, why: "A seed needs water and air to start growing. It does not need light, so the dark is not a problem.", lvl: 3, pic: "🫘" },
    { q: "Sam says, “A tree is not alive because it cannot walk.” Which is the BEST reply?", o: ["Trees grow, so they are living", "Trees are tall, so they are living", "Trees are green, so they are living"], a: 0, why: "Living things grow. Being tall or green does not show that something is alive.", lvl: 3, pic: "🌳" }
  ],
  tf: [
    { s: "A tree trunk is a stem.", a: true, why: "The trunk is the big, woody stem of a tree.", pic: "🌳" },
    { s: "Ferns have flowers.", a: false, why: "Ferns never have flowers." },
    { s: "A mango has one big seed inside.", a: true, why: "A mango has one big seed in the middle.", pic: "🥭" },
    { s: "A seed is not alive, just like a small stone.", a: false, why: "A seed is living. It can grow into a new plant. A stone cannot." },
    { s: "A pitcher plant can catch insects.", a: true, why: "Insects slip into its cup-shaped leaves." },
    { s: "Leaves take in water from the soil.", a: false, why: "Roots take in water from the soil. Leaves make food." },
    { s: "Pandan leaves are used in Singapore food like kaya.", a: true, why: "Pandan leaves give kaya and cakes a nice smell and a green colour." },
    { s: "All fruits taste sweet.", a: false, why: "A chilli and a cucumber are fruits too, and they are not sweet.", pic: "🌶️🥒" },
    { s: "Mangrove trees can grow in muddy sea water.", a: true, why: "Mangroves grow in mud by the sea, like at Sungei Buloh." },
    { s: "Flowers are only there to make a garden look pretty.", a: false, why: "Flowers can grow into fruits, and fruits hold seeds for new plants.", pic: "🌺" }
  ],
  sort: [
    { title: "One big seed or many seeds?", groups: ["One big seed", "Many seeds"], items: [["mango", 0], ["avocado", 0], ["rambutan", 0], ["lychee", 0], ["papaya", 1], ["watermelon", 1], ["dragon fruit", 1], ["tomato", 1]] }
  ]
};
