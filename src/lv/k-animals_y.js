window.LBY = window.LBY || {};
LBY["k-animals"] = {
  lessons: [
    {
      h: "Read a yes/no chart",
      concept: "A yes/no chart sorts animals one question at a time. Start at the top. Answer the question, then follow the ‘yes’ or ‘no’ arrow to the next box.",
      example: { q: "Look at the chart. Where does a cat go: A, B or C?", fig: { type: "flow", root: "Animals", node: { q: "Has feathers?", yes: "A", no: { q: "Has fur?", yes: "B", no: "C" } } },
        think: ["Start at the top. Does a cat have feathers? No.", "Follow the ‘no’ arrow. Does a cat have fur? Yes.", "Follow the ‘yes’ arrow. It ends at B."],
        answer: "A cat goes in B." },
      tip: "Answer one question at a time. Always follow the arrow for your answer.",
      try: { q: "Use the same chart. Where does a goldfish go?", o: ["A", "B", "C"], a: 2, why: "A goldfish has no feathers and no fur. It has scales. So it follows ‘no’ and ‘no’ to C.", fig: { type: "flow", root: "Animals", node: { q: "Has feathers?", yes: "A", no: { q: "Has fur?", yes: "B", no: "C" } } } }
    }
  ],
  mcq: [
    { q: "What do we call a baby pig?", o: ["foal", "piglet", "lamb"], a: 1, why: "A baby pig is a piglet. A foal is a baby horse and a lamb is a baby sheep.", lvl: 1, pic: "🐷" },
    { q: "Which body part helps a fish breathe in water?", o: ["gills", "wings", "beak"], a: 0, why: "A fish takes in air from the water with its gills. Fish have no wings or beak.", lvl: 1, pic: "🐟" },
    { q: "What do all animals need to stay alive?", o: ["toys, games and hats", "shoes, socks and bags", "food, water and air"], a: 2, why: "Every animal needs food, water and air to live. Toys and shoes are not needed.", lvl: 1 },
    { q: "Which animal has black and white stripes?", o: ["lion", "zebra", "hippo"], a: 1, why: "A zebra has black and white stripes. A lion and a hippo have no stripes.", lvl: 1 },
    { q: "What does a bird use to fly?", o: ["its beak", "its claws", "its wings"], a: 2, why: "A bird flaps its wings to fly. It uses its beak to eat and its claws to hold on.", lvl: 1, pic: "🐦" },
    { q: "Which animal has a very long neck?", o: ["giraffe", "pig", "rabbit"], a: 0, why: "A giraffe has a very long neck. It can reach leaves high up in trees.", lvl: 1 },
    { q: "Which animal carries a shell on its back?", o: ["ant", "snail", "earthworm"], a: 1, why: "A snail carries its shell on its back. It hides inside when it is scared.", lvl: 1 },

    { q: "A stick insect looks just like a twig. How does this help it?", o: ["it can fly very fast", "it can swim in ponds", "birds do not see it easily"], a: 2, why: "It looks like a twig, so birds do not spot it and eat it.", lvl: 2, pic: "🌿" },
    { q: "Which animal has feathers but cannot fly?", o: ["eagle", "ostrich", "bat"], a: 1, why: "An ostrich is a bird with feathers, but it cannot fly. It runs fast. An eagle flies and a bat has fur.", lvl: 2 },
    { q: "What do we call a baby horse?", o: ["foal", "cub", "kid"], a: 0, why: "A baby horse is a foal. A cub is a baby lion and a kid is a baby goat.", lvl: 2, pic: "🐴" },
    { q: "Which shows that a puppy is a living thing?", o: ["it has a red collar", "it grows into a dog", "it sits on a soft mat"], a: 1, why: "Living things grow. A puppy grows into a dog. A collar and a mat do not show it is alive.", lvl: 2, pic: "🐶" },
    { q: "Class 2A counted birds in the school garden. Look at the graph. How many mynahs and sparrows did they see in all?", o: ["10", "12", "15"], a: 1, why: "They saw 7 mynahs and 5 sparrows. 7 and 5 make 12.", lvl: 2, fig: { type: "bar", title: "Birds in our garden", xl: "Bird", yl: "Number seen", bars: [["Mynah", 7], ["Sparrow", 5], ["Crow", 3], ["Kingfisher", 1]] } },
    { q: "Which animal feeds its babies with milk?", o: ["goat", "hen", "turtle"], a: 0, why: "A mother goat feeds her kids with milk. Hens and turtles lay eggs and do not make milk.", lvl: 2, pic: "🍼" },
    { q: "Otters live by rivers and the sea in Singapore. How do they get most of their food?", o: ["they eat grass on land", "they eat seeds in trees", "they catch fish in water"], a: 2, why: "Otters are good swimmers. They catch fish in the water.", lvl: 2, pic: "🦦" },
    { q: "Which animal carries its baby in a pouch?", o: ["cow", "cat", "kangaroo"], a: 2, why: "A mother kangaroo keeps her joey in a pouch on her tummy. Cows and cats have no pouch.", lvl: 2 },

    { q: "Look at the diagram. Which animal could go in the part marked ‘?’", o: ["cat", "parrot", "crocodile"], a: 2, why: "The ‘?’ part is in BOTH circles. A crocodile has four legs AND lays eggs. A cat has four legs but its babies are born. A parrot lays eggs but has two legs.", lvl: 3, fig: { type: "venn", a: "Has four legs", b: "Lays eggs", onlyA: ["dog"], both: ["?"], onlyB: ["hen"], neither: ["dolphin"] } },
    { q: "Look at the chart. Which animal could be R?", o: ["goldfish", "rabbit", "sparrow"], a: 1, why: "R does not live in water and has no wings. A rabbit fits. A goldfish lives in water and a sparrow has wings.", lvl: 3, fig: { type: "flow", root: "Animals", node: { q: "Lives in water?", yes: "P", no: { q: "Has wings?", yes: "Q", no: "R" } } } },
    { q: "A whale lives in the sea. Which is TRUE about a whale?", o: ["it comes up to the top to breathe air", "it is a fish that breathes with gills", "it hatches from an egg in the sea"], a: 0, why: "A whale is not a fish. It has no gills, so it swims up to breathe air. Its baby is born, not hatched.", lvl: 3, pic: "🐳🌊" },
    { q: "Which group has ONLY animals that hatch from eggs?", o: ["hen, turtle, frog", "hen, cat, frog", "dog, turtle, duck"], a: 0, why: "Hens, turtles and frogs all lay eggs. A cat and a dog are born from their mothers.", lvl: 3, pic: "🥚" },
    { q: "A penguin cannot fly. Why is it still a bird?", o: ["it has feathers and hatches from an egg", "it swims very well and eats lots of fish", "it walks on its two legs on the cold ice"], a: 0, why: "All birds have feathers and hatch from eggs. Many animals swim, eat fish or walk on two legs, so those do not make it a bird.", lvl: 3, pic: "🐧" }
  ],
  tf: [
    { s: "A fish breathes with its gills.", a: true, why: "Gills let a fish take in air from the water.", pic: "🐟" },
    { s: "A snake has wet, slimy skin.", a: false, why: "A snake has dry scales. It is a frog that has smooth, wet skin.", pic: "🐍" },
    { s: "All animals that live in water are fish.", a: false, why: "Whales, dolphins, crabs and turtles live in water, but they are not fish.", pic: "🌊" },
    { s: "A baby goat is called a kid.", a: true, why: "Yes! A baby goat is a kid.", pic: "🐐" },
    { s: "Only big animals are living things.", a: false, why: "Tiny ants and bees are living things too. They eat, grow and move." },
    { s: "A duck has webbed feet that help it swim.", a: true, why: "The skin between its toes pushes the water, like a paddle." },
    { s: "A chick drinks milk from the mother hen.", a: false, why: "A hen does not make milk. Chicks peck at their food.", pic: "🐣" },
    { s: "Animals need air to stay alive.", a: true, why: "All animals need air, food and water." },
    { s: "A stick insect is just a stick, not an animal.", a: false, why: "A stick insect is a living insect. It only looks like a twig so birds do not eat it.", pic: "🌿" },
    { s: "A snail carries its shell on its back.", a: true, why: "The shell is its home. It hides inside to stay safe.", pic: "🐌" }
  ],
  sort: [
    { title: "Does the baby drink its mother’s milk?", groups: ["Drinks milk 🍼", "Does not drink milk"], items: [["puppy", 0], ["kitten", 0], ["calf", 0], ["baby whale", 0], ["chick", 1], ["duckling", 1], ["baby turtle", 1], ["tadpole", 1]] }
  ]
};
