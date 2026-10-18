# RDCpedia — Features × Guidebook × Controls (planning draft)

> **Status:** content architecture only. This document is not published as a new RDCpedia section and does not change the existing interface.
> **Sources:** user-provided in-game Tutorial Hub screenshots (2026-10-18), plus Getting Started, Base Infrastructure, Management & Operations, Colonists & Survival, Agriculture & Food, Research, Rooms, Storage Units, Events & Crises and existing building/item wiki records.
> **Coverage boundary:** playable Red Dust Colony demo and explicitly marked demo-inactive/planned systems. Individual 64 building and 43 item records are existing reference entities, not separate Features.

## Definitions — one canonical source, three ways in
- **Features = WHAT / WHY:** indexed mechanics, rules, inputs, outputs, limitations, effects and dependencies. One record per meaningful game system; no repetition of every building.
- **Guidebook = HOW / RESULT:** player task such as "restore power" or "build a private bathroom". Consistent structure: objective → prerequisites → numbered actions → how to verify success → troubleshooting → related feature/building/item/technology.
- **Controls = WHERE / BUTTONS:** input bindings, camera, time, HUD buttons, tool operation, overlays, panels, keyboard shortcuts and settings. These are not stand-alone survival tutorials.
- **Crosslinks:** Feature → 1–N Guides; Guide → 1–N Features + existing Buildings, Items, Technology, Colonists, Station, Environment. Do not duplicate long reference definitions; embed short operational context and link to source article.
- **Status tags for actual articles:** confirmed by game tutorial / documented in demo wiki / player-observed but requires verification / not active in current demo / future planned. Do not promote one status to another without proof.

## Original in-game Tutorial Hub — confirmed from screenshots

The 14 existing tutorial entries provide the naming and first-wave visual references; retain their titles when helpful. Videos/GIF are intentionally out of scope.
| Section in game | Tutorial title | RDCpedia destination(s) |
|---|---|---|
| Controls | Camera Controls | C01,G01 |
| Controls | Controlling time flow | C02,G02 |
| Tools | Deconstructing | F08,G10 |
| Tools | Mining | F09,G08 |
| Tools | Priority | F10,G11 |
| Infrastructure | Hull Expansion | F06,G05 |
| Power | Power Grid | F13,G14 |
| Crafting | Metal Smelting | F24,G26 |
| Crafting | Concrete Manufacturing | F25,G27 |
| Needs | Sleep and Rest | F35,G37 |
| Needs | Bathroom | F36,G38 |
| Needs | Food and Nutrition | F37,G39 |
| Food Production | Botany | F30,G32 |
| Advancement | Research | F43,G45 |

## Feature catalogue (55 candidate mechanics)

**Important:** The catalogue is a complete *working map of systems identifiable in the provided demo sources*, not a claim that every future mechanic or every possible interaction has been found. F52–F55 are placeholders for inactive/unverified concepts and must not appear as active demo features without labels.

### Game setup, controls & interface

| ID | Feature / mechanic | Suggested guides |
|---|---|---|
| F01 | Expedition setup: terrain, map size, difficulty, colony name | G03 |
| F02 | Starting crew: reroll, traits, interests, attributes and skills | G04 |
| F03 | Game clock, pause, speeds, day cycle, notifications | G02 |
| F04 | Camera, view modes, X-ray and colonist tracking | G01,G07 |
| F05 | HUD, resource tooltips, overlays and system information | G12,G13,G16 |

### Construction, orders & terrain

| ID | Feature / mechanic | Suggested guides |
|---|---|---|
| F06 | Hull placement, automatic perimeter walls, pressure boundary and expansion | G05,G06 |
| F07 | Indoor/outdoor placement, walls, doors, airlocks, windows, vents | G06,G07 |
| F08 | Cancel orders, Deconstruct, Move and Shift multi-selection; structural limits | G09,G10 |
| F09 | Mining single tiles/areas, resource extraction, hauling mined items | G08 |
| F10 | World errand priority 1–9; All / Building / Hull / Wires target filters | G11,G12 |
| F11 | Construction resources, reserved stock, eligible builders and access | G05,G12 |
| F12 | Recognized rooms: allowed objects, size, F7 and room-limited effects | G07,G40 |

### Station infrastructure and operation

| ID | Feature / mechanic | Suggested guides |
|---|---|---|
| F13 | Electricity grid: wiring, generation, consumption, batteries, F4 | G14,G15,G16 |
| F14 | Solar and wind power during dust storms and panel upkeep | G15,G47 |
| F15 | Oxygen production, CO2 scrubbing and life-support limits | G17,G18 |
| F16 | Gas distribution, interior partitions and vents | G18,G40 |
| F17 | Ice -> water; water use, wastewater and fluid storage | G19 |
| F18 | Storage types, item permissions and storage priority | G20,G21 |
| F19 | Hauling, loose resources and delivery to workstations | G21,G22 |
| F20 | Machine operation: inputs, staff, status, Enable/Disable | G22,G23 |
| F21 | Production order rules: fixed quantity, if-less-than, continuous | G23 |
| F22 | Room recognition / bedroom, barracks, bathroom and other types | G40 |
| F23 | Inventory HUD: Total / Available / In Use / Needed | G12,G20 |

### Materials, industry, farming & meals

| ID | Feature / mechanic | Suggested guides |
|---|---|---|
| F24 | Smelting iron/copper ores into intermediate materials | G26 |
| F25 | Regolith crushing, concrete mixing and Concrete Hull chain | G27 |
| F26 | Workbench/component manufacturing, recipes and manufacturing chains | G24,G25 |
| F27 | Crop growth: water, fertilizer, yield, harvest and Botany skill | G28,G29 |
| F28 | Plant Rack, Plant Plot, Large Plot and Mushroom Rack crops | G28,G30 |
| F29 | Botany Station projects: crop research and special Cotton unlock | G30,G31 |
| F30 | Crop progression via research, botanical and utility planting | G31,G32 |
| F31 | Food preparation: Meal Assembly Table, Pantry auto/manual, batches | G33,G34 |
| F32 | Food nutrition: calories, carbs, proteins, fats, vitamins, fibre | G34,G39 |
| F33 | Perishable preservation: Coolbox, ice and spoilage | G35 |
| F34 | Non-food agriculture: Cotton, Mycelium, Soft Block and Bandage chains | G31,G36 |

### Colonists, schedules and human factors

| ID | Feature / mechanic | Suggested guides |
|---|---|---|
| F35 | Energy, beds, sleep, interrupted rest and shift scheduling | G37,G41 |
| F36 | Bladder, toilet access, room privacy, dietary fibre | G38,G40 |
| F37 | Satiety, nutrition, food-seeking and starvation effects | G39,G33 |
| F38 | Social need, Free Time, Downtime and shared leisure | G42 |
| F39 | Mood modifiers, accidents, mental breaks, trait-specific behaviour | G43 |
| F40 | Health, ailment indicators, bandages, Medical Bed and recovery | G44 |
| F41 | Skills, interests, attributes, learning, restrictions and traits | G04,G46 |
| F42 | Colonist work matrix, job eligibility, schedules and Go To movement | G41,G46,G48 |

### Technology, deliveries and events

| ID | Feature / mechanic | Suggested guides |
|---|---|---|
| F43 | Basic Research Table, tiers, prerequisites, Opens and Unlocks | G45 |
| F44 | Touchdown initial technologies / pre-unlocked starting structures | G45 |
| F45 | Orbital supply deliveries: choose bundles, accept or decline | G49 |
| F46 | Recruit arrivals, candidate comparison, rocket pad, weather | G50 |
| F47 | Scripted starting Life Support Machine failure (~Sol 5 / Sol 14) | G17,G51 |
| F48 | Dust storms, alerts, outdoor restriction and manual override | G47,G48 |
| F49 | Base crises: blackout, low O2, high CO2, water shortage, hunger | G16,G18,G19,G39,G51 |
| F50 | Death, graves, funerals and access/suit risk during ceremony | G52 |
| F51 | Demo end notification and continue-playing option | G53 |

### Demo-inactive / verify before exposing

| ID | Feature / mechanic | Suggested guides |
|---|---|---|
| F52 | Hazardous gases, F3 toxin UI, Air Purifier — inactive in demo | none |
| F53 | Plumbing F5 overlay — inactive in demo | none |
| F54 | Unimplemented room bonuses, future weather events, advanced medication | none |
| F55 | Berserk attack/flee reactions — player observation, details unverified | G43 (verify) |

## Controls reference inventory (not additional Guidebook pages)

All entries below are inputs or interface affordances, not separate Features. Use as a compact Controls index with short explanations and direct links to relevant guides.

| Control / interface | Source-backed behaviour | Related guide |
|---|---|---|
| WASD / hold RMB | Move (pan) the camera | G01 |
| Mouse Wheel | Zoom camera | G01 |
| Q / E / hold MMB | Rotate camera | G01 |
| Space | Toggle pause/play | G02 |
| 1 / 2 / 3, Tab | Speed selection/cycling per wiki and Tutorial Hub; displayed multipliers need consistency check | G02 |
| G | Mine tool, single tile or drag area | G08 |
| C | Cancel queued order | G09 |
| X | Deconstruct built object(s) | G10 |
| P | Errand Priority tool (1–9) | G11 |
| All / Building / Hull / Wires | Area tool target filters (not a separate hotkey) | G11 |
| Shift + Click | Multi-select objects for shared commands where supported | G10 |
| F1 / F2 / F3 | O2 / CO2 / hazardous-gas overlays; F3 mechanic inactive | G18 |
| F4 | Power Components overlay | G14, G16 |
| F5 | Plumbing overlay; not functional in current demo | — |
| F7 | Room recognition overlay | G40 |
| View buttons | Complete / ceiling-free / minimal floor / X-ray | G07 |
| Top-left HUD | Day, clock, time controls, roster, alerts, management panels | G02, G13 |
| Top-right HUD | Inventory quantities, diagnostic overlay toolbar and system shortcuts | G13, G16 |
| Bottom-left HUD | Build menu and categories | G05, G06 |
| Bottom-right HUD | Mining, cancel, deconstruct, priority tools | G08–G11 |
| ESC | Game menu / save-load/settings or closing supported dialogs; details are context-specific | Controls |

## Presentation: do **not** make 55 + 53 new encyclopedia pages

**Feature catalogue entries are indexable mechanics, not all full-length articles.** A Feature can be a compact reference card with a 1–3 paragraph explanation and a link to the existing Station, Colonists or Environment article. Several closely related features may share one reference page.

**53 Guide IDs represent potential answers to 53 player questions, not 53 separate pages.** Prefer roughly a dozen cohesive guides with internal sections and direct links to the relevant steps. Suggested bundles:

| Guidebook guide / series | Proposed scope (guide IDs) |
|---|---|
| First minutes on Mars | G03, G04, G05, G13 |
| Construct and rearrange your station | G05, G06, G07, G09, G10, G11, G12, G40 |
| Reliable electricity | G14, G15, G16 |
| Replace starting life support | G17, G18, G19 |
| Mine and turn ore into materials | G08, G24, G25, G26, G27 |
| Storage, hauling and production automation | G20, G21, G22, G23 |
| Growing food and botanical projects | G28, G29, G30, G31, G32 |
| Cooking and nutrition | G33, G34, G35, G39 |
| Comfortable, functional colonists | G37, G38, G41, G42, G43, G44, G46 |
| Research and unlock progression | G45 |
| Storm and colony-crisis response | G47, G48, G51 |
| Supplies, recruitment, death and demo milestone | G49, G50, G52, G53 |

G01/G02 and reference lookups naturally remain under **Controls**, with links from the related Guidebook bundles. Most difficult tasks can also be reached directly by a "How do I...?" search and specific existing article links.

**Example user flow:** Player opens *Wire* → short feature description and "Power Grid" link → guide "Why is this machine not powered?" → F4 / generator / cable / battery checklist → success criteria. This avoids forcing a player to navigate the entire Feature taxonomy.

## Goal-oriented Guidebook backlog (53 candidate guides)

These are **proposed tutorial tasks**. The 14 official topics above are source-confirmed; additional task titles are editorial proposals based on the wiki systems.

| ID | Practical result sought by player | Draft collection |
|---|---|---|
| G01 | Move, zoom and rotate the camera | Controls |
| G02 | Pause, resume and change time speed | Controls |
| G03 | Start a new expedition and choose terrain/difficulty | Start |
| G04 | Choose a balanced starting crew | Start |
| G05 | Expand the hull without stalling construction | Build |
| G06 | Build walls, doors and a working airlock | Build |
| G07 | Choose an interior view and locate a blocked structure/colonist | Build |
| G08 | Mine a tile or an area and recover materials | Tools |
| G09 | Cancel an unfinished task | Tools |
| G10 | Deconstruct one or multiple objects safely | Tools |
| G11 | Set priority on buildings, hull and wires | Tools |
| G12 | Find out why a build job is not progressing | Tools |
| G13 | Use the HUD and diagnose resource shortages | Controls |
| G14 | Build a working power grid (generator → wire → consumer) | Power |
| G15 | Store electricity and prepare for a dust storm | Power |
| G16 | Find and restore an unpowered machine with F4 | Power |
| G17 | Replace starting life support before permanent failure | Survival |
| G18 | Fix low O2 or high CO2 using F1/F2 | Survival |
| G19 | Produce enough water from ice and handle waste | Survival |
| G20 | Choose the right storage container for each resource | Logistics |
| G21 | Configure storage permissions/priority and shorten hauling | Logistics |
| G22 | Diagnose a machine waiting for worker, input, output or electricity | Production |
| G23 | Set a fixed, maintain-stock or continuous production order | Production |
| G24 | Start manufacturing components at Crafting Table / Assembly Station | Production |
| G25 | Follow a recipe chain backward to find missing ingredients | Production |
| G26 | Smelt ore into Iron Plate / Copper Wire | Production |
| G27 | Manufacture Concrete from Regolith and Water | Production |
| G28 | Grow and harvest starter crops | Farming |
| G29 | Fix stalled growth / missing water or fertilizer | Farming |
| G30 | Use Botany Station projects to unlock new crops | Farming |
| G31 | Unlock and grow Cotton, then use its material outputs | Farming |
| G32 | Progress from basic to advanced planting | Farming |
| G33 | Cook a first meal at Meal Assembly Table | Food |
| G34 | Use pantry modes and prepare nutritionally balanced batches | Food |
| G35 | Keep food fresh in Coolbox | Food |
| G36 | Make Bandages or Soft Block from the required chain | Production |
| G37 | Set up beds and prevent interrupted sleep | Colonists |
| G38 | Build a private bathroom and prevent accidents | Colonists |
| G39 | Resolve hunger or nutrient deficiencies | Colonists |
| G40 | Create a recognized room and diagnose F7 requirements | Build |
| G41 | Create day/night schedules and 24-hour shift coverage | Colonists |
| G42 | Give colonists overlapping free time to socialize | Colonists |
| G43 | Identify and reduce mood penalties; react to a mental break | Colonists |
| G44 | Care for injured or sick colonists | Colonists |
| G45 | Begin research and reach a technology unlock | Research |
| G46 | Assign specialists using work priorities, traits and skills | Colonists |
| G47 | Prepare the station for a dust storm | Survival |
| G48 | Allow emergency outdoor work and bring colonists back safely | Survival |
| G49 | Accept or decline an orbital supply offer | Events |
| G50 | Recruit a new colonist via supply drop | Events |
| G51 | Respond to a colony-wide resource/life-support crisis | Survival |
| G52 | Bury a colonist and assess a funeral site | Events |
| G53 | Handle demo-complete event and continue playing | Events |

## Demonstration of the split

**Feature: Power Grid (F13)** describes generators, wires, consumers, batteries, electrical reach/load, F4, dust-storm effects and the reasons power can fail. It links to Wire, Solar Panel, Small Battery and Station > Electricity.

**Guide: Build a working power grid (G14)** shows a simple generator → Wire → consumer illustration assembled from existing game asset images, then a step-by-step checklist and F4 success check. **Guide: Restore power (G16)** starts with a symptom, diagnoses the circuit, checks production/storage, and verifies the fix.

**Controls: F4 / Power menu** explains where the Power Overlay button lives and the interaction for drawing wires. It does not re-explain the entire power system.

## Visual asset approach

- **Reuse authentic icons first** from `assets/buildings/` and `assets/items/`; these are already available in RDCpedia. For diagrams, combine real icons with HTML/CSS/SVG lines, arrows, annotations and simple panels.
- User-provided 2026-10-18 Tutorial Hub screenshots are reference material for the UI and still frames. Do not claim an AI-generated imitation is an original in-game asset.
- Create **bespoke explanatory diagrams** (e.g. solar panel → wire → battery/consumer; ore → smelter → product; water + crushed regolith → concrete) with genuine catalogue images where possible, not copied video.
- Animated video and GIF placeholders remain deferred; first ship meaningful illustrated text and linked entity cards.
- Record screenshot credits/source; never imply permission to redistribute unidentified third-party media.

## Scope / rollout proposal (needs approval)

1. **Inventory audit:** agree on Features catalogue and flag observed / inactive mechanics. Match existing wiki records.
2. **Controls content:** consolidate the 14 original tutorial topics as references; document input bindings and HUD.
3. **Features index:** thematic, compact capability cards, not another gigantic left sidebar.
4. **Guidebook index:** goal-first collections (Start, Build, Tools, Power, Survival, Production, Farming, Food, Colonists, Research, Events), with a search for "how do I...".
5. **First 5 cross-linked illustrated guides:** expand hull, build power grid, fix atmosphere, grow/prepare food, assign work priorities.
6. **Coverage checklist:** each playable Feature linked to at least one reference; only features requiring a practical operation need a Guide.

## Open questions / fact checks

- Tutorial Hub time control image displays speeds 1x, 3x, 5x, while some wiki text mentions 1x, 2x, 5x. Prefer direct screenshot and verify actual controls before prescribing exact key bindings.
- Verify exact object selection and Construction/Deconstruct/Cancel priority/filter behaviour in the current build.
- Nutrition is marked for rebalance by wiki; avoid guaranteed fixed outcomes.
- Berserk attacks and bystander fleeing are user-observed and require game confirmation before a behavioural guide.
- F3 toxins, F5 plumbing, most room bonuses, meteor strikes and cold waves are currently inactive/planned.
- The exact crop project unlock table in Agriculture & Food includes inconsistent references; do not silently resolve that from assumptions.

## Screen reference index

The provided screenshots show original Tutorial Hub panels for Camera Controls, Controlling time flow, Deconstructing, Mining, Priority, Hull Expansion, Power Grid, Metal Smelting, Concrete Manufacturing, Sleep and Rest, Bathroom, Food and Nutrition, Botany and Research. Stored in conversation uploads; the binary screenshot files have not been copied to this GitHub planning document.
