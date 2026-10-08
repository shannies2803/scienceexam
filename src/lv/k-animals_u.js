window.LBU = window.LBU || {};
LBU["k-animals"] = {
  glossary: [
    { t: "Living thing", d: "Something that is alive. It needs food, water and air, it grows, and it can have young." },
    { t: "Hatch", d: "To come out of an egg. Chicks, ducklings and baby turtles hatch from eggs." },
    { t: "Insect", d: "A small animal with six legs, like an ant, a bee or a butterfly." },
    { t: "Gills", d: "The body parts a fish uses to breathe in water." },
    { t: "Scales", d: "Small, flat pieces that cover the body of fish, snakes and lizards." },
    { t: "Burrow", d: "A hole or tunnel in the ground that an animal digs to live in, like a rabbit’s home." },
    { t: "Life cycle", d: "The stages an animal goes through as it grows, like egg, tadpole, froglet and frog." },
    { t: "Wild animal", d: "An animal that lives on its own in nature and finds its own food, like a monkey or an otter." }
  ],
  lessons: [
    {
      h: "Read a two-circle diagram",
      concept: "A two-circle diagram sorts animals into two groups. Each circle is one group. The middle part, where the circles cross, is for animals in BOTH groups. Animals in no group go outside the circles.",
      example: { q: "Look at the diagram. Why is the goldfish in the middle part?", fig: { type: "venn", a: "Lives in water", b: "Has scales", onlyA: ["octopus"], both: ["goldfish"], onlyB: ["snake"], neither: ["cat"] },
        think: ["Read the two circles: ‘Lives in water’ and ‘Has scales’.", "The middle part is inside BOTH circles.", "A goldfish lives in water AND has scales, so it is in both groups."],
        answer: "A goldfish lives in water and has scales, so it belongs to both groups." },
      tip: "Middle part = BOTH. Outside the circles = NEITHER.",
      try: { q: "Use the same diagram. A crab lives in the sea. It has a hard shell, not scales. Where does it go?", o: ["only in ‘Lives in water’", "in the middle part", "outside both circles"], a: 0, why: "A crab lives in water, but it has no scales. So it goes in the ‘Lives in water’ circle only, like the octopus.", fig: { type: "venn", a: "Lives in water", b: "Has scales", onlyA: ["octopus"], both: ["goldfish"], onlyB: ["snake"], neither: ["cat"] } }
    }
  ],
  flash: [
    { f: "A baby sheep is called a…", b: "lamb", pic: "🐑" },
    { f: "A baby horse is called a…", b: "foal", pic: "🐴" },
    { f: "A baby kangaroo lives in its mother’s…", b: "pouch", pic: "🦘" },
    { f: "A spider catches insects in its sticky…", b: "web", pic: "🕷️" },
    { f: "Fish and snakes are covered with…", b: "scales", pic: "🐟🐍" },
    { f: "A frog’s skin is smooth and…", b: "wet", pic: "🐸" },
    { f: "An elephant picks up food with its long…", b: "trunk", pic: "🐘" },
    { f: "Owls and bats are awake at…", b: "night", pic: "🦉🦇" },
    { f: "Bees make a sweet food called…", b: "honey", pic: "🐝" },
    { f: "A dog and a cat are covered with…", b: "fur", pic: "🐕🐈" }
  ],
  mcq: [
    { q: "What do we call a baby duck?", o: ["kitten", "duckling", "calf"], a: 1, why: "A baby duck is a duckling. A kitten is a baby cat and a calf is a baby cow.", lvl: 1, pic: "🦆" },
    { q: "Which animal climbs and leaps in the trees at Bukit Timah?", o: ["goat", "cow", "monkey"], a: 2, why: "Monkeys climb and leap in the trees. Goats and cows walk on the ground.", lvl: 1, pic: "🌳" },
    { q: "Which animal has a hump on its back?", o: ["camel", "zebra", "horse"], a: 0, why: "A camel has a hump on its back. Zebras and horses have flat backs.", lvl: 1 },
    { q: "What does a caterpillar grow into?", o: ["frog", "butterfly", "bee"], a: 1, why: "A caterpillar becomes a pupa, then a butterfly. A tadpole grows into a frog.", lvl: 1, pic: "🐛" },
    { q: "Which animal has a beak?", o: ["dog", "fish", "duck"], a: 2, why: "A duck is a bird. Birds have beaks. Dogs and fish do not.", lvl: 1, pic: "🐶🐟🦆" },
    { q: "How does a frog move on land?", o: ["it hops", "it slithers", "it flies"], a: 0, why: "A frog has strong back legs. It hops on land.", lvl: 1, pic: "🐸" },

    { q: "Wei saw a kingfisher dive into the pond at the park. What was it doing?", o: ["building its nest", "catching a fish to eat", "looking for honey"], a: 1, why: "A kingfisher dives into water to catch fish to eat. It does not build a nest in water, and bees make honey.", lvl: 2, pic: "🐦💦" },
    { q: "Otters swim in the Singapore River. What covers an otter’s body?", o: ["feathers", "scales", "fur"], a: 2, why: "An otter has thick fur. Birds have feathers and fish have scales.", lvl: 2, pic: "🦦" },
    { q: "Why does a tortoise pull its head into its shell when a dog comes near?", o: ["to hide and stay safe", "to look for food", "to drink some water"], a: 0, why: "The hard shell keeps the tortoise safe. It hides inside when it is scared.", lvl: 2, pic: "🐢🐕" },
    { q: "Which animal is NOT a bird?", o: ["penguin", "bat", "ostrich"], a: 1, why: "A bat has fur, not feathers, so it is not a bird. Penguins and ostriches have feathers.", lvl: 2 },
    { q: "The Night Safari opens at night. Why is it a good time to see some animals there?", o: ["they are awake at night", "they sleep all night long", "they eat only in the day"], a: 0, why: "Some animals sleep in the day and wake up at night. That is when they move about and look for food.", lvl: 2, pic: "🌙" },
    { q: "Which body part helps a cat to climb a tree?", o: ["its long whiskers", "its soft fur", "its sharp claws"], a: 2, why: "A cat digs its sharp claws into the bark to climb. Whiskers help it feel, and fur keeps it warm.", lvl: 2, pic: "🐈🌳" },

    { q: "Jun drew a graph of how many legs each animal has. One bar is WRONG. Which one?", o: ["Ant", "Spider", "Dog"], a: 1, why: "A spider has eight legs, not six. An ant has six legs and a dog has four, so those bars are right.", lvl: 3, fig: { type: "bar", title: "Legs on each animal", xl: "Animal", yl: "Number of legs", bars: [["Ant", 6], ["Spider", 6], ["Dog", 4], ["Hen", 2]] } },
    { q: "Look at the diagram. Which animal could go in the part marked ‘?’", o: ["jellyfish", "tortoise", "sea turtle"], a: 2, why: "The ‘?’ part is in BOTH circles. A sea turtle has a shell AND lives in water. A tortoise has a shell but lives on land. A jellyfish has no shell.", lvl: 3, fig: { type: "venn", a: "Has a shell", b: "Lives in water", onlyA: ["snail"], both: ["?"], onlyB: ["goldfish"], neither: ["cat"] } },
    { q: "Look at the chart. Which animal could be B?", o: ["cat", "ant", "snake"], a: 0, why: "B has legs, but not six legs. A cat has four legs, so it fits. An ant has six legs (A) and a snake has no legs (C).", lvl: 3, fig: { type: "flow", root: "Animals", node: { q: "Has legs?", yes: { q: "Has six legs?", yes: "A", no: "B" }, no: "C" } } },
    { q: "Clues: I have no legs. I have scales. I breathe air, not water. What am I?", o: ["goldfish", "earthworm", "snake"], a: 2, why: "A snake has scales, no legs, and breathes air. A goldfish breathes in water with gills. An earthworm has no scales.", lvl: 3, pic: "🔍" }
  ],
  tf: [
    { s: "A starfish is a fish.", a: false, why: "A starfish lives in the sea, but it is not a fish. It has five arms instead of fins.", pic: "⭐🌊" },
    { s: "A seahorse is a fish.", a: true, why: "A seahorse looks odd, but it is a fish. It has fins and breathes with gills.", pic: "🌊" },
    { s: "A dolphin is a fish because it swims.", a: false, why: "A dolphin breathes air and its baby drinks milk. It is not a fish.", pic: "🐬" },
    { s: "A tortoise can climb out of its shell and walk away.", a: false, why: "The shell is part of a tortoise’s body. It can never leave its shell.", pic: "🐢" },
    { s: "A toy robot dog is a living thing because it can move.", a: false, why: "A robot dog does not eat, drink or grow. Moving alone does not make a thing alive.", pic: "🤖" },
    { s: "A mother hen sits on her eggs to keep them warm.", a: true, why: "The hen sits on her eggs to keep them warm. Then the chicks can grow inside and hatch.", pic: "🐔🥚" },
    { s: "A kitten looks like a small adult cat.", a: true, why: "A kitten has fur, whiskers and four legs, just like its mother. It grows bigger.", pic: "🐱" },
    { s: "An elephant can use its trunk to drink water.", a: true, why: "An elephant sucks up water in its trunk, then squirts it into its mouth.", pic: "🐘💧" }
  ]
};
