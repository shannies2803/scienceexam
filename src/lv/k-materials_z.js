window.LBZ = window.LBZ || {};
LBZ["k-materials"] = {
  flash: [
    { f: "We can see through clear glass. We say it is…", b: "see-through", pic: "🪟" },
    { f: "A material that does not let water through is…", b: "waterproof", pic: "🌧️" },
    { f: "Wood comes from…", b: "trees", pic: "🪵" },
    { f: "Wool comes from…", b: "sheep", pic: "🧶" },
    { f: "Glass is made from…", b: "sand" },
    { f: "When ice gets warm, it…", b: "melts", pic: "🧊" },
    { f: "When you pull a rubber band, it…", b: "stretches" },
    { f: "A sponge can … water.", b: "soak up", pic: "🧽" },
    { f: "Using something again is called…", b: "reusing" },
    { f: "Making old things into new things is called…", b: "recycling", pic: "♻️" },
    { f: "Put a cork on water. It will…", b: "float", pic: "🌊" },
    { f: "Sandpaper feels…", b: "rough" }
  ],
  mcq: [
    { q: "What are flip-flop slippers usually made of?", o: ["glass", "rubber", "paper"], a: 1, why: "Flip-flops are made of rubber. It is bendy and waterproof. Glass breaks and paper tears.", lvl: 1, pic: "🩴" },
    { q: "Which of these is made of glass?", o: ["a pillow", "a sock", "a mirror"], a: 2, why: "A mirror is made of glass. A pillow and a sock are made of cloth.", lvl: 1 },
    { q: "Which of these is see-through?", o: ["a brown paper box", "a clear plastic cup", "a red rubber ball"], a: 1, why: "We can see through clear plastic. Paper boxes and rubber balls are not see-through.", lvl: 1 },
    { q: "Which of these is made of cloth?", o: ["a school uniform", "a drink can", "a window pane"], a: 0, why: "A school uniform is made of cloth. A drink can is metal and a window pane is glass.", lvl: 1, pic: "👕" },
    { q: "Which of these is made of metal?", o: ["a cotton sock", "a glass marble", "a paper clip"], a: 2, why: "A paper clip is made of metal. Its name says paper, but it is not paper!", lvl: 1, pic: "📎" },
    { q: "Which of these is soft and can be squeezed?", o: ["a kitchen sponge", "a metal key", "a wooden block"], a: 0, why: "A sponge is soft, so we can squeeze it. A key and a block are hard.", lvl: 1 },

    { q: "Why do we wear rubber gloves to wash dishes?", o: ["rubber is see-through", "rubber soaks up water", "rubber is waterproof"], a: 2, why: "Rubber is waterproof, so it keeps our hands dry. It does not soak up water.", lvl: 2, pic: "🧤🍽️" },
    { q: "Mum wraps leftover food in aluminium foil. Why is foil good for this?", o: ["it bends to cover the food", "it soaks up the food’s juice", "it lets us see the food"], a: 0, why: "Foil is a thin metal that bends easily around the food. It does not soak up juice, and it is not see-through.", lvl: 2 },
    { q: "Why are MRT seats made of hard plastic or metal, not paper?", o: ["they are soft and soak up water", "they are strong and last long", "they are see-through and bendy"], a: 1, why: "Hard plastic and metal are strong and last a long time. Paper would tear and get wet.", lvl: 2, pic: "🚇" },
    { q: "Lily drops a metal spoon, a ping-pong ball and a glass marble into water. Which will float?", o: ["the metal spoon", "the ping-pong ball", "the glass marble"], a: 1, why: "The ping-pong ball floats. The metal spoon and the glass marble sink.", lvl: 2, pic: "🌊" },
    { q: "Which material is best for a school bag that holds heavy books?", o: ["thin tissue paper", "clear, hard glass", "strong, thick cloth"], a: 2, why: "Thick cloth is strong and bendy, so it holds heavy books. Tissue paper tears and glass breaks.", lvl: 2, pic: "🎒" },
    { q: "Ken made three shelves of the same size. The graph shows how many books each shelf held before it bent. Which material is the strongest?", o: ["paper", "wood", "cardboard"], a: 1, why: "The wood shelf held 20 books. That is more than cardboard (8) and paper (1).", lvl: 2, fig: { type: "bar", title: "Books each shelf held", xl: "Shelf material", yl: "Number of books", bars: [["Wood", 20], ["Cardboard", 8], ["Paper", 1]] } },

    { q: "Look at the diagram. Which object could go in the part marked ‘?’", o: ["metal spoon", "clear glass cup", "cotton towel"], a: 1, why: "The ‘?’ part is in BOTH circles. A clear glass cup is waterproof AND see-through. A metal spoon is not see-through and a towel soaks up water.", lvl: 3, fig: { type: "venn", a: "Waterproof", b: "See-through", onlyA: ["rubber boot", "metal tray"], both: ["?"], onlyB: [], neither: ["paper towel"] } },
    { q: "Which pair of materials are BOTH waterproof?", o: ["paper and plastic", "cloth and rubber", "plastic and rubber"], a: 2, why: "Plastic and rubber do not let water through. Paper and cloth soak up water.", lvl: 3, pic: "💧" },
    { q: "Ken wants to find out which material soaks up the most water. Which two set-ups should he compare?", o: ["A and B", "A and C", "B and C"], a: 0, why: "In A and B, only the material changes. The size and the water stay the same, so it is a fair test.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "dish", lines: ["Paper towel", "Small piece", "5 spoons of water"] }, { label: "B", icon: "dish", lines: ["Cloth", "Small piece", "5 spoons of water"] }, { label: "C", icon: "dish", lines: ["Cloth", "Big piece", "10 spoons of water"] } ] } },
    { q: "Which sentence is correct?", o: ["Some big things float, like a log", "All big things sink in water", "All small things float on water"], a: 0, why: "A big wooden log floats. A small coin sinks, so small things do not always float.", lvl: 3, pic: "🌊" }
  ],
  tf: [
    { s: "A mirror is made of glass.", a: true, why: "Mirrors are made of glass with a shiny back.", pic: "🪞" },
    { s: "Aluminium foil is a kind of plastic.", a: false, why: "Aluminium foil is a thin metal. That is why it is shiny and bends easily." },
    { s: "Paper gets stronger when it is wet.", a: false, why: "Wet paper is weak. It tears easily.", pic: "📄💧" },
    { s: "Natural rubber comes from rubber trees.", a: true, why: "Natural rubber is made from a white sap that comes out of rubber trees.", pic: "🌳" },
    { s: "Clothes can be made of cotton or wool.", a: true, why: "Cotton comes from a plant and wool comes from sheep. Both make cloth.", pic: "👕🧶" },
    { s: "A glass cup soaks up water.", a: false, why: "Glass is waterproof. The water stays inside the cup." },
    { s: "Wet clay becomes hard when it dries.", a: true, why: "When clay dries, it becomes hard. That is how clay pots are made." },
    { s: "Old toys that still work cannot be reused.", a: false, why: "We can reuse them. We can play with them again or give them to someone else.", pic: "🧸" }
  ],
  sort: [
    { title: "Bendy or stiff?", groups: ["Bendy", "Stiff"], items: [["rubber band", 0], ["sheet of paper", 0], ["piece of cloth", 0], ["aluminium foil", 0], ["metal spoon", 1], ["wooden block", 1], ["glass cup", 1], ["stone", 1]] }
  ]
};
