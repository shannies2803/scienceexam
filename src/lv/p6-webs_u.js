window.LBU = window.LBU || {};
LBU["p6-webs"] = {
  glossary: [
    { t: "Food chain", d: "A series of organisms that shows who eats whom. It starts with a producer, and each arrow points from the organism that is eaten to the organism that eats it." },
    { t: "Food web", d: "Two or more food chains that are linked, because most organisms eat more than one kind of food and are eaten by more than one kind of organism." },
    { t: "Producer", d: "An organism, such as a green plant or algae, that makes its own food by photosynthesis using light energy. Every food chain starts with a producer." },
    { t: "Consumer", d: "An organism that cannot make its own food. It gets its energy by eating plants, other animals or both." },
    { t: "Herbivore", d: "An animal that eats only plants, e.g. a goat or a caterpillar." },
    { t: "Carnivore", d: "An animal that eats only other animals, e.g. an eagle or a snake." },
    { t: "Omnivore", d: "An animal that eats both plants and animals, e.g. a human or a chicken." },
    { t: "Predator", d: "An animal that hunts and eats other animals for food, e.g. a snake that eats frogs." },
    { t: "Prey", d: "An animal that is hunted and eaten by another animal, its predator, e.g. a frog that is eaten by a snake." },
    { t: "Decomposer", d: "An organism that breaks down dead plants and animals and their waste, and returns nutrients (mineral salts) to the soil for plants to use, e.g. fungi and some bacteria." },
    { t: "Population", d: "All the organisms of one kind, e.g. all the guppies in a pond, living together in the same place at the same time." },
    { t: "Community", d: "All the populations of different kinds of organisms living together and interacting in one habitat, e.g. all the plants and animals in a pond." }
  ],
  lessons: [
    {
      h: "Competitors: two animals that share the same food",
      concept: "When two kinds of animals eat the same food, they compete for it. Find competitors by looking for two arrows that leave the SAME food and point to two different animals. If one competitor decreases, there is more of the shared food left for the other, so the other may increase. Full marks need the link: fewer of one animal eat the food, so there is more food for the other.",
      example: {
        q: "Study the pond food web shown.\n(a) Name the organism that competes with the snail for food. [1]\n(b) A disease kills most of the tadpoles. Explain why the snail population may increase. [1]",
        fig: { type: "web", links: [["water plant", "snail"], ["water plant", "tadpole"], ["snail", "duck"], ["tadpole", "small fish"], ["small fish", "heron"]] },
        marks: 2,
        think: [
          "Step 1: Find the snail’s food: the arrow into the snail comes from the water plant.",
          "Step 2: Which other arrow leaves the water plant? It goes to the tadpole, so the tadpole competes with the snail.",
          "Step 3: With fewer tadpoles, fewer water plants are eaten, so more water plants are left for the snails.",
          "Step 4: The snails have more food, so their population may increase. The duck is not affected by the tadpoles, so it does not change the answer."
        ],
        answer: "(a) The tadpole. (b) Fewer tadpoles eat the water plants, so there are more water plants left as food for the snails."
      },
      tip: "Competitors share a FOOD (arrows leave the same organism); a predator and its prey share an ARROW. Do not mix them up.",
      try: {
        q: "Study the pond food web shown. Which two organisms compete for food?",
        fig: { type: "web", links: [["algae", "water flea"], ["algae", "mosquito larva"], ["water flea", "guppy"], ["mosquito larva", "guppy"], ["guppy", "kingfisher"]] },
        o: ["water flea and guppy", "guppy and kingfisher", "water flea and mosquito larva", "mosquito larva and guppy"],
        a: 2,
        why: "The water flea and the mosquito larva both eat algae, so they compete for it. The other pairs are a prey and its predator: the guppy eats the water flea and the mosquito larva, and the kingfisher eats the guppy."
      }
    },
    {
      h: "Knock-on effects: following a change two links along",
      concept: "A change in one population can spread along the food chain to organisms it does not eat or is not eaten by. Move ONE link at a time and give a reason at each step: the change in A affects B, and the change in B then affects C. This is how removing a carnivore can change the number of plants.",
      example: {
        q: "On a farm in Kranji, the food chain is kailan → caterpillar → bird → snake. Most of the snakes were caught. Explain how this may cause the number of kailan plants to increase. [2]",
        fig: { type: "web", links: [["kailan", "caterpillar"], ["caterpillar", "bird"], ["bird", "snake"]] },
        marks: 2,
        think: [
          "Step 1: Start at the snake. Its prey is the bird, so fewer birds are eaten and the birds increase.",
          "Step 2: Move one link down. More birds eat more caterpillars, so the caterpillars decrease.",
          "Step 3: Move one more link down. Fewer caterpillars eat the kailan, so the kailan plants increase.",
          "Step 4: Write the steps in order, with a reason for each change."
        ],
        answer: "Fewer birds are eaten by the snakes, so the birds increase and eat more caterpillars. The caterpillars decrease, so fewer kailan plants are eaten and the kailan plants increase."
      },
      tip: "Never jump straight from the snake to the kailan. The marker wants every link in between, each with its reason.",
      try: {
        q: "In a pond, the food chain is algae → water flea → small fish → heron. Most of the herons fly away. What will most likely happen to the algae after some time?",
        fig: { type: "web", links: [["algae", "water flea"], ["water flea", "small fish"], ["small fish", "heron"]] },
        o: ["They increase, as fewer water fleas eat them.", "They decrease, as more small fish eat them.", "They stay the same, as herons do not eat algae.", "They decrease, as more water fleas eat them."],
        a: 0,
        why: "Fewer small fish are eaten, so they increase and eat more water fleas. With fewer water fleas, fewer algae are eaten, so the algae increase. Small fish do not eat algae in this chain, and the change still reaches the algae even though herons do not eat them."
      }
    }
  ],
  flash: [
    { f: "How do you count all the food chains in a food web?", b: "Start at EVERY producer. Follow every path of arrows until you reach an organism that is not eaten by anything. Each complete path is one food chain." },
    { f: "Two animals eat the same food. One of them dies out. What may happen to the other?", b: "It may increase, because there is less competition for the food, so more of the food is left for it." },
    { f: "How can removing a carnivore affect the plants in a food chain?", b: "Its prey increase because fewer are eaten. The prey then eat more of the animals below them, so these decrease, and fewer plants are eaten. The effect passes along the chain." },
    { f: "Why is a herbivore never a predator?", b: "A predator hunts and eats other animals. A herbivore eats only plants, so it is a prey but not a predator." },
    { f: "Where do decomposers get their energy from?", b: "From the dead plants and animals and the waste they break down. This energy first came from the Sun: plants absorbed light energy to make food." },
    { f: "Why are mushrooms and moulds NOT producers?", b: "They have no chlorophyll, so they cannot make their own food using light energy. They get their food by breaking down dead or decaying matter." },
    { f: "Why does a predator population usually rise a little AFTER its prey rises?", b: "More prey means more food for the predators, so more predators survive and reproduce. This takes time, so the predators rise a little later." },
    { f: "What is biological control of pests?", b: "Using a natural predator to reduce the number of pests instead of spraying pesticides, e.g. ladybirds to eat aphids, or guppies to eat mosquito larvae." },
    { f: "How can an insecticide affect frogs that never touch the crops?", b: "It kills the insects that the frogs eat, so the frogs have less food and their population may decrease." },
    { f: "What happens to a food web if all the producers die?", b: "All the consumers lose their source of food and energy. The herbivores decrease first, then the animals that eat them, until the whole web is affected." },
    { f: "How do you write a full-marks ‘what will happen’ answer?", b: "Name the organism, state the change (increase or decrease) and give the feeding reason, e.g. ‘The frogs will increase because fewer frogs are eaten by snakes.’" },
    { f: "Can one organism be in different positions in different food chains?", b: "Yes. A bird is second in seeds → bird, but third in grass → caterpillar → bird, because it eats more than one kind of food." }
  ],
  mcq: [
    { q: "Which of the following organisms can make its own food?", o: ["bread mould", "mangrove tree", "mudskipper", "fiddler crab"], a: 1, why: "The mangrove tree is a green plant, so it makes its own food by photosynthesis using light energy. Bread mould is a fungus (a decomposer), and the mudskipper and fiddler crab are animals (consumers).", lvl: 1 },
    { q: "Study the food chain shown. Which organism is a predator but NOT a prey?", fig: { type: "web", links: [["algae", "tadpole"], ["tadpole", "water beetle"], ["water beetle", "kingfisher"]] }, o: ["algae", "tadpole", "water beetle", "kingfisher"], a: 3, why: "The kingfisher eats the water beetle, so it is a predator, and nothing in this chain eats it. The water beetle is both a predator and a prey, the tadpole is a prey only, and algae are producers.", lvl: 1 },
    { q: "Which of the following animals is an omnivore?", o: ["chicken", "goat", "eagle", "caterpillar"], a: 0, why: "A chicken eats both plant food (grains, seeds) and animals (worms, insects), so it is an omnivore. The goat and caterpillar eat only plants, and the eagle eats only animals.", lvl: 1 },
    { q: "Mould grows on a slice of bread left on a kitchen table in an HDB flat. How does the mould get its food?", o: ["It makes food using light energy.", "It takes in food from the air around it.", "It breaks down the bread it grows on.", "It absorbs food from the plate below it."], a: 2, why: "Mould is a fungus. It has no chlorophyll and cannot make its own food, so it breaks down the bread it grows on and takes in the food from it.", lvl: 1 },
    { q: "Study the food web shown. How many organisms are there in the LONGEST food chain?", fig: { type: "web", links: [["grass", "grasshopper"], ["grass", "rabbit"], ["grasshopper", "lizard"], ["grasshopper", "bird"], ["lizard", "bird"], ["lizard", "snake"], ["bird", "snake"], ["rabbit", "snake"]] }, o: ["3", "4", "5", "6"], a: 2, why: "The longest path is grass → grasshopper → lizard → bird → snake, which has 5 organisms. The other chains (e.g. grass → rabbit → snake) are shorter.", lvl: 2 },
    { q: "Study the food chain shown. Which statement is NOT correct?", fig: { type: "web", links: [["lalang", "grasshopper"], ["grasshopper", "toad"], ["toad", "snake"]] }, o: ["The grasshopper is a prey.", "The snake is a herbivore.", "The toad is both a predator and a prey.", "The lalang absorbs light energy to make food."], a: 1, why: "The snake eats the toad, an animal, so it is a carnivore, not a herbivore. The other statements are correct: the grasshopper is eaten by the toad, the toad eats and is eaten, and the lalang is the producer.", lvl: 2 },
    { q: "The table shows what four animals at the Singapore Botanic Gardens eat. Which two animals compete for the same food?", tbl: [["Animal", "Food it eats"], ["Caterpillar", "leaves"], ["Bird", "caterpillars, seeds"], ["Squirrel", "seeds, fruits"], ["Snake", "birds, squirrels"]], o: ["caterpillar and bird", "squirrel and snake", "caterpillar and snake", "bird and squirrel"], a: 3, why: "Both the bird and the squirrel eat seeds, so they compete for seeds. The bird eats the caterpillar and the snake eats the squirrel, so those pairs are predators and prey, not competitors.", lvl: 2 },
    { q: "At a hawker centre, Mei eats a bowl of fish soup. The fish had eaten shrimps, and the shrimps had fed on algae. Where did the energy in the fish originally come from?", o: ["the shrimps", "the algae", "the Sun", "the sea water"], a: 2, why: "The algae absorbed light energy from the Sun to make food. The energy was passed to the shrimps and then to the fish. The shrimps and algae only passed the energy along; the Sun is the source.", lvl: 2 },
    { q: "Study the food web shown. A disease kills all the rabbits. Which shows the most likely changes in the grasshopper and snake populations?", fig: { type: "web", links: [["grass", "grasshopper"], ["grass", "rabbit"], ["grasshopper", "frog"], ["rabbit", "snake"]] }, o: ["Grasshoppers increase; snakes decrease.", "Grasshoppers decrease; snakes decrease.", "Grasshoppers increase; snakes increase.", "Grasshoppers decrease; snakes increase."], a: 0, why: "The rabbit is the snake’s only food, so the snakes decrease. The rabbits competed with the grasshoppers for grass, so more grass is left and the grasshoppers increase.", lvl: 2 },
    { q: "Ahmad wants to find out whether the type of leaf affects how fast dead leaves are broken down by decomposers. Which two set-ups should he compare?", fig: { type: "setups", items: [{ label: "A", icon: "beaker", lines: ["20 g mango leaves", "Moist soil", "30 °C"] }, { label: "B", icon: "beaker", lines: ["20 g rambutan leaves", "Dry soil", "30 °C"] }, { label: "C", icon: "beaker", lines: ["20 g rambutan leaves", "Moist soil", "30 °C"] }, { label: "D", icon: "beaker", lines: ["20 g mango leaves", "Moist soil", "20 °C"] }] }, o: ["A and B", "A and C", "B and D", "C and D"], a: 1, why: "A and C differ only in the type of leaf; the mass of leaves, the moist soil and the temperature are the same. A and B also differ in moisture, B and D in moisture and temperature, and C and D in temperature.", lvl: 2 },
    { q: "Which of these statements are correct?\nA: Energy flows from the producer to the consumers in a food chain.\nB: A food chain can start with a herbivore.\nC: Decomposers get their energy from dead plants and animals.", o: ["A only", "B and C only", "A and C only", "A, B and C"], a: 2, why: "A is correct: energy passes from the producer to each consumer. C is correct: decomposers break down dead matter for their food and energy. B is wrong: every food chain starts with a producer.", lvl: 2 },
    { q: "Study the food web shown. P and Q are green plants. Apart from W, which organism is found in the GREATEST number of food chains?", fig: { type: "web", links: [["P", "R"], ["P", "S"], ["Q", "S"], ["Q", "T"], ["R", "U"], ["S", "U"], ["S", "V"], ["T", "V"], ["U", "W"], ["V", "W"]] }, o: ["S", "U", "V", "P"], a: 0, why: "There are 6 chains: P→R→U→W, P→S→U→W, P→S→V→W, Q→S→U→W, Q→S→V→W and Q→T→V→W. S is in 4 of them, while U, V and P are each in only 3.", lvl: 3 },
    { q: "In a park pond, the food chain is water plant → snail → fish → otter. The otters moved away to another pond. Which shows the most likely changes after some time?", fig: { type: "web", links: [["water plant", "snail"], ["snail", "fish"], ["fish", "otter"]] }, o: ["Fish decrease; snails increase; water plants decrease.", "Fish increase; snails increase; water plants decrease.", "Fish increase; snails decrease; water plants decrease.", "Fish increase; snails decrease; water plants increase."], a: 3, why: "Fewer fish are eaten, so the fish increase. More fish eat more snails, so the snails decrease. Fewer snails eat the water plants, so the water plants increase.", lvl: 3 },
    { q: "Snails A and B are two kinds of snails. Both eat only the water plants in a tank, and nothing eats the snails. All of snail A were removed at the end of Week 3. The graph shows the number of snail B. Which best explains the change after Week 3?", fig: { type: "line", title: "Number of snail B in the tank", xl: "Week", yl: "Number of snail B", pts: [["0", 40], ["1", 42], ["2", 41], ["3", 40], ["4", 58], ["5", 76], ["6", 90], ["7", 92]] }, o: ["Snail A had been eating snail B, so fewer B were eaten.", "Snail B no longer shared the water plants, so it had more food.", "Snail B had less food, so it reproduced faster.", "Snail B needed less food after snail A was removed."], a: 1, why: "Snails A and B competed for the same water plants. Without snail A, more plants were left for snail B, so more B survived and reproduced. Snail A did not eat snail B, as both eat only plants.", lvl: 3 },
    { q: "In a garden, caterpillars and aphids eat hibiscus leaves. Ladybirds eat aphids. Birds eat caterpillars and ladybirds. Cats eat birds. A pupil sorted the organisms in the Venn diagram shown. Which organism has been placed in the WRONG part?", fig: { type: "venn", a: "Is a predator", b: "Is a prey", onlyA: ["cat"], both: ["ladybird", "bird", "caterpillar"], onlyB: ["aphid"], neither: ["hibiscus"] }, o: ["cat", "hibiscus", "ladybird", "caterpillar"], a: 3, why: "The caterpillar eats only hibiscus leaves, so it is a prey but not a predator; it belongs with the aphid. The cat is a predator only, the ladybird and bird are both, and the hibiscus is a plant, so it is neither.", lvl: 3 },
    { q: "The diagram shows a food web in a pond at Bishan-Ang Mo Kio Park. A chemical kills all the small fish. Which statements are most likely true?\nA: The water fleas would increase at first.\nB: The herons would die out.\nC: The herons would eat more dragonfly nymphs.", fig: { type: "web", links: [["algae", "water flea"], ["algae", "tadpole"], ["water flea", "small fish"], ["tadpole", "small fish"], ["tadpole", "dragonfly nymph"], ["small fish", "heron"], ["dragonfly nymph", "heron"]] }, o: ["A and C only", "A only", "B and C only", "A, B and C"], a: 0, why: "A is true: the small fish was the water flea’s only predator. C is true: the herons have lost one food, so they eat more dragonfly nymphs. B is false: the herons can still eat dragonfly nymphs.", lvl: 3 },
    { q: "Study the food web shown. P is a green plant. Which new arrow, if added, would make T an omnivore?", fig: { type: "web", links: [["P", "Q"], ["P", "R"], ["Q", "S"], ["R", "S"], ["S", "T"]] }, o: ["Q → T", "T → P", "P → T", "T → Q"], a: 2, why: "P → T means T eats the plant P. T already eats S, an animal, so T would then eat both plants and animals. Q → T would only add another animal food, and T → P and T → Q mean T is eaten, not that it eats.", lvl: 3 },
    { q: "Study the food web shown. J and K are green plants. Which statements are correct?\nA: There are 7 food chains in this food web.\nB: If all of M die out, only 2 food chains are left.\nC: Q is a predator only and eats three kinds of organisms.", fig: { type: "web", links: [["J", "L"], ["J", "M"], ["K", "M"], ["K", "N"], ["L", "O"], ["M", "O"], ["M", "P"], ["N", "P"], ["N", "Q"], ["O", "Q"], ["P", "Q"]] }, o: ["A and B only", "A and C only", "B and C only", "A, B and C"], a: 1, why: "The chains are J→L→O→Q, J→M→O→Q, J→M→P→Q, K→M→O→Q, K→M→P→Q, K→N→P→Q and K→N→Q, so A is true. Without M, 3 chains are left (J→L→O→Q, K→N→P→Q, K→N→Q), so B is false. Q eats N, O and P and nothing eats Q, so C is true.", lvl: 4 },
    { q: "In a field, the food chain is grass → grasshopper → frog → snake. P, Q and R are the grasshopper, the frog and the snake, in some order. A disease struck ONE of these populations in Month 2. Study the table. Which is correct?", tbl: [["Month", "P", "Q", "R"], ["1", "400", "60", "10"], ["2", "150", "60", "10"], ["3", "120", "35", "9"], ["4", "180", "20", "6"]], o: ["Q is the frog; the disease struck the grasshoppers.", "Q is the grasshopper; the disease struck the frogs.", "Q is the snake; the disease struck the frogs.", "Q is the frog; the disease struck the snakes."], a: 0, why: "Only P fell in Month 2, so the disease struck P. Q fell next, so Q eats P, and R fell after Q, so R eats Q. If P were the frog or the snake, its prey would have increased, but neither Q nor R increased. So P is the grasshopper, Q the frog and R the snake.", lvl: 4 },
    { q: "In a forest, P is a green plant. Q and R eat P. S eats Q. T eats Q, R and S. U eats T and R. Nothing eats U. A new animal, V, which eats only S, is brought into the forest, and nothing eats V. How many food chains will there be?", o: ["2", "3", "4", "5"], a: 3, why: "Before V: P→Q→S→T→U, P→Q→T→U, P→R→T→U and P→R→U (4 chains). V adds one new path, P→Q→S→V, and the old chain through S is still there, so there are 5 chains.", lvl: 4 }
  ],
  oe: [
    {
      q: "Study the food web shown.\n(a) Name the organism that competes with the grasshopper for food. [1]\n(b) A disease kills most of the rabbits. Explain why the grasshopper population may increase. [1]\n(c) Explain why the snakes would then eat more frogs. [1]",
      fig: { type: "web", links: [["grass", "grasshopper"], ["grass", "rabbit"], ["grasshopper", "frog"], ["rabbit", "snake"], ["frog", "snake"]] },
      marks: 3,
      kw: [["rabbit"], ["more grass", "more food", "more of the grass", "less competition", "fewer competitor"], ["fewer rabbit", "less rabbit", "less food", "lost"]],
      model: "(a) The rabbit. (b) Fewer rabbits eat the grass, so there is more grass, which means more food for the grasshoppers. (c) The snakes have fewer rabbits to eat, so they have lost some of their food and eat more frogs instead."
    },
    {
      q: "On a chilli farm, the food web is as shown. The farmer sprayed a chemical that killed most of the ladybirds but did not harm the other organisms.\n(a) Predict what would happen to the aphid population at first. Explain your answer. [2]\n(b) Explain why the number of chilli plants may decrease. [1]\n(c) Explain why the caterpillar population may decrease. [1]",
      fig: { type: "web", links: [["chilli plant", "aphid"], ["chilli plant", "caterpillar"], ["aphid", "ladybird"], ["ladybird", "bird"], ["caterpillar", "bird"]] },
      marks: 4,
      x: 1,
      kw: [["increase"], ["fewer aphids are eaten", "fewer aphids eaten", "fewer aphids would be eaten", "fewer ladybird", "less ladybird", "eaten less"], ["more aphid", "aphids eat more", "more of the chilli", "more chilli plants are eaten", "more chilli plants eaten"], ["eat more caterpillar", "more caterpillars are eaten", "more caterpillars eaten", "more caterpillars would be eaten", "feed more on caterpillar"]],
      model: "(a) The aphid population would increase, because there are fewer ladybirds, so fewer aphids are eaten. (b) There are more aphids, so more chilli plants are eaten by the aphids. (c) The birds have fewer ladybirds to eat, so they eat more caterpillars and more caterpillars are eaten."
    },
    {
      q: "Snails X and Y both eat water plants. Jun Wei set up three tanks with the same amount of water plants. He put the snails shown into each tank and counted the snails after 6 weeks. Study the table.\n(a) Explain why there were fewer snail X in tank C than in tank A. [1]\n(b) Name one other variable he must keep the same. [1]\n(c) Predict what would happen to the number of snails in tank C if more water plants were added. Explain your answer. [2]",
      tbl: [["Tank", "Snails put in", "Snail X after 6 weeks", "Snail Y after 6 weeks"], ["A", "20 snail X", "80", "–"], ["B", "20 snail Y", "–", "70"], ["C", "20 snail X + 20 snail Y", "45", "30"]],
      marks: 4,
      kw: [["compete", "competition", "share"], ["size of tank", "size of the tank", "volume of water", "amount of water", "amount of light", "temperature", "type of water", "tank size"], ["increase"], ["more food", "less competition", "more water plant", "more plants to eat"]],
      model: "(a) In tank C, snails X and Y compete for the same limited water plants, so each snail X has less food. (b) The size of the tank (or the volume of water, or the amount of light) must be kept the same. (c) The number of snails would increase, because there is more food and less competition for the water plants."
    },
    {
      q: "In a mangrove swamp at Sungei Buloh, fiddler crabs eat algae on the mud. Mudskippers eat fiddler crabs. Herons eat mudskippers and fiddler crabs.\n(a) Which organism is both a predator and a prey? [1]\n(b) A pupil said the heron is an omnivore. Is she correct? Explain. [1]\n(c) Most of the mudskippers were killed. Explain why the heron population may not decrease much. [1]",
      marks: 3,
      kw: [["mudskipper"], ["carnivore", "only animal", "eats only animal", "eat only animal"], ["other food", "another food", "still eat", "still has", "still have", "fiddler crab", "crabs"]],
      model: "(a) The mudskipper. (b) No. The heron is a carnivore because it eats only animals, the mudskippers and the fiddler crabs. (c) The herons still have the fiddler crabs as another food to eat."
    }
  ],
  tf: [
    { s: "Two different kinds of animals that eat the same food in a habitat compete for that food.", a: true, why: "They both need the same limited food, so they compete for it, e.g. grasshoppers and rabbits that both eat grass." },
    { s: "In the food chain grass → grasshopper → frog → snake, if most of the frogs die, the grass may decrease.", a: true, why: "Fewer grasshoppers are eaten by the frogs, so the grasshoppers increase. More grasshoppers eat more grass, so the grass may decrease." },
    { s: "A plant that is eaten by a caterpillar is the caterpillar’s prey.", a: false, why: "A prey is an animal that is hunted and eaten by another animal. The plant is a producer, and the caterpillar is a herbivore, not a predator." },
    { s: "Fungi make their own food from the dead leaves they grow on.", a: false, why: "Fungi cannot make their own food as they have no chlorophyll. They break down the dead leaves and take in food from them." },
    { s: "The organism at the end of a food chain is not eaten by any other organism in that chain.", a: true, why: "A food chain ends with the organism that nothing else in the chain eats." },
    { s: "If a herbivore’s only predator is removed, the herbivore population will keep increasing for ever.", a: false, why: "It increases at first, but the food in the habitat is limited, so it later stops increasing or may even decrease." },
    { s: "In a food chain, a carnivore can be eaten by another carnivore.", a: true, why: "For example, in grasshopper → frog → snake, the frog eats only animals and is eaten by the snake, which also eats only animals." },
    { s: "Releasing ladybirds to eat aphids on a vegetable farm is an example of using a natural predator to control pests.", a: true, why: "Ladybirds are predators of aphids, so they reduce the number of aphids without the use of pesticides." },
    { s: "An animal can be a herbivore in one food chain and a carnivore in another food chain.", a: false, why: "A herbivore eats only plants. An animal that eats plants in one chain and animals in another eats both, so it is an omnivore." },
    { s: "A food chain that starts with algae in a pond gets its energy from the pond water.", a: false, why: "Algae absorb light energy from the Sun to make food, so the Sun is the source of energy for the chain." }
  ]
};
