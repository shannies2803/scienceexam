window.LBX = window.LBX || {};
LBX["k-materials"] = {
  notes: [
    { h: "From nature or made by people", t: "Some materials come from nature. Wood comes from trees, cotton comes from a plant and wool comes from sheep. Plastic and glass are made by people in factories.", kw: ["nature", "made by people"], pic: "🌳🐑🏭" },
    { h: "Changing things", t: "We can squash, stretch, bend or twist some things to change their shape. Heat makes ice and chocolate melt, and cold in a freezer turns water into ice.", kw: ["squash", "stretch", "melt"], pic: "🧊🍫" }
  ],
  traps: [
    "Shiny things are not always metal. A glass marble and a plastic toy can be shiny too.",
    "Squashing clay changes its shape, but it is still clay. Melted chocolate is still chocolate too."
  ],
  lessons: [
    {
      h: "From nature or made by people?",
      concept: "Ask where the material comes from. If it comes from a plant, an animal or the ground, it is from nature. If people make it in a factory, it is made by people.",
      example: { q: "Is wool from nature or made by people?", pic: "🧶",
        think: ["Where does wool come from?", "It is cut from a sheep.", "A sheep is an animal, so wool comes from nature."],
        answer: "Wool is from nature. It comes from sheep." },
      tip: "Plant, animal or ground = nature. Factory = made by people.",
      try: { q: "Which material is made by people?", o: ["cotton", "plastic", "wood"], a: 1, why: "Plastic is made in factories. Cotton comes from a plant and wood comes from trees.", pic: "🏭" }
    },
    {
      h: "Hot and cold change things",
      concept: "Heat can make some things melt. Cold can make them hard again. Ice melts into water in the sun. Water turns back into ice in the freezer.",
      example: { q: "Jun left an ice cube on a plate in the sun. What happened? How can he get the ice back?", pic: "🧊☀️",
        think: ["The sun warms the ice cube.", "The ice melts into water.", "Put the water in the freezer. It gets cold and turns into ice again."],
        answer: "The ice cube melted into water. If he puts the water in the freezer, it will turn back into ice." },
      tip: "Warm = melts. Very cold = freezes.",
      try: { q: "Some chocolate melted in the sun. How can Mei make it hard again?", o: ["leave it in the sun", "pour warm water on it", "put it in the fridge"], a: 2, why: "The cold fridge makes the melted chocolate hard again. The sun and warm water keep it soft.", pic: "🍫" }
    }
  ],
  mcq: [
    { q: "Which material comes from trees?", o: ["glass", "wood", "plastic"], a: 1, why: "Wood comes from trees. Glass and plastic are made by people.", lvl: 1, pic: "🌳" },
    { q: "Which material comes from sheep?", o: ["wool", "rubber", "metal"], a: 0, why: "Wool is cut from sheep. Rubber comes from rubber trees.", lvl: 1, pic: "🐑" },
    { q: "Which action changes the shape of play dough?", o: ["looking at it", "smelling it", "squashing it"], a: 2, why: "Squashing the dough changes its shape. Looking and smelling do not change it.", lvl: 1 },
    { q: "Which of these is shiny?", o: ["a wooden block", "a new metal spoon", "a cotton sock"], a: 1, why: "A new metal spoon is shiny. Wood and cotton look dull.", lvl: 1, pic: "✨" },
    { q: "What happens to an ice cube left in the hot sun?", o: ["it melts into water", "it turns into a stone", "it grows much bigger"], a: 0, why: "The heat of the sun melts the ice into water.", lvl: 1, pic: "🧊☀️" },
    { q: "What is a coin made of?", o: ["paper", "cloth", "metal"], a: 2, why: "Coins are made of metal. They are hard and shiny.", lvl: 1, pic: "🪙" },
    { q: "Which of these may break if it falls on the floor?", o: ["a rubber ball", "a glass cup", "a cloth bag"], a: 1, why: "Glass can break when it falls. A rubber ball bounces and a cloth bag is soft.", lvl: 1 },
    { q: "What are toy bricks like Lego made of?", o: ["plastic", "paper", "glass"], a: 0, why: "Toy bricks are made of hard plastic.", lvl: 1, pic: "🧱" },

    { q: "Which of these is made by people, not found in nature?", o: ["wool", "rock", "glass"], a: 2, why: "Glass is made by people in factories. Wool comes from sheep and rock is found in the ground.", lvl: 2, pic: "🏭" },
    { q: "Which material is found in nature?", o: ["rock", "glass", "plastic"], a: 0, why: "Rock is found in the ground. People make glass and plastic.", lvl: 2 },
    { q: "Mia gently pulls a rubber band. What does it do?", o: ["it melts", "it stretches", "it sinks"], a: 1, why: "Rubber is stretchy. The band stretches when we pull it.", lvl: 2 },
    { q: "What happens to chocolate left in a hot car?", o: ["it melts and goes soft", "it becomes hard and cold", "it turns into a new toy"], a: 0, why: "The heat in the car melts the chocolate.", lvl: 2, pic: "🚗🍫" },
    { q: "Water is put in the freezer overnight. What does it become?", o: ["juice", "steam", "ice"], a: 2, why: "The freezer is very cold. The water freezes into ice.", lvl: 2, pic: "💧" },
    { q: "Jun hung the same toy on three rubber bands, P, Q and R. Look at the graph. Which band stretched the most?", o: ["Band P", "Band Q", "Band R"], a: 1, why: "Band Q has the tallest bar. It stretched 10 cm, more than P and R.", lvl: 2, fig: { type: "bar", xl: "Rubber band", yl: "How long it stretched (cm)", bars: [["P", 6], ["Q", 10], ["R", 4]] } },
    { q: "Which of these is NOT made of metal?", o: ["a key", "a paper clip", "a pencil eraser"], a: 2, why: "An eraser is made of rubber or plastic. A key and a paper clip are metal.", lvl: 2 },
    { q: "Ah Ma pours juice into moulds to make ice lollies. Where should she put them?", o: ["in the freezer", "on a sunny window", "in a warm oven"], a: 0, why: "The freezer is very cold, so the juice freezes hard. The sun and the oven are warm.", lvl: 2, pic: "🧃" },
    { q: "Which of these can you fold easily?", o: ["a glass plate", "a sheet of paper", "a metal spoon"], a: 1, why: "Paper bends and folds easily. Glass and metal spoons are stiff.", lvl: 2 },
    { q: "A shopping bag must be strong and waterproof. Which is best?", o: ["tissue paper", "newspaper", "thick plastic"], a: 2, why: "Thick plastic is strong and waterproof. Paper tears when it gets wet.", lvl: 2, pic: "🛍️" },

    { q: "Look at the diagram. Which could go in the part marked ‘?’", o: ["rock", "rubber band", "plastic bag"], a: 0, why: "The ‘?’ part is in BOTH circles. A rock is found in nature AND it is hard. A plastic bag is made by people.", lvl: 3, fig: { type: "venn", a: "From nature", b: "Hard", onlyA: ["cotton", "wool"], both: ["?"], onlyB: ["glass", "plastic cup"], neither: ["paper bag"] } },
    { q: "Mei squashed a ball of clay flat. Which is true?", o: ["It has turned into a new material", "It is still clay, in a new shape", "It has become much heavier"], a: 1, why: "Squashing only changes the shape. It is the same clay, and it weighs the same.", lvl: 3 },
    { q: "Which pair are BOTH made by people?", o: ["wood and plastic", "wool and glass", "glass and plastic"], a: 2, why: "People make glass and plastic in factories. Wood and wool come from nature.", lvl: 3 },
    { q: "Three ice cubes were left in different places. Which ice cube will melt first?", o: ["Ice cube A", "Ice cube B", "Ice cube C"], a: 0, why: "The hot sun gives the most heat, so ice cube A melts first. The fridge is cold, so C melts last.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "plate", lines: ["Ice cube", "In the hot sun"] }, { label: "B", icon: "plate", lines: ["Ice cube", "In the shade"] }, { label: "C", icon: "plate", lines: ["Ice cube", "In the fridge"] } ] } },
    { q: "Ali wants to cover a hole in a roof. The cover must keep rain out AND let light in. Which is best?", o: ["a thick cloth", "a clear plastic sheet", "a wooden board"], a: 1, why: "Clear plastic is waterproof and see-through. Cloth lets rain in, and wood keeps light out.", lvl: 3, pic: "🏠🌧️" },
    { q: "Which sentence about shiny things is correct?", o: ["Shiny things are always metal", "Only plastic can be shiny", "A glass marble can be shiny"], a: 2, why: "Metal, glass and plastic can all be shiny. So shiny does not always mean metal.", lvl: 3 }
  ],
  tf: [
    { s: "Wood comes from trees.", a: true, why: "Wood is cut from tree trunks and branches.", pic: "🌳" },
    { s: "Plastic is found in nature.", a: false, why: "Plastic is made by people in factories." },
    { s: "Ice melts into water when it gets warm.", a: true, why: "Heat makes ice melt.", pic: "🧊" },
    { s: "Only metal things can be shiny.", a: false, why: "Glass and plastic can be shiny too.", pic: "✨" },
    { s: "Wool comes from sheep.", a: true, why: "Wool is cut from sheep and grows back.", pic: "🐑" },
    { s: "Squashing clay changes it into a new material.", a: false, why: "Squashing changes only its shape. It is still clay." },
    { s: "Water turns into ice in the freezer.", a: true, why: "The freezer is very cold, so water freezes." },
    { s: "A glass cup never breaks when it is dropped.", a: false, why: "Glass is hard, but it can break when it falls on a hard floor." },
    { s: "Cotton comes from a plant.", a: true, why: "Cotton grows as soft, fluffy balls on the cotton plant." },
    { s: "Rock is made by people in a factory.", a: false, why: "Rock is found in the ground. It comes from nature.", pic: "🪨" }
  ],
  sort: [
    { title: "From nature or made by people?", groups: ["From nature", "Made by people"], items: [["wood", 0], ["rock", 0], ["cotton", 0], ["wool", 0], ["sand", 0], ["plastic", 1], ["glass", 1], ["plastic straw", 1]] },
    { title: "Does it melt on a hot day?", groups: ["Melts on a hot day", "Does not melt"], items: [["ice cream 🍦", 0], ["ice cube 🧊", 0], ["chocolate 🍫", 0], ["butter 🧈", 0], ["stone 🪨", 1], ["metal key 🔑", 1], ["wooden block", 1], ["glass marble", 1]] }
  ]
};
