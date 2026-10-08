window.LBX = window.LBX || {};
LBX["k-play"] = {
  notes: [
    { h: "The Earth pulls things down", t: "When you let go of a ball, it falls down to the ground. The Earth pulls everything down towards it.", kw: ["falls down", "pull"], pic: "🍎⬇️" },
    { h: "Stretch and spring back", t: "A rubber band or a spring can be stretched or squashed. When you let go, it springs back to its shape.", kw: ["stretch", "spring back"], pic: "🏹" }
  ],
  traps: [
    "Watch out! Heavy things are harder to push or pull. An empty trolley is easier to push than a full one.",
    "Watch out! Two magnets do not always pull each other. Turn one around and they may push apart."
  ],
  lessons: [
    {
      h: "A bigger push goes further",
      concept: "A gentle push makes a thing move a little. A strong push makes it move faster and further.",
      example: { q: "Ken pushes his toy car gently. Then he pushes the same car hard. Which time does it go further?", pic: "🚗", think: ["It is the same car on the same floor.", "Only the push is changed.", "A stronger push makes it go further."], answer: "It goes further when he pushes it hard." },
      tip: "Strong push, far trip. Gentle push, short trip!",
      try: { q: "Nora wants her marble to roll only a short way. What should she do?", o: ["Give it a gentle push", "Give it a strong push", "Give it two hard pushes"], a: 0, why: "A gentle push makes the marble move only a little. Strong pushes make it roll further." }
    },
    {
      h: "Magnets push and pull each other",
      concept: "A magnet has two ends called poles, N and S. An N end and an S end pull together. Two N ends, or two S ends, push apart.",
      example: { q: "Ravi holds the N end of one magnet near the N end of another magnet. What happens?", pic: "🧲🧲", think: ["Both ends are N.", "The two ends are the same.", "Same ends push apart."], answer: "The magnets push apart." },
      tip: "Different ends pull together. Same ends push apart.",
      try: { q: "Mia holds the S end of one magnet near the S end of another. What happens?", o: ["They pull together", "They push apart", "Nothing at all happens"], a: 1, why: "Both ends are S. The same ends push each other apart." }
    }
  ],
  mcq: [
    // lvl 1 (8)
    { q: "You let go of a ball. Which way does it go?", o: ["Down to the ground", "Up to the sky", "Sideways to the wall"], a: 0, why: "The Earth pulls things down, so the ball falls to the ground.", lvl: 1, pic: "⚽" },
    { q: "You stretch a rubber band and let go. What happens?", o: ["It stays long", "It springs back", "It breaks in two"], a: 1, why: "A rubber band springs back to its shape when you let go.", lvl: 1 },
    { q: "Which trolley is the easiest to push?", o: ["A trolley full of rice", "A trolley full of bricks", "A trolley with nothing in it"], a: 2, why: "An empty trolley is the lightest, so it is the easiest to push.", lvl: 1, pic: "🛒" },
    { q: "The wind blows on a sailboat. What does the wind do?", o: ["Pushes the boat along", "Makes the boat sink", "Makes the boat magnetic"], a: 0, why: "Moving air pushes on the sail, so the boat moves along.", lvl: 1, pic: "⛵" },
    { q: "Which of these bounces well?", o: ["A lump of clay", "A sock full of sand", "A rubber ball"], a: 2, why: "A rubber ball squashes and springs back, so it bounces. Clay and a sandy sock just go splat.", lvl: 1 },
    { q: "You put a blown-up beach ball in the pool. What happens?", o: ["It sinks to the bottom", "It floats on top", "It sinks halfway down"], a: 1, why: "A beach ball is full of air, so it floats on top of the water.", lvl: 1, pic: "🏊" },
    { q: "Which of these is a PULL?", o: ["Pressing a doorbell", "Kicking a pebble", "Zipping up your bag"], a: 2, why: "You pull the zip along to close your bag. Pressing and kicking are pushes.", lvl: 1 },
    { q: "Which floor is the most slippery?", o: ["Dry rough carpet", "Wet smooth tiles", "Dry grassy field"], a: 1, why: "Wet, smooth tiles are slippery. Rough carpet and grass help your feet grip.", lvl: 1, pic: "⚠️" },
    // lvl 2 (10)
    { q: "Ali holds a heavy ball and a light ball. He lets go of both. Which fall down?", o: ["Only the heavy ball", "Only the light ball", "Both of the balls"], a: 2, why: "The Earth pulls all things down, heavy or light, so both balls fall.", lvl: 2 },
    { q: "Ravi wants his little brother’s swing to go higher. What should he do?", o: ["Push it harder", "Push it more gently", "Stop pushing it"], a: 0, why: "A stronger push makes the swing move faster and go higher.", lvl: 2 },
    { q: "The N end of one magnet pulls the S end of another. Kai turns the second magnet around, so N faces N. What happens now?", o: ["They pull harder", "Nothing changes", "They push apart"], a: 2, why: "Now the same ends face each other. Same ends push apart.", lvl: 2, pic: "🧲🧲" },
    { q: "The N end of one magnet is held near the S end of another. What happens?", o: ["They push apart", "Nothing happens", "They pull together"], a: 2, why: "Different ends pull together. N and S are different.", lvl: 2, pic: "🧲🧲" },
    { q: "Why does a child wear a float vest in the pool?", o: ["It helps the child float", "It makes the child sink", "It keeps the child dry"], a: 0, why: "A float vest is full of air or foam, so it helps the child float.", lvl: 2, pic: "🦺" },
    { q: "You press your ear to one end of a table. A friend taps the other end. What do you notice?", o: ["You hear no sound", "You can hear the tap", "You can smell the tap"], a: 1, why: "Sound can travel through a table, so you can hear the tap.", lvl: 2, pic: "👂" },
    { q: "A marble rolls off a ramp into a tray of sand. What does the sand do?", o: ["Speeds the marble up", "Lifts the marble up", "Slows the marble down"], a: 2, why: "Sand is rough and soft, so it slows the marble down.", lvl: 2 },
    { q: "Why do shoes have bumpy rubber soles?", o: ["To stop us from slipping", "To help us float in water", "To make our feet look big"], a: 0, why: "Bumpy rubber grips the floor, so we do not slip.", lvl: 2, pic: "👟" },
    { q: "Mei drops a paper clip and a feather at the same time. Which lands first?", o: ["The feather", "The paper clip", "Both land together"], a: 1, why: "The air slows the light, fluffy feather a lot, so the paper clip lands first.", lvl: 2, pic: "🪶📎" },
    { q: "An empty, closed plastic bottle floats. Mei fills it with sand and closes it again. What happens now?", o: ["It sinks", "It floats higher", "It jumps up"], a: 0, why: "Sand took the place of the air. The bottle is now much heavier, so it sinks.", lvl: 2, pic: "🍶" },
    // lvl 3 (6)
    { q: "A big steel ship floats on the sea, but a small steel nail sinks. Why?", o: ["The ship is not made of steel", "The ship’s shape helps it float", "Sea water makes steel lighter"], a: 1, why: "Floating depends on shape too. A ship’s wide, hollow shape helps it float, like a plasticine boat.", lvl: 3, pic: "🚢🔩" },
    { q: "Siti let a toy car go down a ramp on 1, 2 and 3 blocks. She measured how far it rolled on the floor. Look at the graph. What happens as the ramp gets higher?", o: ["The car rolls further", "The car rolls less far", "The car rolls the same"], a: 0, why: "The bars get taller as the ramp gets higher, so the car rolls further.", lvl: 3, fig: { type: "bar", title: "How far the car rolled", xl: "Height of ramp", yl: "Distance (cm)", bars: [["1 block", 40], ["2 blocks", 70], ["3 blocks", 100]] } },
    { q: "Tom wants to find out if a ball rolls further on tiles or on carpet. Which two set-ups should he compare?", o: ["A and C", "B and C", "A and B"], a: 2, why: "A and B use the same ball and the same push. Only the floor is changed, so the test is fair.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "box", lines: ["Smooth tiles", "Gentle push", "Tennis ball"] }, { label: "B", icon: "box", lines: ["Carpet", "Gentle push", "Tennis ball"] }, { label: "C", icon: "box", lines: ["Carpet", "Strong push", "Football"] } ] } },
    { q: "Look at the diagram. Which thing floats AND springs back after you squash it?", o: ["The steel spring", "The sponge", "The wooden block"], a: 1, why: "The sponge is where the two circles overlap, so it floats and springs back.", lvl: 3, fig: { type: "venn", a: "Springs back", b: "Floats", onlyA: ["steel spring"], both: ["sponge"], onlyB: ["wooden block"], neither: ["stone"] } },
    { q: "Where do most pins stick when a bar magnet is dipped into a box of pins?", o: ["Along the middle", "At the two ends", "All over evenly"], a: 1, why: "A magnet pulls most strongly at its two ends, the poles, so most pins stick there.", lvl: 3, pic: "🧲📌" },
    { q: "Leo stretches a rubber band a little and lets it fly. Then he stretches it a lot. Which time does it fly further?", o: ["Stretched a lot", "Stretched a little", "Both go the same"], a: 0, why: "The more the band is stretched, the harder it springs back, so it flies further.", lvl: 3 }
  ],
  tf: [
    { s: "When you let go of a ball, the Earth pulls it down.", a: true, why: "Yes! The Earth pulls things down, so the ball falls.", pic: "⚽⬇️" },
    { s: "A heavy box is easier to push than a light box.", a: false, why: "Heavy things are harder to push. A light box is easier.", pic: "📦" },
    { s: "Two magnets always pull each other.", a: false, why: "Same ends, like N and N, push apart.", pic: "🧲🧲" },
    { s: "A rubber band springs back after you stretch it and let go.", a: true, why: "Yes! It goes back to its shape." },
    { s: "A beach ball full of air sinks in a pool.", a: false, why: "A beach ball full of air floats.", pic: "🏖️" },
    { s: "The wind can push things, like a kite or a sailboat.", a: true, why: "Yes! Moving air pushes on them.", pic: "🪁⛵" },
    { s: "A stronger kick makes a ball go further.", a: true, why: "Yes! A bigger push makes it go faster and further.", pic: "⚽🦵" },
    { s: "Sound can travel through a wooden table.", a: true, why: "Yes! Put your ear on a table and listen to a tap.", pic: "👂" },
    { s: "A bar magnet pulls hardest at its middle.", a: false, why: "A magnet pulls hardest at its two ends.", pic: "🧲" },
    { s: "A feather falls faster than a stone.", a: false, why: "The air slows the feather, so the stone lands first.", pic: "🪶🪨" }
  ],
  sort: [
    { title: "Squash it and let go. Does it spring back?", groups: ["Springs back", "Stays squashed"], items: [["sponge", 0], ["play dough", 1], ["rubber ball", 0], ["plasticine", 1], ["pillow", 0], ["ball of foil", 1], ["spring", 0], ["wet clay", 1]] },
    { title: "Is it easier or harder to push?", groups: ["Easier to push", "Harder to push"], items: [["an empty box", 0], ["a box full of books", 1], ["a toy car on smooth tiles", 0], ["a toy car on thick carpet", 1], ["a balloon", 0], ["a fridge", 1], ["a small stool", 0], ["a piano", 1]] }
  ]
};
