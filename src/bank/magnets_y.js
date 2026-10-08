window.BANKY = window.BANKY || {};
BANKY["magnets"] = {
  lessons: [
    {
      h: "Inferring poles from ring-magnet gaps",
      concept: "A ring magnet has one pole on its top face and the opposite pole on its bottom face. A gap between two rings means the facing faces are like poles (they repel); rings that touch have unlike poles facing (they attract). Start from the ring whose pole you know and work one ring at a time, always comparing the TOP face of the lower ring with the BOTTOM face of the ring above it.",
      example: {
        q: "Three ring magnets are placed on a wooden rod as shown. The top face of A is an N pole. B floats above A, and C touches B. State the pole on the top face of C. Explain your answer.",
        fig: { type: "rings", rings: [{ label: "A", top: "N" }, { label: "B", top: "?" }, { label: "C", top: "?" }], gaps: [true, false] },
        marks: 2,
        think: [
          "Step 1: Start with what you know: the top face of A is N.",
          "Step 2: B floats above A, so they repel and the facing faces are like poles. B’s bottom face is N, so B’s top face is S.",
          "Step 3: C touches B, so they attract and the facing faces are unlike poles. B’s top is S, so C’s bottom face is N.",
          "Step 4: The top face of C is opposite to its bottom face, so it is S. In the answer, give the reason for each step."
        ],
        answer: "S pole. B floats above A, so like poles face each other: B’s bottom face is N and its top face is S. C touches B, so unlike poles face each other: C’s bottom face is N, which makes C’s top face an S pole."
      },
      tip: "Write each face down as you go (A top N, B bottom N, B top S …) so you never skip the ‘flip’ inside a ring.",
      try: {
        q: "Three ring magnets are on a wooden rod as shown. The top face of C is an N pole. B touches A, and C floats above B. What is the pole on the top face of A?",
        fig: { type: "rings", rings: [{ label: "A", top: "?" }, { label: "B", top: "?" }, { label: "C", top: "N" }], gaps: [false, true] },
        o: ["N pole", "S pole", "It cannot be told from the diagram", "A has no pole on its top face"],
        a: 1,
        why: "C’s top is N, so C’s bottom is S. C floats above B (repel), so B’s top is also S and B’s bottom is N. B touches A (attract), so A’s top face is the unlike pole, S."
      }
    },
    {
      h: "The repulsion test: is it really a magnet?",
      concept: "A magnet attracts both other magnets and magnetic materials such as iron and steel, so attraction alone does NOT prove an object is a magnet. Bring the SAME end of the object near the N pole and then the S pole of a magnet. If that end is repelled by one of the poles, the object is a magnet; if it is attracted by both poles, it is a magnetic material, not a magnet.",
      example: {
        q: "One end of rod R was brought near the N pole of a bar magnet and was attracted. The same end of R was then brought near the S pole and was attracted again. Is R a magnet? Explain.",
        marks: 2,
        think: [
          "Step 1: Notice that the SAME end of R was tested against both poles.",
          "Step 2: If R were a magnet, that end would be either N or S, so it would be repelled by one of the poles (like poles repel).",
          "Step 3: It was attracted both times, so it has no fixed pole. It must be a magnetic material like iron or steel."
        ],
        answer: "No, R is not a magnet. The same end of R was attracted by both the N pole and the S pole. If R were a magnet, that end would have been repelled by one of the poles, because like poles repel. R is made of a magnetic material such as iron or steel."
      },
      tip: "Only repulsion proves a magnet: ‘only a magnet can repel another magnet.’",
      try: {
        q: "Which observation shows FOR SURE that object X is a magnet?",
        o: ["End 1 of X is attracted by the N pole and also by the S pole of a magnet.", "X is attracted to the S pole of a magnet.", "End 1 of X is attracted by the N pole but pushed away by the S pole of a magnet.", "X is attracted to both ends of a horseshoe magnet."],
        a: 2,
        why: "Being pushed away (repelled) by the S pole shows end 1 is an S pole, so X is a magnet. The other three are all attraction TO a magnet, and a plain iron rod would be attracted in exactly the same way, so they do not prove X is a magnet."
      }
    },
    {
      h: "Designing a fair magnet-strength test",
      concept: "To compare the strength of magnets, change ONLY the magnet. Keep the paper clips the same (same size and type), keep the method the same (same distance from the clips, same pile, same way of counting) and measure one result: the number of clips attracted, or the greatest distance at which a clip is attracted. A result from an unfair set-up cannot be compared with the others.",
      example: {
        q: "Mei compared three magnets by counting the paper clips each one picked up. Study her results. (a) Mei says magnet Q is the weakest. Explain why her conclusion may not be correct. (b) Which two magnets can be compared fairly, and which of these is stronger?",
        tbl: [["Magnet", "Type of paper clips used", "Number of clips attracted"], ["P", "Small steel clips", "14"], ["Q", "Large steel clips", "9"], ["R", "Small steel clips", "20"]],
        marks: 2,
        think: [
          "Step 1: Check what was kept the same. P and R used small clips, but Q used large clips.",
          "Step 2: Large clips are heavier, so a magnet may pick up fewer of them even if it is strong. Q’s result cannot be compared fairly.",
          "Step 3: Compare only the fair pair: P and R. R attracted more small clips (20 compared with 14), so R is stronger."
        ],
        answer: "(a) Q was tested with large paper clips while P and R were tested with small ones, so the test was not fair and Q’s result cannot be compared. (b) P and R can be compared fairly. R is stronger because it attracted more small clips (20) than P (14)."
      },
      tip: "Before comparing numbers, check every row used the same clips and the same method.",
      try: {
        q: "Hui Min wants to compare the strength of three magnets. Which method is fair?",
        o: ["Use steel clips for one magnet and a mix of steel and copper clips for the others.", "Count the clips attracted by magnet P, but measure the distance at which a clip is attracted for magnet Q.", "Hold the biggest magnet closer to the clips because it is heavier.", "Hold each magnet at the same height above the same pile of identical steel paper clips, and count the clips attracted."],
        a: 3,
        why: "Only this method keeps the clips, the height and the way of measuring the same, so the only thing that changes is the magnet. The other methods change the clips, the measurement or the distance as well."
      }
    },
    {
      h: "Explaining a use from a property of magnets",
      concept: "To explain a use, name the magnet property and link it to the job. Useful properties: magnets attract magnetic materials (iron, steel, nickel, cobalt) but not non-magnetic ones; unlike poles attract and like poles repel; magnetic force can pass through non-magnetic materials; a freely hanging magnet points north-south. Say WHICH material is attracted and WHAT that lets the object do.",
      example: {
        q: "The rubber seal around a fridge door has a magnetic strip inside it. Explain how this helps the fridge door.",
        marks: 2,
        think: [
          "Step 1: Name the property: a magnet attracts magnetic materials.",
          "Step 2: Name the magnetic material involved: the body of the fridge is made of steel.",
          "Step 3: Link to the job: the attraction pulls the door against the fridge so it stays tightly shut. The magnetic force also acts through the rubber, which is non-magnetic."
        ],
        answer: "The magnetic strip attracts the steel body of the fridge, which is a magnetic material. This pulls the door tightly against the fridge, so the door stays shut."
      },
      tip: "Always name the magnetic material being attracted: ‘attracts the STEEL body’, not just ‘it sticks’.",
      try: {
        q: "A carpenter uses a magnet on a stick to pick up steel nails that fell into a pile of wood shavings. Why does this work?",
        o: ["Magnets attract all metals, so the steel nails are pulled out.", "Steel is magnetic but wood is not, so only the nails are attracted.", "The wood shavings are too light to be picked up by the magnet.", "Magnetic force cannot pass through wood shavings, so they stay behind."],
        a: 1,
        why: "The magnet attracts the nails because steel is magnetic, and leaves the shavings because wood is non-magnetic. ‘All metals’ is wrong (copper and aluminium are not attracted), and magnetic force CAN pass through wood."
      }
    },
    {
      h: "Stroke method: predicting the new poles",
      concept: "When a steel bar is stroked many times in ONE direction with ONE pole of a magnet, the end where each stroke ENDS becomes the opposite pole to the stroking pole. Stroke with N and the finishing end becomes S; stroke with S and the finishing end becomes N. The starting end is the other pole. Then use ‘like poles repel, unlike poles attract’ to predict what the new magnet will do.",
      example: {
        q: "Steel bar XY was stroked many times from end X to end Y with the S pole of a magnet. It was then placed as shown, with end Y facing the N pole of magnet M. Predict what will happen. Explain your answer.",
        fig: { type: "magnets", items: [{ label: "Bar XY", kind: "bar", text: "X   steel   Y" }, { label: "M", poles: "NS" }], between: ["?"] },
        marks: 2,
        think: [
          "Step 1: Find where the strokes end: at Y.",
          "Step 2: The finishing end becomes the opposite pole to the stroking pole. The stroking pole is S, so Y becomes an N pole (and X becomes S).",
          "Step 3: In the diagram, Y (N) faces the N pole of M. Like poles repel."
        ],
        answer: "The bar and magnet M will repel (push each other away). Stroking from X to Y with the S pole makes Y an N pole. Y faces the N pole of M, and like poles repel."
      },
      tip: "Stroke ends at an end? That end is the OPPOSITE of the stroking pole.",
      try: {
        q: "Ahmad stroked a steel sewing needle many times from the eye to the tip with the N pole of a magnet. He then hung the needle freely from a thread. Which end of the needle will point to the north?",
        o: ["The eye", "The tip", "Neither end, because a needle cannot become a magnet", "Each end in turn, because the needle keeps spinning"],
        a: 0,
        why: "The strokes end at the tip, so the tip becomes the opposite of N: an S pole. The eye is therefore the N pole, and the N pole of a freely hanging magnet points to the north."
      }
    }
  ],
  expert: [
    {
      q: "Four ring magnets are placed on a wooden rod as shown. The top face of A is an S pole. B touches A, C floats above B, and D floats above C. Which pair of faces are BOTH N poles?",
      fig: { type: "rings", rings: [{ label: "A", top: "S" }, { label: "B", top: "?" }, { label: "C", top: "?" }, { label: "D", top: "?" }], gaps: [false, true, true] },
      o: ["The bottom face of B and the top face of C", "The top face of B and the top face of D", "The bottom face of C and the top face of D", "The top face of B and the bottom face of D"],
      a: 0,
      why: "B touches A, so B’s bottom is N and its top is S. C repels B, so C’s bottom is S and its top is N. D repels C, so D’s bottom is N and its top is S. Only the bottom of B and the top of C are both N.",
      lvl: 4
    },
    {
      q: "Three ring magnets float apart on a wooden rod as shown. None of the poles are labelled. Which statement MUST be true?",
      fig: { type: "rings", rings: [{ label: "A", top: "?" }, { label: "B", top: "?" }, { label: "C", top: "?" }], gaps: [true, true] },
      o: ["The top face of A is an N pole.", "The top faces of A and B are the same pole.", "The bottom face of B is the opposite pole to the top face of A.", "The top faces of A and C are the same pole."],
      a: 3,
      why: "B repels A, so B’s bottom matches A’s top and B’s top is the opposite. C repels B, so C’s bottom matches B’s top and C’s top is opposite again, which brings it back to the same pole as A’s top. We cannot tell whether that pole is N or S.",
      lvl: 4
    },
    {
      q: "Three ring magnets are on a wooden rod as shown. The top face of A is an N pole. B floats above A, and C touches B. Ring C is taken off, turned upside down and put back on the rod. What will happen?",
      fig: { type: "rings", rings: [{ label: "A", top: "N" }, { label: "B", top: "?" }, { label: "C", top: "?" }], gaps: [true, false] },
      o: ["C will float above B, and B will still float above A.", "All three rings will touch.", "C will float above B, but B will drop onto A.", "C will still touch B, and B will still float above A."],
      a: 0,
      why: "At first B’s top is S and C’s bottom is N (attract). Turned over, C’s bottom becomes S, facing B’s S, so C is repelled and floats. Nothing changed between A and B, so they still repel and B still floats.",
      lvl: 4
    },
    {
      q: "Four bar magnets are placed in a row as shown. A repels B, B attracts C, and C repels D. Which magnets have their N pole on the RIGHT?",
      fig: { type: "magnets", items: [{ label: "A", poles: "NS" }, { label: "B", poles: "??" }, { label: "C", poles: "??" }, { label: "D", poles: "??" }], between: ["repel", "attract", "repel"] },
      o: ["B only", "B and C only", "C and D only", "B, C and D"],
      a: 1,
      why: "A’s right end is S; A repels B, so B’s left is S and its right is N. B attracts C, so C’s left is S and its right is N. C repels D, so D’s left is N and its right is S. Only B and C have N on the right.",
      lvl: 4
    },
    {
      q: "Rod X is placed between magnets A and B as shown. The left end of X is attracted to A, and the right end of X is attracted to B. What can you conclude about X?",
      fig: { type: "magnets", items: [{ label: "A", poles: "NS" }, { label: "X", kind: "bar", text: "rod X" }, { label: "B", poles: "SN" }], between: ["attract", "attract"] },
      o: ["X is a magnet with its N pole on the left and S pole on the right.", "X is a magnet with its S pole on the left and N pole on the right.", "X is not a magnet, but it is made of a magnetic material such as iron.", "X is made of a non-magnetic material such as copper or aluminium."],
      a: 2,
      why: "Both ends of X are facing S poles and both are attracted. If X were a magnet, one end would be S and would be repelled by the S pole next to it, so X cannot be a magnet. It is attracted, so it must be a magnetic material, not copper.",
      lvl: 4
    },
    {
      q: "A sheet of each material, all 1 mm thick, was placed in turn between a magnet and a pile of paper clips. The graph shows the number of clips attracted each time. Which conclusion is correct?",
      fig: { type: "bar", xl: "Sheet between magnet and clips", yl: "Number of paper clips attracted", bars: [["None", 20], ["Paper", 20], ["Plastic", 20], ["Steel", 2]] },
      o: ["Paper and plastic did not reduce the magnetic force, but the steel sheet, a magnetic material, did.", "Magnetic force cannot pass through any material, even a thin sheet of paper.", "The plastic sheet made the magnet weaker, so fewer clips were attracted.", "The steel sheet must have been thicker than the others, so fewer clips were attracted."],
      a: 0,
      why: "Paper and plastic gave the same result as no sheet, so the force passed through these non-magnetic materials without any loss. Steel is magnetic, so the magnet attracted the steel sheet itself and far fewer clips were attracted. All the sheets were 1 mm thick, so thickness is not the reason.",
      lvl: 4
    },
    {
      q: "Jun dropped a magnet onto the floor many times. After every 5 drops, he counted the paper clips it could pick up. Study the graph. Which is the best prediction for the number of clips after 25 drops?",
      fig: { type: "line", xl: "Number of times the magnet was dropped", yl: "Number of paper clips attracted", pts: [["0", 20], ["5", 17], ["10", 13], ["15", 10], ["20", 8]] },
      o: ["About 20 clips, because the magnet will recover.", "About 10 clips, the same as after 15 drops.", "About 6 clips, because dropping keeps making the magnet weaker.", "About 25 clips, because it has been dropped 25 times."],
      a: 2,
      why: "The number of clips falls after every 5 drops, so dropping makes the magnet lose some magnetism. After 25 drops it should pick up a little fewer than 8 clips, so about 6 fits the trend; a magnet does not recover by itself.",
      lvl: 4
    },
    {
      q: "Study the classification chart. Which set of objects is correct?",
      fig: { type: "flow", root: "Objects", node: { q: "Attracted by a magnet?", yes: { q: "Can repel a magnet?", yes: "P", no: "Q" }, no: { q: "Is it a metal?", yes: "R", no: "S" } } },
      o: ["P: iron nail; Q: steel paper clip; R: aluminium can; S: wooden block", "P: fridge magnet; Q: aluminium can; R: copper wire; S: glass marble", "P: compass needle; Q: steel pin; R: rubber band; S: paper", "P: fridge magnet; Q: steel spoon; R: copper wire; S: plastic ruler"],
      a: 3,
      why: "A fridge magnet can repel a magnet (P), a steel spoon is magnetic but not a magnet (Q), copper is a non-magnetic metal (R) and plastic is a non-magnetic non-metal (S). The iron nail cannot repel a magnet, aluminium is not attracted, and rubber is not a metal.",
      lvl: 4
    },
    {
      q: "A compass is placed near bar magnet M as shown. The end of the compass needle nearest to M turns to point towards M. When the compass is taken far away from all magnets, in which direction will this same end of the needle point?",
      fig: { type: "magnets", items: [{ label: "M", poles: "SN" }, { label: "needle", poles: "??" }], between: ["attract"] },
      o: ["North", "South", "East", "Towards the nearest wall"],
      a: 1,
      why: "The needle is a small magnet. Its end is attracted to M’s N pole (on M’s right), so that end is an S pole (unlike poles attract). Far from other magnets, the S pole of a freely turning magnet points to the south.",
      lvl: 4
    },
    {
      q: "A cupboard door must stay shut using a magnetic catch: one part is fixed to the door and one part to the cupboard frame. Which pair of parts will hold the door shut?",
      o: ["A magnet on the frame and an aluminium plate on the door", "A steel plate on the frame and a steel plate on the door", "A magnet on the frame and a steel plate on the door", "A magnet on the frame and a magnet on the door, with like poles facing"],
      a: 2,
      why: "A magnet attracts steel, a magnetic material, so the door is pulled shut. Aluminium is not magnetic, two plain steel plates do not attract each other, and like poles would repel and push the door open.",
      lvl: 4
    },
    {
      q: "Siti measured the greatest distance at which each magnet could attract a steel pin. She did the test three times. Magnet P is the biggest and Q is the smallest. Which statement is best supported by the results?",
      tbl: [["Magnet", "Test 1 (cm)", "Test 2 (cm)", "Test 3 (cm)"], ["P (big)", "4", "4", "5"], ["Q (small)", "7", "7", "6"], ["R (medium)", "5", "9", "5"]],
      o: ["P is the strongest because it is the biggest of the three magnets.", "R is the strongest because it once attracted the pin from as far as 9 cm.", "All three magnets are equally strong because each attracted the pin.", "Q is the strongest, and R’s 9 cm result should be checked by repeating it."],
      a: 3,
      why: "Q attracted the pin from the greatest distance in a steady way (6 to 7 cm), so it is the strongest even though it is the smallest. R’s 9 cm does not match its other two results (5 cm), so it is probably a mistake and should be repeated, not used to call R the strongest.",
      lvl: 4
    },
    {
      q: "Steel bar PQ was stroked many times from P to Q with the N pole of a magnet. Steel bar JK was stroked many times from J to K with the S pole of a magnet. Which ends will REPEL each other?",
      o: ["P and J", "Q and K", "P and K", "Q and the N pole of another magnet"],
      a: 2,
      why: "Strokes with N end at Q, so Q is S and P is N. Strokes with S end at K, so K is N and J is S. P (N) and K (N) are like poles and repel; P and J, Q and K, and Q with an N pole are all unlike poles, which attract.",
      lvl: 4
    }
  ],
  oex: [
    {
      q: "Three ring magnets float on a wooden rod as shown. The top face of A is an S pole. (a) What is the pole on the top face of B? (b) What is the pole on the top face of C? (c) The gap between A and B is smaller than the gap between B and C. Explain why. (d) If C is turned upside down, will it float above B or touch B?",
      fig: { type: "rings", rings: [{ label: "A", top: "S" }, { label: "B", top: "?" }, { label: "C", top: "?" }], gaps: [true, true] },
      marks: 4,
      kw: [["north", "n pole"], ["south", "s pole"], ["weight", "heavier", "two rings", "both b and c"], ["touch", "stick", "attract"]],
      model: "(a) North (N pole). B floats above A, so B’s bottom face is S like A’s top, and B’s top face is N. (b) South (S pole). C floats above B, so C’s bottom face is N and its top face is S. (c) Magnet A has to hold up the weight of both B and C, so B is pushed closer to A. (d) C will touch B. Turned over, C’s bottom face becomes S, which faces B’s N top, and unlike poles attract."
    },
    {
      q: "When rod X was placed next to magnet M as shown, rod X was pushed away. (a) Is X a magnet? (b) Explain your answer to (a). (c) What pole is at the left end of X? (d) Rod Y was attracted to both ends of M. What material could Y be made of?",
      fig: { type: "magnets", items: [{ label: "M", poles: "NS" }, { label: "X", kind: "bar", text: "rod X" }], between: ["repel"] },
      marks: 4,
      kw: [["yes", "is a magnet"], ["only a magnet", "only magnets", "repel", "pushed away"], ["south", "s pole"], ["iron", "steel", "nickel", "cobalt", "magnetic material"]],
      model: "(a) Yes, X is a magnet. (b) X was repelled by M, and only a magnet can repel another magnet; a magnetic material would only be attracted. (c) South (S pole), because it faces the S pole of M and like poles repel. (d) Iron or steel, a magnetic material that is not a magnet."
    },
    {
      q: "Siti held three magnets above a pile of steel paper clips and counted the clips each one attracted. Study her results. (a) Siti says magnet J is stronger than magnet K. Why can she not be sure? (b) Which two magnets can be compared fairly? (c) Which of these two magnets is stronger? Explain using the results.",
      tbl: [["Magnet", "Height above the clips (cm)", "Number of clips attracted"], ["J", "1", "15"], ["K", "3", "9"], ["L", "1", "11"]],
      marks: 3,
      kw: [["height", "higher", "distance", "further", "farther", "nearer", "closer"], ["j and l", "l and j"], ["more paper clips", "more clips", "15 clips"]],
      model: "(a) K was held at a different height (3 cm) from J (1 cm). K was further from the clips, so the magnetic force on the clips was weaker, which made it an unfair test. (b) J and L, because both were held 1 cm above the clips. (c) J is stronger because it attracted more clips (15 clips) than L (11 clips)."
    },
    {
      q: "Ahmad made a compass. He stroked a steel sewing needle many times from the eye to the tip with the S pole of a magnet. He then stuck the needle on a small cork floating in a bowl of water. (a) Which end of the needle became an N pole? (b) In which direction will the tip point when the cork stops turning? (c) Months later, after the needle was dropped on the floor many times, it no longer turned to point in one direction. Explain why.",
      marks: 3,
      kw: [["tip"], ["north"], ["lost", "lose", "weaker", "weakened", "no longer a magnet"]],
      model: "(a) The tip. The strokes ended at the tip, and the end where the strokes end becomes the opposite pole to the stroking pole (S), so the tip became N. (b) The tip will point north, because the N pole of a freely turning magnet points to the north. (c) Dropping the needle many times made it lose its magnetism, so it is no longer a magnet and does not turn to point north-south."
    }
  ]
};
