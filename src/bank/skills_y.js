window.BANKY = window.BANKY || {};
BANKY["skills"] = {
  lessons: [
    {
      h: "How to name the variables precisely",
      concept: "Every fair test has three kinds of variables. The variable changed is the ONE thing you change on purpose. The variable measured is the result you count, measure or observe. The variables kept the same are everything else that could affect the result. Top scorers name each variable in full, saying exactly what is changed or measured, e.g. ‘the number of paper clips attracted by the magnet’, not just ‘paper clips’.",
      example: {
        q: "Jun wanted to find out if the thickness of cardboard placed between a magnet and some steel paper clips affects how many paper clips the magnet can attract. He used the same magnet and placed cardboard pieces that were 1 cm, 2 cm and 3 cm thick between the magnet and a tray of paper clips. He counted the paper clips attracted each time.\n(a) State the variable changed. [1]\n(b) State the variable measured. [1]",
        marks: 2,
        think: [
          "Step 1: Find what Jun changes on purpose from one try to the next. The magnet is the same, the paper clips are the same; only the cardboard thickness (1 cm, 2 cm, 3 cm) changes.",
          "Step 2: Name it in full. ‘Cardboard’ alone loses the mark, because the cardboard is the same material each time; it is the THICKNESS of the cardboard that changes.",
          "Step 3: Find what Jun counts to get his results: the paper clips attracted. Say what is counted AND by what: ‘the number of paper clips attracted by the magnet’.",
          "Step 4: Check: the variable measured should change BECAUSE of the variable changed. More thickness → fewer paper clips. It makes sense, so the answer is complete."
        ],
        answer: "(a) The thickness of the cardboard. (b) The number of paper clips attracted by the magnet."
      },
      tip: "Name the variable in full: ‘the thickness of the cardboard’, not ‘cardboard’; ‘the number of paper clips attracted’, not ‘paper clips’.",
      try: {
        q: "Rani dipped same-sized pieces of cotton, wool and nylon, one at a time, into a beaker of 100 ml of water for 1 minute. After taking each piece out, she measured the water left in the beaker. What is the variable MEASURED?",
        o: ["The type of material dipped into the beaker of water", "The size of each piece of material that is dipped", "The volume of water left in the beaker after each piece", "The volume of water poured into the beaker at the start"],
        a: 2,
        why: "Rani measures the water LEFT in the beaker, so that is the variable measured (it tells her how much each material absorbed). The type of material is the variable changed, while the size of the pieces and the 100 ml of water at the start are kept the same."
      }
    },
    {
      h: "How to explain why a set-up is (un)fair",
      concept: "A test is fair only if the set-ups being compared differ in ONE variable, the one being tested. To explain why a test is unfair, say both halves: which variable should be the only one changed, and which OTHER variable is also different. Then finish with the reason: we cannot tell which variable caused the difference in results. Saying ‘it is not fair’ or ‘he did not repeat it’ scores nothing.",
      example: {
        q: "Ahmad wanted to find out if temperature affects how soon mould grows on bread. Study his set-ups. He said his experiment was a fair test. Explain why he is wrong. [2]",
        fig: { type: "setups", items: [{ label: "A", icon: "plate", lines: ["1 slice white bread", "5 drops of water", "In a refrigerator"] }, { label: "B", icon: "plate", lines: ["1 slice wholemeal bread", "5 drops of water", "In a kitchen cupboard"] }] },
        marks: 2,
        think: [
          "Step 1: Read the aim. The variable Ahmad wants to change is the temperature (refrigerator vs kitchen cupboard).",
          "Step 2: Compare the set-ups line by line. Water: same. Place (temperature): different, as planned. Type of bread: white vs wholemeal, DIFFERENT. That is the extra variable.",
          "Step 3: Say why the extra variable matters: if B grows mould sooner, it could be because it is warmer OR because it is wholemeal bread. We cannot tell which one caused it.",
          "Step 4: Write both halves plus the reason. Leaving out the named extra variable is the most common way to lose a mark here."
        ],
        answer: "It is not a fair test. Only the temperature should be different, but the type of bread is also different (white bread in A and wholemeal bread in B). So Ahmad cannot tell whether the temperature or the type of bread caused the difference in how soon mould grew."
      },
      tip: "Name the extra variable that was ALSO changed; ‘it is not fair’ on its own earns no mark.",
      try: {
        q: "Siti wanted to find out if the size of a magnet affects its strength. She tested a small bar magnet and a large horseshoe magnet, each with the same box of steel paper clips. Why is her test NOT fair?",
        o: ["She did not repeat the test three times, so the results are not fair.", "She should have used iron paper clips instead, as steel ones are not magnetic.", "The large magnet will attract more paper clips than the small one, so it is not fair.", "The shapes are also different, so she cannot tell if size or shape caused the result."],
        a: 3,
        why: "Size is meant to be the only variable changed, but the shape (bar vs horseshoe) is also different, so the cause of any difference is unclear. Repeating makes results reliable, not fair, and steel is a magnetic material so it is fine to use."
      }
    },
    {
      h: "How to read and describe a trend from a graph",
      concept: "Describe a trend by linking the two variables: ‘As [the variable on the x-axis] increases, [the variable measured] increases / decreases.’ Support it with the first and last values, with units. If the line changes direction or goes flat, describe each part separately and say where the change happens, e.g. ‘from Day 8 to Day 10 it stayed the same’.",
      example: {
        q: "Mei kept a slice of bread in a damp place and counted the mould spots on it every 2 days. Study the graph. Describe how the number of mould spots changed from Day 0 to Day 10. [2]",
        fig: { type: "line", title: "Mould spots on a slice of bread", xl: "Day", yl: "Number of mould spots", pts: [["0", 0], ["2", 0], ["4", 3], ["6", 8], ["8", 15], ["10", 15]] },
        marks: 2,
        think: [
          "Step 1: Read the axes first: Day on the x-axis, number of mould spots on the y-axis.",
          "Step 2: Split the line into parts wherever it changes: flat (Day 0 to 2), going up (Day 2 to 8), flat again (Day 8 to 10).",
          "Step 3: For each part, give the direction AND the numbers: 0 spots at first; rising from 0 to 15; staying at 15.",
          "Step 4: Do not stop at ‘it increased’. A graph with three parts needs all three parts for full marks."
        ],
        answer: "From Day 0 to Day 2, there were no mould spots. From Day 2 to Day 8, the number of mould spots increased from 0 to 15. From Day 8 to Day 10, the number of mould spots stayed the same at 15."
      },
      tip: "Describe every part of the line (up, down or flat) and quote the start and end values of each part.",
      try: {
        q: "Hui Ling stacked identical bar magnets together and counted how many steel paper clips the stack could hold. Study the graph. Which statement describes the results most accurately?",
        fig: { type: "line", title: "Paper clips held by a stack of magnets", xl: "Number of magnets", yl: "Number of paper clips", pts: [["1", 5], ["2", 9], ["3", 12], ["4", 14]] },
        o: ["As the number of magnets increased, the number of paper clips held decreased.", "As the number of magnets increased, the number of paper clips held increased, but by a smaller amount each time.", "As the number of magnets increased, the number of paper clips held increased by the same amount each time.", "The number of paper clips held stayed the same after 3 magnets."],
        a: 1,
        why: "The number went up by 4, then 3, then 2, so it increased by a smaller amount each time. It did not go up by the same amount, and it was still rising (12 to 14) after 3 magnets."
      }
    },
    {
      h: "How to draw a conclusion that stays within the data",
      concept: "A conclusion answers the aim using ONLY what was tested. Link the variable changed to the variable measured and limit it to the things tested, e.g. ‘Of the materials tested, cotton absorbed the most water.’ Before agreeing with any conclusion, check every set-up in the table: one result that does not fit the pattern is enough to make ‘the more…, the more…’ wrong. Avoid ‘always’ and ‘all’ unless every case was tested.",
      example: {
        q: "Leong placed 10 green bean seeds in each of three set-ups in the same room and counted how many seeds had germinated after 5 days. Study the table.\n(a) What can he conclude about whether seeds need water to germinate? Use the data. [1]\n(b) Leong also concluded, ‘The more water seeds get, the more seeds germinate.’ Is this supported by the data? Explain. [1]",
        tbl: [["Set-up", "Water given", "Seeds germinated"], ["P", "No water (dry cotton wool)", "0"], ["Q", "Moist cotton wool", "9"], ["R", "Seeds fully under water", "1"]],
        marks: 2,
        think: [
          "Step 1: Find the fair comparison for (a). P (no water) and Q (moist) show that without water no seeds germinated, but with water 9 did.",
          "Step 2: Test Leong’s claim in (b) against EVERY row, not just P and Q. R had the most water but only 1 seed germinated.",
          "Step 3: One row that breaks the pattern is enough to reject ‘the more…, the more…’. Quote the numbers that break it.",
          "Step 4: Stay inside the data. You may add what it DOES show (some water is needed), but do not invent new facts that were not tested."
        ],
        answer: "(a) Seeds need water to germinate: no seeds germinated without water (P), but 9 seeds germinated on moist cotton wool (Q). (b) No. Seeds fully under water (R) got the most water but only 1 seed germinated, fewer than the 9 on moist cotton wool, so more water did not always make more seeds germinate."
      },
      tip: "Write ‘Of the … tested’ and check every row before agreeing with a ‘the more…, the more…’ conclusion.",
      try: {
        q: "Aishah tested three brands of paper towel once each. She dipped same-sized pieces into water and measured how much water each absorbed. Study the table. Which conclusion is acceptable?",
        tbl: [["Paper towel", "Water absorbed (ml)"], ["X", "30"], ["Y", "45"], ["Z", "20"]],
        o: ["Of the three paper towels tested, towel Y absorbed the most water.", "Towel Y is the most absorbent paper towel sold in Singapore.", "Thicker paper towels always absorb more water.", "Towel Z does not absorb water."],
        a: 0,
        why: "The conclusion is limited to the three towels tested and matches the data (45 ml is the most). Other brands in Singapore and thickness were never tested, and towel Z did absorb 20 ml."
      }
    },
    {
      h: "How to write a CER explanation",
      concept: "Claim: answer the question directly in one short sentence. Evidence: quote data from the table or graph, with units and a comparison word such as ‘more than’ or ‘fewer than’. Reasoning: use the science idea (a property, a need or a characteristic) to explain WHY the evidence supports the claim. A claim alone, or data alone, rarely scores full marks.",
      example: {
        q: "Mrs Lim wants to make a shopping bag that can carry heavy groceries from the market. She hung 100 g weights, one at a time, on same-sized bags made of different materials until each bag tore. Study the graph. Which material should she use? Explain using the data. [3]",
        fig: { type: "bar", title: "Weights held before the bag tore", xl: "Material of bag", yl: "Number of 100 g weights", bars: [["Paper", 3], ["Plastic", 8], ["Cloth", 12]] },
        marks: 3,
        think: [
          "Step 1: Claim. Answer what is asked: which material? Cloth.",
          "Step 2: Evidence. Quote the numbers and compare: cloth held 12 weights, more than plastic (8) and paper (3).",
          "Step 3: Reasoning. Name the property the data shows and link it to the use: cloth is the strongest, so it can carry heavy things without tearing.",
          "Step 4: Check you have all three parts. Each part is usually worth one mark."
        ],
        answer: "Cloth. The cloth bag held 12 weights before it tore, more than the plastic bag (8) and the paper bag (3). This shows that cloth is the strongest of the three materials, so a cloth bag can carry heavy groceries without tearing."
      },
      tip: "Claim + Evidence (numbers and ‘more than’) + Reasoning (the property linked to the use): each part is a mark.",
      try: {
        q: "Lina wants a sheet to make a window for her mealworm box so she can watch the mealworms. She tried to read words through each sheet. Study the table. Which answer uses Claim, Evidence and Reasoning correctly?",
        tbl: [["Sheet", "Words read through the sheet (out of 20)"], ["Glass", "20"], ["Frosted plastic", "6"], ["Cardboard", "0"]],
        o: ["Glass, because it is the best material for making a window for any animal box.", "Glass. All 20 words could be read through it, versus 6 and 0 for the others. It is transparent, so Lina can see the mealworms.", "20 words could be read through glass, 6 through frosted plastic and 0 through cardboard.", "Cardboard. No words at all could be read through it, so it is opaque and keeps the mealworms safe and dark."],
        a: 1,
        why: "It has a claim (glass), evidence with numbers and a comparison, and reasoning (transparent, so she can see). The first has no evidence, the third has no claim or reasoning, and the fourth makes the wrong claim for a window."
      }
    }
  ],
  expert: [
    { q: "Bala set up four plates of bread in the diagram. Which set-ups can be compared to find out if temperature affects how soon mould grows on bread?", fig: { type: "setups", items: [{ label: "A", icon: "plate", lines: ["White bread", "5 drops of water", "Cupboard (30 °C)"] }, { label: "B", icon: "plate", lines: ["White bread", "No water", "Cupboard (30 °C)"] }, { label: "C", icon: "plate", lines: ["White bread", "5 drops of water", "Refrigerator (5 °C)"] }, { label: "D", icon: "plate", lines: ["White bread", "No water", "Refrigerator (5 °C)"] }] }, o: ["A and B only", "A and D only", "A and C, and also B and D", "A and D, and also B and C"], a: 2, why: "A and C differ only in temperature (both have water), and B and D also differ only in temperature (both dry), so both pairs are fair. A and B differ in water, while A and D differ in both water and temperature.", lvl: 4 },
    { q: "Ken tested three magnets three times each with the same box of steel paper clips. Study the table. What should Ken do before he decides which magnet is the strongest?", tbl: [["Magnet", "Try 1", "Try 2", "Try 3"], ["P", "12", "11", "12"], ["Q", "15", "3", "14"], ["R", "9", "10", "9"]], o: ["Test magnet Q again, because its Try 2 result is very different from its other two tries.", "Decide that magnet Q is the weakest, because it attracted only 3 paper clips in Try 2.", "Decide that magnet R is the strongest, because its three results are the closest together.", "Stop, because repeating the test has already made it a fair test."], a: 0, why: "Q’s Try 2 (3 clips) does not fit its other results (15 and 14), so something probably went wrong and Q should be retested. Closeness of results shows reliability, not strength, and repeating makes results reliable, not fair.", lvl: 4 },
    { q: "Wei dipped pieces of material into water and measured how much water each absorbed. Study the table. Which statement is FAIRLY supported by the data?", tbl: [["Set-up", "Material", "Number of layers", "Water absorbed (ml)"], ["W", "Cotton", "1", "20"], ["X", "Cotton", "2", "38"], ["Y", "Nylon", "2", "6"], ["Z", "Wool", "3", "30"]], o: ["Wool absorbs more water than cotton.", "Nylon absorbs less water than wool.", "Two layers of any material absorb more water than one layer.", "Using two layers of cotton instead of one made it absorb more water."], a: 3, why: "W and X differ only in the number of layers, so this comparison is fair and 38 ml is more than 20 ml. Wool (3 layers) is never compared with another material using the same number of layers, and only cotton was tested with both 1 and 2 layers.", lvl: 4 },
    { q: "Study the classification key. Which groups would a mushroom and a steel paper clip coated in plastic go into?", fig: { type: "flow", root: "Things", node: { q: "Is it living?", yes: { q: "Makes its own food?", yes: "A", no: "B" }, no: { q: "Attracted by a magnet?", yes: "C", no: "D" } } }, o: ["Mushroom: A; paper clip: C", "Mushroom: B; paper clip: C", "Mushroom: B; paper clip: D", "Mushroom: A; paper clip: D"], a: 1, why: "A mushroom is living but is a fungus, so it cannot make its own food (B). The paper clip is non-living, and the steel inside is still attracted by a magnet through the thin plastic coating (C).", lvl: 4 },
    { q: "Hui Min placed each of three magnets at the 0 cm mark of a ruler. She slowly slid a steel paper clip along the ruler towards the magnet and recorded the distance at which the paper clip first moved towards the magnet. Which statement about her experiment is correct?", o: ["The variable measured is the distance at which the clip first moves; the shortest distance shows the strongest magnet.", "The variable measured is the number of paper clips attracted by each magnet along the ruler.", "The variable measured is the distance at which the clip first moves; the longest distance shows the strongest magnet.", "She must use a different paper clip for each magnet so that each magnet gets a fresh clip."], a: 2, why: "She measures a distance, not a number of paper clips, and a stronger magnet can attract the clip from further away. Using a different paper clip would add a second changed variable, so the same clip should be used.", lvl: 4 },
    { q: "Omar measured how many steel paper clips a magnet could attract from different distances. Study the graph. What is the best estimate of the number of paper clips attracted from 2.5 cm?", fig: { type: "line", title: "Paper clips attracted at different distances", xl: "Distance from magnet (cm)", yl: "Number of paper clips", pts: [["1", 10], ["2", 7], ["3", 4], ["4", 2], ["5", 1]] }, o: ["Fewer than 4", "Between 4 and 7", "Between 7 and 10", "More than 10"], a: 1, why: "2.5 cm is between 2 cm (7 paper clips) and 3 cm (4 paper clips), and the number falls as the distance increases, so the value must be between 4 and 7. More than 7 would mean the magnet was stronger further away, which goes against the trend.", lvl: 4 },
    { q: "Three identical slices of bread were each given 5 drops of water and kept in different places. Study the graph. Which statement is NOT supported by the data?", fig: { type: "bar", title: "Days before mould appeared", xl: "Place", yl: "Number of days", bars: [["Refrigerator", 12], ["Air-con room", 6], ["Kitchen", 4]] }, o: ["Bread in the refrigerator took the longest time for mould to appear.", "Bread in the refrigerator took 3 times as long as bread in the kitchen for mould to appear.", "Mould appeared 2 days later in the air-con room than in the kitchen.", "Keeping bread in a refrigerator stops mould from growing on it."], a: 3, why: "Mould still appeared on the refrigerated bread after 12 days, so the refrigerator only slowed mould growth, it did not stop it. The other statements match the data: 12 is the most, 12 = 3 × 4, and 6 − 4 = 2.", lvl: 4 },
    { q: "Ben wants to find out if the dampness of oats affects how many mealworm larvae become pupae in 3 weeks. Study his three set-ups. None of the pairs is a fair test. Which set-up D should he add so that he can carry out a fair test?", fig: { type: "setups", items: [{ label: "A", icon: "box", lines: ["10 larvae", "Dry oats", "Dark cupboard"] }, { label: "B", icon: "box", lines: ["10 larvae", "Damp oats", "Near a window"] }, { label: "C", icon: "box", lines: ["5 larvae", "Damp oats", "Dark cupboard"] }] }, o: ["10 larvae, damp oats, dark cupboard", "5 larvae, dry oats, near a window", "10 larvae, damp oats, near a window", "5 larvae, damp oats, near a window"], a: 0, why: "This D differs from A only in the dampness of the oats, so A and D are a fair pair. The second option differs from every set-up in two things, the third is a copy of B, and the fourth has damp oats so it can never be compared with a dry set-up.", lvl: 4 },
    { q: "Lina brought the N pole of magnet A near rod X and they attracted, as shown. She then brought the S pole of magnet A near the same end of rod X, and they also attracted. Which conclusion is certain?", fig: { type: "magnets", items: [{ label: "A", poles: "SN" }, { label: "X", kind: "bar", text: "Rod X" }], between: ["attract"] }, o: ["Rod X is a magnet, since it attracted magnet A.", "Rod X is made of iron, a magnetic material.", "Rod X is a magnetic material, but not a magnet.", "Rod X is made of aluminium, a type of metal."], a: 2, why: "If X were a magnet, the same end of X would repel one of the two poles, but it attracted both, so X is a magnetic material and not a magnet. It could be iron, steel or nickel, so ‘iron’ is not certain, and aluminium is not attracted at all.", lvl: 4 },
    { q: "Four same-sized slices of bread were kept in the same cupboard for 5 days. P and Q were white bread; R and S were wholemeal bread. Q and R were made damp; P and S were kept dry. Study the graph. Which statements are fairly supported by the data?\nA: Damp white bread grew more mould spots than dry white bread.\nB: Damp wholemeal bread grew more mould spots than damp white bread.\nC: Dry bread does not grow any mould spots.", fig: { type: "bar", title: "Mould spots after 5 days", xl: "Slice of bread", yl: "Number of mould spots", bars: [["P", 0], ["Q", 12], ["R", 18], ["S", 1]] }, o: ["A only", "A and B only", "A and C only", "A, B and C"], a: 1, why: "A compares P and Q (only water differs: 0 vs 12) and B compares Q and R (only type of bread differs: 12 vs 18), so both are fair and supported. C is wrong because dry slice S grew 1 mould spot.", lvl: 4 },
    { q: "Farah kept 20 mealworm larvae in a box of oats and counted how many had turned into pupae by the end of each week. Study the graph. Which statement is correct?", fig: { type: "line", title: "Larvae that had turned into pupae", xl: "Week", yl: "Number turned into pupae", pts: [["0", 0], ["1", 0], ["2", 4], ["3", 12], ["4", 18], ["5", 20]] }, o: ["No more larvae turned into pupae after Week 4 at all.", "By Week 2, half of the 20 larvae had already turned into pupae.", "The same number of larvae turned into pupae every week.", "The most larvae turned into pupae between Week 2 and Week 3."], a: 3, why: "The weekly increases are 0, 4, 8, 6 and 2, so the biggest jump (8) was from Week 2 to Week 3. Two more larvae changed after Week 4 (18 to 20), and only 4 of 20 had changed by Week 2.", lvl: 4 },
    { q: "Mr Tan needs a material to wipe up a large spill of kopi at his stall many times a day. He tested four same-sized pieces. Study the table. Which material is the MOST suitable?", tbl: [["Material", "Kopi absorbed (ml)", "When wet"], ["Sponge", "40", "Stays in one piece"], ["Paper towel", "45", "Tears easily"], ["Cotton cloth", "25", "Stays in one piece"], ["Plastic sheet", "0", "Stays in one piece"]], o: ["Sponge", "Paper towel", "Cotton cloth", "Plastic sheet"], a: 0, why: "It must absorb a lot AND stay strong when wet to be used many times. The paper towel absorbs slightly more but tears easily when wet, so the sponge (40 ml, stays in one piece) is best; cotton absorbs less and plastic absorbs nothing.", lvl: 4 }
  ],
  oex: [
    {
      q: "Wei wanted to find out if the type of material affects how much water it absorbs. He placed each material in 100 ml of water for 1 minute, took it out and measured the water left. Study his set-ups.\n(a) State the variable measured. [1]\n(b) Which set-up makes his test unfair? Explain why. [2]\n(c) Suggest one thing Wei should do to make his results more reliable. [1]",
      fig: { type: "setups", items: [{ label: "A", icon: "beaker", lines: ["Cotton cloth", "10 cm by 10 cm", "100 ml of water"] }, { label: "B", icon: "beaker", lines: ["Paper towel", "10 cm by 10 cm", "100 ml of water"] }, { label: "C", icon: "beaker", lines: ["Sponge", "5 cm by 5 cm", "100 ml of water"] }] },
      marks: 4,
      kw: [["water left", "volume of water", "amount of water"], ["sponge", "set up c", "setup c"], ["size", "smaller", "bigger", "larger"], ["repeat", "more times", "again", "a few times"]],
      model: "(a) The volume of water left in the beaker after the material is taken out. (b) Set-up C (the sponge). Only the type of material should be different, but the size of the sponge is also different: it is smaller (5 cm by 5 cm) than the others (10 cm by 10 cm). So Wei cannot tell whether the material or the size caused the difference. (c) Repeat the experiment a few times and check that the results are similar."
    },
    {
      q: "Aisha measured how many steel paper clips one bar magnet could attract from different distances. Study the graph.\n(a) Describe the relationship between the distance and the number of paper clips attracted. [1]\n(b) Predict the number of paper clips the magnet would attract from 7 cm. [1]\n(c) Aisha concluded, ‘Magnets cannot attract paper clips from more than 6 cm away.’ Explain why her conclusion is not acceptable. [1]",
      fig: { type: "line", title: "Paper clips attracted by one magnet", xl: "Distance (cm)", yl: "Number of paper clips", pts: [["1", 14], ["2", 10], ["3", 6], ["4", 3], ["5", 1], ["6", 0]] },
      marks: 3,
      kw: [["decrease", "fewer", "less"], ["0", "zero", "none", "no paper clips"], ["one magnet", "only one", "other magnets", "stronger magnet"]],
      model: "(a) As the distance increased from 1 cm to 6 cm, the number of paper clips attracted decreased from 14 to 0. (b) 0 paper clips. (c) She tested only one magnet. Other magnets, such as a stronger magnet, might attract paper clips from more than 6 cm away, so she cannot conclude this about all magnets."
    },
    {
      q: "Mdm Rosli wants to make a cover to keep her motorcycle seat dry when it rains. She poured the same amount of water onto same-sized pieces of four materials and measured the water that passed through each. Study the graph.\n(a) Which material should she choose? Explain using Claim, Evidence and Reasoning. [3]\n(b) Suggest one other property of the material she should test before making the cover, and say why it is needed. [1]",
      fig: { type: "bar", title: "Water that passed through", xl: "Material", yl: "Water passed through (ml)", bars: [["Canvas", 12], ["Vinyl", 0], ["Nylon", 3], ["Cotton", 30]] },
      marks: 4,
      kw: [["vinyl"], ["0 ml", "no water", "none of the water"], ["waterproof", "does not let water", "doesn’t let water"], ["strong", "tear", "flexible"]],
      model: "(a) Vinyl. 0 ml of water passed through vinyl, less than through nylon (3 ml), canvas (12 ml) and cotton (30 ml), so no water passed through it. This shows vinyl is waterproof, so it will keep the seat dry in the rain. (b) She should test if it is strong, so that the cover does not tear easily in wind and rain."
    },
    {
      q: "Rui carried out an experiment on mould. Study the table.\n(a) Which two set-ups should be compared to find out if water affects how soon mould appears? [1]\n(b) Rui said, ‘P and R show that temperature affects how soon mould appears.’ Explain why this comparison is not fair. [1]\n(c) Which two set-ups should he compare instead to find out if temperature affects how soon mould appears? [1]\n(d) What can he conclude from the two set-ups in (c)? [1]",
      tbl: [["Set-up", "Type of bread", "Water added", "Place", "Days before mould appeared"], ["P", "White", "5 drops", "Cupboard", "4"], ["Q", "White", "None", "Cupboard", "9"], ["R", "Wholemeal", "5 drops", "Refrigerator", "11"], ["S", "Wholemeal", "5 drops", "Cupboard", "3"]],
      marks: 4,
      kw: [["p and q", "q and p"], ["type of bread", "wholemeal", "white bread"], ["r and s", "s and r"], ["later", "longer", "more days", "slower"]],
      model: "(a) P and Q. (b) The type of bread is also different: P is white bread but R is wholemeal bread, so Rui cannot tell if the temperature or the type of bread caused the difference. (c) R and S. (d) Mould appeared later on the bread kept in the refrigerator (11 days) than on the bread kept in the cupboard (3 days), so the lower temperature made mould take longer to appear."
    }
  ]
};
