window.LBU = window.LBU || {};
LBU["k-play"] = {
  glossary: [
    { t: "Push", d: "A push moves a thing away from you, like kicking a ball or closing a door." },
    { t: "Pull", d: "A pull moves a thing towards you, like opening a drawer or tugging a rope." },
    { t: "Ramp", d: "A slope that goes from low to high. Things can roll or slide down it." },
    { t: "Float", d: "To stay on top of the water, like a plastic duck in the bath." },
    { t: "Sink", d: "To go down to the bottom of the water, like a stone in a pond." },
    { t: "Magnet", d: "A thing that pulls things made of iron or steel, like paper clips and nails." },
    { t: "Poles", d: "The two ends of a magnet, called N and S. A magnet pulls hardest at its poles." },
    { t: "Vibrate", d: "To shake very quickly. Sounds are made when things vibrate." }
  ],
  lessons: [
    {
      h: "Reading a bar graph",
      concept: "A bar graph uses bars to show numbers. A taller bar means more. A shorter bar means less. Read the name under each bar to know what it shows.",
      example: { q: "Wei dropped the same ball from three heights. The graph shows how high it bounced each time. From which height did it bounce the highest?",
        fig: { type: "bar", xl: "Dropped from", yl: "Height of bounce (cm)", bars: [["1 m", 20], ["2 m", 40], ["3 m", 60]] },
        think: ["The question asks for the HIGHEST bounce, so look for the tallest bar.", "The tallest bar is 60 cm.", "The name under that bar is 3 m."],
        answer: "It bounced the highest when it was dropped from 3 m." },
      tip: "Tallest bar = most. Shortest bar = least. Read the question word carefully!",
      try: { q: "Kids put spoons of sand into three toy boats until each one sank. Which boat sank with the FEWEST spoons of sand?", o: ["Boat A", "Boat B", "Boat C"], a: 1, why: "FEWEST means look for the shortest bar. Boat B sank with only 3 spoons of sand.",
        fig: { type: "bar", xl: "Boat", yl: "Spoons of sand", bars: [["A", 8], ["B", 3], ["C", 5]] } }
    }
  ],
  flash: [
    { f: "Closing a door by moving it away from you is a…", b: "push", pic: "🚪" },
    { f: "Things that go down to the bottom of the water…", b: "sink", pic: "🪣" },
    { f: "This metal is used for drink cans, but a magnet does not pull it…", b: "aluminium", pic: "🥤" },
    { f: "The N end of one magnet and the S end of another are put close. They…", b: "pull together", pic: "🧲🧲" },
    { f: "A short, thin string makes a … sound", b: "high", pic: "🎸" },
    { f: "You stretch a rubber band and let go. It…", b: "springs back" },
    { f: "Bicycle brakes make the bike…", b: "slow down", pic: "🚲" },
    { f: "On a see-saw, the side with the heavier child goes…", b: "down", pic: "⚖️" },
    { f: "A sound gets softer when you move…", b: "further away from it", pic: "📢" },
    { f: "A magnet can pull a paper clip through a thin piece of…", b: "paper or card", pic: "🧲📎" }
  ],
  mcq: [
    // lvl 1 (6)
    { q: "Which of these is a PUSH?", o: ["closing a cupboard door", "pulling out a tissue", "picking a rambutan off a tree"], a: 0, why: "You push a cupboard door away from you to close it. Taking out a tissue and picking a rambutan are pulls.", lvl: 1 },
    { q: "Mum drops a box of sewing pins. She picks them all up with a magnet. What are the pins made of?", o: ["plastic", "steel", "wood"], a: 1, why: "A magnet pulls things made of iron or steel. It does not pull plastic or wood.", lvl: 1, pic: "🧲📌" },
    { q: "At the beach in Sentosa, which of these floats on the sea?", o: ["a brick", "a metal anchor", "a surfboard"], a: 2, why: "A surfboard floats so people can ride on it. A brick and a metal anchor sink.", lvl: 1, pic: "🏖️" },
    { q: "Wind chimes hang at a window. The wind blows and you hear them ring. Why?", o: ["the chimes vibrate", "the chimes get hot", "the chimes get bigger"], a: 0, why: "The chimes knock together and shake quickly (vibrate). That makes the sound.", lvl: 1 },
    { q: "A ripe durian drops off the tree. What pulls it down to the ground?", o: ["the leaves", "the Earth", "the wind"], a: 1, why: "The Earth pulls everything down towards it, so the durian falls to the ground.", lvl: 1 },
    { q: "Which two ends of magnets PULL together?", o: ["N and N", "S and S", "N and S"], a: 2, why: "Different ends pull together. Two N ends, or two S ends, push apart.", lvl: 1, pic: "🧲🧲" },
    // lvl 2 (6)
    { q: "An HDB block has a ramp for wheelchairs. Why is the ramp gentle, not steep?", o: ["so the wheelchair gets lighter", "so the wheels do not need to turn", "so it is not too fast going down"], a: 2, why: "A gentle ramp is less steep, so the wheelchair goes down more slowly and safely. A steep ramp would make it go too fast.", lvl: 2, pic: "♿" },
    { q: "Teacher sticks a picture on the whiteboard with a magnet. What does this tell you about the whiteboard?", o: ["It has steel inside it", "It is made of wood", "It is made of plastic"], a: 0, why: "A magnet only sticks to things with iron or steel. So the whiteboard must have steel in it.", lvl: 2, pic: "🧲" },
    { q: "Lin is under the water in the pool. Her friend taps on the pool wall. Can Lin hear it?", o: ["No, water stops all sounds", "Yes, sound travels in water", "No, sound only goes in air"], a: 1, why: "Sound can travel through water, so Lin can hear the tap.", lvl: 2, pic: "🏊" },
    { q: "In a tug-of-war, both teams pull just as hard. What happens to the rope?", o: ["It does not move", "It moves to Team A", "It moves to Team B"], a: 0, why: "Both pulls are the same, so neither team wins and the rope stays still.", lvl: 2 },
    { q: "An orange floats. Siti peels it and puts it back in the water. Now it sinks. What helped it float?", o: ["its colour", "its peel", "its smell"], a: 1, why: "The peel has lots of tiny air pockets that help the orange float. Without the peel, it sinks.", lvl: 2, pic: "🍊" },
    { q: "Ben blows gently on a toy boat in a basin. Then he blows much harder. What happens?", o: ["It sinks at once", "It moves slower", "It moves faster"], a: 2, why: "Blowing harder is a stronger push, so the boat moves faster.", lvl: 2, pic: "⛵" },
    // lvl 3 (4)
    { q: "The same toy car went down three ramps. The graph shows how many seconds it took to reach the bottom. On which ramp was the car FASTEST?", o: ["1 block", "2 blocks", "3 blocks"], a: 2, why: "The fastest car takes the LEAST time, so look for the shortest bar. That is 3 blocks, the steepest ramp, at 2 seconds.", lvl: 3, fig: { type: "bar", xl: "Height of ramp", yl: "Time taken (seconds)", bars: [["1 block", 6], ["2 blocks", 4], ["3 blocks", 2]] } },
    { q: "Look at the diagram. Which thing is pulled by a magnet but can NOT roll?", o: ["the steel ball", "the paper clip", "the rubber ball"], a: 1, why: "The paper clip is only in the “Pulled by a magnet” circle. The steel ball is in the middle, so it can roll too.", lvl: 3, fig: { type: "venn", a: "Pulled by a magnet", b: "Can roll", onlyA: ["paper clip"], both: ["steel ball"], onlyB: ["rubber ball"], neither: ["wooden block"] } },
    { q: "Magnet A and magnet B push apart. What happens between magnet B and magnet C?", o: ["They pull together", "They push apart", "Nothing happens"], a: 1, why: "A and B push apart, so the end of B facing A is S. Then B’s other end is N, and it faces the N end of C. Same ends push apart.", lvl: 3, fig: { type: "magnets", items: [ { label: "A", poles: "NS" }, { label: "B", poles: "??" }, { label: "C", poles: "NS" } ], between: ["repel", "?"] } },
    { q: "Which can a push do?\nA: start a thing moving\nB: change a thing’s shape\nC: make a thing float", o: ["A and B only", "B and C only", "A and C only"], a: 0, why: "A push can start things moving and can squash things into a new shape. A push cannot make a thing float.", lvl: 3 }
  ],
  tf: [
    { s: "You can hear sounds through a closed door.", a: true, why: "Yes! Sound can travel through a door, so you can hear people talking outside your room.", pic: "🚪" },
    { s: "A magnet can push another magnet away without touching it.", a: true, why: "Yes! Hold two N ends close. They push apart even before they touch." },
    { s: "A peeled orange floats better than an orange with its peel.", a: false, why: "The peel has tiny air pockets that help it float. A peeled orange sinks.", pic: "🍊" },
    { s: "Only heavy things fall down when you let go.", a: false, why: "The Earth pulls all things down, heavy or light.", pic: "🍎⬇️" },
    { s: "A wheelchair goes down a gentle ramp more slowly than a steep ramp.", a: true, why: "Yes! A less steep ramp makes things go down more slowly.", pic: "♿" },
    { s: "Only metal things can make sounds.", a: false, why: "Anything that vibrates makes a sound, like a wooden block, a rubber band or your voice." },
    { s: "A magnet pulls a gold ring.", a: false, why: "Gold is a metal, but a magnet does not pull it. Magnets pull iron and steel.", pic: "💍" },
    { s: "A toy car that takes less time to go down a ramp is going faster.", a: true, why: "Yes! Less time to get to the bottom means it is faster.", pic: "🚗" }
  ]
};
