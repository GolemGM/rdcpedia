/* RDCpedia Features v0.9 — 34 demo-era mechanics; English article copy.
   Curated from docs/features-guidebook-plan.md and the same wiki sources.
   No automatic multiplication of features for item variations, Touchdown or drop offers.
   Related references resolve to already present encyclopedia entries. */
const FEATURE_GROUPS = [
  {
    "id": "start",
    "title": "Starting the Colony",
    "icon": "◈"
  },
  {
    "id": "build",
    "title": "Construction & Orders",
    "icon": "▦"
  },
  {
    "id": "station",
    "title": "Station Systems",
    "icon": "ϟ"
  },
  {
    "id": "production",
    "title": "Production & Food",
    "icon": "⚒"
  },
  {
    "id": "people",
    "title": "Colonists",
    "icon": "♟"
  },
  {
    "id": "progress",
    "title": "Research & Events",
    "icon": "⚙"
  }
];
const FEATURES = [
  {
    "id": "F01",
    "title": "Expedition Setup",
    "group": "start",
    "summary": "Expedition setup determines the starting world and available conditions for a new colony.",
    "points": [
      "Terrain, map size and difficulty are chosen before landing.",
      "A different setup changes the challenge; it is not part of camera or time controls."
    ],
    "related": [
      "colonist:crew"
    ],
    "guides": [
      "G01"
    ]
  },
  {
    "id": "F02",
    "title": "Crew Selection",
    "group": "start",
    "summary": "Your initial crew is a working team with different abilities, interests and limitations.",
    "points": [
      "Inspect and reroll colonists before departure; skills and traits affect which work they can do.",
      "A balanced team prevents essential work from depending on a single specialist."
    ],
    "related": [
      "colonist:crew",
      "colonist:skills",
      "colonist:traits"
    ],
    "guides": [
      "G01"
    ]
  },
  {
    "id": "F03",
    "title": "Hull Expansion",
    "group": "build",
    "summary": "Hull tiles expand the pressurized station floor and automatically create its outer boundary.",
    "points": [
      "Prefab Hull uses delivered Hull segments; Concrete Hull uses locally manufactured Concrete.",
      "Removing structural floor segments is subject to access and integrity restrictions."
    ],
    "related": [
      "station:hulls",
      "building:Prefab Hull",
      "building:Concrete Hull",
      "item:Hull"
    ],
    "guides": [
      "G02"
    ]
  },
  {
    "id": "F04",
    "title": "Building Placement & Partitions",
    "group": "build",
    "summary": "Buildings follow indoor, outdoor, wall and floor placement rules; partitions organize the interior.",
    "points": [
      "Walls and doors separate rooms while airlocks connect the station to the exterior.",
      "A building can appear in the menu yet be unavailable on an unsuitable surface."
    ],
    "related": [
      "station:placement",
      "station:partitions",
      "building:Wall",
      "building:Door",
      "building:Airlock"
    ],
    "guides": [
      "G02",
      "G03"
    ]
  },
  {
    "id": "F05",
    "title": "Cancel, Deconstruct & Move",
    "group": "build",
    "summary": "Cancel removes an unfinished order; Deconstruct dismantles a completed object; Move relocates eligible equipment.",
    "points": [
      "Single and area operations select different kinds of targets.",
      "Structural hull, walls and wires cannot simply be moved like furniture."
    ],
    "related": [
      "station:deconstruct",
      "station:priority",
      "building:Wire"
    ],
    "guides": [
      "G04"
    ]
  },
  {
    "id": "F06",
    "title": "Mining & Extraction",
    "group": "build",
    "summary": "Mining converts marked terrain into recoverable raw resources.",
    "points": [
      "Select a single resource tile or drag an area with the Mine tool.",
      "A miner must be permitted to work, and extracted resources still need hauling."
    ],
    "related": [
      "station:mining",
      "building:Stockpile",
      "item:Regolith",
      "item:Ice"
    ],
    "guides": [
      "G05"
    ]
  },
  {
    "id": "F07",
    "title": "Task Priority",
    "group": "build",
    "summary": "World task priorities control which orders should be handled first.",
    "points": [
      "The 1–9 scale works on eligible tasks, not on a colonist's entire job category.",
      "Area filters distinguish All, Building, Hull and Wires; default Building can miss floor and cable orders."
    ],
    "related": [
      "station:priority",
      "colonist:priorities"
    ],
    "guides": [
      "G06"
    ]
  },
  {
    "id": "F08",
    "title": "Rooms & Recognition",
    "group": "build",
    "summary": "Rooms are recognized from enclosure, floor area and permitted furniture categories.",
    "points": [
      "F7 shows recognition and requirements for each room type.",
      "Recognition alone does not guarantee a separate active demo benefit for every room."
    ],
    "related": [
      "station:rooms",
      "station:room-types",
      "station:overlays",
      "building:Toilet"
    ],
    "guides": [
      "G03",
      "G17"
    ]
  },
  {
    "id": "F09",
    "title": "Power Generation & Storage",
    "group": "station",
    "summary": "Power can be generated, consumed and stored; supply must stay ahead of demand.",
    "points": [
      "Solar power and batteries cover different times; wind and other generators unlock through research.",
      "Dust storms can disrupt solar generation and change available wind output."
    ],
    "related": [
      "station:power",
      "building:Solar Panel",
      "building:Small Battery",
      "environment:outdoor"
    ],
    "guides": [
      "G07",
      "G23"
    ]
  },
  {
    "id": "F10",
    "title": "Power Grid & Wires",
    "group": "station",
    "summary": "Wires connect electricity producers, storage and consumers into an operational network.",
    "points": [
      "Cable routes can cross indoor and outdoor areas; a machine without a complete connection cannot rely on a nearby generator.",
      "F4 visualizes circuits, charge and power load; wiring is a separate building task from hull expansion."
    ],
    "related": [
      "station:power",
      "station:overlays",
      "building:Wire",
      "item:Copper Wire"
    ],
    "guides": [
      "G07"
    ]
  },
  {
    "id": "F11",
    "title": "Atmosphere & Life Support",
    "group": "station",
    "summary": "Breathable station air requires oxygen production, carbon dioxide removal and functioning supporting systems.",
    "points": [
      "Hull pressure alone is insufficient; O2 and CO2 must be checked independently.",
      "Power loss, water shortage or inadequate capacity can make new rooms dangerous."
    ],
    "related": [
      "station:atmosphere",
      "environment:indoor",
      "building:Oxygen Diffuser",
      "building:CO2 Scrubber"
    ],
    "guides": [
      "G08",
      "G24"
    ]
  },
  {
    "id": "F12",
    "title": "Water & Waste",
    "group": "station",
    "summary": "Water and waste processing support oxygen production, crops and sanitation.",
    "points": [
      "Ice can be processed into Water and stored in dedicated liquid storage.",
      "A shortage can affect multiple services at once; the F5 plumbing view is not active in the demo."
    ],
    "related": [
      "station:water",
      "item:Ice",
      "item:Water",
      "building:Ice Processing Station",
      "building:Waste Processing Station"
    ],
    "guides": [
      "G09",
      "G08"
    ]
  },
  {
    "id": "F13",
    "title": "Storage & Hauling",
    "group": "station",
    "summary": "Different storage types accept different resources and help distribute them around the station.",
    "points": [
      "Permissions define accepted item classes; priority influences where loose stock is moved.",
      "Hauling depends on available workers and accessible paths."
    ],
    "related": [
      "station:storage",
      "building:Stockpile",
      "building:Storage Container",
      "building:Coolbox"
    ],
    "guides": [
      "G10",
      "G06"
    ]
  },
  {
    "id": "F14",
    "title": "Production Orders",
    "group": "station",
    "summary": "Production machines follow configurable orders and report why a recipe is waiting.",
    "points": [
      "Fixed quantity, stock-target and continuous modes serve different needs.",
      "Having a recipe selected does not guarantee inputs, power, an available worker or output space."
    ],
    "related": [
      "station:production",
      "station:inventory",
      "building:Crafting Table"
    ],
    "guides": [
      "G11",
      "G06"
    ]
  },
  {
    "id": "F15",
    "title": "Industrial Processing & Crafting",
    "group": "production",
    "summary": "Recipes turn raw inputs into manufactured materials through one or more machines.",
    "points": [
      "Smelting, concrete production and component crafting use the same input–workstation–output concept.",
      "Individual chains differ in ingredients, required buildings and power or worker needs."
    ],
    "related": [
      "station:production",
      "building:Smelter",
      "building:Rock Crusher",
      "building:Concrete Mixer",
      "building:Crafting Table"
    ],
    "guides": [
      "G11",
      "G12",
      "G13"
    ]
  },
  {
    "id": "F16",
    "title": "Cultivation & Harvest",
    "group": "production",
    "summary": "Crops require a suitable growing facility, resources, time and eligible farming work.",
    "points": [
      "Water, fertilizer and crop type affect growing conditions.",
      "A successful harvest provides food or plant materials for later recipes."
    ],
    "related": [
      "colonist:nutrition",
      "building:Plant Rack",
      "building:Plant Plot",
      "building:Large Plant Plot"
    ],
    "guides": [
      "G14"
    ]
  },
  {
    "id": "F17",
    "title": "Botany Projects",
    "group": "production",
    "summary": "Botany projects expand available crops and improve agriculture.",
    "points": [
      "A Botany Station provides research projects rather than simply another planting surface.",
      "Special projects such as Cotton involve technology prerequisites and must not be confused with ordinary harvested food."
    ],
    "related": [
      "building:Botany Station",
      "tech:Botany",
      "tech:Utility Planting",
      "item:Cotton"
    ],
    "guides": [
      "G15"
    ]
  },
  {
    "id": "F18",
    "title": "Meal Preparation & Preservation",
    "group": "production",
    "summary": "Meal preparation combines stored ingredients into meals, while refrigeration protects perishable supplies.",
    "points": [
      "Pantry settings and available crops determine what the Meal Assembly Table can prepare.",
      "Coolbox storage requires its own cooling resources; a prepared meal still needs adequate nutrients."
    ],
    "related": [
      "building:Meal Assembly Table",
      "building:Coolbox",
      "colonist:nutrition"
    ],
    "guides": [
      "G16"
    ]
  },
  {
    "id": "F19",
    "title": "Nutrition & Satiety",
    "group": "production",
    "summary": "Satiety reflects hunger relief, while nutrition describes the composition of the diet.",
    "points": [
      "Calories, carbohydrates, protein, fat, vitamins and dietary fiber influence colonist needs.",
      "One filling ingredient does not guarantee a balanced diet; exact demo nutrition figures may change."
    ],
    "related": [
      "colonist:satiety",
      "colonist:nutrition",
      "colonist:bladder"
    ],
    "guides": [
      "G16"
    ]
  },
  {
    "id": "F20",
    "title": "Energy & Sleep",
    "group": "people",
    "summary": "Colonists spend Energy while active and recover during sleep.",
    "points": [
      "Beds and scheduled Bedtime improve the chance of proper rest.",
      "Hunger, bladder urgency and certain traits can interrupt sleep and reduce mood."
    ],
    "related": [
      "colonist:energy",
      "colonist:schedule",
      "building:Bed"
    ],
    "guides": [
      "G17",
      "G18"
    ]
  },
  {
    "id": "F21",
    "title": "Bladder & Privacy",
    "group": "people",
    "summary": "Toilets satisfy the Bladder need, and suitable Bathrooms offer privacy.",
    "points": [
      "With no accessible toilet, colonists may have accidents with strong negative mood effects.",
      "Bathroom recognition needs permitted objects and enclosure, not just any toilet placed on a floor."
    ],
    "related": [
      "colonist:bladder",
      "station:room-types",
      "building:Toilet"
    ],
    "guides": [
      "G17"
    ]
  },
  {
    "id": "F22",
    "title": "Social Interaction",
    "group": "people",
    "summary": "Colonists need social contact outside ordinary work assignments.",
    "points": [
      "Overlapping Free Time and Downtime allow opportunities to meet.",
      "Shared rooms can support gatherings, but the wiki does not define a fixed numerical social bonus for all rooms."
    ],
    "related": [
      "colonist:social",
      "colonist:schedule",
      "environment:social"
    ],
    "guides": [
      "G18",
      "G19"
    ]
  },
  {
    "id": "F23",
    "title": "Mood & Mental Breakdowns",
    "group": "people",
    "summary": "Mood reflects life conditions and can increase the risk of accidents and mental breaks.",
    "points": [
      "Traits shape the kinds of breakdown behavior that may occur.",
      "Berserk attacks and fleeing bystanders are player-observed details awaiting reliable verification."
    ],
    "related": [
      "colonist:mood",
      "colonist:traits",
      "environment:social"
    ],
    "guides": [
      "G19"
    ]
  },
  {
    "id": "F24",
    "title": "Health & Medical Care",
    "group": "people",
    "summary": "Physical condition includes consciousness, movement, manipulation and pain, not just one health bar.",
    "points": [
      "Medical Beds, bandages and qualified workers support care.",
      "Advanced medications mentioned in the wiki are not treated as playable demo supplies."
    ],
    "related": [
      "colonist:health",
      "colonist:medical",
      "building:Medical Bed",
      "item:Bandage"
    ],
    "guides": [
      "G20"
    ]
  },
  {
    "id": "F25",
    "title": "Skills, Attributes & Traits",
    "group": "people",
    "summary": "Skills, attributes, interests and traits shape the colony's workforce.",
    "points": [
      "Interests can speed learning and make work more enjoyable.",
      "Some traits prohibit tasks regardless of skill level."
    ],
    "related": [
      "colonist:skills",
      "colonist:attributes",
      "colonist:traits"
    ],
    "guides": [
      "G01",
      "G18"
    ]
  },
  {
    "id": "F26",
    "title": "Schedules & Shifts",
    "group": "people",
    "summary": "Schedules divide each day into work, personal time and sleep.",
    "points": [
      "Work, Free Time, Downtime and Bedtime have different rules.",
      "Staggered shifts improve coverage but can leave too little shared social time."
    ],
    "related": [
      "colonist:schedule",
      "colonist:social"
    ],
    "guides": [
      "G18"
    ]
  },
  {
    "id": "F27",
    "title": "Work Priorities",
    "group": "people",
    "summary": "Work Priorities decide which kinds of jobs each colonist is allowed or expected to perform.",
    "points": [
      "The per-colonist work matrix is distinct from a world errand's 1–9 priority.",
      "A construction job can be urgent but remain undone if no one may build."
    ],
    "related": [
      "colonist:priorities",
      "station:priority"
    ],
    "guides": [
      "G06",
      "G18"
    ]
  },
  {
    "id": "F28",
    "title": "Outdoor Work & Suit Oxygen",
    "group": "people",
    "summary": "Outdoor work exposes colonists to a limited portable oxygen supply and Martian weather.",
    "points": [
      "Airlock access and travel time are essential; manual Go To does not force construction work.",
      "During a storm, overriding the default outside restriction can cause worsening mood."
    ],
    "related": [
      "colonist:outside",
      "environment:outdoor",
      "building:Airlock"
    ],
    "guides": [
      "G23"
    ]
  },
  {
    "id": "F29",
    "title": "Research & Technology",
    "group": "progress",
    "summary": "Research unlocks additional technologies, buildings and specialised production options.",
    "points": [
      "Prerequisites and tiers determine which research can be selected next.",
      "Opens means subsequent technology; Unlocks means enabled objects; Touchdown is the initial research package."
    ],
    "related": [
      "tech:Touchdown",
      "building:Basic Research Table",
      "station:overview"
    ],
    "guides": [
      "G21"
    ]
  },
  {
    "id": "F30",
    "title": "Orbital Support / Supply Drops",
    "group": "progress",
    "summary": "Orbital Support provides recurring offers of outside assistance.",
    "points": [
      "The same event system can offer supplies or a new colonist; accepting a recruit adds further landing and weather requirements.",
      "The different packages are variants of one support mechanic, not separate systems."
    ],
    "related": [
      "colonist:crew",
      "station:storms",
      "building:Supply Rocket Pad"
    ],
    "guides": [
      "G22"
    ]
  },
  {
    "id": "F31",
    "title": "Dust Storms",
    "group": "progress",
    "summary": "Dust storms affect outdoor safety and station power.",
    "points": [
      "Solar generation suffers while wind generation can improve.",
      "The game restricts outdoor trips automatically; a manual override brings further risks."
    ],
    "related": [
      "environment:outdoor",
      "station:storms",
      "building:Wind Turbine"
    ],
    "guides": [
      "G23"
    ]
  },
  {
    "id": "F32",
    "title": "Starting Life Support Failure",
    "group": "progress",
    "summary": "The landing Life Support Machine is a temporary safety net rather than permanent infrastructure.",
    "points": [
      "The wiki documents an early repairable failure and a later permanent breakdown.",
      "Independent electricity, O2 production and CO2 removal must replace it."
    ],
    "related": [
      "station:failures",
      "building:Life Support Machine",
      "building:Oxygen Diffuser",
      "building:CO2 Scrubber"
    ],
    "guides": [
      "G24"
    ]
  },
  {
    "id": "F33",
    "title": "Death & Funerals",
    "group": "progress",
    "summary": "A colonist's death leads to a grave and a funeral event.",
    "points": [
      "Deaths can follow serious survival or health hazards; colonists do not die of old age in the documented demo.",
      "Graves and funerals have placement and outdoor safety implications."
    ],
    "related": [
      "colonist:death",
      "building:Grave"
    ],
    "guides": []
  },
  {
    "id": "F34",
    "title": "Demo Completion",
    "group": "progress",
    "summary": "The demo has a completion milestone without necessarily ending the active save.",
    "points": [
      "A completion message signals the reached demo objective.",
      "The player may continue the colony; this information does not need a separate how-to guide."
    ],
    "related": [
      "station:overview"
    ],
    "guides": []
  }
];
