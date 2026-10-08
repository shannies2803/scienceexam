window.LBZ = window.LBZ || {};
LBZ["k-sky"] = {
  flash: [
    { f: "The star closest to the Earth is the…", b: "Sun", pic: "✨" },
    { f: "We have day and night because the Earth keeps…", b: "turning (spinning)", pic: "🌍" },
    { f: "Why does the Moon shine?", b: "Sunlight falls on it. The Moon does not make its own light.", pic: "🌕" },
    { f: "Clouds are made of…", b: "tiny drops of water", pic: "☁️" },
    { f: "Moving air is called…", b: "wind", pic: "🍃🪁" },
    { f: "The Sun rises in the…", b: "east", pic: "🌅" },
    { f: "The Sun sets in the…", b: "west", pic: "🌇" },
    { f: "The dark shape made when something blocks light is a…", b: "shadow", pic: "🧍" },
    { f: "You hear thunder. What should you do?", b: "go indoors quickly", pic: "⛈️" },
    { f: "A tool that tells how hot or cold it is", b: "a thermometer" },
    { f: "The Earth goes around the Sun once every…", b: "year", pic: "🌍☀️" },
    { f: "The Sun is low in the sky. Your shadow is…", b: "long (a high Sun makes a short shadow)" }
  ],
  mcq: [
    // lvl 1 (6)
    { q: "What colour is a clear sky in the daytime?", o: ["green", "blue", "black"], a: 1, why: "A clear sky in the day looks blue. At night the sky looks dark.", lvl: 1, pic: "🏙️" },
    { q: "Which of these shades your face from the hot Sun?", o: ["a scarf", "a glove", "a cap"], a: 2, why: "A cap blocks sunlight from your face. A scarf and a glove do not shade your face.", lvl: 1, pic: "☀️🧒" },
    { q: "Which of these is NOT found in the sky?", o: ["a puddle", "a cloud", "a star"], a: 0, why: "A puddle is water on the ground. Clouds and stars are in the sky.", lvl: 1 },
    { q: "Astronauts have walked on which of these?", o: ["the Sun", "the Moon", "a star"], a: 1, why: "Astronauts have walked on the Moon. The Sun and stars are far too hot to stand on.", lvl: 1, pic: "👨‍🚀" },
    { q: "What do we call a report on TV that tells us if it will rain tomorrow?", o: ["a bus timetable", "a food menu", "a weather forecast"], a: 2, why: "A weather forecast tells us if it will be sunny, rainy or stormy.", lvl: 1, pic: "📺" },
    { q: "In the morning, there are puddles everywhere. What was the weather like at night?", o: ["rainy", "sunny", "windy"], a: 0, why: "Rain falls and collects in low places on the ground. That makes puddles.", lvl: 1, pic: "🌅" },
    // lvl 2 (6)
    { q: "Two cars are parked at an HDB car park on a sunny afternoon. One is in the sun and one is in the shade. Which feels hotter to touch?", o: ["The car in the shade", "The car in the sun", "Both feel the same"], a: 1, why: "Sunlight warms things up. The car in the shade gets less sunlight, so it stays cooler.", lvl: 2, pic: "🚗🚗" },
    { q: "It is noon on a hot sunny day. Where is the coolest place to wait for the school bus?", o: ["In the open car park", "On the running track", "Under a bus shelter"], a: 2, why: "The shelter blocks the sunlight and makes shade. The car park and the track are out in the hot Sun.", lvl: 2, pic: "🚌" },
    { q: "Class 2A read a thermometer at different times of one day. Look at the graph. When was it hottest?", o: ["1 pm", "10 am", "4 pm"], a: 0, why: "The tallest bar is 1 pm, at 32 °C. 4 pm was a little cooler, at 31 °C.", lvl: 2, fig: { type: "bar", title: "How hot it was", xl: "Time", yl: "Temperature (°C)", bars: [["7 am", 25], ["10 am", 29], ["1 pm", 32], ["4 pm", 31], ["7 pm", 28]] } },
    { q: "Astronauts look at the Earth from space. What colour does it look mostly?", o: ["yellow", "blue", "red"], a: 1, why: "Most of the Earth is covered by seas, so it looks mostly blue, with white clouds.", lvl: 2, pic: "🚀" },
    { q: "A strong wind blows across the school field. Which will move the MOST?", o: ["a heavy stone", "a park bench", "a dry leaf"], a: 2, why: "A dry leaf is very light, so the moving air pushes it easily. A stone and a bench are too heavy.", lvl: 2, pic: "🌬️" },
    { q: "Your shadow is in front of you. Where is the Sun?", o: ["Behind you", "In front of you", "Under your feet"], a: 0, why: "A shadow is on the side away from the light. If the shadow is in front, the Sun is behind you.", lvl: 2, pic: "🧍" },
    // lvl 3 (4)
    { q: "Look at the diagram. Which is in the day sky AND made of water?", o: ["the Sun", "clouds", "a puddle"], a: 1, why: "Clouds are where the two circles overlap. They float in the sky and are made of tiny drops of water. A puddle is water, but it is on the ground.", lvl: 3, fig: { type: "venn", a: "In the day sky", b: "Made of water", onlyA: ["the Sun"], both: ["clouds"], onlyB: ["a puddle"], neither: ["a rock"] } },
    { q: "Mei wants to find out if wind helps water in a dish dry up faster. She uses a fan to make wind. Which two set-ups should she compare?", o: ["A and B", "A and C", "B and C"], a: 0, why: "A and B are both in the shade with the same water. Only the fan is changed, so the test is fair. B and C differ in two ways.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "dish", lines: ["1 cup of water", "Fan switched on", "In the shade"] }, { label: "B", icon: "dish", lines: ["1 cup of water", "No fan", "In the shade"] }, { label: "C", icon: "dish", lines: ["1 cup of water", "Fan switched on", "In the sun"] } ] } },
    { q: "On a clear night, where would you see MORE stars?", o: ["Orchard Road", "Both the same", "Pulau Ubin"], a: 2, why: "Pulau Ubin has few bright lights. In the city, bright lights make faint stars hard to see.", lvl: 3, pic: "✨🌃" },
    { q: "In the sky, the Moon and the Sun look about the same size. Why?", o: ["They are really the same size", "The Moon is much closer to us", "The Sun is smaller than the Moon"], a: 1, why: "The Sun is much bigger than the Moon, but it is very much further away. Things far away look smaller.", lvl: 3, pic: "🌕☀️" }
  ],
  tf: [
    { s: "On a clear day, the sky looks blue.", a: true, why: "Yes! A clear daytime sky looks blue.", pic: "🌤️" },
    { s: "The Moon is bigger than the Earth.", a: false, why: "The Moon is much smaller than the Earth.", pic: "🌙🌍" },
    { s: "Astronauts have walked on the Moon.", a: true, why: "Yes! Their footprints are still there, because there is no wind or rain to wipe them away.", pic: "👣" },
    { s: "On a cloudy day, the Sun is not in the sky.", a: false, why: "The Sun is still there. The clouds only hide it from us.", pic: "☁️" },
    { s: "Clouds can be white or grey.", a: true, why: "Yes! We often see white clouds on fine days. Dark grey clouds often bring rain.", pic: "🌥️" },
    { s: "We can see the wind.", a: false, why: "Wind is moving air, and we cannot see air. We see the things it moves, like leaves and flags.", pic: "🍃" },
    { s: "Lightning never strikes the same place twice.", a: false, why: "Lightning can strike the same place many times, especially tall buildings.", pic: "⚡🏢" },
    { s: "The Earth spins once every day.", a: true, why: "Yes! One turn gives us one day and one night.", pic: "🌍" }
  ],
  sort: [
    { title: "What is the weather like? Sort by the clue.", groups: ["Sunny ☀️", "Windy 🌬️", "Rainy 🌧️"], items: [["a very hot playground slide", 0], ["people wearing sunglasses", 0], ["a kite flying high", 1], ["trees bending and swaying", 1], ["flags flapping hard", 1], ["puddles on the ground", 2], ["people wearing raincoats", 2], ["drains full of water", 2]] }
  ]
};
