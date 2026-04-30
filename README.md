# QuestSnapViewer

Eine statische Web-App zum Vergleichen und Bewerten von Fotos verschiedener Gruppen.

**Live-Demo:** https://useless.blue/QuestSnapViewer

## Features

- 📷 Drag & Drop Upload von JPG-Bildern
- 🎨 Dunkles, modernes Design
- ⭐ Bilder bewerten (Grün/Rot)
- 🔍 Lightbox für Vollbildansicht
- 📊 Punktestand pro Gruppe
- 🔄 Automatische ID-Berechnung (001-999)
- 💾 Bewertungen in localStorage gespeichert
- 📱 Responsive Layout mit Zoom-Controls
- 🚀 Statische App - funktioniert in jedem Unterordner

## Dateinamen-Format

```
QuestSnap-XXX-GROUP-PROMPT.jpg
```

- **XXX**: 3-stellige ID (z.B. 001, 002, ...)
- **GROUP**: Gruppenname (kann Bindestriche enthalten)
- **PROMPT**: Text nach dem letzten Bindestrich (Thema des Bildes)

Beispiel: `QuestSnap-001-padrack-A cat on a red mat.jpg`

## Benutzung

1. Bilder per Drag & Drop oder Dateiauswahl hochladen
2. App berechnet automatisch alle IDs im Datensatz
3. Bilder pro ID vergleichen und bewerten
4. Navigation mit "Zurück" und "Weiter"
5. "Alle Grün" / "Alle Rot" für schnelle Bewertung
6. Klick auf Bild öffnet Lightbox (Vollbild)
7. Zoom-Controls (+/-) passen die Spaltenanzahl an

## Entwicklung

```bash
npm install    # Abhängigkeiten installieren
npm run dev    # Entwicklungsserver starten
npm run build  # Produktions-Build (dist/)
```

## Technologie

- Vite + React (JavaScript)
- Statische Web-App (kein Backend)
- Client-seitig nur (Bilder im Arbeitsspeicher)
- Bewertungen in localStorage
- Relative Pfade für einfaches Deployment

## Build & Deploy

Der Build-Output in `dist/` kann in jeden beliebigen Ordner auf jedem beliebigen Webserver kopiert werden. Durch `base: './'` in `vite.config.js` funktionieren alle Pfade relativ.

## Besonderheiten

- Bilder werden nicht dauerhaft gespeichert (Re-Upload nach Neuladen nötig)
- Gruppen ohne Bild erhalten automatisch roten Rahmen (manuell änderbar)
- "Alle Grün" betrifft nur vorhandene Bilder
- "Alle Rot" betrifft alle Gruppen (auch fehlende)
