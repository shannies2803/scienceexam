# Science Quest

A gamified Singapore primary science revision game, from P1–2 discovery to PSLE (MOE 2023 Primary Science syllabus, Standard).

- **5 levels, 41 topic worlds, about 11,000 items**: multiple choice, true/false, written answers, sorting, Answer Doctor, about 1,000 flashcards and a glossary of about 470 key words, plus worked lessons and Field Notes.
- Diagrams drawn in the page: graphs, classification charts, life cycles, magnets, circuits, food webs, body systems, flowers, cells.
- Stars, XP, ranks, badges, collectible Field Guide cards, Mistake Clinic, Daily Mix, family league, parent view.
- Mock papers marked out of 100 with an AL grade, and an AL1 readiness check per level (P6 has a PSLE mock drawn from P3–P6).
- Toolkit: spaced-repetition flashcards, search across everything, a quiz builder, a weak-spot drill, saved questions, and “retry what I missed” after every quest and mock.
- Topic Tests per world, printable worksheets (with answer key) and one-page revision sheets, hints on written answers, and a “Not sure” button that sends lucky guesses to the Mistake Clinic.
- Parent view with accuracy by world and by question type, the most-missed questions, and a printable weekly report.
- Settings for text size, theme, sound, animations and read-aloud speed; backup and restore of all progress to a file.
- Separate progress for each player, saved in the browser. Installable as an app and works offline when hosted (GitHub Pages or Netlify).

## Use it

`index.html` is the whole site in one file. Open it in a browser, or host it:

- **GitHub Pages:** Settings → Pages → Deploy from branch → `main` / root.
- **Netlify:** drag the repo folder (or just `index.html` and `_headers`) onto app.netlify.com/drop.

Features that need Claude (Claude marking of written answers, “Explain it another way”, practice from photos of school papers, and syncing progress across devices) only work when the page runs as a Claude artifact. Everywhere else they are hidden and progress is saved per browser.

## Edit the content

Source is in `src/`:

| Path | What it is |
|---|---|
| `src/app.html` | The game engine, styles and layout (template) |
| `src/fig.js`, `src/fig2.js` | Diagram drawing |
| `src/cards.js` | Field Guide cards |
| `src/extra.js`, `src/extra2.js` | Toolkit: flashcards, search, quiz builder, drills, saved questions, settings, backup; glossary, printing, topic tests, hints, avatars, break reminders |
| `src/bank/*.js` | P3 question banks (`<world>.js`, `_x`, `_y`, `_z`, `_v`, `_u` packs) |
| `src/lv/*.js` | P1–2 and P4–P6 question banks (`<world>.js`, `_x`, `_y`, `_z`, `_u` packs) |
| `src/sw.template.js`, `src/icon.svg` | Offline support (service worker) and app icon |
| `src/docs/SCHEMA*.md` | The question formats |

After editing, rebuild and check:

```bash
cd src
node audit.js          # validates every question (keys, options, diagrams, marking keywords, length cue)
python3 build.py       # writes ../index.html, ../sw.js and ../manifest.webmanifest
```

New packs are appended after existing ones, so question ids (and saved progress) stay stable.
