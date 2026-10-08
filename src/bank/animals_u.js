window.BANKU = window.BANKU || {};
BANKU["animals"] = {
  glossary: [
    { t: "Classify", d: "To sort living things into groups according to the characteristics they have in common." },
    { t: "Characteristic", d: "A feature of a living thing, such as its body covering or how it breathes, that can be used to group it with others." },
    { t: "Classification key", d: "A chart of yes/no questions, each about one characteristic, that is used to sort living things into groups." },
    { t: "Mammal", d: "An animal with hair or fur that breathes through lungs and feeds its young on milk. Most mammals give birth to young alive." },
    { t: "Bird", d: "An animal with feathers, a beak and a pair of wings. It breathes through lungs and lays eggs with hard shells." },
    { t: "Fish", d: "An animal that lives in water and uses fins to swim and gills to breathe. Most fish have scales and lay eggs." },
    { t: "Amphibian", d: "An animal with moist, smooth skin without scales that lays eggs in water. Its young breathe through gills; the adult breathes through lungs and moist skin." },
    { t: "Reptile", d: "An animal with dry, scaly skin that breathes through lungs all its life. Most reptiles lay eggs with tough, leathery shells on land." },
    { t: "Insect", d: "An animal with 3 body parts (head, thorax and abdomen), 3 pairs of legs and 1 pair of feelers. Most insects have wings." },
    { t: "Gills", d: "The body parts that fish and young amphibians (tadpoles) use to breathe in water." },
    { t: "Lungs", d: "The body parts that mammals, birds, reptiles and adult amphibians use to breathe in air." },
    { t: "Feelers (antennae)", d: "The pair of long, thin parts on an insect’s head that help it to feel and smell its surroundings." }
  ],
  lessons: [
    {
      h: "Choosing the fair pair of set-ups",
      concept: "To find out how ONE variable affects animals, compare two set-ups that differ ONLY in that variable. Everything else, such as the number of animals, the place and the type of soil or food, must be the same. If two set-ups differ in more than one variable, you cannot tell which variable caused the result.",
      example: {
        q: "Jun wants to find out if the amount of light affects how active garden snails are. He prepared the set-ups shown and counted how many snails were moving about after 1 hour. (a) Which two set-ups should he compare? (b) Explain why he should NOT compare P and S.",
        fig: { type: "setups", items: [{ label: "P", icon: "box", lines: ["Covered (dark)", "Damp soil", "5 snails"] }, { label: "Q", icon: "box", lines: ["Uncovered (bright)", "Damp soil", "5 snails"] }, { label: "R", icon: "box", lines: ["Uncovered (bright)", "Dry soil", "5 snails"] }, { label: "S", icon: "box", lines: ["Covered (dark)", "Dry soil", "10 snails"] }] },
        marks: 2,
        think: [
          "Step 1: Name the variable being tested: the amount of light. The two set-ups must be one covered (dark) and one uncovered (bright).",
          "Step 2: Check every other line. P and Q both have damp soil and 5 snails, so ONLY the light is different.",
          "Step 3: Watch the trap: Q and R differ only in the soil, so that pair tests damp or dry soil, not light.",
          "Step 4: For (b), list every difference between P and S: the soil (damp or dry) and the number of snails (5 or 10)."
        ],
        answer: "(a) P and Q. (b) P and S differ in two variables, the soil (damp or dry) and the number of snails, so he cannot tell which variable caused any difference in the results."
      },
      tip: "Cover up the variable being tested: every other line of the two set-ups must match exactly.",
      try: {
        q: "Aini wants to find out if caterpillars eat more young leaves or old leaves. Which two set-ups should she compare?",
        fig: { type: "setups", items: [{ label: "A", icon: "box", lines: ["5 young leaves", "3 caterpillars", "In the shade"] }, { label: "B", icon: "box", lines: ["5 old leaves", "3 caterpillars", "In the shade"] }, { label: "C", icon: "box", lines: ["5 old leaves", "6 caterpillars", "In the shade"] }, { label: "D", icon: "box", lines: ["10 young leaves", "3 caterpillars", "In the sun"] }] },
        o: ["A and C", "B and D", "A and B", "C and D"],
        a: 2,
        why: "A and B differ only in the type of leaf; the number of leaves, the number of caterpillars and the place are the same. A and C also differ in the number of caterpillars, and B and D, and C and D, differ in more than one variable."
      }
    },
    {
      h: "Group first, then count from a graph",
      concept: "Many data questions ask how many animals belong to a group or share a characteristic. Before adding any bars, write the group of each animal next to its bar, using characteristics and not names, habitat or movement. Only then add the bars that fit, and check your total.",
      example: {
        q: "Kumar recorded the animals he saw on a night walk at Pasir Ris Park in the bar graph. (a) How many of the animals he saw were mammals? (b) Kumar wrote that he saw 6 birds. Which animals did he wrongly count as birds? Explain why they are not birds.",
        fig: { type: "bar", title: "Animals seen on a night walk", xl: "Animal", yl: "Number of animals", bars: [["Flying foxes", 4], ["Frogs", 7], ["Geckos", 5], ["Owls", 2]] },
        marks: 2,
        think: [
          "Step 1: Label every bar with its group. Flying foxes are bats, so they are mammals. Frogs are amphibians, geckos are reptiles and owls are birds.",
          "Step 2: For (a), add only the mammal bars. Only the flying foxes are mammals, so the answer is 4.",
          "Step 3: For (b), work backwards. 6 birds = 2 owls + 4 flying foxes, so he counted the flying foxes as birds because they fly.",
          "Step 4: Explain with characteristics: flying foxes have fur, not feathers, and feed their young on milk."
        ],
        answer: "(a) 4. (b) The flying foxes. They have fur, not feathers, and they feed their young on milk, so they are mammals, not birds."
      },
      tip: "Write the group beside each bar BEFORE you add; names and movement are the usual traps.",
      try: {
        q: "Ben counted the animals in a pond and drew the bar graph. How many of the animals he counted breathe through gills?",
        fig: { type: "bar", title: "Animals in the pond", xl: "Animal", yl: "Number of animals", bars: [["Tadpoles", 12], ["Guppies", 9], ["Terrapins", 2], ["Adult frogs", 3]] },
        o: ["9", "21", "24", "26"],
        a: 1,
        why: "Tadpoles and guppies breathe through gills: 12 + 9 = 21. Terrapins breathe through lungs, and adult frogs breathe through lungs and moist skin, so 24 wrongly adds the adult frogs and 26 is the total of all the animals."
      }
    }
  ],
  flash: [
    { f: "Why is a bat a mammal and not a bird?", b: "It has fur, not feathers, and it feeds its young on milk." },
    { f: "Why is a penguin a bird even though it cannot fly?", b: "It has feathers and a beak, and it lays eggs with hard shells." },
    { f: "Why is a sea turtle a reptile and not a fish?", b: "It has dry, scaly skin and breathes through lungs, not gills, so it comes to the surface to breathe air." },
    { f: "Why is a worker ant an insect even though it has no wings?", b: "It has 3 body parts, 6 legs and 1 pair of feelers. Not all insects have wings." },
    { f: "Why is the pangolin a mammal even though it has scales?", b: "It gives birth to young alive and feeds its young on milk." },
    { f: "Why is a starfish not a fish?", b: "It has no fins and no scales, and it moves on many tiny tube feet. Living in the sea does not make an animal a fish." },
    { f: "How does a tadpole breathe differently from an adult frog?", b: "The tadpole breathes through gills, but the adult frog breathes through lungs and moist skin." },
    { f: "How are the eggs of birds and reptiles different?", b: "Birds lay eggs with hard shells, but most reptiles lay eggs with tough, leathery shells." },
    { f: "Why is a salamander an amphibian and not a reptile?", b: "It has moist, smooth skin without scales and lays its eggs in water. Reptiles have dry, scaly skin." },
    { f: "Which features should NOT be used to classify animals into groups?", b: "How an animal moves, where it lives, its size and its colour, because animals from different groups can share them." },
    { f: "Why is an eel a fish and not a snake?", b: "It breathes through gills and has fins. A snake is a reptile with dry, scaly skin that breathes through lungs." },
    { f: "Why is a centipede not an insect?", b: "It has many legs, more than 6, and many body parts, but an insect has 6 legs and 3 body parts." }
  ],
  mcq: [
    { q: "Smooth-coated otters are often seen along the Singapore River. Which characteristic of the otter is found ONLY in mammals?", o: ["It has fur.", "It can swim.", "It has a tail.", "It has lungs."], a: 0, why: "Hair or fur is found only in mammals. Swimming, having a tail and breathing through lungs are shared with animals from other groups, such as the crocodile.", lvl: 1 },
    { q: "Which body part does a fish use to breathe?", o: ["Fins", "Gills", "Scales", "Lungs"], a: 1, why: "Fish breathe through gills. Fins are used for swimming, and scales cover the body.", lvl: 1 },
    { q: "Which of these animals lays eggs with hard shells?", o: ["Frog", "Guppy", "Kingfisher", "Dolphin"], a: 2, why: "The kingfisher is a bird, and birds lay eggs with hard shells. The frog lays eggs without shells in water, and the guppy and dolphin give birth to young alive.", lvl: 1 },
    { q: "The table shows the characteristics of animal M. Which group does M belong to?", o: ["Fish", "Reptiles", "Mammals", "Amphibians"], a: 3, why: "Moist, smooth skin, eggs laid in water, young that breathe through gills and adults that breathe through lungs and skin are all characteristics of amphibians.", lvl: 1, tbl: [["Characteristic", "Animal M"], ["Body covering", "Moist, smooth skin"], ["Where it lays eggs", "In water"], ["Young breathe through", "Gills"], ["Adult breathes through", "Lungs and skin"]] },
    { q: "Study the Venn diagram. Which animal could be Y?", o: ["Stingray", "Monkey", "Otter", "Crocodile"], a: 2, why: "Y lives in water AND has fur. The otter fits both. The stingray and crocodile live in water but have no fur, and the monkey has fur but does not live in water.", lvl: 2, fig: { type: "venn", a: "Lives in water", b: "Has fur or hair", onlyA: ["guppy", "terrapin"], both: ["Y"], onlyB: ["cat", "bat"], neither: ["hornbill"] } },
    { q: "Study the classification key of some animals seen at Sungei Buloh Wetland Reserve. Which animal ends at D?", o: ["Water monitor", "Mudskipper", "Otter", "Heron"], a: 1, why: "The mudskipper is a fish: it has no feathers, no dry scaly skin and no fur, so it ends at D. The heron ends at A, the water monitor at B and the otter at C.", lvl: 2, fig: { type: "flow", root: "Animals", node: { q: "Has feathers?", yes: "A", no: { q: "Has dry, scaly skin?", yes: "B", no: { q: "Has fur or hair?", yes: "C", no: "D" } } } } },
    { q: "Which statement about the bat is NOT true?", o: ["It has fur.", "It feeds its young on milk.", "It breathes through lungs.", "It has feathers on its wings."], a: 3, why: "The bat is a mammal, so it has fur, not feathers. Only birds have feathers, even though bats also have wings.", lvl: 2 },
    { q: "Some frog eggs were placed in a tank of pond water. Predict how the young that hatch from the eggs will breathe.", o: ["Through gills", "Through lungs", "Through moist skin only", "Through lungs and moist skin"], a: 0, why: "The young of amphibians (tadpoles) live in water and breathe through gills. Only the adult frog breathes through lungs and moist skin.", lvl: 2 },
    { q: "The bar graph shows the number of body parts of four small animals, A, B, C and D. Based ONLY on the graph, which animals could be insects?", o: ["A and C only", "B only", "A, B and C only", "B and D only"], a: 0, why: "All insects have 3 body parts, so only A and C could be insects. B has 2 body parts, like a spider, and D has only 1 body part, like a snail.", lvl: 2, fig: { type: "bar", title: "Number of body parts", xl: "Animal", yl: "Number of body parts", bars: [["A", 3], ["B", 2], ["C", 3], ["D", 1]] } },
    { q: "At S.E.A. Aquarium, Priya saw a huge manta ray gliding through the water. Which characteristic shows that the manta ray is a fish?", o: ["It has a flat, wide body.", "It lives in the open sea.", "It is very large in size.", "It breathes through gills."], a: 3, why: "Breathing through gills is a characteristic of fish. Body shape, size and living in the sea do not decide the group: the whale also lives in the sea and is very large, but it is a mammal.", lvl: 2 },
    { q: "To stop mosquitoes from breeding, a scientist wants to find out if mosquitoes lay more eggs in clear water or in water with dead leaves. Which two set-ups should she compare?", o: ["A and D", "A and B", "C and D", "B and D"], a: 1, why: "A and B differ only in whether there are dead leaves in the water; the amount of water and the place are the same. A and D also differ in place, C and D also differ in the amount of water, and B and D have the same type of water.", lvl: 2, fig: { type: "setups", items: [{ label: "A", icon: "beaker", lines: ["Clear water", "500 ml", "In the shade"] }, { label: "B", icon: "beaker", lines: ["Water + dead leaves", "500 ml", "In the shade"] }, { label: "C", icon: "beaker", lines: ["Clear water", "200 ml", "In the sun"] }, { label: "D", icon: "beaker", lines: ["Water + dead leaves", "500 ml", "In the sun"] }] } },
    { q: "Which of these animals have wings but CANNOT fly?\nA: Emu\nB: Penguin\nC: Bat\nD: Ostrich", o: ["A and B only", "A, B and D only", "B and C only", "A, C and D only"], a: 1, why: "The emu, penguin and ostrich are birds with wings, but they cannot fly. The bat has wings and CAN fly. Having wings does not always mean an animal can fly.", lvl: 3 },
    { q: "The estuarine crocodile and the mudskipper can both be seen at Sungei Buloh. Which statements are true for BOTH animals?\nA: Both can move on land and in water.\nB: Both breathe through lungs.\nC: Both lay eggs.\nD: Both have dry, scaly skin.", o: ["A and B only", "A and C only", "B, C and D only", "A, B and C only"], a: 1, why: "Both animals move on land and in water, and both lay eggs. B and D are true only for the crocodile, a reptile. The mudskipper is a fish, so it breathes through gills and does not have dry, scaly skin.", lvl: 3 },
    { q: "The table shows some information about four animals that have scales. Based on the table, which conclusion is correct?", o: ["All animals with scales lay eggs.", "All animals with scales breathe through lungs.", "Some animals with scales give birth to young alive.", "All animals with scales are reptiles."], a: 2, why: "The pangolin and the guppy have scales but give birth to young alive, so the first statement is wrong and the third is correct. The tilapia and guppy breathe through gills, and the pangolin, tilapia and guppy are not reptiles.", lvl: 3, tbl: [["Animal", "Has scales", "Breathes through", "Lays eggs?"], ["Python", "Yes", "Lungs", "Yes"], ["Pangolin", "Yes", "Lungs", "No"], ["Tilapia", "Yes", "Gills", "Yes"], ["Guppy", "Yes", "Gills", "No"]] },
    { q: "Lily sorted eight animals into two groups, as shown in the table. Which characteristic did she use to sort them?", o: ["Whether they lay eggs", "Whether they have lungs", "Whether they have scales", "Whether they live in water"], a: 0, why: "Every animal in Group A lays eggs, and every animal in Group B gives birth to young alive. The guppy (gills) is in Group B with animals that have lungs, the python and pangolin both have scales but are in different groups, and the frog and dolphin both live in water but are in different groups.", lvl: 3, tbl: [["Group A", "Group B"], ["Platypus", "Otter"], ["Hornbill", "Guppy"], ["Python", "Dolphin"], ["Frog", "Pangolin"]] },
    { q: "Which animal belongs to a DIFFERENT group from the other three?", o: ["Flying lizard", "Terrapin", "Salamander", "King cobra"], a: 2, why: "The salamander is an amphibian with moist, smooth skin. The flying lizard, terrapin and king cobra are reptiles with dry, scaly skin, even though one glides, one swims and one has no legs.", lvl: 3 },
    { q: "Which statement about a whale and a whale shark is NOT true?", o: ["Both live in the sea.", "Both have fins.", "Both can swim.", "Both breathe through gills."], a: 3, why: "The whale is a mammal and breathes through lungs; only the whale shark, a fish, breathes through gills. Both live in the sea, swim and have fins, so fins alone cannot show an animal is a fish.", lvl: 3 },
    { q: "Study the classification key. Which pair of animals would end at DIFFERENT letters?", o: ["Guppy and stingray", "Platypus and python", "Otter and pangolin", "Newt and tilapia"], a: 3, why: "The adult newt has no gills and has moist skin, so it ends at R, but the tilapia has gills and lays eggs, so it ends at Q. The guppy and stingray both end at P, the platypus and python both end at S, and the otter and pangolin both end at T.", lvl: 4, fig: { type: "flow", root: "Animals", node: { q: "Has gills as an adult?", yes: { q: "Gives birth to young alive?", yes: "P", no: "Q" }, no: { q: "Has moist skin?", yes: "R", no: { q: "Lays eggs?", yes: "S", no: "T" } } } } },
    { q: "Sara wants to place these animals in the Venn diagram: otter, python, guppy, hornbill, tilapia, platypus and adult frog. How many of them should go in the overlap of the two circles?", o: ["2", "3", "4", "5"], a: 2, why: "The python, hornbill, platypus and adult frog all breathe through lungs AND lay eggs, so 4 go in the overlap. The otter has lungs but gives birth to young alive, the tilapia lays eggs but has gills, and the guppy has gills and gives birth, so it goes outside both circles.", lvl: 4, fig: { type: "venn", a: "Breathes through lungs", b: "Lays eggs", onlyA: [], both: [], onlyB: [], neither: [] } },
    { q: "Which of these clues, ON ITS OWN, proves that an animal is NOT a fish?\nA: It has no gills.\nB: It has no scales.\nC: It gives birth to young alive.\nD: It spends most of its time out of water.", o: ["A only", "A and B only", "A and D only", "C and D only"], a: 0, why: "All fish have gills, so an animal with no gills cannot be a fish. The catfish has no scales, the guppy gives birth to young alive, and the mudskipper spends a lot of time out of water, yet all three are fish.", lvl: 4 }
  ],
  oe: [
    { q: "Siti recorded the characteristics of animals J, K and L in the table. (a) Animal K lays eggs. Which group does K belong to? Give one reason from the table. [2] (b) Mei says L is a mammal because it gives birth to young alive. Which group does L really belong to? Give one reason from the table. [2]", marks: 4, kw: [["mammal"], ["fur", "hair"], ["fish"], ["gill"]], model: "(a) K is a mammal because it has fur. (b) L is a fish because it breathes through gills.", tbl: [["Animal", "Body covering", "Breathes through", "How it reproduces"], ["J", "Feathers", "Lungs", "Lays eggs with hard shells"], ["K", "Fur", "Lungs", "Lays eggs"], ["L", "Scales", "Gills", "Gives birth to young alive"]] },
    { q: "Hui Min placed 20 mealworms in the middle of a box. One half of the box was covered with black paper and the other half was left uncovered. Both halves had the same amount of dry bran. After 20 minutes, she counted the mealworms on each side. Her results are shown in the table. (a) What variable did she change? [1] (b) What can she conclude from her results? [1] (c) Explain why she put the same amount of dry bran on both sides. [1]", marks: 3, kw: [["light", "brightness", "darkness", "dark or bright", "bright or dark", "covered or", "whether the box is covered", "whether it is covered", "covering", "black paper"], ["prefer dark", "prefers dark", "prefer the dark", "prefers the dark", "prefer darker", "like dark", "like the dark", "dark place", "dark side", "covered side", "in the dark"], ["fair", "only the light", "only light", "only the amount", "only one", "only 1"]], model: "(a) The amount of light: one side was dark and the other side was bright. (b) Mealworms prefer dark places, as more mealworms moved to the covered side. (c) So that only the amount of light is different and it is a fair test.", tbl: [["Side of the box", "Number of mealworms after 20 minutes"], ["Covered side (dark)", "17"], ["Uncovered side (bright)", "3"]] },
    { q: "Study the classification key. (a) The spiny anteater ends at B. Which animal group does it belong to? Explain why, even though it lays eggs. [2] (b) Ahmad placed the whale shark at C because of its name. Explain why he is wrong, and state the letter where it should end. [2]", marks: 4, kw: [["mammal"], ["milk"], ["gill"], ["d"]], model: "(a) It is a mammal because it feeds its young on milk, even though it lays eggs. (b) The whale shark is a fish that breathes through gills, and it does not feed its young on milk. It should end at D.", fig: { type: "flow", root: "Animals", node: { q: "Has feathers?", yes: "A", no: { q: "Feeds young on milk?", yes: { q: "Lays eggs?", yes: "B", no: "C" }, no: { q: "Breathes with gills?", yes: "D", no: "E" } } } } },
    { q: "Jun saw animal X on the mud at Sungei Buloh. His notes say: ‘It spends much of its time out of the water. It has fins. It lays eggs.’ (a) Jun says X must be an amphibian because it lives both on land and in water. Explain why this is not a good reason. [1] (b) Fins alone do not prove that X is a fish. State ONE more characteristic that would show X is a fish. [1] (c) X is the mudskipper, which is a fish. State one difference between how an adult frog and an adult mudskipper breathe. [1]", marks: 3, x: 1, kw: [["different group", "other group", "many group", "many animal group", "crocodile", "turtle", "terrapin", "otter", "monitor"], ["gill"], ["lung"]], model: "(a) Animals from different groups can live both on land and in water. For example, the crocodile is a reptile and the otter is a mammal. (b) It breathes through gills. (c) The adult frog breathes through lungs, but the adult mudskipper breathes through gills." }
  ],
  tf: [
    { s: "The flying fish is a bird because it can glide above the water.", a: false, why: "The flying fish has gills and fins, so it is a fish; how an animal moves does not decide its group." },
    { s: "The mudskipper is a fish even though it spends a lot of time out of water.", a: true, why: "It breathes through gills and has fins, which are characteristics of fish." },
    { s: "All animals that have wings can fly.", a: false, why: "The penguin, emu and ostrich have wings but cannot fly." },
    { s: "An otter swimming in the Singapore River must come up to the surface to breathe.", a: true, why: "The otter is a mammal that breathes through lungs, not gills, so it comes up for air." },
    { s: "The manta ray is a mammal because it is very big.", a: false, why: "The manta ray breathes through gills and has fins, so it is a fish; size does not decide the group." },
    { s: "A crab is an insect because it has a hard shell and legs.", a: false, why: "A crab has 10 legs, but insects have 6 legs and 3 body parts, so a crab is not an insect." },
    { s: "An adult turtle and an adult frog both breathe through lungs.", a: true, why: "Reptiles breathe through lungs, and adult amphibians breathe through lungs and moist skin." },
    { s: "Birds are the only animals that lay eggs with shells.", a: false, why: "Most reptiles also lay eggs with shells, but their shells are tough and leathery." },
    { s: "The house gecko and the python belong to the same animal group.", a: true, why: "Both are reptiles: they have dry, scaly skin and breathe through lungs." },
    { s: "Every insect has exactly one pair of feelers.", a: true, why: "1 pair of feelers is a characteristic of all insects, together with 3 body parts and 6 legs." }
  ]
};
