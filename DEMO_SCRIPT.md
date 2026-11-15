# Lunar Legacy — Demonstration Script

**For NASA Space Apps Challenge 2026 Judges / Reviewers**

Estimated demo time: 5–7 minutes

---

## Opening Statement (30 seconds)

> "Right now, there are more than 50 pieces of human technology abandoned on the Moon and Mars. Landers. Rovers. Helicopters. Science stations. We spent billions building them. They did extraordinary things. And then we left them.
>
> Lunar Legacy is a digital archaeological archive that tells their stories — using verified NASA data, presented as compelling narrative that works for school students and space enthusiasts alike."

---

## Demo Flow

### 1. Home Page (1 minute)

- Show the cinematic landing page — lunar horizon, animated title, tagline.
- Highlight the **central statement**: *"Every abandoned machine has a story. Let's uncover it."*
- Point out the **stats bar**: 8 artifacts, 55+ years on the lunar surface, Opportunity's 45 km drive, Ingenuity's 72 flights.
- Scroll down to show **featured artifact cards**.
- Click **"Explore the Forgotten Missions"**.

---

### 2. Artifact Archive (1 minute)

- Show the filterable grid. Demonstrate filtering by **Mars** — narrows to 4 artifacts.
- Filter by **Rover** type.
- Use the search box — type "Apollo" to show Moon-based artifacts.
- Clear filters. Click **Ingenuity**.

---

### 3. Artifact Detail — Ingenuity (1.5 minutes)

- Show the cinematic hero image with mission metadata.
- Read the **narrative**: *"Ingenuity was supposed to fly five times in thirty days. It flew 72 times over three years…"*
- Scroll to **Purpose**, **Scientific Contribution**, **What Happened to It**.
- Show the **Mission Timeline** — highlight Flight 1 (Apr 19 2021) and Flight 72 (Jan 18 2024).
- Scroll to the **Evidence Room**.
  - Point out: *"This is our signature feature."*
  - Show the **Verified Facts** column — every fact has a NASA source listed.
  - Show the **What Remains Unknown** column — genuine gaps, not invented.
  - Show the **Source links** — click one to show it goes to a real NASA URL.
  - Point out the **disclaimer**: *"This profile does not claim live API integration."*
- Sidebar: show coordinates, link to Atlas.

---

### 4. Lunar Atlas (1 minute)

- Navigate to **Lunar Atlas**.
- Show Moon view — markers at Tranquility Base, Hadley Rille, Oceanus Procellarum.
- Click **Eagle Descent Stage** marker — info panel appears with narrative excerpt and coordinates.
- Switch to **Mars** view — markers at Jezero, Gusev, Meridiani, Ares Vallis.
- Click **Ingenuity** marker.
- Note: *"All coordinates are sourced from NASA/NSSDCA records — none are estimated."*

---

### 5. Mission Timeline (45 seconds)

- Navigate to **Timeline**.
- Show the unified chronology from 1967 to 2024.
- Filter to **Mars only** — Sojourner through Ingenuity's final flight.
- Point out the gold year markers and the event cards.

---

### 6. Compare (45 seconds)

- Navigate to **Compare**.
- Default comparison: Apollo 11 LM Eagle vs Sojourner.
- Change right selector to **Opportunity**.
- Show the **duration bars** — 90-sol design life vs. 5,111 sols of operation.
- Point out: *"Only fields with available data are shown — we don't pad comparisons with unknowns."*

---

## Closing Statement (30 seconds)

> "Lunar Legacy treats these machines with the respect they deserve. They're not footnotes — they're landmarks. The Eagle's descent stage is the oldest human structure on another world. Opportunity drove further than any vehicle in planetary history. Ingenuity changed what we know about flight.
>
> Every claim in this application links back to a verifiable NASA source. Every unknown is labelled as unknown. That's what digital archaeology looks like."

---

## Technical Notes for Judges

- Stack: React 19 + Vite 8 + JavaScript + custom CSS. No UI framework.
- Data: `src/data/artifacts.json` — structured, sourced, open for inspection.
- Atlas: Custom SVG equirectangular map — no external map library required.
- Sources: `NASA_DATA_SOURCES.md` — full registry of every NASA URL consulted.
- AI: `AI_DISCLOSURE.md` — full transparency on AI tool usage.
