# Known Limitations

## Data Limitations

| Limitation | Detail |
|---|---|
| **Static data only** | All artifact data is stored in `artifacts.json`. There is no live connection to NASA APIs. |
| **No real-time telemetry** | The application does not display or claim live mission telemetry. |
| **Image loading** | Artifact images are loaded from Wikimedia Commons URLs at runtime. If those URLs change, images will fail to load; the app handles this gracefully. |
| **Coordinate precision** | Coordinates are sourced from official records but reflect landing sites, not necessarily the exact current hardware position (e.g. Sojourner's final position is unknown). |
| **8 artifacts only** | The archive covers 8 artifacts. Many more abandoned artifacts exist (e.g. Apollo 12/14/16/17 LMs, additional ALSEPs, Luna landers, Viking landers) and are not yet profiled. |

## Technical Limitations

| Limitation | Detail |
|---|---|
| **SVG atlas map** | The interactive atlas uses a custom SVG equirectangular projection, not a full GIS mapping library. It accurately positions markers based on verified coordinates but does not show photographic surface imagery. |
| **No authentication** | The application has no user accounts, saved state, or backend. |
| **No offline support** | No service worker or PWA caching is implemented. |
| **Font loading** | Typography depends on Google Fonts CDN. Offline use will fall back to system fonts. |

## Scope Limitations (MVP)

| Limitation | Detail |
|---|---|
| **Spirit and Opportunity** | Both Mars rovers are included in the archive and timeline but are not in the "featured on home" selection to keep the home page focused. |
| **ALSEP network** | Only the Apollo 12 ALSEP is profiled. ALSEPs were deployed on Apollo 11 (partial), 12, 14, 15, 16, and 17. |
| **No Surveyor 1–7 coverage** | Only Surveyor 3 is profiled as it is the most historically significant (the only one visited by humans). |

## What Is Not Claimed

- This application does **not** integrate live NASA data APIs.
- This application does **not** show real-time spacecraft positions.
- Narrative sections are human-readable interpretations of verified facts, not direct NASA quotations.
- Duration calculations (e.g. mission comparison bars) are computed from landing/end dates in the artifact record and are approximate.
