window.LBZ = window.LBZ || {};
LBZ["k-animals"] = {
  flash: [
    { f: "A baby frog is called a…", b: "tadpole", pic: "🐸" },
    { f: "A baby cow is called a…", b: "calf", pic: "🐄" },
    { f: "A baby lion is called a…", b: "cub", pic: "🦁" },
    { f: "A bird’s body is covered with…", b: "feathers", pic: "🐦" },
    { f: "A fish breathes in water with its…", b: "gills", pic: "🐟" },
    { f: "How many legs does an insect have?", b: "six legs", pic: "🐜" },
    { f: "How many legs does a spider have?", b: "eight legs", pic: "🕷️" },
    { f: "Bees live in a…", b: "hive", pic: "🐝" },
    { f: "A bird lays its eggs in a…", b: "nest", pic: "🐦🥚" },
    { f: "A snake has no legs. It moves by…", b: "slithering", pic: "🐍" },
    { f: "A chick comes out of its egg. We say it…", b: "hatches", pic: "🥚" },
    { f: "All animals need food, water and…", b: "air", pic: "🐶🐱" }
  ],
  mcq: [
    { q: "Which animal has long whiskers on its face?", o: ["goldfish", "hen", "cat"], a: 2, why: "A cat has long whiskers. They help it feel its way in the dark. A goldfish and a hen have no whiskers.", lvl: 1 },
    { q: "Where does a wild rabbit make its home?", o: ["in a nest in a tree", "in a burrow underground", "in a hive on a branch"], a: 1, why: "A rabbit digs a burrow under the ground. Birds make nests and bees live in hives.", lvl: 1, pic: "🐰" },
    { q: "Which animal lays eggs?", o: ["goat", "duck", "cat"], a: 1, why: "A mother duck lays eggs and the ducklings hatch. Baby goats and kittens are born.", lvl: 1, pic: "🥚" },
    { q: "Which animal has eight legs?", o: ["spider", "ant", "bee"], a: 0, why: "A spider has eight legs. Ants and bees are insects, so they have six legs.", lvl: 1 },
    { q: "Which animal lives in the sea?", o: ["squirrel", "camel", "starfish"], a: 2, why: "A starfish lives in the sea. Squirrels and camels live on land.", lvl: 1, pic: "🌊" },
    { q: "Which animal can fly?", o: ["butterfly", "snail", "earthworm"], a: 0, why: "A butterfly flies with its wings. A snail and an earthworm crawl.", lvl: 1, pic: "☁️" },

    { q: "A polar bear lives in a very cold place. Why does it have thick fur?", o: ["to help it swim fast", "to keep it warm", "to help it see at night"], a: 1, why: "Thick fur keeps the polar bear warm in the cold. Fur does not help it see.", lvl: 2, pic: "❄️" },
    { q: "Ravi saw a monitor lizard at Sungei Buloh. What covers its body?", o: ["scales", "feathers", "fur"], a: 0, why: "A lizard is covered with dry scales. Birds have feathers and cats have fur.", lvl: 2, pic: "🦎" },
    { q: "Which animal catches insects with its long, sticky tongue?", o: ["cow", "rabbit", "frog"], a: 2, why: "A frog flicks out its sticky tongue to catch insects. Cows and rabbits eat plants.", lvl: 2, pic: "🪰" },
    { q: "Hornbills live on Pulau Ubin. What do they use their big beaks for?", o: ["to pick and eat fruit", "to swim in the sea", "to dig holes in sand"], a: 0, why: "Hornbills use their big beaks to pick fruit to eat. They do not swim or dig.", lvl: 2 },
    { q: "Which is the best home for a pet goldfish?", o: ["a dry box of hay", "a cage with a wheel", "a tank of clean water"], a: 2, why: "A goldfish must live in water, so it needs a tank of clean water. Hay and a wheel are for a hamster.", lvl: 2, pic: "🐠" },
    { q: "Look at the life cycle of a hen. What is the missing stage?", o: ["tadpole", "chick", "caterpillar"], a: 1, why: "A chick hatches from the egg. It grows into a hen. A tadpole grows into a frog.", lvl: 2, fig: { type: "cycle", stages: ["Egg", "?", "Hen"] } },

    { q: "Class 2C counted the legs of animals P, Q and R. Look at the graph. Which animal is an insect?", o: ["P", "Q", "R"], a: 1, why: "An insect has six legs. Q has 6 legs. R has 8 legs, so R could be a spider.", lvl: 3, fig: { type: "bar", title: "Legs we counted", xl: "Animal", yl: "Number of legs", bars: [["P", 4], ["Q", 6], ["R", 8]] } },
    { q: "Look at the chart. Which animal could be C?", o: ["hamster", "sparrow", "goldfish"], a: 2, why: "C has no fur and cannot fly. A goldfish fits. A hamster has fur and a sparrow can fly.", lvl: 3, fig: { type: "flow", root: "Animals", node: { q: "Has fur?", yes: "A", no: { q: "Can fly?", yes: "B", no: "C" } } } },
    { q: "Look at the diagram. Which animal could go in the part marked ‘?’", o: ["bee", "spider", "bat"], a: 0, why: "The ‘?’ part is in BOTH circles. A bee has six legs AND can fly. A spider has eight legs and a bat does not have six legs.", lvl: 3, fig: { type: "venn", a: "Has six legs", b: "Can fly", onlyA: ["ant"], both: ["?"], onlyB: ["sparrow"], neither: ["snail"] } },
    { q: "Sam’s pet has scales and no legs. It lives in water and breathes with gills. What is it?", o: ["snake", "goldfish", "terrapin"], a: 1, why: "A goldfish has scales and fins but no legs, and it breathes with gills. A snake breathes air and a terrapin has four legs.", lvl: 3 }
  ],
  tf: [
    { s: "A cat has whiskers on its face.", a: true, why: "A cat’s whiskers help it feel its way.", pic: "🐱" },
    { s: "An earthworm has many tiny legs.", a: false, why: "An earthworm has no legs. It stretches and squeezes its body to move.", pic: "🪱" },
    { s: "A butterfly is a bird because it has wings.", a: false, why: "A butterfly is an insect. It has six legs and no feathers.", pic: "🦋" },
    { s: "A frog lays its eggs in water.", a: true, why: "Frogs lay their eggs in ponds. Tadpoles hatch from them.", pic: "🐸" },
    { s: "A baby cow is called a foal.", a: false, why: "A baby cow is a calf. A foal is a baby horse.", pic: "🐄" },
    { s: "Some animals sleep in the day and are awake at night.", a: true, why: "Owls and bats are awake at night and sleep in the day.", pic: "🌙" },
    { s: "A goldfish can breathe out of water, like we do.", a: false, why: "A goldfish breathes with its gills. It must stay in water to breathe.", pic: "🐟" },
    { s: "A wild rabbit digs a burrow to live in.", a: true, why: "Rabbits dig burrows under the ground to stay safe.", pic: "🐰" }
  ],
  sort: [
    { title: "How many legs does it have?", groups: ["No legs", "Two legs", "Four legs"], items: [["snake 🐍", 0], ["earthworm 🪱", 0], ["snail 🐌", 0], ["hen 🐔", 1], ["parrot 🦜", 1], ["cat 🐱", 2], ["dog 🐕", 2], ["tortoise 🐢", 2]] }
  ]
};
