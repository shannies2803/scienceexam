window.LBX = window.LBX || {};
LBX["k-animals"] = {
  notes: [
    { h: "Animal homes", t: "Many animals make a home. A bird builds a nest, bees live in a hive, a spider spins a web and a rabbit digs a burrow.", kw: ["nest", "hive", "burrow"], pic: "🪺🐝🕸️" },
    { h: "Insects and spiders", t: "An insect has six legs, like an ant, a bee or a butterfly. A spider has eight legs, so it is not an insect.", kw: ["insect", "six legs", "eight legs"], pic: "🐜🐞🕷️" }
  ],
  traps: [
    "A spider is not an insect. Count the legs: a spider has eight, but an insect has six.",
    "Do not feed wild monkeys or otters. They may grab food and bite, and our food can make them sick."
  ],
  lessons: [
    {
      h: "Count the legs",
      concept: "We can count legs to sort small animals. Insects have six legs. Spiders have eight legs. Snails and earthworms have no legs at all.",
      example: { q: "Is a ladybird an insect?", pic: "🐞",
        think: ["Look under the ladybird.", "Count its legs: 1, 2, 3, 4, 5, 6.", "Six legs means it is an insect."],
        answer: "Yes. A ladybird has six legs, so it is an insect." },
      tip: "Six legs = insect. Eight legs = spider.",
      try: { q: "Which animal is an insect?", o: ["spider", "earthworm", "grasshopper"], a: 2, why: "A grasshopper has six legs, so it is an insect. A spider has eight legs and an earthworm has none.", pic: "🔍" }
    },
    {
      h: "Body parts help animals",
      concept: "Each body part helps an animal to live. Birds use wings to fly and a beak to eat. Fish use fins and a tail to swim. An elephant uses its trunk to pick up food and drink.",
      example: { q: "How does a duck use its webbed feet?", pic: "🦆",
        think: ["Where does a duck spend lots of time? In the pond.", "Its feet are wide and flat, like paddles.", "Paddles push the water back, so the duck moves forward."],
        answer: "A duck uses its webbed feet to paddle and swim in water." },
      tip: "Ask: what does the animal need to do? Then find the body part that helps.",
      try: { q: "What does an eagle use to hold its food?", o: ["its sharp claws", "its soft feathers", "its long tail"], a: 0, why: "An eagle grips its food with its sharp claws. Feathers keep it warm and help it fly.", pic: "🦅" }
    }
  ],
  mcq: [
    { q: "What does a fish use to help it swim?", o: ["its eyes", "its mouth", "its fins"], a: 2, why: "A fish moves its fins and tail to swim. It uses its eyes to see and its mouth to eat.", lvl: 1, pic: "🌊" },
    { q: "What do we call a baby kangaroo?", o: ["cub", "joey", "lamb"], a: 1, why: "A baby kangaroo is a joey. A cub is a baby lion and a lamb is a baby sheep.", lvl: 1, pic: "🦘" },
    { q: "Which animal gives us wool for warm sweaters?", o: ["sheep", "pig", "duck"], a: 0, why: "Sheep have thick wool. Farmers cut it off and it grows back.", lvl: 1, pic: "🧶" },
    { q: "Which animal makes honey?", o: ["ant", "fly", "bee"], a: 2, why: "Bees make honey in their hive.", lvl: 1, pic: "🍯" },
    { q: "Where does a bird lay its eggs?", o: ["in a web", "in a nest", "in a hive"], a: 1, why: "A bird lays its eggs in a nest. A spider makes a web and bees live in a hive.", lvl: 1, pic: "🥚" },
    { q: "How many legs does an insect have?", o: ["eight", "four", "six"], a: 2, why: "Every insect has six legs.", lvl: 1, pic: "🐜🐞" },
    { q: "Which animal has a long trunk?", o: ["elephant", "giraffe", "zebra"], a: 0, why: "An elephant has a long trunk. A giraffe has a long neck.", lvl: 1 },
    { q: "Which animal is awake at night and sleeps in the day?", o: ["owl", "hen", "butterfly"], a: 0, why: "Owls hunt at night. Hens and butterflies are awake in the day.", lvl: 1, pic: "🌙" },

    { q: "A spider has eight legs. Is it an insect?", o: ["yes, it has many legs", "no, insects have six legs", "yes, it can crawl fast"], a: 1, why: "Insects have six legs. A spider has eight, so it is not an insect.", lvl: 2, pic: "🕷️" },
    { q: "Which baby is called a cub?", o: ["a baby duck", "a baby sheep", "a baby lion"], a: 2, why: "A baby lion is a cub. A baby duck is a duckling and a baby sheep is a lamb.", lvl: 2 },
    { q: "What does a hen use to peck at its food?", o: ["its wings", "its beak", "its tail"], a: 1, why: "A hen pecks grain with its hard beak.", lvl: 2, pic: "🐔" },
    { q: "Which animal has no legs?", o: ["earthworm", "lizard", "frog"], a: 0, why: "An earthworm has no legs. It moves by stretching and squeezing its body. Lizards and frogs have four legs.", lvl: 2 },
    { q: "Which animal makes silk thread?", o: ["honeybee", "sheep", "silkworm"], a: 2, why: "A silkworm spins silk thread. Bees make honey and sheep give wool.", lvl: 2 },
    { q: "Why should we NOT feed the wild monkeys at Bukit Timah?", o: ["they may grab food and bite", "they only eat food from shops", "they cannot eat fruit at all"], a: 0, why: "Fed monkeys learn to grab food from people and may bite. Wild monkeys find their own fruit and leaves.", lvl: 2, pic: "🐒" },
    { q: "Which sea animal has a hard shell?", o: ["jellyfish", "crab", "octopus"], a: 1, why: "A crab has a hard shell. A jellyfish and an octopus have soft bodies.", lvl: 2, pic: "🌊" },
    { q: "Look at the life cycle of a butterfly. What is the missing stage?", o: ["tadpole", "chick", "caterpillar"], a: 2, why: "A caterpillar hatches from the egg. Later it becomes a pupa, then a butterfly.", lvl: 2, fig: { type: "cycle", stages: ["Egg", "?", "Pupa", "Butterfly"] } },
    { q: "Why does a spider spin a web?", o: ["to catch insects to eat", "to keep out of the rain", "to help it swim in ponds"], a: 0, why: "Insects get stuck in the sticky web. Then the spider eats them.", lvl: 2, pic: "🕸️" },
    { q: "Which pet must live in water?", o: ["hamster", "guppy", "rabbit"], a: 1, why: "A guppy is a small fish. It lives in a fish tank. Hamsters and rabbits live on land.", lvl: 2 },

    { q: "Look at the life cycle of a frog. What is the missing stage?", o: ["pupa", "caterpillar", "froglet"], a: 2, why: "A tadpole grows legs and becomes a froglet, a young frog with a short tail. Then it becomes a frog.", lvl: 3, fig: { type: "cycle", stages: ["Egg", "Tadpole", "?", "Frog"] } },
    { q: "Look at the chart. Which animal could be B?", o: ["parrot", "ant", "dog"], a: 1, why: "B has no feathers and has six legs. An ant fits. A parrot has feathers and a dog has four legs.", lvl: 3, fig: { type: "flow", root: "Animals", node: { q: "Has feathers?", yes: "A", no: { q: "Has six legs?", yes: "B", no: "C" } } } },
    { q: "Class 1A counted animals at the park. Which animal did they see MORE of than lizards, but FEWER than mynahs?", o: ["butterfly", "squirrel", "mynah"], a: 0, why: "Lizards 5, butterflies 6, mynahs 9. Six is more than 5 and less than 9, so the answer is butterfly.", lvl: 3, fig: { type: "bar", title: "Animals we saw", xl: "Animal", yl: "Number seen", bars: [["Mynah", 9], ["Squirrel", 3], ["Butterfly", 6], ["Lizard", 5]] } },
    { q: "Look at the diagram. Which animal belongs in the part marked ‘?’", o: ["shark", "parrot", "otter"], a: 2, why: "The ‘?’ part is in BOTH circles. An otter has fur AND swims well. A shark swims but has no fur.", lvl: 3, fig: { type: "venn", a: "Can swim", b: "Has fur", onlyA: ["goldfish"], both: ["?"], onlyB: ["hamster"], neither: ["snail"] } },
    { q: "Which animal hatches from an egg but has NO feathers?", o: ["duck", "turtle", "kitten"], a: 1, why: "A baby turtle hatches from an egg, and turtles have no feathers. A duck has feathers and a kitten is born.", lvl: 3, pic: "🥚" },
    { q: "Tom’s pet is small and has fur. Its babies are born, not hatched. What could it be?", o: ["guinea pig", "budgie", "terrapin"], a: 0, why: "A guinea pig has fur and its babies are born. A budgie is a bird and a terrapin hatches from an egg.", lvl: 3, pic: "🏠" }
  ],
  tf: [
    { s: "A spider is an insect.", a: false, why: "A spider has eight legs. Insects have six legs.", pic: "🕷️" },
    { s: "An insect has six legs.", a: true, why: "Ants, bees and butterflies all have six legs.", pic: "🐜" },
    { s: "Bees make honey.", a: true, why: "Bees make honey and keep it in their hive.", pic: "🐝" },
    { s: "A caterpillar hatches from a butterfly’s egg.", a: true, why: "A butterfly lays eggs. Caterpillars hatch from them.", pic: "🥚🐛" },
    { s: "All animals have legs.", a: false, why: "Snakes, fish and earthworms have no legs." },
    { s: "Sheep give us wool.", a: true, why: "Wool is cut from a sheep. It grows back.", pic: "🐑" },
    { s: "An owl sleeps at night and hunts in the day.", a: false, why: "An owl hunts at night and sleeps in the day.", pic: "🦉" },
    { s: "A baby kangaroo is called a cub.", a: false, why: "A baby kangaroo is called a joey.", pic: "🦘" },
    { s: "It is kind to feed the wild monkeys at Bukit Timah.", a: false, why: "Fed monkeys may grab food and bite. Our food can make them sick.", pic: "🐒" },
    { s: "A duck uses its webbed feet to swim.", a: true, why: "Its wide, flat feet push the water like paddles.", pic: "🦆" }
  ],
  sort: [
    { title: "Is it an insect?", groups: ["Insect (6 legs)", "Not an insect"], items: [["ant 🐜", 0], ["bee 🐝", 0], ["butterfly 🦋", 0], ["ladybird 🐞", 0], ["spider 🕷️", 1], ["snail 🐌", 1], ["earthworm 🪱", 1], ["cat 🐱", 1]] },
    { title: "How does it move?", groups: ["Flies", "Swims", "Crawls"], items: [["eagle 🦅", 0], ["bee 🐝", 0], ["dragonfly", 0], ["shark 🦈", 1], ["goldfish 🐠", 1], ["dolphin 🐬", 1], ["snail 🐌", 2], ["caterpillar 🐛", 2]] }
  ]
};
