window.LBY = window.LBY || {};
LBY["k-sky"] = {
  lessons: [
    {
      h: "Long and short shadows",
      concept: "When the Sun is low in the sky, shadows are long. When the Sun is high in the sky, shadows are short. So your shadow changes during the day.",
      example: { q: "At 8 am, Ben’s shadow is very long. What will his shadow be like at noon?", pic: "🧍",
        think: ["At 8 am the Sun is low in the sky, so the shadow is long.", "At noon the Sun is high in the sky.", "A high Sun makes a short shadow."],
        answer: "His shadow will be short at noon, because the Sun is high in the sky." },
      tip: "Low Sun, long shadow. High Sun, short shadow.",
      try: { q: "It is 6 pm. The Sun is low in the west. What is your shadow like?", o: ["very long", "very short", "not there at all"], a: 0, why: "The Sun is low in the sky, so your shadow is long. You still block the light, so there is a shadow." }
    }
  ],
  mcq: [
    // lvl 1 (7)
    { q: "Which of these in the sky is very, very hot?", o: ["the Moon", "a cloud", "the Sun"], a: 2, why: "The Sun is a star. It is very, very hot and gives us light and warmth.", lvl: 1 },
    { q: "How many colours do we usually say a rainbow has?", o: ["2", "7", "20"], a: 1, why: "We usually name 7 colours: red, orange, yellow, green, blue, indigo and violet.", lvl: 1 },
    { q: "Which colour is at the top of a rainbow?", o: ["red", "green", "purple"], a: 0, why: "Red is at the top of a rainbow. Violet, a kind of purple, is at the bottom.", lvl: 1 },
    { q: "Which of these is a kind of weather?", o: ["Tuesday", "breakfast", "windy"], a: 2, why: "Windy is a kind of weather. Tuesday is a day and breakfast is a meal.", lvl: 1, pic: "🌤️" },
    { q: "Which tool helps us see faraway stars more clearly?", o: ["a thermometer", "a telescope", "a rain gauge"], a: 1, why: "A telescope makes faraway things look nearer and clearer.", lvl: 1, pic: "🌟" },
    { q: "What does the Moon go around?", o: ["the Earth", "Mars", "a cloud"], a: 0, why: "The Moon goes around the Earth.", lvl: 1, pic: "🌙" },
    { q: "How do astronauts travel into space?", o: ["in a bus", "in a submarine", "in a rocket"], a: 2, why: "A rocket carries astronauts up into space. A bus stays on the road and a submarine goes under the sea.", lvl: 1, pic: "👩‍🚀" },
    // lvl 2 (8)
    { q: "Which is bigger, the Sun or the Earth?", o: ["The Earth", "The Sun", "Both are the same"], a: 1, why: "The Sun is much, much bigger than the Earth. It looks small only because it is very far away.", lvl: 2, pic: "🌍☀️" },
    { q: "It has not rained for many weeks. What happens to the grass in the school field?", o: ["It turns dry and brown", "It turns into a pond", "It gets covered in snow"], a: 0, why: "With no rain, the grass gets too little water. It turns dry and brown.", lvl: 2, pic: "🌱" },
    { q: "What is the Moon made of?", o: ["rock", "cotton", "water"], a: 0, why: "The Moon is a big ball of rock. Astronauts have walked on it.", lvl: 2, pic: "🌕" },
    { q: "Is there air to breathe on the Moon?", o: ["Yes, just like on Earth", "No, so astronauts bring it", "Yes, but only at night"], a: 1, why: "There is no air to breathe on the Moon. Astronauts bring their own air in their spacesuits.", lvl: 2, pic: "👨‍🚀" },
    { q: "What makes clouds move across the sky?", o: ["the wind", "the Sun", "the birds"], a: 0, why: "Wind is moving air. It pushes the clouds along.", lvl: 2, pic: "☁️" },
    { q: "Why is it cooler under a big tree on a sunny day?", o: ["Its leaves shine light on you", "Its leaves block the sunlight", "Its roots pull in the heat"], a: 1, why: "The leaves block the sunlight and make shade, so you feel cooler.", lvl: 2, pic: "🌳☀️" },
    { q: "Siti’s shadow is very short. Where is the Sun?", o: ["Low in the sky", "Behind a cloud", "High in the sky"], a: 2, why: "A high Sun makes a short shadow. A low Sun makes a long one. Behind a cloud, there is hardly any shadow.", lvl: 2, pic: "🧍‍♀️" },
    { q: "Class 2B collected rain in a rain gauge each day. Look at the graph. On which day did NO rain fall?", o: ["Monday", "Wednesday", "Tuesday"], a: 2, why: "Tuesday has no bar at all. That means 0 rain fell.", lvl: 2, fig: { type: "bar", title: "Rain collected", xl: "Day", yl: "Rain (mm)", bars: [["Monday", 12], ["Tuesday", 0], ["Wednesday", 8], ["Thursday", 20]] } },
    // lvl 3 (5)
    { q: "In a storm, we see the lightning first and hear the thunder after. Why?", o: ["Light moves faster than sound", "The thunder is made much later", "Our ears work slower than eyes"], a: 0, why: "Lightning and thunder are made at the same time. Light moves much faster than sound, so the flash reaches us first.", lvl: 3, pic: "⛈️" },
    { q: "Look at the graph. Which TWO days together had the same amount of rain as Thursday?", o: ["Monday and Tuesday", "Tuesday and Wednesday", "Monday and Wednesday"], a: 2, why: "Monday had 12 and Wednesday had 8. 12 and 8 make 20, the same as Thursday.", lvl: 3, fig: { type: "bar", title: "Rain collected", xl: "Day", yl: "Rain (mm)", bars: [["Monday", 12], ["Tuesday", 0], ["Wednesday", 8], ["Thursday", 20]] } },
    { q: "Look at the diagram. Which is in BOTH circles?", o: ["the Sun", "the Moon", "a rainbow"], a: 1, why: "The Moon is where the two circles overlap. We can see it in the day sky on some days and in the night sky too.", lvl: 3, fig: { type: "venn", a: "Seen in day sky", b: "Seen in night sky", onlyA: ["the Sun", "a rainbow"], both: ["the Moon", "clouds"], onlyB: ["lots of stars"], neither: [] } },
    { q: "The Sun is a star. Why does it look so much bigger and brighter than other stars?", o: ["It is much closer to us", "It is the only real star", "Other stars are much tinier"], a: 0, why: "The Sun is the star closest to us. Many other stars are as big or even bigger, but they are very far away.", lvl: 3, pic: "☀️✨" },
    { q: "Ken sees lightning and counts to 2 before he hears thunder. Later he counts to 8. What is the storm doing?", o: ["Staying in one place", "Moving away from Ken", "Coming closer to Ken"], a: 1, why: "The longer the wait for the thunder, the further away the storm is. The wait grew from 2 to 8, so the storm is moving away.", lvl: 3, pic: "⛈️" }
  ],
  tf: [
    { s: "The Moon goes around the Earth.", a: true, why: "Yes! The Moon goes around and around the Earth.", pic: "🌙🌍" },
    { s: "A telescope helps us see faraway stars.", a: true, why: "Yes! It makes faraway things look nearer.", pic: "🔭" },
    { s: "The Moon is made of rock.", a: true, why: "Yes! Astronauts have brought Moon rocks back to Earth." },
    { s: "Standing in the shade of a tree helps you keep cool.", a: true, why: "Yes! The leaves block the sunlight.", pic: "🌳" },
    { s: "A rainbow has many colours.", a: true, why: "Yes! Red, orange, yellow, green, blue, indigo and violet.", pic: "🌈" },
    { s: "The Sun is smaller than the Earth.", a: false, why: "The Sun is much bigger than the Earth. It looks small because it is so far away.", pic: "☀️🌍" },
    { s: "We hear thunder before we see lightning.", a: false, why: "We see the flash first, because light moves faster than sound.", pic: "⚡" },
    { s: "Clouds always stay still in the sky.", a: false, why: "The wind moves clouds across the sky.", pic: "☁️" },
    { s: "There is air to breathe on the Moon.", a: false, why: "There is no air to breathe on the Moon. Astronauts bring their own.", pic: "👨‍🚀" },
    { s: "The Sun is closer to us than the Moon.", a: false, why: "The Moon is much closer to us. The Sun is very, very far away." }
  ],
  sort: [
    { title: "Is it about the Sun, the Moon or clouds?", groups: ["The Sun ☀️", "The Moon 🌙", "Clouds ☁️"], items: [["is a star", 0], ["gives us warmth", 0], ["is very, very hot", 0], ["goes around the Earth", 1], ["is made of rock", 1], ["astronauts have walked on it", 1], ["made of tiny drops of water", 2], ["rain falls from them", 2]] }
  ]
};
