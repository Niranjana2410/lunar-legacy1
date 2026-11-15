# AI Usage Disclosure

## For NASA Space Apps Challenge 2026 Judges

This document discloses how artificial intelligence tools were used in the development of Lunar Legacy.

---

## AI Tools Used

**Kiro (Agentic AI by AWS)** — used as the primary development assistant throughout the project.

---

## What AI Did

| Task | AI Involvement |
|---|---|
| **NASA data research** | AI performed web searches against NASA.gov, NSSDCA, and JPL sources to extract and verify artifact facts |
| **Data structuring** | AI formatted verified facts into structured JSON with source attribution |
| **Code generation** | AI wrote all React components, CSS, and routing |
| **Narrative writing** | AI wrote the storytelling narratives for each artifact, based on verified NASA facts |
| **Documentation** | AI produced README, source registry, attribution list, and this disclosure |

---

## What AI Did NOT Do

- **Invent data.** Every factual claim in `artifacts.json` was verified against a NASA or NSSDCA source before inclusion.
- **Fabricate coordinates.** All coordinates are sourced from official records; none are estimated or guessed.
- **Claim live API access.** The application uses static data; no live NASA APIs are integrated.
- **Pretend unknowns are known.** Where facts could not be verified, they are explicitly labelled "unknown" in the Evidence Room.

---

## Human Oversight

All research queries, data extraction decisions, and architecture choices were directed by human prompts specifying the requirements. The human reviewer specified:

- Mandatory use of NASA NSSDCA sources
- Prohibition on inventing telemetry or events
- Requirement to distinguish verified facts from interpretations
- Requirement to label unknowns explicitly

---

## Data Integrity

The AI assistant cross-referenced facts across multiple NASA sources where possible. When sources conflicted, the most authoritative primary source (NASA.gov > NSSDCA > JPL) was preferred. All source URLs are recorded in `NASA_DATA_SOURCES.md`.

---

*Lunar Legacy — NASA Space Apps Challenge 2026*
