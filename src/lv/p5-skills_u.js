window.LBU = window.LBU || {};
LBU["p5-skills"] = {
  glossary: [
    { t: "Aim", d: "What an experiment sets out to find out. It links the variable changed to the variable measured, e.g. ‘To find out how the temperature of the water affects the time taken for an ice cube to melt.’" },
    { t: "Variable changed", d: "The one variable that the experimenter changes on purpose from one set-up to the next, e.g. the temperature of the surroundings." },
    { t: "Variable measured", d: "The result that is measured, counted or observed in each set-up to see the effect of the variable changed, e.g. the volume of water left after 3 hours." },
    { t: "Variables kept the same", d: "All the other variables that could affect the result. They are kept the same in every set-up so that only the variable changed affects the variable measured." },
    { t: "Fair test", d: "An experiment in which the set-ups being compared differ only in the variable changed, so any difference in the results can be linked to that variable." },
    { t: "Control set-up", d: "A set-up that is identical to the experimental set-up except that the variable being tested is absent or not changed. It is used for comparison." },
    { t: "Hypothesis", d: "A statement, which can be tested, of how the variable changed is expected to affect the variable measured, e.g. ‘The higher the temperature, the faster water evaporates.’" },
    { t: "Reliable results", d: "Results that are similar each time the experiment is repeated. Repeating at least three times and finding the average, or using more samples, makes results more reliable." },
    { t: "Accurate measurement", d: "A reading that is close to the true value, obtained by using a suitable instrument with small enough divisions and reading it correctly, e.g. at eye level." },
    { t: "Anomalous result", d: "A reading that does not fit the pattern of the other results, often caused by a measuring mistake or by a variable that was not kept the same." },
    { t: "Inference", d: "A reasoned explanation of what was observed, based on the evidence and science knowledge, e.g. ‘The steel spoon conducts electricity’ because the bulb lit up." },
    { t: "Conclusion", d: "A statement of what the results show about how the variable changed affects the variable measured, only for the conditions and range of values tested." }
  ],
  lessons: [
    {
      h: "How to decide whether results support a hypothesis",
      concept: "A hypothesis predicts a direction: ‘the more X, the more (or less) Y’. To judge it, check the results across the WHOLE range tested, not just the first two values. Then give a clear verdict, ‘supports’, ‘does not support’ or ‘supports only up to …’, and quote the data that shows it. A hypothesis that is not supported is still a useful finding.",
      example: {
        q: "Mei Ling’s hypothesis is ‘The more layers of cloth wrapped around a cup, the more slowly the hot water in it loses heat.’ She poured 200 ml of water at 80 °C into identical cups wrapped with 0 to 4 layers of the same cloth and left them in the same room. After 20 minutes, she measured the temperature of the water. Study the graph. Do her results support her hypothesis? Use the results to explain. [2]",
        fig: { type: "bar", xl: "Number of layers of cloth", yl: "Temperature after 20 min (°C)", bars: [["0", 45], ["1", 52], ["2", 58], ["3", 61], ["4", 61]] },
        marks: 2,
        think: [
          "Step 1: Turn the hypothesis into a pattern to look for: more layers → water loses heat more slowly → a HIGHER temperature after 20 minutes.",
          "Step 2: Check each step of the data: 0 → 1 → 2 → 3 layers, the temperature rises from 45 °C to 52 °C, 58 °C and 61 °C. This part fits.",
          "Step 3: Check the end of the range: at 4 layers the temperature is still 61 °C, the same as at 3 layers, so the extra layer made no difference that she could measure.",
          "Step 4: Give a verdict with a limit, then quote the numbers as evidence."
        ],
        answer: "The results support her hypothesis only from 0 to 3 layers. As the number of layers increased from 0 to 3, the temperature after 20 minutes increased from 45 °C to 61 °C, so the water lost heat more slowly. However, at 4 layers the temperature was 61 °C, the same as at 3 layers."
      },
      tip: "Never just write ‘yes’ or ‘no’: write ‘supports / does not support / supports only up to …’ and quote the numbers.",
      try: {
        q: "Arjun’s hypothesis is ‘The longer a pupil skips, the higher the pulse rate.’ He measured his pulse rate after skipping for different lengths of time, resting fully between tests. Which statement about his results is correct?",
        tbl: [["Time spent skipping (min)", "1", "2", "3", "4", "5"], ["Pulse rate (beats per minute)", "110", "125", "136", "136", "136"]],
        o: ["The results support the hypothesis for the whole range tested.", "The results support the hypothesis only up to 3 minutes of skipping.", "The results do not support the hypothesis at any point tested.", "The results support the hypothesis only from 3 to 5 minutes of skipping."],
        a: 1,
        why: "From 1 to 3 minutes the pulse rate rose from 110 to 136 beats per minute, which fits the hypothesis. From 3 to 5 minutes it stayed at 136, so skipping longer did not raise it further: the support stops at 3 minutes."
      }
    },
    {
      h: "How to suggest an improvement: fairer, more reliable or more accurate?",
      concept: "‘Suggest an improvement’ questions name the kind of improvement they want, and each kind has its own fix. FAIRER: change only one variable and keep every other variable the same. MORE RELIABLE: repeat at least three times and find the average, or use more samples. MORE ACCURATE: use a better instrument or method, e.g. a stopwatch instead of a wall clock, smaller divisions, reading at eye level, timing from the right moment. Write the change AND why it helps.",
      example: {
        q: "Hui Min wanted to find out if the temperature of water affects how long an ice cube takes to melt. She set up A and B as shown and used the classroom wall clock to note roughly when each ice cube ‘looked melted’.\n(a) Suggest one change to make her test fair. [1]\n(b) Suggest one change to make her results more reliable. [1]\n(c) Suggest one change to make her timing more accurate. [1]",
        fig: { type: "setups", items: [{ label: "A", icon: "beaker", lines: ["100 ml of water", "Water at 30 °C", "1 ice cube"] }, { label: "B", icon: "beaker", lines: ["150 ml of water", "Water at 50 °C", "1 ice cube"] }] },
        marks: 3,
        think: [
          "Step 1: Find the variable changed: the temperature of the water. Now spot what else differs: the volume of water (100 ml and 150 ml). That makes the test unfair.",
          "Step 2: Reliability is about how many results she has. One ice cube at each temperature means one odd result could mislead her.",
          "Step 3: Accuracy is about the measurement itself. A wall clock and ‘looked melted’ are rough; a stopwatch started when the ice goes in and stopped when it has completely melted is precise.",
          "Step 4: Match each fix to the word in the question, and add the reason."
        ],
        answer: "(a) Use the same volume of water, e.g. 100 ml, in both beakers, so that only the temperature of the water affects the time taken for the ice cube to melt. (b) Repeat the experiment at least three times at each temperature and find the average time taken. (c) Use a stopwatch: start it when the ice cube is put into the water and stop it when the ice cube has completely melted."
      },
      tip: "Match the word: fair → keep the other variables the same; reliable → repeat and average; accurate → better instrument or method.",
      try: {
        q: "Siti is testing if the colour of a cloth affects how fast it dries. Which suggestion would make her results more RELIABLE?",
        o: ["Use cloths of the same size and the same material.", "Weigh the cloths on a more precise electronic balance.", "Repeat the test three times and find the average time.", "Hang all the cloths at the same spot at the same time."],
        a: 2,
        why: "Repeating and finding the average makes results more reliable, because one odd result affects the conclusion less. Same size and same spot make the test fairer, and a more precise balance makes each reading more accurate."
      }
    }
  ],
  flash: [
    { f: "Write the aim of an experiment (the pattern)", b: "‘To find out how [variable changed] affects [variable measured]’, e.g. ‘To find out how the exposed surface area affects the rate of evaporation of water.’" },
    { f: "On a line graph, which axis shows the variable measured?", b: "The vertical (y) axis. The variable changed goes on the horizontal (x) axis. Label each axis with the variable and its unit." },
    { f: "How do you calculate the average of repeated readings?", b: "Leave out any anomaly, add up the other readings, then divide by the number of readings added, e.g. (20 + 22 + 21) ÷ 3 = 21 s." },
    { f: "18 beats counted in 15 seconds. What is the pulse rate?", b: "18 × 4 = 72 beats per minute. Always give a rate with its unit, e.g. ‘beats per minute’." },
    { f: "Why are the set-ups placed side by side in the same place?", b: "So that they have the same surrounding conditions, such as temperature, amount of light and wind, and only the variable changed affects the result." },
    { f: "The results do not match the hypothesis. What do you write?", b: "‘The results do not support the hypothesis’, then quote the data that shows this. The experiment is still useful: it shows the hypothesis was not correct." },
    { f: "How do you describe a graph that rises and then levels off?", b: "‘As [X] increases, [Y] increases until [value], after which [Y] stays the same.’ Describe each part of the pattern and give the value where it changes." },
    { f: "Why use a data logger instead of reading a thermometer?", b: "It takes readings automatically at fixed time intervals over a long period, even when no one is there, so no readings are missed. It can show the results as a graph." },
    { f: "‘Describe’ vs ‘explain’ in a question", b: "Describe: state what happened or the pattern, using the data. Explain: give the science reason WHY it happened, using the keywords." },
    { f: "How do you write a 2-mark ‘suggest an improvement’ answer?", b: "State the change AND why it helps, e.g. ‘Use 10 seedlings in each set-up instead of 1, so that the results are more reliable.’" },
    { f: "What goes in a column heading of a results table?", b: "The name of the variable with its unit in brackets, e.g. ‘Volume of water left (ml)’. Then only numbers are written in that column." },
    { f: "How do you spot the variable changed in a results table?", b: "It is usually the first column: the values the experimenter chose before starting (e.g. 20 °C, 30 °C, 40 °C). The variable measured is the result recorded." }
  ],
  mcq: [
    {
      q: "Mrs Goh measured the volume of water lost in 6 hours by leafy shoots of four different plants. Each shoot stood in water with a layer of oil on top. Study the graph. Which shoot lost the LEAST water?",
      fig: { type: "bar", xl: "Plant", yl: "Volume of water lost in 6 h (ml)", bars: [["Hibiscus", 18], ["Bougainvillea", 9], ["Money plant", 4], ["Pandan", 12]] },
      o: ["Hibiscus", "Bougainvillea", "Money plant", "Pandan"],
      a: 2,
      why: "The money plant shoot has the shortest bar, 4 ml. Hibiscus has the tallest bar, so it lost the MOST water, not the least.",
      lvl: 1
    },
    {
      q: "Devi wants to find out how the mass of fertiliser given each week affects the number of flowers on her orchid plants. What is the variable measured?",
      o: ["The number of flowers on each plant", "The mass of fertiliser given each week", "The type of orchid plant used", "The size of the pot used"],
      a: 0,
      why: "The variable measured is the result she counts: the number of flowers. The mass of fertiliser is the variable changed, and the type of plant and pot size must be kept the same.",
      lvl: 1
    },
    {
      q: "Ben knows that the larger the exposed surface area of water, the faster it evaporates. He poured 100 ml of water into each container shown and left them side by side in his classroom. Predict which container will have the LEAST water left after two days.",
      fig: { type: "setups", items: [{ label: "A", icon: "jar", lines: ["100 ml of water", "Surface area: 10 cm²"] }, { label: "B", icon: "beaker", lines: ["100 ml of water", "Surface area: 40 cm²"] }, { label: "C", icon: "dish", lines: ["100 ml of water", "Surface area: 80 cm²"] }, { label: "D", icon: "plate", lines: ["100 ml of water", "Surface area: 200 cm²"] }] },
      o: ["A", "B", "C", "D"],
      a: 3,
      why: "D has the largest exposed surface area (200 cm²), so water evaporates from it the fastest and the least water is left. A, with the smallest area, will have the most water left.",
      lvl: 1
    },
    {
      q: "Pupils used a data logger with a temperature sensor to record the air temperature in their classroom every hour. Study the graph. At which of these times was a temperature of 30 °C first recorded?",
      fig: { type: "line", xl: "Time", yl: "Air temperature (°C)", pts: [["7 am", 26], ["8 am", 27], ["9 am", 28], ["10 am", 30], ["11 am", 31], ["12 pm", 32]] },
      o: ["9 am", "10 am", "11 am", "12 pm"],
      a: 1,
      why: "The 10 am reading is the first one at 30 °C; the reading before it (9 am) is only 28 °C. At 11 am and 12 pm the temperature was already above 30 °C.",
      lvl: 1
    },
    {
      q: "Jamie wants to find out if the colour of a cloth affects how fast it dries. She used cloths of the same size and material, wetted them and hung them up at the same time, as shown. Which two set-ups should she compare?",
      fig: { type: "setups", items: [{ label: "A", icon: "box", lines: ["Black cloth", "In the sun", "20 ml of water"] }, { label: "B", icon: "box", lines: ["White cloth", "In the shade", "20 ml of water"] }, { label: "C", icon: "box", lines: ["White cloth", "In the sun", "20 ml of water"] }, { label: "D", icon: "box", lines: ["Black cloth", "In the sun", "30 ml of water"] }] },
      o: ["A and B", "B and C", "A and C", "C and D"],
      a: 2,
      why: "A and C differ only in colour. A and B also differ in place, B and C differ only in place (not colour), and C and D differ in both colour and volume of water.",
      lvl: 2
    },
    {
      q: "Mdm Tan runs a drinks stall at a hawker centre. She poured 200 ml of kopi at 90 °C into four cups of the same size made of ceramic, paper, glass and metal, and measured the temperature of the kopi in each after 15 minutes. What is she trying to find out?",
      o: ["How the volume of kopi affects how fast it loses heat", "How the starting temperature of kopi affects how fast it loses heat", "How the size of the cup affects how fast the kopi loses heat", "How the material of the cup affects how fast the kopi loses heat"],
      a: 3,
      why: "The only thing she changed is the material of the cup; the volume, starting temperature and cup size were all kept the same.",
      lvl: 2
    },
    {
      q: "Wen put the same mass of yeast and 100 ml of warm water into four identical bottles, then added a different mass of sugar to each. She stretched a balloon over each bottle and measured how much the circumference of the balloon increased after 30 minutes. Which statement describes her results?",
      tbl: [["Mass of sugar (g)", "Increase in circumference of balloon (cm)"], ["0", "0"], ["5", "6"], ["10", "11"], ["15", "15"]],
      o: ["The more sugar added, the more the balloon inflated.", "The more sugar added, the less the balloon inflated.", "The more yeast added, the more the balloon inflated.", "The balloon inflated by the same amount each time."],
      a: 0,
      why: "As the sugar increased from 0 g to 15 g, the increase in circumference rose from 0 cm to 15 cm. The mass of yeast was kept the same, so no statement about ‘more yeast’ can be made.",
      lvl: 2
    },
    {
      q: "In the toilet at an MRT station, Aqil timed how long his wet hands took to dry in four different ways. Each time, he wetted his hands with the same volume of water. Which statement is supported by his results?",
      tbl: [["Method", "Time taken to dry (s)"], ["Hands held still in the air", "120"], ["Hands waved in the air", "60"], ["Hand dryer, cool air", "35"], ["Hand dryer, warm air", "20"]],
      o: ["Moving air did not affect how fast his hands dried.", "Warm moving air dried his hands the fastest.", "Cool moving air dried his hands faster than warm air.", "His hands dried the fastest when held still."],
      a: 1,
      why: "Warm air from the dryer took the shortest time (20 s). Holding hands still took the longest (120 s), so moving air DID help, and cool air (35 s) was slower than warm air.",
      lvl: 2
    },
    {
      q: "Ling wants to find out how the speed of a fan affects how fast a wet towel dries. Which of these could she use as the variable measured?\nA: The time taken for the towel to dry completely\nB: The mass of the towel after 1 hour\nC: The speed of the fan used for each towel",
      o: ["A only", "A and B only", "A and C only", "A, B and C"],
      a: 1,
      why: "A and B are both results she can measure that show how fast the towel dries (a lighter towel after 1 hour has lost more water). C is the variable changed, not the variable measured.",
      lvl: 2
    },
    {
      q: "Pupils used a data logger to record the temperature of the air inside a car parked in an open-air car park on a sunny day. Study the graph. During which period did the temperature rise the fastest?",
      fig: { type: "line", xl: "Time", yl: "Air temperature in car (°C)", pts: [["9 am", 30], ["10 am", 35], ["11 am", 41], ["12 pm", 46], ["1 pm", 48], ["2 pm", 49]] },
      o: ["9 am to 10 am", "11 am to 12 pm", "10 am to 11 am", "1 pm to 2 pm"],
      a: 2,
      why: "Each period is one hour long. The rises are 5 °C, 6 °C, 5 °C, 2 °C and 1 °C, so the largest rise in one hour (6 °C) was from 10 am to 11 am.",
      lvl: 2
    },
    {
      q: "Joy’s hypothesis is ‘The darker the colour of a cloth, the faster it dries in the sun.’ She tested identical wet cloths that differed only in colour. Which set of results would NOT support her hypothesis?",
      o: ["Black: 30 min; grey: 40 min; white: 50 min", "Black: 25 min; grey: 35 min; white: 45 min", "Black: 35 min; grey: 40 min; white: 55 min", "Black: 50 min; grey: 40 min; white: 30 min"],
      a: 3,
      why: "If darker cloths dry faster, black should take the shortest time and white the longest. Only the last set shows the opposite: black took the longest time.",
      lvl: 2
    },
    {
      q: "Wei Ling’s hypothesis is ‘The larger the total leaf area of a shoot, the more water it loses.’ She stood three leafy shoots of the same kind of plant in water with a layer of oil on top, in the same place, for 6 hours. Study her results. Which statement is correct?",
      tbl: [["Shoot", "Total leaf area (cm²)", "Number of leaves", "Water lost in 6 h (ml)"], ["P", "100", "10", "8"], ["Q", "200", "5", "15"], ["R", "300", "15", "22"]],
      o: ["The results agree with her hypothesis, but the test is unfair as the number of leaves also differs.", "The results disagree with her hypothesis, as shoot Q has the fewest leaves but lost more than P.", "The test is fair, as the total leaf area is the only variable that differs between the shoots.", "The results show that the number of leaves does not affect the volume of water lost by a shoot."],
      a: 0,
      why: "Water lost rises with leaf area (8, 15, 22 ml), which agrees with the hypothesis. But the number of leaves was not kept the same, so the test is not fair and no conclusion about the number of leaves can be drawn.",
      lvl: 3
    },
    {
      q: "An ice kachang seller timed how long identical blocks of ice took to melt completely under a new cover. He did the test four times. Study the results. What is the best value to report as the average time?",
      tbl: [["Trial", "1", "2", "3", "4"], ["Time to melt completely (min)", "42", "44", "61", "43"]],
      o: ["47.5 min", "61 min", "43 min", "44 min"],
      a: 2,
      why: "Trial 3 (61 min) does not fit the pattern, so it is an anomaly and is left out: (42 + 44 + 43) ÷ 3 = 43 min. 47.5 min wrongly includes the anomaly.",
      lvl: 3
    },
    {
      q: "Ravi shone a torch through different numbers of layers of tracing paper onto a light sensor, keeping the torch and the sensor in the same places. Study the graph. Which conclusion can be drawn from his results?",
      fig: { type: "bar", xl: "Number of layers of tracing paper", yl: "Amount of light detected (lux)", bars: [["1", 800], ["2", 560], ["3", 390], ["4", 270]] },
      o: ["Tracing paper is an opaque material.", "Six layers of tracing paper will block all the light.", "All materials let less light through when more layers are used.", "The more layers of tracing paper, the less light reached the sensor."],
      a: 3,
      why: "From 1 to 4 layers the light detected fell from 800 to 270 lux. Light still passed through, so it is not opaque; six layers were not tested; and only tracing paper was tested, so ‘all materials’ goes beyond the data.",
      lvl: 3
    },
    {
      q: "Gopal is testing how the temperature of the surroundings affects the volume of water that evaporates from a dish in 4 hours. Which statements about improving his experiment are correct?\nA: Repeating the test three times at each temperature and finding the average makes his results more reliable.\nB: Measuring the water left with a measuring cylinder with smaller divisions makes his readings more accurate.\nC: Using more dishes at each temperature makes his test fairer.",
      o: ["A and B only", "A and C only", "B and C only", "A, B and C"],
      a: 0,
      why: "A and B are correct. C is wrong: more dishes make the results more reliable, not fairer. A test is fair only when every variable except the temperature is kept the same.",
      lvl: 3
    },
    {
      q: "Mr Rahman hangs his laundry on bamboo poles outside his HDB flat. He recorded how long the same load of laundry took to dry on four days. Based only on his records, which statement is correct?",
      tbl: [["Day", "Weather", "Wind", "Time to dry (h)"], ["1", "Sunny", "Windy", "2"], ["2", "Sunny", "No wind", "3"], ["3", "Cloudy", "Windy", "4"], ["4", "Cloudy", "No wind", "6"]],
      o: ["The laundry dried the fastest on a cloudy, windy day.", "Wind shortened the drying time on both sunny and cloudy days.", "Wind shortened the drying time on sunny days but not on cloudy days.", "Sunshine had a smaller effect on the drying time than wind."],
      a: 1,
      why: "Sunny: windy 2 h vs no wind 3 h; cloudy: windy 4 h vs no wind 6 h, so wind helped on both. Sunshine saved 2–3 h but wind saved only 1–2 h, so sunshine had the LARGER effect, and the fastest day was sunny and windy.",
      lvl: 3
    },
    {
      q: "Mrs Ng switched on a dehumidifier in her bedroom with the windows and door closed. The dehumidifier collects water by cooling the air so that water vapour condenses. The graph shows the total volume of water it had collected. Which statement is correct?",
      fig: { type: "line", xl: "Time (h)", yl: "Total volume of water collected (ml)", pts: [["0", 0], ["1", 150], ["2", 280], ["3", 380], ["4", 450], ["5", 480]] },
      o: ["It collected the most water between hour 4 and hour 5.", "The air in the room held more water vapour as time went on.", "It stopped collecting water after hour 3.", "It collected water more slowly as time went on."],
      a: 3,
      why: "Each hour it collected 150, 130, 100, 70 and then 30 ml, so the line becomes less steep. As water vapour was removed, the air held LESS of it; the line still rises after hour 3, so collecting had not stopped.",
      lvl: 3
    },
    {
      q: "Hakim’s hypothesis is ‘The higher the temperature, the faster green bean seeds germinate.’ He placed 2 seeds on moist cotton wool at each temperature and recorded the number of days they took to germinate. Study the results. Which statements are correct?\nA: The results support his hypothesis only from 15 °C to 35 °C.\nB: The results show that the seeds germinate the fastest at 40 °C.\nC: Using 20 seeds at each temperature would make the results more reliable.",
      tbl: [["Temperature (°C)", "15", "25", "35", "45"], ["Days taken to germinate", "9", "5", "3", "No seeds germinated"]],
      o: ["A only", "A and B only", "A and C only", "B and C only"],
      a: 2,
      why: "A: from 15 °C to 35 °C the time fell from 9 to 3 days, but at 45 °C no seeds germinated, so support stops at 35 °C. B: 40 °C was never tested. C: 2 seeds per set-up is too few, so more seeds give more reliable results.",
      lvl: 4
    },
    {
      q: "Zara hung four towels as shown. Each towel was the same size, was soaked with 50 ml of water and was hung up at the same time. Which questions can she answer FAIRLY using only these set-ups?\nI: Does the material of a towel affect how fast it dries?\nII: Does wind affect how fast a towel dries?\nIII: Does sunlight affect how fast a towel dries?",
      fig: { type: "setups", items: [{ label: "A", icon: "box", lines: ["Nylon towel", "In the sun", "Fan on"] }, { label: "B", icon: "box", lines: ["Cotton towel", "In the shade", "Fan on"] }, { label: "C", icon: "box", lines: ["Nylon towel", "In the shade", "Fan off"] }, { label: "D", icon: "box", lines: ["Cotton towel", "In the shade", "Fan off"] }] },
      o: ["I only", "I and II only", "II and III only", "I, II and III"],
      a: 1,
      why: "I: compare C and D (only the material differs). II: compare B and D (only the fan differs). III needs two towels that differ only in sun or shade, but A is the only towel in the sun and it differs from every other towel in two or more ways.",
      lvl: 4
    },
    {
      q: "Kelvin left a dish of water at the void deck of his HDB block and recorded the total volume of water that had evaporated. He took readings at 0, 1, 2, 4 and 8 hours. Study the graph carefully. Which statement is correct?",
      fig: { type: "line", xl: "Time (h)", yl: "Total volume evaporated (ml)", pts: [["0", 0], ["1", 5], ["2", 10], ["4", 20], ["8", 40]] },
      o: ["Water evaporated at a steady rate of 5 ml per hour.", "Water evaporated faster and faster as time went on.", "Water evaporated the fastest from hour 0 to hour 1.", "Water evaporated the fastest from hour 4 to hour 8."],
      a: 0,
      why: "The time gaps are not equal: 5 ml in 1 h, 10 ml in 2 h and 20 ml in 4 h are all 5 ml per hour. The last part of the line only looks steeper because 4 hours are squeezed into the same space as 1 hour.",
      lvl: 4
    }
  ],
  oe: [
    {
      q: "Raj planted 10 green bean seeds at each of four depths in identical pots of the same soil. He watered the pots equally and kept them side by side. Study his results.\n(a) State the variable changed. [1]\n(b) Describe the relationship between the depth of planting and the number of days taken for the first seedling to appear. [1]\n(c) No seedlings appeared in the 7 cm pot within 14 days. Raj concluded that seeds planted 7 cm deep cannot germinate. Explain why his conclusion may not be correct. [1]\n(d) Suggest one way to make his results more reliable. [1]",
      tbl: [["Depth of planting (cm)", "1", "3", "5", "7"], ["Days taken for first seedling to appear", "4", "6", "8", "–"], ["Number of seedlings after 14 days", "9", "9", "7", "0"]],
      marks: 4,
      kw: [["depth at which", "depth of planting", "planting depth", "depth of the seed", "depth the seed", "how deep"], ["longer", "more days", "shallower"], ["under the soil", "below the soil", "beneath the soil", "underground", "cannot be seen", "could not be seen", "more than 14", "after 14", "more time", "wait", "surface"], ["repeat", "more seeds", "more pots"]],
      model: "(a) The depth at which the seeds were planted. (b) The deeper the seeds were planted, the longer the time taken for the first seedling to appear. (c) The seeds may have germinated under the soil, but the seedlings had not yet grown above the surface by Day 14, so they could not be seen. (d) Repeat the experiment with more pots of 10 seeds at each depth and find the average."
    },
    {
      q: "Mr Lee, a drinks stall owner at a hawker centre, put 500 g of ice into each of three boxes of the same size and left them side by side at his stall. After 3 hours, he measured the mass of ice left in each box. Study his results.\n(a) Which two boxes should he compare to find out which material keeps ice from melting for longer? [1]\n(b) Based on your answer in (a), which material is better for keeping ice? Explain why in terms of heat. [2]\n(c) Explain why box R cannot be compared fairly with box P. [1]",
      tbl: [["Box", "Material", "Lid", "Mass of ice left after 3 h (g)"], ["P", "Styrofoam", "Yes", "420"], ["Q", "Plastic", "Yes", "300"], ["R", "Metal", "No", "150"]],
      marks: 4,
      kw: [["p and q", "q and p", "p, q", "p & q"], ["styrofoam"], ["more slowly", "slower", "less heat", "poorer conductor", "poor conductor"], ["lid"]],
      model: "(a) Boxes P and Q. (b) Styrofoam. More ice was left in box P (420 g) than in box Q (300 g). Styrofoam is a poorer conductor of heat than plastic, so the ice gained heat from the warmer surrounding air more slowly and melted more slowly. (c) Box R has no lid while box P has a lid, so two variables, the material and the lid, are different."
    },
    {
      q: "Mdm Siti wanted to find out if the speed of a fan affects how fast a wet floor dries. She poured 20 ml of water onto each of three identical tiles, A, B and C, and placed each tile 1 m in front of an identical fan, as shown.\n(a) Write a hypothesis she could test. [1]\n(b) Why must the tiles be identical? [1]\n(c) Tile A dried in 18 min, tile B in 12 min and tile C in 8 min. Do her results support your hypothesis in (a)? Use the results to explain. [2]",
      fig: { type: "setups", items: [{ label: "A", icon: "plate", lines: ["Fan speed 1", "20 ml of water", "1 m from fan"] }, { label: "B", icon: "plate", lines: ["Fan speed 2", "20 ml of water", "1 m from fan"] }, { label: "C", icon: "plate", lines: ["Fan speed 3", "20 ml of water", "1 m from fan"] }] },
      marks: 4,
      kw: [["higher the fan speed", "higher the speed", "faster the fan", "faster the speed", "greater the fan speed", "greater the speed", "stronger the wind"], ["only the speed", "only the fan speed", "only the variable"], ["support"], ["8 min", "tile c", "c dried", "shortest"]],
      model: "(a) The higher the speed of the fan, the shorter the time taken for the wet tile to dry. (b) So that only the speed of the fan affects the time taken for the tile to dry. (c) Yes, the results support the hypothesis. Tile C, at the highest fan speed, dried in the shortest time of 8 min, while tile A, at the lowest speed, took the longest time of 18 min."
    },
    {
      q: "Farmer Tan grew brinjal plants at his farm in Lim Chu Kang. He gave groups of 10 identical plants different masses of fertiliser each week and recorded the average number of fruits per plant after 3 months. Study his results.\n(a) Describe how the number of fruits changed as the mass of fertiliser increased. [2]\n(b) Farmer Tan’s hypothesis was ‘The more fertiliser given, the more fruits a plant produces.’ Explain whether the results support his hypothesis. [1]\n(c) He says that 12 g of fertiliser per week will give the most fruits. Explain why he cannot be sure from these results. [1]",
      tbl: [["Mass of fertiliser per week (g)", "0", "5", "10", "15", "20"], ["Average number of fruits per plant", "12", "20", "26", "18", "9"]],
      marks: 4,
      x: 1,
      kw: [["increase"], ["decrease"], ["only up to", "only until", "only from 0", "partly", "not above", "not after", "not beyond", "not for all"], ["not tested", "was not tested", "did not test", "never tested", "not test"]],
      model: "(a) As the mass of fertiliser increased from 0 g to 10 g, the number of fruits increased from 12 to 26. As it increased further from 10 g to 20 g, the number of fruits decreased from 26 to 9. (b) The results support his hypothesis only up to 10 g; above 10 g, giving more fertiliser gave fewer fruits. (c) 12 g was not tested, so he does not know how many fruits 12 g gives. It may give fewer fruits than 10 g, as the number fell between 10 g and 15 g."
    }
  ],
  tf: [
    { s: "The variable measured is the variable that the experimenter decides to change.", a: false, why: "That is the variable changed. The variable measured is the result that is measured, counted or observed." },
    { s: "A hypothesis can be written as ‘The more …, the more (or less) …’, linking the variable changed to the variable measured.", a: true, why: "This form names both variables and the direction, so it can be tested, e.g. ‘The more layers of cloth, the more slowly the water cools.’" },
    { s: "Using a bigger measuring cylinder always gives a more accurate reading.", a: false, why: "Accuracy depends on small enough divisions. A 10 ml cylinder measures 6 ml more accurately than a 250 ml cylinder marked every 10 ml." },
    { s: "In a fair test of how fan speed affects drying, the distance between the fan and each cloth must be kept the same.", a: true, why: "A cloth nearer the fan meets stronger wind, so distance would also affect the drying time." },
    { s: "If readings were taken at unequal time intervals but the labels are spaced equally along the x-axis, the steepest part of the line always shows the fastest change.", a: false, why: "A part covering a longer time can look steeper without being faster. Work out the change per unit time, e.g. ml per hour, for each part." },
    { s: "Describing a result means saying what happened, while explaining it means giving the science reason why it happened.", a: true, why: "‘Describe’ needs the pattern or observation from the data; ‘explain’ needs the cause, using science keywords." },
    { s: "‘How well the plant grows’ is a precise variable measured for a plant growth experiment.", a: false, why: "It cannot be measured as it stands. A precise variable measured is, e.g., ‘the increase in height of the plant after 2 weeks (cm)’." },
    { s: "Testing a wider range of values, such as 10 °C to 50 °C instead of 20 °C to 30 °C, can show more of the pattern.", a: true, why: "A narrow range may miss where the pattern changes, e.g. where germination stops at a high temperature." },
    { s: "A hypothesis and an aim are the same thing.", a: false, why: "The aim states what is to be found out (‘To find out how X affects Y’); the hypothesis states the expected relationship (‘The more X, the more Y’)." },
    { s: "A results table should show the reading from every trial, not only the average.", a: true, why: "Recording every trial lets you spot an anomaly and check whether the repeated readings are close, i.e. reliable." }
  ]
};
