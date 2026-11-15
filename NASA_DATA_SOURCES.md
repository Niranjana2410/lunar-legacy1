# NASA Data Source Registry

This document records every NASA source consulted during the construction of Lunar Legacy artifact profiles.

All data is static and sourced from public NASA archives. This application does not claim live API integration.

---

## Primary Archives

| Source | URL |
|---|---|
| NASA Space Science Data Coordinated Archive (NSSDCA) | https://nssdc.gsfc.nasa.gov/ |
| NASA Science Mission Directorate | https://science.nasa.gov/ |
| NASA Jet Propulsion Laboratory | https://www.jpl.nasa.gov/ |
| NASA Mars Exploration Program | https://mars.nasa.gov/ |
| NASA Solar System Exploration | https://solarsystem.nasa.gov/ |

---

## Per-Artifact Source Records

### Apollo 11 Lunar Module Eagle (Descent Stage)
- **NSSDCA ID:** 1969-059C
- **Primary:** https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C
- **Supporting:** https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo11info.html
- **Key facts sourced:** Landing time (20:17 UTC Jul 20 1969), landing site (Mare Tranquillitatis), crew, ascent stage departure time

### Apollo 15 Lunar Roving Vehicle
- **NSSDCA ID:** 1971-063C
- **Primary:** https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C
- **Supporting:** https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html
- **Supporting:** https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo15info.html
- **Key facts sourced:** Mass (210 kg), distance driven (27.8 km), driving time (3h 2min), landing site coordinates (26.13°N, 3.63°E), max range from LM (5.0 km)

### ALSEP Apollo 12
- **NSSDCA ID:** 1969-099C
- **Primary:** https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-099C
- **Supporting:** https://nssdc.gsfc.nasa.gov/misc/documents/b32116.pdf (ALSEP Termination Report)
- **Key facts sourced:** Landing coordinates (3.0128°S, 23.4219°W from LRO/DE421), instruments, deactivation date (Sep 30 1977), proximity to Surveyor 3 (~180 m)

### Surveyor 3
- **NSSDCA ID:** 1967-035C
- **Primary:** https://science.nasa.gov/mission/surveyor-3/
- **Supporting:** https://solarsystem.nasa.gov/missions/surveyor-3/in-depth
- **Supporting:** https://www.nasa.gov/missions/lunar-reconnaissance-orbiter-looks-at-apollo-12-surveyor-3-landing-sites/
- **Key facts sourced:** Launch date (Apr 17 1967), landing date (Apr 20 1967), 6,300+ photographs, Apollo 12 visit, TV camera returned to Earth

### Sojourner (Mars Pathfinder)
- **NSSDCA ID:** MESURPR
- **Primary:** https://science.nasa.gov/mission/mars-pathfinder/
- **Supporting:** https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=MESURPR
- **Supporting:** https://nssdc.gsfc.nasa.gov/planetary/mesur.html
- **Key facts sourced:** Mass (10.6 kg), dimensions (630×480×280 mm), landing date (Jul 4 1997), operational duration (83 sols), last signal (Sep 27 1997 10:23 UTC)

### Ingenuity Mars Helicopter
- **Primary:** https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/
- **Supporting:** https://mars.nasa.gov/ingenuity
- **Supporting:** https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/
- **Supporting:** https://www.jpl.nasa.gov/news/press_kits/ingenuity/landing/quick_facts/
- **Supporting:** https://www.jpl.nasa.gov/news/press_kits/ingenuity/landing/mission/spacecraft/
- **Supporting:** https://science.nasa.gov/resource/mars-report-the-most-extreme-flights-of-nasas-ingenuity-mars-helicopter/
- **Key facts sourced:** Mass (1.8 kg), 72 flights, first flight (Apr 19 2021), last flight (Jan 18 2024), max altitude 24 m (Flight 61), max speed 10 m/s, rotor diameter 1.2 m, landing site Jezero Crater ~18°N 77°E

### Spirit (MER-A)
- **NSSDCA ID:** 2003-027A
- **Primary:** https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/
- **Supporting:** https://solarsystem.nasa.gov/missions/spirit/in-depth
- **Key facts sourced:** Landing date (Jan 4 2004), last communication (Mar 22 2010), mission end (May 25 2011), distance driven (7.73 km), 2210 sols of operation

### Opportunity (MER-B)
- **NSSDCA ID:** 2003-032A
- **Primary:** https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/
- **Supporting:** https://ares.jsc.nasa.gov/missions/mer/
- **Key facts sourced:** Landing date (Jan 25 2004), last communication (Jun 10 2018), mission end (Feb 13 2019), distance driven (45.16 km), 5111 sols of operation

---

## Data Integrity Statement

- No coordinates, telemetry, or mission events are invented.
- All presented facts are attributed to the source that provided them.
- Where information conflicts between sources, the most authoritative NASA primary source is used.
- Facts whose sources could not be confirmed during research are labelled "unknown" in the artifact record.
- This registry was compiled on the basis of web searches and page fetches performed during application development in November 2026.
