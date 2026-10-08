window.LBY = window.LBY || {};
LBY["k-play"] = {
  lessons: [
    {
      h: "High and low sounds",
      concept: "Some sounds are high, like a whistle. Some sounds are low, like a big drum. Short, thin things make higher sounds. Long, thick things make lower sounds.",
      example: { q: "A ukulele has a thin string and a thick string. Which string makes the lower sound?", pic: "🎸",
        think: ["Both strings are plucked and shake (vibrate).", "Thin things make higher sounds.", "Thick things make lower sounds."],
        answer: "The thick string makes the lower sound." },
      tip: "High and loud are NOT the same! Loud is about how hard you hit. High is about short and thin.",
      try: { q: "A xylophone has bars of different lengths. Which bar makes the HIGHEST sound?", o: ["the longest bar", "the shortest bar", "the middle bar"], a: 1, why: "Short bars make higher sounds. The longest bar makes the lowest sound.", pic: "🎶" }
    }
  ],
  mcq: [
    // lvl 1 (7)
    { q: "You blow up a balloon and let it go without tying it. What happens?", o: ["It zooms around the room", "It stays still in the air", "It sinks slowly to the floor"], a: 0, why: "The air rushes out of the balloon and pushes it, so it zooms around.", lvl: 1, pic: "🎈" },
    { q: "Put your hand on your neck and hum. Which part of you shakes (vibrates)?", o: ["your knee", "your throat", "your hair"], a: 1, why: "Your throat vibrates when you hum or talk. That is how your voice makes a sound.", lvl: 1 },
    { q: "Which of these makes a sound when you shake it?", o: ["a feather", "a shaker with beads", "a paper towel"], a: 1, why: "The beads hit the shaker and make it vibrate, so you hear a sound.", lvl: 1 },
    { q: "You press the brakes on your bicycle. What happens?", o: ["The bike goes faster", "The bike floats up", "The bike slows down"], a: 2, why: "Brakes rub on the wheels and slow the bike down.", lvl: 1, pic: "🚲" },
    { q: "Which ground is the softest to fall on at a playground?", o: ["rubber mat", "concrete", "tiles"], a: 0, why: "A rubber mat is soft and squashy. Concrete and tiles are hard.", lvl: 1, pic: "🛝" },
    { q: "Which of these makes a HIGH sound?", o: ["a lion’s roar", "a big bass drum", "a small whistle"], a: 2, why: "A small whistle makes a high sound. A lion’s roar and a big drum make low sounds.", lvl: 1 },
    { q: "Which toy has a spring inside that makes it pop up?", o: ["a jack-in-the-box", "a wooden block", "a paper boat"], a: 0, why: "The spring is squashed inside the box. When the lid opens, it springs back and pops up.", lvl: 1 },
    // lvl 2 (8)
    { q: "Three magnets were dipped into a box of paper clips. Look at the graph. Which magnet is the STRONGEST?", o: ["Magnet A", "Magnet B", "Magnet C"], a: 1, why: "Magnet B picked up the most clips, 9, so it is the strongest.", lvl: 2, fig: { type: "bar", xl: "Magnet", yl: "Number of clips", bars: [["A", 3], ["B", 9], ["C", 5]] } },
    { q: "Kai stretches a thin rubber band and a thick rubber band over a box. He plucks each one. Which makes the LOWER sound?", o: ["both the same", "the thin band", "the thick band"], a: 2, why: "Thick things make lower sounds. The thin band makes a higher sound.", lvl: 2 },
    { q: "A paper clip is on a thin card. A magnet is under the card. Mei moves the magnet. What happens to the clip?", o: ["The clip moves with it", "The clip stays still", "The clip melts away"], a: 0, why: "A magnet can pull a steel clip through thin card, so the clip follows the magnet.", lvl: 2, pic: "🧲📎" },
    { q: "Two paper cups are joined by a tight string. You talk into one cup. How does the sound get to your friend?", o: ["through the floor", "through a magnet", "along the string"], a: 2, why: "Your voice makes the string vibrate, and the sound travels along the string.", lvl: 2 },
    { q: "A moving marble hits a marble that is standing still. What happens to the still marble?", o: ["It starts to move", "It stays still", "It sinks into the floor"], a: 0, why: "The moving marble pushes the still marble, so it starts to move.", lvl: 2 },
    { q: "In a tug-of-war, Team A pulls harder than Team B. Which way does the rope move?", o: ["towards Team B", "towards Team A", "it does not move"], a: 1, why: "The rope moves towards the team that pulls harder.", lvl: 2 },
    { q: "Why is a playground slide made smooth?", o: ["so children stop at the top", "so the slide is magnetic", "so children slide down easily"], a: 2, why: "A smooth slide does not slow you down much, so you slide down easily.", lvl: 2, pic: "🛝" },
    { q: "A kite flies on a windy day. On a day with no wind, it falls down. Why?", o: ["no wind to push it up", "the kite is too light", "the string gets longer"], a: 0, why: "The kite needs moving air to push it up. With no wind, the Earth pulls it down.", lvl: 2, pic: "🪁" },
    // lvl 3 (5)
    { q: "Ben taps a glass gently with a spoon. Then he taps it hard. How is the second sound different?", o: ["It is higher", "It is louder", "It is lower"], a: 1, why: "A harder tap makes a louder sound. It does not change how high or low the sound is.", lvl: 3, pic: "🥄" },
    { q: "Siti wants to find out if a ball bounces higher on a wooden floor or on a rubber mat. Which TWO set-ups should she compare?", o: ["A and B", "A and C", "B and C"], a: 1, why: "A and C use the same tennis ball dropped from the same height. Only the floor is different, so the test is fair.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "box", lines: ["Tennis ball", "Wooden floor", "Dropped from 1 m"] }, { label: "B", icon: "box", lines: ["Football", "Rubber mat", "Dropped from 1 m"] }, { label: "C", icon: "box", lines: ["Tennis ball", "Rubber mat", "Dropped from 1 m"] } ] } },
    { q: "Leo dropped a ball onto three kinds of ground. Look at the graph. How much higher did it bounce on concrete than on grass?", o: ["40 cm", "20 cm", "60 cm"], a: 0, why: "Concrete is 60 cm and grass is 20 cm. 60 − 20 = 40 cm.", lvl: 3, fig: { type: "bar", xl: "Ground", yl: "Height of bounce (cm)", bars: [["Concrete", 60], ["Grass", 20], ["Sand", 5]] } },
    { q: "Tom holds a ruler on a table edge and twangs the end sticking out. Then he makes the part sticking out shorter. What happens to the sound?", o: ["It gets lower", "It stops at once", "It gets higher"], a: 2, why: "A shorter part vibrates faster, so the sound gets higher.", lvl: 3, pic: "📏" },
    { q: "Two ring magnets are on a pencil. Look at the diagram. Why does ring B float above ring A?", o: ["the pencil is magnetic", "the magnets push apart", "the magnets pull together"], a: 1, why: "The top of A is N and the bottom of B is also N. Same ends push apart, so B floats.", lvl: 3, fig: { type: "rings", rings: [ { label: "A", top: "N" }, { label: "B", top: "S" } ], gaps: [true] } }
  ],
  tf: [
    { s: "A kite needs wind to fly.", a: true, why: "The wind pushes the kite up into the sky.", pic: "🪁" },
    { s: "Hitting a drum harder makes a higher sound.", a: false, why: "Hitting harder makes a LOUDER sound, not a higher one.", pic: "🥁" },
    { s: "A small bell makes a higher sound than a big bell.", a: true, why: "Small things make higher sounds. Big things make lower sounds.", pic: "🔔" },
    { s: "A thick rubber band makes a higher sound than a thin one.", a: false, why: "A thick band makes a lower sound. A thin band makes a higher sound." },
    { s: "Brakes help a bicycle slow down and stop.", a: true, why: "Brakes rub on the wheels and slow the bike.", pic: "🚲" },
    { s: "A marble that is standing still can start moving all by itself.", a: false, why: "It needs a push or a pull to start moving." },
    { s: "A string telephone works best when the string is pulled tight.", a: true, why: "A tight string carries the vibrations well. A loose string does not." },
    { s: "A ball bounces higher on a soft rubber mat than on a hard floor.", a: false, why: "A soft mat squashes and slows the ball, so it bounces higher on a hard floor." },
    { s: "In a tug-of-war, the rope moves towards the team that pulls less hard.", a: false, why: "The rope moves towards the team that pulls harder." },
    { s: "A jack-in-the-box pops up because of a spring inside.", a: true, why: "The squashed spring springs back when the lid opens." }
  ],
  sort: [
    { title: "High sound or low sound?", groups: ["High sound", "Low sound"], items: [["whistle", 0], ["mouse squeak", 0], ["chick cheeping", 0], ["small bell", 0], ["lion’s roar", 1], ["big drum", 1], ["cow mooing", 1], ["tuba", 1]] }
  ]
};
