# Lunar Legacy
### The Digital Archaeology of Space Exploration

**NASA Space Apps Challenge 2026**
Challenge: *Abandoned but Not Forgotten: Storytelling about NASA's Discarded Equipment on the Moon and Mars*

---

## What is Lunar Legacy?

Lunar Legacy is an interactive digital archive for school-age students and space enthusiasts. It documents the abandoned hardware of space exploration — landers, rovers, science stations, helicopters — through verified NASA data, compelling narrative, and interactive discovery.

**Central concept:** *Every abandoned machine has a story. Let's uncover it.*

---

## Features

| Feature | Description |
|---|---|
| **Home — The Forgotten Frontier** | Cinematic landing page with featured artifacts and animated intro |
| **Artifact Archive** | Filterable gallery of 8 documented artifacts with detail profiles |
| **The Lunar Atlas** | SVG-based interactive map of Moon and Mars showing verified artifact locations |
| **The Last Chapter** | Unified chronological timeline of all mission events across all artifacts |
| **The Evidence Room** | Per-artifact source verification display — verified facts vs. genuine unknowns |
| **Compare Missions** | Side-by-side comparison of any two artifacts |

---

## Running the Application

```bash
cd lunar-legacy
npm install          # if node_modules not present
npm run dev          # starts Vite dev server at http://localhost:5173
```

> **Windows PowerShell users:** If you see an execution policy error, run:
> ```
> node install.mjs    # installs dependencies via node directly
> ```
> Then start the dev server manually or via `node -e "require('child_process').execSync('npm.cmd run dev', {stdio:'inherit'})"`.

---

## Technology Stack

- **React 19** + **Vite 8** + **JavaScript (ES Modules)**
- **react-router-dom v6** — client-side routing
- **Custom CSS** — no UI framework; design system built from scratch
- **SVG** — interactive atlas map (no Leaflet dependency required at runtime)
- **Google Fonts** — Cormorant Garamond, Inter, Space Mono

---

## Data Architecture

All artifact data is stored in `/src/data/artifacts.json`.

Each record contains:
- Verified facts with source attribution
- Labelled unknowns
- NASA source URLs
- NSSDCA IDs where applicable
- Timeline events with verification flags
- Coordinates sourced from official records

No data is fabricated. Where information is uncertain, it is explicitly labelled `unknown`.

---

## Project Structure

```
lunar-legacy/
├── src/
│   ├── data/
│   │   └── artifacts.json        ← All artifact data, NASA-sourced
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── ArtifactCard.jsx / .css
│   │   ├── EvidenceRoom.jsx / .css
│   │   └── MissionTimeline.jsx / .css
│   ├── pages/
│   │   ├── Home.jsx / .css
│   │   ├── Archive.jsx / .css
│   │   ├── ArtifactDetail.jsx / .css
│   │   ├── Timeline.jsx / .css
│   │   ├── Atlas.jsx / .css
│   │   └── Compare.jsx / .css
│   ├── App.jsx / .css
│   ├── main.jsx
│   └── index.css                 ← Global design tokens and utilities
├── public/
│   └── favicon.svg
├── index.html
└── package.json
```

---

## Known Limitations

See `KNOWN_LIMITATIONS.md` for a full list.

---

## Attributions

See `IMAGE_ATTRIBUTION.md` and `NASA_DATA_SOURCES.md`.

---

## AI Disclosure

See `AI_DISCLOSURE.md`.
