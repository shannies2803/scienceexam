window.BANKU = window.BANKU || {};
BANKU["pcycles"] = {
  glossary: [
    { t: "Germination", d: "When a seed begins to grow into a new plant after getting water, air and warmth. The seed swells, the seed coat splits and a root, then a shoot, grows out." },
    { t: "Seed coat", d: "The tough outer covering of a seed that protects what is inside. It splits open as the seed swells during germination." },
    { t: "Seed leaves", d: "Thick leaves inside the seed that store food. They give food to the seedling until its green leaves can make food, then they shrivel and drop off." },
    { t: "Shoot", d: "The part of a germinating seed that grows out after the root. It grows upwards and develops into the stem and leaves." },
    { t: "Seedling", d: "A very young plant that has grown from a germinating seed. It has a root, a shoot and seed leaves that give it food." },
    { t: "Adult plant", d: "The stage at which a plant is fully grown and bears flowers. The flowers develop into fruits that contain seeds." },
    { t: "Life cycle", d: "The series of stages a living thing goes through in its life. For a flowering plant: seed, germinating seed, seedling, young plant and adult plant, which makes new seeds." },
    { t: "Life span", d: "The length of time a living thing lives, from the start of its life until it dies, e.g. a few months for a balsam plant." },
    { t: "Fruit", d: "The part of a flowering plant that develops from the flower and contains seeds, e.g. chilli, lady’s finger and papaya." },
    { t: "Spores", d: "Tiny structures that ferns and mosses reproduce from, as these plants have no flowers or seeds. Each spore can grow into a new plant." },
    { t: "Control set-up", d: "The set-up used for comparison. It is the same as the test set-up except for the one variable being tested, to show that the result is due to that variable only." },
    { t: "Fair test", d: "An experiment where only the variable being tested differs between set-ups; everything else, such as the type and number of seeds, is kept the same." }
  ],
  lessons: [
    {
      h: "Describing a growth graph in stages",
      concept: "A line graph of plant height often changes speed. A full-mark description splits the graph wherever the slope changes, gives each part a word (increased quickly, increased slowly, stayed the same) and quotes numbers from the graph. Writing only ‘the plant grew taller’ loses marks when the question asks HOW the height changed. Subtract to find the increase in each part.",
      example: {
        q: "Study the graph of the height of a kangkong plant. Describe how its height changed from Day 0 to Day 12.",
        fig: { type: "line", title: "Height of a kangkong plant", xl: "Day", yl: "Height (cm)", pts: [["0", 1], ["2", 5], ["4", 9], ["6", 13], ["8", 15], ["10", 16], ["12", 16]] },
        marks: 2,
        think: [
          "Step 1: Subtract for each 2-day period: +4, +4, +4, then +2, +1, then 0.",
          "Step 2: Split the graph where the increase changes: Day 0 to 6 (steep), Day 6 to 10 (gentle), Day 10 to 12 (flat).",
          "Step 3: Give each part a describing word: increased quickly, increased slowly, stayed the same.",
          "Step 4: Add the heights from the graph as evidence, and do not say the plant died: a flat line only means it did not grow taller."
        ],
        answer: "From Day 0 to Day 6, the height increased quickly, by 4 cm every 2 days (from 1 cm to 13 cm). From Day 6 to Day 10, it increased more slowly (from 13 cm to 16 cm). From Day 10 to Day 12, the height stayed the same at 16 cm."
      },
      tip: "Split the line where the slope changes, and describe each part with a word AND numbers.",
      try: {
        q: "Study the graph of the height of a chilli padi seedling. Which description is correct?",
        fig: { type: "line", title: "Height of a chilli padi seedling", xl: "Day", yl: "Height (cm)", pts: [["0", 0], ["2", 1], ["4", 2], ["6", 6], ["8", 10], ["10", 11]] },
        o: ["It grew slowly to Day 4, quickly to Day 8, then slowly again.", "It grew at the same rate of 2 cm every 2 days throughout.", "It grew quickly to Day 4, then slowly from Day 4 to Day 10.", "It grew quickly to Day 8, then stopped growing after Day 8."], a: 0,
        why: "The increases are 1, 1, 4, 4 and 1 cm, so growth was slow to Day 4, quick from Day 4 to Day 8 and slow again. It did not stop after Day 8, as it still grew 1 cm."
      }
    },
    {
      h: "Explaining the purpose of the control set-up",
      concept: "In a germination experiment, the control set-up has all the conditions (water, air and warmth), while the test set-up has one condition taken away. The control set-up is used for comparison: if the seeds germinate in the control but not in the test set-up, the result must be due to the one variable that was changed. Answers like ‘to make it fair’ or ‘to see what happens’ score no marks.",
      example: {
        q: "Hannah wanted to find out if green bean seeds need water to germinate. Study her set-ups. (a) Which is the control set-up? (b) Explain why she needs set-up A.",
        fig: { type: "setups", items: [
          { label: "A", icon: "dish", lines: ["Wet cotton wool", "10 green bean seeds", "Room temperature"] },
          { label: "B", icon: "dish", lines: ["Dry cotton wool", "10 green bean seeds", "Room temperature"] } ] },
        marks: 2,
        think: [
          "Step 1: Find the set-up with ALL the conditions for germination: A has water, air and warmth, so A is the control.",
          "Step 2: Find the one difference between A and B: only the water.",
          "Step 3: Use the keyword ‘comparison’ and name the variable: A is compared with B to show that the result is due to water only.",
          "Step 4: Avoid vague words like ‘fair’ on their own; the marker wants ‘for comparison’."
        ],
        answer: "(a) Set-up A. (b) Set-up A is used for comparison with B. A and B differ only in the water, so if the seeds in A germinate and those in B do not, she can conclude that the result was due to the lack of water and that seeds need water to germinate."
      },
      tip: "Purpose of the control: ‘for comparison, to show that the result is due to [the variable] only’.",
      try: {
        q: "Omar wanted to find out if seeds need air. Set-up X had seeds in boiled, cooled water with a layer of oil on top. Set-up Y had seeds in tap water. Both were at room temperature. Why does he need set-up Y?",
        o: ["To give spare seeds in case the seeds in X are dead", "To find out whether seeds can germinate without light", "To compare with X, to show the result is due to air only", "To keep the water in both set-ups at the same temperature"], a: 2,
        why: "Y is the control set-up: it has water, air and warmth, and differs from X only in air, so it is used for comparison. It does not test light, it is not a spare set of seeds, and placing both in the same room already keeps the temperature the same."
      }
    }
  ],
  flash: [
    { f: "Which grows out of a germinating seed first, the root or the shoot?", b: "The root grows out first and grows downwards. The shoot grows out after it and grows upwards." },
    { f: "Why does a seed become heavier when it is soaked in water?", b: "It takes in water, so it swells and becomes heavier. This happens before the seed coat splits." },
    { f: "Why must boiled water be cooled before the seeds are put in?", b: "Hot water may kill or damage the seeds. Cooling it means only the air is removed, while the temperature stays the same as in the other set-up." },
    { f: "Can seeds germinate in a closed jar with wet cotton wool?", b: "Yes. The closed jar still has air inside, and the seeds also have water and warmth." },
    { f: "Why does a seedling need light?", b: "A seedling needs light to grow well. Its green leaves use light to make food after the food in the seed leaves is used up." },
    { f: "Why does a seedling kept in the dark die after a few weeks?", b: "It uses up the food stored in its seed leaves, and its leaves cannot make food without light." },
    { f: "Life cycle vs life span", b: "Life cycle: the stages a plant goes through. Life span: how long the plant lives. Plants with the same stages can have different life spans." },
    { f: "How can you tell that a chilli is a fruit?", b: "It develops from a flower and it contains seeds." },
    { f: "What is the purpose of the control set-up?", b: "It is used for comparison, to show that the result is due only to the one variable that was changed." },
    { f: "How do you write the aim of an experiment?", b: "To find out how [the variable changed] affects [what is measured], e.g. how temperature affects the number of seeds that germinate." },
    { f: "On a line graph of plant height, what do steep, gentle and flat parts show?", b: "Steep: the plant grew quickly. Gentle slope: it grew slowly. Flat: its height stayed the same (it did not grow taller)." },
    { f: "Why do soaked seeds germinate sooner than dry seeds?", b: "They have already taken in water and swelled, so their seed coats split open sooner." }
  ],
  mcq: [
    { q: "The diagram shows the life cycle of a flowering plant. Which stage should replace ‘?’?", o: ["Fruit", "Seed coat", "Seedling", "Flower"], a: 2, lvl: 1,
      why: "A germinating seed grows into a seedling, which then becomes a young plant. Fruits, flowers and seed coats are parts of a plant, not stages of its life cycle.",
      fig: { type: "cycle", stages: ["Seed", "Germinating seed", "?", "Young plant", "Adult plant"] } },
    { q: "Which of these plants reproduces from spores instead of seeds?", o: ["Kangkong", "Moss", "Balsam", "Rambutan tree"], a: 1, lvl: 1,
      why: "Mosses have no flowers or seeds, so they reproduce from spores. Kangkong, balsam and rambutan are flowering plants that grow from seeds." },
    { q: "Which of the following is NOT needed for a green bean seed to germinate?", o: ["Water", "Air", "Warmth", "Light"], a: 3, lvl: 1,
      why: "A seed needs water, air and warmth to germinate. Light is not needed: green bean seeds germinate in a dark cupboard." },
    { q: "The diagram shows an adult balsam plant. Which labelled part was the first to grow out of the seed when it germinated?", o: ["W", "X", "Y", "Z"], a: 0, lvl: 1,
      why: "W is the roots. The root is the first part to grow out of a germinating seed. The stem (X) and leaves (Y) come from the shoot later, and the flower (Z) appears only on the adult plant.",
      fig: { type: "plant", mark: { roots: "W", stem: "X", leaf: "Y", flower: "Z" } } },
    { q: "Ahmad sowed kangkong seeds in the school garden. Which observation shows that a kangkong plant has become an adult plant?", o: ["Its seed leaves drop off.", "Its first flowers appear.", "Its root grows longer.", "Its stem grows taller."], a: 1, lvl: 2,
      why: "Only an adult plant bears flowers. Seed leaves drop off at the young plant stage, and roots and stems grow longer at every stage, so they do not show the plant is an adult." },
    { q: "Study the graph of the height of a papaya seedling. By how much did its height increase from Week 2 to Week 6?", o: ["15 cm", "18 cm", "12 cm", "5 cm"], a: 2, lvl: 2,
      why: "The height was 3 cm in Week 2 and 15 cm in Week 6, so it increased by 15 − 3 = 12 cm. 15 cm is the height in Week 6, not the increase.",
      fig: { type: "line", title: "Height of a papaya seedling", xl: "Week", yl: "Height (cm)", pts: [["0", 0], ["2", 3], ["4", 8], ["6", 15], ["8", 18]] } },
    { q: "Jamie wants to find out if the amount of water given daily affects the height of a bean seedling. Study the table. Which two seedlings should she compare?", o: ["A and C", "B and D", "C and D", "A and B"], a: 3, lvl: 2,
      why: "A and B differ only in the amount of water. A and C also differ in place (light), B and D also differ in the type of seed, and C and D differ in all three.",
      tbl: [["Seedling", "Water given daily (ml)", "Place", "Type of seed"], ["A", "10", "Near a window", "Green bean"], ["B", "20", "Near a window", "Green bean"], ["C", "20", "Dark cupboard", "Green bean"], ["D", "10", "Near a window", "Red bean"]] },
    { q: "Mrs Tan’s class placed green bean seeds on wet cotton wool in their air-conditioned classroom, kept at 24 °C. What would most likely happen?", o: ["They would not germinate, as the room is too cold.", "They would germinate, as 24 °C is warm enough.", "They would not germinate, as there is no sunlight.", "They would germinate only after being put in soil."], a: 1, lvl: 2,
      why: "24 °C is a suitable temperature, and the seeds also have water and air, so they germinate. A refrigerator is too cold, but an air-conditioned room is not. Light and soil are not needed." },
    { q: "Mdm Lim bought these at a wet market. Which one is NOT a fruit?", o: ["Brinjal", "Bitter gourd", "Sweet potato", "Cucumber"], a: 2, lvl: 2,
      why: "Brinjal, bitter gourd and cucumber develop from flowers and contain seeds, so they are fruits. A sweet potato is a root and has no seeds." },
    { q: "Ali placed a green bean seed between wet paper towel and the side of a clear glass. In which order would he observe these?\nP: The shoot grows upwards.\nQ: The seed swells.\nR: The root grows out.\nS: The seed coat splits.", o: ["S, Q, R, P", "Q, S, R, P", "Q, R, S, P", "Q, S, P, R"], a: 1, lvl: 2,
      why: "The seed first takes in water and swells (Q), so the seed coat splits (S). The root grows out first (R), and then the shoot grows upwards (P)." },
    { q: "At the Singapore Botanic Gardens, Li Ting saw a tembusu tree that is over 150 years old. Nearby, gardeners plant new balsam plants every few months. Which statement is correct?", o: ["The tembusu tree has a longer life span than balsam.", "The tembusu tree goes through more stages than balsam.", "The balsam plant does not produce any seeds at all.", "The tembusu tree has never produced any flowers."], a: 0, lvl: 2,
      why: "Both are flowering plants that go through the same stages, but the tembusu tree lives for many years while a balsam plant lives only a few months, so the tree has the longer life span. Both bear flowers and produce seeds." },
    { q: "Study the set-ups of green bean seeds. In which set-ups will the seeds germinate?", o: ["J and M only", "M only", "K and M only", "J, L and M only"], a: 0, lvl: 3,
      why: "J (the sealed bag still has air) and M both have water, air and warmth; light is not needed. K is too cold and L has no water.",
      fig: { type: "setups", items: [
        { label: "J", icon: "box", lines: ["Wet cotton wool", "Sealed plastic bag", "Dark drawer", "Room temperature"] },
        { label: "K", icon: "dish", lines: ["Wet cotton wool", "Open dish", "In a refrigerator"] },
        { label: "L", icon: "dish", lines: ["Dry cotton wool", "Open dish", "Near a window", "Room temperature"] },
        { label: "M", icon: "pot", lines: ["Wet soil", "Open pot", "Near a window", "Room temperature"] } ] } },
    { q: "Study the graph of the height of a balsam plant. Which statements are correct?\nA: The plant grew 16 cm in 12 days.\nB: It grew more from Day 2 to Day 6 than from Day 6 to Day 10.\nC: The plant died on Day 10.", o: ["A only", "B and C only", "A, B and C", "A and B only"], a: 3, lvl: 3,
      why: "A: it grew from 0 cm to 16 cm. B: it grew 10 cm from Day 2 to Day 6 (3 to 13) but only 3 cm from Day 6 to Day 10 (13 to 16). C is wrong: a flat line means it stopped growing taller, not that it died.",
      fig: { type: "line", title: "Height of a balsam plant", xl: "Day", yl: "Height (cm)", pts: [["0", 0], ["2", 3], ["4", 7], ["6", 13], ["8", 15], ["10", 16], ["12", 16]] } },
    { q: "Sam wants to find out if temperature affects the number of days green bean seeds take to germinate. Study the set-ups. Which two set-ups should he compare?", o: ["W and X", "W and Y", "Y and Z", "W and Z"], a: 3, lvl: 3,
      why: "W and Z differ only in temperature. W and X also differ in the type of seed, W and Y also differ in the amount of water, and Y and Z are at the same temperature.",
      fig: { type: "setups", items: [
        { label: "W", icon: "dish", lines: ["Green bean seeds", "10 ml of water", "25 °C"] },
        { label: "X", icon: "dish", lines: ["Red bean seeds", "10 ml of water", "35 °C"] },
        { label: "Y", icon: "dish", lines: ["Green bean seeds", "20 ml of water", "35 °C"] },
        { label: "Z", icon: "dish", lines: ["Green bean seeds", "10 ml of water", "35 °C"] } ] } },
    { q: "Study the table about four plants. Which statements are correct?\nA: Plants E, G and H produce seeds.\nB: Plant F does not bear flowers.\nC: Plant G goes through more stages in its life cycle than plant E.", o: ["A and C only", "B and C only", "A and B only", "A, B and C"], a: 2, lvl: 3,
      why: "E, G and H grow from seeds, so as adults they bear flowers and produce seeds (A). F grows from spores, so it has no flowers (B). C is wrong: a longer life span does not mean more stages.",
      tbl: [["Plant", "Grows from", "Life span"], ["E", "Seeds", "3 months"], ["F", "Spores", "2 years"], ["G", "Seeds", "30 years"], ["H", "Seeds", "4 months"]] },
    { q: "Kamal placed 20 green bean seeds on each material at room temperature. Study the graph. Which conclusion is best supported by the results?", o: ["Seeds germinate best on wet sand.", "Seeds need soil to germinate well.", "Seeds need water to germinate.", "Seeds germinate faster on cotton wool."], a: 2, lvl: 3,
      why: "Wet soil and dry soil differ only in water: 18 germinated with water and 0 without. Wet cotton wool and wet sand did as well as wet soil, so soil is not needed, and speed was not measured.",
      fig: { type: "bar", title: "Seeds germinated (out of 20)", xl: "Material", yl: "Number of seeds", bars: [["Wet cotton wool", 18], ["Wet sand", 17], ["Wet soil", 18], ["Dry soil", 0]] } },
    { q: "The diagram shows a balsam plant. Raju removed every part labelled Q as soon as it appeared. Which statements are correct?\nA: The plant will not form any fruits.\nB: The plant will not produce seeds for new plants.\nC: The plant will stop growing roots.", o: ["A and B only", "A only", "A and C only", "A, B and C"], a: 0, lvl: 3,
      why: "Q is the flower. Fruits develop from flowers and contain the seeds, so without flowers there are no fruits and no seeds. Removing flowers does not stop the roots (P) from growing.",
      fig: { type: "plant", mark: { roots: "P", flower: "Q", leaf: "R", stem: "S" } } },
    { q: "Lim placed 10 green bean seeds on wet cotton wool at 20 °C and another 10 at 30 °C. The table shows the TOTAL number of seeds that had germinated by each day. Which statement is correct?", o: ["More seeds germinated in total at 30 °C than at 20 °C.", "At 20 °C, the seeds did not germinate as it was too cold.", "The seeds at 30 °C stopped germinating as they died on Day 3.", "Seeds at 30 °C germinated sooner, but both totals reached 9."], a: 3, lvl: 4,
      why: "At 30 °C the totals rose faster (6 by Day 2 vs 1), but by Day 5 both had 9, so the final totals were equal. 20 °C was warm enough, and the total at 30 °C stayed at 9 because one seed never germinated, not because they died.",
      tbl: [["Day", "Total germinated at 20 °C", "Total germinated at 30 °C"], ["1", "0", "2"], ["2", "1", "6"], ["3", "4", "9"], ["4", "7", "9"], ["5", "9", "9"], ["6", "9", "9"]] },
    { q: "Priya placed 10 green bean seeds in each set-up. P, Q and R were at room temperature. Study the table. Which conclusion can NOT be drawn from her results?", o: ["Seeds need water to germinate.", "Seeds need air to germinate.", "Seeds need warmth to germinate.", "Seeds do not need light to germinate."], a: 1, lvl: 4,
      why: "P vs R shows water is needed, P vs Q shows light is not needed, and Q vs S differ only in temperature (a closed refrigerator is dark too), so warmth is needed. Every set-up had air, so air was never tested, even though seeds do need it.",
      tbl: [["Set-up", "Cotton wool", "Place", "Seeds germinated"], ["P", "Wet", "Near a window", "9"], ["Q", "Wet", "Dark cupboard", "9"], ["R", "Dry", "Near a window", "0"], ["S", "Wet", "In a refrigerator", "0"]] },
    { q: "The table shows what happened to a chilli padi plant grown from a seed. Which statements are true of the plant on Day 50?\nA: It is an adult plant.\nB: It still has its seed leaves.\nC: It has started to bear flowers.\nD: It has fruits containing seeds.", o: ["A and C only", "A, C and D only", "B and C only", "C and D only"], a: 0, lvl: 4,
      why: "The first flowers appeared on Day 45, so by Day 50 it is an adult plant bearing flowers (A, C). The seed leaves dropped off on Day 20 (B false), and the first chillies appeared only on Day 60 (D false).",
      tbl: [["Day", "What happened"], ["3", "The root grew out of the seed."], ["20", "The seed leaves dropped off."], ["45", "The first flowers appeared."], ["60", "The first chillies appeared."], ["150", "The plant died."]] }
  ],
  oe: [
    { q: "Lucas wanted to find out if green bean seeds need air to germinate. Study his two set-ups. (a) Which set-up is the control set-up? [1] (b) Explain why he needs the control set-up. [1] (c) Why were both set-ups kept at room temperature? [1]", marks: 3,
      kw: [["set-up a", "set up a", "setup a", "a is the control", "a is control"], ["compar"], ["only one variable", "one variable", "only air", "only the air", "fair", "same temperature"]],
      model: "(a) Set-up A. (b) Set-up A is used for comparison with B, to show that the result is due to air only. (c) So that only one variable, the air, is changed and the test is fair.",
      fig: { type: "setups", items: [
        { label: "A", icon: "beaker", lines: ["Tap water (not boiled)", "No layer of oil", "Room temperature"] },
        { label: "B", icon: "beaker", lines: ["Boiled, cooled water", "Layer of oil on top", "Room temperature"] } ] } },
    { q: "Wei Ling placed green bean seeds on wet cotton wool inside a sealed plastic bag and taped it to her classroom window. After 3 days, the seeds had germinated. (a) The bag was sealed. Explain why the seeds could still germinate. [1] (b) Which part grew out of each seed first? [1] (c) Her classmate said the seeds germinated because they got sunlight at the window. Explain why he is wrong. [1]", marks: 3,
      kw: [["still has air", "still had air", "air inside", "air in the bag", "contains air", "contained air", "has air", "had air", "there is air", "there was air", "enough air"], ["root"], ["not need light", "dont need light", "don't need light", "light is not needed", "light isn't needed", "germinate in the dark", "germinate without light", "without light"]],
      model: "(a) The sealed bag still had air inside it, and the seeds also had water and warmth. (b) The root. (c) Seeds do not need light to germinate. They need only water, air and warmth, so they would also germinate in the dark." },
    { q: "Study the graph of the height of a chilli padi plant. (a) By how many centimetres did the plant grow from Week 2 to Week 6? [1] (b) Describe how its growth from Week 6 to Week 10 was different from its growth from Week 2 to Week 6. [1] (c) Its seed leaves had dropped off by Week 4, yet the plant kept growing. Explain how it got food after that. [1]", marks: 3,
      kw: [["10"], ["slow", "less", "fewer"], ["photosynth", "make food", "makes food", "made food", "making food", "make its own food", "makes its own food", "made its own food"]],
      model: "(a) 10 cm. (b) From Week 6 to Week 10 it grew more slowly, only 4 cm, compared with 10 cm from Week 2 to Week 6. (c) Its green leaves made food for the plant using light.",
      fig: { type: "line", title: "Height of a chilli padi plant", xl: "Week", yl: "Height (cm)", pts: [["0", 0], ["2", 2], ["4", 6], ["6", 12], ["8", 15], ["10", 16]] } },
    { q: "Mei placed 10 seeds in each set-up and recorded how many germinated after 5 days. P, Q and R were at room temperature. Study the table. (a) Which two set-ups show whether seeds need light to germinate? [1] (b) What does comparing Q and R show? [1] (c) Mei says that comparing P and S shows that seeds need warmth. Explain why she cannot conclude this. [1] (d) One seed in P did not germinate. Suggest a reason. [1]", marks: 4, x: 1,
      kw: [["p and q", "q and p"], ["water"], ["type of seed", "kind of seed", "types of seed", "kinds of seed", "red bean", "two variables", "2 variables", "more than one variable", "different seed", "different type", "different kind"], ["dead", "damaged", "not alive", "rotten", "spoilt"]],
      model: "(a) P and Q. (b) Seeds need water to germinate, because only the water was different and no seeds germinated on the dry cotton wool. (c) Two variables were changed, the type of seed and the temperature, so she cannot tell which one caused the result. (d) The seed may have been dead or damaged.",
      tbl: [["Set-up", "Type of seed", "Cotton wool", "Place", "Seeds germinated"], ["P", "Green bean", "Wet", "Dark cupboard", "9"], ["Q", "Green bean", "Wet", "Near a window", "10"], ["R", "Green bean", "Dry", "Near a window", "0"], ["S", "Red bean", "Wet", "In a refrigerator", "0"]] }
  ],
  tf: [
    { s: "Green bean seeds will not germinate in an air-conditioned classroom at 24 °C because it is too cold.", a: false, why: "Misconception: any cool room is too cold. 24 °C is a suitable temperature; seeds fail to germinate when it is much colder, as in a refrigerator." },
    { s: "A papaya plant must bear flowers before it can produce seeds.", a: true, why: "Seeds form inside fruits, and fruits develop from flowers, so a plant that has not flowered has no seeds yet." },
    { s: "If the set-ups tested only water and temperature, we can also conclude from them that seeds need air.", a: false, why: "Misconception: any true fact can be a conclusion. A conclusion can only be about a variable that was changed in the experiment." },
    { s: "A balsam plant and a durian tree both begin their life cycles as seeds.", a: true, why: "Both are flowering plants; they differ in life span, not in how their life cycles start." },
    { s: "The brown dots under a fern’s leaves hold tiny seeds.", a: false, why: "Misconception: all plants make seeds. Ferns have no flowers or seeds; the dots hold spores." },
    { s: "A steeper part of a line graph of plant height shows that the plant grew faster during that time.", a: true, why: "The height increased by more in the same number of days." },
    { s: "Boiled water for an ‘air’ experiment should be poured over the seeds while it is still hot.", a: false, why: "Misconception: hot water keeps air out better. The water must be cooled first, or the heat may kill the seeds and two variables would change." },
    { s: "The control set-up is used for comparison with the set-up in which one variable was changed.", a: true, why: "Comparing the two shows that the result is due only to the variable that was changed." },
    { s: "Once a seed has germinated, the young plant no longer needs water.", a: false, why: "Misconception: water is needed only for germination. Seedlings and adult plants need water to grow and survive." },
    { s: "A seedling whose seed leaves have dropped off can still get food if its green leaves get light.", a: true, why: "Its green leaves use light to make food for the plant." }
  ]
};
