window.BANKY = window.BANKY || {};
BANKY["animals"] = {
  lessons: [
    {
      h: "How to read a classification key",
      concept: "A classification key sorts animals using yes/no questions about ONE characteristic at a time. Start at the top box, answer only the question in front of you, and follow the arrow until you reach a letter. Examiners set traps where the animal’s habitat or movement seems to fit a box, e.g. a sea turtle lives in the sea but does not have gills.",
      example: {
        q: "Study the classification key. (a) At which letter will the sea turtle end? (b) Explain why the sea turtle does NOT end at B.",
        fig: { type: "flow", root: "Animals", node: { q: "Has feathers?", yes: "A", no: { q: "Breathes with gills?", yes: "B", no: { q: "Has dry, scaly skin?", yes: "C", no: "D" } } } },
        marks: 2,
        think: [
          "Step 1: Start at the top and answer one question at a time for the sea turtle. It has no feathers, so follow ‘No’.",
          "Step 2: This is the trap box. The sea turtle lives in the sea, but living in water is not the same as having gills. It is a reptile, so it breathes through lungs: follow ‘No’.",
          "Step 3: The sea turtle has dry, scaly skin, so follow ‘Yes’ and it ends at C.",
          "Step 4: For (b), answer using the characteristic the key asks about (gills), not where the turtle lives."
        ],
        answer: "(a) C. (b) B is for animals that breathe through gills. The sea turtle breathes through lungs, not gills, so it follows ‘No’ and does not end at B."
      },
      tip: "Read each box aloud for the animal and answer only that question; never answer with where the animal lives or how it moves.",
      try: {
        q: "Study the key. (A housefly has only one pair of wings.) Which two animals would BOTH end at Q?",
        fig: { type: "flow", root: "Small animals", node: { q: "Has 3 body parts?", yes: { q: "Has 2 pairs of wings?", yes: "P", no: "Q" }, no: { q: "Has 8 legs?", yes: "R", no: "S" } } },
        o: ["Bee and butterfly", "Housefly and worker ant", "Spider and scorpion", "Housefly and spider"],
        a: 1,
        why: "The housefly (one pair of wings) and the worker ant (no wings) both have 3 body parts but do not have 2 pairs of wings, so both reach Q. The bee and butterfly reach P, and the spider and scorpion have 2 body parts and 8 legs, so they reach R."
      }
    },
    {
      h: "Writing a key question that works",
      concept: "A good key question is a yes/no question about a characteristic that sends EVERY animal in that box down a different arrow. Test your question on each animal before you write it. Questions about movement or habitat (‘Can it fly?’, ‘Does it live in water?’) often fail because animals from different groups move and live in the same way.",
      example: {
        q: "Study the key. (a) Suggest a suitable Question X. (b) Explain why ‘Does it feed its young on milk?’ cannot be used as Question X.",
        fig: { type: "flow", root: "Animals", node: { q: "Has fur or hair?", yes: { q: "Question X", yes: "Platypus", no: "Cat" }, no: { q: "Has feathers?", yes: "Penguin", no: "Crocodile" } } },
        marks: 2,
        think: [
          "Step 1: Find the two animals Question X must separate: the platypus and the cat. Both are mammals.",
          "Step 2: Look for a characteristic where they differ. The platypus lays eggs, but the cat gives birth to young alive.",
          "Step 3: Check the direction: ‘Yes’ must lead to the platypus. ‘Does it lay eggs?’ gives Yes for the platypus and No for the cat, so it works.",
          "Step 4: For (b), test the suggested question on both animals. All mammals feed their young on milk, so both would answer ‘Yes’."
        ],
        answer: "(a) Does it lay eggs? (b) Both the platypus and the cat feed their young on milk, so both would follow ‘Yes’ and the question would not separate them."
      },
      tip: "After writing a key question, test it on EVERY animal in that box and check that ‘Yes’ leads to the correct animal.",
      try: {
        q: "Study the key. Which question could be Question Y?",
        fig: { type: "flow", root: "Animals", node: { q: "Question Y", yes: { q: "Has feathers?", yes: "Ostrich", no: "Bat" }, no: { q: "Has gills?", yes: "Shark", no: "Dolphin" } } },
        o: ["Can it fly?", "Does it breathe through lungs?", "Does it have fins?", "Does it have legs?"],
        a: 3,
        why: "The ostrich and the bat have legs, but the shark and the dolphin do not, so ‘Does it have legs?’ sends them the right way. The ostrich cannot fly, the dolphin also breathes through lungs, and ‘Has fins?’ would send the shark and dolphin down the ‘Yes’ arrow to the wrong side."
      }
    },
    {
      h: "Placing animals in a Venn diagram",
      concept: "Each circle stands for one characteristic. Check the animal against each circle SEPARATELY: yes or no for circle 1, then yes or no for circle 2. Two yeses go in the overlap, one yes goes in that circle only, and two noes go outside both circles.",
      example: {
        q: "Study the Venn diagram. (a) Where should the bat be placed? (b) Where should the ostrich be placed? Explain your answer for the ostrich.",
        fig: { type: "venn", a: "Can fly", b: "Feeds young on milk", onlyA: ["eagle", "butterfly"], both: [], onlyB: ["cat", "whale"], neither: ["crocodile"] },
        marks: 2,
        think: [
          "Step 1: Bat, circle 1: it can fly, so yes. Circle 2: it is a mammal and feeds its young on milk, so yes. Two yeses means the overlap.",
          "Step 2: Ostrich, circle 1: it cannot fly, so no. Do not let ‘it is a bird’ trick you into the ‘Can fly’ circle.",
          "Step 3: Ostrich, circle 2: it is a bird, so it does not feed its young on milk. Two noes means outside both circles.",
          "Step 4: In the explanation, give the reason for BOTH circles, not just one."
        ],
        answer: "(a) In the overlap of both circles, because it can fly and it feeds its young on milk. (b) Outside both circles. The ostrich cannot fly, and it is a bird, so it does not feed its young on milk."
      },
      tip: "Always give one reason for each circle; half an explanation only earns half the marks.",
      try: {
        q: "Study the Venn diagram. Which animal belongs in the SAME region as the guppy?",
        fig: { type: "venn", a: "Lays eggs", b: "Has fins", onlyA: ["eagle"], both: ["eel"], onlyB: ["guppy"], neither: ["cat"] },
        o: ["Dolphin", "Crocodile", "Platypus", "Goldfish"],
        a: 0,
        why: "The guppy has fins but gives birth to young alive. The dolphin also has fins and gives birth to young alive. The crocodile and platypus lay eggs but have no fins, and the goldfish has fins AND lays eggs, so it goes in the overlap."
      }
    },
    {
      h: "‘All’ statements: hunt for the exception",
      concept: "When a question says ALL, ONLY or NEVER, one exception is enough to make the statement false. Know the exception animals: platypus and spiny anteater (mammals that lay eggs), guppy (fish that gives birth to young alive), penguin and ostrich (birds that cannot fly), bat (mammal that flies), whale and dolphin (live in water, breathe through lungs), pangolin (mammal with scales), snake (reptile with no legs) and worker ant (insect with no wings).",
      example: {
        q: "Jia Hui says, ‘All animals that live in water breathe through gills.’ (a) Is she correct? (b) Name one animal that supports your answer and state how it breathes.",
        marks: 2,
        think: [
          "Step 1: Spot the word ‘All’. One animal that lives in water but does NOT breathe through gills will prove her wrong.",
          "Step 2: Run through the exception list: the whale, dolphin and sea turtle all live in water.",
          "Step 3: Pick one and state its characteristic clearly: the whale breathes through lungs and comes to the surface to breathe air."
        ],
        answer: "(a) She is not correct. (b) The whale lives in water but it breathes through lungs, not gills. It comes to the surface to breathe air."
      },
      tip: "To disprove an ‘all’ statement, name ONE exception and state the characteristic that breaks the rule.",
      try: {
        q: "Which statement is true?",
        o: ["All mammals give birth to young alive.", "All birds can fly.", "All insects have 3 body parts.", "All animals with scales are reptiles."],
        a: 2,
        why: "Every insect has 3 body parts: head, thorax and abdomen. The platypus is a mammal that lays eggs, the penguin is a bird that cannot fly, and fish and the pangolin also have scales."
      }
    },
    {
      h: "Explaining a classification for full marks",
      concept: "A full-mark answer names the group AND gives the characteristic that proves it. Use a characteristic that only that group has (feathers for birds, fur and milk for mammals, gills and fins for fish), not one shared by many groups such as laying eggs, swimming or living in the sea. For ‘Why is it NOT…?’ questions, compare the animal with the characteristics of that group.",
      example: {
        q: "Study the information about animal K. Sam says, ‘K is a bird because it lays eggs.’ (a) Which group does K belong to? (b) Explain why Sam is wrong.",
        tbl: [["Characteristic", "Animal K"], ["Body covering", "Fur"], ["How it reproduces", "Lays eggs"], ["How it feeds its young", "Milk"], ["How it breathes", "Lungs"]],
        marks: 2,
        think: [
          "Step 1: Cross out characteristics shared by many groups. Laying eggs is found in birds, reptiles, fish, amphibians, insects and even the platypus. Breathing through lungs is also shared.",
          "Step 2: Look for characteristics only one group has. Fur and feeding young on milk belong only to mammals.",
          "Step 3: Answer Sam directly: compare K with a bird. Birds have feathers, but K has fur."
        ],
        answer: "(a) K is a mammal. (b) Laying eggs is not found only in birds. K has fur, not feathers, and it feeds its young on milk, which are characteristics of mammals."
      },
      tip: "Group + deciding characteristic: ‘It is a ___ because it has ___.’ Never use habitat or movement as the reason.",
      try: {
        q: "Which answer would get full marks for the question ‘Explain why a whale is a mammal’?",
        o: ["It lives in the sea and is bigger than most fish.", "It breathes through lungs and feeds its young on milk.", "It is a mammal because it is not a fish or a bird.", "It swims using its strong tail and its two flippers."],
        a: 1,
        why: "Breathing through lungs and feeding young on milk are mammal characteristics. Living in the sea and swimming are shared with fish, and saying it is ‘not a fish’ gives no evidence."
      }
    }
  ],
  expert: [
    { q: "Study the key. The mudskipper is a fish that is often seen out of the water, crawling on the mud at Sungei Buloh. The platypus, penguin, mudskipper and sea snake were placed on the key. Which shows their letters in this order?", o: ["R, P, Q, S", "S, P, Q, S", "R, P, S, Q", "R, Q, Q, S"], a: 0, why: "The platypus lays eggs but feeds its young on milk (R). The penguin has feathers (P). The mudskipper is a fish, so it has gills even when out of water (Q). The sea snake is a reptile that breathes through lungs and does not feed its young on milk (S).", lvl: 4, fig: { type: "flow", root: "Animals", node: { q: "Has feathers?", yes: "P", no: { q: "Breathes with gills?", yes: "Q", no: { q: "Feeds young on milk?", yes: "R", no: "S" } } } } },
    { q: "Study the key. A bee has two pairs of wings, while a mosquito has only one pair. Which question could be Question X?", o: ["Does it have wings on its body?", "Can it fly using its wings?", "Does it have 2 pairs of wings?", "Does it have a pair of feelers?"], a: 2, why: "The bee and the mosquito both have wings, can fly and have feelers, so those questions would send both down the same arrow. Only the number of pairs of wings is different, and ‘Yes’ correctly leads to the bee.", lvl: 4, fig: { type: "flow", root: "Small animals", node: { q: "Has 6 legs?", yes: { q: "Question X", yes: "Bee", no: "Mosquito" }, no: { q: "Has 8 legs?", yes: "Spider", no: "Crab" } } } },
    { q: "Study the Venn diagram. A catfish is a fish with smooth skin and no scales, and it lays eggs. Which animal has been placed WRONGLY?", o: ["Pangolin", "Catfish", "Platypus", "Whale"], a: 1, why: "The catfish has no scales, so it should be in ‘Lays eggs’ only, not in the overlap. The pangolin (scales, young born alive), platypus (lays eggs, no scales) and whale (neither) are all placed correctly.", lvl: 4, fig: { type: "venn", a: "Has scales", b: "Lays eggs", onlyA: ["pangolin"], both: ["crocodile", "catfish"], onlyB: ["platypus", "frog"], neither: ["whale"] } },
    { q: "Study the Venn diagram. Which of these animals could be X?\nA: Frog\nB: Toad\nC: Guppy", o: ["A only", "A and B only", "B and C only", "A, B and C"], a: 1, why: "X must have gills when young AND lungs as an adult. Frogs and toads are amphibians whose tadpoles breathe through gills and whose adults breathe through lungs. The guppy is a fish and breathes through gills all its life, so it belongs with the goldfish.", lvl: 4, fig: { type: "venn", a: "Has gills when young", b: "Has lungs as an adult", onlyA: ["goldfish", "shark"], both: ["X"], onlyB: ["whale", "eagle"], neither: [] } },
    { q: "Kai counted animals at Sungei Buloh and drew the bar graph. His teacher found that he had counted 2 spiders as insects, 1 bat as a bird and 2 mudskippers as reptiles. After correcting his mistakes, which group has the MOST animals?", o: ["Insects", "Birds", "Fish", "Insects and fish have the same number"], a: 2, why: "Insects: 7 - 2 = 5 (spiders are not insects). Birds: 5 - 1 = 4, and mammals: 1 + 1 = 2 (the bat is a mammal). Reptiles: 3 - 2 = 1, and fish: 4 + 2 = 6 (mudskippers are fish). Fish now has the most.", lvl: 4, fig: { type: "bar", title: "Kai’s animal count", xl: "Animal group", yl: "Number of animals", bars: [["Insects", 7], ["Birds", 5], ["Fish", 4], ["Reptiles", 3], ["Mammals", 1]] } },
    { q: "The table shows information about animals A, B, C and D. Which statement MUST be correct?", o: ["A must be a fish because its young breathe through gills.", "C must be a reptile because it has scales and breathes through lungs.", "D cannot be a mammal because it lays eggs.", "B is a fish even though it does not lay eggs."], a: 3, why: "B breathes through gills even as an adult, which only fish do, so it is a fish like the guppy. A’s adult breathes through lungs and skin, so it is an amphibian. C could be a pangolin (a mammal with scales), and D has fur, so it is a mammal like the platypus.", lvl: 4, tbl: [["Animal", "Body covering", "Young breathe through", "Adult breathes through", "Lays eggs?"], ["A", "Moist skin", "Gills", "Lungs and skin", "Yes"], ["B", "Scales", "Gills", "Gills", "No"], ["C", "Scales", "Lungs", "Lungs", "No"], ["D", "Fur", "Lungs", "Lungs", "Yes"]] },
    { q: "Which of these statements are true for ALL of these animals: whale, penguin, crocodile and adult frog?\nA: They breathe through lungs.\nB: They lay eggs.\nC: They can swim.\nD: They have scales.", o: ["A only", "A and C only", "A, B and C only", "A and D only"], a: 1, why: "All four breathe through lungs (the adult frog also uses its skin) and all four can swim. B is false because the whale gives birth to young alive, and D is false because the whale, penguin and frog have no scales. A statement can be true even if it is not used to classify.", lvl: 4 },
    { q: "Study the key. A catfish has no scales. Which pair of animals would end at the SAME letter?", o: ["Catfish and goldfish", "Guppy and whale", "Frog and dolphin", "Platypus and crocodile"], a: 3, why: "The platypus and crocodile have no gills as adults and both lay eggs, so both reach R. The catfish reaches Q but the goldfish reaches P; the guppy reaches P but the whale reaches S; the frog reaches R but the dolphin reaches S.", lvl: 4, fig: { type: "flow", root: "Animals", node: { q: "Has gills as an adult?", yes: { q: "Has scales?", yes: "P", no: "Q" }, no: { q: "Lays eggs?", yes: "R", no: "S" } } } },
    { q: "Study the key. Which question could be Question 1?", o: ["Does it breathe through gills?", "Does it live in the sea?", "Does it have fins on its body?", "Can it swim underwater?"], a: 0, why: "Only the shark breathes through gills; the penguin, turtle and whale breathe through lungs. All four live in water and can swim, and the whale also has fins, so those questions would not separate the shark from the rest.", lvl: 4, fig: { type: "flow", root: "Animals", node: { q: "Question 1", yes: "Shark", no: { q: "Has feathers?", yes: "Penguin", no: { q: "Has dry, scaly skin?", yes: "Turtle", no: "Whale" } } } } },
    { q: "Ravi found a small animal in the school garden and wrote:\nA: It has no wings.\nB: It has 2 body parts.\nC: It has a pair of feelers.\nD: It lives in the soil.\nWhich observation(s), ON THEIR OWN, prove that it is NOT an insect?", o: ["A only", "A and B only", "B only", "B and D only"], a: 2, why: "Every insect has 3 body parts, so 2 body parts proves it is not an insect. Having no wings does not (the worker ant is an insect), feelers are found on insects, and many insects live in the soil.", lvl: 4 },
    { q: "Study the Venn diagram. P, Q and R stand for three animals. Which set of animals fits the diagram correctly?", o: ["P: ostrich, Q: penguin, R: whale", "P: bat, Q: frog, R: dog", "P: eagle, Q: guppy, R: cat", "P: mosquito, Q: platypus, R: dolphin"], a: 3, why: "The mosquito has wings and lays eggs (P), the platypus lays eggs but has no wings (Q), and the dolphin has neither (R). The penguin has wings even though it cannot fly, the bat does not lay eggs, and the guppy gives birth to young alive.", lvl: 4, fig: { type: "venn", a: "Has wings", b: "Lays eggs", onlyA: ["bat"], both: ["P"], onlyB: ["Q"], neither: ["R"] } },
    { q: "Which statement is NOT true?", o: ["Some animals with feathers are not birds.", "Some animals with scales feed their young on milk.", "Some animals that live in water breathe only through lungs.", "Some animals with feathers cannot fly."], a: 0, why: "Only birds have feathers, so every animal with feathers is a bird. The pangolin has scales and feeds its young on milk, the whale lives in water and breathes through lungs, and the penguin has feathers but cannot fly.", lvl: 4 }
  ],
  oex: [
    { q: "Study the key. (a) Name the animal group of every animal that ends at B. (b) The platypus lays eggs. At which letter does it end? Explain. (c) A tadpole ends at C, but the adult frog it grows into ends at D. Explain why.", marks: 4, kw: [["bird"], ["milk"], ["gill"], ["lung", "skin"]], model: "(a) Birds. (b) The platypus ends at A because it feeds its young on milk, even though it lays eggs. (c) The tadpole breathes through gills, so it ends at C. The adult frog breathes through lungs and moist skin, not gills, so it ends at D.", fig: { type: "flow", root: "Animals", node: { q: "Feeds young on milk?", yes: "A", no: { q: "Has feathers?", yes: "B", no: { q: "Breathes with gills?", yes: "C", no: "D" } } } } },
    { q: "Study the Venn diagram. (a) X is a reptile that lives in the sea. Name an animal that could be X. (b) Mei says the dolphin should be moved into ‘Lives in water’ only, next to the goldfish, because both swim with fins. Explain why she is wrong, using how each animal breathes.", marks: 3, kw: [["turtle", "sea snake", "crocodile"], ["lung"], ["gill"]], model: "(a) X could be a sea turtle. (b) Mei is wrong. The dolphin breathes through lungs, so it belongs in the overlap, but the goldfish breathes through gills, so it is in ‘Lives in water’ only.", fig: { type: "venn", a: "Lives in water", b: "Breathes through lungs", onlyA: ["goldfish", "tadpole"], both: ["dolphin", "X"], onlyB: ["eagle", "cat"], neither: [] } },
    { q: "Study the table of small animals P, Q, R and S. (a) Which animals are insects? (b) Ken says P is not an insect because it has no wings. Explain why he is wrong. (c) S has a pair of feelers like an insect. Explain why S is still not an insect.", marks: 3, kw: [["p and r", "r and p"], ["6 legs", "six legs", "3 pairs", "three pairs", "3 body parts", "three body parts"], ["many legs", "more than 6", "more than six", "too many legs", "lots of legs", "many body parts", "more than 3", "more than three"]], model: "(a) P and R. (b) Ken is wrong. P has 6 legs and 3 body parts, which are characteristics of insects. Not all insects have wings. (c) S has many legs, more than 6 legs, and many body parts, so it is not an insect.", tbl: [["Animal", "Number of legs", "Number of body parts", "Feelers", "Wings"], ["P", "6", "3", "1 pair", "None"], ["Q", "8", "2", "None", "None"], ["R", "6", "3", "1 pair", "2 pairs"], ["S", "Many", "Many", "1 pair", "None"]] },
    { q: "Amir found an animal near a pond at Pulau Ubin. His notes say: ‘smooth, slimy skin; four legs; lays eggs in water; its young have gills.’ (a) Which group does the animal belong to? (b) Give two pieces of evidence from his notes to support your answer. (c) His friend says it is a reptile like the gecko. State one difference between the animal’s skin and a gecko’s skin.", marks: 4, kw: [["amphibian"], ["moist", "smooth", "slimy"], ["eggs in water", "gill"], ["dry", "scaly", "scales"]], model: "(a) It is an amphibian. (b) It has moist, smooth skin and it lays its eggs in water. Its young also breathe through gills. (c) The animal has moist, smooth skin, but a gecko has dry, scaly skin." }
  ]
};
