window.LB = window.LB || {};
LB["k-play"] = {
  notes: [
    { h: "Pushes and pulls", t: "A push or a pull can make things move, stop, or change direction. It can also change the shape of things, like squashing play dough.", kw: ["push", "pull", "change shape"], pic: "🛒🚪" },
    { h: "Rolling and sliding", t: "Round things, like balls and marbles, can roll. Flat things, like books and boxes, slide instead of roll.", kw: ["roll", "slide", "round"], pic: "⚽📦" },
    { h: "Ramps", t: "Things roll or slide down a ramp. If you lift one end of the ramp higher to make it steeper, a toy car goes down faster.", kw: ["ramp", "steeper", "faster"], pic: "🚗" },
    { h: "Rough and smooth", t: "A ball rolls further on a smooth floor than on a rough carpet or grass. Rough surfaces slow moving things down.", kw: ["smooth", "rough", "slow down"], pic: "🎳" },
    { h: "Floating and sinking", t: "Some things float on water and some things sink. It is not just about size: a big wooden log floats, but a small stone sinks.", kw: ["float", "sink"], pic: "🛁🪵" },
    { h: "Magnets", t: "A magnet pulls things made of iron or steel, like paper clips and iron nails. It does not pull paper, plastic, wood or glass, and it does not pull all metals.", kw: ["magnet", "iron", "steel"], pic: "🧲📎" },
    { h: "Sounds", t: "Sounds are made when things shake very quickly. This shaking is called vibrating. A hard hit on a drum makes a loud sound, and a gentle tap makes a soft sound.", kw: ["vibrate", "loud", "soft"], pic: "🥁🔔" },
    { h: "Science at the playground", t: "A push starts a swing moving, and it slowly stops if no one pushes again. On a see-saw, the side with the heavier child goes down.", kw: ["swing", "slide", "see-saw"], pic: "🛝" }
  ],
  traps: [
    "Watch out! Magnets do not pull all metals. An aluminium drink can is metal, but a magnet does not pull it.",
    "Watch out! Big things do not always sink. A big log floats, but a tiny coin sinks.",
    "Watch out! A push or a pull can also stop things or change their direction, not just start them moving.",
    "Watch out! A round ball rolls, but a flat book only slides.",
    "Watch out! When the sound stops, the shaking has stopped too. No vibrating, no sound!"
  ],
  lessons: [
    {
      h: "What can a push or a pull do?",
      concept: "A push or a pull can make a thing start moving, stop, go faster, go slower, or change direction. It can also change a thing’s shape.",
      example: { q: "In football, a goalkeeper catches the moving ball. What does the goalkeeper’s push do to the ball?", pic: "🧤⚽", think: ["The ball was moving.", "The goalkeeper pushes against it.", "The ball stops."], answer: "The push stops the ball." },
      tip: "Remember: move, stop, turn, squash. A push or a pull can do all four!",
      try: { q: "Sara squeezes a ball of play dough flat. What did her push do?", o: ["Made it float", "Changed its shape", "Made it magnetic"], a: 1, why: "Squeezing is a push. It changed the shape of the play dough from round to flat." }
    },
    {
      h: "Steeper ramps are faster",
      concept: "When you lift one end of a ramp higher, the ramp gets steeper. A toy car let go at the top goes down faster.",
      example: { q: "Tom rolls the same toy car down a low ramp and then down a high, steep ramp. On which ramp is the car faster?", pic: "🚗🚗", think: ["It is the same car both times.", "Only the steepness is changed.", "The steeper ramp makes the car go faster."], answer: "The car is faster on the high, steep ramp." },
      tip: "To test fairly, use the same car and change only one thing, the height of the ramp.",
      try: { q: "Lily wants her toy car to go down the ramp more slowly. What should she do?", o: ["Make the ramp less steep", "Make the ramp steeper", "Push the car harder at the top"], a: 0, why: "A less steep (lower) ramp makes the car go down more slowly. Making it steeper or pushing harder makes it faster." }
    },
    {
      h: "Float or sink?",
      concept: "Whether a thing floats or sinks depends on what it is made of and its shape, not just on its size.",
      example: { q: "A big wooden log and a small stone are put in a pond. What happens?", pic: "🪵🪨", think: ["Wood usually floats.", "Stone usually sinks.", "Size does not decide it."], answer: "The big log floats and the small stone sinks." },
      tip: "Test it before you guess! Drop things in a basin of water and see.",
      try: { q: "A ball of plasticine sinks. Rani presses it into a boat shape. What happens now?", o: ["It still sinks", "It floats", "It turns into wood"], a: 1, why: "Changing the shape to a boat helps plasticine float. Big steel ships float because of their shape too." }
    },
    {
      h: "What does a magnet pull?",
      concept: "A magnet pulls things made of iron or steel. It does not pull plastic, wood, paper, glass or rubber. Some metals, like aluminium, are not pulled either.",
      example: { q: "Which will a magnet pick up: a steel paper clip, a plastic spoon or an aluminium can?", pic: "🧲", think: ["Plastic is not pulled by a magnet.", "Aluminium is a metal, but it is not pulled.", "Steel is pulled by a magnet."], answer: "Only the steel paper clip." },
      tip: "Do not say “magnets pull all metals”. Say “magnets pull iron and steel”.",
      try: { q: "Which of these will a magnet pull?", o: ["A rubber band", "A wooden ruler", "An iron nail"], a: 2, why: "A magnet pulls things made of iron or steel. Rubber and wood are not pulled." }
    }
  ],
  mcq: [
    // lvl 1 (14)
    { q: "You open a drawer. Is that a push or a pull?", o: ["A push", "A pull", "Neither"], a: 1, why: "You pull a drawer towards you to open it.", lvl: 1, pic: "🗄️" },
    { q: "You kick a ball. Is that a push or a pull?", o: ["A push", "A pull", "Neither"], a: 0, why: "Kicking pushes the ball away from you.", lvl: 1, pic: "⚽🦵" },
    { q: "Which of these can roll?", o: ["A book", "A box", "A marble"], a: 2, why: "Round things like marbles roll. Flat books and boxes slide.", lvl: 1, pic: "📚📦🔮" },
    { q: "What will a magnet pull?", o: ["A steel paper clip", "A paper cup", "A plastic toy"], a: 0, why: "A magnet pulls things made of iron or steel. Paper and plastic are not pulled.", lvl: 1, pic: "🧲" },
    { q: "Which of these floats on water?", o: ["A stone", "A steel spoon", "A plastic duck"], a: 2, why: "A plastic duck floats. A stone and a steel spoon sink.", lvl: 1, pic: "🛁" },
    { q: "How is a sound made?", o: ["Something shakes (vibrates)", "Something gets cold", "Something turns blue"], a: 0, why: "Sounds are made when things shake very quickly, which is called vibrating.", lvl: 1, pic: "🎸" },
    { q: "You hit a drum very hard. What kind of sound do you get?", o: ["A soft sound", "A loud sound", "No sound"], a: 1, why: "A harder hit makes the drum shake more, so the sound is louder.", lvl: 1, pic: "🥁" },
    { q: "Which of these slides but does NOT roll?", o: ["A tennis ball", "A book", "A marble"], a: 1, why: "A book is flat, so it slides. Round balls and marbles roll.", lvl: 1, pic: "🎾📘🔮" },
    { q: "What makes a swing start moving?", o: ["A push", "The swing moves by itself", "A magnet"], a: 0, why: "A push starts the swing moving.", lvl: 1 },
    { q: "Which of these does a magnet NOT pull?", o: ["An iron nail", "A steel pin", "A wooden block"], a: 2, why: "Wood is not pulled by a magnet. Iron and steel are.", lvl: 1, pic: "🧲" },
    { q: "You pull a toy wagon. Which way does it move?", o: ["Towards you", "Away from you", "It cannot move"], a: 0, why: "A pull makes a thing move towards you.", lvl: 1, pic: "🛻" },
    { q: "Which sound is SOFT?", o: ["A fire engine siren", "A thunderclap", "A cat purring"], a: 2, why: "A cat’s purr is soft. Sirens and thunder are loud.", lvl: 1, pic: "🔊" },
    { q: "Which of these sinks in water?", o: ["A wooden block", "A coin", "A sponge"], a: 1, why: "A coin sinks. Wood and a dry sponge float.", lvl: 1, pic: "🪣" },
    { q: "You squeeze a sponge. What does the push do?", o: ["Makes it magnetic", "Makes it louder", "Changes its shape"], a: 2, why: "Squeezing is a push, and it changes the shape of the sponge.", lvl: 1, pic: "🧽" },
    // lvl 2 (14)
    { q: "A ball rolls towards you and you hit it back with a bat. What did your push do?", o: ["Changed its direction", "Made it float in the air", "Made it much lighter"], a: 0, why: "The push from the bat made the ball go the other way.", lvl: 2, pic: "🏏" },
    { q: "Tom lifts one end of a ramp higher. What happens to his toy car going down it?", o: ["It goes slower", "It goes faster", "It cannot move"], a: 1, why: "A higher, steeper ramp makes the toy car go down faster.", lvl: 2, pic: "🚗" },
    { q: "A ball is rolled with the same push on three floors. Where does it roll the furthest?", o: ["On grass", "On a thick carpet", "On a smooth tiled floor"], a: 2, why: "A smooth floor slows the ball down the least, so it rolls furthest.", lvl: 2, pic: "⚽" },
    { q: "Which of these will a magnet pull?", o: ["An aluminium drink can", "A steel safety pin", "A glass marble"], a: 1, why: "Steel is pulled by a magnet. Aluminium is a metal, but a magnet does not pull it.", lvl: 2, pic: "🧲" },
    { q: "A girl plucks a guitar string. What does the string do to make a sound?", o: ["It gets hot and melts", "It shakes quickly (vibrates)", "It gets longer and thinner"], a: 1, why: "The plucked string vibrates, and that makes the sound.", lvl: 2, pic: "🎸" },
    { q: "Put your hand on your throat and hum. What do you feel?", o: ["Shaking", "Cold air", "Nothing at all"], a: 0, why: "Your voice box shakes (vibrates) to make the humming sound.", lvl: 2, pic: "🙂🎶" },
    { q: "A bell rings. You grab it with your hand. What happens?", o: ["It gets louder", "It rings forever", "The sound stops"], a: 2, why: "Holding the bell stops it shaking, and no vibrating means no sound.", lvl: 2, pic: "🔔✋" },
    { q: "Ali (heavy) and his little sister (light) sit on a see-saw. Which side goes down?", o: ["Ali’s side", "His sister’s side", "Both sides stay level"], a: 0, why: "The heavier child pushes down more, so Ali’s side goes down.", lvl: 2, pic: "⚖️" },
    { q: "You stop pushing your friend on the swing. What happens?", o: ["The swing goes higher and higher", "The swing keeps going forever", "The swing slowly stops"], a: 2, why: "Without more pushes, the swing slows down and stops.", lvl: 2 },
    { q: "Which of these floats?", o: ["A metal key", "An apple", "A glass marble"], a: 1, why: "An apple floats. A metal key and a glass marble sink.", lvl: 2, pic: "🪣" },
    { q: "A drink can lying on its side and the same can standing up are pushed. Which one rolls?", o: ["The can lying on its side", "The can standing up", "Neither"], a: 0, why: "Lying on its side, the round part touches the floor, so it rolls. Standing up, it slides.", lvl: 2, pic: "🥫" },
    { q: "A magnet is held near some paper clips, but not touching them. What happens?", o: ["Nothing, it must touch them first", "The clips are pushed away from it", "The clips are pulled towards the magnet"], a: 2, why: "A magnet can pull iron and steel things without touching them.", lvl: 2, pic: "🧲📎" },
    { q: "You hear a car horn. The car drives far away and honks again. How does it sound now?", o: ["Softer", "Louder", "Exactly the same"], a: 0, why: "Sounds get softer the further away you are.", lvl: 2, pic: "🚗📯" },
    { q: "How can you move a heavy box across the floor?", o: ["Roll it like a ball", "Push it so it slides", "Blow on it gently"], a: 1, why: "A box has flat sides, so it cannot roll like a ball. You can push it so it slides.", lvl: 2, pic: "📦" },
    // lvl 3 (8)
    { q: "Look at the diagram. Which thing can roll AND float?", o: ["The marble", "The wooden block", "The ping-pong ball"], a: 2, why: "The ping-pong ball is in the middle, where the two circles overlap, so it can roll and float.", lvl: 3, fig: { type: "venn", a: "Can roll", b: "Floats", onlyA: ["marble"], both: ["ping-pong ball"], onlyB: ["wooden block"], neither: ["steel spoon"] } },
    { q: "The same toy car is let go at the top of each ramp in the diagram. On which ramp will the car be fastest at the bottom?", o: ["Ramp A", "Ramp B", "Both are the same"], a: 1, why: "Ramp B is higher, so it is steeper, and the car goes down faster.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "box", lines: ["Ramp on 1 block", "Same toy car"] }, { label: "B", icon: "box", lines: ["Ramp on 4 blocks", "Same toy car"] } ] } },
    { q: "A big log and a small stone are put in a pond. What happens?", o: ["The log floats and the stone sinks", "Both sink, because the log is big", "The stone floats and the log sinks"], a: 0, why: "Floating is not just about size. Wood floats, but stone sinks.", lvl: 3, pic: "🪵🪨" },
    { q: "Which sentence about magnets is TRUE?", o: ["Magnets pull all metals, even copper", "Magnets pull things made of iron or steel", "Magnets pull all shiny things, like foil"], a: 1, why: "Magnets pull iron and steel. They do not pull all metals, such as aluminium or copper.", lvl: 3, pic: "🧲" },
    { q: "A plasticine ball sinks. How can you make the same plasticine float?", o: ["Roll it into a smaller ball", "Paint it red", "Shape it into a boat"], a: 2, why: "A boat shape helps it float. Making a smaller ball will still sink.", lvl: 3, pic: "🟠💧" },
    { q: "Mei and Dad are on a see-saw. Dad is much heavier. How can they make it balance?", o: ["Dad moves closer to the middle", "Mei moves closer to the middle", "Dad jumps higher"], a: 0, why: "The heavier person sitting nearer the middle helps the see-saw balance.", lvl: 3, pic: "👧👨" },
    { q: "A playground has a steep slide and a gentle slide. Ben goes down both. On which slide does he go faster?", o: ["The gentle slide", "The steep slide", "Both are the same"], a: 1, why: "Like a steeper ramp, a steeper slide makes you go down faster.", lvl: 3, pic: "🛝🛝" },
    { q: "You wrap a paper clip in tissue paper. You bring a magnet near it. What happens?", o: ["The tissue stops the magnet from working", "The tissue is pulled but not the clip", "The magnet still pulls the paper clip"], a: 2, why: "A magnet can pull a steel paper clip through thin paper. The tissue itself is not pulled.", lvl: 3, pic: "🧲📎" }
  ],
  tf: [
    { s: "A push or a pull can make a thing start moving.", a: true, why: "Yes! A push or a pull can start things moving.", pic: "🛒" },
    { s: "A push or a pull can only start things moving. It cannot stop them.", a: false, why: "A push or a pull can also stop things, like catching a ball.", pic: "🧤⚽" },
    { s: "A push can change the shape of play dough.", a: true, why: "Yes! Pressing play dough flat changes its shape.", pic: "🟣✋" },
    { s: "A ball rolls, but a book slides.", a: true, why: "Yes! Round things roll and flat things slide.", pic: "⚽📘" },
    { s: "A box rolls down a ramp like a ball.", a: false, why: "A box is flat-sided, so it slides. Round things roll.", pic: "📦" },
    { s: "A toy car goes faster down a steeper ramp.", a: true, why: "Yes! Lifting the ramp higher makes the car go faster.", pic: "🚗" },
    { s: "A ball rolls further on thick carpet than on a smooth floor.", a: false, why: "Rough carpet slows the ball more, so it rolls further on a smooth floor.", pic: "⚽" },
    { s: "Big things always sink and small things always float.", a: false, why: "A big log floats, but a small coin sinks. Size does not decide it.", pic: "🪵🪙" },
    { s: "A plastic duck floats on water.", a: true, why: "Yes! A plastic toy duck floats.", pic: "🦆" },
    { s: "A steel spoon floats on water.", a: false, why: "A steel spoon sinks.", pic: "🥄" },
    { s: "A magnet pulls a steel paper clip.", a: true, why: "Yes! Magnets pull things made of iron or steel.", pic: "🧲📎" },
    { s: "A magnet pulls all metals.", a: false, why: "Magnets do not pull all metals. An aluminium can is not pulled.", pic: "🧲🥫" },
    { s: "A magnet pulls a wooden pencil.", a: false, why: "Wood is not pulled by a magnet.", pic: "✏️" },
    { s: "Sounds are made when things vibrate (shake quickly).", a: true, why: "Yes! No vibrating, no sound.", pic: "🔔" },
    { s: "Tapping a drum gently makes a loud sound.", a: false, why: "A gentle tap makes a soft sound. A hard hit makes a loud sound.", pic: "🥁" },
    { s: "A sound gets softer when you move further away from it.", a: true, why: "Yes! Sounds are softer from far away.", pic: "📢" },
    { s: "A swing keeps going forever after one push.", a: false, why: "The swing slows down and stops unless someone pushes it again." },
    { s: "On a see-saw, the side with the heavier child goes down.", a: true, why: "Yes! The heavier child pushes down more.", pic: "⚖️" },
    { s: "You should cover your ears when a sound is very loud.", a: true, why: "Yes! Very loud sounds can hurt your ears.", pic: "🙉" },
    { s: "A magnet must touch a paper clip to pull it.", a: false, why: "A magnet can pull a paper clip from a short distance without touching it.", pic: "🧲📎" }
  ],
  sort: [
    { title: "Is it a push or a pull?", groups: ["Push", "Pull"], items: [["kicking a ball", 0], ["opening a drawer", 1], ["pressing a lift button", 0], ["pulling up your socks", 1], ["pushing a trolley", 0], ["tugging a rope", 1], ["pulling a door open", 1], ["squashing play dough", 0]] },
    { title: "Will it roll or slide down a ramp?", groups: ["Rolls", "Slides"], items: [["marble", 0], ["book", 1], ["tennis ball", 0], ["eraser", 1], ["orange", 0], ["box", 1], ["toy car with wheels", 0], ["ruler lying flat", 1]] },
    { title: "Float or sink? Sort these things", groups: ["Floats", "Sinks"], items: [["wooden block", 0], ["stone", 1], ["plastic duck", 0], ["steel spoon", 1], ["cork", 0], ["coin", 1], ["ping-pong ball", 0], ["iron nail", 1]] },
    { title: "Does a magnet pull it?", groups: ["Pulled by a magnet", "Not pulled"], items: [["steel paper clip", 0], ["iron nail", 0], ["plastic straw", 1], ["aluminium can", 1], ["steel safety pin", 0], ["rubber band", 1], ["wooden spoon", 1], ["iron key ring", 0]] }
  ]
};
