window.LBY = window.LBY || {};
LBY["k-senses"] = {
  lessons: [
    {
      h: "Testing fairly with my senses",
      concept: "To test one thing fairly, change only that one thing. Keep everything else the same. Then you know what made the difference.",
      example: { q: "Lina wants to find out which is rougher: sandpaper or a towel. She will feel each one with her finger. How can she make it a fair test?", pic: "✋",
        think: ["What is she testing? Which thing is rougher.", "So only the thing she feels should change.", "She uses the same finger and rubs gently in the same way each time."],
        answer: "Use the same finger and rub in the same way each time. Only the thing she feels changes." },
      tip: "Change ONE thing. Keep the rest the same.",
      try: { q: "Siti wants to find out which cushion is softest. She presses each one. What must she keep the SAME?", o: ["how hard she presses", "the colour of each cushion", "the cushion she tests"], a: 0, why: "She must press just as hard each time. The cushion is the thing that changes, and the colour does not matter.", pic: "🛋️" }
    }
  ],
  mcq: [
    // lvl 1 (7)
    { q: "A balloon bursts with a loud POP! Which sense tells you?", o: ["smell", "hearing", "taste"], a: 1, why: "A pop is a sound. We hear sounds with our ears.", lvl: 1, pic: "🎈" },
    { q: "Mum is baking a pandan cake. You can smell it from your room. Which body part tells you?", o: ["ears", "skin", "nose"], a: 2, why: "We smell with our nose, even when the food is far away.", lvl: 1, pic: "🍰" },
    { q: "Which of these feels sticky?", o: ["honey", "a pebble", "a dry leaf"], a: 0, why: "Honey sticks to your fingers. A pebble and a dry leaf do not.", lvl: 1 },
    { q: "Which word tells us the SIZE of a thing?", o: ["sticky", "tiny", "shiny"], a: 1, why: "Tiny tells us how big or small a thing is. Sticky is how it feels. Shiny is how it looks.", lvl: 1, pic: "🔍" },
    { q: "Which of these feels hard?", o: ["a sponge", "a pillow", "a rock"], a: 2, why: "A rock feels hard. A sponge and a pillow feel soft.", lvl: 1, pic: "✋" },
    { q: "Which sense do you use to look at the pictures in a book?", o: ["sight", "smell", "taste"], a: 0, why: "We look with our eyes. That is the sense of sight.", lvl: 1, pic: "📖" },
    { q: "How does the skin of a durian feel?", o: ["smooth and soft", "spiky and hard", "wet and sticky"], a: 1, why: "A durian has a hard skin covered in sharp spikes. Hold it with care!", lvl: 1 },
    // lvl 2 (8)
    { q: "You cannot see the ice cream van yet. How do you know it is coming?", o: ["You taste its ice cream", "You feel it with your hand", "You hear its music"], a: 2, why: "The van plays music. Your ears hear it before your eyes can see the van.", lvl: 2, pic: "🍦" },
    { q: "Uncle blows a special dog whistle. His dog runs over, but you hear nothing. What does this show?", o: ["Dogs hear some sounds we cannot", "The whistle makes no sound at all", "Dogs hear with their noses"], a: 0, why: "The whistle does make a sound, because the dog hears it. Dogs can hear some sounds that people cannot.", lvl: 2, pic: "🐕" },
    { q: "Which of these is an observation made with your NOSE?", o: ["The rose smells sweet", "The rose feels soft", "The rose is red"], a: 0, why: "Smell is what the nose finds out. Soft is found by touch, and red is found by sight.", lvl: 2, pic: "🌹" },
    { q: "Workers use a very loud drill on the road. Why do they wear earmuffs?", o: ["To keep their ears warm", "To protect their ears", "To hear the drill better"], a: 1, why: "Very loud sounds can hurt our ears. Earmuffs protect them.", lvl: 2, pic: "🚧" },
    { q: "Which can your EYES NOT tell you about a banana?", o: ["its colour", "its shape", "its taste"], a: 2, why: "Eyes see colour and shape. We need the tongue to find out the taste.", lvl: 2, pic: "🍌" },
    { q: "Which two words are BOTH tastes?", o: ["loud and soft", "sweet and sour", "rough and smooth"], a: 1, why: "Sweet and sour are tastes. Loud and soft are about sounds. Rough and smooth are about how things feel.", lvl: 2, pic: "👅" },
    { q: "Your eyes are covered. On a spoon you taste something cold, sweet and melty. What is it most likely?", o: ["hot chicken soup", "a salty cracker", "ice cream"], a: 2, why: "Ice cream is cold, sweet and melts. Soup is hot and a cracker is salty and crunchy.", lvl: 2, pic: "🙈🥄" },
    { q: "Class 1B tasted four fruits and voted for the one they liked best. Look at the graph. Which fruit got the FEWEST votes?", o: ["papaya", "durian", "mango"], a: 0, why: "The shortest bar is papaya, with 4 votes.", lvl: 2, fig: { type: "bar", title: "Our favourite fruit", xl: "Fruit", yl: "Number of children", bars: [["Mango", 9], ["Papaya", 4], ["Watermelon", 11], ["Durian", 6]] } },
    // lvl 3 (5)
    { q: "Lily puts her hand in ice water for a short while. Then she puts it in tap water. How does the tap water feel to her?", o: ["warmer than usual", "colder than usual", "exactly like ice"], a: 0, why: "Her hand has just been in ice water, so the tap water feels warmer. Our skin compares with what it felt just before.", lvl: 3, pic: "🧊✋" },
    { q: "Ravi wants to find out if a bell sounds softer when he is further away. Look at the set-ups. Which two should he compare?", o: ["A and B", "B and C", "A and C"], a: 2, why: "A and C ring the bell in the same way. Only the number of steps is changed, so the test is fair.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "box", lines: ["Bell rung softly", "10 steps away"] }, { label: "B", icon: "box", lines: ["Bell rung hard", "10 steps away"] }, { label: "C", icon: "box", lines: ["Bell rung softly", "2 steps away"] } ] } },
    { q: "Look at the diagram. Which food is crunchy but NOT salty?", o: ["crackers", "apple", "jelly"], a: 1, why: "The apple is only in the Crunchy circle. Crackers are in both circles, and jelly is in neither.", lvl: 3, fig: { type: "venn", a: "Crunchy", b: "Salty", onlyA: ["apple"], both: ["crackers"], onlyB: ["soup"], neither: ["jelly"] } },
    { q: "Each child put a hand in a bag of 10 things and named them by touch only. Look at the graph. How many MORE things did Aisha name than Ben?", o: ["3", "6", "9"], a: 0, why: "Aisha named 9 and Ben named 6. 9 take away 6 is 3.", lvl: 3, fig: { type: "bar", title: "Things we named by touch", xl: "Child", yl: "Number of things", bars: [["Aisha", 9], ["Ben", 6], ["Chen", 7]] } },
    { q: "Mum is making popcorn in the kitchen. You are in the next room. Which TWO senses tell you?", o: ["sight and taste", "smell and hearing", "taste and touch"], a: 1, why: "You smell the popcorn and hear it pop. You cannot see or taste it from the next room.", lvl: 3, pic: "🍿" }
  ],
  tf: [
    { s: "Your skin can tell you if something is wet.", a: true, why: "Yes! Our skin feels wet and dry things.", pic: "💧" },
    { s: "Our ears can tell us where a sound comes from.", a: true, why: "Yes! We can turn to face a friend who calls our name.", pic: "👂" },
    { s: "Our skin can feel the wind blowing.", a: true, why: "Yes! Skin feels the moving air on our face and arms." },
    { s: "Texture means how something feels.", a: true, why: "Yes! Rough, smooth, bumpy and fluffy are textures.", pic: "✋" },
    { s: "We can use more than one sense at the same time.", a: true, why: "Yes! We can see, hear and smell the rain all at once.", pic: "🌧️" },
    { s: "Things that look the same always taste the same.", a: false, why: "Salt and sugar look alike, but salt is salty and sugar is sweet." },
    { s: "Only people have senses. Animals do not.", a: false, why: "Animals have senses too. A dog smells and hears very well.", pic: "🐶" },
    { s: "Two children always like the same tastes.", a: false, why: "People like different tastes. One child may love durian, and another may not." },
    { s: "To find out what is in a strange bottle, sniff it up close.", a: false, why: "Some liquids are harmful to breathe in. Ask a grown-up first.", pic: "🧪" },
    { s: "Loud and quiet are words about how things feel.", a: false, why: "Loud and quiet tell us about sounds. We hear them with our ears.", pic: "🔊" }
  ],
  sort: [
    { title: "Is it a word for how a thing looks, sounds or feels?", groups: ["Looks 👀", "Sounds 👂", "Feels ✋"], items: [["shiny", 0], ["purple", 0], ["loud", 1], ["squeaky", 1], ["quiet", 1], ["fluffy", 2], ["bumpy", 2], ["sticky", 2]] }
  ]
};
