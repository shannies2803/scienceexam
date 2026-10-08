window.LB = window.LB || {};
LB["k-materials"] = {
  notes: [
    { h: "Materials around us", t: "Things are made of materials. Wood, metal, plastic, glass, paper, cloth, rubber and clay are all materials.", kw: ["material"], pic: "🪵🥄📄" },
    { h: "How does it feel?", t: "Metal and glass are hard, but cloth is soft. Sandpaper feels rough, and glass feels smooth.", kw: ["hard", "soft", "smooth"], pic: "🧸🥄" },
    { h: "Bendy or stiff", t: "Rubber, cloth and paper bend easily. A metal spoon and a wooden block are stiff, and wet clay can be squeezed into new shapes.", kw: ["bendy", "stiff"], pic: "🥄" },
    { h: "See-through or not", t: "We can see through clear glass and clear plastic. We cannot see through wood or metal.", kw: ["see-through"], pic: "🪟" },
    { h: "Waterproof or soaks up water", t: "Plastic, rubber, glass and metal are waterproof. They do not let water through. Paper and cloth soak up water.", kw: ["waterproof", "soak up"], pic: "💧" },
    { h: "Float or sink", t: "A wooden block and a cork float on water. A metal key, a coin and a glass marble sink.", kw: ["float", "sink"], pic: "🌊" },
    { h: "The right material for the job", t: "We pick a material that suits the job. A raincoat is plastic because it is waterproof, and a window is glass because it is see-through.", kw: ["waterproof", "see-through", "strong"], pic: "🧥🪟🪑" },
    { h: "Reuse and recycle", t: "Reuse means using something again. Recycle means old things are made into new things, so put clean paper, plastic, glass and metal in the blue recycling bin.", kw: ["reuse", "recycle"], pic: "♻️" }
  ],
  traps: [
    "Not all metals are stiff. Aluminium foil is a metal, but it bends easily.",
    "Big things do not always sink. A big wooden log floats.",
    "Glass is not the only see-through material. Clear plastic is see-through too.",
    "One thing can be made of different materials. A cup can be made of glass, plastic, metal or clay.",
    "Only clean things go into the blue recycling bin. Food waste does not go in."
  ],
  lessons: [
    {
      h: "What is it made of?",
      concept: "Everything is made of a material. Some things are made of more than one material.",
      example: { q: "A chair has metal legs and a plastic seat. What is it made of?", pic: "🪑", think: ["Look at the legs. They are metal.", "Look at the seat. It is plastic.", "So the chair has two materials."], answer: "The chair is made of metal and plastic." },
      tip: "Look at each part of the thing. Each part can be a different material.",
      try: { q: "What is a window pane usually made of?", o: ["Glass", "Cloth", "Paper"], a: 0, why: "Window panes are made of glass, so we can see through them." }
    },
    {
      h: "Feel and test",
      concept: "We can test materials with our hands. Is it hard or soft? Rough or smooth? Bendy or stiff?",
      example: { q: "How can you find out if a ruler is bendy or stiff?", pic: "📏", think: ["Hold both ends of the ruler.", "Push gently to bend it.", "If it bends easily, it is bendy. If not, it is stiff."], answer: "Gently try to bend it. If it bends easily, it is bendy. If it does not bend, it is stiff." },
      tip: "Always test gently, so nothing breaks.",
      try: { q: "Which word best describes sandpaper?", o: ["Smooth", "Rough", "See-through"], a: 1, why: "Sandpaper feels bumpy, so it is rough." }
    },
    {
      h: "Water tests",
      concept: "Some materials soak up water. Waterproof materials do not. Some things float on water and some sink.",
      example: { q: "Kai drops water on a paper towel and on a plastic sheet. What happens?", pic: "💧", think: ["The paper towel gets wet all through.", "The water stays on top of the plastic sheet as drops.", "So paper soaks up water. Plastic is waterproof."], answer: "The paper towel soaks up the water. The plastic sheet is waterproof, so the water stays on top." },
      tip: "Waterproof = water stays out. Soaks up = water goes in.",
      try: { q: "Which of these will float on water?", o: ["A stone", "A coin", "A cork"], a: 2, why: "A cork floats. Stones and coins sink." }
    },
    {
      h: "Pick the right material",
      concept: "We choose a material because of what it is like. The material must suit the job.",
      example: { q: "Why is a raincoat made of plastic and not paper?", pic: "🧥🌧️", think: ["What does a raincoat do? It keeps us dry.", "Paper soaks up water and tears.", "Plastic is waterproof."], answer: "Plastic is waterproof, so it keeps the rain out. Paper would soak up water and tear." },
      tip: "Ask: What is the job? What must the material be like?",
      try: { q: "Which material is best for a bath towel?", o: ["Plastic", "Cloth", "Glass"], a: 1, why: "Cloth soaks up water, so it dries us after a bath." }
    }
  ],
  mcq: [
    { q: "Which material can you see through?", o: ["Wood", "Glass", "Metal"], a: 1, why: "Clear glass is see-through. Wood and metal are not.", lvl: 1 },
    { q: "Which of these feels soft?", o: ["A stone", "A metal spoon", "A cotton pillow"], a: 2, why: "A cotton pillow is soft. A stone and a metal spoon are hard.", lvl: 1 },
    { q: "Which material can stretch?", o: ["Rubber", "Glass", "Wood"], a: 0, why: "Rubber can stretch, like a rubber band. Glass and wood cannot.", lvl: 1 },
    { q: "Which of these soaks up spilt water?", o: ["A glass plate", "A metal tray", "A cloth towel"], a: 2, why: "Cloth soaks up water. Glass and metal do not.", lvl: 1, pic: "💧" },
    { q: "What are the pages of a storybook made of?", o: ["Paper", "Metal", "Glass"], a: 0, why: "Book pages are made of paper.", lvl: 1, pic: "📚" },
    { q: "Which of these is made of wood?", o: ["A drinking glass", "An ice-cream stick", "A car tyre"], a: 1, why: "An ice-cream stick is wood. A drinking glass is glass and a tyre is rubber.", lvl: 1 },
    { q: "Which of these feels rough?", o: ["Sandpaper", "A glass window", "A silk scarf"], a: 0, why: "Sandpaper is bumpy, so it feels rough. Glass and silk feel smooth.", lvl: 1 },
    { q: "What are bicycle tyres made of?", o: ["Paper", "Rubber", "Glass"], a: 1, why: "Tyres are made of rubber.", lvl: 1, pic: "🚲" },
    { q: "Which of these will sink in water?", o: ["A wooden block", "A cork", "A metal key"], a: 2, why: "A metal key sinks. A wooden block and a cork float.", lvl: 1, pic: "🌊" },
    { q: "Which of these will float on water?", o: ["A wooden block", "A stone", "A coin"], a: 0, why: "Wood floats. A stone and a coin sink.", lvl: 1, pic: "🌊" },
    { q: "What do we call using something again instead of throwing it away?", o: ["Wasting", "Reusing", "Breaking"], a: 1, why: "Using something again is reusing.", lvl: 1, pic: "♻️" },
    { q: "Where should you put an empty, clean drink can?", o: ["In the drain by the road", "In a flower pot outside", "In the blue recycling bin"], a: 2, why: "Clean cans go in the blue recycling bin, so they can be made into new things.", lvl: 1 },
    { q: "Which of these is waterproof?", o: ["A plastic sheet", "A paper towel", "A cotton towel"], a: 0, why: "Plastic does not let water through. Paper and cotton soak up water.", lvl: 1 },
    { q: "Which of these is made of clay?", o: ["A flower pot for plants", "A window pane of a house", "A rubber band for hair"], a: 0, why: "Many flower pots are made of clay. Windows are glass and rubber bands are rubber.", lvl: 1 },

    { q: "Which material is best for a raincoat?", o: ["Paper", "Cotton cloth", "Plastic"], a: 2, why: "Plastic is waterproof. Paper and cotton cloth soak up water.", lvl: 2, pic: "🌧️" },
    { q: "Why is glass used for windows?", o: ["It is see-through", "It is soft", "It soaks up water"], a: 0, why: "Glass is see-through, so light comes in and we can see outside.", lvl: 2, pic: "🪟" },
    { q: "Why are bath towels made of cloth?", o: ["Cloth is see-through", "Cloth soaks up water", "Cloth is hard"], a: 1, why: "Cloth soaks up water, so a towel can dry us.", lvl: 2 },
    { q: "Why are car tyres made of rubber?", o: ["Rubber is see-through and shiny", "Rubber soaks up water from puddles", "Rubber is bendy and grips the road"], a: 2, why: "Rubber is bendy and strong, and it grips the road well.", lvl: 2, pic: "🚗" },
    { q: "Which material is best for a chair that people sit on?", o: ["Paper", "Wood", "Cloth"], a: 1, why: "Wood is strong and stiff, so it can hold a person up. Paper and cloth alone would bend.", lvl: 2, pic: "🪑" },
    { q: "Which of these bends easily without breaking?", o: ["A glass bottle", "A strip of paper", "A stone"], a: 1, why: "Paper is bendy. Glass breaks and a stone does not bend.", lvl: 2 },
    { q: "Which of these is stiff?", o: ["A piece of cloth", "A sheet of paper", "A metal spoon"], a: 2, why: "A metal spoon does not bend easily, so it is stiff. Cloth and paper are bendy.", lvl: 2 },
    { q: "Which material can you press with your hands to make a pot?", o: ["Wet clay", "Glass", "Metal"], a: 0, why: "Wet clay is soft and can be shaped with our hands.", lvl: 2 },
    { q: "Which of these is NOT see-through?", o: ["A clear glass window", "A clear plastic bag", "A wooden door"], a: 2, why: "We cannot see through wood. Clear glass and clear plastic are see-through.", lvl: 2 },
    { q: "Why don’t we make umbrellas from paper?", o: ["Paper soaks up water and tears", "Paper is too heavy to hold up", "Paper is see-through and shiny"], a: 0, why: "Paper soaks up rain and tears. An umbrella must be waterproof.", lvl: 2, pic: "☂️" },
    { q: "Ling finished her drink from a plastic bottle. What is the best thing to do?", o: ["Throw it into the drain near the road", "Rinse it and put it in the recycling bin", "Leave it on the beach for someone else"], a: 1, why: "A clean bottle in the recycling bin can be made into new things.", lvl: 2 },
    { q: "Which of these is REUSING?", o: ["Throwing an old jam jar away", "Breaking an old jam jar into bits", "Keeping buttons in an old jam jar"], a: 2, why: "Using the jar again for buttons is reusing it.", lvl: 2 },
    { q: "Look at the diagram. Which object is both hard and see-through?", o: ["Glass window", "Metal spoon", "Cotton towel"], a: 0, why: "The glass window is where the two circles overlap, so it is hard and see-through.", lvl: 2, fig: { type: "venn", a: "Hard", b: "See-through", onlyA: ["metal spoon", "wooden block"], both: ["glass window"], onlyB: ["clear plastic bag"], neither: ["cotton towel"] } },
    { q: "Why is a spoon made of metal and not paper?", o: ["Metal is soft", "Metal is strong and stiff", "Metal soaks up water"], a: 1, why: "Metal is strong and stiff, so the spoon does not bend or get soggy.", lvl: 2, pic: "🥄" },

    { q: "Mei rolled some clay into a ball. It sank. Then she shaped the same clay into a boat. It floated! What changed?", o: ["The material", "The colour", "The shape"], a: 2, why: "It was the same clay. Only the shape changed, and the boat shape floats.", lvl: 3 },
    { q: "Kai dipped three pieces of cloth, P, Q and R, in water. The graph shows how much water each soaked up. Which cloth is best for a towel?", o: ["Cloth P", "Cloth Q", "Cloth R"], a: 1, why: "Cloth Q soaked up the most water, so it will dry us best.", lvl: 3, fig: { type: "bar", xl: "Cloth", yl: "Water soaked up (spoons)", bars: [["P", 2], ["Q", 9], ["R", 5]] } },
    { q: "Which sentence is correct?", o: ["All metals are stiff and cannot bend", "Aluminium foil is metal, but bends easily", "Metal is see-through, like glass"], a: 1, why: "Most metal things are stiff, but thin aluminium foil bends easily. Metal is not see-through.", lvl: 3 },
    { q: "Why is a school water bottle usually made of plastic, not glass?", o: ["Plastic does not break easily when dropped", "Plastic soaks up water and keeps it cool", "Plastic is always blue and looks nice"], a: 0, why: "Glass can break when it falls. Plastic is waterproof and does not break easily.", lvl: 3 },
    { q: "Look at the diagram. Which object is hard but NOT see-through?", o: ["Glass window", "Clear plastic bag", "Wooden block"], a: 2, why: "The wooden block is only in the Hard circle. The glass window is also see-through.", lvl: 3, fig: { type: "venn", a: "Hard", b: "See-through", onlyA: ["metal spoon", "wooden block"], both: ["glass window"], onlyB: ["clear plastic bag"], neither: ["cotton towel"] } },
    { q: "Jun has a wooden block, a metal key and a cork. Which two will float?", o: ["The wooden block and the cork", "The metal key and the cork", "The wooden block and the metal key"], a: 0, why: "Wood and cork float. The metal key sinks.", lvl: 3, pic: "🌊" },
    { q: "Which of these should NOT go into the blue recycling bin?", o: ["A clean newspaper", "An empty drink can", "A leftover banana peel"], a: 2, why: "Food waste does not go into the recycling bin. Clean paper and cans can be recycled.", lvl: 3 },
    { q: "Ben wants a lunch box lid. It must be see-through, waterproof and not break when dropped. Which material is best?", o: ["Clear glass", "Clear plastic", "Thick paper"], a: 1, why: "Clear plastic is see-through and waterproof, and it does not break easily. Glass can break and paper soaks up water.", lvl: 3 }
  ],
  tf: [
    { s: "Clear glass is see-through.", a: true, why: "We can see through clear glass.", pic: "🪟" },
    { s: "Paper is waterproof.", a: false, why: "Paper soaks up water.", pic: "📄" },
    { s: "A metal key floats in water.", a: false, why: "A metal key sinks." },
    { s: "A wooden block floats in water.", a: true, why: "Wood floats." },
    { s: "Rubber can stretch and bend.", a: true, why: "Rubber is stretchy and bendy." },
    { s: "Towels are made of cloth because cloth soaks up water.", a: true, why: "Cloth soaks up water, so towels can dry us." },
    { s: "All metals are hard to bend.", a: false, why: "Aluminium foil is a metal, but it bends easily." },
    { s: "Plastic is a good material for a raincoat.", a: true, why: "Plastic is waterproof, so it keeps us dry.", pic: "🌧️" },
    { s: "Glass is a good material for a pillow.", a: false, why: "Glass is hard and can break. A pillow must be soft." },
    { s: "Sandpaper feels smooth.", a: false, why: "Sandpaper is bumpy, so it feels rough." },
    { s: "Wet clay is soft and can be shaped with our hands.", a: true, why: "We can press and roll wet clay into new shapes." },
    { s: "A wooden door is see-through.", a: false, why: "We cannot see through wood." },
    { s: "Recycling means old things are made into new things.", a: true, why: "Old paper can be made into new paper, for example.", pic: "♻️" },
    { s: "Reusing means throwing things away after using them once.", a: false, why: "Reusing means using things again." },
    { s: "Big things always sink.", a: false, why: "A big wooden log floats." },
    { s: "Paper is made from wood.", a: true, why: "Paper is made from wood that comes from trees." },
    { s: "Glass can break easily when it is dropped.", a: true, why: "Glass is hard, but it can break when it falls." },
    { s: "A cotton T-shirt keeps you dry in heavy rain.", a: false, why: "Cotton soaks up water. It is not waterproof.", pic: "👕🌧️" },
    { s: "Food leftovers go into the blue recycling bin.", a: false, why: "Only clean paper, plastic, glass and metal go into the blue bin." },
    { s: "A bowl can be made of glass, plastic, metal or clay.", a: true, why: "One kind of thing can be made of different materials.", pic: "🥣" }
  ],
  sort: [
    { title: "Float or sink?", groups: ["Floats", "Sinks"], items: [["wooden block", 0], ["metal key", 1], ["cork", 0], ["stone", 1], ["leaf", 0], ["glass marble", 1], ["ping-pong ball", 0], ["coin", 1]] },
    { title: "Waterproof or soaks up water?", groups: ["Waterproof", "Soaks up water"], items: [["plastic bag", 0], ["tissue paper", 1], ["glass cup", 0], ["cotton towel", 1], ["rubber boot", 0], ["sponge", 1], ["metal tray", 0], ["newspaper", 1]] },
    { title: "What is it made of?", groups: ["Metal", "Glass", "Paper"], items: [["coin", 0], ["window pane", 1], ["newspaper", 2], ["key", 0], ["drinking glass", 1], ["storybook pages", 2], ["paper clip", 0], ["glass marble", 1]] },
    { title: "Reuse or recycle?", groups: ["Reuse", "Recycle"], items: [["keep buttons in an old jam jar", 0], ["old paper is made into new paper", 1], ["use a shoebox as a toy box", 0], ["put empty cans in the blue bin", 1], ["give old clothes to a friend", 0], ["old plastic bottles are made into new things", 1], ["use a shopping bag again", 0], ["old glass is melted to make new bottles", 1]] }
  ]
};
