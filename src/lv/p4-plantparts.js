window.LB = window.LB || {};
LB["p4-plantparts"] = {
  notes: [
    { h: "The parts of a plant", t: "A flowering plant has roots, a stem, leaves, flowers and fruits. Each part has its own function, and the parts work together as a system to keep the plant alive. Not all plants have flowers and fruits – ferns and mosses do not.", kw: ["roots", "stem", "leaves", "flowers", "fruits"] },
    { h: "Roots hold the plant firmly", t: "The roots grow into the soil and spread out. They hold the plant firmly in the soil so that it is not easily blown over by the wind or washed away by rain.", kw: ["hold the plant firmly in the soil"] },
    { h: "Roots take in water and mineral salts", t: "The roots take in water and mineral salts from the soil. Roots do NOT take in food – a plant makes its own food in its leaves.", kw: ["take in water and mineral salts from the soil"] },
    { h: "Roots that store food", t: "Some roots store food for the plant. Carrot, sweet potato, radish (lobak) and tapioca are roots that store food. When we eat them, we are eating the plant’s stored food.", kw: ["store food", "carrot", "sweet potato"] },
    { h: "Aerial roots and prop roots", t: "Not all roots grow under the ground. Aerial roots grow in the air: orchids on tree branches take in water from the moist air with them, and the money plant uses them to cling to a support. Prop roots, like those of mangrove trees at Sungei Buloh and of the maize plant, grow from the stem down into the ground to give extra support and hold the plant firmly.", kw: ["aerial roots", "prop roots", "extra support"] },
    { h: "The stem holds the plant upright", t: "The stem holds the plant upright. It holds the leaves up so that they can get light, and it holds up the flowers and fruits.", kw: ["holds the plant upright"] },
    { h: "The stem carries water and food", t: "The stem carries water and mineral salts from the roots to the other parts of the plant. It also carries food made in the leaves to the other parts of the plant, such as the roots, flowers and fruits.", kw: ["carries water", "carries food"] },
    { h: "Stems that store food", t: "Some stems store food. The potato is a stem even though it grows under the ground; ginger is also an underground stem, and sugar cane stores sugar in its tall stem. Growing underground does not make a part a root.", kw: ["potato is a stem", "ginger", "sugar cane"] },
    { h: "Weak stems: climbers and creepers", t: "Some plants have weak stems that cannot hold them upright. Climbers such as the money plant, morning glory, long bean and bitter gourd climb up a support by twining around it, using tendrils or using clinging roots, so that their leaves reach more sunlight. Creepers such as the sweet potato plant and the pumpkin plant grow along the ground.", kw: ["weak stem", "climb", "creep", "more sunlight"] },
    { h: "Leaves make food", t: "The leaves make food for the plant. Leaves need light to make food, which is why plants kept in the dark for a long time become weak and die. The food is then carried by the stem to other parts of the plant.", kw: ["make food", "light"] },
    { h: "Flowers develop into fruits", t: "The flowers of a plant develop into fruits. If all the flowers of a plant are removed, the plant cannot form fruits or seeds.", kw: ["develop into fruits"] },
    { h: "Fruits contain and protect seeds", t: "A fruit develops from a flower and contains seeds. The fruit protects the seeds, which can grow into new plants. In science, tomato, chilli, cucumber, lady’s finger and brinjal are all fruits because they develop from flowers and contain seeds – whether they are sweet does not matter.", kw: ["contains seeds", "protects the seeds"] }
  ],
  traps: [
    "‘A potato is a root because it grows underground.’ → A potato is a STEM that stores food. Growing underground does not make a part a root.",
    "‘Carrots and sweet potatoes are stems.’ → Carrot and sweet potato are ROOTS that store food.",
    "‘Roots take in food from the soil.’ → Roots take in WATER and MINERAL SALTS. The plant makes its own food in its leaves.",
    "‘Roots hold the plant.’ → Too vague for full marks. Write: roots hold the plant FIRMLY IN THE SOIL.",
    "‘The stem carries only water.’ → The stem carries water (and mineral salts) from the roots AND food from the leaves to other parts of the plant.",
    "‘Climbers have strong stems.’ → Climbers and creepers have WEAK stems. Climbers climb a support to reach more sunlight.",
    "‘Tomatoes, chillies and cucumbers are vegetables, not fruits.’ → They develop from flowers and contain seeds, so they are fruits.",
    "‘All roots grow under the ground.’ → Aerial roots grow in the air and prop roots grow from the stem above the ground down into the soil."
  ],
  lessons: [
    {
      h: "Naming a part and stating its function in full",
      concept: "Many marks are lost because the part is named correctly but its function is written too vaguely. Learn each function as a complete phrase: roots hold the plant firmly in the soil and take in water and mineral salts from the soil; the stem holds the plant upright and carries water and food to other parts of the plant; leaves make food for the plant; flowers develop into fruits; fruits contain and protect the seeds.",
      example: {
        q: "The diagram shows a plant. Name parts A, B and C and state one function of each part.",
        fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C" } },
        marks: 3,
        think: [
          "Step 1: Find each letter on the diagram. A is in the soil, B joins the roots to the leaves, C is attached to B.",
          "Step 2: Name them: A roots, B stem, C leaf.",
          "Step 3: For each part, write the FULL function phrase, not a single word like ‘hold’ or ‘water’.",
          "Step 4: Check that you did not give a function that belongs to another part (e.g. ‘roots take in food’ is wrong)."
        ],
        answer: "A is the roots: they hold the plant firmly in the soil (or: take in water and mineral salts from the soil). B is the stem: it holds the plant upright (or: carries water and food to other parts of the plant). C is a leaf: it makes food for the plant."
      },
      tip: "Say the function aloud as a full sentence with its ‘where’: firmly IN THE SOIL, FROM the soil, TO other parts of the plant.",
      try: {
        q: "The diagram shows a plant. Which is the best description of the function of part P?",
        fig: { type: "plant", mark: { roots: "P" } },
        o: ["It holds the plant firmly in the soil and makes food for the plant.", "It holds the plant firmly in the soil and takes in water and mineral salts.", "It takes in food, water and mineral salts from the soil for the plant.", "It makes food for the plant and carries water up to the leaves."],
        a: 1,
        why: "P is the roots. They hold the plant firmly in the soil and take in water and mineral salts. Roots do not make food or take in food (the leaves make food), and it is the stem that carries water up to the leaves."
      }
    },
    {
      h: "Root or stem? Parts that store food",
      concept: "Many plant parts that we eat store food, and exam questions test whether you know which part each one is. Do NOT decide by where it grows. Learn them: carrot, sweet potato, radish and tapioca are ROOTS that store food; potato, ginger and sugar cane are STEMS that store food.",
      example: {
        q: "Kumar says, ‘The potato and the sweet potato are the same part of the plant because both grow underground and store food.’ Do you agree? Explain.",
        marks: 2,
        think: [
          "Step 1: Recall what part each one is: potato = stem, sweet potato = root.",
          "Step 2: So they are NOT the same part. Kumar is wrong.",
          "Step 3: Point out his mistake: growing underground and storing food do not show which part it is."
        ],
        answer: "No. The potato is a stem, but the sweet potato is a root. Both store food and grow underground, but that does not make them the same part of the plant."
      },
      tip: "Memory hook: ‘Potato, ginger, sugar cane – stem, stem, stem.’",
      try: {
        q: "Which group contains ONLY stems that store food?",
        o: ["Potato, ginger, sugar cane", "Potato, carrot, ginger", "Sweet potato, radish, sugar cane", "Carrot, tapioca, radish"],
        a: 0,
        why: "Potato, ginger and sugar cane are all stems. Carrot, sweet potato, radish and tapioca are roots, so every other group contains at least one root."
      }
    },
    {
      h: "Coloured-water experiment: the stem carries water",
      concept: "If the cut end of a stalk (such as celery) is placed in coloured water, the colour soon appears in the stalk and the leaves above the water. This shows that the stem carries water from the bottom of the plant up to the other parts. A second stalk in plain water is used for comparison, to show that the colour comes from the coloured water.",
      example: {
        q: "Mei set up A and B as shown. After one day, the leaves of the celery in A had red streaks, but the leaves in B did not. (a) Explain why the leaves in A turned red. (b) What does this show about the stem?",
        fig: { type: "setups", items: [{ label: "A", icon: "beaker", lines: ["Celery stalk", "Red-coloured water", "Left for 1 day"] }, { label: "B", icon: "beaker", lines: ["Celery stalk", "Plain water", "Left for 1 day"] }] },
        marks: 2,
        think: [
          "Step 1: Observation: only A (red water) has red leaves.",
          "Step 2: The red colour must have travelled with the water from the beaker, through the stalk, to the leaves.",
          "Step 3: Link to the function: the stem carries water to other parts of the plant."
        ],
        answer: "(a) The red water was carried up the stalk from the beaker to the leaves. (b) The stem carries water to other parts of the plant, such as the leaves."
      },
      tip: "Always name BOTH where the water starts and where it goes: ‘carried up the stem FROM the beaker TO the leaves’.",
      try: {
        q: "In Mei’s experiment above, why did she also set up B with plain water?",
        o: ["To give the celery extra water so that it stays fresh", "To make the experiment faster so results are seen sooner", "To compare with A, to show the red colour came from the red water", "To test whether the leaves of celery can make food"],
        a: 2,
        why: "B is for comparison. Its leaves stay green, so the red colour in A must have come from the red water carried up the stalk."
      }
    },
    {
      h: "Predicting what happens when a part is removed",
      concept: "Use a three-link chain: PART → its FUNCTION → what happens without it. No roots → cannot take in water (or be held firmly) → the plant wilts and dies. No leaves → no food is made → the plant becomes weak and dies. No flowers → no fruits and no seeds form. Examiners want the middle link, the function, not just ‘it has no roots’.",
      example: {
        q: "Two similar potted plants, A and B, were placed in sunlight and watered every day. All the leaves of A were removed. Predict what will happen to plant A after a few weeks. Explain your answer.",
        fig: { type: "setups", items: [{ label: "A", icon: "pot", lines: ["All leaves removed", "Sunlight", "Watered daily"] }, { label: "B", icon: "pot", lines: ["Leaves kept", "Sunlight", "Watered daily"] }] },
        marks: 2,
        think: [
          "Step 1: Part removed: leaves.",
          "Step 2: Function of leaves: they make food for the plant.",
          "Step 3: Without leaves, A cannot make food, so it will become weak and die."
        ],
        answer: "Plant A will die. Leaves make food for the plant. Without leaves, plant A cannot make food, so it will become weak and die."
      },
      tip: "Never stop at ‘It will die because it has no leaves.’ Add the function: ‘leaves make food’.",
      try: {
        q: "Mdm Lim picked off every flower on her chilli plant as soon as it opened. What is most likely to happen?",
        o: ["The leaves will stop making food.", "The roots will stop taking in water.", "The stem will become too weak to hold the plant upright.", "No chillies will form on the plant."],
        a: 3,
        why: "Flowers develop into fruits, and chillies are fruits. With all the flowers removed, no chillies can form. The leaves, roots and stem can still do their jobs."
      }
    },
    {
      h: "Is it a fruit? The flower-and-seed test",
      concept: "In science, a fruit is the part that develops from a flower and contains seeds. Taste and how we cook it do not matter. Tomato, chilli, cucumber, lady’s finger, brinjal and durian are fruits. Carrot (root), potato (stem) and ginger (stem) are not fruits – they have no seeds inside.",
      example: {
        q: "Jun Wei says, ‘A cucumber is a vegetable, not a fruit, because it is not sweet.’ Explain why he is wrong.",
        marks: 2,
        think: [
          "Step 1: Taste does not decide whether a part is a fruit.",
          "Step 2: Apply the test: a cucumber develops from a flower of the cucumber plant.",
          "Step 3: It contains seeds. So it is a fruit."
        ],
        answer: "A cucumber is a fruit because it develops from a flower and contains seeds. Whether it is sweet or not does not matter."
      },
      tip: "Two words win the marks: ‘flower’ and ‘seeds’.",
      try: {
        q: "Which of these is a fruit?",
        o: ["Carrot", "Lady’s finger", "Ginger", "Potato"],
        a: 1,
        why: "Lady’s finger develops from a flower and contains seeds. Carrot is a root, and ginger and potato are stems."
      }
    }
  ],
  mcq: [
    { q: "The diagram shows a plant. Which part holds the plant firmly in the soil?", o: ["A", "B", "C", "D"], a: 0, why: "A is the roots, which hold the plant firmly in the soil. B is the stem, C is a leaf and D is a flower.", lvl: 1, fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C", flower: "D" } } },
    { q: "Which part of a plant takes in water and mineral salts from the soil?", o: ["Leaf", "Stem", "Root", "Flower"], a: 2, why: "The roots take in water and mineral salts from the soil. The stem then carries the water to other parts.", lvl: 1 },
    { q: "What is the main function of the leaves of a plant?", o: ["To hold the plant upright", "To make food for the plant", "To take in water from the soil", "To protect the seeds"], a: 1, why: "Leaves make food for the plant. The stem holds the plant upright, roots take in water and fruits protect the seeds.", lvl: 1 },
    { q: "Which part of a plant develops into a fruit?", o: ["Leaf", "Root", "Stem", "Flower"], a: 3, why: "Flowers develop into fruits.", lvl: 1 },
    { q: "The diagram shows a plant. Which is a function of part X?", o: ["It carries water and food to other parts of the plant.", "It develops into a fruit after the plant flowers.", "It takes in mineral salts and water from the soil.", "It protects the seeds until they are ready to grow."], a: 0, why: "X is the stem. It carries water and food to other parts of the plant. Taking in mineral salts is done by the roots.", lvl: 1, fig: { type: "plant", mark: { stem: "X" } } },
    { q: "What does a fruit do for the seeds inside it?", o: ["It makes food for the seeds.", "It protects the seeds.", "It takes in water for the seeds from the soil.", "It holds the seeds firmly in the soil."], a: 1, why: "A fruit contains and protects the seeds.", lvl: 1 },
    { q: "Which of these do leaves need in order to make food?", o: ["Soil", "Seeds", "Darkness", "Light"], a: 3, why: "Leaves need light to make food. A plant kept in the dark for a long time cannot make food and becomes weak.", lvl: 1 },
    { q: "When we eat a carrot, which part of the carrot plant are we eating?", o: ["Stem", "Leaf", "Root", "Fruit"], a: 2, why: "The carrot is a root that stores food. It has no seeds, so it is not a fruit.", lvl: 1 },

    { q: "The diagram shows a plant. Which part protects the seeds?", o: ["P", "Q", "R", "S"], a: 1, why: "Q is the fruit, which contains and protects the seeds. P is a leaf, R is the roots and S is the stem.", lvl: 2, fig: { type: "plant", mark: { leaf: "P", fruit: "Q", roots: "R", stem: "S" } } },
    { q: "Which of these is a stem that stores food?", o: ["Sweet potato", "Carrot", "Radish", "Potato"], a: 3, why: "The potato is a stem that stores food. Sweet potato, carrot and radish are roots that store food.", lvl: 2 },
    { q: "Siti says that the chilli, the cucumber and the lady’s finger are all fruits. Which reason supports what she says?", o: ["They are usually cooked before eating.", "They grow above the ground.", "They contain seeds.", "They are green when young."], a: 2, why: "A fruit develops from a flower and contains seeds. The other reasons are true of many parts that are not fruits, such as leaves.", lvl: 2 },
    { q: "A money plant is grown next to a wooden pole and climbs up it. Why does the money plant need the pole?", o: ["It has no roots, so it must hold on to the pole.", "Its leaves cannot make food, so it feeds on the pole.", "It has a weak stem and needs support to grow upwards.", "It takes in water from the pole through its stem."], a: 2, why: "The money plant has a weak stem that cannot hold it upright, so it climbs a support. It does have roots and its leaves do make food.", lvl: 2 },
    { q: "Pumpkin plants grow along the ground instead of standing upright. This is because pumpkin plants ______.", o: ["have weak stems", "do not need light", "have no leaves", "have no roots"], a: 0, why: "The pumpkin plant is a creeper: its stem is too weak to hold it upright, so it grows along the ground.", lvl: 2 },
    { q: "Two celery stalks were set up as shown. After one day, red streaks were seen in the leaves of A but not in the leaves of B. What does this show?", o: ["Leaves make food for the plant using sunlight.", "The stem carries water to other parts of the plant.", "Roots hold the plant firmly in place in the soil.", "Flowers develop into fruits that contain seeds."], a: 1, why: "The red water was carried up the stalk (stem) to the leaves, showing that the stem carries water.", lvl: 2, fig: { type: "setups", items: [{ label: "A", icon: "beaker", lines: ["Celery stalk", "Red-coloured water", "Left for 1 day"] }, { label: "B", icon: "beaker", lines: ["Celery stalk", "Plain water", "Left for 1 day"] }] } },
    { q: "The mangrove trees at Sungei Buloh have prop roots that grow from the stem down into the soft mud. What is the main function of these prop roots?", o: ["To make food for the whole tree", "To protect the seeds in the mud", "To take in food from the soft mud", "To hold the tree firmly in the soft mud"], a: 3, why: "Prop roots give extra support and hold the tree firmly in the soft mud. Roots never take in food, and leaves make the food.", lvl: 2 },
    { q: "Which pair are BOTH roots that store food?", o: ["Carrot and sweet potato", "Carrot and potato", "Sweet potato and ginger", "Potato and ginger"], a: 0, why: "Carrot and sweet potato are roots. Potato and ginger are stems.", lvl: 2 },
    { q: "The diagram shows a plant. What will part W develop into?", o: ["A leaf", "A root", "A stem", "A fruit"], a: 3, why: "W is a flower. Flowers develop into fruits.", lvl: 2, fig: { type: "plant", mark: { flower: "W" } } },
    { q: "Study the Venn diagram. In which region should ‘tapioca’ be placed?", o: ["Only in the ‘Stores food’ circle", "In the overlap of both circles", "Only in the ‘Is a root’ circle", "Outside both circles"], a: 1, why: "Tapioca is a root and it stores food, so it belongs in the overlap, together with carrot and sweet potato.", lvl: 2, fig: { type: "venn", a: "Stores food", b: "Is a root", onlyA: ["potato", "ginger"], both: ["carrot", "sweet potato"], onlyB: ["prop root"], neither: ["leaf"] } },
    { q: "Study the classification chart of some plant parts. Where would a potato be placed?", o: ["A", "B", "C", "D"], a: 1, why: "A potato stores food, so it goes down the ‘yes’ path. It is a stem, not a root, so it is B.", lvl: 2, fig: { type: "flow", root: "Plant parts", node: { q: "Stores food?", yes: { q: "Is a root?", yes: "A", no: "B" }, no: { q: "Holds plant upright?", yes: "C", no: "D" } } } },
    { q: "The diagram shows a plant. Which is NOT a function of part Y?", o: ["It holds the plant upright.", "It carries water from the roots to the leaves.", "It takes in water from the soil.", "It carries food from the leaves to other parts of the plant."], a: 2, why: "Y is the stem. Taking in water from the soil is done by the roots, not the stem.", lvl: 2, fig: { type: "plant", mark: { stem: "Y" } } },
    { q: "Which of these is a fruit?", o: ["Carrot", "Ginger", "Potato", "Durian"], a: 3, why: "The durian develops from a flower and contains seeds. Carrot is a root, and ginger and potato are stems.", lvl: 2 },
    { q: "Some orchids grow on tree branches. Their roots hang in the air and take in water from the moist air. What are these roots called?", o: ["Aerial roots", "Prop roots", "Storage roots", "Creeping stems"], a: 0, why: "Roots that grow in the air are aerial roots. Prop roots grow from the stem down into the ground to give support.", lvl: 2 },

    { q: "The diagram shows a plant. Which of these statements are correct?\n1. A takes in water and mineral salts from the soil.\n2. B carries food made in C to A.\n3. C makes food for the plant.", o: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], a: 3, why: "All three are correct: the roots (A) take in water and mineral salts, the stem (B) carries food from the leaves (C) to other parts, including the roots, and the leaves make food.", lvl: 3, fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C" } } },
    { q: "Mr Tan pulled out some young plants, cut off all their roots and put them back into moist soil. The next day, the plants had wilted. Which is the best explanation?", o: ["They could not make food.", "Their stems could not hold them upright.", "They could not take in water from the soil.", "They had no flowers."], a: 2, why: "Without roots, the plants could not take in water from the soil, so they wilted within a day. Their leaves and stems were still there.", lvl: 3 },
    { q: "A celery stalk was placed in red-coloured water. The graph shows how far up the stalk the red colour had reached. The stalk is 12 cm long. If the pattern continues, after how many hours will the red colour first reach the top of the stalk?", o: ["4 h", "6 h", "8 h", "12 h"], a: 1, why: "The red colour rises 2 cm every hour (4 cm at 2 h, 8 cm at 4 h). To reach 12 cm it needs 12 ÷ 2 = 6 hours.", lvl: 3, fig: { type: "line", xl: "Time (h)", yl: "Height of red colour (cm)", pts: [["0", 0], ["1", 2], ["2", 4], ["3", 6], ["4", 8]] } },
    { q: "Which of these plants store food in their STEMS?\nP: potato   Q: carrot   R: ginger   S: sugar cane", o: ["P and Q only", "Q and S only", "P, R and S only", "P, Q, R and S"], a: 2, why: "Potato, ginger and sugar cane are stems that store food. The carrot is a root.", lvl: 3 },
    { q: "The table shows the parts of plant X. Plant X never produces flowers. Which plant could X be?", o: ["Hibiscus", "Chilli plant", "Balsam", "Fern"], a: 3, why: "A fern has roots, a stem and leaves but never produces flowers. Hibiscus, chilli and balsam are all flowering plants.", lvl: 3, tbl: [["Part", "Present?"], ["Roots", "Yes"], ["Stem", "Yes"], ["Leaves", "Yes"], ["Flowers", "No"]] },
    { q: "A bitter gourd plant uses tendrils to climb up a trellis. How does climbing help the plant?", o: ["Its leaves can reach more sunlight to make food.", "Its roots can take in more mineral salts.", "It no longer needs roots.", "It can form fruits without flowers."], a: 0, why: "By climbing, the leaves are raised up to reach more sunlight, so they can make food. Climbing does not change the jobs of the roots or flowers.", lvl: 3 },
    { q: "The diagram shows a plant with parts F and G. Which statement is correct?", o: ["G develops into F.", "F makes food for the plant.", "F develops into G.", "G protects the seeds."], a: 0, why: "G is a flower and F is a fruit. Flowers develop into fruits, so G develops into F. It is the fruit (F), not the flower, that protects the seeds, and leaves make food.", lvl: 3, fig: { type: "plant", mark: { fruit: "F", flower: "G" } } },
    { q: "Two similar potted plants were set up as shown. After three weeks, plant A had died but plant B was healthy. Which conclusion can be drawn from this experiment?", o: ["Roots need light to take in water.", "Plants need soil to grow.", "Stems carry food to the roots.", "Leaves make food for the plant."], a: 3, why: "The only difference was the leaves. Plant A could not make food without leaves, so it died. The experiment did not test roots, soil or how food moves.", lvl: 3, fig: { type: "setups", items: [{ label: "A", icon: "pot", lines: ["All leaves removed", "Sunlight", "Watered daily"] }, { label: "B", icon: "pot", lines: ["Leaves kept", "Sunlight", "Watered daily"] }] } },
    { q: "Hana wants to find out whether the LENGTH of a celery stalk affects how long red water takes to reach the leaves. Which two set-ups should she compare?", o: ["A and D", "B and C", "A and B", "C and D"], a: 2, why: "A and B differ only in length; both use red water at 25 °C. C uses plain water and D is at a different temperature, so they are not fair comparisons with A or B.", lvl: 3, fig: { type: "setups", items: [{ label: "A", icon: "beaker", lines: ["10 cm stalk", "Red water", "25 °C"] }, { label: "B", icon: "beaker", lines: ["20 cm stalk", "Red water", "25 °C"] }, { label: "C", icon: "beaker", lines: ["20 cm stalk", "Plain water", "25 °C"] }, { label: "D", icon: "beaker", lines: ["10 cm stalk", "Red water", "30 °C"] }] } },
    { q: "The sweet potato plant grows along the ground. Which statements about the sweet potato plant are correct?\n1. It has a weak stem.\n2. The sweet potato that we eat is a stem.\n3. The sweet potato that we eat stores food.", o: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], a: 1, why: "It is a creeper, so its stem is weak (1). The sweet potato we eat is a root, not a stem (2 is wrong), and it stores food (3).", lvl: 3 },
    { q: "The diagram shows a plant. Which correctly shows the path that water takes from the soil to part C?", o: ["Soil → B → A → C", "Soil → A → B → C", "Soil → C → B → A", "Soil → A → C → B"], a: 1, why: "The roots (A) take in water from the soil, the stem (B) carries it up, and it reaches the leaf (C).", lvl: 3, fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C" } } },
    { q: "Sugar cane stores a lot of sugar in its stem. Where did this sugar most likely come from?", o: ["It was taken in from the soil by the roots.", "It was taken in from the air by the stem.", "It was made in the leaves and carried to the stem.", "It was made by the flowers."], a: 2, why: "Leaves make food for the plant, and the stem carries this food to other parts, where it can be stored. Roots take in water and mineral salts, not food.", lvl: 3 },

    { q: "A farmer removed all the leaves of some sweet potato plants but kept watering them. After some weeks, their sweet potatoes were much smaller than those of plants that kept their leaves. Which is the best explanation?", o: ["No leaves meant no food was made to be carried down the stem and stored in the roots.", "Without leaves, the roots could no longer take in the water needed for growth.", "Without leaves, the stem could no longer hold the plant up, so it stopped growing.", "Without leaves, the plant could not flower, so the sweet potatoes could not grow."], a: 0, why: "Sweet potatoes are roots that store food made in the leaves. With no leaves, no food was made to be carried down the stem and stored. The roots could still take in water, and sweet potatoes do not develop from flowers.", lvl: 4 },
    { q: "Potato plants were grown with different numbers of hours of light each day. All other conditions were kept the same. Study the graph. Which statements explain the results?\n1. The plants took in more food from the soil when they got more light.\n2. The leaves made more food when they got more light.\n3. Food made in the leaves was carried by the stem to the potatoes and stored there.", o: ["2 and 3 only", "1 and 2 only", "1 and 3 only", "1, 2 and 3"], a: 0, why: "More light let the leaves make more food (2), which was carried to and stored in the potatoes (3), so the harvest was heavier. Plants do not take in food from the soil, so 1 is wrong.", lvl: 4, fig: { type: "bar", xl: "Hours of light per day", yl: "Mass of potatoes harvested (g)", bars: [["4 h", 200], ["8 h", 450], ["12 h", 700]] } },
    { q: "Study the classification chart of plant parts P, Q, R and S. Which of these could P, Q and R be?", o: ["P: tomato, Q: potato, R: carrot", "P: potato, Q: tomato, R: carrot", "P: tomato, Q: carrot, R: potato", "P: carrot, Q: potato, R: tomato"], a: 0, why: "P contains seeds, so it is a fruit: tomato. Q and R have no seeds and store food; Q is a stem (potato) and R is not a stem (carrot, a root).", lvl: 4, fig: { type: "flow", root: "Plant parts", node: { q: "Contains seeds?", yes: "P", no: { q: "Stores food?", yes: { q: "Is a stem?", yes: "Q", no: "R" }, no: "S" } } } },
    { q: "The diagram shows a carrot plant. Food is made in one part and stored in another. Which shows the path the food takes?", o: ["A → B → C", "B → C → A", "C → A → B", "C → B → A"], a: 3, why: "Food is made in the leaves (C), carried by the stem (B), and stored in the root (A), which is the carrot.", lvl: 4, fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C" } } },
    { q: "Plant Z has a weak stem and grows on the dark floor of a forest under tall trees. Which feature would BEST help Z’s leaves to make more food?", o: ["Thick roots that store food", "A stem that creeps along the forest floor", "Tendrils to climb up the trees towards the light", "More flowers"], a: 2, why: "Leaves need light to make food. Climbing with tendrils lifts the leaves up towards the light. Creeping keeps them in the dark, and storage roots or flowers do not help the leaves get light.", lvl: 4 },
    { q: "Every flower on a healthy chilli plant was removed as soon as it appeared. Which statements are most likely to be correct?\n1. No chillies will form on the plant.\n2. No new chilli seeds will form on the plant.\n3. The leaves will no longer be able to make food.", o: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"], a: 1, why: "Flowers develop into fruits, and the fruits contain the seeds, so with no flowers there are no chillies and no seeds (1 and 2). The leaves are still there, so they can still make food (3 is wrong).", lvl: 4 }
  ],
  tf: [
    { s: "Roots hold the plant firmly in the soil.", a: true, why: "This is one of the two main functions of roots." },
    { s: "A potato is a root because it grows underground.", a: false, why: "A potato is a stem that stores food. Growing underground does not make a part a root." },
    { s: "Roots take in food from the soil.", a: false, why: "Roots take in water and mineral salts. The plant makes its own food in its leaves." },
    { s: "The stem carries water from the roots to other parts of the plant.", a: true, why: "The stem carries water (and mineral salts) from the roots to the leaves, flowers and fruits." },
    { s: "Only the roots of a plant can store food.", a: false, why: "Some stems store food too, such as the potato, ginger and sugar cane." },
    { s: "A tomato is a fruit because it develops from a flower and contains seeds.", a: true, why: "That is what makes a plant part a fruit." },
    { s: "All plants have flowers.", a: false, why: "Ferns and mosses do not have flowers." },
    { s: "Leaves need light to make food.", a: true, why: "Without light, leaves cannot make food, and the plant becomes weak." },
    { s: "Climbers have strong stems.", a: false, why: "Climbers have weak stems, so they climb up a support to reach more sunlight." },
    { s: "The stem carries food made in the leaves to other parts of the plant.", a: true, why: "The stem carries food from the leaves to parts such as the roots, flowers and fruits." },
    { s: "All roots grow under the ground.", a: false, why: "Aerial roots grow in the air, and prop roots grow from the stem above the ground down into the soil." },
    { s: "A carrot is a root that stores food.", a: true, why: "The carrot is a storage root." },
    { s: "A cucumber is not a fruit because it is not sweet.", a: false, why: "A cucumber develops from a flower and contains seeds, so it is a fruit. Taste does not matter." },
    { s: "Prop roots help to hold a plant firmly in the ground.", a: true, why: "Prop roots grow from the stem into the ground and give the plant extra support." },
    { s: "Sugar cane stores food in its roots.", a: false, why: "Sugar cane stores sugar in its stem." },
    { s: "Ginger is a stem that stores food.", a: true, why: "Ginger is an underground stem that stores food." },
    { s: "A money plant climbs up a pole because its roots are weak.", a: false, why: "It climbs because its STEM is weak and cannot hold it upright." },
    { s: "A creeper is a plant with a weak stem that grows along the ground.", a: true, why: "Examples are the sweet potato plant and the pumpkin plant." },
    { s: "A plant whose roots have all been cut off can still take in water from the soil.", a: false, why: "Roots take in water from the soil. Without roots, the plant cannot take in water from the soil and wilts." },
    { s: "Fruits protect the seeds inside them.", a: true, why: "A fruit contains the seeds and protects them." }
  ],
  sort: [
    { title: "Sort these parts that we eat into roots, stems and fruits", groups: ["Root", "Stem", "Fruit"], items: [["carrot", 0], ["sweet potato", 0], ["radish", 0], ["tapioca", 0], ["potato", 1], ["ginger", 1], ["sugar cane", 1], ["tomato", 2], ["chilli", 2], ["cucumber", 2]] },
    { title: "Match each function to the plant part that carries it out", groups: ["Roots", "Stem", "Leaves", "Fruits"], items: [["holds the plant firmly in the soil", 0], ["takes in water and mineral salts", 0], ["holds the plant upright", 1], ["carries water and food to other parts", 1], ["makes food for the plant", 2], ["needs light to do its job", 2], ["contains the seeds", 3], ["protects the seeds", 3]] },
    { title: "Sort these plants by the way they grow", groups: ["Weak stem – climbs", "Weak stem – creeps", "Strong stem – stands upright"], items: [["money plant", 0], ["morning glory", 0], ["long bean", 0], ["bitter gourd", 0], ["sweet potato plant", 1], ["pumpkin plant", 1], ["mango tree", 2], ["rain tree", 2], ["hibiscus", 2]] }
  ],
  oe: [
    { q: "The diagram shows a plant. (a) Name part A. (b) State TWO functions of part A.", marks: 3, kw: [["root"], ["firm", "anchor"], ["mineral salt", "take in water", "takes in water", "absorb"]], model: "(a) Roots. (b) Part A holds the plant firmly in the soil. It also takes in water and mineral salts from the soil.", fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C" } } },
    { q: "The diagram shows a plant. (a) Name part X. (b) State TWO functions of part X. (c) In a money plant, part X is weak and cannot hold the plant upright. Explain how the plant still manages to grow upwards.", marks: 4, kw: [["stem"], ["upright"], ["carr", "transport"], ["climb", "cling", "twin", "coil", "wrap"]], model: "(a) Stem. (b) The stem holds the plant upright, and it carries water and food to other parts of the plant. (c) The money plant climbs up the pole, using it as a support, by clinging to it with its roots.", fig: { type: "plant", mark: { stem: "X" } } },
    { q: "Mei set up A and B as shown. (a) After one day, what would she observe in the leaves of the celery in A? (b) What does this show about the function of the stem?", marks: 2, kw: [["red"], ["carr", "transport", "travel", "moves water", "brings water"]], model: "(a) The leaves would have red streaks / turn red. (b) The stem carries water from the bottom of the stalk up to other parts of the plant, such as the leaves.", fig: { type: "setups", items: [{ label: "A", icon: "beaker", lines: ["Celery stalk", "Red-coloured water", "Left for 1 day"] }, { label: "B", icon: "beaker", lines: ["Celery stalk", "Plain water", "Left for 1 day"] }] } },
    { q: "At the market, Wei Ling bought potatoes and sweet potatoes. (a) Which part of the plant is the potato? (b) Which part of the plant is the sweet potato? (c) State one function that both the potato and the sweet potato carry out for their plants.", marks: 3, kw: [["stem"], ["root"], ["store food", "stores food", "storing food", "store the food"]], model: "(a) The potato is a stem. (b) The sweet potato is a root. (c) Both store food for the plant." },
    { q: "Ravi set up two similar potted plants, A and B, as shown. (a) State ONE variable that Ravi must keep the same so that the experiment is fair. (b) Predict what will happen to plant A after a few weeks. (c) Explain your answer to (b).", marks: 3, kw: [["amount of water", "amount of sunlight", "amount of light", "type of plant", "kind of plant", "size of", "type of soil", "amount of soil", "same soil", "same pot", "same amount", "same type", "same size"], ["die", "wilt", "weak", "stop growing"], ["make food", "makes food"]], model: "(a) The amount of water given each day (or: the amount of sunlight / the type of plant). (b) Plant A will become weak and die. (c) Leaves make food for the plant. Plant A has no leaves, so it cannot make food.", fig: { type: "setups", items: [{ label: "A", icon: "pot", lines: ["All leaves removed", "Sunlight", "Watered daily"] }, { label: "B", icon: "pot", lines: ["Leaves kept", "Sunlight", "Watered daily"] }] } },
    { q: "Mangrove trees at Sungei Buloh grow in soft mud. They have many roots that grow from the stem, above the mud, down into the mud. (a) What are these roots called? (b) Explain how these roots help the mangrove tree.", marks: 2, kw: [["prop", "stilt"], ["firm", "support", "hold", "upright"]], model: "(a) Prop roots. (b) They give the tree extra support and hold it firmly in the soft mud so that it does not fall over." },
    { q: "Plant K has a weak stem. It grows in a forest under tall trees that block most of the sunlight. (a) Suggest how plant K can get its leaves to the sunlight. (b) Explain why it is important for the leaves of plant K to get sunlight. (c) Plant L also has a weak stem, but it grows along the ground in an open field. Explain why plant L can survive without climbing.", marks: 3, kw: [["climb", "tendril", "twine", "twist", "cling"], ["make food", "makes food"], ["open field", "open area", "no tall", "no trees", "not blocked", "nothing block", "not shaded", "no shade", "enough sunlight", "enough light", "plenty of sunlight", "a lot of sunlight", "lots of sunlight"]], model: "(a) Plant K can climb up the tall trees, for example by twining around them or using tendrils. (b) The leaves need light to make food for the plant. (c) In an open field there are no tall trees to block the light, so the leaves of plant L still get enough sunlight while it grows along the ground.", x: 1 },
    { q: "(a) Which part of the sweet potato plant is the sweet potato that we eat? (b) A farmer removed all the leaves of some sweet potato plants but kept watering them. After some weeks, the sweet potatoes of these plants were much smaller than those of plants that kept their leaves. Explain why, using the functions of the leaves and the stem.", marks: 3, kw: [["root"], ["make food", "makes food", "made food", "no food"], ["carr", "transport"]], model: "(a) The root. (b) Leaves make food for the plant. The stem carries this food down to the roots, where it is stored in the sweet potato. With no leaves, no new food was made, so no food was carried to the roots to be stored, and the sweet potatoes stayed small.", x: 1 },
    { q: "The diagram shows a tomato plant. E is a tomato. (a) Name the part of the plant that develops into E. (b) State the function of E. (c) Ahmad says, ‘A tomato is a vegetable, not a fruit.’ Explain why he is wrong.", marks: 3, kw: [["flower"], ["protect"], ["contain", "has seeds", "have seeds", "seeds inside"]], model: "(a) The flower. (b) E protects the seeds. (c) The tomato is a fruit because it develops from a flower and contains seeds.", fig: { type: "plant", mark: { flower: "D", fruit: "E" } } },
    { q: "At the Singapore Botanic Gardens, some orchids grow on tree branches with their roots hanging in the air. (a) What are these roots called? (b) State one way these roots help the orchid.", marks: 2, kw: [["aerial"], ["water", "moist", "cling", "attach", "hold"]], model: "(a) Aerial roots. (b) They take in water from the moist air (or: they help the orchid cling to the branch)." },
    { q: "Mei forgot to water her balsam plant for a week and it drooped. An hour after she watered it, the plant stood upright again. Explain how the water reached the leaves.", marks: 2, kw: [["take in", "took in", "absorb", "takes in"], ["carr", "transport"]], model: "The roots took in the water from the soil. The stem carried the water up to the leaves, so the plant stood upright again." },
    { q: "The cut end of a celery stalk was placed in red water. The graph shows how far up the stalk the red colour had reached. (a) How far up the stalk had the red colour reached after 2 hours? (b) The stalk is 12 cm long. Predict after how many hours the red colour will first reach the top, if the pattern continues. (c) What does this experiment show about the stem?", marks: 3, kw: [["4 cm", "4cm", "4"], ["6 h", "6"], ["carr", "transport", "travel", "move"]], model: "(a) 4 cm. (b) After 6 hours. (c) The stem carries water up to other parts of the plant.", fig: { type: "line", xl: "Time (h)", yl: "Height of red colour (cm)", pts: [["0", 0], ["1", 2], ["2", 4], ["3", 6], ["4", 8]] } },
    { q: "Potato plants were grown with different numbers of hours of light each day. All other conditions were the same. The graph shows the results. (a) Describe the relationship shown in the graph. (b) Which part of the plant is the potato? (c) Using the functions of the leaves and the stem, explain the results.", marks: 4, kw: [["increase", "the greater", "the heavier", "the larger", "greater mass", "more mass", "larger mass", "heavier"], ["stem"], ["more food", "make food", "makes food", "made food"], ["carr", "transport"]], model: "(a) As the number of hours of light per day increased, the mass of potatoes harvested increased. (b) The potato is a stem. (c) With more light, the leaves made more food. The food was carried by the stem to the potatoes, where it was stored, so the potatoes were heavier.", fig: { type: "bar", xl: "Hours of light per day", yl: "Mass of potatoes harvested (g)", bars: [["4 h", 200], ["8 h", 450], ["12 h", 700]] }, x: 1 },
    { q: "The diagram shows a plant. Explain how parts A, B and C work together so that part C can make food.", marks: 3, kw: [["take in water", "takes in water", "took in water", "absorb water", "absorbs water", "take up water"], ["carr", "transport"], ["make food", "makes food"]], model: "The roots (A) take in water and mineral salts from the soil. The stem (B) carries the water up to the leaves (C). The leaves then use light to make food for the plant.", fig: { type: "plant", mark: { roots: "A", stem: "B", leaf: "C" } } }
  ],
  doc: [
    { q: "State the functions of the roots of a plant.", marks: 2, answers: ["Roots hold the plant.", "Roots hold the plant firmly in the soil and take in water and mineral salts from the soil.", "Roots take in food and water from the soil."], best: 1, why: "Answer 2 gives both functions in full. Answer 1 is too vague – it must say ‘firmly in the soil’ – and gives only one function. Answer 3 is wrong: roots do not take in food; the leaves make it." },
    { q: "Explain why a tomato is a fruit.", marks: 2, answers: ["It is red and juicy.", "It grows on the tomato plant.", "It develops from a flower and contains seeds."], best: 2, why: "Answer 3 uses both key ideas: it develops from a flower and contains seeds. Colour and juiciness (Answer 1) do not decide it, and Answer 2 is true of leaves and stems too." },
    { q: "Explain why the money plant grows around a pole.", marks: 2, answers: ["It has a weak stem, so it climbs up the pole for support to get more sunlight for its leaves to make food.", "It likes the pole.", "Its stem is weak."], best: 0, why: "Answer 1 gives the reason (weak stem) and why climbing helps (more sunlight to make food). Answer 2 is not scientific. Answer 3 gives only the reason and does not explain how the pole helps." },
    { q: "A celery stalk was placed in red water. After a day its leaves had turned red. Explain why.", marks: 2, answers: ["The leaves absorbed the red colour.", "The stem carried the red water from the bottom of the stalk up to the leaves.", "The celery drank the water."], best: 1, why: "Answer 2 names the stem and says it carried the water to the leaves. Answer 1 wrongly says the leaves took in the colour directly, and Answer 3 is too vague – it does not say which part carried the water." },
    { q: "All the leaves of a plant were removed. After a few weeks the plant died. Explain why.", marks: 2, answers: ["Leaves make food for the plant. Without leaves, the plant could not make food, so it died.", "It had no leaves.", "It could not take in water."], best: 0, why: "Answer 1 links the part to its function and to the result. Answer 2 just repeats the question with no function. Answer 3 gives the function of the roots, which were not removed." }
  ]
};
