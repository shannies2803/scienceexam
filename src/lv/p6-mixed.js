window.LB = window.LB || {};
// PSLE Crossover — integrated questions across P3–P6 topics
LB["p6-mixed"] = {
  notes: [
    { h: "Photosynthesis feeds the food web", t: "Green plants use chlorophyll to trap light energy and make food (sugar) from carbon dioxide and water; oxygen is given out. Light energy is converted into chemical potential energy stored in the food. Animals get this energy by eating plants or other animals, so every food chain starts with a plant (producer), and the Sun is the source of energy for all food chains.", kw: ["light energy", "chemical potential energy", "carbon dioxide and water", "gives out oxygen", "producer"] },
    { h: "Food chains and food webs", t: "Arrows in a food chain or food web point from the food to the organism that eats it, showing the direction of energy flow. A food web is made of several linked food chains. When the population of one organism changes, the populations of its predators and its prey change too; always trace BOTH what it eats and what eats it, and give the reason (more or less food, more or fewer predators).", kw: ["energy flow", "predator", "prey", "food web"] },
    { h: "Man’s impact on the environment", t: "Cutting down forests (deforestation) destroys habitats and removes plants that take in carbon dioxide during photosynthesis. Burning fossil fuels releases carbon dioxide and pollutes the air. More carbon dioxide in the air traps more heat and contributes to global warming. Pollution of water (e.g. plastics, oil, chemicals) harms or kills organisms and disrupts food webs. Conservation efforts include reducing, reusing and recycling, and replanting trees.", kw: ["deforestation", "habitat", "carbon dioxide", "global warming", "pollution"] },
    { h: "Energy is converted, never lost", t: "Energy cannot be created or destroyed; it can only be converted from one form to another. Stored energy is potential energy: gravitational (height), elastic (stretched or compressed) and chemical (food, fuels, batteries). Some energy is always converted into heat and sound, which are usually not useful, so a device never gives out as much useful energy as it takes in.", kw: ["cannot be created or destroyed", "converted", "potential energy", "heat and sound"] },
    { h: "Friction produces heat", t: "Friction is a force that opposes motion between two surfaces in contact. When surfaces rub, friction converts kinetic energy into heat energy (and some sound energy), so the surfaces become warmer and wear away. Rougher surfaces produce more friction. Friction is useful for grip and braking, but it wastes energy in moving parts, which is reduced with lubricants (oil), ball bearings or smoother surfaces.", kw: ["friction", "opposes motion", "kinetic energy", "heat energy", "wear"] },
    { h: "Forces: gravity, spring force, magnetic force", t: "Gravitational force pulls objects towards the Earth; it gives objects their weight. A stretched or compressed spring exerts an elastic spring force, and the more it is stretched, the greater the force. Magnetic force can act without contact. A force can move a stationary object, change the speed or direction of a moving object, or change the shape of an object.", kw: ["gravitational force", "elastic spring force", "magnetic force", "speed or direction"] },
    { h: "Circuits, conductors and energy", t: "A bulb lights only when there is a closed circuit. Metals (copper, steel, iron, aluminium) are electrical conductors; plastic, rubber, wood and glass are electrical insulators, and an insulator in the path makes the circuit open. In a circuit, chemical potential energy in the batteries is converted into electrical energy, which a bulb converts into light energy and heat energy.", kw: ["closed circuit", "electrical conductor", "electrical insulator", "chemical potential energy", "electrical energy"] },
    { h: "Series, parallel and electromagnets", t: "In series, a break anywhere (a fused bulb, an open switch) stops the electric current in the whole circuit. In parallel, each branch has its own path, so the other branches still work. A coil of wire around an iron core becomes an electromagnet in a closed circuit; more coils or more batteries make it stronger, and it loses most of its magnetism when the circuit is opened.", kw: ["series", "parallel", "own path", "electromagnet", "more coils"] },
    { h: "Water cycle and changes of state", t: "Water gains heat from the Sun and evaporates into water vapour. The water vapour rises, loses heat to the cooler air and condenses into tiny water droplets that form clouds, and the water falls back as rain. Condensation on a cold surface (like a can of iced drink) happens because water vapour in the SURROUNDING AIR loses heat to the cold surface. During melting or boiling, the temperature stays the same until the change of state is complete.", kw: ["gains heat", "evaporates", "loses heat", "condenses", "water vapour in the surrounding air"] },
    { h: "Respiratory, circulatory and cells", t: "At the lungs, oxygen from the air enters the blood and carbon dioxide leaves the blood to be breathed out. The heart pumps blood through the blood vessels to transport oxygen and digested food to all cells. Cells use oxygen to release energy from food (respiration), producing carbon dioxide and water. During exercise, the cells need more energy, so breathing rate and heart rate increase.", kw: ["lungs", "heart pumps blood", "transport oxygen", "release energy", "carbon dioxide"] },
    { h: "Plant and animal cells", t: "Both plant and animal cells have a cell membrane, cytoplasm and a nucleus. Plant cells also have a cell wall (gives shape and support) and a large vacuole, and many plant cells, especially leaf cells, have chloroplasts containing chlorophyll to trap light for photosynthesis. Root cells underground have no chloroplasts because they receive no light.", kw: ["cell membrane", "nucleus", "cell wall", "chloroplasts", "chlorophyll"] },
    { h: "Adaptations, reproduction and dispersal", t: "Adaptations are features or behaviours that help an organism survive in its environment, e.g. to get food, escape predators, or reduce water loss. Flowers are adapted for pollination (insect-pollinated: bright petals, scent, nectar; wind-pollinated: feathery stigmas, anthers hanging out). After fertilisation the ovule becomes the seed and the ovary becomes the fruit, and fruits are adapted for dispersal by wind, water, animals or splitting, so seedlings grow away from the parent plant and compete less for light, water, space and mineral salts.", kw: ["adaptation", "survive", "pollination", "fertilisation", "dispersal", "compete less"] }
  ],
  traps: [
    "Plants photosynthesise and so they do not respire → plants respire all the time, day and night; photosynthesis happens only in light.",
    "When the snakes in a food web die out, every other population increases → trace each link: prey of the snake increase at first, but organisms eaten by that prey may then decrease.",
    "Energy is used up or lost when a ball stops bouncing → the kinetic energy is converted into heat and sound energy; energy is never destroyed.",
    "Friction only slows things down → friction also converts kinetic energy into heat, which is why rubbed surfaces become warm and wear away.",
    "The water droplets on the outside of a cold glass leaked through the glass → water vapour in the surrounding air lost heat to the cold surface and condensed.",
    "Arrows in a food web show ‘what eats what’ pointing to the food → arrows point from the food TO the eater, the direction of energy flow.",
    "A bulb lights because the battery gives it electricity → give the full chain: chemical potential energy → electrical energy → light and heat energy, in a closed circuit.",
    "Blood carries oxygen to the lungs → blood picks up oxygen AT the lungs and carries it to all cells; it brings carbon dioxide back to the lungs."
  ],
  lessons: [
    {
      h: "Tracing a change through a food web",
      concept: "PSLE food-web questions ask what happens to one population when another changes. Find every arrow INTO the organism (its food) and every arrow OUT of it (its predators). State the direction of change AND the reason in terms of food supply or predators. If the question involves man’s impact (pesticides, cutting trees), start from the organism directly affected.",
      example: {
        q: "Study the food web. A farmer sprays insecticide that kills most of organism Q. Explain what will happen to the population of organism S in the next few weeks.",
        fig: { type: "web", links: [["P", "Q"], ["P", "R"], ["Q", "S"], ["R", "S"], ["S", "T"]] },
        marks: 2,
        think: ["Find S: arrows from Q and R point into S, so S eats both Q and R.", "Q is killed, so S loses one of its food sources.", "S still has R to eat, so it will not die out, but there is less food overall.", "The population of S will decrease because there is less food for S."],
        answer: "The population of S will decrease because Q is one of its food sources, so there is less food for S. S will not die out as it can still eat R."
      },
      tip: "Never write only ‘it will be affected’. Give the direction (increase/decrease) + ‘because there is more/less food’ or ‘more/fewer predators’.",
      try: {
        q: "In the same food web, organism T is removed. What is most likely to happen to the population of S at first?",
        fig: { type: "web", links: [["P", "Q"], ["P", "R"], ["Q", "S"], ["R", "S"], ["S", "T"]] },
        o: ["It decreases because it has less food.", "It increases because it has fewer predators.", "It stays the same because S does not eat T.", "It decreases because R also decreases."],
        a: 1,
        why: "T is the only organism that eats S. Without T, fewer S are eaten, so the S population increases at first."
      }
    },
    {
      h: "Energy chains with friction and ‘wasted’ energy",
      concept: "When a moving object slows down because of friction, its kinetic energy is converted into heat energy (and sound energy). Write the full chain in order, starting from the stored form. Never say energy is ‘lost’ or ‘used up’ without saying what it is converted into.",
      example: {
        q: "A cyclist squeezes the brakes and the bicycle stops. The rubber brake pads become warm. Explain why.",
        marks: 2,
        think: ["The brake pads rub against the moving wheel rim: there is friction between them.", "Friction opposes the motion and slows the wheel.", "The kinetic energy of the bicycle is converted into heat energy, so the pads become warm."],
        answer: "There is friction between the brake pads and the moving wheel rim. The friction converts the kinetic energy of the bicycle into heat energy, so the pads become warm."
      },
      tip: "Name BOTH the force (friction) and the conversion (kinetic energy → heat energy). One without the other usually scores only half.",
      try: {
        q: "A boy slides down a playground slide and his legs feel warm. Which energy conversion caused this?",
        o: ["Gravitational potential energy → kinetic energy only", "Heat energy → kinetic energy", "Kinetic energy → heat energy due to friction", "Elastic potential energy → heat energy"],
        a: 2,
        why: "Friction between his legs and the slide converts some of his kinetic energy into heat energy. GPE → KE explains the sliding, not the warmth."
      }
    },
    {
      h: "Conductors and closed circuits",
      concept: "To decide which bulbs light, trace a complete path from one end of the batteries through each bulb and back. Any insulator, open switch or fused bulb on that path breaks it. For parallel branches, check each branch separately, and check the main part of the circuit that every branch shares.",
      example: {
        q: "The circuit has three branches. Each has a bulb and an object placed across a gap. Which bulbs will light? Explain.",
        fig: { type: "circuit", cells: 2, main: [{ k: "switch", label: "S", open: false }], branches: [[{ k: "bulb", label: "A" }, { k: "gap", label: "X", text: "steel pin" }], [{ k: "bulb", label: "B" }, { k: "gap", label: "Y", text: "rubber band" }], [{ k: "bulb", label: "C" }, { k: "gap", label: "Z", text: "aluminium foil" }]] },
        marks: 2,
        think: ["Switch S in the main circuit is closed, so each branch can be checked on its own.", "Steel and aluminium are metals, so they are electrical conductors: branches A and C are closed circuits.", "Rubber is an electrical insulator: branch B is an open circuit."],
        answer: "Bulbs A and C will light. Steel and aluminium are electrical conductors, so there is a closed circuit through A and through C. Rubber is an electrical insulator, so B’s branch is an open circuit."
      },
      tip: "Use the words ‘electrical conductor’ / ‘electrical insulator’ and ‘closed circuit’ / ‘open circuit’ — markers look for them.",
      try: {
        q: "In the same circuit, switch S is now opened. Which bulbs will light?",
        fig: { type: "circuit", cells: 2, main: [{ k: "switch", label: "S", open: true }], branches: [[{ k: "bulb", label: "A" }, { k: "gap", label: "X", text: "steel pin" }], [{ k: "bulb", label: "B" }, { k: "gap", label: "Y", text: "rubber band" }], [{ k: "bulb", label: "C" }, { k: "gap", label: "Z", text: "aluminium foil" }]] },
        o: ["A and C only", "A only", "C only", "None of the bulbs"],
        a: 3,
        why: "S is in the main circuit shared by all branches. Opening it makes an open circuit for every branch, so no bulb lights."
      }
    },
    {
      h: "Changes of state: say where heat goes",
      concept: "Every change-of-state answer needs the direction of heat flow. Evaporation and boiling: water GAINS heat. Condensation: water vapour LOSES heat to a cooler surface. For droplets on a cold object, say the water vapour came from the surrounding air.",
      example: {
        q: "Mei placed a can of iced drink on a balance. After 10 minutes, droplets had formed on the outside of the can and the reading on the balance had increased. Explain both observations.",
        marks: 3,
        think: ["The can is colder than the surrounding air.", "Water vapour in the surrounding air comes into contact with the cold surface of the can.", "It loses heat to the can and condenses into water droplets.", "These droplets are extra water added to the outside of the can, so the mass increases."],
        answer: "Water vapour in the surrounding air came into contact with the cold surface of the can, lost heat and condensed into water droplets on it. The droplets added mass to the can, so the reading on the balance increased."
      },
      tip: "Three musts: water vapour in the SURROUNDING AIR, LOSES HEAT to the cold surface, CONDENSES.",
      try: {
        q: "Which statement correctly explains why a wet towel dries faster on a hot, windy day?",
        o: ["The water gains heat faster and the wind carries water vapour away, so it evaporates faster.", "The towel loses heat to the wind, so the water in it condenses and drips away.", "The water in the towel boils at a lower temperature on a hot, windy day.", "The wind pushes the water droplets out of the towel, like squeezing it dry."],
        a: 0,
        why: "Higher temperature means the water gains heat faster; wind carries water vapour away, so evaporation is faster. The water does not boil."
      }
    },
    {
      h: "Linking systems: gases, blood and energy",
      concept: "Multi-system questions follow one substance on its journey. Oxygen: air → lungs → blood → heart pumps blood → cells → used to release energy. Carbon dioxide travels the other way. In plants, photosynthesis (in light only) takes in carbon dioxide and gives out oxygen, while respiration (all the time) takes in oxygen and gives out carbon dioxide.",
      example: {
        q: "Explain why Jun’s heart rate and breathing rate both increase when he runs.",
        marks: 3,
        think: ["Running needs more energy for his muscles.", "Muscle cells need more oxygen to release more energy from food.", "Breathing faster takes in more oxygen and removes more carbon dioxide at the lungs.", "The heart beats faster to transport the oxygen to the muscle cells faster."],
        answer: "His muscle cells need more energy. More oxygen is needed to release more energy from food. He breathes faster to take in more oxygen, and his heart beats faster to pump blood to transport more oxygen to the muscle cells faster."
      },
      tip: "Link the chain: more energy needed → more oxygen needed → breathe faster (lungs) + heart pumps faster (transport).",
      try: {
        q: "A plant and a mouse are kept in a sealed glass tank in a dark room. What happens to the amount of carbon dioxide in the tank?",
        o: ["It decreases because the plant takes it in for photosynthesis.", "It stays the same because the plant uses what the mouse gives out.", "It increases because both the plant and the mouse respire and give it out.", "It increases only because of the mouse, as plants do not respire."],
        a: 2,
        why: "In the dark there is no photosynthesis, so nothing removes carbon dioxide. Both the plant and the mouse respire and give out carbon dioxide."
      }
    }
  ],
  mcq: [
    // ---- lvl 1 (8)
    { q: "During photosynthesis, which energy conversion takes place in a leaf?", o: ["Chemical potential energy → light energy", "Light energy → chemical potential energy", "Heat energy → light energy", "Light energy → kinetic energy"], a: 1, why: "Chlorophyll traps light energy, which is converted into chemical potential energy stored in the food (sugar) made.", lvl: 1 },
    { q: "Which gas does a green plant take in from the air to make food in sunlight?", o: ["Oxygen", "Nitrogen", "Water vapour", "Carbon dioxide"], a: 3, why: "Plants take in carbon dioxide (and water) to make food; oxygen is given out during photosynthesis.", lvl: 1 },
    { q: "Siti rubs her palms together quickly on a cold morning and they feel warm. What causes this?", o: ["Friction converts kinetic energy into heat energy.", "Her palms gain heat from the cold air.", "Gravitational force pulls her palms together.", "Her blood carries heat energy from the air."], a: 0, why: "Rubbing creates friction between the palms, which converts kinetic energy into heat energy.", lvl: 1 },
    { q: "Which object, placed across the gap in a circuit, would allow a bulb to light up?", o: ["A plastic straw", "A wooden ice-cream stick", "A steel paper clip", "A rubber eraser"], a: 2, why: "Steel is a metal and an electrical conductor, so the circuit becomes closed. The others are electrical insulators.", lvl: 1 },
    { q: "Water droplets form on the outside of a glass of iced kopi. Where does the water come from?", o: ["Water vapour in the surrounding air", "Kopi seeping through the glass", "Ice melting inside the glass", "Water produced by the glass"], a: 0, why: "Water vapour in the surrounding air loses heat to the cold glass and condenses on its outer surface.", lvl: 1 },
    { q: "Study the diagram of the human digestive system. In which part is most digested food absorbed into the blood?", fig: { type: "organs", system: "digestive", mark: { stomach: "A", small_intestine: "B", large_intestine: "C", gullet: "D" } }, o: ["A", "B", "C", "D"], a: 1, why: "B is the small intestine, where digested food is absorbed into the bloodstream. The large intestine (C) mainly absorbs water.", lvl: 1 },
    { q: "What is the source of energy for all the food chains on Earth?", o: ["Green plants", "Soil", "Water", "The Sun"], a: 3, why: "Plants trap light energy from the Sun to make food; all other organisms get energy from plants directly or indirectly.", lvl: 1 },
    { q: "An electromagnet is switched on near a pile of objects. Which object will it attract?", o: ["A copper coin", "An aluminium can", "An iron nail", "A plastic button"], a: 2, why: "An electromagnet attracts magnetic materials such as iron, steel, nickel and cobalt. Copper and aluminium are not magnetic.", lvl: 1 },

    // ---- lvl 2 (14)
    { q: "Study the food web. Which organism is BOTH a predator and a prey?", fig: { type: "web", links: [["grass", "grasshopper"], ["grass", "rabbit"], ["grasshopper", "frog"], ["frog", "snake"], ["rabbit", "snake"], ["snake", "eagle"]] }, o: ["Grass", "Rabbit", "Frog", "Eagle"], a: 2, why: "The frog eats the grasshopper (predator) and is eaten by the snake (prey). The rabbit eats only grass, a plant, so it is not a predator.", lvl: 2 },
    { q: "A large area of forest is cleared and burnt to make way for farmland. Which effect on the air is most likely?", o: ["Less carbon dioxide, as fewer animals live there", "More oxygen, as the fires release oxygen", "No change, as the farm crops replace the trees immediately", "More carbon dioxide, as burning releases it and fewer plants take it in"], a: 3, why: "Burning releases carbon dioxide, and removing trees means less carbon dioxide is taken in by photosynthesis.", lvl: 2 },
    { q: "Study the circuit. Switch S1 is open and switch S is closed. Which bulb(s) will light?", fig: { type: "circuit", cells: 2, main: [{ k: "switch", label: "S", open: false }], branches: [[{ k: "bulb", label: "A" }, { k: "switch", label: "S1", open: true }], [{ k: "bulb", label: "B" }]] }, o: ["A only", "B only", "A and B", "Neither bulb"], a: 1, why: "A and B are in parallel. A’s branch is open because S1 is open, but B has its own closed path through the closed switch S.", lvl: 2 },
    { q: "Which shows the energy conversion in a battery-powered torch that is switched on?", o: ["Electrical energy → chemical potential energy → light energy", "Chemical potential energy → light energy → electrical energy", "Light energy → electrical energy → heat energy", "Chemical potential energy → electrical energy → light energy + heat energy"], a: 3, why: "The batteries store chemical potential energy, which becomes electrical energy in the circuit; the bulb gives out light and heat.", lvl: 2 },
    { q: "A rubber ball is dropped from a height of 2 m. Each bounce is lower than the one before. Why?", o: ["Some energy is converted into heat and sound energy at each bounce", "Gravity gets weaker as the ball falls", "The ball loses its mass at each bounce", "Energy is destroyed each time the ball hits the floor"], a: 0, why: "At each impact some kinetic energy is converted into heat and sound, so less is converted back into gravitational potential energy. Energy is never destroyed.", lvl: 2 },
    { q: "Study the plant cell. Which labelled part traps light energy for photosynthesis?", fig: { type: "cell", kind: "plant", mark: { cell_wall: "A", nucleus: "B", chloroplast: "C", vacuole: "D" } }, o: ["A", "B", "C", "D"], a: 2, why: "C is a chloroplast. It contains chlorophyll, which traps light energy.", lvl: 2 },
    { q: "A fruit found on a beach at Pulau Ubin has a waterproof skin and a thick, fibrous husk. How is it most likely dispersed, and why?", o: ["By wind — the dry husk makes it light enough to blow", "By animals — the husk is juicy and sweet to eat", "By splitting — the husk dries and bursts open", "By water — the fibrous husk traps air so it floats"], a: 3, why: "The fibrous husk traps air so the fruit floats, and the waterproof skin keeps water out, like the coconut.", lvl: 2 },
    { q: "The diagram shows the human circulatory system. Blood flows from the lungs (B) back to the heart (A). Compared with blood going TO the lungs, this blood has", fig: { type: "organs", system: "circulatory", mark: { heart: "A", lungs: "B" } }, o: ["more oxygen and less carbon dioxide", "more oxygen and more carbon dioxide", "less oxygen and less carbon dioxide", "less oxygen and more carbon dioxide"], a: 0, why: "At the lungs, oxygen enters the blood and carbon dioxide leaves it to be breathed out.", lvl: 2 },
    { q: "A potted plant is placed in a sealed, clear box in a completely dark cupboard for a day. Which gas will increase in amount in the box?", o: ["Oxygen", "Carbon dioxide", "Nitrogen", "Both oxygen and carbon dioxide"], a: 1, why: "In the dark, the plant cannot photosynthesise but continues to respire, taking in oxygen and giving out carbon dioxide.", lvl: 2 },
    { q: "Crushed ice at –5 °C is heated steadily. Study the graph. What is happening between 2 and 6 minutes?", fig: { type: "line", xl: "Time (min)", yl: "Temperature (°C)", pts: [["0", -5], ["2", 0], ["4", 0], ["6", 0], ["8", 20], ["10", 40]] }, o: ["The ice is losing heat to the air and freezing", "The ice gains heat but stays at 0 °C while it melts", "The water is boiling at its boiling point", "No heat is being gained, so nothing changes"], a: 1, why: "The ice keeps gaining heat, but its temperature stays at its melting point (0 °C) until all of it has melted.", lvl: 2 },
    { q: "Study the diagram. Bar Q is brought near bar magnet P as shown and they repel. What can you conclude about Q?", fig: { type: "magnets", items: [{ label: "P", poles: "NS" }, { label: "Q", poles: "??" }], between: ["repel"] }, o: ["Q is an iron bar", "Q is a non-magnetic bar", "Q is a magnet with its N pole on its right end", "Q is a magnet with its N pole facing P"], a: 2, why: "Repulsion only happens between like poles, so Q must be a magnet (an iron bar would be attracted). P’s S pole faces Q, so Q’s left end is S and its N pole is on its right end.", lvl: 2 },
    { q: "In a pond, mosquito larvae are eaten by guppies. The guppies are all removed. What will most likely happen to the number of mosquito larvae at first, and why?", o: ["Increase — they have fewer predators", "Decrease — they have less food", "Stay the same — guppies are not their food", "Decrease — the water becomes polluted"], a: 0, why: "Guppies are predators of mosquito larvae; removing them means fewer larvae are eaten.", lvl: 2 },
    { q: "Study the flower. Which part develops into the fruit after fertilisation?", fig: { type: "flower", mark: { petal: "A", anther: "B", stigma: "C", ovary: "D" } }, o: ["A", "B", "C", "D"], a: 3, why: "The ovary (D) develops into the fruit; the ovules inside develop into seeds.", lvl: 2 },
    { q: "A solar-powered water heater on an HDB rooftop and a solar panel both use sunlight. Which pair of conversions is correct?", o: ["Heater: light → heat; Panel: light → electrical", "Heater: heat → light; Panel: electrical → light", "Heater: light → electrical; Panel: light → heat", "Heater: chemical potential → heat; Panel: light → chemical potential"], a: 0, why: "The water heater absorbs light energy and converts it into heat energy; a solar panel converts light energy into electrical energy.", lvl: 2 },

    // ---- lvl 3 (12)
    { q: "Study the food web. A farmer sprays pesticide that kills all the caterpillars. Which is the most likely effect a few weeks later?", fig: { type: "web", links: [["plant", "caterpillar"], ["plant", "snail"], ["caterpillar", "bird"], ["snail", "bird"], ["caterpillar", "spider"], ["spider", "lizard"]] }, o: ["The spider population decreases, and then the lizard population decreases", "The spider population increases as it has fewer competitors", "The lizard population increases as it eats snails instead", "The plant population decreases as there is more pesticide"], a: 0, why: "Spiders eat only caterpillars, so they have less food and decrease; lizards eat only spiders, so they then decrease too. Spiders and lizards do not compete with caterpillars, and the pesticide itself does not reduce the plants.", lvl: 3 },
    { q: "Rahim wants to find out if a plant needs carbon dioxide to make food. The four set-ups are identical potted plants in sealed bell jars. Which TWO set-ups should he compare?", fig: { type: "setups", items: [{ label: "W", icon: "jar", lines: ["In sunlight", "CO2 absorber inside", "Watered"] }, { label: "X", icon: "jar", lines: ["In sunlight", "No CO2 absorber", "Watered"] }, { label: "Y", icon: "jar", lines: ["In darkness", "No CO2 absorber", "Watered"] }, { label: "Z", icon: "jar", lines: ["In darkness", "CO2 absorber inside", "Not watered"] }] }, o: ["W and Y", "X and Y", "W and X", "Y and Z"], a: 2, why: "W and X differ only in carbon dioxide (the absorber); both are in sunlight and watered. The others change more than one variable or remove light.", lvl: 3 },
    { q: "A water plant was placed at different distances from a lamp, and the number of gas bubbles given off per minute was counted. Study the graph. What can be concluded?", fig: { type: "bar", xl: "Distance from lamp (cm)", yl: "Bubbles per minute", bars: [["10", 42], ["20", 30], ["30", 18], ["40", 9]] }, o: ["The nearer the lamp, the more light, so the faster the plant photosynthesises", "The further the lamp, the more carbon dioxide the plant gives out as bubbles", "The bubbles are carbon dioxide given out by the plant during respiration", "The plant can photosynthesise only when the lamp is 10 cm away from it"], a: 0, why: "Nearer the lamp the light is brighter, so more oxygen bubbles are given off: the rate of photosynthesis is higher.", lvl: 3 },
    { q: "Study the circuit. The batteries and bulbs are working and switch S1 is closed. Neither bulb P nor bulb Q lights. Which statement MUST be true?", fig: { type: "circuit", cells: 2, main: [{ k: "gap", label: "X", text: "material X" }], branches: [[{ k: "bulb", label: "P" }, { k: "switch", label: "S1", open: false }], [{ k: "bulb", label: "Q" }, { k: "gap", label: "Y", text: "steel pin" }]] }, o: ["The steel pin is an electrical insulator", "Bulb Q would light if the steel pin were replaced with copper wire", "Material X is an electrical insulator", "Bulb P would light if switch S1 were opened"], a: 2, why: "P’s branch is closed (S1 closed), so P can fail to light only if the shared main path is open: X must be an insulator. Replacing the steel pin changes nothing while X blocks the circuit.", lvl: 3 },
    { q: "A toy car was released from the same height on a ramp and ran onto four different floor surfaces. Study the graph. On which surface was the frictional force acting on the car the GREATEST?", fig: { type: "bar", xl: "Floor surface", yl: "Distance travelled (cm)", bars: [["Carpet", 40], ["Wood", 120], ["Tiles", 150], ["Sandpaper", 25]] }, o: ["Carpet", "Wood", "Tiles", "Sandpaper"], a: 3, why: "The car starts with the same energy each time. On sandpaper it stops in the shortest distance, so the frictional force opposing its motion is greatest there, converting its kinetic energy into heat energy over the shortest distance.", lvl: 3 },
    { q: "Study the graph from an electromagnet experiment. Which conclusion is correct?", fig: { type: "bar", xl: "Set-up (coils, batteries)", yl: "Paper clips attracted", bars: [["20 coils, 1", 5], ["40 coils, 1", 10], ["20 coils, 2", 9], ["40 coils, 2", 18]] }, o: ["The number of batteries does not affect the strength at all", "Only the number of coils affects the strength, not the batteries", "The electromagnet is weakest when it has 40 coils and 1 battery", "Increasing the number of coils or batteries makes the electromagnet stronger"], a: 3, why: "Comparing pairs that differ in one variable: more coils (5→10, 9→18) and more batteries (5→9, 10→18) both increase the number of clips.", lvl: 3 },
    { q: "Which statement about the water cycle is NOT correct?", o: ["Water vapour loses heat high up and condenses to form clouds", "Water evaporates only from seas, not from puddles or leaves", "Heat from the Sun causes water in reservoirs to evaporate", "Rain is water that falls when droplets in clouds join and become heavy"], a: 1, why: "Water evaporates from any exposed water surface, including puddles, wet surfaces and plant leaves.", lvl: 3 },
    { q: "Seeds of a plant were grown at different distances from the parent tree. Study the table. What is the best explanation of the results?", tbl: [["Distance from parent (m)", "Average height of seedling after 4 weeks (cm)"], ["0.5", "4"], ["5", "11"], ["20", "15"]], o: ["Seedlings near the parent compete more with it for light, water and mineral salts", "Seedlings near the parent receive more light from the tree", "Seedlings far from the parent get more carbon dioxide from the parent tree", "Seedlings grow taller when they are further from any water"], a: 0, why: "Close to the parent, seedlings compete with it for sunlight, water, space and mineral salts, so they grow less. This is why dispersal is an advantage.", lvl: 3 },
    { q: "Study the cell. Where in a plant is this cell most likely found?", fig: { type: "cell", kind: "plant", mark: { cell_wall: "A", cell_membrane: "B", nucleus: "C", vacuole: "D" } }, o: ["It cannot be a plant cell because it has no chloroplasts", "In the part of a leaf that makes the most food", "In a root under the soil", "In a green stem exposed to sunlight"], a: 2, why: "It has a cell wall, so it is a plant cell, but no chloroplast is shown. Root cells underground receive no light and have no chloroplasts.", lvl: 3 },
    { q: "A pendulum bob is released from position A, swings through the lowest point B and rises to C on the other side. At which point does the bob have the MOST kinetic energy?", o: ["A, as it has the most gravitational potential energy", "C, as it has just finished moving", "It has the same kinetic energy everywhere", "B, as it is moving fastest at the lowest point"], a: 3, why: "As the bob falls, gravitational potential energy is converted into kinetic energy, so it is fastest at the lowest point B. At A and C it is momentarily at rest.", lvl: 3 },
    { q: "Burning petrol in cars releases carbon dioxide. Which statement links the energy conversion and its impact on the environment correctly?", o: ["Kinetic energy → chemical potential energy; more carbon dioxide cools the Earth down", "Chemical potential energy → kinetic and heat energy; more carbon dioxide adds to global warming", "Heat energy → chemical potential energy; the carbon dioxide is used up by the engine", "Chemical potential energy → light energy only; carbon dioxide reduces air pollution"], a: 1, why: "The engine converts the chemical potential energy in fuel into kinetic energy (and lots of heat). More carbon dioxide in the air traps more heat, contributing to global warming.", lvl: 3 },
    { q: "Fish take in dissolved oxygen through their gills. Which statement correctly links the gills with the fish’s circulatory system and cells?", o: ["Oxygen goes directly from the gills to all the cells without using blood", "Blood carries carbon dioxide to the gills to be used by the cells", "The gills make oxygen from water and pass it into the blood", "Oxygen enters the blood at the gills and is carried to the cells to release energy"], a: 3, why: "Gills have many blood vessels. Oxygen dissolved in the water enters the blood there, and the blood transports it to all cells, where it is used to release energy.", lvl: 3 },

    // ---- lvl 4 (6)
    { q: "A plant and some snails are kept in a sealed glass tank near a window. The amount of carbon dioxide in the tank is measured over 24 hours from midnight. Study the graph. Why does the amount FALL between 06:00 and 18:00?", fig: { type: "line", xl: "Time", yl: "Carbon dioxide (units)", pts: [["00:00", 60], ["06:00", 80], ["12:00", 55], ["18:00", 40], ["24:00", 62]] }, o: ["The snails stop respiring during the day, so they give out none", "The plant stops respiring during the day while it photosynthesises", "In light, the plant takes in carbon dioxide faster than the plant and snails give it out", "Carbon dioxide escapes from the sealed tank during the day when it is warm"], a: 2, why: "Both organisms respire all day and night. In light, the plant photosynthesises faster than the combined respiration, so carbon dioxide is taken in faster than it is given out. At night (no light) it rises again.", lvl: 4 },
    { q: "A ball is placed on a compressed spring and released. It rises straight up to 1.2 m, then falls back onto the spring. Which statement is correct?", o: ["At 1.2 m, all the elastic potential energy has become gravitational potential energy, so it will rise to exactly 1.2 m again", "On the next bounce it will rise less than 1.2 m because some energy is converted into heat and sound", "At 1.2 m, the ball has the most kinetic energy", "The spring gains more elastic potential energy than it first had when the ball lands"], a: 1, why: "Elastic PE → KE → GPE, but some energy is converted into heat and sound (friction with air, impact), so less energy is available for the next rise. At its highest point the ball momentarily stops (no KE).", lvl: 4 },
    { q: "Study the food web. Organism R is a plant. Organism U feeds only on T. If U is removed, which change is MOST likely after several months?", fig: { type: "web", links: [["R", "S"], ["R", "T"], ["S", "V"], ["T", "U"], ["T", "V"], ["V", "W"]] }, o: ["S decreases because R is eaten by more T", "V decreases because it has less food", "W decreases because V has fewer predators", "T decreases because it has more predators"], a: 0, why: "Without U, T increases. More T eat more R, so there is less R for S, and S decreases. V has more T to eat, so V does not lack food, and W (which eats V) has no reason to decrease.", lvl: 4 },
    { q: "Two identical cans each hold 200 g of ice at 0 °C and are placed on balances in the same room. Can A is wrapped in a thick layer of dry wool; can B is not wrapped. Which prediction after 15 minutes is correct?", o: ["A’s reading increases more than B’s, because the wool traps more water vapour", "Both readings stay at 200 g, because the ice has not melted in 15 minutes", "B’s reading increases more than A’s, as water vapour condenses mainly on B’s cold surface", "B’s reading decreases, because its ice melts faster and turns into water"], a: 2, why: "Wool is a poor conductor of heat, so A’s outer surface stays at nearly room temperature and little condensation forms there. Water vapour in the air loses heat to B’s cold surface and condenses on it, adding mass. Melting does not change mass.", lvl: 4 },
    { q: "An iron ball is held stationary just below an electromagnet. The switch is then opened and the ball falls to the floor. Which statement is correct?", o: ["While held, only the magnetic force acts on the ball; as it falls, only gravity acts on it", "While held, the magnetic force balances gravity; as it falls, gravitational potential energy becomes kinetic energy", "When the switch is opened, the gravitational force on the ball becomes stronger, so it falls faster", "As it falls, kinetic energy is converted into gravitational potential energy, so it speeds up"], a: 1, why: "Gravity always acts on the ball. While held, the electromagnet’s upward magnetic force balances it. When the circuit opens, the electromagnet loses its magnetism and gravity makes the ball fall: GPE → KE.", lvl: 4 },
    { q: "Four plants were studied. Which plant is BEST adapted to survive in a hot, dry desert?", tbl: [["Plant", "Leaves", "Stomata (tiny openings) per mm² of leaf", "Stem"], ["A", "Large and flat", "300", "Thin"], ["B", "Spines", "20", "Thick, stores water"], ["C", "Small and waxy", "150", "Thin"], ["D", "Spines", "250", "Thick, stores water"]], o: ["A", "B", "C", "D"], a: 1, why: "B has spines (tiny surface area) and very few openings, so it loses the least water by evaporation, and its thick stem stores water. D stores water but its many openings lose more water.", lvl: 4 }
  ],
  tf: [
    { s: "Plants give out carbon dioxide at night.", a: true, why: "Plants respire all the time; at night there is no photosynthesis to take in the carbon dioxide produced." },
    { s: "Plants respire only at night when they cannot photosynthesise.", a: false, why: "Plants respire day and night. In light, photosynthesis is usually faster, so they take in more carbon dioxide than they give out." },
    { s: "In a food web, the arrows show the direction in which energy flows.", a: true, why: "Each arrow points from the food to the eater, the direction energy passes along." },
    { s: "If a predator is removed from a food web, all other populations will increase.", a: false, why: "Its prey may increase at first, but the organisms that prey eats may then decrease." },
    { s: "Energy is lost when a moving toy car stops because of friction.", a: false, why: "The kinetic energy is converted into heat (and sound) energy; energy is never lost or destroyed." },
    { s: "Friction between two surfaces can make them wear away and become warmer.", a: true, why: "Rubbing surfaces wear down, and friction converts kinetic energy into heat energy." },
    { s: "A battery stores electrical energy.", a: false, why: "A battery stores chemical potential energy, which is converted into electrical energy in a closed circuit." },
    { s: "An aluminium spoon placed across a gap in a circuit will complete the circuit.", a: true, why: "Aluminium is a metal and an electrical conductor, so the circuit becomes closed." },
    { s: "An electromagnet can attract an aluminium can.", a: false, why: "Aluminium is not a magnetic material; an electromagnet attracts iron, steel, nickel and cobalt." },
    { s: "Water droplets on a cold can come from water vapour in the surrounding air.", a: true, why: "The water vapour loses heat to the cold surface and condenses." },
    { s: "Water must reach 100 °C before it can turn into water vapour.", a: false, why: "Evaporation happens at any temperature; 100 °C is the boiling point." },
    { s: "The temperature of melting ice stays at 0 °C even though it is gaining heat.", a: true, why: "The heat gained is used to change the state; the temperature stays the same until all has melted." },
    { s: "Blood picks up oxygen at the lungs and carries it to cells all over the body.", a: true, why: "Oxygen enters the blood at the lungs; the heart pumps the blood to all cells." },
    { s: "Cells use carbon dioxide to release energy from food.", a: false, why: "Cells use oxygen to release energy from food; carbon dioxide is produced and removed." },
    { s: "All plant cells have chloroplasts.", a: false, why: "Root cells and other cells not exposed to light usually have no chloroplasts." },
    { s: "Both plant cells and animal cells have a nucleus and a cell membrane.", a: true, why: "These are common to both; only plant cells have a cell wall and chloroplasts." },
    { s: "After fertilisation, the ovule develops into a fruit.", a: false, why: "The ovule develops into a seed; the ovary develops into the fruit." },
    { s: "Seed dispersal reduces competition between the seedlings and the parent plant.", a: true, why: "Seedlings that grow away from the parent compete less for light, water, space and mineral salts." },
    { s: "Cutting down forests reduces the carbon dioxide in the air because there are fewer trees to give it out.", a: false, why: "Trees take in more carbon dioxide for photosynthesis than they give out in daylight; removing them (and burning them) increases the carbon dioxide in the air." },
    { s: "During photosynthesis, light energy is converted into chemical potential energy.", a: true, why: "The energy is stored in the food (sugar) the plant makes." }
  ],
  sort: [
    { title: "Sort each process: does the substance GAIN heat or LOSE heat?", groups: ["Gains heat", "Loses heat"], items: [["ice melting in a cup", 0], ["puddle drying in the sun", 0], ["water boiling in a kettle", 0], ["wet hair drying with a hairdryer", 0], ["dew forming on grass at dawn", 1], ["water freezing in an ice tray", 1], ["mist forming on a bathroom mirror", 1], ["water vapour forming clouds", 1], ["molten chocolate hardening", 1]] },
    { title: "Sort each human activity by its main effect on the environment", groups: ["Harms the environment", "Helps the environment"], items: [["clearing forests for farmland", 0], ["burning fossil fuels in cars", 0], ["dumping plastic into the sea", 0], ["oil spill from a tanker", 0], ["replanting mangroves", 1], ["recycling paper and cans", 1], ["using solar panels on HDB rooftops", 1], ["taking public transport instead of driving", 1], ["setting up nature reserves", 1]] },
    { title: "Sort each part by the system or organism part it belongs to", groups: ["Respiratory / circulatory system", "Plant cell only", "Flower (reproduction)"], items: [["lungs", 0], ["heart", 0], ["blood vessels", 0], ["windpipe", 0], ["cell wall", 1], ["chloroplast", 1], ["stigma", 2], ["anther", 2], ["ovary", 2], ["ovule", 2]] }
  ],
  oe: [
    {
      q: "Study the food web in a mangrove swamp.\n(a) Name the source of energy for this food web. (1m)\n(b) Part of the mangrove is cleared and the mangrove trees are cut down. Explain how this would affect the crab population. (2m)\n(c) State one effect of cutting down the mangrove trees on the amount of carbon dioxide in the air. (1m)",
      fig: { type: "web", links: [["mangrove tree", "crab"], ["mangrove tree", "snail"], ["crab", "heron"], ["snail", "heron"], ["crab", "monitor lizard"]] },
      marks: 4,
      kw: [["sun", "light energy"], ["decrease"], ["less food", "food source", "fewer mangrove", "lose their food"], ["carbon dioxide increase", "more carbon dioxide", "increase"]],
      model: "(a) The Sun (light energy). (b) The crab population will decrease because the mangrove trees are its food, so there is less food for the crabs. (c) There will be more carbon dioxide in the air, as fewer trees take in carbon dioxide for photosynthesis, so the amount will increase."
    },
    {
      q: "Wei Ming rides his bicycle and then brakes hard. The rubber brake pads press against the metal wheel rims and the bicycle stops.\n(a) Name the force between the brake pads and the rims that stops the bicycle. (1m)\n(b) After braking, the brake pads feel hot. Explain why, in terms of energy conversion. (2m)\n(c) After some months, the brake pads become thinner. Explain why. (1m)",
      marks: 4,
      kw: [["friction"], ["kinetic energy"], ["heat energy", "heat"], ["rub", "wear", "worn"]],
      model: "(a) Friction. (b) The friction converts the kinetic energy of the moving bicycle into heat energy, so the pads become hot. (c) Each time he brakes, the pads rub against the rims and the friction makes the rubber wear away, so they become thinner."
    },
    {
      q: "Study the circuit. Objects X, Y and Z are placed across the gaps.\n(a) Which bulb(s) will light up when switch S is closed? (1m)\n(b) Explain your answer to (a). (2m)\n(c) State the energy conversion that takes place in a bulb that lights up. (1m)",
      fig: { type: "circuit", cells: 2, main: [{ k: "switch", label: "S", open: false }], branches: [[{ k: "bulb", label: "A" }, { k: "gap", label: "X", text: "copper key" }], [{ k: "bulb", label: "B" }, { k: "gap", label: "Y", text: "glass rod" }], [{ k: "bulb", label: "C" }, { k: "gap", label: "Z", text: "wooden spoon" }]] },
      marks: 4,
      kw: [["a only", "bulb a"], ["copper", "electrical conductor", "conductor"], ["insulator", "open circuit"], ["light energy", "light and heat"]],
      model: "(a) Bulb A only. (b) Copper is an electrical conductor, so the branch with bulb A is a closed circuit. Glass and wood are electrical insulators, so the branches with bulbs B and C are open circuits. (c) Electrical energy is converted into light energy and heat energy."
    },
    {
      q: "Priya placed a can of iced drink on an electronic balance in her classroom. The reading was 380 g. After 15 minutes, water droplets had formed on the outside of the can.\n(a) Where did the water droplets come from? (1m)\n(b) Explain how the droplets formed. (2m)\n(c) Predict how the balance reading would change. Give a reason. (1m)",
      marks: 4,
      kw: [["surrounding air", "the air"], ["loses heat", "lost heat"], ["condense"], ["increase", "more than 380"]],
      model: "(a) From the water vapour in the surrounding air. (b) The water vapour came into contact with the cold surface of the can, lost heat to it and condensed into water droplets. (c) The reading would increase because the water droplets on the can add to its mass."
    },
    {
      q: "The fruit of the angsana tree is flat and light, with a thin, wing-like part around the seed.\n(a) How is the angsana fruit dispersed? (1m)\n(b) Explain how its feature helps it to be dispersed. (1m)\n(c) Explain why it is important for the seeds to be dispersed far from the parent tree. (2m)",
      marks: 4,
      kw: [["wind"], ["carried", "air longer", "stay in the air", "float in the air", "glide"], ["compet"], ["sunlight", "water", "space", "mineral"]],
      model: "(a) By wind. (b) The light, flat wing-like part allows the fruit to be carried by the wind and stay in the air longer, so it travels further. (c) The seedlings will compete less with the parent tree and with one another for sunlight, water, space and mineral salts, so they have a better chance of survival."
    },
    {
      q: "Study the diagram of two human body systems.\n(a) Name part B and state its function. (1m)\n(b) Describe what happens to oxygen at part C. (1m)\n(c) During a race, Aisyah’s heart rate increases. Explain why this helps her muscle cells. (2m)",
      fig: { type: "organs", system: "circulatory", mark: { heart: "B", lungs: "C" } },
      marks: 4,
      kw: [["heart", "pump"], ["enter", "into the blood", "absorbed"], ["transport", "carri", "deliver"], ["release", "more energy"]],
      model: "(a) B is the heart. It pumps blood around the body. (b) Oxygen from the air enters the blood at the lungs (C). (c) Her heart pumps blood faster, so oxygen is transported to her muscle cells faster. The cells use more oxygen to release more energy from food for her muscles to work harder."
    },
    {
      q: "A crane at a scrapyard uses a large electromagnet to lift old cars.\n(a) Explain why the electromagnet can lift a steel car body but not the aluminium parts. (1m)\n(b) Suggest two ways to make the electromagnet able to lift heavier loads. (2m)\n(c) Explain why the cars drop when the operator opens the switch. (1m)",
      marks: 4,
      kw: [["magnetic material", "steel is magnetic"], ["more coils", "more turns"], ["more batteries", "stronger electrical supply", "more electric current"], ["loses", "open circuit", "no electric current"]],
      model: "(a) Steel is a magnetic material but aluminium is a non-magnetic material, so only steel is attracted. (b) Wind more coils of wire around the iron core, and use more batteries (a stronger electrical supply). (c) When the switch is opened, it becomes an open circuit, so the electromagnet loses its magnetism and the cars fall due to gravitational force."
    },
    {
      q: "Set-ups P and Q were placed in sunlight for 3 hours. Each sealed jar contained the same amount of air at the start.\n(a) In which set-up will the mouse survive longer? (1m)\n(b) Explain your answer to (a). (2m)",
      fig: { type: "setups", items: [{ label: "P", icon: "jar", lines: ["Mouse only", "In sunlight"] }, { label: "Q", icon: "jar", lines: ["Mouse + green plant", "In sunlight"] }] },
      marks: 3,
      kw: [["q"], ["photosynthesis", "photosynthesise"], ["oxygen"]],
      model: "(a) Q. (b) In sunlight the plant carries out photosynthesis and gives out oxygen, which the mouse uses for respiration. The plant also takes in the carbon dioxide the mouse gives out, so the oxygen in Q runs out more slowly."
    },
    {
      q: "Ali drops a tennis ball from a height of 1.5 m. It bounces several times, each time lower, and finally stops.\n(a) State the type of energy the ball has just before it is released. (1m)\n(b) Explain why each bounce is lower than the one before. (2m)\n(c) Ali says ‘The ball’s energy has disappeared.’ Explain why he is wrong. (1m)",
      marks: 4,
      kw: [["gravitational potential"], ["heat", "sound"], ["less kinetic", "less energy", "less gravitational"], ["cannot be destroyed", "cannot be created", "not destroyed", "never destroyed"]],
      model: "(a) Gravitational potential energy. (b) Each time the ball hits the floor, some of its kinetic energy is converted into heat and sound energy, so less energy is converted back into gravitational potential energy and it cannot rise as high. (c) Energy cannot be created or destroyed; the energy has been converted into heat and sound energy which spread to the surroundings."
    },
    {
      q: "Some schools in Singapore have installed solar panels on their roofs to produce electricity for lights and fans.\n(a) State the energy conversion in a solar panel. (1m)\n(b) Explain how using solar panels instead of electricity from burning fuels can help the environment. (2m)",
      marks: 3,
      kw: [["light energy"], ["less fuel", "fewer fuels", "burning", "fossil"], ["less carbon dioxide", "global warming", "pollution"]],
      model: "(a) Light energy is converted into electrical energy. (b) Less fuel needs to be burnt at power stations, so less carbon dioxide and fewer pollutants are released into the air. This reduces global warming and air pollution."
    },
    {
      q: "Ice at –12 °C was heated steadily and its temperature recorded. Study the graph.\n(a) State the temperature at which the ice melts. (1m)\n(b) Explain why the temperature stays the same between 3 and 9 minutes although it is still being heated. (1m)\n(c) At 15 minutes, the level of water in the beaker had dropped slightly although the water was not boiling. Explain why. (2m)",
      fig: { type: "line", xl: "Time (min)", yl: "Temperature (°C)", pts: [["0", -12], ["3", 0], ["6", 0], ["9", 0], ["12", 30], ["15", 60]] },
      marks: 4,
      kw: [["0"], ["melt", "change of state", "change state"], ["gains heat", "gained heat"], ["evaporat"]],
      model: "(a) 0 °C. (b) The heat gained is used to melt the ice, so the temperature stays at 0 °C until all the ice has melted (change of state). (c) The water gains heat and some of it evaporates into water vapour at the exposed surface, even though it has not reached 100 °C."
    },
    {
      q: "Study the flower of a plant.\n(a) Name part C and state what happens there during pollination. (1m)\n(b) This flower has large, brightly coloured petals and a sweet scent. How is it most likely pollinated? Explain. (2m)\n(c) Name the part that will develop into a seed after fertilisation, and give its letter. (1m)",
      fig: { type: "flower", mark: { petal: "A", anther: "B", stigma: "C", ovary: "D", ovule: "E" } },
      marks: 4,
      x: 1,
      kw: [["stigma"], ["insect", "bee", "butterfl"], ["attract"], ["ovule"]],
      model: "(a) C is the stigma, where pollen grains land and are received during pollination. (b) By insects. The bright petals and sweet scent attract insects such as bees, which carry pollen grains from the anther of one flower to the stigma of another. (c) E, the ovule."
    },
    {
      q: "Study the cell taken from a plant.\n(a) Name part A and state its function. (1m)\n(b) This cell was taken from a leaf, not a root. Using evidence from the diagram, explain how you know. (2m)\n(c) Why can this cell, and not an animal cell, make food? (1m)",
      fig: { type: "cell", kind: "plant", mark: { cell_wall: "A", chloroplast: "B", nucleus: "C", vacuole: "D" } },
      marks: 4,
      x: 1,
      kw: [["cell wall", "shape", "support"], ["chloroplast"], ["light", "sunlight"], ["chlorophyll"]],
      model: "(a) A is the cell wall. It gives the plant cell a fixed shape and support. (b) The cell has chloroplasts (B). Leaf cells are exposed to light and have chloroplasts for photosynthesis, while root cells underground receive no light and have none. (c) The chloroplasts contain chlorophyll, which traps light energy to make food; animal cells have no chloroplasts."
    },
    {
      q: "An oil spill from a ship covers part of the sea near an island. Study the food web of the area.\n(a) The oil blocks sunlight from reaching the seaweed. Explain why the seaweed population decreases. (1m)\n(b) Explain how this would affect the population of sea turtles. (2m)\n(c) The oil also coats the feathers of seabirds so they cannot fly. Explain why this reduces their chance of survival. (1m)",
      fig: { type: "web", links: [["seaweed", "small fish"], ["seaweed", "sea turtle"], ["small fish", "big fish"], ["small fish", "seabird"], ["big fish", "shark"]] },
      marks: 4,
      x: 1,
      kw: [["photosynthes", "make food", "cannot make food"], ["decrease"], ["less food", "food source", "less seaweed"], ["food", "catch", "escape", "predator"]],
      model: "(a) Without sunlight, the seaweed cannot photosynthesise to make food, so it dies. (b) The sea turtle population will decrease because seaweed is its only food, so there is less food for the turtles. (c) The seabirds cannot fly to catch fish for food or escape from predators, so they are more likely to die."
    }
  ],
  doc: [
    { q: "Explain why a plant kept in a sealed, dark cupboard gives out carbon dioxide.", marks: 2, answers: ["Plants give out carbon dioxide at night.", "In the dark, the plant cannot photosynthesise, but it still respires, taking in oxygen and giving out carbon dioxide.", "The plant is dying because there is no sunlight."], best: 1, why: "Answer 2 names both processes: no photosynthesis in the dark, but respiration continues and gives out carbon dioxide. Answer 1 only restates the observation. Answer 3 gives no process." },
    { q: "Snakes in a food web eat frogs, and frogs eat grasshoppers. Explain what happens to the grasshoppers if the snakes are all removed.", marks: 2, answers: ["The grasshoppers increase because there are no snakes.", "The frogs increase because they have fewer predators, so more grasshoppers are eaten and the grasshopper population decreases.", "The grasshoppers are affected because the food web changes."], best: 1, why: "Answer 2 traces the chain through the frogs with a reason at each step. Answer 1 skips the frogs and gets the direction wrong. Answer 3 gives no direction and no reason." },
    { q: "Explain why a toy car rolling on a carpet stops sooner than on smooth tiles.", marks: 2, answers: ["There is more friction between the carpet and the wheels, so the car’s kinetic energy is converted into heat energy faster.", "The carpet is soft and heavy.", "The car loses its energy on the carpet."], best: 0, why: "Answer 1 names the greater friction and the energy conversion. Answer 2 gives no science. Answer 3 suggests energy disappears and names no force." },
    { q: "Explain why bulb A still lights up after bulb B, which is in parallel with it, fuses.", marks: 2, answers: ["Because bulb A is stronger.", "Because the circuit is parallel.", "Bulb A is on its own path. The circuit through bulb A is still closed, so electric current still flows through it."], best: 2, why: "Answer 3 explains the separate path and the closed circuit. Answer 2 names the arrangement but does not explain it. Answer 1 is not a scientific reason." },
    { q: "Explain why Jia Hui breathes faster after running.", marks: 2, answers: ["She is tired.", "Her muscle cells need more energy, so she breathes faster to take in more oxygen to release more energy from food.", "She needs more air."], best: 1, why: "Answer 2 links energy, oxygen and respiration. Answer 3 says ‘air’ instead of oxygen and gives no reason. Answer 1 is not a scientific explanation." }
  ]
};
