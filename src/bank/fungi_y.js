window.BANKY = window.BANKY || {};
BANKY["fungi"] = {
  lessons: [
    {
      h: "Why fungi are not plants: the right reason",
      concept: "Fungi are not plants because they cannot make their own food and they have no green leaves; they feed on dead or decaying matter or on other living things. ‘Reproduces by spores’ is NOT a difference, because ferns and mosses are plants that also reproduce by spores. Where a fungus grows (on soil, on a tree) is not a reason either.",
      example: {
        q: "Mei says, ‘A mushroom is a plant because it grows out of the soil and reproduces by spores, just like a fern.’ Explain why Mei is wrong.",
        marks: 2,
        think: [
          "Step 1: Check each of Mei’s reasons. Growing out of the soil is about where it lives, not a characteristic of plants.",
          "Step 2: Reproducing by spores is true for the mushroom, but ferns (plants) do it too, so it cannot separate fungi from plants.",
          "Step 3: Give the real difference: plants make their own food, but the mushroom cannot make its own food and has no green leaves.",
          "Step 4: Finish by saying how the mushroom gets its food: it feeds on dead or decaying matter."
        ],
        answer: "Mei is wrong. Ferns are plants that also reproduce by spores, so spores do not show it is a plant. The mushroom has no green leaves and cannot make its own food; it feeds on dead or decaying matter, so it is a fungus."
      },
      tip: "Never use ‘reproduces by spores’ to separate fungi from plants; use ‘cannot make its own food’.",
      try: {
        q: "A bracket fungus grows on the trunk of a tree at MacRitchie Reservoir. Which is a correct reason why it is NOT a plant?",
        o: ["It grows on a tree trunk.", "It reproduces by spores.", "It cannot make its own food.", "It is brown in colour."],
        a: 2,
        why: "Plants make their own food but fungi cannot. Ferns and mosses also reproduce by spores, and where it grows or its colour does not decide its group."
      }
    },
    {
      h: "Choosing set-ups for a fair test",
      concept: "To test one variable, compare two set-ups that differ in ONLY that variable and are the same in everything else. List the conditions of every set-up first, then look for the pair with exactly one difference. If two things are different, we cannot tell which one caused the result, so it is not a fair test.",
      example: {
        q: "Study the set-ups. (a) Which two set-ups should be compared to find out if temperature affects the growth of mould? (b) Explain why set-ups B and D cannot be used to find this out.",
        fig: { type: "setups", items: [{ label: "A", icon: "dish", lines: ["Moist bread", "Open dish", "30 °C"] }, { label: "B", icon: "dish", lines: ["Dry bread", "Open dish", "30 °C"] }, { label: "C", icon: "dish", lines: ["Moist bread", "Open dish", "5 °C"] }, { label: "D", icon: "box", lines: ["Dry bread", "Airtight box", "5 °C"] }] },
        marks: 2,
        think: [
          "Step 1: Write down the three conditions of each set-up: bread (moist or dry), container, temperature.",
          "Step 2: Find the pair where ONLY the temperature is different. A and C are both moist bread in an open dish; only 30 °C and 5 °C differ.",
          "Step 3: For (b), count the differences between B and D: the temperature AND the container are both different.",
          "Step 4: Explain why that matters: we would not know which change caused any difference in mould."
        ],
        answer: "(a) A and C. (b) B and D differ in temperature and also in the container (open dish or airtight box), so two variables are changed. We cannot tell which one caused any difference in the amount of mould."
      },
      tip: "Tick through every condition line by line; the correct pair has exactly ONE line that is different.",
      try: {
        q: "Mdm Lim wants to find out if salt affects how fast mould grows on cooked rice. Study the set-ups. Which two set-ups should she compare?",
        fig: { type: "setups", items: [{ label: "P", icon: "pot", lines: ["Cooked rice", "Salt added", "Covered bowl", "30 °C"] }, { label: "Q", icon: "pot", lines: ["Cooked rice", "No salt", "Covered bowl", "30 °C"] }, { label: "R", icon: "pot", lines: ["Cooked rice", "No salt", "Open bowl", "30 °C"] }, { label: "S", icon: "pot", lines: ["Cooked rice", "Salt added", "Open bowl", "5 °C"] }] },
        o: ["P and Q", "Q and R", "P and S", "R and S"],
        a: 0,
        why: "P and Q differ only in salt. Q and R differ in the cover, not salt; P and S differ in the cover and temperature; R and S differ in salt AND temperature, so they are not fair."
      }
    },
    {
      h: "Reading mould-growth line graphs",
      concept: "The increase between two days is the later reading minus the earlier reading. The steepest part of the line is where the mould grew fastest; this is not always where the line is highest. A flat line means the area of mould is not increasing, for example because the mould has already covered the whole slice.",
      example: {
        q: "Study the line graph of mould on an 18 cm² slice of bread. (a) Between which two days did the area of mould increase the MOST? (b) Suggest why the area of mould did not increase from Day 5 to Day 6.",
        fig: { type: "line", title: "Mould on an 18 cm² slice", xl: "Day", yl: "Area of mould (cm²)", pts: [["0", 0], ["1", 1], ["2", 3], ["3", 8], ["4", 14], ["5", 18], ["6", 18]] },
        marks: 2,
        think: [
          "Step 1: Do not just pick the highest point. Work out each day’s increase: 1, 2, 5, 6, 4 and 0 cm².",
          "Step 2: The biggest increase is 6 cm², from 8 cm² on Day 3 to 14 cm² on Day 4. This is the steepest part of the line.",
          "Step 3: For (b), notice the flat line at 18 cm², which is the size of the whole slice. The mould had no more bread to spread onto."
        ],
        answer: "(a) Between Day 3 and Day 4, when the area increased by 6 cm² (from 8 cm² to 14 cm²). (b) By Day 5 the mould had already covered the whole 18 cm² slice, so there was no more bread for it to spread onto."
      },
      tip: "‘Increase’ means subtract: later reading minus earlier reading, with the unit cm².",
      try: {
        q: "Study the line graph. Which statement is correct?",
        fig: { type: "line", title: "Mould on bread", xl: "Day", yl: "Area of mould (cm²)", pts: [["0", 0], ["1", 0], ["2", 1], ["3", 4], ["4", 9], ["5", 15]] },
        o: ["The mould grew by the same amount every day.", "The area on Day 5 was 15 cm² more than on Day 2.", "Mould first appeared on Day 3.", "The mould grew fastest between Day 4 and Day 5."],
        a: 3,
        why: "From Day 4 to Day 5 the area rose by 6 cm², the biggest daily increase. The daily increases were not equal, the Day 5 reading was 14 cm² more than Day 2 (15 - 1), and mould was already seen on Day 2."
      }
    },
    {
      h: "Explaining how food is kept from spoiling",
      concept: "Each way of keeping food works by taking away a condition that mould and bacteria need. Fridges and freezers take away warmth, drying and salting take away water, and airtight containers, vacuum packs and cans keep out air and new spores or bacteria. A full-mark answer names the condition taken away AND says this slows down the growth of mould and bacteria.",
      example: {
        q: "Explain how (a) drying ikan bilis and (b) keeping kaya in the fridge help the food to keep longer.",
        marks: 2,
        think: [
          "Step 1: For each method, ask: which condition is taken away? Drying takes away water; the fridge takes away warmth.",
          "Step 2: Link it to what mould and bacteria need: they need water and warmth to grow well.",
          "Step 3: State the effect correctly: their growth is SLOWED DOWN. Do not say the fridge kills them."
        ],
        answer: "(a) Drying removes water from the ikan bilis. Mould and bacteria need water to grow, so their growth is slowed down. (b) The low temperature in the fridge slows down the growth of mould and bacteria."
      },
      tip: "Formula: method → condition removed → growth of mould and bacteria slowed down.",
      try: {
        q: "Which method is matched with the MAIN condition it takes away from mould and bacteria?",
        o: ["Salting – takes away warmth", "Vacuum packing – takes away air", "Keeping in the fridge – takes away water", "Drying – takes away air"],
        a: 1,
        why: "Vacuum packing sucks the air out before sealing. Salting and drying take away water, and the fridge takes away warmth."
      }
    },
    {
      h: "Stating relationships and checking conclusions",
      concept: "Describe a trend with ‘The higher/more the ___, the more/less the ___’, naming both variables in full. Before agreeing with a conclusion, check that it matches the data (even a small amount of mould means mould CAN grow) and that only one variable was changed. A conclusion from an unfair test or a single set-up cannot be trusted.",
      example: {
        q: "Identical slices of moist bread were kept at different temperatures for 5 days. Study the bar graph. (a) State the relationship shown. (b) Kelly says, ‘Mould cannot grow at 5 °C.’ Is she correct? Use the graph to explain.",
        fig: { type: "bar", title: "Mould after 5 days", xl: "Temperature", yl: "Area of mould (cm²)", bars: [["5 °C", 1], ["15 °C", 6], ["25 °C", 14], ["35 °C", 17]] },
        marks: 2,
        think: [
          "Step 1: Name the variable that was changed (temperature) and the one measured (area of mould).",
          "Step 2: Read the trend: as the temperature goes up, the bars get taller. Write it as ‘The higher the temperature, the larger the area of mould.’",
          "Step 3: For (b), read the 5 °C bar carefully: it is 1 cm², not 0. So mould did grow, only slowly.",
          "Step 4: Give the reason with the correct idea: cold slows down mould growth; it does not stop it completely."
        ],
        answer: "(a) The higher the temperature, the larger the area of mould after 5 days. (b) She is not correct. There was 1 cm² of mould at 5 °C, so mould can grow at 5 °C, but the cold slows down its growth."
      },
      tip: "A relationship needs BOTH variables: ‘The higher the temperature, the more mould grew’, not just ‘more mould grew’.",
      try: {
        q: "Study the set-ups. After 5 days, only the bread in A had grown mould. Lina concluded, ‘Mould needs darkness to grow.’ Which is the best comment?",
        fig: { type: "setups", items: [{ label: "A", icon: "plate", lines: ["Moist bread", "Dark cupboard", "30 °C"] }, { label: "B", icon: "plate", lines: ["Dry bread", "Sunny windowsill", "30 °C"] }] },
        o: ["She is correct because A was in the dark and B was in the light.", "She cannot conclude this, as both the water and the light were changed.", "She is correct because mould cannot grow at all in bright sunlight.", "She is wrong because mould grows best in the light, not the dark."],
        a: 1,
        why: "A and B differ in water AND light, so the lack of mould in B could be because the bread was dry. A fair test of light would change only the light."
      }
    }
  ],
  expert: [
    { q: "Study the four set-ups. Which TWO variables can NOT be tested fairly using any pair of these set-ups?", o: ["Light and temperature", "Air and water", "Water and light", "Air and temperature"], a: 0, why: "A and B differ only in air, and A and C differ only in water, so those can be tested. The only set-up in the light (D) is also at a different temperature from all the others, so light and temperature always change together.", lvl: 4, fig: { type: "setups", items: [{ label: "A", icon: "dish", lines: ["Moist bread", "Open dish", "In the dark", "30 °C"] }, { label: "B", icon: "box", lines: ["Moist bread", "Airtight box", "In the dark", "30 °C"] }, { label: "C", icon: "dish", lines: ["Dry bread", "Open dish", "In the dark", "30 °C"] }, { label: "D", icon: "dish", lines: ["Moist bread", "Open dish", "In the light", "5 °C"] }] } },
    { q: "Jia Le measured the area of mould on the SAME slice of bread every day. One reading was recorded wrongly. Study the graph. Which day’s reading is most likely wrong?", o: ["Day 1", "Day 4", "Day 5", "Day 3"], a: 3, why: "Mould on a slice of bread does not disappear, so the area should stay the same or increase each day. The Day 3 reading (3 cm²) is smaller than Day 2 (5 cm²), which is not possible. All the other readings increase.", lvl: 4, fig: { type: "line", title: "Jia Le’s results", xl: "Day", yl: "Area of mould (cm²)", pts: [["0", 0], ["1", 2], ["2", 5], ["3", 3], ["4", 12], ["5", 17]] } },
    { q: "Identical slices of bread were kept as shown in the table. Which statements are supported by the results?\nP: Mould appeared sooner on moist bread at 30 °C than at 10 °C.\nQ: At 10 °C, water did not affect the growth of mould.\nR: On dry bread, no mould appeared within 14 days at either temperature.", o: ["P only", "P and Q only", "P and R only", "Q and R only"], a: 2, why: "A and C show mould appeared after 3 days at 30 °C but 9 days at 10 °C (P). B and D had no mould after 14 days (R). Q is false: at 10 °C the moist bread (C) grew mould but the dry bread (D) did not, so water did matter.", lvl: 4, tbl: [["Set", "Temperature", "Bread", "Days before mould appeared"], ["A", "30 °C", "Moist", "3"], ["B", "30 °C", "Dry", "No mould after 14 days"], ["C", "10 °C", "Moist", "9"], ["D", "10 °C", "Dry", "No mould after 14 days"]] },
    { q: "Study the table and the bar graph of mould after 5 days. Which conclusion can be made FAIRLY from these results?", o: ["Wholemeal bread grows mould faster than white bread.", "Moist white bread grew more mould than moist wholemeal bread at 30 °C.", "C and D show that temperature affects mould growth on wholemeal bread.", "Water does not affect the growth of mould."], a: 1, why: "A and C differ only in the type of bread, and A (white) had 16 cm² while C (wholemeal) had 13 cm². C and D differ in both water and temperature, so they cannot show the effect of temperature, and A and B show that water does affect mould.", lvl: 4, fig: { type: "bar", title: "Mould after 5 days", xl: "Set-up", yl: "Area of mould (cm²)", bars: [["A", 16], ["B", 0], ["C", 13], ["D", 0]] }, tbl: [["Set-up", "Bread", "Water", "Temperature"], ["A", "White", "Moist", "30 °C"], ["B", "White", "Dry", "30 °C"], ["C", "Wholemeal", "Moist", "30 °C"], ["D", "Wholemeal", "Dry", "10 °C"]] },
    { q: "The bar graph shows how long fish kept before it spoiled. ‘Table’, ‘Fridge’ and ‘Freezer’ were fresh fish; ‘Salted, dried’ was salted, dried fish kept on the table. Which statements are supported by the graph?\nP: Keeping fresh fish in the fridge slowed down spoiling.\nQ: Salted, dried fish on the table kept longer than fresh fish in the fridge.\nR: The freezer killed all the bacteria on the fish.", o: ["P and Q only", "P only", "Q and R only", "P, Q and R"], a: 0, why: "Fish in the fridge lasted 3 days compared with 1 day on the table (P), and salted, dried fish lasted 60 days compared with 3 days (Q). The graph only shows the frozen fish lasted longest; cold slows bacteria down, and the graph cannot show that all bacteria were killed.", lvl: 4, fig: { type: "bar", title: "Days before fish spoiled", xl: "How the fish was kept", yl: "Number of days", bars: [["Table", 1], ["Fridge", 3], ["Salted, dried", 60], ["Freezer", 90]] } },
    { q: "A slice of bread was kept on a kitchen table, and on one day it was moved somewhere else. Study the line graph. What most likely happened on Day 3?", o: ["All the mould spores were killed.", "Water was added to the bread.", "The bread was moved to a warmer place.", "The bread was moved to a colder place."], a: 3, why: "Before Day 3 the area rose by up to 5 cm² a day, but after Day 3 it rose by only 1 cm² a day. The mould was still growing, so it was not killed; it slowed down, which happens when it is moved somewhere colder.", lvl: 4, fig: { type: "line", title: "Mould on bread", xl: "Day", yl: "Area of mould (cm²)", pts: [["0", 0], ["1", 1], ["2", 4], ["3", 9], ["4", 10], ["5", 11], ["6", 12]] } },
    { q: "Which statements are correct?\nA: A mushroom can be seen with our eyes, but bacteria can only be seen with a microscope.\nB: Yeast and the bacteria used to make yoghurt are both useful to people.\nC: All fungi feed on dead or decaying matter.", o: ["A only", "A and B only", "B and C only", "A, B and C"], a: 1, why: "A and B are true. C is false because some fungi feed on other living things, such as the fungus that causes athlete’s foot on living skin.", lvl: 4 },
    { q: "Study the Venn diagram. Which statement is supported by the diagram?", o: ["Mushrooms can make their own food.", "Ferns are a kind of fungus.", "Reproducing by spores cannot be used to tell fungi apart from plants.", "All living things that reproduce by spores can make their own food."], a: 2, why: "Ferns and mosses (plants) are in the ‘Reproduces by spores’ circle together with the mushroom and mould (fungi), so spores do not separate them. The mushroom and bread mould are outside ‘Can make its own food’, so the last statement is false too.", lvl: 4, fig: { type: "venn", a: "Can make its own food", b: "Reproduces by spores", onlyA: ["hibiscus", "rice plant"], both: ["fern", "moss"], onlyB: ["mushroom", "bread mould"], neither: ["cat"] } },
    { q: "Jun wanted to find out if light affects the growth of mould. Study his set-ups. After 5 days, both slices had about the same area of mould. What can he conclude?", o: ["Mould needs light to grow well on bread.", "Light does not affect mould growth on bread.", "Mould needs darkness to grow well on bread.", "The experiment was not a fair test of light."], a: 1, why: "Only the light was changed, so it is a fair test. Because both slices grew about the same amount of mould, light made no difference. If mould needed light or darkness, one slice would have much less mould.", lvl: 4, fig: { type: "setups", items: [{ label: "A", icon: "jar", lines: ["Moist bread", "In the dark", "30 °C"] }, { label: "B", icon: "jar", lines: ["Moist bread", "In the light", "30 °C"] }] } },
    { q: "Different amounts of salt were added to equal amounts of cooked rice kept in the same place. Study the bar graph carefully. Which conclusion is correct?", o: ["The more salt added, the longer it took for mould to appear.", "Salt kills all the mould, so no mould appeared on the rice.", "The more salt added, the sooner mould appeared on the rice.", "Salt adds water to the rice, which helps mould to grow."], a: 0, why: "The graph shows the number of DAYS before mould appeared, not the amount of mould. With more salt it took longer (2 days with no salt, 12 days with 20 g). Mould still appeared, so salt only slowed it down; salt takes away water.", lvl: 4, fig: { type: "bar", title: "Cooked rice with salt", xl: "Amount of salt added", yl: "Days before mould appeared", bars: [["0 g", 2], ["5 g", 4], ["10 g", 7], ["20 g", 12]] } },
    { q: "A packet of bread says: ‘Store in a cool, dry place. Once opened, eat within 3 days.’ Which is the best reason why the bread spoils sooner once the packet is opened?", o: ["Opening the packet kills the yeast in the bread.", "Mould needs light, and opening the packet lets light in.", "Opening the packet lets in air, moisture and new mould spores.", "The bread starts to make its own spores once it is opened."], a: 2, why: "The sealed packet kept out air, moisture and new spores. Once opened, spores in the air can land on the bread and grow. Mould does not need light, and mould comes from spores, not from the bread itself.", lvl: 4 },
    { q: "Two identical piles of dead leaves were kept for 4 weeks. Pile A was on moist soil under a shady tree. Pile B was in a dry, airtight plastic box. Pile A had mostly broken down, but pile B had hardly changed. Which is the best explanation?", o: ["Sunlight fell on the leaves in A and broke them down over the 4 weeks.", "The leaves in B made their own food, so they stayed fresh and whole.", "Plants growing in the moist soil under the tree ate the leaves in A.", "Fungi and bacteria in A had the water and air needed to break down the leaves."], a: 3, why: "Fungi and bacteria are decomposers that need water and air to grow. Pile A had both, but B was dry and sealed. A was in the shade, dead leaves cannot make food, and plants do not eat leaves.", lvl: 4 }
  ],
  oex: [
    { q: "Study the set-ups and the results in the table. The bowls were the same size and had the same amount of flour and water. (a) Which two bowls show that yeast is needed for the dough to rise? (b) Explain why dough C rose less than dough A. (c) To which group of living things does yeast belong?", marks: 3, kw: [["a and b", "b and a"], ["cold", "low temperature"], ["fung"]], model: "(a) A and B. (b) Yeast is a living thing, and the low temperature (cold) in C slows it down, so the dough rose less. (c) Yeast belongs to the fungi.", fig: { type: "setups", items: [{ label: "A", icon: "beaker", lines: ["Flour, water, yeast", "30 °C"] }, { label: "B", icon: "beaker", lines: ["Flour and water only", "30 °C"] }, { label: "C", icon: "beaker", lines: ["Flour, water, yeast", "5 °C"] }] }, tbl: [["Bowl", "A", "B", "C"], ["Rise in height after 1 hour (cm)", "4", "0", "1"]] },
    { q: "Study the three jars of dead leaves. (a) In which jar will the leaves break down the most after 4 weeks? Give two reasons. (b) Name the living things in the soil that break down the leaves. (c) Which two jars should be compared to find out if water affects how fast the leaves break down?", marks: 4, kw: [["moist", "damp", "water"], ["warm", "30"], ["fungi", "fungus", "bacteria", "decomposer"], ["a and b", "b and a"]], model: "(a) Jar A, because its soil is moist and it is warm, at 30 °C. (b) Fungi and bacteria, which are decomposers. (c) A and B.", fig: { type: "setups", items: [{ label: "A", icon: "jar", lines: ["Dead leaves", "Moist soil", "30 °C"] }, { label: "B", icon: "jar", lines: ["Dead leaves", "Dry soil", "30 °C"] }, { label: "C", icon: "jar", lines: ["Dead leaves", "Moist soil", "10 °C"] }] } },
    { q: "Explain how each of these helps food to keep longer: (a) drying ikan bilis in the sun, (b) keeping kaya in the fridge, (c) sealing sardines in a can.", marks: 3, kw: [["water", "moisture"], ["cold", "cool", "low temperature"], ["air", "spore", "sealed", "airtight", "germ"]], model: "(a) Drying removes water (moisture), which mould and bacteria need to grow, so their growth is slowed down. (b) The low temperature in the fridge slows down the growth of mould and bacteria. (c) The can is sealed and airtight, so air, mould spores and bacteria cannot get in." },
    { q: "Hui Min wanted to find out if light affects the growth of mould. Study her set-ups. (a) Which variable did she want to change? (b) Explain why her experiment may NOT be a fair test. (c) Suggest one way to improve her experiment.", marks: 3, kw: [["light"], ["warm", "temperature", "hotter"], ["same temperature", "same place", "cover", "black", "box"]], model: "(a) The amount of light. (b) The sunny windowsill is also warmer than the cupboard, so the temperature is different too and two variables are changed. (c) Keep both slices in the same place at the same temperature, and cover one slice with a black box to keep out light.", fig: { type: "setups", items: [{ label: "P", icon: "plate", lines: ["Moist bread", "Sunny windowsill"] }, { label: "Q", icon: "plate", lines: ["Moist bread", "Dark cupboard"] }] } }
  ]
};
