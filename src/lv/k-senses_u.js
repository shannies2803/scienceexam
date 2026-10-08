window.LBU = window.LBU || {};
LBU["k-senses"] = {
  glossary: [
    { t: "Senses", d: "The five ways our body finds out about the world: seeing, hearing, smelling, tasting and touching." },
    { t: "Sense organs", d: "The body parts we use to find out about things: eyes, ears, nose, tongue and skin." },
    { t: "Sight", d: "The sense of seeing. Our eyes tell us the colour, shape and size of things." },
    { t: "Hearing", d: "The sense of hearing sounds. Our ears tell us if a sound is loud or soft." },
    { t: "Taste", d: "The sense that tells us if food is sweet, salty, sour or bitter. We taste with our tongue." },
    { t: "Touch", d: "The sense of feeling. Our skin tells us if things are hot or cold, rough or smooth, hard or soft." },
    { t: "Observe", d: "To use our senses to find out about things, like a scientist does." },
    { t: "Texture", d: "How something feels when we touch it, such as rough, smooth, bumpy or fluffy." }
  ],
  lessons: [
    {
      h: "Is it an observation or a guess?",
      concept: "An observation is what we find out with our senses. A guess is what we think might be true. Scientists check with their senses before they say something is true.",
      example: { q: "Ali looks at a closed box. He says, “The box is blue.” Then he says, “Maybe there is a toy inside.” Which one is his observation?", pic: "📦",
        think: ["Can Ali see that the box is blue? Yes, with his eyes.", "Can Ali see what is inside? No, the box is closed.", "So “The box is blue” is the observation. “Maybe there is a toy inside” is a guess."],
        answer: "“The box is blue” is the observation. “Maybe there is a toy inside” is a guess." },
      tip: "Words like maybe, might and I think tell you it is a guess.",
      try: { q: "Mei smells the pot of soup on the stove. Which is her OBSERVATION?", o: ["The soup might be hot", "I think it is for dinner", "The soup smells of ginger"], a: 2, why: "Mei used her nose to find out the smell. The other two are guesses: “might” and “I think” show she did not check.", pic: "🍲" }
    }
  ],
  flash: [
    { f: "We see colours and shapes with our…", b: "eyes", pic: "🌈" },
    { f: "The sense we use when we listen to music", b: "hearing", pic: "🎶" },
    { f: "A lime tastes…", b: "sour" },
    { f: "Our eyes need this to see. We cannot see in a totally dark room without it.", b: "light", pic: "🌑" },
    { f: "What keeps our eyes safe from pool water when we swim?", b: "goggles", pic: "🏊" },
    { f: "Loud and soft are words that tell us about a…", b: "sound" },
    { f: "Name two things our ears can tell us about a sound.", b: "whether it is loud or soft, and where it comes from", pic: "👂" },
    { f: "Our eyes tell us the colour, shape and ___ of things.", b: "size", pic: "👀" },
    { f: "“The ball is red.” Is this an observation or a guess?", b: "an observation, because we can see that it is red" },
    { f: "Why must we never look straight at the Sun?", b: "It can hurt our eyes.", pic: "☀️" }
  ],
  mcq: [
    // lvl 1 (6)
    { q: "The hawker centre smells of satay. Which body part tells you?", o: ["nose", "ears", "skin"], a: 0, why: "We smell with our nose. Ears hear and skin feels.", lvl: 1, pic: "🍢" },
    { q: "Which of these is a word about SOUND?", o: ["bumpy", "sweet", "noisy"], a: 2, why: "Noisy tells us about a sound. Bumpy is how a thing feels and sweet is a taste.", lvl: 1 },
    { q: "You stroke your poodle’s curly fur. Which sense are you using?", o: ["sight", "touch", "smell"], a: 1, why: "Our skin feels the curly fur. That is the sense of touch.", lvl: 1, pic: "🐩" },
    { q: "Which of these drinks tastes sour?", o: ["lime juice", "sugar cane juice", "soya milk"], a: 0, why: "Lime juice is sour. Sugar cane juice and soya milk taste sweet.", lvl: 1, pic: "🥤" },
    { q: "Which body part tells you that the sky is blue?", o: ["ears", "tongue", "eyes"], a: 2, why: "We see colours with our eyes. Ears hear and the tongue tastes.", lvl: 1, pic: "☁️" },
    { q: "Which of these is one of our five senses?", o: ["running", "hearing", "sleeping"], a: 1, why: "Hearing is a sense. Running and sleeping are things we do, not senses.", lvl: 1 },
    // lvl 2 (6)
    { q: "Which of these can your NOSE tell you?", o: ["that the TV is loud", "that the floor is wet", "that the rice is burning"], a: 2, why: "Burning rice has a smell, so the nose can tell. Ears hear the TV and skin feels the wet floor.", lvl: 2, pic: "👃" },
    { q: "Which pair are BOTH sense organs?", o: ["nose and tongue", "knee and nose", "tongue and elbow"], a: 0, why: "The nose and tongue are sense organs. The knee and elbow are not.", lvl: 2 },
    { q: "Which of these is NOT an observation?", o: ["The cat is grey", "The cat might be sad", "The cat is purring"], a: 1, why: "“Might be sad” is a guess. We can see that the cat is grey and hear that it is purring.", lvl: 2, pic: "🐈" },
    { q: "Which of these do we find out with our SKIN?", o: ["if the floor is wet", "if the music is loud", "if the cake is sweet"], a: 0, why: "Skin feels wet and dry. Ears hear the music and the tongue tastes the cake.", lvl: 2 },
    { q: "Which of these tastes bitter?", o: ["a ripe mango", "sweet milk tea", "plain black coffee"], a: 2, why: "Black coffee with no sugar tastes bitter. A ripe mango and milk tea taste sweet.", lvl: 2 },
    { q: "Class 1C used their senses in the school garden. The graph shows how many things they found with each sense. Which sense found the FEWEST things?", o: ["hearing", "touch", "smell"], a: 2, why: "The smell bar is the shortest, with 5 things.", lvl: 2, fig: { type: "bar", title: "Things we found in the garden", xl: "Sense", yl: "Number of things", bars: [["Sight", 14], ["Hearing", 8], ["Smell", 5], ["Touch", 10]] } },
    // lvl 3 (4)
    { q: "Look at the diagram. Which feels cold but NOT soft?", o: ["ice cream", "an ice cube", "a pillow"], a: 1, why: "The ice cube is only in the Feels cold circle. Ice cream is in both circles, and a pillow is only soft.", lvl: 3, fig: { type: "venn", a: "Feels soft", b: "Feels cold", onlyA: ["pillow", "cotton wool"], both: ["ice cream"], onlyB: ["ice cube", "metal spoon"], neither: ["rock"] } },
    { q: "Ben wants to find out if covering his ears makes a sound harder to hear. Look at the set-ups. Which two should he compare?", o: ["A and B", "B and C", "A and C"], a: 2, why: "A and C both have the radio set to soft. Only the ears are changed, so the test is fair.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "box", lines: ["Radio set to soft", "Ears covered"] }, { label: "B", icon: "box", lines: ["Radio set to loud", "Ears open"] }, { label: "C", icon: "box", lines: ["Radio set to soft", "Ears open"] } ] } },
    { q: "Mei’s eyes are closed. One cup has iced Milo and one has hot Milo. How can she tell which is which?", o: ["by touching the cups", "by listening to the cups", "by looking at the cups"], a: 0, why: "Her skin can feel which cup is hot and which is cold. Her eyes are closed, and the cups make no sound.", lvl: 3, pic: "🙈☕" },
    { q: "Class 2B tasted three drinks. The graph shows how many children said each drink was sweet. How many MORE children said bandung was sweet than lime juice?", o: ["8", "14", "22"], a: 1, why: "18 children said bandung and 4 said lime juice. 18 take away 4 is 14.", lvl: 3, fig: { type: "bar", title: "Children who said it was sweet", xl: "Drink", yl: "Number of children", bars: [["Bandung", 18], ["Barley", 10], ["Lime juice", 4]] } }
  ],
  tf: [
    { s: "We can only smell things that are right next to our nose.", a: false, why: "We can smell food cooking from another room. Smells travel through the air.", pic: "👃" },
    { s: "Our ears can hear sounds even when our eyes are closed.", a: true, why: "Yes! Our ears do not need our eyes to hear.", pic: "🙈" },
    { s: "Big things always make loud sounds.", a: false, why: "A big teddy bear makes no sound, but a tiny bell can ring loudly.", pic: "🔔" },
    { s: "If something looks soft, it must feel soft.", a: false, why: "A plastic toy cake can look soft but feel hard. Touch it to check.", pic: "🎂" },
    { s: "Covering your ears makes a loud sound seem quieter.", a: true, why: "Yes! That is why we cover our ears at loud fireworks.", pic: "🎆" },
    { s: "We need our eyes to taste food.", a: false, why: "We taste with our tongue. We can taste food even with our eyes closed.", pic: "👅" },
    { s: "Animals use their senses to find food.", a: true, why: "Yes! A dog sniffs out food and a bird looks for worms.", pic: "🐦" },
    { s: "Our eyes can tell us the shape of a cloud.", a: true, why: "Yes! We see shapes with our eyes.", pic: "☁️" }
  ]
};
