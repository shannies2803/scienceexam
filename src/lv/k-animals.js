window.LB = window.LB || {};
LB["k-animals"] = {
  notes: [
    { h: "Pets, farm and zoo animals", t: "Pets like dogs, cats, rabbits and hamsters live with us at home. Farm animals like cows and hens give us milk and eggs. We can see wild animals at Singapore Zoo, Bird Paradise and S.E.A. Aquarium.", kw: ["pet", "farm", "wild"], pic: "🐶🐄🦒" },
    { h: "Where animals live", t: "Some animals live on land, some live in water and some live in trees. A frog can live both on land and in water.", kw: ["land", "water", "trees"], pic: "🐫🐟🐒" },
    { h: "What animals eat", t: "Some animals eat only plants, like cows and rabbits. Some eat other animals, like tigers. Some eat both plants and animals, like hens.", kw: ["plants", "animals", "both"], pic: "🌿🥩" },
    { h: "How animals move", t: "Animals move in different ways. They can walk, fly, swim, hop, crawl or slither.", kw: ["move", "hop", "slither"], pic: "🦘🐍🐦" },
    { h: "What covers their bodies", t: "Dogs and cats have fur. Birds have feathers. Fish and snakes have scales. A tortoise has a hard shell, and a frog has smooth, wet skin.", kw: ["fur", "feathers", "scales"], pic: "🐕🦜🐟🐢" },
    { h: "Hatched or born?", t: "Some babies hatch from eggs, like chicks and baby turtles. Some babies are born from their mother, like puppies and kittens.", kw: ["hatch", "egg", "born"], pic: "🥚🐶" },
    { h: "Animals grow up", t: "Baby animals grow into adults. A puppy grows into a dog. A tadpole grows into a frog. It does not look like its parents at first!", kw: ["grow", "adult"], pic: "🐶🐕" },
    { h: "Caring for a pet", t: "A pet needs food, fresh water, a clean home and lots of love. Pet it gently and wash your hands after.", kw: ["care", "gently"], pic: "🐕🥣💧" }
  ],
  traps: [
    "Not all birds can fly. Penguins swim and walk instead.",
    "A bat can fly, but it is not a bird. It has fur, and its babies are born, not hatched.",
    "Not all babies look like their parents. A tadpole looks very different from a frog.",
    "Never give a dog chocolate. It can make a dog very sick.",
    "A frog does not have scales. It has smooth, wet skin."
  ],
  lessons: [
    {
      h: "Hatched or born?",
      concept: "Some babies hatch from eggs. Others are born from their mother. Birds, turtles and crocodiles hatch from eggs. Puppies, kittens and calves are born.",
      example: { q: "Is a baby turtle hatched from an egg, or born from its mother?", pic: "🐢🏖️",
        think: ["Think: does a mother turtle lay eggs?", "Yes. She lays her eggs in the sand.", "The babies come out of the eggs. They hatch."],
        answer: "A baby turtle hatches from an egg." },
      tip: "Ask: did the mother lay eggs? If yes, the baby hatches.",
      try: { q: "Which baby is born from its mother?", o: ["duckling", "calf", "chick"], a: 1, why: "A calf (baby cow) is born from its mother. Ducklings and chicks hatch from eggs.", pic: "🍼" }
    },
    {
      h: "What covers its body?",
      concept: "We can group animals by what covers their bodies: fur, feathers, scales, a shell or smooth skin.",
      example: { q: "What covers a parrot’s body?", pic: "🦜",
        think: ["A parrot is a bird.", "All birds have feathers.", "So a parrot is covered with feathers."],
        answer: "Feathers." },
      tip: "Birds always have feathers. Fish and snakes have scales.",
      try: { q: "What covers a snake’s body?", o: ["fur", "feathers", "scales"], a: 2, why: "A snake is covered with dry scales.", pic: "🐍" }
    },
    {
      h: "What does it eat?",
      concept: "Look at the food an animal eats. Only plants? Only other animals? Or both?",
      example: { q: "A goat eats grass and leaves. Does it eat plants, animals or both?", pic: "🐐",
        think: ["Grass is a plant.", "Leaves come from plants too.", "It eats no animals, so it eats only plants."],
        answer: "A goat eats only plants." },
      tip: "If the food list has a plant AND an animal, the answer is both.",
      try: { q: "A bear eats fish and berries. What does it eat?", o: ["both plants and animals", "only plants, like berries", "only animals, like fish"], a: 0, why: "Fish are animals and berries come from plants. So a bear eats both.", pic: "🐻" }
    },
    {
      h: "Caring for a pet dog",
      concept: "A pet depends on us. A dog needs food, fresh water, walks, a clean place to sleep, visits to the vet and gentle love.",
      example: { q: "Name three things a pet dog needs.", pic: "🐕",
        think: ["What keeps it alive? Food and fresh water.", "What keeps it fit? Walks and play.", "What keeps it well? A clean bed and the vet."],
        answer: "Food, fresh water and daily walks. (A clean bed and vet visits are good answers too.)" },
      tip: "Think: food, water, home, exercise, love.",
      try: { q: "Which shows good care for a pet dog?", o: ["taking it for a walk", "leaving it with no water", "giving it chocolate"], a: 0, why: "Dogs need exercise. They must always have water, and chocolate can make them sick.", pic: "🐕🦮" }
    }
  ],
  mcq: [
    { q: "Which animal can be a pet at home?", o: ["tiger", "hamster", "shark"], a: 1, why: "A hamster is small and gentle. Tigers and sharks are wild animals.", lvl: 1, pic: "🏠" },
    { q: "Which animal gives us milk?", o: ["cow", "snake", "goldfish"], a: 0, why: "Farmers get milk from cows.", lvl: 1, pic: "🥛" },
    { q: "Which animal has feathers?", o: ["dog", "fish", "parrot"], a: 2, why: "A parrot is a bird. Birds have feathers.", lvl: 1, pic: "🐶🐟🦜" },
    { q: "What covers this dog’s body?", o: ["fur", "feathers", "scales"], a: 0, why: "Dogs are covered with fur.", lvl: 1, pic: "🐕" },
    { q: "How does a fish move?", o: ["it flies", "it swims", "it hops"], a: 1, why: "A fish swims in water with its fins and tail.", lvl: 1, pic: "🐟" },
    { q: "Where does a goldfish live?", o: ["in a tree", "in a nest", "in water"], a: 2, why: "A goldfish lives in water, in a pond or a fish tank.", lvl: 1, pic: "🐠" },
    { q: "Where does a baby chick come out of?", o: ["its mother’s pouch", "an egg", "a flower"], a: 1, why: "A chick hatches from an egg.", lvl: 1 },
    { q: "What do we call a baby dog?", o: ["kitten", "puppy", "calf"], a: 1, why: "A baby dog is a puppy. A kitten is a baby cat and a calf is a baby cow.", lvl: 1, pic: "🐕" },
    { q: "How does a bird move in the sky?", o: ["it swims", "it slithers", "it flies"], a: 2, why: "Birds flap their wings to fly.", lvl: 1, pic: "☁️🐦" },
    { q: "What does a rabbit eat?", o: ["grass and carrots", "meat and bones", "fish and worms"], a: 0, why: "Rabbits eat plants like grass, hay and vegetables.", lvl: 1, pic: "🐰" },
    { q: "Which animal hops?", o: ["kangaroo", "snail", "snake"], a: 0, why: "A kangaroo hops on its strong back legs.", lvl: 1, pic: "🦘🐌🐍" },
    { q: "Where in Singapore can we see sharks and rays?", o: ["Bird Paradise", "S.E.A. Aquarium", "a bus stop"], a: 1, why: "S.E.A. Aquarium on Sentosa has sea animals like sharks and rays.", lvl: 1, pic: "🦈" },
    { q: "What does your pet dog need every day?", o: ["fresh water", "ice cream", "a bath in the sea"], a: 0, why: "Pets need fresh water every day.", lvl: 1, pic: "🐕" },
    { q: "Which animal has a hard shell?", o: ["cat", "hen", "tortoise"], a: 2, why: "A tortoise has a hard shell to keep it safe.", lvl: 1, pic: "🐱🐔🐢" },

    { q: "Which animal can live both on land and in water?", o: ["cat", "frog", "goat"], a: 1, why: "A frog can live in water and on land. Cats and goats live on land.", lvl: 2, pic: "🌊🌳" },
    { q: "Which animal eats only plants?", o: ["tiger", "cow", "eagle"], a: 1, why: "A cow eats grass. Tigers and eagles eat other animals.", lvl: 2, pic: "🐯🐄🦅" },
    { q: "Which animal eats other animals?", o: ["goat", "rabbit", "tiger"], a: 2, why: "A tiger hunts other animals for food. Goats and rabbits eat plants.", lvl: 2 },
    { q: "How does a snake move?", o: ["it slithers", "it hops", "it walks"], a: 0, why: "A snake has no legs. It slithers along the ground.", lvl: 2, pic: "🐍" },
    { q: "What covers a fish’s body?", o: ["fur", "scales", "feathers"], a: 1, why: "Most fish are covered with scales.", lvl: 2, pic: "🐟" },
    { q: "Which baby is born from its mother, not hatched from an egg?", o: ["kitten", "chick", "duckling"], a: 0, why: "A kitten is born from its mother cat. Chicks and ducklings hatch from eggs.", lvl: 2, pic: "🐱🐔🦆" },
    { q: "A tadpole grows into a...", o: ["fish", "frog", "butterfly"], a: 1, why: "A tadpole grows legs and loses its tail. It becomes a frog.", lvl: 2 },
    { q: "What is the kind way to pet a dog?", o: ["stroke it gently", "pull its tail", "shout in its ear"], a: 0, why: "Stroke a dog gently. Pulling and shouting can hurt or scare it.", lvl: 2, pic: "🐕" },
    { q: "Which animal would you see at Bird Paradise?", o: ["dolphin", "tiger", "penguin"], a: 2, why: "A penguin is a bird. Bird Paradise has penguins and many other birds.", lvl: 2, pic: "🐬🐯🐧" },
    { q: "How does a caterpillar move?", o: ["it flies", "it crawls", "it swims"], a: 1, why: "A caterpillar crawls slowly on its many short legs.", lvl: 2, pic: "🐛" },
    { q: "Which animal has smooth, wet skin?", o: ["parrot", "cat", "frog"], a: 2, why: "A frog has smooth, wet skin. A parrot has feathers and a cat has fur.", lvl: 2, pic: "🦜🐱🐸" },
    { q: "Which animal lives in trees most of the time?", o: ["orangutan", "camel", "goldfish"], a: 0, why: "Orangutans climb and swing in the trees. You can see them at Singapore Zoo.", lvl: 2, pic: "🌳" },
    { q: "Which is NOT a good way to care for a pet hamster?", o: ["give it fresh water", "keep its cage clean", "leave it in the hot sun"], a: 2, why: "The hot sun can make a hamster very sick. Keep it in a cool, shady place.", lvl: 2, pic: "🐹" },
    { q: "A hen eats grain and also worms. So a hen eats...", o: ["only plants, like grain", "only animals, like worms", "both plants and animals"], a: 2, why: "Grain comes from plants and worms are animals. So a hen eats both.", lvl: 2, pic: "🐔🌾🪱" },

    { q: "A penguin is a bird. How does it move?", o: ["it walks and swims", "it flies high in the sky", "it slithers"], a: 0, why: "Penguins cannot fly. They walk on land and swim very well in water.", lvl: 3, pic: "🐧" },
    { q: "Look at the diagram. Which animal could go in the part marked ‘?’", o: ["cat", "eagle", "goldfish"], a: 1, why: "The ‘?’ part is in BOTH circles. An eagle can fly AND hatches from an egg. A goldfish hatches from an egg but cannot fly.", lvl: 3, fig: { type: "venn", a: "Can fly", b: "Hatches from egg", onlyA: ["bat"], both: ["?"], onlyB: ["turtle"], neither: ["dog"] } },
    { q: "Class 2B voted for their favourite pet. Look at the graph. How many more children chose dog than cat?", o: ["4", "8", "20"], a: 0, why: "12 chose dog and 8 chose cat. 12 take away 8 is 4.", lvl: 3, fig: { type: "bar", title: "Our favourite pet", xl: "Pet", yl: "Number of children", bars: [["Dog", 12], ["Cat", 8], ["Rabbit", 6], ["Fish", 4]] } },
    { q: "Which young animal does NOT look like its parent?", o: ["puppy", "kitten", "caterpillar"], a: 2, why: "A caterpillar looks very different from the butterfly it grows into. A puppy and a kitten look like small adults.", lvl: 3, pic: "🐶🐱🐛" },
    { q: "What can a wild duck do?", o: ["only swim in water", "only walk on land", "walk, swim and fly"], a: 2, why: "A wild duck walks on land, swims in ponds and flies in the sky.", lvl: 3, pic: "🦆" },
    { q: "Which food should you NEVER give a dog?", o: ["dog food", "chocolate", "water"], a: 1, why: "Chocolate can make a dog very sick. Dog food and water are good for it.", lvl: 3, pic: "🐕" },
    { q: "A dolphin lives in the sea. How does a baby dolphin start its life?", o: ["the baby hatches from an egg", "the baby is found in a tree", "the baby is born from its mother"], a: 2, why: "A dolphin does not lay eggs. Its baby is born, and it drinks its mother’s milk.", lvl: 3, pic: "🐬🌊" },
    { q: "Which animal has scales AND hatches from an egg?", o: ["crocodile", "hamster", "cow"], a: 0, why: "A crocodile has scales and its babies hatch from eggs. Hamsters and cows have fur and are born.", lvl: 3, pic: "🐊🐹🐄" }
  ],
  tf: [
    { s: "A dog is covered with fur.", a: true, why: "Dogs have fur to keep them warm.", pic: "🐕" },
    { s: "All birds can fly.", a: false, why: "Penguins and ostriches are birds, but they cannot fly.", pic: "🐧" },
    { s: "A chick hatches from an egg.", a: true, why: "A mother hen lays eggs. The chicks hatch from them.", pic: "🥚" },
    { s: "A puppy hatches from an egg.", a: false, why: "A puppy is born from its mother dog.", pic: "🐶" },
    { s: "A cow eats only plants.", a: true, why: "Cows eat grass and other plants.", pic: "🐄" },
    { s: "A snake moves by walking on its legs.", a: false, why: "A snake has no legs. It slithers.", pic: "🐍" },
    { s: "A frog can live on land and in water.", a: true, why: "Frogs can hop on land and swim in water.", pic: "🐸" },
    { s: "A tiger eats only plants.", a: false, why: "A tiger eats other animals.", pic: "🐯" },
    { s: "A tadpole grows into a frog.", a: true, why: "A tadpole grows legs, loses its tail and becomes a frog." },
    { s: "A baby animal always looks like its parents.", a: false, why: "A tadpole and a caterpillar look very different from their parents." },
    { s: "Pets need fresh water every day.", a: true, why: "All animals need water to live.", pic: "🐱💧" },
    { s: "It is fine to give a dog chocolate as a treat.", a: false, why: "Chocolate can make a dog very sick. Give it a dog treat instead.", pic: "🐕🍫" },
    { s: "A goldfish lives in water.", a: true, why: "A goldfish lives in a pond or a fish tank.", pic: "🐠" },
    { s: "A tortoise has a hard shell.", a: true, why: "Its hard shell keeps it safe.", pic: "🐢" },
    { s: "A bat is a bird because it can fly.", a: false, why: "A bat has fur, not feathers. Its babies are born, not hatched.", pic: "🦇" },
    { s: "A snail moves by hopping.", a: false, why: "A snail moves slowly along the ground. It crawls.", pic: "🐌" },
    { s: "Bird Paradise is the place to see sharks.", a: false, why: "Bird Paradise has birds. We see sharks at S.E.A. Aquarium.", pic: "🦈" },
    { s: "A hen eats both plants and small animals like worms.", a: true, why: "A hen eats grain from plants and also worms and insects.", pic: "🐔" },
    { s: "We should wash our hands after touching pets.", a: true, why: "Washing our hands keeps us clean and healthy.", pic: "🐰🧼" },
    { s: "An earthworm is covered with scales.", a: false, why: "An earthworm has smooth, wet skin.", pic: "🪱" }
  ],
  sort: [
    { title: "Does the baby hatch from an egg, or is it born from its mother?", groups: ["Hatches from an egg 🥚", "Born from its mother"], items: [["chick", 0], ["duckling", 0], ["baby turtle", 0], ["baby crocodile", 0], ["puppy", 1], ["kitten", 1], ["calf", 1], ["baby elephant", 1]] },
    { title: "What covers its body?", groups: ["Fur", "Feathers", "Scales"], items: [["dog 🐕", 0], ["rabbit 🐰", 0], ["cat 🐱", 0], ["parrot 🦜", 1], ["penguin 🐧", 1], ["owl 🦉", 1], ["goldfish 🐠", 2], ["snake 🐍", 2]] },
    { title: "Where does it live?", groups: ["On land", "In water", "In trees"], items: [["camel 🐫", 0], ["elephant 🐘", 0], ["cow 🐄", 0], ["shark 🦈", 1], ["goldfish 🐠", 1], ["jellyfish 🪼", 1], ["orangutan 🦧", 2], ["squirrel 🐿️", 2]] },
    { title: "What does it eat?", groups: ["Only plants", "Only other animals", "Both"], items: [["cow 🐄", 0], ["goat 🐐", 0], ["giraffe 🦒", 0], ["tiger 🐯", 1], ["shark 🦈", 1], ["eagle 🦅", 1], ["hen 🐔", 2], ["bear 🐻", 2]] }
  ]
};
