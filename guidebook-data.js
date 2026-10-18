/* RDCpedia Guidebook v0.9 — actionable demo-era walk-throughs.
   The approved Features/Guidebook plan is kept in docs/features-guidebook-plan.md.
   Each guide: objective, requirements, steps, verification, troubleshooting, links,
   and existing real building/item asset references. No invented game screenshots.
   Game functions that are demo-inactive or unverified remain caveated. */
const GUIDE_GROUPS = [
  {
    "id": "first",
    "title": "First Steps",
    "icon": "◈"
  },
  {
    "id": "tools",
    "title": "Tools & Construction",
    "icon": "▦"
  },
  {
    "id": "power",
    "title": "Power, Air & Water",
    "icon": "ϟ"
  },
  {
    "id": "industry",
    "title": "Logistics & Manufacturing",
    "icon": "⚒"
  },
  {
    "id": "food",
    "title": "Growing & Cooking",
    "icon": "♧"
  },
  {
    "id": "people",
    "title": "Colonist Care",
    "icon": "♟"
  },
  {
    "id": "research",
    "title": "Research & Support",
    "icon": "⚙"
  },
  {
    "id": "crisis",
    "title": "Hazards & Survival",
    "icon": "△"
  }
];
const GUIDES = [
  {
    "id": "G01",
    "title": "Start a New Colony",
    "group": "first",
    "goal": "Choose a map and starting crew with enough coverage for the first days.",
    "requirements": "A new expedition setup; review available colonist details.",
    "steps": [
      "Select the available terrain, map size and difficulty options for your expedition.",
      "Compare starting candidates by skills, interests, traits and work restrictions; reroll or rename candidates if desired.",
      "Make sure the crew has coverage for construction, medicine, food production and research rather than only one specialism.",
      "Confirm the expedition and inspect your starting resources and Life Support Machine after landing."
    ],
    "success": "A colony starts with the selected crew and you can inspect its work skills and available resources.",
    "troubleshooting": "If essential work stalls, inspect traits and permitted work categories before assuming the game is broken.",
    "related": [
      "colonist:crew",
      "colonist:skills",
      "colonist:traits",
      "building:Life Support Machine"
    ],
    "visual": [
      "building:Life Support Machine",
      "building:Prefab Hull"
    ]
  },
  {
    "id": "G02",
    "title": "Expand the Hull",
    "group": "first",
    "goal": "Extend the pressurized station floor without leaving unfinished or inaccessible orders.",
    "requirements": "Hull segments (or Concrete and its technology), available builders, accessible terrain.",
    "steps": [
      "Open the Hull build category and select Prefab Hull, or Concrete Hull after researching Concrete Production.",
      "Check the required Hull or Concrete in the resource readout and make sure a colonist may perform Construction.",
      "Click a cell or drag over an area adjoining the existing base to place construction orders.",
      "Wait for delivery and construction; check the automatically generated outer wall.",
      "Use F1/F2 after the expansion to verify its atmosphere before relying on the new space."
    ],
    "success": "The new floor is built, enclosed and reachable; air readings are acceptable for occupation.",
    "troubleshooting": "If a tile stays unfinished, check Available/Needed resources, access and Construction priority. Structural Hull cannot always be removed immediately.",
    "related": [
      "station:hulls",
      "station:materials",
      "station:priority",
      "tech:Concrete Production"
    ],
    "visual": [
      "building:Prefab Hull",
      "building:Concrete Hull"
    ]
  },
  {
    "id": "G03",
    "title": "Build a Recognized Room",
    "group": "first",
    "goal": "Make a room that the game recognizes as the intended type.",
    "requirements": "Completed Hull, an interior wall/door arrangement, and required permitted furniture.",
    "steps": [
      "Choose a room type and check its minimum size and required furniture categories.",
      "Use interior Walls to divide the completed hull and place a Door for access.",
      "Install the needed objects; for a Bathroom, start with a Toilet, for a Bedroom with a Bed.",
      "Open F7 and hover over the space to inspect the recognized type and any failed requirement.",
      "Remove incompatible equipment or change the room's size/layout if it remains unclassified."
    ],
    "success": "F7 identifies the expected room category rather than an unclassified area.",
    "troubleshooting": "A room can be recognized without every planned room bonus being active in the demo. Check size, enclosure and allowed object categories.",
    "related": [
      "station:rooms",
      "station:room-types",
      "station:overlays",
      "building:Wall",
      "building:Door"
    ],
    "visual": [
      "building:Wall",
      "building:Door",
      "building:Toilet"
    ]
  },
  {
    "id": "G04",
    "title": "Cancel, Deconstruct or Move",
    "group": "tools",
    "goal": "Use the right command to cancel an order, dismantle a structure or relocate eligible furniture.",
    "requirements": "A selected pending order or existing object; sufficient access for assigned workers.",
    "steps": [
      "For an unfinished mining/build/deconstruct order, use Cancel [C] to remove the order without dismantling a completed object.",
      "For a completed object, use Deconstruct [X] and select the object or drag across the required area.",
      "Before painting a large area, check whether the filter is All, Building, Hull or Wires.",
      "Use Move only on structures for which relocation is allowed; structural Hull, Walls and Wires must be rebuilt instead.",
      "Wait for an eligible colonist and check the recovered resources after deconstruction."
    ],
    "success": "The intended order disappears or object is safely removed/moved; adjacent infrastructure stays intact.",
    "troubleshooting": "If Hull cannot be dismantled, check supported structures, airlocks and access. A high priority cannot override structural restrictions.",
    "related": [
      "station:deconstruct",
      "station:priority",
      "station:hulls"
    ],
    "visual": [
      "building:Wall",
      "building:Wire"
    ]
  },
  {
    "id": "G05",
    "title": "Mine and Collect Resources",
    "group": "tools",
    "goal": "Mine terrain and bring raw materials into usable storage.",
    "requirements": "Reachable resource deposit, Mining work enabled, and an appropriate stockpile.",
    "steps": [
      "Select Mine [G] in the tools interface.",
      "Click an individual resource tile or drag to order mining in a larger area.",
      "Check that at least one colonist is permitted to perform Mining and can reach the site safely.",
      "Wait for extraction and hauling; place or configure a Stockpile that accepts the extracted material.",
      "Check the resource HUD or target storage for the recovered materials."
    ],
    "success": "The deposit is mined and its resource appears in the station's inventory or storage.",
    "troubleshooting": "If miners do not start, check work restrictions, access, priorities and outdoor oxygen; Cancel [C] removes unintended orders.",
    "related": [
      "station:mining",
      "station:storage",
      "colonist:outside"
    ],
    "visual": [
      "item:Regolith",
      "building:Stockpile"
    ]
  },
  {
    "id": "G06",
    "title": "Why Is This Job Not Getting Done?",
    "group": "tools",
    "goal": "Diagnose why a particular construction or production job is not progressing.",
    "requirements": "A waiting work order or machine, and access to the resource and priorities panels.",
    "steps": [
      "Inspect the object's status and identify whether materials, workers, output space or electricity are missing.",
      "Compare Total with Available and Needed inventory values; reserved stock is not always usable.",
      "Check the route from worker and storage to the target; indoor/outdoor placement affects access.",
      "Verify that at least one colonist is allowed to perform the relevant job under Work Priorities.",
      "Only then adjust its world Priority [P]; for Hull or Wires, switch away from the default Building filter as needed."
    ],
    "success": "An eligible worker starts the required errand, or the actual shortage is clearly identified.",
    "troubleshooting": "World priority and work permission are separate. Raising a priority cannot create material, supply power or remove construction restrictions.",
    "related": [
      "station:priority",
      "station:inventory",
      "colonist:priorities",
      "station:materials"
    ],
    "visual": [
      "building:Prefab Hull",
      "building:Wire"
    ]
  },
  {
    "id": "G07",
    "title": "Build a Working Power Grid",
    "group": "power",
    "goal": "Connect a power generator to a consumer and check the live network.",
    "requirements": "Available generator, Copper Wire and an electric consumer; optional battery.",
    "steps": [
      "Build a Solar Panel outdoors where its placement is allowed.",
      "Select Wire in the Power menu and connect the generator to the target machine's network.",
      "Add Small Battery storage if you need reserve power beyond available generation.",
      "Open F4 Power Components overlay and follow the cables from producer to consumer.",
      "Inspect the network's current load and generation/storage availability; correct missing connections."
    ],
    "success": "F4 shows the intended circuit and the consumer reports usable power.",
    "troubleshooting": "If the consumer remains offline, inspect cable breaks, disabled devices, production versus demand and battery charge.",
    "related": [
      "station:power",
      "station:overlays",
      "building:Wire",
      "building:Solar Panel"
    ],
    "visual": [
      "building:Solar Panel",
      "building:Wire",
      "building:Smelter"
    ]
  },
  {
    "id": "G08",
    "title": "Create a Breathable Station",
    "group": "power",
    "goal": "Keep a larger station breathable without depending forever on the landing machine.",
    "requirements": "Electric supply, Water for oxygen equipment, researched Oxygen Regulation, builders.",
    "steps": [
      "Research Oxygen Regulation to make Oxygen Diffuser and CO2 Scrubber available.",
      "Build and power the equipment at suitable indoor locations.",
      "Ensure the Oxygen Diffuser receives enough Water.",
      "Open F1 to evaluate oxygen and F2 to evaluate CO2; inspect distant rooms as well as the center.",
      "Add or reposition capacity if levels remain unsafe, and verify that new sections can exchange air."
    ],
    "success": "O2 and CO2 overlays show acceptable conditions in occupied rooms without relying on the temporary Life Support Machine.",
    "troubleshooting": "Low O2 and high CO2 are separate problems. If equipment is offline, check power, water and operation before installing more units.",
    "related": [
      "station:atmosphere",
      "environment:indoor",
      "tech:Oxygen Regulation",
      "station:overlays"
    ],
    "visual": [
      "building:Oxygen Diffuser",
      "building:CO2 Scrubber"
    ]
  },
  {
    "id": "G09",
    "title": "Turn Ice into Water",
    "group": "power",
    "goal": "Convert mined Ice into usable Water and keep it available to consumers.",
    "requirements": "Mineable Ice, Ice Processing Station, permitted work and any required power.",
    "steps": [
      "Mine Ice deposits and arrange collection of the recovered Ice.",
      "Build Ice Processing Station at a valid location and check its operating needs.",
      "Provide Ice input and configure processing if required by the machine.",
      "Use Liquid Storage when available to maintain an accessible reserve of Water.",
      "Monitor Water inventory and consumption by life support, crops and toilets; account for waste processing."
    ],
    "success": "Water appears in inventory and water-consuming devices can operate.",
    "troubleshooting": "If nothing is produced, check Ice availability, the machine's status, permitted workers and available power. F5 Plumbing is inactive in the demo.",
    "related": [
      "station:water",
      "station:inventory",
      "building:Ice Processing Station",
      "building:Liquid Storage"
    ],
    "visual": [
      "item:Ice",
      "building:Ice Processing Station",
      "item:Water"
    ]
  },
  {
    "id": "G10",
    "title": "Set Up Storage & Hauling",
    "group": "industry",
    "goal": "Route materials to usable storage near the machines that need them.",
    "requirements": "Stockpile/Storage Container/Coolbox or Liquid Storage depending on the resource.",
    "steps": [
      "Choose the storage type compatible with the resource: bulk outdoor solid, indoor component, perishable food or fluid.",
      "Place it on a valid tile with access for hauling colonists.",
      "Set permissions to accept the intended item classes and exclude unnecessary stock.",
      "Adjust storage priority if you need resources moved to a preferred location.",
      "Check where items end up and whether machines can reach the inputs."
    ],
    "success": "Eligible items are delivered into the chosen container and available to the intended workstation.",
    "troubleshooting": "Wrong item permissions, insufficient storage space, poor access or unavailable hauling work can prevent deliveries.",
    "related": [
      "station:storage",
      "colonist:priorities",
      "station:inventory"
    ],
    "visual": [
      "building:Stockpile",
      "building:Storage Container",
      "building:Coolbox"
    ]
  },
  {
    "id": "G11",
    "title": "Run a Crafting Recipe",
    "group": "industry",
    "goal": "Produce an item by configuring a machine and its recipe.",
    "requirements": "Required technology, correct workstation, input resources and any machine-specific work/power needs.",
    "steps": [
      "Inspect the output item and identify the workstation and input recipe.",
      "Research the machine's technology if necessary; build it on a valid tile.",
      "Supply the listed ingredients and connect power if the machine needs it.",
      "Allow a colonist to perform its operation/crafting task when required.",
      "Select the recipe and choose Fixed quantity, If less than or Continuous production.",
      "Observe the machine status and verify the product appears in accessible output/storage."
    ],
    "success": "At least one batch completes and the output item is present.",
    "troubleshooting": "A machine can wait for materials, electricity, worker permission or output space. Those are separate from the selected production mode.",
    "related": [
      "station:production",
      "station:storage",
      "colonist:priorities",
      "building:Crafting Table"
    ],
    "visual": [
      "item:Iron Ore",
      "building:Smelter",
      "item:Iron Plate"
    ]
  },
  {
    "id": "G12",
    "title": "Smelt Ore into Materials",
    "group": "industry",
    "goal": "Turn Iron Ore or Copper Ore into useful smelted materials.",
    "requirements": "Raw ore, built Smelter, sufficient electricity and permitted operating work.",
    "steps": [
      "Mine or receive Iron Ore or Copper Ore and make the input available.",
      "Build a Smelter where its placement rules allow, then connect it to the Power Grid.",
      "Open the Smelter recipes and choose the output: Iron Plate for iron, Copper Wire for copper.",
      "Set a production quantity or appropriate automatic order.",
      "Check power, material delivery, worker assignment and the resulting output."
    ],
    "success": "Smelter has completed the intended batch and Iron Plate/Copper Wire appears in stock.",
    "troubleshooting": "If it stalls, verify the exact ore recipe, electricity connection and work permissions before adding more Smelters.",
    "related": [
      "station:production",
      "station:power",
      "building:Smelter",
      "item:Iron Ore",
      "item:Copper Ore"
    ],
    "visual": [
      "item:Iron Ore",
      "building:Smelter",
      "item:Iron Plate"
    ]
  },
  {
    "id": "G13",
    "title": "Produce Concrete",
    "group": "industry",
    "goal": "Manufacture Concrete for hull expansion using local resources.",
    "requirements": "Concrete Production technology, Regolith, Rock Crusher, Concrete Mixer and Water.",
    "steps": [
      "Research Concrete Production to unlock its processing buildings.",
      "Obtain Regolith and process it in a Rock Crusher to make Crushed Regolith.",
      "Supply Crushed Regolith and Water to a Concrete Mixer.",
      "Configure the concrete production order and ensure machine operating requirements are met.",
      "Use the resulting Concrete when ordering Concrete Hull construction."
    ],
    "success": "Concrete is produced and becomes Available for future building orders.",
    "troubleshooting": "Check both processing stages and Water supply; building Concrete Mixer alone does not replace the crusher step.",
    "related": [
      "tech:Concrete Production",
      "station:production",
      "station:hulls",
      "building:Rock Crusher",
      "building:Concrete Mixer"
    ],
    "visual": [
      "item:Regolith",
      "building:Rock Crusher",
      "item:Crushed Regolith",
      "building:Concrete Mixer",
      "item:Concrete"
    ]
  },
  {
    "id": "G14",
    "title": "Grow and Harvest Crops",
    "group": "food",
    "goal": "Grow a crop and deliver the harvest as a usable ingredient.",
    "requirements": "Plant Rack/Plant Plot, an available crop and its water or fertilizer needs, and permitted Botany work.",
    "steps": [
      "Build a suitable growing station inside the colony.",
      "Select one of the currently available crops for that station.",
      "Supply Water and any fertilizer the setup calls for.",
      "Check that someone is allowed to perform Botany work and the plant has time to grow.",
      "Harvest and confirm the resulting food or crop item reaches suitable storage."
    ],
    "success": "A harvest item is added to inventory or allowed food storage.",
    "troubleshooting": "If growth stops, inspect the crop's resources, work permissions and the chosen plot's accepted crop types.",
    "related": [
      "station:water",
      "colonist:skills",
      "building:Plant Rack",
      "building:Plant Plot"
    ],
    "visual": [
      "building:Plant Rack",
      "item:Water",
      "item:Lettuce"
    ]
  },
  {
    "id": "G15",
    "title": "Use Botany Projects",
    "group": "food",
    "goal": "Use Botany Station projects to make additional plants available.",
    "requirements": "Botany technology and station, required resources and a suitable research/operation assignment.",
    "steps": [
      "Research Botany and build the Botany Station.",
      "Open the project list and inspect the required resources and unavailable/available crop projects.",
      "Choose a project that your current research and materials support.",
      "Let an eligible colonist complete the project, supplying Water/Fertilizer if shown as required.",
      "Verify that the new crop or improvement is now available for a suitable growing structure."
    ],
    "success": "The completed Botany project unlocks the expected plant or improvement.",
    "troubleshooting": "Cotton requires its relevant technology and project; don't assume every plant is available directly from the start.",
    "related": [
      "building:Botany Station",
      "tech:Botany",
      "tech:Utility Planting",
      "item:Cotton"
    ],
    "visual": [
      "building:Botany Station",
      "item:Cotton"
    ]
  },
  {
    "id": "G16",
    "title": "Prepare Useful Meals",
    "group": "food",
    "goal": "Prepare useful meals from crops rather than relying only on starting rations.",
    "requirements": "Meal Preparation technology, Meal Assembly Table, ingredients, work permission and food storage.",
    "steps": [
      "Research Meal Preparation and build a Meal Assembly Table.",
      "Deliver different edible ingredients and inspect the Pantry settings.",
      "Select a meal-production order; start with a modest batch if ingredient stock is incomplete.",
      "Check the produced food and its nutritional composition, not only the Satiety value.",
      "Store perishable ingredients and meals in a suitable Coolbox when possible."
    ],
    "success": "Prepared food is available to colonists and it provides an acceptable spread of nutrients.",
    "troubleshooting": "A missing ingredient can lead to nutritionally poor batches; check Pantry settings, allowed inputs, workers and cold storage.",
    "related": [
      "tech:Meal Preparation",
      "colonist:nutrition",
      "station:production",
      "building:Meal Assembly Table",
      "building:Coolbox"
    ],
    "visual": [
      "item:Carrots",
      "building:Meal Assembly Table",
      "item:Cooked Food"
    ]
  },
  {
    "id": "G17",
    "title": "Provide Sleep & Bathroom Privacy",
    "group": "people",
    "goal": "Give colonists a place to recover Energy and satisfy Bladder needs with privacy.",
    "requirements": "A bed or bunk, accessible toilet, enclosed room space and reasonable rest time.",
    "steps": [
      "Build a Bed or Bunk Bed for the intended sleepers.",
      "Reserve Bedtime in schedules so colonists can recharge Energy without constant work.",
      "Place a Toilet and build the enclosure needed for a recognized Bathroom.",
      "Use F7 to check room recognition; inspect whether access is blocked.",
      "Watch for wake-ups caused by hunger, bladder urgency or noise."
    ],
    "success": "Colonists can reach beds and toilets; the room is recognized where required and unmet-need penalties diminish.",
    "troubleshooting": "A Toilet alone does not always make a Bathroom. An empty bed doesn't prevent interrupted sleep if Satiety or Bladder is urgent.",
    "related": [
      "colonist:energy",
      "colonist:bladder",
      "colonist:schedule",
      "station:room-types"
    ],
    "visual": [
      "building:Bed",
      "building:Toilet"
    ]
  },
  {
    "id": "G18",
    "title": "Set Work and Social Schedules",
    "group": "people",
    "goal": "Organize colonists' work while giving them enough overlapping time for social contact.",
    "requirements": "Access to colonist skills/traits, Work Priorities and the 24-hour Schedule Editor.",
    "steps": [
      "Check each colonist's skills, interests and traits for appropriate and forbidden jobs.",
      "Set Work Priorities to allow necessary specialists and keep essential duties covered.",
      "Assign hourly Work, Free Time, Downtime and Bedtime blocks.",
      "Stagger some shifts for coverage but leave overlapping Free Time or Downtime for socialization.",
      "Observe Energy, Social and Mood; adjust as the crew grows."
    ],
    "success": "Work is covered and colonists get sleep and opportunities to socialize.",
    "troubleshooting": "A high world Priority [P] won't make a colonist perform a forbidden job. All-Downtime crews stop working; no shared free time limits social contact.",
    "related": [
      "colonist:priorities",
      "colonist:skills",
      "colonist:schedule",
      "colonist:social"
    ],
    "visual": [
      "building:Bed",
      "building:Chair"
    ]
  },
  {
    "id": "G19",
    "title": "Reduce Mood Problems",
    "group": "people",
    "goal": "Reduce persistent negative Mood modifiers before they cause worse incidents.",
    "requirements": "Access to individual conditions, Mood modifiers, traits and schedules.",
    "steps": [
      "Select the affected colonist and inspect Mood and its active positive/negative effects.",
      "Check Energy, Satiety, Bladder and Social for urgent needs.",
      "Correct the practical cause: suitable rest, food, toilet privacy or overlapping free time.",
      "Review whether the colonist is forced into work disliked or prohibited by traits.",
      "If a mental breakdown occurs, focus on safety and underlying causes rather than assuming one guaranteed behavior."
    ],
    "success": "Mood modifiers improve over time and the colonist returns to a safer, more stable condition.",
    "troubleshooting": "Low Mood raises risks; wiki thresholds are estimates, not a scripted guarantee. Berserk bystander reactions still need verification.",
    "related": [
      "colonist:mood",
      "environment:social",
      "colonist:traits",
      "colonist:conditions"
    ],
    "visual": [
      "building:Bed",
      "building:Toilet",
      "building:Chair"
    ]
  },
  {
    "id": "G20",
    "title": "Help an Injured Colonist",
    "group": "people",
    "goal": "Give an injured or sick colonist access to basic available medical care.",
    "requirements": "Medical Bed or Bandage as appropriate, and a colonist allowed Medical work.",
    "steps": [
      "Identify the immediate danger; if atmosphere or outside oxygen is unsafe, correct the hazard first.",
      "Build or use a Medical Bed for rest and recovery.",
      "Ensure at least one suitable colonist may perform Medical work.",
      "Provide Bandage for basic wounds when the medical task calls for it.",
      "Monitor the patient's health indicators and recovery."
    ],
    "success": "The patient is no longer exposed to the hazard and can receive care/rest.",
    "troubleshooting": "A medical bed cannot replace oxygen. Do not assume advanced pharmaceuticals mentioned in plans are already playable.",
    "related": [
      "colonist:health",
      "colonist:medical",
      "station:atmosphere",
      "building:Medical Bed",
      "item:Bandage"
    ],
    "visual": [
      "item:Bandage",
      "building:Medical Bed"
    ]
  },
  {
    "id": "G21",
    "title": "Start Research",
    "group": "research",
    "goal": "Research a technology and use the object it unlocks.",
    "requirements": "Basic Research Table, available research worker and the target technology's prerequisites.",
    "steps": [
      "Build the Basic Research Table and allow a colonist to perform Research.",
      "Open the research tree and select an available target.",
      "Check its Tier and Prerequisites, then finish any earlier required research first.",
      "Complete the chosen technology and inspect its Unlocks for newly available objects.",
      "Open the relevant build menu and construct the newly unlocked building if needed."
    ],
    "success": "The technology is complete and its unlocked object becomes selectable.",
    "troubleshooting": "Touchdown is the starting package, not a separate research action. Opens refers to subsequent technology, Unlocks to buildings or other content.",
    "related": [
      "building:Basic Research Table",
      "tech:Botany",
      "tech:Touchdown",
      "colonist:skills"
    ],
    "visual": [
      "building:Basic Research Table",
      "building:Botany Station"
    ]
  },
  {
    "id": "G22",
    "title": "Use Orbital Support",
    "group": "research",
    "goal": "Choose and accept an appropriate orbital support offer.",
    "requirements": "A current Supply Drop offer; additional landing/weather requirements if choosing a new colonist.",
    "steps": [
      "Wait for an orbital support event and inspect the available options.",
      "Compare the offered supplies or candidate rather than treating every option as a separate event.",
      "For material support, select the package that best addresses current shortages and confirm its delivery.",
      "For a new colonist, inspect the candidate and check the required Supply Rocket Pad and weather conditions.",
      "Confirm or decline and verify the outcome in the colony."
    ],
    "success": "The selected offer is accepted and the relevant supplies or colonist arrive when the delivery conditions allow.",
    "troubleshooting": "An active dust storm or missing landing pad can prevent accepting a new colonist. Don't assume the same restrictions apply to every material offer.",
    "related": [
      "colonist:crew",
      "station:storms",
      "building:Supply Rocket Pad"
    ],
    "visual": [
      "building:Supply Rocket Pad"
    ]
  },
  {
    "id": "G23",
    "title": "Get Through a Dust Storm",
    "group": "crisis",
    "goal": "Keep critical station services running during a dust storm and limit the danger of outside work.",
    "requirements": "Storm warning, power supply plan and enough safe interior life support.",
    "steps": [
      "Read the storm warning to estimate when conditions will change.",
      "Prepare battery reserves and alternative generation where available; solar output will be disrupted.",
      "Let the automatic outside-work restriction prevent nonessential exposure.",
      "If outside work is truly necessary, use Allow colonists to go outside and evaluate suit oxygen/travel distance.",
      "Monitor power, atmosphere and worsening Mood penalties during exposure; return to normal restrictions afterward."
    ],
    "success": "Life support and essential machines remain powered and colonists can stay indoors safely.",
    "troubleshooting": "Storms stop solar production while wind output may increase. The manual override does not grant immunity to weather or oxygen depletion.",
    "related": [
      "environment:outdoor",
      "station:power",
      "colonist:outside",
      "building:Small Battery"
    ],
    "visual": [
      "building:Solar Panel",
      "building:Small Battery",
      "building:Wind Turbine"
    ]
  },
  {
    "id": "G24",
    "title": "Survive the Starting Life Support Failure",
    "group": "crisis",
    "goal": "Replace temporary landing life support before its permanent failure.",
    "requirements": "Independent electric production, Water, Oxygen Diffuser and CO2 Scrubber research/construction.",
    "steps": [
      "Treat the starting Life Support Machine as temporary; the demo wiki records an early repairable fault.",
      "Research and build Oxygen Diffuser and CO2 Scrubber with adequate electricity and Water.",
      "Verify the base's O2 and CO2 using F1 and F2, and electricity using F4.",
      "Add capacity or storage if the independent devices cannot support occupied rooms.",
      "Prepare for the later permanent failure; deconstruct the old machine only after replacement systems work."
    ],
    "success": "The station keeps adequate oxygen and CO2 levels without relying on the original landing machine.",
    "troubleshooting": "Wiki timing is approximate (early fault about Sol 5; final failure around Sol 14). Emergency task priority cannot replace missing power, water or materials.",
    "related": [
      "station:failures",
      "station:atmosphere",
      "station:power",
      "building:Life Support Machine"
    ],
    "visual": [
      "building:Life Support Machine",
      "building:Oxygen Diffuser",
      "building:CO2 Scrubber"
    ]
  }
];
