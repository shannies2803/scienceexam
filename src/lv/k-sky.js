window.LB = window.LB || {};
LB["k-sky"] = {
  notes: [
    { h: "The Sun", t: "The Sun gives us light and warmth. The Sun is a star. It looks small because it is very, very far away.", kw: ["light", "warmth", "star"], pic: "☀️" },
    { h: "Never look at the Sun", t: "Never look straight at the Sun, not even with sunglasses. Its light is so strong that it can hurt your eyes.", kw: ["hurt your eyes"], pic: "☀️😎" },
    { h: "Day and night", t: "The Earth is always turning, like a spinning ball. The side facing the Sun has day, and the side facing away has night.", kw: ["earth turns", "day", "night"], pic: "🌍" },
    { h: "Moon and stars", t: "The Moon does not make its own light. It shines because sunlight falls on it. Stars are faraway suns, and they are still in the sky in the daytime, but the bright Sun hides them.", kw: ["moon", "stars", "sunlight"], pic: "🌙⭐" },
    { h: "Weather in Singapore", t: "Singapore is warm all year round. Our weather can be sunny, cloudy, rainy or windy, and we often have thunderstorms.", kw: ["weather", "thunderstorm"], pic: "🌤️🌧️" },
    { h: "Lightning safety", t: "When you see lightning or hear thunder, go indoors quickly. Do not stay in an open field, in a pool, or under a lone tree.", kw: ["lightning", "thunder", "go indoors"], pic: "⛈️" },
    { h: "Clouds, rain and rainbows", t: "Clouds are made of tiny drops of water. When the drops grow big and heavy, they fall as rain. A rainbow can appear when the Sun shines while it is raining.", kw: ["clouds", "rain", "rainbow"], pic: "☁️🌈" },
    { h: "Shadows, hot and cold", t: "A shadow forms when something blocks the light. On a hot sunny day, wear light, cool clothes and a hat, and drink water. In a cold place, wear a jacket to keep warm.", kw: ["shadow", "blocks the light", "keep warm"], pic: "🧍🧥" }
  ],
  traps: [
    "Watch out! The Sun does not go around the Earth. The Earth turns, so the Sun only looks like it moves across the sky.",
    "Watch out! The Moon does not make its own light. It shines because sunlight falls on it.",
    "Watch out! Stars do not go away in the day. The bright Sun just hides them.",
    "Watch out! Sunglasses do not make it safe to look at the Sun. Never look straight at it.",
    "Watch out! A tall tree is NOT a safe place in a thunderstorm. Go inside a building instead."
  ],
  lessons: [
    {
      h: "Why do we have day and night?",
      concept: "The Earth keeps turning. The side facing the Sun has day. The side facing away from the Sun has night.",
      example: { q: "It is daytime in Singapore. Is it day or night on the other side of the Earth?", pic: "🌍☀️", think: ["Singapore is facing the Sun now.", "The other side of the Earth faces away from the Sun.", "The side facing away has night."], answer: "It is night on the other side of the Earth." },
      tip: "Shine a torch on a ball and turn the ball slowly. Watch day and night move around it!",
      try: { q: "Why does the Sun seem to move across the sky?", o: ["The Sun goes around the Earth every day.", "The Earth is turning.", "The clouds push the Sun along."], a: 1, why: "The Earth turns, so the Sun only looks like it moves. The Sun does not go around the Earth each day." }
    },
    {
      h: "Where does rain come from?",
      concept: "Clouds are made of tiny drops of water. The drops join and grow. When they are big and heavy, they fall as rain.",
      example: { q: "The sky is full of dark grey clouds. What may happen soon?", pic: "☁️☁️", think: ["Clouds hold lots of tiny water drops.", "Dark grey clouds hold many drops.", "Big, heavy drops fall down."], answer: "It may rain soon." },
      tip: "Dark grey clouds often mean rain is coming. Bring an umbrella!",
      try: { q: "What are clouds made of?", o: ["Tiny drops of water", "Smoke from cars", "Cotton wool"], a: 0, why: "Clouds are made of tiny drops of water. When the drops get big and heavy, they fall as rain." }
    },
    {
      h: "How is a shadow made?",
      concept: "Light moves in straight lines. When something blocks the light, a dark shape forms behind it. That dark shape is a shadow.",
      example: { q: "Mei stands in the sun. The Sun is in front of her. Where is her shadow?", pic: "🧍‍♀️☀️", think: ["Mei blocks the sunlight.", "The light cannot reach the ground behind her.", "The dark patch is behind her."], answer: "Her shadow is behind her, on the side away from the Sun." },
      tip: "A shadow is always on the side away from the light.",
      try: { q: "Which of these makes a shadow in the sun?", o: ["A clear glass window", "A book", "The air"], a: 1, why: "A book blocks the light, so it makes a dark shadow. Clear glass and air let most light pass through." }
    },
    {
      h: "Stay safe in a thunderstorm",
      concept: "Lightning is a giant spark from the clouds. It often hits tall things and things in open spaces. The safest place is inside a building.",
      example: { q: "Ali is playing football in a big open field. He hears thunder. What should he do?", pic: "⚽⛈️", think: ["Thunder means lightning is near.", "An open field is not safe.", "A building is a safe place."], answer: "He should stop playing and go into a building quickly." },
      tip: "When thunder roars, go indoors!",
      try: { q: "It starts to thunder while you are in the pool. What should you do?", o: ["Swim faster to finish the lap", "Get out of the pool and go indoors", "Stay in the water under the diving board"], a: 1, why: "Water and open spaces are not safe in a thunderstorm. Get out of the pool and go indoors." }
    }
  ],
  mcq: [
    // lvl 1 (14)
    { q: "What does the Sun give us?", o: ["Light and warmth", "Rain and snow", "Wind and clouds"], a: 0, why: "The Sun gives us light and warmth. Rain comes from clouds, not from the Sun.", lvl: 1, pic: "☀️" },
    { q: "Is it safe to look straight at the Sun?", o: ["Yes, if you wear sunglasses", "Yes, for a short time", "No, never"], a: 2, why: "Never look straight at the Sun. Its light is so strong it can hurt your eyes, even with sunglasses.", lvl: 1, pic: "☀️👀" },
    { q: "Where does rain come from?", o: ["Trees", "Clouds", "The Sun"], a: 1, why: "Rain falls from clouds. Clouds are made of tiny drops of water.", lvl: 1, pic: "☔" },
    { q: "When is a rainbow most likely to appear?", o: ["When the Sun shines while it is raining", "On a dark night", "When there are no clouds and no rain"], a: 0, why: "A rainbow needs sunlight and raindrops at the same time.", lvl: 1, pic: "🌈" },
    { q: "Which of these do we usually see in the sky at night?", o: ["A bright rainbow", "The bright Sun", "The Moon and stars"], a: 2, why: "At night we can often see the Moon and stars. The Sun is shining on the other side of the Earth.", lvl: 1, pic: "🔭" },
    { q: "What is wind?", o: ["Moving air", "Falling water", "Sunlight"], a: 0, why: "Wind is moving air. We cannot see it, but we can see it move leaves and kites.", lvl: 1, pic: "🍃🪁" },
    { q: "It is raining. What should you bring when you go out?", o: ["Sunglasses", "An umbrella", "A fan"], a: 1, why: "An umbrella or a raincoat keeps you dry in the rain.", lvl: 1, pic: "🌧️🚶" },
    { q: "What do you hear after lightning flashes?", o: ["Birds singing", "Thunder", "Wind chimes"], a: 1, why: "Lightning makes a loud boom called thunder.", lvl: 1, pic: "⚡" },
    { q: "What is a shadow?", o: ["A dark shape where light is blocked", "A bright spot where light shines", "A kind of grey cloud in the sky"], a: 0, why: "A shadow forms when something blocks the light.", lvl: 1, pic: "🌳☀️" },
    { q: "It is a hot, sunny day at the zoo. What is best to wear?", o: ["A thick winter jacket and scarf", "A hat and light, cool clothes", "Woolly gloves and warm socks"], a: 1, why: "A hat shades you from the Sun, and light, cool clothes help you feel less hot.", lvl: 1, pic: "🦒☀️" },
    { q: "What is the weather like in Singapore all year round?", o: ["Snowy and cold", "Freezing in December", "Warm, with lots of rain"], a: 2, why: "Singapore is warm all year round and gets lots of rain. It does not snow here.", lvl: 1, pic: "🇸🇬" },
    { q: "Which of these is a star?", o: ["The Moon", "The Sun", "A cloud"], a: 1, why: "The Sun is a star. It is the star closest to the Earth.", lvl: 1, pic: "🌌" },
    { q: "Which weather is best for flying a kite?", o: ["A windy day", "A day with no wind at all", "A thunderstorm"], a: 0, why: "Moving air (wind) lifts the kite. Never fly a kite in a thunderstorm.", lvl: 1, pic: "🪁" },
    { q: "Over a few weeks, the Moon seems to change its shape. Which is one shape we can see?", o: ["A square", "A star with five points", "A round full Moon"], a: 2, why: "The Moon can look round (a full Moon) or like a thin curve. It never looks square or star-shaped.", lvl: 1, pic: "🌃" },
    // lvl 2 (14)
    { q: "Why do we have day and night?", o: ["The Sun switches off at night", "The Earth keeps turning", "The Moon covers the Sun every night"], a: 1, why: "The Earth turns. The side facing the Sun has day, and the side facing away has night.", lvl: 2, pic: "🌍" },
    { q: "Why does the Moon shine?", o: ["Sunlight falls on it", "It is on fire", "It has lots of lamps"], a: 0, why: "The Moon does not make its own light. It shines because sunlight falls on it.", lvl: 2, pic: "🌕" },
    { q: "Why can’t we see the stars in the daytime?", o: ["The stars go to sleep", "The stars fall down", "The bright Sun hides them"], a: 2, why: "The stars are still there. The Sun’s light is so bright that we cannot see them.", lvl: 2, pic: "⭐☀️" },
    { q: "Lightning flashes and thunder booms. Where is the safest place to be?", o: ["Under a tall tree", "Inside a building", "In an open field"], a: 1, why: "Lightning often hits tall things and open spaces. A building is the safe place.", lvl: 2, pic: "⛈️" },
    { q: "Dark grey clouds fill the sky. What is most likely to happen soon?", o: ["It will rain", "It will snow", "A rainbow will appear at night"], a: 0, why: "Dark grey clouds hold lots of water drops, so rain often comes next.", lvl: 2, pic: "☁️☁️" },
    { q: "Mum hangs the washing out. On which day will it dry fastest?", o: ["A cloudy day with no wind", "A rainy day", "A sunny, windy day"], a: 2, why: "Warm sunshine and moving air both help wet clothes dry faster.", lvl: 2, pic: "👕👖" },
    { q: "Jun stands with the Sun in front of him. Where will his shadow be?", o: ["In front of him", "On top of his head", "Behind him"], a: 2, why: "Jun blocks the sunlight, so his shadow falls on the side away from the Sun, which is behind him.", lvl: 2, pic: "🧍☀️" },
    { q: "Which of these will NOT make a dark shadow in the sun?", o: ["A wooden chair", "A clear glass window", "A cat"], a: 1, why: "Clear glass lets most light pass through, so it makes only a faint shadow. The chair and the cat block the light.", lvl: 2, pic: "🪑🪟🐈" },
    { q: "Your family flies to a cold country. What should you pack?", o: ["A warm jacket", "Only T-shirts and shorts", "A paper fan"], a: 0, why: "A warm jacket keeps your body heat in so you stay warm.", lvl: 2, pic: "✈️🥶" },
    { q: "Where is the Sun when you see a rainbow?", o: ["In front of you, in the rainbow", "It has set for the night", "Behind you"], a: 2, why: "You see a rainbow when the Sun is behind you and the rain is in front of you.", lvl: 2, pic: "🌈" },
    { q: "Which clothes will keep you coolest under the hot Sun?", o: ["A thick, dark-coloured sweater", "A loose, light-coloured T-shirt", "A long plastic raincoat"], a: 1, why: "Loose, light-coloured clothes help you stay cooler. Dark, thick clothes make you feel hotter.", lvl: 2, pic: "👕☀️" },
    { q: "What are clouds made of?", o: ["Soft white cotton", "Grey smoke from fires", "Tiny drops of water"], a: 2, why: "Clouds are made of tiny drops of water. They are not cotton or smoke.", lvl: 2, pic: "☁️" },
    { q: "The Sun seems to move across the sky from morning to evening. Why?", o: ["The Earth is turning", "The wind blows the Sun", "The Sun walks around the Earth"], a: 0, why: "The Earth turns, so the Sun only looks like it moves across the sky.", lvl: 2, pic: "🌅🌇" },
    { q: "It is a very hot day. What should you do to stay well?", o: ["Run around in the Sun at noon", "Drink plenty of water", "Wear a thick coat"], a: 1, why: "Drinking plenty of water helps your body cope with the heat.", lvl: 2, pic: "🥵" },
    // lvl 3 (8)
    { q: "It is daytime in Singapore. What is it like on the other side of the Earth?", o: ["It is also daytime", "It is night-time", "It is always cold"], a: 1, why: "Only the side of the Earth facing the Sun has day. The other side faces away from the Sun, so it is night.", lvl: 3, pic: "🌍" },
    { q: "At what time of day is your shadow SHORTEST?", o: ["Early morning, when the Sun rises", "Late evening, when the Sun sets", "Around noon, when the Sun is high"], a: 2, why: "When the Sun is high in the sky, your shadow is short. When the Sun is low, your shadow is long.", lvl: 3, pic: "🧍" },
    { q: "Which place is NOT safe in a thunderstorm?", o: ["Under a lone tree in a field", "In the living room at home", "Inside a shopping centre"], a: 0, why: "Lightning often hits tall things standing alone, like a lone tree. Buildings are safe.", lvl: 3, pic: "⛈️🌳" },
    { q: "Sometimes we can see the Moon in the daytime. Which is true?", o: ["The Moon only comes out at night, so this cannot happen", "The Moon can be in the sky in the day too", "It is really the Sun in disguise"], a: 1, why: "The Moon is up in the day on some days. We can see it if the sky is clear.", lvl: 3, pic: "🌙🏙️" },
    { q: "Bella wants to see a rainbow. Which is the best time to look?", o: ["During a sunny shower in the late afternoon", "At midnight when it rains", "When the sky is covered in thick grey clouds"], a: 0, why: "A rainbow needs sunlight and raindrops together. At midnight there is no sunlight, and thick clouds block the Sun.", lvl: 3, pic: "🔭" },
    { q: "Ken stands under a street lamp at night. Where is his shadow?", o: ["Nowhere, there are no shadows at night", "On the side of him facing the lamp", "On the side of him away from the lamp"], a: 2, why: "Any light can make a shadow. Ken blocks the lamp’s light, so his shadow is on the side away from the lamp.", lvl: 3, pic: "🧍🌃" },
    { q: "Puddles on the road dry up on a sunny day. Where does the water go?", o: ["Into the air", "Into the Sun", "It turns into sand"], a: 0, why: "The Sun warms the puddle and the water goes up into the air. Later, water in the air can help make clouds.", lvl: 3, pic: "💧☀️" },
    { q: "The Earth turns once every day. What would happen if the Earth stopped turning?", o: ["Every place would have day and night much faster", "The Moon would give us sunlight all the time", "One side would stay in day and the other in night"], a: 2, why: "Day and night come from the Earth turning. Without turning, the side facing the Sun would stay in day.", lvl: 3, pic: "🌍⏸️" }
  ],
  tf: [
    { s: "The Sun gives us light and warmth.", a: true, why: "Yes! Sunlight lets us see and keeps the Earth warm.", pic: "☀️" },
    { s: "It is safe to look at the Sun if you wear sunglasses.", a: false, why: "Never look straight at the Sun, even with sunglasses. It can hurt your eyes.", pic: "😎" },
    { s: "The Sun goes around the Earth every day.", a: false, why: "The Earth turns. That is why the Sun seems to move across the sky.", pic: "🌍☀️" },
    { s: "The Moon makes its own light.", a: false, why: "The Moon shines because sunlight falls on it.", pic: "🌙" },
    { s: "The Sun is a star.", a: true, why: "Yes! The Sun is the star closest to us.", pic: "☀️⭐" },
    { s: "In the daytime, the stars are no longer in the sky.", a: false, why: "The stars are still there. The bright Sun hides them.", pic: "⭐" },
    { s: "Rain falls from clouds.", a: true, why: "Yes! When the water drops in clouds get big and heavy, they fall as rain.", pic: "🌧️" },
    { s: "A rainbow can appear when the Sun shines while it is raining.", a: true, why: "Yes! Sunlight and raindrops together make a rainbow.", pic: "🌦️" },
    { s: "A tall tree is a safe place to hide in a thunderstorm.", a: false, why: "Lightning often hits tall trees. Go inside a building instead.", pic: "🌳⛈️" },
    { s: "When you hear thunder, you should go indoors.", a: true, why: "Yes! Thunder means lightning is near. Indoors is safe.", pic: "⛈️🏠" },
    { s: "It snows in Singapore every December.", a: false, why: "Singapore is warm all year round. It does not snow here.", pic: "🇸🇬" },
    { s: "Wind is moving air.", a: true, why: "Yes! We cannot see air, but we can see wind move leaves and kites.", pic: "🍃" },
    { s: "A shadow forms when something blocks the light.", a: true, why: "Yes! The light cannot pass, so a dark shape forms behind the object.", pic: "🌳" },
    { s: "Shadows can only be made by the Sun.", a: false, why: "A torch, a lamp or any light can make shadows too.", pic: "🔦" },
    { s: "Your shadow is on the same side as the Sun.", a: false, why: "Your shadow is on the side away from the Sun.", pic: "🧍☀️" },
    { s: "A warm jacket helps keep you warm in a cold place.", a: true, why: "Yes! A jacket keeps your body heat in.", pic: "🧥" },
    { s: "Wearing a thick black sweater keeps you cool on a hot sunny day.", a: false, why: "Thick, dark clothes make you feel hotter. Loose, light-coloured clothes are cooler.", pic: "☀️" },
    { s: "When it is day in Singapore, it is night on the other side of the Earth.", a: true, why: "Yes! The side facing away from the Sun has night.", pic: "🌍" },
    { s: "Clouds are made of cotton.", a: false, why: "Clouds are made of tiny drops of water.", pic: "☁️" },
    { s: "The Moon can sometimes be seen in the daytime.", a: true, why: "Yes! On some days the Moon is in the sky while the Sun is up.", pic: "🌙" }
  ],
  sort: [
    { title: "Sort these into things we see in the day sky or the night sky", groups: ["Day sky", "Night sky"], items: [["the Sun", 0], ["a rainbow", 0], ["lots of stars", 1], ["the Sun rising in the morning", 0], ["the Moon in a dark sky", 1], ["bright blue sky", 0], ["a dark sky", 1], ["twinkling stars", 1]] },
    { title: "Sort these into safe or not safe in a thunderstorm", groups: ["Safe", "Not safe"], items: [["inside your home", 0], ["under a lone tree", 1], ["swimming in a pool", 1], ["inside a library", 0], ["in an open field", 1], ["inside a shopping centre", 0], ["flying a kite", 1], ["inside the classroom", 0]] },
    { title: "What should you wear or bring? Sort by the weather", groups: ["Hot and sunny", "Rainy", "Cold"], items: [["hat", 0], ["umbrella", 1], ["warm jacket", 2], ["raincoat", 1], ["sunscreen", 0], ["woolly gloves", 2], ["rain boots", 1], ["scarf", 2]] },
    { title: "Does it give out its own light?", groups: ["Makes its own light", "Does not make its own light"], items: [["the Sun", 0], ["the Moon", 1], ["a star", 0], ["a torch that is switched on", 0], ["a cloud", 1], ["a mirror", 1], ["a campfire", 0], ["a rainbow", 1]] }
  ]
};
