window.LBZ = window.LBZ || {};
LBZ["k-senses"] = {
  flash: [
    { f: "How many senses do we have?", b: "five: sight, hearing, smell, taste and touch", pic: "🧒" },
    { f: "Eyes, ears, nose, tongue and skin are our…", b: "sense organs" },
    { f: "We hear with our…", b: "ears", pic: "🔔" },
    { f: "We smell with our…", b: "nose", pic: "🌸" },
    { f: "We taste with our…", b: "tongue", pic: "🍭" },
    { f: "We feel hot and cold with our…", b: "skin", pic: "🧊☕" },
    { f: "The sense organ that covers our whole body is the…", b: "skin" },
    { f: "Using our senses to find out about things is called…", b: "observing", pic: "🔍" },
    { f: "How a thing feels, like rough or smooth, is its…", b: "texture", pic: "🪨" },
    { f: "Four tastes our tongue can find", b: "sweet, salty, sour and bitter", pic: "🍬🥨🍋" },
    { f: "A tool that makes tiny things look bigger", b: "a magnifying glass", pic: "🐜" },
    { f: "You find food you do not know. Before you taste it, you must…", b: "ask a grown-up first" }
  ],
  mcq: [
    // lvl 1 (6)
    { q: "The MRT train doors beep before they close. Which sense tells you?", o: ["sight", "hearing", "taste"], a: 1, why: "A beep is a sound. We hear sounds with our ears.", lvl: 1, pic: "🚇" },
    { q: "Which body part tells you that the kaya toast is sweet?", o: ["nose", "ears", "tongue"], a: 2, why: "We taste sweet food with our tongue. The nose smells and the ears hear.", lvl: 1, pic: "🍞" },
    { q: "Which of these feels fluffy?", o: ["a cotton ball", "a stone", "a metal spoon"], a: 0, why: "A cotton ball is soft and fluffy. A stone and a metal spoon feel hard.", lvl: 1, pic: "✋" },
    { q: "Which word tells us the SHAPE of a thing?", o: ["sticky", "sweet", "square"], a: 2, why: "Square is a shape. Sticky tells how it feels and sweet is a taste.", lvl: 1, pic: "🔷" },
    { q: "Dust blows near your eye. Which part quickly closes to keep the eye safe?", o: ["eyebrow", "eyelid", "earlobe"], a: 1, why: "The eyelid closes when we blink. It helps keep dust out of the eye.", lvl: 1, pic: "🌬️" },
    { q: "Which of these makes a QUIET sound?", o: ["a cat walking", "a drum beating", "a thunder clap"], a: 0, why: "A cat walks softly, so it makes a quiet sound. A drum and thunder are loud.", lvl: 1, pic: "🤫👂" },
    // lvl 2 (6)
    { q: "At the wet market, Mum checks if the fish is fresh. She does NOT taste it. Which TWO senses can she use?", o: ["taste and touch", "sight and smell", "hearing and taste"], a: 1, why: "She can look at the fish and smell it. The other two answers use taste, and she does not taste it.", lvl: 2, pic: "🐟" },
    { q: "Your lips touch a cup of kopi. It is too hot! Which sense tells you?", o: ["hearing", "taste", "touch"], a: 2, why: "Feeling hot and cold is the sense of touch. Our lips have skin that feels heat.", lvl: 2, pic: "☕" },
    { q: "Eyes, ears, nose, tongue and ___. Which sense organ is missing?", o: ["skin", "hands", "hair"], a: 0, why: "Skin is the fifth sense organ. It covers our whole body, including our hands.", lvl: 2, pic: "👀👂👃👅" },
    { q: "At Gardens by the Bay, Ali says, “This orchid is purple.” Which sense did he use?", o: ["smell", "touch", "sight"], a: 2, why: "Colour is seen with our eyes. That is the sense of sight.", lvl: 2, pic: "🌺" },
    { q: "You are in your bedroom. You hear “ding-dong!” What is most likely happening?", o: ["It is starting to rain", "Someone is at the door", "The rice is burning"], a: 1, why: "A ding-dong is the sound of a doorbell. Rain makes a pitter-patter sound, and burning rice is something we smell.", lvl: 2, pic: "🛏️👂" },
    { q: "Which of these helps keep your eyes safe when you swim?", o: ["goggles", "earmuffs", "gloves"], a: 0, why: "Goggles cover our eyes and keep pool water out. Earmuffs are for ears and gloves are for hands.", lvl: 2, pic: "🏊" },
    // lvl 3 (4)
    { q: "Class 2C sniffed four jars with their eyes closed. The graph shows how many children named each smell correctly. Which smell was the HARDEST to name?", o: ["coffee", "onion", "pandan"], a: 2, why: "The pandan bar is the shortest. Only 9 children named it, so it was the hardest.", lvl: 3, fig: { type: "bar", title: "Smells we named correctly", xl: "Smell", yl: "Number of children", bars: [["Lemon", 20], ["Coffee", 16], ["Pandan", 9], ["Onion", 18]] } },
    { q: "Look at the diagram. Which can you HEAR but NOT see?", o: ["thunder", "a rainbow", "a fire engine"], a: 0, why: "Thunder is only in the Can hear it circle. A rainbow can only be seen. A fire engine can be seen and heard.", lvl: 3, fig: { type: "venn", a: "Can see it", b: "Can hear it", onlyA: ["a rainbow", "the Moon"], both: ["a fire engine", "a barking dog"], onlyB: ["thunder"], neither: ["the smell of soap"] } },
    { q: "Wei wants to find out if a drink tastes less sweet when it is cold. Look at the set-ups. Which two cups should he compare?", o: ["A and B", "B and C", "A and C"], a: 1, why: "B and C have the same amount of sugar. Only the water temperature is changed, so the test is fair.", lvl: 3, fig: { type: "setups", items: [ { label: "A", icon: "beaker", lines: ["2 spoons of sugar", "Warm water"] }, { label: "B", icon: "beaker", lines: ["1 spoon of sugar", "Cold water"] }, { label: "C", icon: "beaker", lines: ["1 spoon of sugar", "Warm water"] } ] } },
    { q: "Which of these can you find out ONLY by tasting?", o: ["if the soup is salty", "if the soup is hot", "if the soup is red"], a: 0, why: "Salty is a taste, so only the tongue can tell. You can feel that soup is hot, and you can see that it is red.", lvl: 3, pic: "🍲" }
  ],
  tf: [
    { s: "Your tongue can feel if food is hot or cold.", a: true, why: "Yes! The tongue tastes, and it can also feel hot and cold.", pic: "👅🍦" },
    { s: "If you cannot see something, it is not there.", a: false, why: "Air is all around us, but we cannot see it. We can feel the wind on our skin.", pic: "🌬️" },
    { s: "Babies are born with no senses.", a: false, why: "Babies can hear, smell, taste and feel. They know their mother’s voice.", pic: "👶" },
    { s: "Our eyes can see things that are very far away, like the Moon.", a: true, why: "Yes! We can see the Moon even though it is very far away.", pic: "🌙" },
    { s: "Spectacles help some people see more clearly.", a: true, why: "Yes! Spectacles help eyes that cannot see clearly on their own.", pic: "👓" },
    { s: "Shouting into a friend’s ear is a safe game.", a: false, why: "Very loud sounds close to the ear can hurt it. Keep your voice gentle.", pic: "📣" },
    { s: "A magnifying glass makes an ant really grow bigger.", a: false, why: "The ant only LOOKS bigger. It stays the same size.", pic: "🐜🔍" },
    { s: "Feeling pain warns us to stop and keep safe.", a: true, why: "Yes! Pain from a hot pan tells us to pull our hand away quickly.", pic: "🍳" }
  ],
  sort: [
    { title: "Which sense organ tells you? Nose, tongue or skin?", groups: ["Nose 👃", "Tongue 👅", "Skin ✋"], items: [["a smelly rubbish bin", 0], ["the scent of jasmine", 0], ["smoke from a fire", 0], ["sour lime juice", 1], ["salty fishball soup", 1], ["sweet kaya", 1], ["a prickly cactus", 2], ["a cold ice cube", 2]] }
  ]
};
