# QuestSnapViewer - Implementation Plan

## Overview
A static web app for comparing and rating photos from different groups by theme. Completely client-side, no backend needed. Build output can be copied to any server subdirectory.

Live demo: https://useless.blue/QuestSnapViewer

## ASCII Mockup: Evaluation Screen (ID 001)

```
+-------------------------------------------------------------------------------------------+
|  "A cat on a red mat" (large prompt)                ID: 001/025        [-] [1] [+] (small)|
+-------------------------------------------------------------------------------------------+
|                                                                                           |
|                          [ Group: padrack ]    [ Group: Rob ]                              |
|                          |-------------------|    |-------------------|                      |
|                          |     (image)       |    |     (image)       |                      |
|                          |  (green border)   |    |  (red border)     |                      |
|                          |-------------------|    |-------------------|                      |
|                          |   Team: padrack   |    |   Team: Rob       |                      |
|                          |   Punkte: 1       |    |   Punkte: 0       |                      |
|                                                                                           |
+-------------------------------------------------------------------------------------------+
|  [Zurück]                                    [Alle Grün] [Alle Rot] [Weiter (blue)]         |
+-------------------------------------------------------------------------------------------+
```

## 1. Project Setup

### Technology Stack
- Vite + React (JavaScript, no TypeScript)
- Client-side only (no backend)
- All paths relative for static hosting

### Dependencies
- `react`, `react-dom`
- `vite`, `@vitejs/plugin-react`

### Vite Configuration (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './'  // Enables copying to any subdirectory
})
```

### Folder Structure
```
QuestSnapViewer/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── components/
│   │   ├── UploadScreen.jsx
│   │   ├── UploadScreen.css
│   │   ├── EvaluationScreen.jsx
│   │   ├── EvaluationScreen.css
│   │   ├── GroupColumn.jsx
│   │   ├── GroupColumn.css
│   │   ├── ZoomControls.jsx
│   │   └── ZoomControls.css
│   ├── utils/
│   │   ├── parseFilename.js
│   │   ├── storage.js
│   │   └── imageLoader.js
│   └── styles/
│       └── global.css
└── dist/  (build output)
```

## 2. Core Utilities

### `parseFilename.js`
Parse `QuestSnap-XXX-GROUP-PROMPT.jpg` format:
- Split prompt after **last** hyphen (group names can contain hyphens)
- Extract 3-digit zero-padded ID, group name, prompt
- Validate file starts with `QuestSnap` and ends with `.jpg`/`.jpeg`

### `storage.js`
Load/save ratings and `groupsPerRow` to localStorage

### `imageLoader.js`
Read uploaded files as data URLs (client-side only)

## 3. Upload Flow

### `UploadScreen` Component
- Drag & drop area for multiple JPGs
- "Dateien auswählen" button as alternative
- Dark theme UI

### Upload Processing
1. Filter for `.jpg`/`.jpeg` files only
2. Parse each filename using `parseFilename()`
3. Compute all IDs (min to max, including gaps)
4. Store parsed data in App state
5. Switch to evaluation view

## 4. Evaluation UI

### `EvaluationScreen` Component
- Dark theme (#0f172a background)
- Large prompt as main heading
- Small ID display in top right with zoom controls
- Images centered vertically and horizontally
- Team names + points below each image
- Navigation bar at bottom

### Features
- **Rating**: Click green ✓ or red ✗ buttons on hover
- **Lightbox**: Click image to open fullscreen, click again to close
- **Missing images**: Auto-red border, clickable to toggle
- **Zoom controls**: Adjust columns per row (1-12), horizontal scroll when needed
- **Navigation**: Zurück (previous), Weiter (next)
- **Batch actions**: "Alle Grün" (existing images only), "Alle Rot" (all groups)

## 5. State & Persistence

### Ratings
- Format: `{ [id]: { [group]: 'green' | 'red' } }`
- Saved to localStorage on every rating change

### Images
- Stored in memory only (React state)
- Re-upload required after page reload

### Groups Per Row
- Persisted to localStorage
- Default: 4

## 6. Styling

### Dark Theme
- Background: #0f172a
- Text: #e2e8f0
- Borders: #1e293b
- Buttons: Dark variants with colored accents

### Layout
- Images scale to fit column (max-width/max-height with object-fit: contain)
- Team info below each image, aligned to bottom of column
- Fully responsive with horizontal scroll for many groups

## 7. Build & Deploy

### Commands
- `npm run dev` - Start dev server
- `npm run build` - Build to `dist/` (copy to any subdirectory)
- `npm run preview` - Preview production build locally

### Static Hosting
- Build output uses relative paths (`base: './'`)
- Can be deployed to any static server, any subdirectory
- No server-side processing required

## 8. Implementation Status

✓ Project initialized with Vite + React
✓ Utilities implemented (parseFilename, storage, imageLoader)
✓ UploadScreen with drag & drop
✓ EvaluationScreen with dark theme
✓ GroupColumn with ratings and lightbox
✓ ZoomControls for column adjustment
✓ Navigation and batch actions
✓ localStorage persistence
✓ Build configuration for static hosting
✓ Live demo at https://useless.blue/QuestSnapViewer
