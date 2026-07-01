# Handoff: QuestSnapViewer – Initial Build

## Session Summary

Built a static React web app for uploading, comparing, and rating photos across groups by theme (ID). Dark theme, lightbox, localStorage persistence.

**GitHub:** https://github.com/DerGrosseDaniel/QuestSnapViewer (token redacted)
**Live demo:** https://useless.blue/QuestSnapViewer
**Project root:** `/Users/daniel/Desktop/Projekte/2026/20260430 - QuestSnapViewer`

## Existing Artifacts (Reference, Don't Duplicate)

| File | Content |
|---|---|
| `AGENTS.md` | Dev commands, architecture notes, filename format, quirks |
| `README.md` | Feature list, usage guide, build/deploy instructions, live demo link |
| `plan.md` | Full implementation plan, ASCII mockup, architecture decisions, folder structure |

→ **Read these first in a new session. This document covers what they don't.**

## File Map

```
QuestSnapViewer/
├── AGENTS.md               ← Agent instructions (start here)
├── README.md               ← User-facing docs
├── plan.md                 ← Implementation plan + ASCII mockup
├── index.html              ← Vite entry
├── package.json            ← Scripts: dev, build, preview
├── vite.config.js          ← base: './' (relative paths)
├── handoffs/               ← This handoff document
├── src/
│   ├── main.jsx            ← React root
│   ├── App.jsx             ← Router: UploadScreen | EvaluationScreen
│   ├── utils/
│   │   ├── parseFilename.js  ← QuestSnap-XXX-GROUP-PROMPT.jpg parser
│   │   ├── storage.js        ← localStorage for ratings + groupsPerRow
│   │   └── imageLoader.js    ← File → data URL
│   ├── components/
│   │   ├── UploadScreen.jsx    ← Drag & drop, file valiator
│   │   ├── EvaluationScreen.jsx ← Main evaluation UI
│   │   ├── GroupColumn.jsx     ← Single group: image + rating buttons + team info
│   │   ├── ZoomControls.jsx    ← +/- buttons for column count
│   │   └── *.css               ← Per-component dark theme styles
│   └── styles/
│       └── global.css        ← Reset, dark bg (#0f172a)
└── dist/                    ← Build output (relative paths)
```

## Architecture Decisions (Not in AGENTS.md/plan.md)

1. **Column sizing via flex-basis:** `width: calc((100% - (N-1) * gap) / groupsPerRow)` applied inline. Container is `display: flex; overflow-x: auto`. All groups in one row; zoom controls adjust the percentage.

2. **Lightbox:** Uses React state (`lightboxOpen`) inside `GroupColumn`. Renders a `position: fixed` overlay with `z-index: 1000`. Click overlay to close; `e.stopPropagation()` prevents rating buttons from triggering it.

3. **Missing image toggling:** `onClick` on the `.no-image` wrapper toggles between `'green'` / `'red'`. The `rating` prop defaults to `'red'` for groups without an image for the current ID.

4. **Accumulated points:** Memoized (`useMemo`). Sums `'green'` ratings for the group across `allIds[0]` to `allIds[currentIndex]` inclusive.

5. **No routing library** – just conditional rendering in `App.jsx` based on `uploadData` being null or set.

6. **Prompt is per ID** – all images for the same ID share one prompt. Extracted from the first image parsed for that ID.

## Key Filename Parsing Logic

`QuestSnap-XXX-GROUP-PROMPT.jpg`:
- Strip `.jpg`/`.jpeg`
- Remove `QuestSnap-` prefix
- `id` = first 3 chars (zero-padded, e.g. `001`)
- `rest` = everything after `XXX-`
- Split `rest` at **last** `-` → `group` (left, can contain hyphens), `prompt` (right)

## Known Quirks & Gotchas

- **Images are not persisted** – re-upload after every page reload (in-memory data URLs).
- **Ratings survive reload** (localStorage, key `questsnap_ratings`).
- **`groupsPerRow`** persists in localStorage (key `questsnap_groupsPerRow`, default 4).
- **IDs without any images** still appear as slides (range min→max), but `promptById` has no entry → prompt heading is blank.
- **Build must use `base: './'`** for correct relative paths; already set in `vite.config.js`.
- **Hover buttons** appear over images; they call `e.stopPropagation()` so the click doesn't also open the lightbox.
- **"Alle Grün"** sets ratings only for groups that actually have an image for the current ID.
- **"Alle Rot"** sets ratings for ALL groups (including missing) for the current ID.

## Suggested Skills for Next Session

- **caveman** – If the user asks for ultra-brief replies or says "caveman mode"
- **customize-opencode** – If the user wants to change opencode's own configuration (not needed for app work)

## What's Unresolved / Next-Step Ready

- The app is functionally complete and deployed. Next session could focus on:
  - Additional UI polish or animation
  - Adding a results/summary screen that shows final scores per group
  - Export functionality (e.g. download ratings as CSV)
  - Keyboard shortcuts for faster rating
  - Any bugfixes the user discovers during testing

## Sensitive Data (Redacted)

- GitHub PAT was used in `git remote origin` URL but is not stored in any committed file.
