window.LBU = window.LBU || {};
LBU["k-sky"] = {
  glossary: [
    { t: "Weather", d: "What the air outside is like each day. It can be sunny, cloudy, rainy, windy or stormy." },
    { t: "Wind", d: "Air that is moving. We cannot see it, but we can feel it and see it push leaves, flags and kites." },
    { t: "Shadow", d: "The dark shape that forms behind an object when the object blocks light." },
    { t: "Star", d: "A huge, very hot ball in space that gives out its own light. The Sun is the star closest to us." },
    { t: "Planet", d: "A huge round ball in space that goes around the Sun. The Earth is a planet." },
    { t: "Moon", d: "The big ball of rock that goes around the Earth. It shines because sunlight falls on it." },
    { t: "Thunderstorm", d: "A storm with heavy rain, flashes of lightning and loud booms of thunder." },
    { t: "Rainbow", d: "A curve of many colours we may see in the sky when the Sun shines on raindrops." }
  ],
  lessons: [
    {
      h: "Big and small shadows",
      concept: "Light moves in straight lines. When a toy is close to the torch, it blocks a lot of light, so its shadow is big. When the toy is far from the torch, its shadow is small.",
      example: { q: "Ali puts on a shadow show. He holds a toy dinosaur near the torch. Then he moves it far from the torch, near the wall. What happens to the shadow on the wall?", pic: "🔦🦖",
        think: ["Near the torch, the toy blocks a lot of light.", "Far from the torch, the toy blocks less light.", "Less light blocked means a smaller dark shape."],
        answer: "The shadow gets smaller when the toy moves away from the torch." },
      tip: "Near the torch, big shadow. Far from the torch, small shadow.",
      try: { q: "Mei wants a BIG shadow of her paper bunny on the wall. Where should she hold the bunny?", o: ["Close to the torch", "Close to the wall", "Behind the torch"], a: 0, why: "Close to the torch, the bunny blocks a lot of light, so the shadow is big. Behind the torch, it blocks no light on the wall, so there is no shadow there.", pic: "🔦🐰" }
    }
  ],
  flash: [
    { f: "The biggest planet that goes around our Sun is…", b: "Jupiter" },
    { f: "The planet best known for its big, bright rings is…", b: "Saturn" },
    { f: "How many planets go around our Sun?", b: "8 (eight). The Earth is one of them.", pic: "☀️" },
    { f: "Animals that are awake at night and sleep in the day are called…", b: "night animals (nocturnal), like owls and bats", pic: "🌙" },
    { f: "On a hot day, a dog cools itself down by…", b: "panting (breathing fast with its tongue out)", pic: "🐶☀️" },
    { f: "Panels on HDB roofs that use sunlight to make electricity are…", b: "solar panels", pic: "🏢" },
    { f: "A tall machine with blades that moving air turns to make electricity", b: "a wind turbine" },
    { f: "You move a toy closer to the torch. Its shadow gets…", b: "bigger (further from the torch, it gets smaller)", pic: "🔦🧸" },
    { f: "A cloud that is down near the ground, so you cannot see far, is called…", b: "fog (mist)", pic: "🚗👀" },
    { f: "Why must you never leave a pet in a parked car on a sunny day?", b: "The car gets very hot inside, even with the windows a little open. The pet can get very sick.", pic: "🐕🚗" }
  ],
  mcq: [
    // lvl 1 (6)
    { q: "Which planet has big, bright rings around it?", o: ["Earth", "Saturn", "Mars"], a: 1, why: "Saturn has big, bright rings around it. The Earth and Mars have no rings.", lvl: 1 },
    { q: "Which animal is usually awake at night and sleeps in the day?", o: ["an owl", "a butterfly", "a chicken"], a: 0, why: "Owls hunt at night and sleep in the day. Butterflies and chickens are awake in the day.", lvl: 1, pic: "🌙" },
    { q: "What do solar panels on HDB roofs use to make electricity?", o: ["rainwater", "wind", "sunlight"], a: 2, why: "Solar panels use sunlight to make electricity. That is why they are put on sunny rooftops.", lvl: 1, pic: "🏢" },
    { q: "What turns the blades of a wind turbine?", o: ["the Sun’s light", "moving air", "falling rain"], a: 1, why: "Wind is moving air. It pushes the blades round to make electricity.", lvl: 1 },
    { q: "Fog is a bit like a cloud. Where is fog?", o: ["Near the ground", "High in space", "Inside the Sun"], a: 0, why: "Fog is like a cloud down near the ground. It is made of tiny drops of water, so it is hard to see far.", lvl: 1, pic: "🚗👀" },
    { q: "In a very cold country, what can fall from the clouds in winter?", o: ["sand", "leaves", "snow"], a: 2, why: "When it is very cold, water in the clouds can freeze and fall as snow. Leaves fall from trees, not clouds.", lvl: 1, pic: "🥶" },
    // lvl 2 (6)
    { q: "A dog is panting on a hot afternoon. Why?", o: ["It is feeling very cold", "It wants to go to sleep", "It is cooling itself down"], a: 2, why: "Dogs pant to cool down when they are hot. Give your dog water and a shady spot.", lvl: 2, pic: "🐶☀️" },
    { q: "Why must you NOT leave a pet in a parked car on a sunny day?", o: ["The car gets too cold inside", "The car gets very hot inside", "The car gets too windy inside"], a: 1, why: "Sunlight makes a closed car very hot inside, even with the windows a little open. The pet can get very sick.", lvl: 2, pic: "🐕🚗" },
    { q: "Ben holds a toy near a torch. He moves the toy away from the torch, towards the wall. What happens to its shadow on the wall?", o: ["It gets smaller", "It gets bigger", "It disappears"], a: 0, why: "Far from the torch, the toy blocks less light, so its shadow gets smaller. It still blocks some light, so the shadow stays.", lvl: 2, pic: "🔦🧸" },
    { q: "Siti sprays water from a garden hose and sees a rainbow in the spray. Besides the drops of water, what is needed to make the rainbow?", o: ["darkness", "thunder", "sunlight"], a: 2, why: "A rainbow needs sunlight and drops of water together. The hose spray gives the water drops.", lvl: 2, pic: "🚿🌈" },
    { q: "Class 1C counted the rainy days in four months. Look at the graph. Which month had the FEWEST rainy days?", o: ["January", "February", "March"], a: 1, why: "The February bar is the shortest, at 6 days. March had the most, at 12 days.", lvl: 2, fig: { type: "bar", title: "Rainy days", xl: "Month", yl: "Number of rainy days", bars: [["January", 10], ["February", 6], ["March", 12], ["April", 9]] } },
    { q: "Tall HDB blocks have a metal rod on the roof. What is it for?", o: ["To carry lightning safely down", "To collect rainwater for plants", "To show which way wind blows"], a: 0, why: "Lightning often hits tall buildings. The metal rod carries the lightning safely down to the ground.", lvl: 2, pic: "🏢⚡" },
    // lvl 3 (4)
    { q: "Look at the diagram. Which animal is awake at night AND can fly?", o: ["a gecko", "a bat", "a sparrow"], a: 1, why: "The bat is where the two circles overlap. A gecko is awake at night but cannot fly. A sparrow can fly but is awake in the day.", lvl: 3, fig: { type: "venn", a: "Awake at night", b: "Can fly", onlyA: ["gecko"], both: ["bat", "owl"], onlyB: ["sparrow", "butterfly"], neither: ["chicken"] } },
    { q: "Jun wants to find out if a black cloth or a white cloth gets hotter in the sun. Which two set-ups should he compare?", o: ["A and B", "A and C", "B and C"], a: 2, why: "B and C are both in the sun and the same size. Only the colour is changed, so the test is fair. A is in the shade.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "plate", lines: ["Black cloth", "Same size", "In the shade"] }, { label: "B", icon: "plate", lines: ["White cloth", "Same size", "In the sun"] }, { label: "C", icon: "plate", lines: ["Black cloth", "Same size", "In the sun"] } ] } },
    { q: "The planet Venus does not make its own light. Why can we see it shining in the evening sky?", o: ["Sunlight falls on it", "It has its own fire", "The Moon lights it up"], a: 0, why: "Like the Moon, Venus shines because sunlight falls on it. It has no fire, and the Moon does not make light.", lvl: 3, pic: "🌆✨" },
    { q: "The flag on the school pole is pointing towards the canteen. Where is the wind blowing from?", o: ["From the canteen side", "From the other side", "From under the flag"], a: 1, why: "The wind pushes the flag so it points the way the wind is going. So the wind comes from the other side, away from the canteen.", lvl: 3, pic: "🚩🏫" }
  ],
  tf: [
    { s: "Singapore has spring, summer, autumn and winter.", a: false, why: "Singapore is warm all year round. It does not have these four seasons.", pic: "🇸🇬" },
    { s: "The Earth is a planet.", a: true, why: "Yes! The Earth is one of the 8 planets that go around the Sun.", pic: "🌍" },
    { s: "Owls and bats are awake at night.", a: true, why: "Yes! They look for food at night and rest in the day.", pic: "🌙" },
    { s: "Fog is made of smoke.", a: false, why: "Fog is made of tiny drops of water near the ground. Haze is the smoky one.", pic: "🚗👀" },
    { s: "Solar panels need sunlight to make electricity.", a: true, why: "Yes! They use sunlight, so they make the most electricity on sunny days.", pic: "🏢" },
    { s: "A dog is safe in a parked car on a sunny day if a window is a little open.", a: false, why: "The car still gets very hot inside. Never leave a pet in a parked car.", pic: "🐕🚗" },
    { s: "Moving a toy closer to a torch makes its shadow smaller.", a: false, why: "Closer to the torch, the toy blocks more light, so its shadow gets bigger.", pic: "🔦🧸" },
    { s: "A wind turbine uses moving air to make electricity.", a: true, why: "Yes! The wind pushes its blades round and round.", pic: "🌬️" }
  ]
};
