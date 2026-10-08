window.LBX = window.LBX || {};
LBX["k-sky"] = {
  notes: [
    { h: "Sunrise and sunset", t: "The Sun rises in the east in the morning and sets in the west in the evening. Around the middle of the day, it is high in the sky.", kw: ["east", "west"], pic: "🌅🌇" },
    { h: "Measuring the weather", t: "Scientists measure the weather. A thermometer tells how hot or cold it is. A rain gauge collects rain to show how much has fallen.", kw: ["thermometer", "rain gauge"], pic: "🌡️☔" }
  ],
  traps: [
    "Watch out! The Sun does not rise in the west. It rises in the east and sets in the west.",
    "Watch out! The Moon does not really change its shape. We just see more or less of its lit-up side."
  ],
  lessons: [
    {
      h: "Where does the Sun rise and set?",
      concept: "Every morning the Sun rises in the east. Every evening it sets in the west. This happens because the Earth keeps turning.",
      example: { q: "Early in the morning, Mei watches the Sun rise from her HDB window. Which way is she facing?", pic: "🏢🌅", think: ["It is early morning.", "The Sun rises in the east.", "So she is facing east."], answer: "She is facing east." },
      tip: "Just remember: morning east, evening west.",
      try: { q: "In the evening, where is the Sun setting?", o: ["In the east", "In the west", "Right overhead"], a: 1, why: "The Sun sets in the west in the evening. It rises in the east in the morning." }
    },
    {
      h: "Reading a weather chart",
      concept: "A weather chart shows the weather each day. Count the days to find which weather happened most.",
      example: { q: "This week: Monday sunny, Tuesday rainy, Wednesday sunny, Thursday rainy, Friday rainy. Which weather happened most?", pic: "📅", think: ["Count sunny days: Monday and Wednesday make 2.", "Count rainy days: Tuesday, Thursday and Friday make 3.", "3 is more than 2."], answer: "Rainy weather happened most, on 3 days." },
      tip: "Count each kind of weather slowly. Then compare the numbers.",
      try: { q: "The weather was sunny, sunny, cloudy, sunny, rainy. How many days were sunny?", o: ["2 days", "3 days", "4 days"], a: 1, why: "Sunny, sunny and sunny again makes 3 sunny days." }
    }
  ],
  mcq: [
    // lvl 1 (8)
    { q: "Where does the Sun rise in the morning?", o: ["In the east", "In the west", "Right overhead"], a: 0, why: "The Sun rises in the east and sets in the west.", lvl: 1, pic: "🌅" },
    { q: "Which tool tells us how hot or cold it is?", o: ["a ruler", "a thermometer", "a clock"], a: 1, why: "A thermometer measures how hot or cold something is.", lvl: 1 },
    { q: "What does a rain gauge measure?", o: ["how windy it is", "how hot it is", "how much rain fell"], a: 2, why: "A rain gauge collects rain so we can see how much has fallen.", lvl: 1 },
    { q: "What shape is the Earth?", o: ["Flat like a plate", "Round like a ball", "Square like a box"], a: 1, why: "The Earth is round like a ball.", lvl: 1, pic: "🌍" },
    { q: "Which of these can show which way the wind is blowing?", o: ["a torch", "a mirror", "a flag"], a: 2, why: "The wind pushes a flag so it points the way the wind is blowing.", lvl: 1 },
    { q: "Which of these do we live on?", o: ["the Earth", "the Moon", "the Sun"], a: 0, why: "We live on the Earth. The Moon and the Sun are far away.", lvl: 1, pic: "🏠" },
    { q: "What should you put on your skin before swimming outdoors at noon?", o: ["toothpaste", "sunscreen", "hair gel"], a: 1, why: "Sunscreen helps protect your skin from strong sunlight.", lvl: 1, pic: "🏊☀️" },
    { q: "A storm has flashes of light and loud booms. What is it called?", o: ["a thunderstorm", "a rainbow", "a sunny spell"], a: 0, why: "Flashes of lightning and booms of thunder come in a thunderstorm.", lvl: 1, pic: "⚡" },
    // lvl 2 (10)
    { q: "Stars look like tiny dots. Why?", o: ["They are very far away", "They are as small as beads", "They are hiding behind clouds"], a: 0, why: "Stars are huge, like our Sun, but they are very, very far away, so they look tiny.", lvl: 2, pic: "✨" },
    { q: "The air in Singapore is hazy and smoky. What should you do?", o: ["Run a long race outdoors", "Stay indoors more often", "Open all the windows wide"], a: 1, why: "Haze is bad for our lungs. Stay indoors more and close the windows.", lvl: 2, pic: "🌫️" },
    { q: "When is it usually coolest in a day in Singapore?", o: ["Around noon", "Early afternoon", "Early morning"], a: 2, why: "It is coolest early in the morning, before the Sun has warmed things up.", lvl: 2 },
    { q: "The bar graph shows the weather in March. Which weather had the most days?", o: ["Sunny", "Rainy", "Cloudy"], a: 1, why: "The Rainy bar is the tallest, at 14 days.", lvl: 2, fig: { type: "bar", title: "Weather in March", xl: "Weather", yl: "Number of days", bars: [["Sunny", 12], ["Rainy", 14], ["Cloudy", 5]] } },
    { q: "Which of these tells you it is very windy outside?", o: ["The sky is clear and blue", "The ground is dry and dusty", "The trees are bending and swaying"], a: 2, why: "Strong moving air pushes the trees so they bend and sway.", lvl: 2, pic: "🌳" },
    { q: "Siti’s rain gauge had more water on Monday than on Tuesday. On which day did more rain fall?", o: ["Monday", "Tuesday", "Both the same"], a: 0, why: "More water in the rain gauge means more rain fell. That was Monday.", lvl: 2 },
    { q: "The thermometer shows 33 °C at noon and 26 °C at night. When was it hotter?", o: ["At noon", "At night", "Both the same"], a: 0, why: "33 is more than 26, so it was hotter at noon.", lvl: 2, pic: "🌡️" },
    { q: "Mr Lim wants to watch the Sun rise at East Coast Park. When should he go?", o: ["Late evening", "Midnight", "Early morning"], a: 2, why: "The Sun rises in the morning, so he should go early in the morning.", lvl: 2, pic: "🏖️" },
    { q: "The Earth goes around the Sun. How long does one trip take?", o: ["One day", "One week", "One year"], a: 2, why: "The Earth takes one year to go around the Sun. It turns once each day.", lvl: 2, pic: "🌍☀️" },
    { q: "Which of these is a planet, like the Earth?", o: ["Mars", "the Moon", "the Sun"], a: 0, why: "Mars is a planet. The Moon goes around the Earth, and the Sun is a star.", lvl: 2, pic: "🪐" },
    // lvl 3 (6)
    { q: "Why does the Moon seem to change shape?", o: ["Small bits of it break off and fall", "Clouds cover part of it every night", "We see less or more of its lit side"], a: 2, why: "Sunlight always lights up half of the Moon. We see different amounts of that lit side, so its shape seems to change.", lvl: 3, pic: "🌒🌓🌕" },
    { q: "In the morning, the Sun is in the east. Which way does your shadow point?", o: ["To the west", "To the east", "Straight up"], a: 0, why: "Your shadow is on the side away from the Sun. The Sun is in the east, so your shadow points west.", lvl: 3, pic: "🧍🌅" },
    { q: "Class 2A measured the shadow of a stick at different times. Look at the graph. At which time was the Sun highest in the sky?", o: ["9 am", "1 pm", "5 pm"], a: 1, why: "The shadow is shortest at 1 pm. The higher the Sun, the shorter the shadow.", lvl: 3, fig: { type: "bar", title: "Shadow of a stick", xl: "Time", yl: "Length of shadow (cm)", bars: [["9 am", 80], ["11 am", 30], ["1 pm", 5], ["3 pm", 30], ["5 pm", 80]] } },
    { q: "Look at the diagram. Which is in BOTH circles?", o: ["the Moon", "the Sun", "the stars"], a: 2, why: "Stars make their own light and we see them in the night sky, so they are where the circles overlap.", lvl: 3, fig: { type: "venn", a: "Makes its own light", b: "Seen in night sky", onlyA: ["the Sun"], both: ["stars"], onlyB: ["the Moon"], neither: ["a rainbow"] } },
    { q: "Ali wants to find out if a dish of water dries up faster in the sun or in the shade. Which two set-ups should he compare?", o: ["A and C", "A and B", "B and C"], a: 1, why: "A and B have the same amount of water. Only the place is changed, so the test is fair.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "dish", lines: ["1 cup of water", "In the sun"] }, { label: "B", icon: "dish", lines: ["1 cup of water", "In the shade"] }, { label: "C", icon: "dish", lines: ["3 cups of water", "In the shade"] } ] } },
    { q: "It is night in Singapore. Is the Sun still shining?", o: ["No, it has switched off", "Yes, on the other side of Earth", "No, it is hiding behind the Moon"], a: 1, why: "The Sun never switches off. It is shining on the side of the Earth that faces it.", lvl: 3, pic: "🌙🌍" }
  ],
  tf: [
    { s: "The Sun rises in the east.", a: true, why: "Yes! It rises in the east and sets in the west.", pic: "🌅" },
    { s: "The Sun sets in the east.", a: false, why: "The Sun sets in the west.", pic: "🌇" },
    { s: "A thermometer measures how hot or cold it is.", a: true, why: "Yes! It shows the temperature.", pic: "🌡️" },
    { s: "The Earth is flat like a plate.", a: false, why: "The Earth is round like a ball.", pic: "🌍" },
    { s: "The Moon really changes its shape every night.", a: false, why: "The Moon stays round. We see more or less of its lit side.", pic: "🌙" },
    { s: "The Earth goes around the Sun.", a: true, why: "Yes! One trip around the Sun takes one year.", pic: "🌍☀️" },
    { s: "Stars look tiny because they are very far away.", a: true, why: "Yes! Many stars are as big as our Sun or even bigger.", pic: "✨" },
    { s: "On a hazy day, it is good to go for a long run outside.", a: false, why: "Haze is bad for our lungs. Stay indoors more.", pic: "🌫️" },
    { s: "A flag can show which way the wind is blowing.", a: true, why: "Yes! The wind pushes the flag.", pic: "🚩" },
    { s: "The Moon is a planet.", a: false, why: "The Moon is not a planet. It goes around the Earth.", pic: "🌕" }
  ],
  sort: [
    { title: "Which tool would you use?", groups: ["Thermometer", "Rain gauge", "Flag"], items: [["how hot the classroom is", 0], ["how cold the fridge is", 0], ["how warm the bath water is", 0], ["how much rain fell today", 1], ["which day was the wettest", 1], ["how much rain fell in a storm", 1], ["which way the wind blows", 2], ["if it is windy today", 2]] },
    { title: "Is it morning or evening?", groups: ["Morning", "Evening"], items: [["the Sun rises", 0], ["the Sun sets", 1], ["the Sun is low in the east", 0], ["the Sun is low in the west", 1], ["you eat breakfast", 0], ["you get ready for bed", 1], ["your shadow points west", 0], ["your shadow points east", 1]] }
  ]
};
