window.BANKY = window.BANKY || {};
BANKY["pcycles"] = {
  lessons: [
    {
      h: "Picking the two set-ups for a fair test",
      concept: "To show that seeds need a condition, compare two set-ups that are the same in every way except that one condition. If two things are different, you cannot tell which one caused the result. Before choosing a pair, list every difference between the two set-ups: there must be exactly one.",
      example: {
        q: "Study the four set-ups of green bean seeds. (a) Which two set-ups should be compared to find out if seeds need water to germinate? (b) Explain why set-ups C and D cannot be used to find out if seeds need light to germinate.",
        fig: { type: "setups", items: [
          { label: "A", icon: "dish", lines: ["Wet cotton wool", "Dark cupboard", "Room temperature"] },
          { label: "B", icon: "dish", lines: ["Dry cotton wool", "Dark cupboard", "Room temperature"] },
          { label: "C", icon: "dish", lines: ["Wet cotton wool", "Near a window", "Room temperature"] },
          { label: "D", icon: "dish", lines: ["Wet cotton wool", "In a refrigerator"] } ] },
        marks: 2,
        think: [
          "Step 1: For (a), look for two set-ups where ONLY the water is different. A and B are both in a dark cupboard at room temperature; only wet vs dry cotton wool differs.",
          "Step 2: For (b), list the differences between C and D. C is near a window (light) at room temperature; D is in a refrigerator (dark and cold).",
          "Step 3: There are two differences, light AND temperature. If the seeds in D do not germinate, we cannot tell whether it was the darkness or the cold.",
          "Step 4: Write the reason as ‘more than one variable was changed’ and name both variables."
        ],
        answer: "(a) A and B, because only the water is different. (b) C and D differ in two ways: the light and the temperature. If the seeds in D do not germinate, we cannot tell if it was because of no light or because it was too cold."
      },
      tip: "Name BOTH variables that differ when you say a test is not fair: ‘light and temperature were both changed’.",
      try: {
        q: "Using the same four set-ups, which two should be compared to find out if seeds need warmth to germinate?",
        fig: { type: "setups", items: [
          { label: "A", icon: "dish", lines: ["Wet cotton wool", "Dark cupboard", "Room temperature"] },
          { label: "B", icon: "dish", lines: ["Dry cotton wool", "Dark cupboard", "Room temperature"] },
          { label: "C", icon: "dish", lines: ["Wet cotton wool", "Near a window", "Room temperature"] },
          { label: "D", icon: "dish", lines: ["Wet cotton wool", "In a refrigerator"] } ] },
        o: ["A and D", "C and D", "A and B", "B and D"], a: 0,
        why: "A and D are both wet and both dark (a refrigerator is dark inside), so only the temperature is different. C and D differ in light AND temperature, and B and D differ in water AND temperature."
      }
    },
    {
      h: "Explaining why seeds did not germinate",
      concept: "A full-mark answer names the missing condition AND says how the set-up took it away. Dry cotton wool means no water; a refrigerator is too cold, so the seeds do not get warmth; boiling removes the air in water and a layer of oil stops air from entering again. Vague answers like ‘the conditions were not suitable’ score no marks.",
      example: {
        q: "Priya placed green bean seeds in boiled and cooled water and poured a layer of oil on top. She kept the set-up at room temperature. After 5 days, the seeds had not germinated. Explain why.",
        marks: 2,
        think: [
          "Step 1: Check the three conditions one by one. Water: yes, the seeds are in water. Warmth: yes, room temperature.",
          "Step 2: Air is the missing condition. Ask how the set-up removed it: boiling drove out the air in the water.",
          "Step 3: Ask why the oil is there: it stops air from the surroundings from dissolving into the water again.",
          "Step 4: End with the link: without air, the seeds cannot germinate."
        ],
        answer: "Boiling removed the air in the water, and the layer of oil prevented air from entering the water again. The seeds had no air, so they could not germinate."
      },
      tip: "Condition + how it was removed: ‘no air, because boiling removed it and the oil kept it out’.",
      try: {
        q: "Seeds on wet cotton wool were kept in a refrigerator for 5 days. They did not germinate. Which is the best explanation?",
        o: ["It was dark in the refrigerator, so the seeds had no light.", "It was too cold, so the seeds did not get the warmth they need.", "There was no air inside the refrigerator once its door was closed.", "The seeds needed soil, not cotton wool, to germinate."], a: 1,
        why: "The refrigerator is too cold, so the seeds lack warmth (a suitable temperature). Darkness is not the reason, because seeds do not need light to germinate; there is air in a refrigerator, and soil is not needed."
      }
    },
    {
      h: "Reading germination results with a twist",
      concept: "Look for the overall pattern in a results table, not one odd number. If one seed out of ten does not germinate in a good set-up, it was probably dead or damaged, which is why many seeds are used. Conclude only about the variable that was changed; a true fact that was not tested by the experiment is not a conclusion from it.",
      example: {
        q: "Dev placed 10 green bean seeds on cotton wool in each set-up. He added a different amount of water to each and kept everything else the same. (a) What can Dev conclude? (b) Dev says, ‘More water makes more seeds germinate.’ Do the results support this? Explain.",
        tbl: [["Set-up", "Water added (ml)", "Seeds germinated (out of 10)"], ["A", "0", "0"], ["B", "5", "9"], ["C", "10", "10"]],
        marks: 2,
        think: [
          "Step 1: Find the big difference: 0 seeds with no water, but 9 or 10 seeds with water. So water is needed.",
          "Step 2: Compare B and C: 9 vs 10 is a difference of only one seed.",
          "Step 3: One seed not germinating is easily explained by a dead or damaged seed, so it is not a real pattern.",
          "Step 4: Answer ‘No’ and give the reason, using numbers from the table."
        ],
        answer: "(a) Seeds need water to germinate, because no seeds germinated without water. (b) No. B and C differ by only one seed, which may have been dead or damaged. Both B and C had enough water for the seeds to germinate."
      },
      tip: "A difference of 1 seed out of 10 is not a pattern: think ‘dead or damaged seed’.",
      try: {
        q: "Hana placed 10 seeds on wet cotton wool at each temperature. Which conclusion is best supported by the results?",
        tbl: [["Temperature (°C)", "Seeds germinated (out of 10)"], ["5", "0"], ["25", "10"], ["30", "9"]],
        o: ["The warmer it is, the more seeds germinate.", "Seeds need light to germinate.", "Seeds do not germinate when it is too cold.", "Seeds need water to germinate."], a: 2,
        why: "No seeds germinated at 5 °C but almost all did at 25 °C and 30 °C, so seeds do not germinate when it is too cold. ‘Warmer is better’ is wrong (30 °C had 9), and water was not tested because every set-up was wet."
      }
    },
    {
      h: "Seed leaves, light and the seedling’s food",
      concept: "Seed leaves store food for the young seedling. As the seedling grows, it uses up this food, so the seed leaves shrivel and drop off. By then, the green leaves must make food, and they need light to do this. A seedling in the dark grows tall and thin with yellowish leaves, and it dies once the food in its seed leaves is used up.",
      example: {
        q: "Seedlings X and Y were grown with enough water. X was kept in a dark cupboard and Y near a window. After 14 days, X had died but Y was still alive. Explain why.",
        marks: 2,
        think: [
          "Step 1: Both seedlings started with food stored in their seed leaves, so both could grow at first.",
          "Step 2: Ask what changes after the stored food is used up: the seedling must make its own food with its green leaves.",
          "Step 3: Making food needs light. Y had light; X in the dark did not.",
          "Step 4: Link the cause to the effect: X ran out of food and died."
        ],
        answer: "Both seedlings used the food stored in their seed leaves. Y was near a window, so its green leaves could use light to make food. X was in the dark and could not make food, so it died when the food in its seed leaves was used up."
      },
      tip: "Seed leaves = stored food; green leaves = make food with light. Say which one runs out.",
      try: {
        q: "The seed leaves of a bean seedling near a window shrivelled on Day 8, while its green leaves grew bigger. Which statement best explains this?",
        o: ["The seed leaves were damaged by the strong sunlight.", "The seed leaves slowly turned into the bigger green leaves.", "The seedling no longer needed water for its seed leaves.", "The seedling used up the food stored in the seed leaves."], a: 3,
        why: "Seed leaves shrivel because the seedling has used up the food stored in them. They do not turn into green leaves, sunlight does not damage them, and the seedling still needs water."
      }
    },
    {
      h: "Life cycle order and life span data",
      concept: "A flowering plant goes seed → germinating seed → seedling → young plant → adult plant. Only the adult plant produces flowers, which develop into fruits containing seeds, and the cycle starts again. Life span is the time from seed to death, and plants differ. In a table, subtract carefully: the time a plant spends as a flowering adult is its life span minus the time it takes to first flower.",
      example: {
        q: "The table shows information about plants P, Q and R. (a) Ali says, ‘A plant with a longer life span always flowers later.’ Use plants Q and R to show that he is wrong. (b) For how many weeks can plant R produce flowers?",
        tbl: [["Plant", "Week it first flowers", "Life span (weeks)"], ["P", "6", "12"], ["Q", "10", "14"], ["R", "5", "20"]],
        marks: 2,
        think: [
          "Step 1: For (a), compare the life spans first: R (20 weeks) lives longer than Q (14 weeks).",
          "Step 2: Now compare when they first flower: R flowers at Week 5, earlier than Q at Week 10. This goes against Ali’s claim.",
          "Step 3: For (b), flowers appear only at the adult stage, from the first flowering until death: 20 − 5 = 15 weeks.",
          "Step 4: Quote the numbers in your answer so the marker sees the evidence."
        ],
        answer: "(a) R has a longer life span (20 weeks) than Q (14 weeks), but R flowers earlier (Week 5) than Q (Week 10). (b) 15 weeks, from Week 5 to Week 20."
      },
      tip: "Flowers and fruits come only at the adult stage: subtract to find how long a plant spends as a flowering adult.",
      try: {
        q: "These describe four stages in the life of a green bean plant.\nW: The seed leaves shrivel and drop off.\nX: The seed coat splits and a root grows out.\nY: Fruits form on the plant.\nZ: The first green leaves appear.\nWhich is the correct order?",
        o: ["X, Z, W, Y", "X, W, Z, Y", "Z, X, W, Y", "X, Z, Y, W"], a: 0,
        why: "The root grows out first (X). The green leaves appear (Z) while the seed leaves still feed the seedling, and the seed leaves shrivel later (W). Fruits form only on the adult plant (Y)."
      }
    }
  ],
  expert: [
    { q: "Study the set-ups. The seeds germinated in A and B only. Which conclusion can be drawn from these four set-ups?", o: ["Seeds need water only.", "Seeds need water and warmth, but not light.", "Seeds need water, warmth and light.", "Seeds need warmth, but these set-ups cannot show if water is needed."], a: 1, lvl: 4,
      why: "B vs C shows water is needed (only water differs). A vs B shows light is not needed, since both germinated. A vs D differ only in temperature, because both are wet and dark, so warmth is needed. B vs D is not a fair pair, but A vs D is.",
      fig: { type: "setups", items: [
        { label: "A", icon: "dish", lines: ["Wet cotton wool", "Dark cupboard", "Room temperature"] },
        { label: "B", icon: "dish", lines: ["Wet cotton wool", "Near a window", "Room temperature"] },
        { label: "C", icon: "dish", lines: ["Dry cotton wool", "Near a window", "Room temperature"] },
        { label: "D", icon: "dish", lines: ["Wet cotton wool", "In a refrigerator"] } ] } },
    { q: "Kai tested four types of bean seeds, A to D, on wet cotton wool at room temperature. He used 10 seeds of A, B and D, but 20 seeds of C. Study the graph. Which type of seed germinated best?", o: ["C, because it has the tallest bar, with 14 seeds that germinated.", "D, because none of its seeds were dead after the test.", "A, because 8 is close to 10, the number of seeds used.", "B, because 9 out of 10 germinated, but only 7 out of every 10 of C did."], a: 3, lvl: 4,
      why: "C started with twice as many seeds, so 14 out of 20 is only 7 out of every 10, which is fewer than B’s 9 out of 10. Comparing the bar heights alone is unfair when the numbers of seeds used are different.",
      fig: { type: "bar", title: "Seeds that germinated", xl: "Type of seed", yl: "Number of seeds", bars: [["A", 8], ["B", 9], ["C", 14], ["D", 0]] } },
    { q: "Lin placed 10 seeds on wet cotton wool at room temperature and recorded the total number that had germinated each day. At the end of Day 3, she moved the dish into a refrigerator and kept the cotton wool wet. Study the graph. Which best explains why the total stayed at 5?", o: ["The other 5 seeds were all dead, so they could not germinate.", "The refrigerator was dark inside, and the seeds needed light to germinate.", "It was too cold in the refrigerator for the other seeds to germinate.", "The seeds did not have enough water in the refrigerator."], a: 2, lvl: 4,
      why: "Germination stopped exactly when the dish went into the cold refrigerator, so the lack of warmth is the best explanation. Seeds do not need light to germinate, the cotton wool was kept wet, and it is unlikely that exactly the remaining 5 were all dead.",
      fig: { type: "line", title: "Total seeds germinated", xl: "Day", yl: "Number of seeds", pts: [["0", 0], ["1", 1], ["2", 3], ["3", 5], ["4", 5], ["5", 5], ["6", 5]] } },
    { q: "The diagram shows the life cycle of a flowering plant. Which statement is correct?", o: ["The germinating seed does not need light, but the seedling needs light.", "Only the adult plant needs water; the younger stages do not.", "The seed needs light, water and air to germinate into a young seedling.", "The seedling produces flowers before it becomes an adult plant."], a: 0, lvl: 4,
      why: "Germination needs only water, air and warmth, but once the seedling’s stored food runs low it needs light to make food. Every stage that grows needs water, and only the adult plant flowers.",
      fig: { type: "cycle", stages: ["Seed", "Germinating seed", "Seedling", "Adult plant"] } },
    { q: "Study the flowchart used to sort the stages in the life of a green bean plant. Which stage is P most likely to be?", o: ["Seedling", "Germinating seed", "Young plant", "Adult plant"], a: 1, lvl: 4,
      why: "P has a root, has no flowers and still has its seed coat on. The root has just grown out of the split seed coat, so P is the germinating seed. The adult plant has flowers, and seedlings and young plants have lost their seed coat.",
      fig: { type: "flow", root: "Plant stages", node: { q: "Has a root?", yes: { q: "Has flowers?", yes: "R", no: { q: "Seed coat still on?", yes: "P", no: "Q" } }, no: "Seed" } } },
    { q: "Two bean seedlings were watered daily for 7 days. One was kept in a dark cupboard and one near a window. Study the graph. Which statement is correct?", o: ["The seedling in the dark was healthier, because it grew much taller in 7 days.", "The seedling near the window was shorter because it got less water than the other.", "Light is not needed for a seedling to grow, as the dark one grew taller.", "The dark one was taller but weak and yellowish, and will die once its stored food runs out."], a: 3, lvl: 4,
      why: "Taller is not healthier: a seedling in the dark grows tall and thin with yellowish leaves and cannot make food without light. Both had the same water, and the seedling will die, which shows light is needed.",
      fig: { type: "bar", title: "Height after 7 days", xl: "Where it was kept", yl: "Height (cm)", bars: [["Dark cupboard", 14], ["Near a window", 8]] } },
    { q: "Wei wanted to find out if seeds need air to germinate. For set-up B, he poured freshly boiled water that was still hot over the seeds, then added a layer of oil. Only the seeds in A germinated. Why can he NOT conclude that seeds need air?", o: ["The hot water may have killed the seeds, so air and temperature both differed.", "He should have used soil instead of water so that the seeds could grow roots.", "The oil gave the seeds too much food, so they could not germinate.", "He did not put set-up B in the dark, where seeds germinate better."], a: 0, lvl: 4,
      why: "The water must be boiled AND cooled. Hot water may kill or damage the seeds, so B differed in both air and temperature and the test was not fair. Soil and darkness are not needed.",
      fig: { type: "setups", items: [
        { label: "A", icon: "beaker", lines: ["Seeds in tap water", "Room temperature"] },
        { label: "B", icon: "beaker", lines: ["Hot boiled water", "Layer of oil", "Room temperature"] } ] } },
    { q: "Mr Tan sowed bean seeds in two pots of soil at room temperature. Pot 1 was watered once a day. Pot 2 was flooded so that water covered the soil for a week. Only the seeds in Pot 1 germinated. What is the most likely reason?", o: ["Seeds need the soil to be completely dry before they can germinate.", "Light could not reach the seeds through the layer of water.", "The seeds in Pot 2 were too cold because the water kept them cool.", "The water covering the soil stopped the seeds getting enough air."], a: 3, lvl: 4,
      why: "Both pots had water and warmth, so air is the condition that was missing when water covered the soil. Seeds do not need light to germinate, and the pots were at the same room temperature." },
    { q: "Study the table. Which two set-ups can be compared in a fair test to find out if seeds need water to germinate?", tbl: [["Set-up", "Water", "Light", "Temperature (°C)", "Seeds used"], ["W", "Yes", "Yes", "25", "10"], ["X", "No", "No", "25", "10"], ["Y", "Yes", "No", "25", "10"], ["Z", "Yes", "No", "5", "5"]], o: ["W and X", "X and Y", "Y and Z", "W and Z"], a: 1, lvl: 4,
      why: "X and Y differ only in water: both are dark, at 25 °C, with 10 seeds. W and X differ in water AND light, while Y and Z do not test water at all and differ in temperature and number of seeds." },
    { q: "Which of these statements are NOT true?\nA: A seed needs light to germinate.\nB: A seedling needs light to grow well.\nC: The seed coat protects the seed.\nD: The seed leaves grow bigger and become the green leaves of the adult plant.", o: ["A and D only", "A and B only", "B and C only", "C and D only"], a: 0, lvl: 4,
      why: "A is false because seeds germinate in the dark. D is false because seed leaves shrivel and drop off after their stored food is used up, and the green leaves grow separately. B and C are true." },
    { q: "Green bean seeds were kept in a paper envelope in a cupboard at room temperature for 3 months and did not germinate. When they were placed on wet cotton wool in the same cupboard, they germinated in 3 days. Why did they not germinate in the envelope?", o: ["There was no light in the cupboard.", "There was no air inside the paper envelope.", "The seeds had no water in the envelope.", "The seeds needed soil."], a: 2, lvl: 4,
      why: "The same cupboard means the light and temperature did not change, and air passes through paper. The only new thing was water from the wet cotton wool, so a lack of water stopped germination." },
    { q: "Study the table. Which plant spends the longest time as a flowering adult, from when it first flowers until it dies?", tbl: [["Plant", "Week it first flowers", "Life span (weeks)"], ["K", "6", "10"], ["L", "4", "30"], ["M", "8", "9"], ["N", "12", "20"]], o: ["K", "M", "L", "N"], a: 2, lvl: 4,
      why: "Subtract for each plant: K 4 weeks, L 26 weeks, M 1 week and N 8 weeks. L flowers earliest and also lives longest, so it has the longest adult flowering stage. N is tempting because it flowers latest, but that does not make its adult stage longest." }
  ],
  oex: [
    { q: "Study the set-ups of green bean seeds. (a) In which set-up(s) will the seeds germinate? (b) Why was the water in B boiled and then cooled? (c) Why was a layer of oil added to B? (d) What does comparing A and C show?", marks: 4,
      kw: [["only set-up a", "set-up a only", "only a", "a only"], ["remove", "no air", "air out", "rid of", "drive out", "drives out"], ["prevent", "enter", "keep air out", "seal"], ["warm", "temperature", "cold"]],
      model: "(a) Only set-up A. (b) Boiling removes the air in the water, and cooling it stops the hot water from killing the seeds. (c) The oil prevents air from entering the water again. (d) Seeds need warmth (a suitable temperature) to germinate, because the seeds in the cold refrigerator did not germinate.",
      fig: { type: "setups", items: [
        { label: "A", icon: "beaker", lines: ["Seeds in tap water", "Room temperature"] },
        { label: "B", icon: "beaker", lines: ["Boiled, cooled water", "Layer of oil", "Room temperature"] },
        { label: "C", icon: "beaker", lines: ["Seeds in tap water", "In a refrigerator"] } ] } },
    { q: "Mei placed 10 seeds on wet cotton wool at room temperature and recorded the total number that had germinated by each day. Study the graph. (a) How many seeds germinated on Day 3 only? (b) One seed never germinated even though it had water, air and warmth. Suggest a reason. (c) Why did Mei use 10 seeds instead of 1?", marks: 3,
      kw: [["4"], ["dead", "damaged", "not alive"], ["reliable", "sure", "accurate"]],
      model: "(a) 4 seeds, because the total went from 3 to 7. (b) The seed may have been dead or damaged. (c) If she used only 1 seed and it was dead, she would get the wrong result. Using 10 seeds makes the results more reliable.",
      fig: { type: "line", title: "Total seeds germinated", xl: "Day", yl: "Number of seeds", pts: [["0", 0], ["1", 0], ["2", 3], ["3", 7], ["4", 9], ["5", 9], ["6", 9]] } },
    { q: "Study the life cycle of a flowering plant. (a) Name stage P. (b) Name one condition that the seedling needs to grow well but that is NOT needed for stage P to take place. (c) Which part of the adult plant develops into the fruit that holds new seeds?", marks: 3,
      kw: [["germinating"], ["light"], ["flower"]],
      model: "(a) P is the germinating seed. (b) Light. A seed does not need light to germinate, but a seedling needs light to make food and grow well. (c) The flowers of the adult plant develop into fruits that contain seeds.",
      fig: { type: "cycle", stages: ["Seed", "P", "Seedling", "Young plant", "Adult plant"] } },
    { q: "Faye wants to find out if green bean seeds need light to germinate. (a) Which variable should she change? (b) State one variable about the seeds and one other variable that she must keep the same. (c) What should she observe to compare her set-ups?", marks: 4,
      kw: [["light"], ["water", "temperature", "warmth", "air", "container"], ["number of seeds", "type of seed", "kind of seed", "size of seed", "size of the seed"], ["germinat"]],
      model: "(a) Whether there is light: one set-up in a dark cupboard and one near a window. (b) The number of seeds (a variable about the seeds) and the amount of water (the temperature and the type of seed must also be the same). (c) The number of seeds that germinate in each set-up after a few days." }
  ]
};
