window.BANKY = window.BANKY || {};
BANKY["plants"] = {
  lessons: [
    {
      h: "Proving a plant is a flowering plant",
      concept: "A plant is a flowering plant if it produces flowers at some point in its life. If you cannot see flowers, FRUITS are strong evidence, because fruits develop from flowers and contain seeds. Seeds alone are not enough, because a pine tree has seeds in cones but no flowers. ‘I have never seen flowers’ is not evidence: grass has tiny, dull flowers and a mango tree flowers only at certain times.",
      example: {
        q: "Jun found a plant at East Coast Park. It had no flowers, but it had small fruits with seeds inside.\n(a) Is it a flowering or a non-flowering plant?\n(b) Explain your answer.",
        marks: 2,
        think: [
          "Step 1: Do not be fooled by ‘no flowers’. Many flowering plants flower only at certain times.",
          "Step 2: The key clue is FRUITS. Fruits develop from flowers, so the plant must have had flowers before.",
          "Step 3: Make sure the reason is about the fruits, not just the seeds, because pine trees have seeds but are non-flowering."
        ],
        answer: "(a) It is a flowering plant. (b) It has fruits, and fruits develop from flowers, so the plant must have produced flowers before."
      },
      tip: "Use ‘fruits develop from flowers’, not ‘it has seeds’, as your reason.",
      try: { q: "Which observation PROVES that a plant is a flowering plant?", o: ["It has seeds.", "It has green leaves and a woody stem.", "It grows very tall.", "It has fruits containing seeds."], a: 3, why: "Fruits develop from flowers, so a plant with fruits must be a flowering plant. Seeds alone are not enough because a pine tree has seeds in cones, and size, green leaves or a woody stem do not tell us whether a plant flowers." }
    },
    {
      h: "Seeds or spores: fern, moss and mushroom",
      concept: "Ferns and mosses are non-flowering PLANTS that reproduce by spores; they are green and make their own food. A fern’s spore cases are brown dots on the underside of its leaves, while a moss’s spores are in capsules at the tips of thin stalks. A mushroom also reproduces by spores, but it is a FUNGUS, not a plant, because it cannot make its own food.",
      example: {
        q: "State one similarity and one difference between a bird’s nest fern and a mushroom.",
        marks: 2,
        think: [
          "Step 1: Look for what they share: both reproduce by spores.",
          "Step 2: Look for the big difference: the fern is a green plant that makes its own food; the mushroom is a fungus and cannot make its own food.",
          "Step 3: For a difference, say BOTH sides clearly (the fern… but the mushroom…), not just one side."
        ],
        answer: "Similarity: both reproduce by spores. Difference: the fern can make its own food, but the mushroom cannot make its own food (it is a fungus, not a plant)."
      },
      tip: "For a difference, always compare both things in one sentence: ‘A can…, but B cannot…’.",
      try: { q: "Which statement is true of a moss but NOT of a mushroom?", o: ["It makes its own food.", "It reproduces by spores.", "It grows well in damp places.", "It is a living thing."], a: 0, why: "A moss is a green plant and makes its own food, but a mushroom is a fungus and cannot. Both reproduce by spores, both grow well in damp places and both are living." }
    },
    {
      h: "Following a plant classification key",
      concept: "In a classification key, each question splits the plants into ‘Yes’ and ‘No’. Trace each plant’s whole path before choosing. The questions in exam keys are usually: produces flowers, reproduces by seeds or spores, where the spores are found, woody stem, grows in water.",
      example: {
        q: "Study the classification key.\n(a) Which letter is a pine tree?\n(b) Which letter is a water lily?",
        fig: { type: "flow", root: "Plants", node: { q: "Produces flowers?", yes: { q: "Grows in water?", yes: "A", no: "B" }, no: { q: "Reproduces by seeds?", yes: "C", no: "D" } } },
        marks: 2,
        think: [
          "Step 1: Pine tree: does it produce flowers? No. Does it reproduce by seeds? Yes, in cones. So it is C.",
          "Step 2: Water lily: does it produce flowers? Yes. Does it grow in water? Yes. So it is A.",
          "Step 3: Double-check the trap: a pine tree has seeds but no flowers, so it cannot be on the ‘Yes’ side of the first question."
        ],
        answer: "(a) C. (b) A."
      },
      tip: "Trace the path for every option and say the answers: ‘No, Yes, so C.’",
      try: { q: "Study the classification key. A pupil placed four plants on it. Which plant is placed WRONGLY?", fig: { type: "flow", root: "Plants", node: { q: "Produces flowers?", yes: { q: "Grows in water?", yes: "A", no: "B" }, no: { q: "Reproduces by seeds?", yes: "C", no: "D" } } }, o: ["Hibiscus at B", "Moss at D", "Duckweed at B", "Lotus at A"], a: 2, why: "Duckweed is a tiny flowering plant that floats on water, so it belongs at A, not B. Hibiscus is a land flowering plant (B), moss reproduces by spores (D) and lotus is a flowering water plant (A)." }
    },
    {
      h: "Venn diagrams: overlaps and empty regions",
      concept: "In a Venn diagram, a plant in the overlap has BOTH characteristics, a plant in one circle only has just that one, and a plant outside has neither. Some regions must be empty because no plant can have that combination, e.g. no plant produces flowers but does not reproduce by seeds. Check each plant against BOTH circles.",
      example: {
        q: "Study the Venn diagram.\n(a) Why is the pine tree in the ‘Reproduces by seeds’ circle only?\n(b) Explain why there are no plants in the ‘Produces flowers’ circle only.",
        fig: { type: "venn", a: "Produces flowers", b: "Reproduces by seeds", onlyA: [], both: ["hibiscus", "rice", "lotus"], onlyB: ["pine tree"], neither: ["fern", "moss"] },
        marks: 2,
        think: [
          "Step 1: A pine tree reproduces by seeds (in cones), but it never produces flowers. So it is in one circle only.",
          "Step 2: For the empty region: a plant there would produce flowers but NOT reproduce by seeds.",
          "Step 3: Flowers develop into fruits that contain seeds, so every flowering plant reproduces by seeds. That region must be empty."
        ],
        answer: "(a) The pine tree reproduces by seeds found in cones, but it does not produce flowers. (b) All flowering plants reproduce by seeds, because their flowers develop into fruits that contain seeds."
      },
      tip: "For an empty region, explain why NO plant can have that combination, using what you know about flowers, fruits and seeds.",
      try: { q: "Study the Venn diagram. A pupil wants to add a water hyacinth, a durian tree, a moss and a pine tree. How many of them will be placed in the overlap?", fig: { type: "venn", a: "Flowering plants", b: "Water plants", onlyA: ["hibiscus"], both: ["water lily"], onlyB: [], neither: ["fern"] }, o: ["0", "1", "2", "3"], a: 1, why: "Only the water hyacinth is both a flowering plant and a water plant. The durian tree is a flowering land plant, while the moss and pine tree are non-flowering land plants, so they go outside the overlap." }
    },
    {
      h: "Finding the characteristic used to group plants",
      concept: "When asked for a heading or the characteristic used, test it on EVERY plant: it must be true for all plants in one group and false for all plants in the other. Many wrong answers fit most plants but fail on one, such as a pine tree (non-flowering, but has seeds) or a hibiscus (a shrub with a woody stem).",
      example: {
        q: "Siti grouped some plants.\nGroup A: rambutan tree, hibiscus, pine tree\nGroup B: balsam, spinach, grass\nWhat characteristic did she use to group them? Give suitable headings.",
        marks: 2,
        think: [
          "Step 1: Try ‘flowering / non-flowering’. The pine tree in Group A is non-flowering, but Group B has only flowering plants too, so this does not separate the groups.",
          "Step 2: Try ‘seeds / spores’. All six reproduce by seeds, so this does not work either.",
          "Step 3: Try the stem. Group A plants all have hard, woody stems; Group B plants all have soft, non-woody stems. This works for every plant."
        ],
        answer: "She used the type of stem. Group A: plants with woody stems. Group B: plants with non-woody stems."
      },
      tip: "Test your heading on every plant in both groups; one misfit makes it wrong.",
      try: { q: "Group X: pine tree, durian tree, water lily. Group Y: bird’s nest fern, moss. Which is the most suitable heading for Group X?", o: ["Produces flowers", "Has a woody stem", "Reproduces by seeds", "Grows on land"], a: 2, why: "All three in Group X reproduce by seeds, while the fern and moss reproduce by spores. ‘Produces flowers’ fails for the pine tree, ‘woody stem’ and ‘grows on land’ fail for the water lily." }
    }
  ],
  expert: [
    { q: "Study the classification key. Which pair of plants would be placed at the SAME letter?", fig: { type: "flow", root: "Plants", node: { q: "Produces flowers?", yes: { q: "Grows in water?", yes: "A", no: "B" }, no: { q: "Reproduces by seeds?", yes: "C", no: "D" } } }, o: ["Pine tree and moss", "Grass and duckweed", "Water lily and water hyacinth", "Bird’s nest fern and hibiscus"], a: 2, why: "Water lily and water hyacinth are both flowering water plants, so both are at A. Pine tree (C) and moss (D) differ at the seeds question, grass is a land plant (B) while duckweed floats on water (A), and the fern (D) is non-flowering while hibiscus (B) flowers.", lvl: 4 },
    { q: "Study the classification chart of plants. Plant X is placed at Q. Which could X be?", fig: { type: "flow", root: "Plants", node: { q: "Reproduces by spores?", yes: { q: "Spore cases under leaves?", yes: "P", no: "Q" }, no: { q: "Has a woody stem?", yes: "R", no: "S" } } }, o: ["Moss", "Mushroom", "Bird’s nest fern", "Pine tree"], a: 0, why: "Q reproduces by spores but has no spore cases under its leaves, which fits a moss (spores in capsules on stalks). A mushroom also fits the two answers, but the chart is for PLANTS and a mushroom is a fungus. The fern is at P and the pine tree, which reproduces by seeds, is at R.", lvl: 4 },
    { q: "Study the Venn diagram. A pupil wants to add a lotus, a moss, a pine tree and a water hyacinth. How many of these four will be placed OUTSIDE both circles?", fig: { type: "venn", a: "Flowering plants", b: "Water plants", onlyA: ["hibiscus", "durian tree"], both: ["water lily"], onlyB: [], neither: ["fern"] }, o: ["0", "1", "3", "2"], a: 3, why: "The moss and the pine tree are non-flowering land plants, so both go outside the circles. The lotus and the water hyacinth are flowering water plants, so they go in the overlap. That makes 2.", lvl: 4 },
    { q: "The table shows observations of four living things E, F, G and H. Which statement is correct?", tbl: [["", "Has flowers", "Has seeds", "Has spores", "Is green"], ["E", "No", "Yes", "No", "Yes"], ["F", "No", "No", "Yes", "Yes"], ["G", "No", "No", "Yes", "No"], ["H", "Yes", "Yes", "No", "Yes"]], o: ["E and H are both flowering plants because both have seeds.", "G is a non-flowering plant because it reproduces by spores.", "E cannot be a plant because it has no flowers.", "F and G reproduce in the same way, but only F is a plant."], a: 3, why: "F and G both have spores, but only F is green and can make its own food, so G is likely a fungus. E has seeds but no flowers, like a pine tree, so it is a non-flowering plant, not a flowering one, and it is still a plant.", lvl: 4 },
    { q: "Tom counted the flowers on a chilli padi plant every week. Study the line graph. In Week 6 he saw no flowers, only fruits, and said the plant had become a non-flowering plant. Which is the best response?", fig: { type: "line", title: "Chilli padi plant", xl: "Week", yl: "Number of flowers", pts: [["1", 3], ["2", 8], ["3", 12], ["4", 6], ["5", 2], ["6", 0]] }, o: ["He is right, because a flowering plant must have flowers all the time.", "He is right, because all its flowers have died and will never grow back again.", "He is wrong, because the plant still has green leaves that make food.", "He is wrong. It flowered in Weeks 1 to 5, and the flowers became the fruits."], a: 3, why: "A flowering plant does not need to have flowers all the time; it produced flowers earlier, and flowers develop into fruits. Having green leaves does not show that a plant is flowering, because ferns and mosses are green too.", lvl: 4 },
    { q: "Ahmad wants to find out if moss grows better in a shady place than in a sunny place. Study the set-ups. Which two should he compare?", fig: { type: "setups", items: [{ label: "A", icon: "plate", lines: ["Moss on a brick", "Sprayed with water daily", "In a shady corner"] }, { label: "B", icon: "plate", lines: ["Moss on a brick", "Not sprayed", "In a shady corner"] }, { label: "C", icon: "plate", lines: ["Moss on a brick", "Sprayed with water daily", "In a sunny spot"] }, { label: "D", icon: "plate", lines: ["Moss on a brick", "Not sprayed", "In a sunny spot"] }] }, o: ["A and B", "A and C", "B and C", "A and D"], a: 1, why: "A and C differ only in the place (shady or sunny), and both are sprayed. A and B differ only in water, which tests something else. B and C, and A and D, differ in both water and place, so they are not fair.", lvl: 4 },
    { q: "Which of these are true for BOTH a pine tree and a bird’s nest fern?\nA: They never produce flowers.\nB: They reproduce by seeds.\nC: They make their own food.\nD: They have spore cases under their leaves.", o: ["A and B only", "A and C only", "B and D only", "A, C and D only"], a: 1, why: "Both are non-flowering (A) green plants that make their own food (C). Only the pine tree reproduces by seeds (in cones), and only the fern has spore cases under its leaves.", lvl: 4 },
    { q: "Which statement is NOT true?", o: ["A plant that reproduces by seeds always has fruits.", "A plant can be both a water plant and a flowering plant.", "A shrub can have a woody stem.", "A very tiny plant can be a flowering plant."], a: 0, why: "A pine tree reproduces by seeds but has cones, not fruits, so the first statement is not true. A water lily is a flowering water plant, hibiscus is a shrub with a woody stem, and duckweed is a tiny flowering plant.", lvl: 4 },
    { q: "Siti grouped some plants.\nGroup 1: pine tree, durian tree, hibiscus\nGroup 2: bird’s nest fern, moss\nWhich pair of headings does NOT correctly separate Group 1 from Group 2?", o: ["Reproduces by seeds / Reproduces by spores", "Produces flowers / Does not produce flowers", "Has a woody stem / Has a non-woody stem", "Has no spore cases or capsules / Has spore cases or capsules"], a: 1, why: "The pine tree in Group 1 does not produce flowers, so ‘Produces flowers’ is not true for every plant in Group 1. The other headings work for every plant: Group 1 all have seeds, woody stems and no spore cases, while the fern and moss have spores.", lvl: 4 },
    { q: "Study the classification key. Which question could be Question X?", fig: { type: "flow", root: "Plants", node: { q: "Question X", yes: { q: "Spore cases under leaves?", yes: "fern", no: "moss" }, no: { q: "Grows in water?", yes: "water lily", no: "hibiscus" } } }, o: ["Makes its own food?", "Grows on land?", "Reproduces by spores?", "Has green leaves?"], a: 2, why: "Question X must give ‘Yes’ for the fern and moss and ‘No’ for the water lily and hibiscus. Only ‘Reproduces by spores?’ does this. All four make their own food and have green leaves, and the hibiscus also grows on land, so those questions do not split them correctly.", lvl: 4 },
    { q: "Pupils recorded what they saw on four plants at Pulau Ubin on one day. Which conclusion is correct?", tbl: [["Plant", "Flowers seen", "Fruits seen", "Spores seen"], ["Mango tree", "No", "Yes", "No"], ["Grass", "No", "No", "No"], ["Fern", "No", "No", "Yes"], ["Lotus", "Yes", "Yes", "No"]], o: ["The mango tree is a flowering plant, because its fruits must have developed from flowers.", "Grass is a non-flowering plant because no flowers or fruits were seen.", "Only the lotus is a flowering plant, because it is the only one with flowers seen.", "The fern is a flowering plant because it can reproduce."], a: 0, why: "Fruits develop from flowers, so the mango tree is a flowering plant even though no flowers were seen that day. Grass is a flowering plant with small, dull flowers, so not seeing them on one day does not make it non-flowering. The fern reproduces by spores and never flowers.", lvl: 4 },
    { q: "Study the Venn diagram. Which of these could be X?", fig: { type: "venn", a: "Reproduces by spores", b: "Makes its own food", onlyA: ["mushroom"], both: ["fern", "moss"], onlyB: ["hibiscus", "pine tree"], neither: ["X"] }, o: ["Bread mould", "Water lily", "Grasshopper", "Duckweed"], a: 2, why: "X must NOT reproduce by spores and must NOT make its own food. A grasshopper fits both. Bread mould reproduces by spores (like the mushroom), and the water lily and duckweed are plants that make their own food.", lvl: 4 }
  ],
  oex: [
    { q: "Study the Venn diagram.\n(a) Name one plant that could be placed at Y.\n(b) Why is the pine tree outside the ‘Produces flowers’ circle?\n(c) Why is there no plant in the ‘Produces flowers’ circle only?", fig: { type: "venn", a: "Produces flowers", b: "Reproduces by seeds", onlyA: [], both: ["hibiscus", "Y"], onlyB: ["pine tree"], neither: ["moss"] }, marks: 3, kw: [["durian", "rambutan", "balsam", "rice", "grass", "lotus", "water lily", "chilli", "mango", "water hyacinth", "duckweed", "spinach", "papaya"], ["not produce flowers", "no flowers", "never produce", "non-flowering", "cone"], ["fruit"]], model: "(a) A durian tree. (b) The pine tree does not produce flowers; it produces seeds in cones. (c) Every flowering plant reproduces by seeds, because its flowers develop into fruits that contain seeds." },
    { q: "Study the classification chart of plants.\n(a) Name one plant that belongs at P.\n(b) Name one plant that belongs at Q.\n(c) A mushroom reproduces by spores and has no spore cases under leaves. Explain why it should NOT be placed at Q.", fig: { type: "flow", root: "Plants", node: { q: "Reproduces by spores?", yes: { q: "Spore cases under leaves?", yes: "P", no: "Q" }, no: { q: "Has a woody stem?", yes: "R", no: "S" } } }, marks: 3, kw: [["fern"], ["moss"], ["fungus", "fungi", "make its own food", "cannot make", "not a plant"]], model: "(a) A bird’s nest fern. (b) A moss. (c) The chart is for plants only. A mushroom is a fungus and cannot make its own food, so it is not a plant." },
    { q: "Ahmad set up the experiment shown. After 2 weeks, the moss in A was green and healthy, but the moss in C had dried up and turned brown.\n(a) Which two set-ups should he compare to find out if moss needs water?\n(b) Explain why the set-ups you chose give a fair test.\n(c) What does the result tell us about the places where moss grows well?", fig: { type: "setups", items: [{ label: "A", icon: "plate", lines: ["Moss on a brick", "Sprayed with water daily", "In a shady corner"] }, { label: "B", icon: "plate", lines: ["Moss on a brick", "Not sprayed", "In a sunny spot"] }, { label: "C", icon: "plate", lines: ["Moss on a brick", "Not sprayed", "In a shady corner"] }] }, marks: 3, kw: [["a and c", "c and a"], ["only one", "one thing", "only the water", "same place", "shady corner"], ["damp", "wet", "moist"]], model: "(a) A and C. (b) Only one thing is changed: whether the moss is sprayed with water. Both are kept in the same place, a shady corner. (c) Moss grows well in damp, shady places." },
    { q: "A pine tree and a rambutan tree both reproduce by seeds.\n(a) Where are the seeds of the rambutan tree found?\n(b) Where are the seeds of the pine tree found?\n(c) Ben says, “Since both have seeds, both are flowering plants.” Is he correct? Explain.", marks: 3, kw: [["fruit"], ["cone"], ["no flowers", "not produce flowers", "not have flowers", "non-flowering", "never produce", "never has flowers", "doesn’t produce", "doesn’t have flowers"]], model: "(a) Inside the fruits of the rambutan tree. (b) In cones. (c) No. The pine tree never produces flowers, so it is a non-flowering plant. Only the rambutan tree has flowers that develop into fruits." }
  ]
};
