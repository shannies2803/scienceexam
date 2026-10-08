window.BANKY = window.BANKY || {};
BANKY["acycles"] = {
  lessons: [
    {
      h: "Nymph or larva? Reading life cycle clues",
      concept: "To work out a life cycle from clues, first ask whether the young looks like the adult. If it does, apart from having no wings, it is a nymph in a 3-stage cycle (egg, nymph, adult). If the young looks very different and later becomes a still, non-feeding pupa, it is a 4-stage cycle (egg, larva, pupa, adult). The frog is the exception: it has 4 stages but no pupa.",
      example: {
        q: "Animal X lays its eggs on leaves. Its young has no wings but has the same body shape as the adult. The young feeds on the same leaves as the adult and moults several times as it grows. (a) How many stages are there in the life cycle of X? (b) Name the young of X and give a reason.",
        marks: 2,
        think: [
          "Step 1: Pick out the key clue: the young has the same body shape as the adult and only lacks wings.",
          "Step 2: A young that resembles the adult means there is no larva and no pupa, so it is a 3-stage life cycle.",
          "Step 3: The young of an insect with a 3-stage life cycle is called a nymph.",
          "Step 4: Use the clue from the question as your reason; do not just name the stage."
        ],
        answer: "(a) 3 stages: egg, nymph and adult. (b) The young is a nymph, because it looks like the adult except that it has no wings."
      },
      tip: "The reason for ‘nymph’ is always ‘it looks like the adult but has no wings’. Write that phrase.",
      try: {
        q: "The young of animal Y is worm-like and eats bran. After moulting several times, it stops feeding and hardly moves for a week. Then a beetle comes out. Which statement about Y is correct?",
        o: ["Y has 3 stages, and its young is a nymph.", "Y has no larva stage.", "Y has 4 stages: egg, larva, pupa and adult.", "The young of Y looks like the adult."], a: 2,
        why: "A worm-like young that looks nothing like the beetle is a larva, and the still, non-feeding stage is the pupa, so Y has 4 stages. This is the mealworm beetle."
      }
    },
    {
      h: "Explaining how a method stops mosquitoes",
      concept: "A full-mark answer names the stage that is affected and explains how this breaks the life cycle, so that fewer or no new adults are produced. Removing stagnant water means female mosquitoes have nowhere to lay eggs, and larvae and pupae cannot develop. A layer of oil stops larvae and pupae from breathing air at the water surface. Spraying kills only the adults that are there; the young in the water still become new adults.",
      example: {
        q: "Mdm Wong sprays insecticide at adult mosquitoes in her flat every week, but she leaves water in the plates under her flower pots. Mosquitoes keep appearing. (a) Explain why. (b) Suggest what she should do, and explain how it helps.",
        marks: 2,
        think: [
          "Step 1: Ask which stages the spray reaches: only the adults flying about.",
          "Step 2: Ask where the other stages are: eggs, larvae and pupae are in the water in the plates.",
          "Step 3: These young keep developing, so new adults keep coming out after each spray.",
          "Step 4: The fix must stop the stages in the water: remove the water, so there is nowhere to lay eggs and no water for the larvae and pupae to live in."
        ],
        answer: "(a) The spray kills only the adult mosquitoes. The eggs, larvae and pupae in the water in the plates still develop into new adults. (b) She should remove the water from the plates, so mosquitoes have no stagnant water to lay eggs in and the larvae and pupae cannot develop into adults."
      },
      tip: "Name the stage + what the method does to it + ‘so fewer adults are produced’.",
      try: {
        q: "How does a layer of oil on a pond help to reduce the number of mosquitoes?",
        o: ["It stops the larvae and pupae from breathing air at the surface, so they die before becoming adults.", "It poisons the adult mosquitoes flying above the pond, so they die before they can lay eggs.", "It gives the larvae too much food, so they grow too fast and die before becoming pupae.", "It makes the water too cold for the eggs, so the eggs cannot hatch into larvae at all."], a: 0,
        why: "Mosquito larvae and pupae live in water but come up to the surface to breathe air. The oil layer blocks this, so they die before they become adults."
      }
    },
    {
      h: "Working with stage-duration tables",
      concept: "To find when the adult comes out, add the days of every stage BEFORE the adult, and never add the adult’s own days. To find how long an insect damages plants, add only the stages that feed on plants. For a butterfly that is the larva (caterpillar), because the pupa does not feed and the adult drinks nectar.",
      example: {
        q: "The table shows the number of days a butterfly spent in each stage. (a) How many days after the egg was laid did the adult come out? (b) For how many days did this butterfly damage leaves?",
        tbl: [["Stage", "Number of days"], ["Egg", "4"], ["Larva", "14"], ["Pupa", "10"], ["Adult", "21"]],
        marks: 2,
        think: [
          "Step 1: The adult comes out at the END of the pupa stage, so add egg + larva + pupa: 4 + 14 + 10 = 28.",
          "Step 2: Do not add the 21 days: those are days the adult has already come out.",
          "Step 3: For (b), decide which stage eats leaves. Only the larva (caterpillar) does; the pupa does not feed and the adult drinks nectar.",
          "Step 4: So the damage lasts only as long as the larva stage: 14 days."
        ],
        answer: "(a) 28 days (4 + 14 + 10). (b) 14 days, because only the larva (caterpillar) feeds on leaves. The pupa does not feed and the adult feeds on nectar."
      },
      tip: "Adult comes out = add every stage BEFORE the adult. Never add the adult days.",
      try: {
        q: "The table shows how long a mosquito spends in each stage. Mosquito eggs were laid in a pail of water on Day 0. Which is the LATEST time Mr Lim can pour away the water and still stop these mosquitoes from becoming adults?",
        tbl: [["Stage", "Number of days"], ["Egg", "2"], ["Larva", "7"], ["Pupa", "2"], ["Adult", "14"]],
        o: ["Before Day 2", "Before Day 9", "Before Day 25", "Before Day 11"], a: 3,
        why: "The adults come out after 2 + 7 + 2 = 11 days, so the water must go before Day 11. Before Day 9 also works but is not the latest, and Day 25 wrongly adds the adult days."
      }
    },
    {
      h: "The frog: four stages but no pupa",
      concept: "The frog’s life cycle is egg → tadpole → froglet → adult frog. The tadpole lives in water, has a tail and no legs at first, and breathes through gills. The froglet has legs and a short tail. The adult frog has no tail, breathes through lungs and moist skin, and can live on land. The frog has 4 stages, but none of them is a pupa: it changes gradually while it keeps moving about.",
      example: {
        q: "Jun says, ‘The froglet is the pupa of the frog, because it comes between the young and the adult.’ (a) Is Jun correct? (b) Explain your answer.",
        marks: 2,
        think: [
          "Step 1: Recall the frog’s stages: egg, tadpole, froglet, adult frog. None of them is called a pupa.",
          "Step 2: Recall what a pupa is like: it stays still and does not feed while it changes into the adult.",
          "Step 3: Compare with the froglet: it moves about actively and swims using its legs and tail.",
          "Step 4: Give the verdict first, then the comparison as evidence."
        ],
        answer: "(a) No. (b) The frog has no pupa stage; its stages are egg, tadpole, froglet and adult frog. A pupa stays still and does not feed, but a froglet moves about actively and swims using its legs and tail."
      },
      tip: "Four stages does NOT mean a pupa: frog = egg, tadpole, froglet, adult.",
      try: {
        q: "Which change takes place as a tadpole develops into an adult frog?",
        o: ["It grows wings.", "It grows legs and loses its tail.", "It forms a hard case and stops moving.", "It starts to breathe through gills."], a: 1,
        why: "The tadpole grows legs and its tail gets shorter until it disappears. It breathes through gills as a tadpole and through lungs and moist skin as an adult; a hard, still case is a pupa, which frogs do not have."
      }
    },
    {
      h: "Which stage damages crops?",
      concept: "To decide which stage damages crops, look at what each stage eats. In a butterfly, only the caterpillar (larva) eats leaves, while the adult drinks nectar. In a grasshopper, the nymph and the adult both eat leaves, so it damages crops for most of its life cycle. Removing the adults alone does not protect crops if the young are left behind to feed.",
      example: {
        q: "Farmer Lim catches all the butterflies on his vegetable farm but leaves the caterpillars. Farmer Ali catches all the adult grasshoppers on his farm but leaves the nymphs. Whose crops will still be damaged in the next few days? Explain.",
        marks: 2,
        think: [
          "Step 1: Check what the stage that was LEFT BEHIND eats on each farm.",
          "Step 2: Lim left the caterpillars, which eat leaves. The butterflies he caught only drink nectar.",
          "Step 3: Ali left the nymphs, which eat the same leaves as adult grasshoppers.",
          "Step 4: Both farms still have a leaf-eating stage, so both will still be damaged. Beware the trap of choosing only one farmer."
        ],
        answer: "Both farmers’ crops will still be damaged. Lim left the caterpillars, which feed on leaves. Ali left the grasshopper nymphs, which feed on the same leaves as the adults."
      },
      tip: "Check what the YOUNG eats. For many insect pests, the young do the damage.",
      try: {
        q: "Which insect damages leaves at BOTH its young stage and its adult stage?",
        o: ["Butterfly", "Mosquito", "Grasshopper", "Housefly"], a: 2,
        why: "Grasshopper nymphs and adults both feed on leaves. An adult butterfly drinks nectar, and mosquitoes and houseflies do not feed on crop leaves at any stage."
      }
    }
  ],
  expert: [
    { q: "The diagram shows the life cycle of an insect. Stage P lives in water and feeds. Stage Q also lives in water but does not feed. Which animal is it?", o: ["Frog", "Housefly", "Butterfly", "Mosquito"], a: 3, lvl: 4,
      why: "A young that feeds in water and a non-feeding stage that also lives in water is a mosquito’s larva and pupa. The frog is not an insect and has no pupa, and housefly and butterfly young do not live in water.",
      fig: { type: "cycle", stages: ["Egg", "P", "Q", "Adult"] } },
    { q: "The graph shows how many days a butterfly spent in each stage before becoming an adult. The eggs were laid on a cabbage on Day 0. Up to which day will the young of this butterfly eat the cabbage leaves?", o: ["Day 3", "Day 12", "Day 15", "Day 22"], a: 2, lvl: 4,
      why: "The caterpillar hatches on Day 3 and eats for 12 days, until Day 3 + 12 = 15. After that it is a pupa, which does not feed. Day 12 forgets the egg days, and Day 22 wrongly includes the pupa.",
      fig: { type: "bar", title: "Days in each stage", xl: "Stage", yl: "Number of days", bars: [["Egg", 3], ["Larva", 12], ["Pupa", 7]] } },
    { q: "The graph shows the length of the tail of a young frog. Its back legs appeared in Week 3 and its front legs in Week 4. Which stage was it most likely in during Week 5?", o: ["Tadpole with no legs", "Froglet", "Adult frog", "Tadpole with back legs only"], a: 1, lvl: 4,
      why: "By Week 5 it had all four legs and its tail was getting shorter but was not gone, which describes a froglet. It became an adult frog only in Week 6, when the tail had disappeared.",
      fig: { type: "line", title: "Length of tail", xl: "Week", yl: "Length of tail (mm)", pts: [["1", 3], ["2", 6], ["3", 9], ["4", 10], ["5", 5], ["6", 0]] } },
    { q: "Study the Venn diagram. A dragonfly lays its eggs in a pond. Its young, called a nymph, lives in the water and has no wings, then becomes a flying adult without a pupa stage. A mealworm beetle has a larva and a pupa that live in bran. Which animal could be X?", o: ["Dragonfly", "Grasshopper", "Mealworm beetle", "Housefly"], a: 0, lvl: 4,
      why: "X’s young lives in water but X does not have 4 stages. The dragonfly (egg, nymph, adult) fits both clues. The grasshopper’s young lives on land, and the mealworm beetle and housefly have 4 stages with young that do not live in water.",
      fig: { type: "venn", a: "Young lives in water", b: "Has 4 stages", onlyA: ["X"], both: ["mosquito", "frog"], onlyB: ["butterfly", "housefly"], neither: ["cockroach", "chicken"] } },
    { q: "Study the flowchart. Mealworm larvae and adult mealworm beetles both feed on bran. In which group is the mealworm beetle?", o: ["P", "Q", "R", "S"], a: 1, lvl: 4,
      why: "The larva and adult eat the same food (bran), so take ‘yes’. The mealworm beetle has 4 stages (egg, larva, pupa, adult), not 3, so it is Q. R is tempting because it has a pupa, but that branch is only for young and adults that eat different food.",
      fig: { type: "flow", root: "Animals", node: { q: "Young & adult eat same food?", yes: { q: "Has 3 stages?", yes: "P", no: "Q" }, no: { q: "Has a pupa stage?", yes: "R", no: "S" } } } },
    { q: "The diagram shows the life cycle of a mosquito. Which stages can be found in stagnant water?", o: ["Larva only", "Larva and pupa only", "Egg, larva and pupa", "Egg, larva, pupa and adult"], a: 2, lvl: 4,
      why: "The female lays her eggs in or on stagnant water, and the larva and pupa live in the water. Only the adult flies. This is why removing stagnant water destroys three of the four stages at once.",
      fig: { type: "cycle", stages: ["Egg", "Larva", "Pupa", "Adult"] } },
    { q: "Sam wants to find out if guppies reduce the number of mosquito larvae. Study the set-ups. Which two set-ups should he compare?", o: ["A and B", "A and C", "B and D", "A and D"], a: 0, lvl: 4,
      why: "A and B differ only in the guppies. A and C differ in guppies, the number of larvae and the type of water. B and D differ in the oil, and A and D differ in both guppies and oil.",
      fig: { type: "setups", items: [
        { label: "A", icon: "box", lines: ["20 larvae", "Pond water", "No guppies"] },
        { label: "B", icon: "box", lines: ["20 larvae", "Pond water", "2 guppies"] },
        { label: "C", icon: "box", lines: ["10 larvae", "Tap water", "2 guppies"] },
        { label: "D", icon: "box", lines: ["20 larvae", "Pond water", "2 guppies", "Layer of oil"] } ] } },
    { q: "The table shows the number of days insects J and K spend in each stage. Which statement is correct?", tbl: [["Insect", "Days as egg", "Days as young", "Days as pupa"], ["J", "2", "6", "2"], ["K", "30", "60", "none"]], o: ["K takes fewer days than J to become an adult, so K grows faster.", "The young of J looks like the adult J, only smaller and without wings.", "J and K both have 4 stages: egg, larva, pupa and adult.", "The young of K is a nymph that looks like the adult but has no wings."], a: 3, lvl: 4,
      why: "K has no pupa, so it has 3 stages and its young is a nymph that resembles the adult. J has a pupa, so its young is a larva that does not look like the adult. K takes 90 days to become an adult, compared with only 10 days for J." },
    { q: "Ravi found four empty, dry skins on a plant. Each was shaped like a grasshopper without wings, and each was a different size. Which is the best conclusion?", o: ["A grasshopper nymph shed its skin several times as it grew bigger.", "An adult grasshopper moulted four times to grow bigger.", "These are the empty cases of grasshopper pupae.", "The grasshopper was dying, so its skin fell off."], a: 0, lvl: 4,
      why: "Wingless skins of increasing sizes come from a nymph moulting as it grows. Adult insects do not moult, and the grasshopper has no pupa stage." },
    { q: "Which of these statements about the mosquito are true?\nA: The larva comes up to the water surface to breathe air.\nB: The pupa feeds on tiny living things in the water.\nC: The adult female lays eggs in or near stagnant water.\nD: A layer of oil on the water stops both larvae and pupae from breathing.", o: ["A and C only", "B, C and D only", "A, C and D only", "A, B, C and D"], a: 2, lvl: 4,
      why: "Only B is false, because the mosquito pupa does not feed. A, C and D are true. ‘A and C only’ misses D: oil blocks the pupa as well as the larva." },
    { q: "Covering rubbish bins tightly helps to reduce the number of houseflies. What is the main reason?", o: ["The maggots already inside the bin cannot breathe, so they die before becoming pupae.", "Adult flies cannot reach the rubbish to lay eggs, so no maggots can develop there.", "It becomes too dark inside the bin for the pupae to grow into adults.", "The bin becomes too hot for the adult flies to stay and feed on the rubbish."], a: 1, lvl: 4,
      why: "Houseflies lay their eggs on rotting food and rubbish, where the maggots feed. A tight lid stops adults from reaching the rubbish, which breaks the life cycle at the egg stage." },
    { q: "Which statement correctly compares a tadpole with a caterpillar?", o: ["Both breathe through gills until they become adults.", "Both live in water and swim about using their tails.", "Both become a pupa next, before turning into adults.", "Both feed and look very different from their adults."], a: 3, lvl: 4,
      why: "Both young feed and look very different from their adults. Only the tadpole lives in water and has gills, and only the caterpillar becomes a pupa; the tadpole becomes a froglet." }
  ],
  oex: [
    { q: "Study the life cycle of a butterfly. (a) Name stage Q. (b) Name stage P. (c) A farmer finds many Q on his vegetable plants. Will they damage his leaves over the next week? Explain.", marks: 4,
      kw: [["pupa", "chrysalis"], ["larva", "caterpillar"], ["not feed", "don’t feed", "not eat", "cannot feed", "cannot eat", "no food"], ["nectar", "flower"]],
      model: "(a) Q is the pupa (chrysalis). (b) P is the larva (caterpillar). (c) No. The pupae do not feed, and the adults that come out feed on nectar, not leaves. (However, the adults may lay eggs, and the new caterpillars could damage the leaves later.)",
      fig: { type: "cycle", stages: ["Egg", "P", "Q", "Adult"] } },
    { q: "Sam put 20 mosquito larvae into each of two tanks of pond water of the same size. He added 2 guppies to Tank B only. After 3 days, he counted the larvae left. Study the graph. (a) Which variable did Sam change? (b) What can he conclude? (c) Explain how this would reduce the number of adult mosquitoes.", marks: 3,
      kw: [["guppies", "guppy"], ["eat", "fewer larvae", "reduce"], ["pupa", "become adult", "develop into adult", "grow into adult", "become an adult"]],
      model: "(a) Whether there were guppies in the tank. (b) Guppies eat mosquito larvae, so fewer larvae were left in Tank B. (c) Fewer larvae survive to become pupae and then adults, so fewer adult mosquitoes come out.",
      fig: { type: "bar", title: "Larvae left after 3 days", xl: "Tank", yl: "Number of larvae", bars: [["A: no guppies", 20], ["B: 2 guppies", 3]] } },
    { q: "Study the life cycle of a frog. (a) Name stage P. (b) Describe two ways in which P is different from a young tadpole. (c) Explain why the frog’s life cycle is not the same as the butterfly’s, even though both have 4 stages.", marks: 4,
      kw: [["froglet"], ["leg"], ["tail", "lung", "land"], ["no pupa", "not have a pupa", "without a pupa", "butterfly has a pupa", "butterfly has pupa"]],
      model: "(a) P is the froglet. (b) The froglet has legs, but a young tadpole has none. The froglet also has a shorter tail and breathes through lungs, so it can move onto land. (c) The frog has no pupa stage (egg, tadpole, froglet, adult), but the butterfly has a pupa stage (egg, larva, pupa, adult).",
      fig: { type: "cycle", stages: ["Egg", "Tadpole", "P", "Adult frog"] } },
    { q: "Study the table. (a) How many days after the egg was laid did the adult butterfly come out? (b) Why is there no number for the cockroach’s pupa? (c) The caterpillar and the cockroach nymph both moult. Explain why they need to moult.", marks: 3,
      tbl: [["Insect", "Egg (days)", "Young (days)", "Pupa (days)"], ["Butterfly", "5", "15", "9"], ["Cockroach", "40", "150", "–"]],
      kw: [["29"], ["no pupa", "3 stages", "three stages", "nymph"], ["grow", "skin", "outer covering", "hard"]],
      model: "(a) 29 days (5 + 15 + 9). (b) The cockroach has no pupa stage. It has 3 stages: egg, nymph and adult. (c) As the young grow bigger, their hard outer covering cannot stretch, so they shed the old covering (moult) to grow." }
  ]
};
