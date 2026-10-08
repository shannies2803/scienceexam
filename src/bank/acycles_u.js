window.BANKU = window.BANKU || {};
BANKU["acycles"] = {
  glossary: [
    { t: "Life cycle", d: "The sequence of stages an animal passes through from egg to adult. The adult reproduces, so the stages repeat again." },
    { t: "Three-stage life cycle", d: "A life cycle with no pupa stage, e.g. cockroach (egg, nymph, adult) and chicken (egg, chick, adult). The young resembles the adult." },
    { t: "Four-stage life cycle", d: "A life cycle with four stages, e.g. butterfly (egg, larva, pupa, adult) and frog (egg, tadpole, froglet, adult). The young does not resemble the adult." },
    { t: "Nymph", d: "The young stage of insects such as the cockroach, grasshopper and dragonfly. It resembles the adult but is smaller and has no wings, and it moults as it grows." },
    { t: "Larva", d: "The young that hatches from the egg in a 4-stage insect life cycle, e.g. caterpillar, maggot. It does not resemble the adult, feeds a lot and moults as it grows." },
    { t: "Pupa", d: "The stage between the larva and the adult in a 4-stage insect life cycle. It does not feed, but great changes take place inside it as it develops into the adult." },
    { t: "Adult", d: "The fully grown stage of an animal, and the only stage that can reproduce. An adult insect does not moult or grow bigger." },
    { t: "Moulting", d: "The shedding of the hard outer skin of a young insect (larva or nymph) so that it can grow bigger." },
    { t: "Tadpole", d: "The young of a frog that hatches from the egg. It lives in water, has a tail and no legs at first, and breathes through gills." },
    { t: "Froglet", d: "The stage between the tadpole and the adult frog. It has four legs and a short tail, and it has started to breathe through lungs." },
    { t: "Stagnant water", d: "Still water that does not flow, e.g. in pails, vases and choked gutters. Mosquitoes lay their eggs on it, and their larvae and pupae live in it." },
    { t: "Hatch", d: "To come out of an egg. A caterpillar hatches from a butterfly egg, and a tadpole hatches from a frog egg." }
  ],
  lessons: [
    {
      h: "Growth graphs: is the flat part a pupa or an adult?",
      concept: "On a graph of an insect’s length, the line rises while the young (larva or nymph) feeds and grows. A flat part only means it has stopped growing. In a 4-stage insect, a flat part before the adult comes out is the pupa, which does not feed. A 3-stage insect such as the cockroach has no pupa, so its line becomes flat only when it is a fully grown adult.",
      example: {
        q: "Study the graph of the length of a cockroach from the day it hatched. It fed the whole time, and its wings were fully formed on Day 60. Lee says, ‘The line is flat from Day 60, so the cockroach was a pupa then.’ (a) Is Lee correct? [1] (b) Explain your answer. [1]",
        fig: { type: "line", title: "Length of a cockroach", xl: "Day", yl: "Length (mm)", pts: [["0", 4], ["15", 9], ["30", 15], ["45", 22], ["60", 28], ["75", 28], ["90", 28]] },
        marks: 2,
        think: [
          "Step 1: Before naming any stage, recall the life cycle: the cockroach goes egg, nymph, adult. It has no pupa stage at all.",
          "Step 2: Use the clues in the question: fully formed wings on Day 60 means it had become an adult, and it was still feeding.",
          "Step 3: A flat line only means ‘stopped growing’. An adult insect is fully grown and does not moult or grow bigger.",
          "Step 4: For a 4-stage insect, a flat part BEFORE the adult comes out could be the pupa, so always check which kind of insect it is first."
        ],
        answer: "(a) No. (b) The cockroach has no pupa stage. From Day 60 it was an adult with fully formed wings, and the line is flat because the adult is fully grown and does not grow or moult any more."
      },
      tip: "A flat line means ‘stopped growing’, not ‘pupa’. Ask: does this insect have a pupa, and has the adult come out yet?",
      try: {
        q: "The graph shows the length of a mealworm from the day it hatched. A beetle came out on Day 50. On which day did the mealworm most likely become a pupa?",
        fig: { type: "line", title: "Length of a mealworm", xl: "Day", yl: "Length (mm)", pts: [["0", 2], ["10", 8], ["20", 15], ["30", 22], ["40", 22], ["50", 22]] },
        o: ["Day 10", "Day 30", "Day 40", "Day 50"], a: 1,
        why: "The pupa does not feed, so the length stops increasing; the line becomes flat from Day 30. Day 50 is when the beetle came out, at the END of the pupa stage, and the line was already flat before Day 40."
      }
    },
    {
      h: "Comparing two life cycles: a full-mark difference",
      concept: "A difference must state the SAME life-cycle feature for BOTH animals, joined by ‘but’, e.g. ‘The butterfly has a pupa stage, but the cockroach does not.’ Compare life-cycle features (number of stages, pupa stage, whether the young resembles the adult, where the young lives), not how the adults look or move. A similarity must be true for both animals.",
      example: {
        q: "State one similarity and one difference between the life cycle of a mosquito and the life cycle of a frog. [2]",
        marks: 2,
        think: [
          "Step 1: List both life cycles. Mosquito: egg, larva, pupa, adult. Frog: egg, tadpole, froglet, adult.",
          "Step 2: For the similarity, find something true for BOTH: the young of both live in water (both also have 4 stages).",
          "Step 3: For the difference, pick one feature and state it for both animals: the mosquito has a pupa stage, but the frog does not.",
          "Step 4: Avoid half answers such as ‘the mosquito has a pupa’. Without the frog’s side, the marker cannot give the mark."
        ],
        answer: "Similarity: the young of both the mosquito and the frog live in water. Difference: the mosquito has a pupa stage, but the frog does not have a pupa stage."
      },
      tip: "Difference = ‘X has …, but Y does not’. Name BOTH animals and the SAME feature.",
      try: {
        q: "Which answer would score the mark for ‘State one difference between the life cycles of a housefly and a grasshopper’?",
        o: ["The housefly has a pupa stage and it flies about quickly.", "The housefly flies, but the grasshopper hops from place to place.", "The housefly has a pupa stage, but the grasshopper does not.", "Both lay eggs, and the young of both moult as they grow."], a: 2,
        why: "Only this answer states the same life-cycle feature (the pupa stage) for BOTH insects. The others describe only the housefly, compare how the adults move, or give a similarity instead of a difference."
      }
    }
  ],
  flash: [
    { f: "Stages in the life cycle of a mosquito", b: "Egg → larva (wriggler) → pupa (tumbler) → adult (4 stages). The eggs are laid on stagnant water, where the larva and pupa live." },
    { f: "Stages in the life cycle of a housefly", b: "Egg → larva (maggot) → pupa → adult (4 stages). The eggs are laid on rotting food or rubbish, which the maggots feed on." },
    { f: "Stages in the life cycle of a chicken", b: "Egg → chick (young) → adult (3 stages). The chick resembles the adult and simply grows bigger." },
    { f: "Stages in the life cycle of a mealworm beetle", b: "Egg → larva (mealworm) → pupa → adult beetle (4 stages). The mealworm feeds on bran and moults; the pupa does not feed." },
    { f: "3-stage vs 4-stage insect life cycle: two differences", b: "3-stage: no pupa, and the young (nymph) resembles the adult. 4-stage: has a pupa, and the young (larva) does not resemble the adult." },
    { f: "Growth graph of an insect: what does a flat line show?", b: "It has stopped growing. In a 4-stage insect before the adult comes out, it is the pupa, which does not feed. In a 3-stage insect, it is the fully grown adult." },
    { f: "Why does a grasshopper damage crops for longer than a butterfly?", b: "Both the grasshopper nymph and adult feed on leaves. Only the butterfly larva (caterpillar) eats leaves; the pupa does not feed and the adult sucks nectar." },
    { f: "Why is spraying only adult mosquitoes not enough?", b: "Spraying kills only the adults. The eggs, larvae and pupae in stagnant water still develop into new adults, so the stagnant water must be removed." },
    { f: "How do guppies in a pond help to control mosquitoes?", b: "Guppies eat the mosquito larvae, so fewer larvae develop into pupae and then into adult mosquitoes." },
    { f: "Silkworm: which stage spins the cocoon, and what is inside it?", b: "The silkworm is the larva of the silkworm moth. It spins a cocoon and becomes a pupa inside it. The pupa does not feed." },
    { f: "Why use many animals, not just one, in a life cycle experiment?", b: "One animal may be weak, sick or die. Using more animals, or repeating the experiment, makes the results more reliable." },
    { f: "Why does a hen sit on her eggs?", b: "To keep the eggs warm, so that the chicks inside can develop and hatch." }
  ],
  mcq: [
    { q: "The diagram shows the life cycle of a mealworm beetle. What is stage P?", o: ["Nymph", "Larva", "Tadpole", "Pupa"], a: 3, lvl: 1,
      why: "The mealworm is the larva. It becomes a pupa (P), from which the adult beetle comes out. A nymph is found only in 3-stage insect life cycles.",
      fig: { type: "cycle", stages: ["Egg", "Mealworm", "P", "Beetle"] } },
    { q: "Which stage of an insect sheds its outer skin several times as it grows?", o: ["Egg", "Nymph", "Pupa", "Adult"], a: 1, lvl: 1,
      why: "A nymph moults several times to grow bigger. The egg and pupa do not feed or grow, and the adult is fully grown, so it does not moult." },
    { q: "At the Jacob Ballas Children’s Garden, Ali watched a butterfly sucking nectar from a flower. Which stage of the life cycle was he watching?", o: ["Larva", "Adult", "Pupa", "Egg"], a: 1, lvl: 1,
      why: "Only the adult butterfly sucks nectar. The larva (caterpillar) eats leaves and the pupa does not feed." },
    { q: "How many stages are there in the life cycle of a mosquito?", o: ["2", "3", "4", "5"], a: 2, lvl: 1,
      why: "The mosquito goes through egg, larva (wriggler), pupa (tumbler) and adult, which is 4 stages." },
    { q: "The graph shows the number of days a ladybird spent in each stage before becoming an adult. How many more days did the larva stage last than the pupa stage?", o: ["18 days", "6 days", "22 days", "8 days"], a: 1, lvl: 2,
      why: "Larva 12 days minus pupa 6 days = 6 days. 18 days adds the two stages instead, and 8 days compares the larva with the egg.",
      fig: { type: "bar", title: "Days in each stage of a ladybird", xl: "Stage", yl: "Number of days", bars: [["Egg", 4], ["Larva", 12], ["Pupa", 6]] } },
    { q: "Study the Venn diagram. Which animal could be X?", o: ["Grasshopper", "Mosquito", "Butterfly", "Cockroach"], a: 2, lvl: 2,
      why: "X has a pupa stage AND its young feeds on leaves: the butterfly, whose caterpillar eats leaves. The grasshopper and cockroach have no pupa, and the mosquito larva feeds on tiny things in water.",
      fig: { type: "venn", a: "Has a pupa stage", b: "Young feeds on leaves", onlyA: ["mosquito", "housefly"], both: ["X"], onlyB: ["grasshopper"], neither: ["dragonfly"] } },
    { q: "Which of these is NOT a place where mosquitoes are likely to breed in an HDB flat?", o: ["A dry pail kept upside down", "A plate of water under a flower pot", "A vase of water left for two weeks", "A pail of rainwater left uncovered"], a: 0, lvl: 2,
      why: "A dry, upside-down pail cannot collect stagnant water, so mosquitoes have nowhere to lay eggs in it. The other three all hold stagnant water." },
    { q: "Which statements about the dragonfly and the grasshopper are true?\nA: Both have a nymph stage.\nB: The young of both live in water.\nC: Both have 3 stages in their life cycles.", o: ["A only", "A and B only", "A and C only", "A, B and C"], a: 2, lvl: 2,
      why: "Both go through egg, nymph and adult, so A and C are true. B is false: the dragonfly nymph lives in water, but the grasshopper nymph lives on land." },
    { q: "Mei kept 10 grasshopper nymphs in a covered tank with fresh grass for 3 weeks. What will she most likely find in the tank?", o: ["Bigger nymphs and their empty moulted skins", "Pupae hanging still from the grass stems", "Worm-like larvae feeding on the grass", "Eggs hatching into tadpoles in the tank"], a: 0, lvl: 2,
      why: "Grasshopper nymphs eat grass and moult as they grow, leaving empty skins behind. The grasshopper has no larva or pupa stage, and tadpoles are young frogs." },
    { q: "Which stage is correctly matched with what it feeds on?", o: ["Tadpole: water plants", "Adult butterfly: leaves", "Mosquito pupa: tiny things in water", "Maggot: nectar from flowers"], a: 0, lvl: 2,
      why: "Tadpoles feed on water plants. The adult butterfly sucks nectar, the mosquito pupa does not feed, and maggots feed on rotting food." },
    { q: "Pupils counted the stages of frogs in their school pond. Study the graph. Which stage has four legs and a short tail, and how many of this stage were counted?", o: ["Tadpole; 35", "Froglet; 35", "Adult; 5", "Froglet; 12"], a: 3, lvl: 2,
      why: "The froglet has four legs and a short tail, and the graph shows 12 froglets. 35 is the number of tadpoles.",
      fig: { type: "bar", title: "Frog stages in the school pond", xl: "Stage", yl: "Number counted", bars: [["Egg", 60], ["Tadpole", 35], ["Froglet", 12], ["Adult", 5]] } },
    { q: "NEA officers checked three bins at a hawker centre for maggots. Study the table. Which conclusion is best supported by the results for Bins P and Q?", o: ["Covering bins stops houseflies from reaching the rubbish to lay eggs.", "Emptying bins every day kills all the adult houseflies nearby.", "Maggots come from the rubbish itself, not from housefly eggs.", "Bins that are emptied less often have fewer maggots in them."], a: 0, lvl: 3,
      why: "P and Q differ only in the lid, and only the uncovered bin had maggots, so the lid kept houseflies away from the rubbish. Maggots hatch from eggs laid by houseflies, and Bin R, emptied least often, had the MOST maggots.",
      tbl: [["Bin", "Lid", "How often emptied", "Maggots found"], ["P", "Covered", "Every day", "0"], ["Q", "Uncovered", "Every day", "6"], ["R", "Uncovered", "Every 3 days", "48"]] },
    { q: "Ahmad wants to find out if the type of food affects how many days maggots take to become pupae. Study the set-ups. Which two set-ups should he compare?", o: ["A and D", "B and C", "C and D", "A and B"], a: 3, lvl: 3,
      why: "A and B differ only in the type of food. A and D differ only in temperature, B and C only in the number of maggots, and C and D differ in all three.",
      fig: { type: "setups", items: [
        { label: "A", icon: "box", lines: ["20 maggots", "Raw fish", "28 °C"] },
        { label: "B", icon: "box", lines: ["20 maggots", "Rotting fruit", "28 °C"] },
        { label: "C", icon: "box", lines: ["10 maggots", "Rotting fruit", "28 °C"] },
        { label: "D", icon: "box", lines: ["20 maggots", "Raw fish", "32 °C"] } ] } },
    { q: "The diagram shows the life cycle of a cockroach. Which statements about stage Q are correct?\nA: It resembles the adult.\nB: It has fully formed wings.\nC: It moults several times.\nD: It does not feed.", o: ["A and B only", "C and D only", "A, B and C only", "A and C only"], a: 3, lvl: 3,
      why: "Q is the nymph. It resembles the adult and moults as it grows (A and C). It has no wings (B is false), and it feeds on the same food as the adult (D is false).",
      fig: { type: "cycle", stages: ["Egg", "Q", "Adult"] } },
    { q: "Which statement is true for the mosquito but NOT for the housefly?", o: ["It has a pupa stage.", "Its larva lives in water.", "Its larva does not resemble the adult.", "Its adult can fly."], a: 1, lvl: 3,
      why: "Mosquito larvae live in stagnant water, while housefly larvae (maggots) live in rotting food. Both insects have a pupa, larvae unlike the adults and flying adults." },
    { q: "Study the flowchart. In which groups are the mosquito larva and the grasshopper nymph, in that order?", o: ["A and C", "B and D", "B and C", "A and D"], a: 2, lvl: 3,
      why: "The mosquito larva lives in water and has no legs, so it is in B. The grasshopper nymph lives on land and looks like the adult, so it is in C.",
      fig: { type: "flow", root: "Young animals", node: { q: "Lives in water?", yes: { q: "Has legs?", yes: "A", no: "B" }, no: { q: "Looks like adult?", yes: "C", no: "D" } } } },
    { q: "Ravi recorded what he saw of an insect in the school garden. Study the table. Which statement about this insect is correct?", o: ["It has a pupa stage between Day 35 and Day 60.", "Its young is a larva that moults as it grows.", "It has 3 stages, and its young is a nymph.", "Its adult moulted on Day 35 to grow its wings."], a: 2, lvl: 3,
      why: "The wingless young looks like the adult and moults, so it is a nymph in a 3-stage life cycle (like a grasshopper). There is no still, non-feeding stage: the young simply grew wings. On Day 35 it was still a young, not an adult.",
      tbl: [["Day", "What Ravi saw"], ["1", "Eggs laid in the soil"], ["20", "Small young with no wings that looks like the adult, eating leaves"], ["35", "An empty skin shaped like the young"], ["60", "The young now has fully formed wings"]] },
    { q: "A lime butterfly laid a batch of eggs on Mr Tan’s lime plant on Day 0 and another batch on Day 6. The graph shows how long each stage lasts. Which stages of these butterflies would he find on the plant on Day 20?", o: ["Larvae only", "Pupae and adults", "Pupae only", "Larvae and pupae"], a: 3, lvl: 4,
      why: "Batch 1: larvae from Day 4, pupae from Day 16, adults on Day 24, so on Day 20 they are pupae. Batch 2: larvae from Day 10 until Day 22, so on Day 20 they are still larvae.",
      fig: { type: "bar", title: "Days in each stage", xl: "Stage", yl: "Number of days", bars: [["Egg", 4], ["Larva", 12], ["Pupa", 8]] } },
    { q: "Ken says, ‘If the young and the adult of an insect eat the same food, the insect must have a 3-stage life cycle.’ Which insect shows that Ken is wrong?", o: ["Grasshopper", "Ladybird", "Butterfly", "Cockroach"], a: 1, lvl: 4,
      why: "Ladybird larvae and adults both eat aphids, yet the ladybird has 4 stages (egg, larva, pupa, adult). The grasshopper and cockroach agree with Ken, and the butterfly’s young and adult eat different food, so it does not test his idea." },
    { q: "In an experiment, the number of days mosquitoes took to develop from egg to adult was recorded at different water temperatures. Mdm Tan changes the water in the vase in her HDB flat every 10 days. At which temperatures could new adult mosquitoes come out of her vase before she changes the water?", o: ["30 °C and 32 °C only", "32 °C only", "27 °C, 30 °C and 32 °C only", "At all four temperatures"], a: 0, lvl: 4,
      why: "If eggs are laid just after she changes the water, adults come out in fewer than 10 days only at 30 °C (9 days) and 32 °C (7 days). At 27 °C (11 days) and 24 °C (14 days) the water is poured away first.",
      tbl: [["Water temperature (°C)", "Days from egg to adult"], ["24", "14"], ["27", "11"], ["30", "9"], ["32", "7"]] }
  ],
  oe: [
    { q: "The diagram shows the life cycle of a housefly. (a) Name stage R. [1] (b) Houseflies lay their eggs on rotting food and rubbish. Explain why this is a good place for the eggs. [1] (c) Cleaners at a hawker centre cover the bins tightly and clear leftover food quickly. Explain how this reduces the number of houseflies. [1]", marks: 3,
      fig: { type: "cycle", stages: ["Egg", "Maggot", "R", "Adult"] },
      kw: [["pupa", "pupae"], ["food for", "food to eat", "have food", "feed on", "can eat", "can feed"], ["lay eggs", "lay their eggs", "lay its eggs", "laying eggs", "cannot lay", "can't lay", "reach", "cannot reach", "can't reach", "cannot get", "can't get"]],
      model: "(a) R is the pupa. (b) When the eggs hatch, the maggots have food to eat, as they feed on the rotting food. (c) The tight lids stop adult houseflies from reaching the rubbish to lay their eggs, and clearing leftovers removes the maggots’ food, so fewer new houseflies develop." },
    { q: "Jia Hui kept 10 tadpoles in each of three tanks of pond water at different temperatures. She recorded how many days they took to become froglets. Study the table. (a) What was she trying to find out? [1] (b) State one variable she should keep the same. [1] (c) What can she conclude from the results? [1] (d) Predict whether tadpoles kept at 20 °C would take more or fewer than 60 days to become froglets. Explain using the results. [1]", marks: 4, x: 1,
      tbl: [["Water temperature (°C)", "Days to become froglets"], ["24", "60"], ["28", "45"], ["32", "35"]],
      kw: [["temperature"], ["number of tadpoles", "10 tadpoles", "ten tadpoles", "amount of water", "volume of water", "amount of pond water", "volume of pond water", "same amount", "type of water", "amount of food", "type of food", "size of the tank", "size of tank"], ["higher the", "lower the", "fewer days", "less time", "shorter time", "faster", "quicker"], ["more than 60", "longer", "more days", "slower"]],
      model: "(a) Whether the temperature of the water affects how many days tadpoles take to become froglets. (b) The number of tadpoles in each tank (or the amount of food). (c) The higher the water temperature, the fewer days the tadpoles took to become froglets. (d) More than 60 days. 20 °C is colder than 24 °C, and the results show that the lower the temperature, the longer the tadpoles take to become froglets." },
    { q: "Study the Venn diagram. (a) Explain why the dragonfly is placed in the overlapping region. [1] (b) In which region should the ladybird be placed? [1] (c) The mosquito and the frog are in the same region. State one difference between their life cycles. [1]", marks: 3,
      fig: { type: "venn", a: "Young resembles adult", b: "Young lives in water", onlyA: ["cockroach", "chicken"], both: ["dragonfly"], onlyB: ["mosquito", "frog"], neither: ["butterfly", "housefly"] },
      kw: [["nymph", "resembl", "look like", "looks like", "similar"], ["outside", "neither", "with the butterfly", "with butterfly", "with the housefly", "with housefly", "not in any", "not in either"], ["pupa", "no pupa", "not have a pupa", "doesn't have a pupa", "without a pupa", "tadpole", "froglet"]],
      model: "(a) Its young, the nymph, resembles the adult and lives in water. (b) Outside both circles, with the butterfly and the housefly. (c) The mosquito has a pupa stage, but the frog does not have a pupa stage." },
    { q: "Mr Lee found cockroaches in his HDB kitchen. He also found small egg cases behind his fridge. (a) Name the stage that hatches out of the eggs. [1] (b) State one way this young cockroach is similar to the adult. [1] (c) Mr Lee sprayed insecticide on the adult cockroaches only. Two months later, he saw many cockroaches again. Explain why. [1] (d) Suggest one other thing he should do to reduce the number of cockroaches, and explain how it helps. [1]", marks: 4,
      kw: [["nymph"], ["resembl", "look like", "looks like", "similar body", "same shape", "same body", "same food", "eat the same", "eats the same", "six legs", "6 legs", "antenna", "feeler"], ["hatch", "grew", "grow", "develop", "become"], ["remove", "throw", "clear", "clean", "seal", "destroy"]],
      model: "(a) The nymph. (b) It looks like the adult in body shape, but it is smaller and has no wings. (c) The spray killed only the adults. The eggs in the egg cases hatched into nymphs, which grew into new adults. (d) He should remove the egg cases, so that no more nymphs can hatch from them and grow into adults." }
  ],
  tf: [
    { s: "The more stages an animal has in its life cycle, the longer it takes to become an adult.", a: false, why: "Not true: a mosquito (4 stages) can become an adult in about 10 days, but a cockroach (3 stages) takes months." },
    { s: "An insect egg is not living because it does not move or feed.", a: false, why: "The egg is alive: the young develops inside it and hatches out." },
    { s: "Frog eggs hatch into froglets.", a: false, why: "Frog eggs hatch into tadpoles, which later grow legs and become froglets." },
    { s: "Mosquitoes lay their eggs only in dirty water, so clean stagnant water in a vase is safe.", a: false, why: "Mosquitoes that spread dengue breed in clean stagnant water, such as in vases and pails." },
    { s: "A small ladybird with fully formed wings will moult and grow into a bigger ladybird.", a: false, why: "A ladybird with fully formed wings is an adult; adults are fully grown and do not moult." },
    { s: "Neither the egg nor the pupa of a butterfly feeds.", a: true, why: "Only the larva (caterpillar) and the adult feed; the egg and pupa do not." },
    { s: "A housefly maggot looks very different from the adult housefly.", a: true, why: "A maggot is a larva, and a larva does not resemble the adult." },
    { s: "A grasshopper nymph becomes bigger after each moult.", a: true, why: "It sheds its outer skin so that it can grow bigger." },
    { s: "Both the dragonfly and the cockroach have a 3-stage life cycle.", a: true, why: "Both go through egg, nymph and adult, with no pupa stage." },
    { s: "Covering rubbish bins tightly helps to reduce the number of houseflies.", a: true, why: "Adult houseflies cannot reach the rubbish to lay their eggs, so no maggots develop there." }
  ]
};
