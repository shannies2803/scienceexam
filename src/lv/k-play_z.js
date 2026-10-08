window.LBZ = window.LBZ || {};
LBZ["k-play"] = {
  flash: [
    { f: "Opening a drawer is a push or a pull?", b: "a pull", pic: "🗄️" },
    { f: "Round things, like balls, can…", b: "roll", pic: "⚽" },
    { f: "Flat things, like books, do not roll. They…", b: "slide", pic: "📘" },
    { f: "A steeper ramp makes a toy car go…", b: "faster", pic: "🚗" },
    { f: "A ball rolls further on a rough floor or a smooth floor?", b: "a smooth floor" },
    { f: "Things that stay on top of the water…", b: "float", pic: "🛁" },
    { f: "A magnet pulls things made of…", b: "iron or steel", pic: "🧲" },
    { f: "The two ends of a magnet are called…", b: "poles (N and S)", pic: "🧲" },
    { f: "Two N ends of magnets are put close. They…", b: "push apart" },
    { f: "Sounds are made when things…", b: "vibrate (shake very quickly)", pic: "🔔" },
    { f: "A hard hit on a drum makes a … sound", b: "loud", pic: "🥁" },
    { f: "When you let go of a ball, the Earth pulls it…", b: "down" }
  ],
  mcq: [
    // lvl 1 (6)
    { q: "You press the button at a traffic light crossing. Is it a push or a pull?", o: ["a pull", "a push", "neither"], a: 1, why: "Pressing a button is a push. You push it away from you.", lvl: 1, pic: "🚦" },
    { q: "Which wheel shape rolls the best?", o: ["square", "triangle", "round"], a: 2, why: "A round wheel rolls smoothly. Square and triangle wheels bump and stop.", lvl: 1 },
    { q: "How do we use a magnet at home?", o: ["to dry wet clothes", "to hold notes on a fridge", "to cool a drink"], a: 1, why: "A fridge door has steel in it, so a magnet sticks to it and holds notes.", lvl: 1 },
    { q: "You throw a ball up into the air. What happens next?", o: ["It falls back down", "It stays up there", "It flies off to space"], a: 0, why: "The Earth pulls the ball down, so it falls back to the ground.", lvl: 1, pic: "⚽" },
    { q: "Which of these feels ROUGH?", o: ["a mirror", "a plastic tray", "a pineapple’s skin"], a: 2, why: "A pineapple’s skin is bumpy and rough. A mirror and a plastic tray feel smooth.", lvl: 1 },
    { q: "Which of these stretches when you pull it?", o: ["a rubber band", "a wooden stick", "a glass cup"], a: 0, why: "A rubber band stretches when pulled. A stick and a cup do not stretch.", lvl: 1 },
    // lvl 2 (6)
    { q: "Mum sorts cans for recycling with a magnet. Which does the magnet pick up?", o: ["aluminium drink cans", "steel food cans", "paper juice boxes"], a: 1, why: "A magnet pulls steel. Aluminium is a metal, but a magnet does not pull it, and paper is not pulled.", lvl: 2, pic: "♻️" },
    { q: "The same toy car rolls far on tiles but stops quickly on carpet. Why?", o: ["Carpet is smoother", "Carpet is shinier", "Carpet is rougher"], a: 2, why: "Rough carpet slows the car down more. Smooth tiles slow it down less, so it rolls further.", lvl: 2 },
    { q: "Lim drops the same ball onto the same floor from 1 m high, then from 2 m high. When does it bounce higher?", o: ["from 1 m", "from 2 m", "both the same"], a: 1, why: "A ball dropped from higher up hits the floor faster, so it bounces higher.", lvl: 2 },
    { q: "A plastic bottle cap floats. Mei pushes it under the water and lets go. What happens?", o: ["It stays at the bottom", "It melts away", "It pops back up"], a: 2, why: "The cap is a thing that floats, so it pops back up to the top when she lets go.", lvl: 2, pic: "🪣" },
    { q: "Look at the two magnets. What happens when they are brought close?", o: ["They pull together", "They push apart", "Nothing happens"], a: 0, why: "The S end of A faces the N end of B. Different ends pull together.", lvl: 2, fig: { type: "magnets", items: [ { label: "A", poles: "NS" }, { label: "B", poles: "NS" } ], between: ["?"] } },
    { q: "Why do some heavy cupboards have wheels under them?", o: ["so they can roll easily", "so they become magnetic", "so they can float"], a: 0, why: "Wheels are round, so they roll. This makes a heavy cupboard easier to move.", lvl: 2 },
    // lvl 3 (4)
    { q: "Magnet A and magnet B push apart. Which end of B is facing A?", o: ["the N end", "the S end", "the middle"], a: 1, why: "The S end of A faces B. Same ends push apart, so the end of B facing A must be S too.", lvl: 3, fig: { type: "magnets", items: [ { label: "A", poles: "NS" }, { label: "B", poles: "??" } ], between: ["repel"] } },
    { q: "Lina let the same toy car go down the same ramp onto four floors. Look at the graph. Which floor slowed the car down the MOST?", o: ["Tiles", "Carpet", "Grass"], a: 2, why: "The car rolled the shortest distance on grass, only 20 cm. So grass slowed it down the most.", lvl: 3, fig: { type: "bar", xl: "Floor", yl: "Distance rolled (cm)", bars: [["Tiles", 120], ["Wood", 90], ["Carpet", 40], ["Grass", 20]] } },
    { q: "Raj wants to find out if the SHAPE of plasticine changes whether it floats. Which TWO set-ups should he compare?", o: ["A and B", "B and C", "A and C"], a: 0, why: "A and B use the same amount of plasticine. Only the shape is different, so the test is fair.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "beaker", lines: ["50 g plasticine", "Ball shape"] }, { label: "B", icon: "beaker", lines: ["50 g plasticine", "Boat shape"] }, { label: "C", icon: "beaker", lines: ["20 g plasticine", "Ball shape"] } ] } },
    { q: "Which sentence about pushes and pulls is TRUE?", o: ["A pull can only make things go faster", "A push can only start things moving", "A push can change a thing’s shape"], a: 2, why: "Squashing play dough is a push that changes its shape. Pushes and pulls can also stop things, slow them or turn them.", lvl: 3 }
  ],
  tf: [
    { s: "Only big, heavy things can be pushed.", a: false, why: "Small, light things can be pushed too, like a marble or a ball.", pic: "⚽" },
    { s: "A square wheel rolls as well as a round wheel.", a: false, why: "Only round things roll well. A square wheel bumps and stops." },
    { s: "Light things always float.", a: false, why: "A small coin is light, but it sinks.", pic: "🪙" },
    { s: "Pushing a toy car harder makes it go a shorter way.", a: false, why: "A harder push makes the car go faster and further.", pic: "🚗" },
    { s: "A magnet pulls a steel food can.", a: true, why: "Magnets pull steel, so a steel can is pulled.", pic: "🧲🥫" },
    { s: "A push can stop a ball that is rolling towards you.", a: true, why: "Pushes and pulls can start, stop, slow down or turn moving things." },
    { s: "Rough surfaces slow moving things down more than smooth surfaces.", a: true, why: "A ball slows down more on rough grass than on smooth tiles." },
    { s: "The N end of a magnet pulls the S end of another magnet.", a: true, why: "Different ends pull together.", pic: "🧲🧲" }
  ],
  sort: [
    { title: "Smooth or rough?", groups: ["Smooth", "Rough"], items: [["glass window", 0], ["tiled floor", 0], ["metal slide", 0], ["plastic ruler", 0], ["sandpaper", 1], ["doormat", 1], ["tree bark", 1], ["grass field", 1]] }
  ]
};
