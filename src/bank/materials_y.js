window.BANKY = window.BANKY || {};
BANKY["materials"] = {
  lessons: [
    {
      h: "Explaining a use: property + how it helps",
      concept: "A full-mark answer does two things: it names the property of the material, and it says how that property helps the object do its job. ‘Rubber is waterproof’ is only half an answer; ‘Rubber is waterproof, so water cannot pass through and the feet stay dry’ is complete. When a question says ‘explain’, always link the property to the use.",
      example: {
        q: "Rain boots are made of rubber. Explain why rubber is a suitable material for rain boots.",
        marks: 2,
        think: [
          "Step 1: Think about the job. Rain boots must keep the feet dry and let the person walk comfortably.",
          "Step 2: Match a property to each job. Keeping feet dry needs a waterproof material; walking needs a material that can bend, so it must be flexible.",
          "Step 3: Link each property to the job with ‘so’. Do not just list properties, and do not write vague words like ‘rubber is good’ or ‘rubber is useful’."
        ],
        answer: "Rubber is waterproof, so it does not let water pass through and the feet stay dry. Rubber is also flexible, so the boots can bend when the person walks without cracking."
      },
      tip: "Use the ‘property, so …’ pattern: name the property, then say what it lets the object do.",
      try: {
        q: "A food-delivery rider wears a raincoat made of plastic. Which answer would get FULL marks for explaining why plastic is used?",
        o: ["Plastic is waterproof, and it is also light and cheap to buy.", "Plastic is waterproof, so rain cannot pass through and the rider stays dry.", "Plastic is a good material for making raincoats for delivery riders.", "Plastic keeps the rider dry on rainy days because it is made of plastic."],
        a: 1,
        why: "Only this answer names the property (waterproof) AND says how it helps (rain cannot pass through, so the rider stays dry). The first answer gives the property (plus light and cheap) but no link to the use, and the other two give no property at all."
      }
    },
    {
      h: "Scratch-test chains: ordering hardness",
      concept: "If material A leaves a scratch on material B, then A is harder than B. You can join results into a chain: if A scratches B and B scratches C, then A is harder than C, even if A and C were never tested together. You can only conclude an order for materials that are linked by the results.",
      example: {
        q: "Four materials P, Q, R and S were used to scratch one another. The table shows the results. (a) Arrange the materials from the hardest to the softest. (b) Which material is the most suitable for the tip of a tool that must scratch the other three?",
        tbl: [["Material used to scratch", "Materials it left a mark on"], ["P", "Q and R"], ["Q", "R"], ["R", "none"], ["S", "P, Q and R"]],
        marks: 2,
        think: [
          "Step 1: Find the material that scratched everything else. S scratched P, Q and R, so S is the hardest.",
          "Step 2: Find the material that scratched nothing. R scratched none, so R is the softest.",
          "Step 3: Place the rest. P scratched Q, so P is harder than Q. The order is S, P, Q, R.",
          "Step 4: A tool tip that scratches the others must be harder than all of them, so choose the hardest material."
        ],
        answer: "(a) S, P, Q, R (hardest to softest). (b) S, because it is the hardest material, so it can scratch P, Q and R."
      },
      tip: "Harder scratches softer, never the other way round. Write ‘A is harder than B because A left a scratch on B.’",
      try: {
        q: "In a scratch test, W scratched X, Y scratched W, and X scratched Z. Which material is the most suitable for making a tool that can scratch all the other three?",
        o: ["W", "X", "Y", "Z"],
        a: 2,
        why: "Joining the results gives Y harder than W, W harder than X, and X harder than Z, so Y is the hardest. W is tempting because it scratched X, but Y scratched W, so W is not the hardest."
      }
    },
    {
      h: "Fair tests: which set-ups to compare",
      concept: "To find out whether one variable affects a result, compare two set-ups where ONLY that variable is different and every other variable is the same. First name the variable in the question (e.g. the type of material, the size of the sponge). Then check every line of each set-up: if anything else differs, the pair is not fair.",
      example: {
        q: "Mei wants to find out whether the type of material affects how much water it absorbs. She prepared the set-ups shown. (a) Which two set-ups should she compare? (b) Explain your answer.",
        fig: { type: "setups", items: [
          { label: "A", icon: "beaker", lines: ["Cotton cloth", "10 cm x 10 cm", "100 ml water"] },
          { label: "B", icon: "beaker", lines: ["Cotton cloth", "20 cm x 20 cm", "100 ml water"] },
          { label: "C", icon: "beaker", lines: ["Paper towel", "10 cm x 10 cm", "100 ml water"] },
          { label: "D", icon: "beaker", lines: ["Paper towel", "10 cm x 10 cm", "50 ml water"] }
        ] },
        marks: 2,
        think: [
          "Step 1: Name the variable to change: the type of material. So the two set-ups must use different materials.",
          "Step 2: List the variables to keep the same: the size of the material and the amount of water.",
          "Step 3: Check each pair. A and B are the same material (not useful). C and D use different amounts of water. A and C differ only in the type of material."
        ],
        answer: "(a) A and C. (b) Only the type of material is different in A and C. The size of the material (10 cm x 10 cm) and the amount of water (100 ml) are the same, so the test is fair."
      },
      tip: "Always name the variable in full: ‘the type of material’, not just ‘material’.",
      try: {
        q: "Jun wants to find out whether the SIZE of a sponge affects how much water it absorbs. Study the set-ups. Which two should he compare?",
        fig: { type: "setups", items: [
          { label: "P", icon: "beaker", lines: ["Sponge", "5 cm x 5 cm", "2 cm thick", "200 ml water"] },
          { label: "Q", icon: "beaker", lines: ["Sponge", "10 cm x 10 cm", "2 cm thick", "200 ml water"] },
          { label: "R", icon: "beaker", lines: ["Cotton cloth", "10 cm x 10 cm", "2 cm thick", "200 ml water"] },
          { label: "S", icon: "beaker", lines: ["Sponge", "10 cm x 10 cm", "2 cm thick", "100 ml water"] }
        ] },
        o: ["P and Q", "Q and R", "Q and S", "P and S"],
        a: 0,
        why: "P and Q are both sponge, the same thickness and have the same amount of water; only the size is different. Q and R change the type of material, and P and S change both the size and the amount of water, so they are not fair."
      }
    },
    {
      h: "Read the axis before choosing the best bar",
      concept: "A graph can measure the result in different ways. If it shows ‘water absorbed’, the tallest bar is the most absorbent. If it shows ‘water LEFT in the beaker’ or ‘water that dripped through’, the SHORTEST bar is the best absorber or the most waterproof. Read the y-axis label first, then decide whether you want the tallest or the shortest bar.",
      example: {
        q: "Four cloths of the same size were each dipped into a beaker containing 100 ml of water for 1 minute and then taken out. The graph shows the water left in each beaker. Which cloth is the most suitable for a kitchen towel? Explain using the graph.",
        fig: { type: "bar", xl: "Cloth", yl: "Water left in beaker (ml)", bars: [["A", 70], ["B", 20], ["C", 55], ["D", 90]] },
        marks: 2,
        think: [
          "Step 1: Read the y-axis: it is water LEFT, not water absorbed.",
          "Step 2: Less water left means more water was soaked up by the cloth. So the shortest bar wins.",
          "Step 3: B left only 20 ml, so it absorbed 100 - 20 = 80 ml, the most of all four.",
          "Step 4: A kitchen towel must soak up spills, so choose the most absorbent cloth and quote the number as evidence."
        ],
        answer: "Cloth B. It left the least water in the beaker (20 ml), so it absorbed the most water (80 ml). A kitchen towel must absorb spilt water well."
      },
      tip: "Before choosing, say to yourself: ‘Do I want the tallest bar or the shortest bar for THIS graph?’",
      try: {
        q: "Four materials of the same size were stretched over four cups, and 50 ml of water was poured onto each. The graph shows the water that dripped into each cup. Which material is the most suitable for making a tent?",
        fig: { type: "bar", xl: "Material", yl: "Water that dripped into cup (ml)", bars: [["P", 30], ["Q", 0], ["R", 12], ["S", 45]] },
        o: ["S", "R", "Q", "P"],
        a: 2,
        why: "A tent must be waterproof, so we want the least water dripping through. No water passed through Q. S has the tallest bar, but that means the MOST water passed through, so S is the least waterproof."
      }
    },
    {
      h: "The best material must pass EVERY requirement",
      concept: "When an object has several jobs, list every property it needs, then cross out any material that fails even one. The ‘best’ material is the one that passes all the requirements, not the one that is best at just one of them. Many wrong options are materials that pass two requirements but fail the third.",
      example: {
        q: "A cover for a clock at a school playground must let children see the clock hands, keep rain out, and not break easily when hit by a ball. Study the table. Which material is the most suitable? Explain.",
        tbl: [["Material", "Transparent?", "Waterproof?", "Breaks easily when hit?"], ["W", "Yes", "Yes", "Yes"], ["X", "No", "Yes", "No"], ["Y", "Yes", "Yes", "No"], ["Z", "Yes", "No", "No"]],
        marks: 2,
        think: [
          "Step 1: List the three needs: transparent (see the hands), waterproof (keep rain out), does not break easily.",
          "Step 2: Cross out W, because it breaks easily. Cross out X, because it is not transparent. Cross out Z, because it is not waterproof.",
          "Step 3: Only Y passes all three. In the answer, link each property to its job."
        ],
        answer: "Y. It is transparent, so children can see the clock hands; it is waterproof, so rain is kept out; and it does not break easily when hit by a ball."
      },
      tip: "Tick-and-cross every row against every need; one cross means that material is out.",
      try: {
        q: "A garden hose must bend easily, carry water without leaking, and not tear when it is pulled. Study the table. Which material is the most suitable?",
        tbl: [["Material", "Flexible?", "Waterproof?", "Tears easily?"], ["A", "Yes", "No", "No"], ["B", "No", "Yes", "No"], ["C", "Yes", "Yes", "Yes"], ["D", "Yes", "Yes", "No"]],
        o: ["A", "B", "C", "D"],
        a: 3,
        why: "D is flexible, waterproof and does not tear easily, so it passes all three needs. C is tempting because it is flexible and waterproof, but it tears easily; A leaks and B cannot bend."
      }
    }
  ],
  expert: [
    {
      q: "Strips of four types of paper were tested by adding 10 g weights one at a time until each strip tore. All strips were the same length and thickness. Papers A, C and D were 2 cm wide, but paper B was 4 cm wide. Study the graph. Which conclusion can be made FOR SURE?",
      fig: { type: "bar", xl: "Paper", yl: "Number of weights held before tearing", bars: [["A", 6], ["B", 7], ["C", 8], ["D", 4]] },
      o: ["Paper B is stronger than paper A.", "Paper D is the weakest of the four papers.", "Paper C is stronger than papers A and D.", "Paper A is stronger than paper B."],
      a: 2,
      why: "Only A, C and D were tested fairly (same width), and C held more weights than A and D. B was twice as wide, so B cannot be compared fairly with any of the others: we cannot say whether B is stronger or weaker than A, or whether D is the weakest of all four.",
      lvl: 4
    },
    {
      q: "In a scratch test, the results were: W scratched X; X scratched Y; X scratched Z. Y and Z were never tested against each other. Which statement CANNOT be concluded?",
      tbl: [["Material used to scratch", "Materials it left a mark on"], ["W", "X"], ["X", "Y and Z"]],
      o: ["W is harder than Y.", "Z cannot scratch W.", "Y is harder than Z.", "X is harder than Z."],
      a: 2,
      why: "W is harder than X, and X is harder than both Y and Z, so W is harder than Y and Z, and Z (being softer) cannot scratch W. But Y and Z are both only linked through X, so the results tell us nothing about which of Y and Z is harder.",
      lvl: 4
    },
    {
      q: "Study the classification chart. Which pair of objects could be Q and S?",
      fig: { type: "flow", root: "Materials", node: { q: "Waterproof?", yes: { q: "Transparent?", yes: "P", no: "Q" }, no: { q: "Flexible?", yes: "R", no: "S" } } },
      o: ["Q: rubber glove; S: cotton towel", "Q: frosted glass; S: unglazed clay pot", "Q: clear glass; S: paper bag", "Q: steel spoon; S: kitchen sponge"],
      a: 1,
      why: "Frosted glass is waterproof but only translucent, not transparent, so it goes to Q; unglazed clay soaks up water and cannot bend, so it goes to S. The cotton towel, paper and sponge are all flexible (R), and clear glass is transparent (P), so each of the other options has a wrong object.",
      lvl: 4
    },
    {
      q: "Study the Venn diagram. Tracing paper lets some light pass through, and it can bend without breaking. Where should tracing paper be placed?",
      fig: { type: "venn", a: "Transparent", b: "Flexible", onlyA: ["clear glass"], both: ["cling wrap", "clear plastic bag"], onlyB: ["rubber band", "cotton cloth"], neither: ["wooden block", "ceramic tile"] },
      o: ["In ‘Flexible’ only", "In ‘Transparent’ only", "In both circles", "Outside both circles"],
      a: 0,
      why: "Tracing paper is translucent: it lets only SOME light through, so it is not transparent and does not belong in the ‘Transparent’ circle. It is flexible, so it goes in the ‘Flexible’ only region.",
      lvl: 4
    },
    {
      q: "Strips of four materials of the same size were clamped to the edge of a table, and the same weight was hung at the free end of each. The graph shows how far each end bent down. Strip C snapped as soon as the weight was hung, so 0 cm was recorded for it. Which material is the most suitable for a ruler that must stay straight and not break?",
      fig: { type: "bar", xl: "Material", yl: "Distance the end bent down (cm)", bars: [["A", 2], ["B", 9], ["C", 0], ["D", 5]] },
      o: ["Material C", "Material A", "Material D", "Material B"],
      a: 1,
      why: "C’s 0 cm is not because it stayed straight; it snapped, so it fails ‘not break’. Of the strips that did not break, A bent the least, so it stays the straightest; B bent the most.",
      lvl: 4
    },
    {
      q: "Jun wants to find out whether the THICKNESS of paper affects its strength. He can make a strip thicker by using more layers. Study the set-ups. Which two should he compare?",
      fig: { type: "setups", items: [
        { label: "A", icon: "box", lines: ["Newspaper, 1 layer", "5 cm wide", "20 cm long"] },
        { label: "B", icon: "box", lines: ["Newspaper, 2 layers", "5 cm wide", "20 cm long"] },
        { label: "C", icon: "box", lines: ["Drawing paper, 1 layer", "5 cm wide", "20 cm long"] },
        { label: "D", icon: "box", lines: ["Newspaper, 2 layers", "10 cm wide", "20 cm long"] }
      ] },
      o: ["A and C", "B and D", "A and D", "A and B"],
      a: 3,
      why: "A and B are the same type of paper, width and length, and differ only in the number of layers (thickness). B and D differ only in width, so they test width, not thickness; A and C test the type of paper; A and D change two things.",
      lvl: 4
    },
    {
      q: "Ben thinks that whether an object floats depends only on its mass. He tested four objects in the same basin of water. Which two objects give the FAIREST comparison to show that he is wrong?",
      tbl: [["Object", "Mass (g)", "Float or sink?"], ["Wooden block", "300", "Floats"], ["Steel paper clip", "1", "Sinks"], ["Cork", "5", "Floats"], ["Glass marble", "5", "Sinks"]],
      o: ["Wooden block and steel paper clip", "Cork and glass marble", "Wooden block and cork", "Steel paper clip and glass marble"],
      a: 1,
      why: "The cork and the glass marble have the SAME mass (5 g) but one floats and one sinks, so mass alone cannot decide it; the material is what differs. The wooden block and paper clip also disagree with Ben, but they differ in both mass and material, so it is not as fair a comparison.",
      lvl: 4
    },
    {
      q: "Which of these statements are correct?\nA: A hard material is always strong.\nB: Glass is hard but not flexible.\nC: A flexible material can bend without breaking.\nD: Rubber is both waterproof and flexible.",
      o: ["A, B, C and D", "A, B and C only", "B and C only", "B, C and D only"],
      a: 3,
      why: "A is wrong: glass and ceramic are hard (difficult to scratch) but they break easily when dropped, so hard does not mean strong. B, C and D are all correct.",
      lvl: 4
    },
    {
      q: "A reusable shopping bag for carrying wet fish from the market must be waterproof and strong. Four materials of the same size were tested. Which material is the most suitable?",
      tbl: [["Material", "Water absorbed (ml)", "Weights held before tearing"], ["W", "0", "2"], ["X", "30", "12"], ["Y", "0", "10"], ["Z", "5", "15"]],
      o: ["Y", "Z", "X", "W"],
      a: 0,
      why: "Only W and Y absorbed no water, so only they are waterproof. Of these two, Y held far more weights, so Y is strong enough. Z is the strongest, but it absorbed some water, so it is not waterproof.",
      lvl: 4
    },
    {
      q: "Four cloths of the same size were each dipped into a beaker containing exactly 100 ml of water for 1 minute and then taken out. The graph shows the water left in each beaker. Which conclusion is correct?",
      fig: { type: "bar", xl: "Cloth", yl: "Water left in beaker (ml)", bars: [["A", 60], ["B", 35], ["C", 80], ["D", 110]] },
      o: ["D’s reading must be a mistake, as it is more than 100 ml; of the rest, B absorbed the most.", "Cloth D absorbed the most water because its beaker has the tallest bar.", "Cloth C absorbed the most water because it has the tallest bar among A, B and C.", "Cloth D is waterproof because more water was left in its beaker than the others."],
      a: 0,
      why: "A cloth cannot add water to a beaker, so 110 ml left from 100 ml is impossible and must be a measuring mistake that should be repeated. For the rest, less water left means more absorbed, so B (only 35 ml left) absorbed the most; the tallest bar here means the LEAST absorbed.",
      lvl: 4
    },
    {
      q: "Which of these objects are made of a material that is flexible, waterproof AND opaque?\nA: rubber glove\nB: black plastic rubbish bag\nC: aluminium foil\nD: cling wrap",
      o: ["A, B, C and D", "B, C and D only", "A and B only", "A, B and C only"],
      a: 3,
      why: "Rubber, black plastic and aluminium foil can all bend without breaking, keep water out and block light. Cling wrap is flexible and waterproof but transparent, so it is not opaque. Aluminium foil is the surprising one: it is a metal, yet a thin sheet is flexible.",
      lvl: 4
    },
    {
      q: "Mei found that material M left a scratch on a piece of glass. When she dropped M on the floor, it broke into pieces. Which statement is correct?",
      o: ["M is softer than glass.", "M is harder than glass, so it must also be strong.", "M is flexible, because it was not scratched by the glass.", "M is harder than glass, but a hard material can still break easily."],
      a: 3,
      why: "Because M scratched the glass, M is harder than glass. Breaking when dropped shows M is not strong; hardness and strength are different properties, just like glass itself, which is hard but breaks easily.",
      lvl: 4
    }
  ],
  oex: [
    {
      q: "Four towels, A, B, C and D, of the same size were each dipped into a beaker containing 100 ml of water for 1 minute and then taken out. The graph shows the water left in each beaker. (a) Which towel is the most absorbent? (b) Use the graph to explain your answer in (a). (c) How much water did that towel absorb? (d) State one variable that must be kept the same in this experiment.",
      fig: { type: "bar", xl: "Towel", yl: "Water left in beaker (ml)", bars: [["A", 55], ["B", 70], ["C", 20], ["D", 45]] },
      marks: 4,
      kw: [["towel c", "c is", "c left", "c soaked", "c absorbed", "c because"], ["least water", "smallest amount of water", "shortest bar", "only 20 ml"], ["80 ml", "80ml", "80"], ["same size", "same amount of water", "same volume of water", "same time", "same length of time", "same type of beaker"]],
      model: "(a) Towel C. (b) Towel C left the least water in the beaker (only 20 ml), so it soaked up the most water. (c) It absorbed 100 - 20 = 80 ml of water. (d) The same amount of water (100 ml) in each beaker, or the same size of towel, or the same time in the water."
    },
    {
      q: "Ravi tested three types of string of the same length and thickness. He added 100 g weights one at a time until each string snapped. He did the test three times for each string. (a) Which string is the strongest? (b) Which string has a result that is most likely a mistake? (c) What should Ravi do about that result?",
      tbl: [["String", "Test 1", "Test 2", "Test 3"], ["Cotton", "5", "5", "6"], ["Nylon", "12", "11", "12"], ["Jute", "8", "3", "8"]],
      marks: 3,
      kw: [["nylon"], ["jute"], ["repeat", "again", "test it one more time"]],
      model: "(a) Nylon, because it held the most weights (11 to 12) before snapping. (b) Jute. In Test 2 it held only 3 weights, which is very different from its other two results of 8. (c) He should repeat the test for the jute string to check the result."
    },
    {
      q: "Ben put a wooden block and a steel block into a basin of water, as shown. (a) What variable did Ben change? (b) Predict which block will sink. (c) Why did Ben use blocks of the same size?",
      fig: { type: "setups", items: [
        { label: "A", icon: "dish", lines: ["Wooden block", "5 cm x 5 cm x 5 cm", "Basin of tap water"] },
        { label: "B", icon: "dish", lines: ["Steel block", "5 cm x 5 cm x 5 cm", "Basin of tap water"] }
      ] },
      marks: 3,
      kw: [["type of material", "kind of material"], ["steel"], ["fair", "only the type of material", "only the material"]],
      model: "(a) The type of material the block is made of. (b) The steel block will sink; the wooden block will float. (c) To make it a fair test, so that only the type of material is different and any difference in the result is caused by the material."
    },
    {
      q: "Uncle Lim wants a cover for his chicken rice display cabinet at a hawker centre. Customers must see the food clearly, and the cover must not break easily when knocked. Study the table. (a) Which material is the most suitable? (b) Explain why, using a property of the material. (c) Why is glass NOT chosen, even though it is transparent? (d) Why is frosted plastic NOT chosen, even though it does not break easily?",
      tbl: [["Material", "How much light passes through", "Breaks easily when knocked?"], ["Glass", "Most light", "Yes"], ["Clear plastic", "Most light", "No"], ["Frosted plastic", "Some light", "No"], ["Steel sheet", "No light", "No"]],
      marks: 4,
      kw: [["clear plastic"], ["transparent", "see the food", "see through"], ["breaks easily", "shatter", "crack", "can break", "will break", "easily broken"], ["translucent", "blurred", "not clearly", "cannot see clearly"]],
      model: "(a) Clear plastic. (b) It is transparent, so customers can see the food clearly, and it does not break easily when knocked. (c) Glass breaks easily when knocked, so it could shatter. (d) Frosted plastic is translucent: it lets only some light through, so the food would look blurred and customers cannot see it clearly."
    }
  ]
};
