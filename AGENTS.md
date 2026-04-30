# AGENTS.md

## Dev Commands
- `npm run dev` - Start dev server
- `npm run build` - Build to `dist/` (copy to any subdirectory)

## Architecture
- Static React app, client-side only
- No backend, no API calls
- Images stored in memory only (re-upload after reload)
- Ratings persisted to localStorage

## Filename Format
`QuestSnap-XXX-GROUP-PROMPT.jpg`
- XXX: 3-digit zero-padded ID
- GROUP: Group name (can contain hyphens)
- PROMPT: Text after last hyphen (same for all images of same ID)
- Only .jpg/.jpeg supported

## Quirks
- Images not persisted across page reloads
- Build output uses relative paths (`base: './'`)
- Groups without image for an ID get auto-red border (toggleable)
- "Alle Grün" only affects existing images; "Alle Rot" affects all groups
