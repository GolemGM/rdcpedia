/* RDCpedia Controls v1.0 — UI and control reference only.
   Source: Getting Started, Management & Operations, Events & Crises,
   Storage Units, Research, and related wiki articles.
   Deliberately concise: longer task walk-throughs remain in Guidebook.
   The exact location of the Dust Storm outdoor toggle is NOT specified by
   the sources, only its name and operation. Controls pages mark that gap.
   Speed multiplier descriptions conflict in the wiki; shortcut keys are
   retained without choosing an unverified multiplier mapping. */
const CONTROL_GROUPS = [
  {
    "id": "camera",
    "title": "Camera & Time",
    "icon": "◉"
  },
  {
    "id": "hud",
    "title": "HUD & Overlays",
    "icon": "▤"
  },
  {
    "id": "tools",
    "title": "Tools & Selection",
    "icon": "▦"
  },
  {
    "id": "crew",
    "title": "Colonist Management",
    "icon": "♟"
  },
  {
    "id": "build",
    "title": "Buildings & Production",
    "icon": "⚒"
  },
  {
    "id": "events",
    "title": "Research & Events",
    "icon": "⚙"
  }
];
const CONTROLS = [
  {
    "id": "camera",
    "group": "camera",
    "title": "Camera Controls",
    "where": "During normal gameplay, use the keyboard and mouse to control the colony view.",
    "summary": "Navigate the colony without moving a colonist or issuing any job order.",
    "actions": [
      {
        "label": "W / A / S / D",
        "description": "Pan the camera across the colony."
      },
      {
        "label": "Hold Right Mouse Button",
        "description": "Pan the view with the mouse."
      },
      {
        "label": "Mouse Wheel",
        "description": "Zoom in and out."
      },
      {
        "label": "Q / E",
        "description": "Rotate the camera."
      },
      {
        "label": "Hold Middle Mouse Button",
        "description": "Rotate the camera with the mouse."
      }
    ],
    "tip": "Moving the camera does not give orders to the crew. For tracking people through walls, use the separate X-Ray viewing mode.",
    "related": [
      "station:views",
      "guide:G01"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "time",
    "group": "camera",
    "title": "Time & Pause",
    "where": "Top-left HUD, alongside the day and planet-clock display.",
    "summary": "Pause to plan, resume work and adjust how quickly the colony simulation runs.",
    "actions": [
      {
        "label": "Space",
        "description": "Toggle pause and play."
      },
      {
        "label": "1 / 2 / 3",
        "description": "Select the available speed levels using the keyboard."
      },
      {
        "label": "Tab",
        "description": "Cycle through speed levels."
      },
      {
        "label": "Pause / Speed buttons",
        "description": "Click the corresponding controls in the top-left HUD."
      },
      {
        "label": "Planet pictogram",
        "description": "Hover to inspect the exact current in-game time."
      },
      {
        "label": "Day counter",
        "description": "Shows how many days have passed."
      }
    ],
    "tip": "The wiki disagrees about one of the displayed speed multipliers, so the numbers of each in-game speed are left to the actual button labels until verified.",
    "related": [
      "feature:F01",
      "station:overview"
    ],
    "important": false,
    "sourceNote": "The wiki uses both 1×/2×/5× and 1×/3×/5× in different passages; keys are documented but numeric mapping should be rechecked."
  },
  {
    "id": "top-left",
    "group": "hud",
    "title": "Top-Left HUD & Crew Bar",
    "where": "Upper-left corner of the gameplay screen.",
    "summary": "Find the clock, management menus, alerts and the current crew roster in one place.",
    "actions": [
      {
        "label": "Clock / Day / Speed",
        "description": "Show current day, time and speed controls."
      },
      {
        "label": "Schedule",
        "description": "Open the Schedule Editor for shift profiles and hourly activity blocks."
      },
      {
        "label": "Priority",
        "description": "Open the Work Priorities matrix, not the world task priority tool."
      },
      {
        "label": "Research",
        "description": "Open the technology tree and available research choices."
      },
      {
        "label": "Tutorial / Info (i)",
        "description": "Open the in-game Tutorial Hub."
      },
      {
        "label": "Event & Alert banner",
        "description": "Read warnings and upcoming colony events immediately below the main controls."
      },
      {
        "label": "Colonist cards",
        "description": "Inspect portraits, activity indicators, Mood and Satiety; scroll the roster if it extends beyond the visible bar."
      }
    ],
    "tip": "A work-priority panel opened from this area is not the same as Priority [P] in the bottom-right action bar.",
    "related": [
      "control:work-matrix",
      "control:schedule",
      "control:research",
      "control:storm",
      "guide:G18",
      "guide:G21"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "diagnostics",
    "group": "hud",
    "title": "Diagnostic Overlays",
    "where": "Top-right diagnostic toolbar; the listed function keys are shortcuts.",
    "summary": "Switch from an ordinary view to measurements of air quality, electricity or recognized rooms.",
    "actions": [
      {
        "label": "F1 — Oxygen",
        "description": "Display oxygen concentration inside the station."
      },
      {
        "label": "F2 — Carbon Dioxide",
        "description": "Display CO2 levels, independent of F1."
      },
      {
        "label": "F3 — Hazardous Gases",
        "description": "Show toxin-overlay UI; the underlying hazardous-gas gameplay is inactive in the current demo."
      },
      {
        "label": "F4 — Power Components",
        "description": "Display wires, producers, consumers and battery conditions. Selecting Wire also opens this view."
      },
      {
        "label": "F5 — Plumbing",
        "description": "Overlay listed in the interface, currently non-functional in the demo."
      },
      {
        "label": "F7 — Rooms",
        "description": "Display recognized room categories and hover to inspect their requirements."
      }
    ],
    "tip": "No confirmed F6 function is provided by the current wiki. Do not assume it is missing from the keyboard by accident.",
    "related": [
      "station:overlays",
      "station:atmosphere",
      "station:power",
      "station:rooms",
      "guide:G07",
      "guide:G08",
      "guide:G03"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "view-modes",
    "group": "hud",
    "title": "Building View Modes",
    "where": "Top-right structural viewing controls.",
    "summary": "Expose the parts of a crowded base that are hidden behind ceilings or walls.",
    "actions": [
      {
        "label": "Complete View",
        "description": "Display the whole hull, including ceilings."
      },
      {
        "label": "Ceiling-Free View",
        "description": "Hide the ceilings to work with interior equipment."
      },
      {
        "label": "Minimal Floor View",
        "description": "Reduce the visible hull to the floor layout."
      },
      {
        "label": "X-Ray View",
        "description": "Reveal colonist positions behind walls."
      }
    ],
    "tip": "These are visualization modes, not construction commands. Gas and power conditions belong to the diagnostic overlays.",
    "related": [
      "station:views",
      "station:overlays",
      "guide:G03"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "resources",
    "group": "hud",
    "title": "Resources & Inventory Tooltip",
    "where": "Top-right resource overview; hover an item icon for details.",
    "summary": "Understand why a visible stock count may not be available for the next construction order.",
    "actions": [
      {
        "label": "Total",
        "description": "All currently tracked units in the colony."
      },
      {
        "label": "Available",
        "description": "Units not reserved and available for use."
      },
      {
        "label": "In Use",
        "description": "Units reserved or assigned to current work."
      },
      {
        "label": "Needed",
        "description": "Units requested for pending construction."
      },
      {
        "label": "Resource icon",
        "description": "Hover to inspect the specific breakdown for that material."
      }
    ],
    "tip": "If Total is sufficient but Available is low, first check reservations and pending jobs rather than assuming the resource has disappeared.",
    "related": [
      "station:inventory",
      "station:materials",
      "guide:G06",
      "guide:G10"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "build-menu",
    "group": "tools",
    "title": "Build Menu & Placement",
    "where": "Bottom-left construction bar, divided into building categories.",
    "summary": "Find a structure, select its placement tool and inspect whether it can be built at the chosen location.",
    "actions": [
      {
        "label": "Hull / Power / Gas / Plumbing / Food",
        "description": "Open groups of construction and utility equipment."
      },
      {
        "label": "Industry / Base / Comfort / Advancement / Medical",
        "description": "Open additional workshop, living, research and care categories where available."
      },
      {
        "label": "Building button",
        "description": "Select the object to place; its cost and placement rules depend on that object."
      },
      {
        "label": "Placement preview",
        "description": "Choose a valid inside/outside/floor/wall location before committing the build order."
      },
      {
        "label": "Wire",
        "description": "Can be drawn as a cable route; the build tool switches on the F4 power overlay."
      }
    ],
    "tip": "Some category lists differ in shorter wiki summaries. Use the build menu shown by your game version as the final reference.",
    "related": [
      "station:catalog",
      "station:placement",
      "station:hulls",
      "guide:G02",
      "guide:G07"
    ],
    "important": false,
    "sourceNote": "Ten category overview is supplied by Base Infrastructure / Station; shorter Getting Started list omits Plumbing and Medical."
  },
  {
    "id": "action-tools",
    "group": "tools",
    "title": "Mine, Cancel, Deconstruct & Priority",
    "where": "Bottom-right action toolbar. Shortcut keys also activate the corresponding tools.",
    "summary": "Issue world orders without opening each object panel individually.",
    "actions": [
      {
        "label": "G — Mine",
        "description": "Click one resource tile or drag across an area to request extraction."
      },
      {
        "label": "C — Cancel",
        "description": "Withdraw pending mining, building or deconstruction orders."
      },
      {
        "label": "X — Deconstruct",
        "description": "Request removal of completed structures and applicable material recovery."
      },
      {
        "label": "P — Priority",
        "description": "Adjust task urgency 1–9 for selected world objects or errands."
      },
      {
        "label": "Target filter",
        "description": "Choose All, Building, Hull or Wires before applying an area action."
      }
    ],
    "tip": "If hull or cables seem immune to Deconstruct or Priority, you may still have the default Building filter selected. Structural integrity can also block hull removal.",
    "related": [
      "station:priority",
      "station:deconstruct",
      "station:mining",
      "guide:G04",
      "guide:G05",
      "guide:G06"
    ],
    "important": true,
    "sourceNote": ""
  },
  {
    "id": "selection",
    "group": "tools",
    "title": "Selecting & Moving Objects",
    "where": "Click an object in the colony view; Shift + Click for multiple objects.",
    "summary": "Work with individual object actions or issue compatible commands to a selected group.",
    "actions": [
      {
        "label": "Click a structure",
        "description": "Open its own action/status panel, which may include Priority, Cancel or Deconstruct."
      },
      {
        "label": "Shift + Click",
        "description": "Add objects to a multiple-selection group."
      },
      {
        "label": "Group Deconstruct",
        "description": "Issue the action to supported selected objects."
      },
      {
        "label": "Group Move",
        "description": "Relocate movable devices while preserving the arrangement of the group."
      },
      {
        "label": "Shared device actions",
        "description": "Use common Enable/Disable or supported plant commands for compatible objects."
      }
    ],
    "tip": "Hull, walls and wires are not movable furniture. Storage permissions are not a supported shared-command operation.",
    "related": [
      "station:deconstruct",
      "station:priority",
      "guide:G04"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "roster",
    "group": "crew",
    "title": "Colonist Cards & Go To",
    "where": "Select a colonist from the roster in the top-left HUD or select the colonist in the world.",
    "summary": "Inspect a colonist's current state or manually order movement to a location.",
    "actions": [
      {
        "label": "Colonist card",
        "description": "Displays portrait, activity indicator, Mood and Satiety."
      },
      {
        "label": "Colonist detail",
        "description": "Inspect needs, health, skills and traits in the selected colonist's information."
      },
      {
        "label": "Go To",
        "description": "After selecting the colonist, issue a movement order to a location."
      },
      {
        "label": "Roster scrollbar",
        "description": "Scroll if the visible cards do not fit the total crew."
      }
    ],
    "tip": "Go To overrides normal activity while moving. It does NOT make the colonist automatically work at the destination; long outdoor trips can exhaust suit oxygen.",
    "related": [
      "colonist:outside",
      "colonist:health",
      "colonist:skills",
      "guide:G18",
      "guide:G23"
    ],
    "important": true,
    "sourceNote": ""
  },
  {
    "id": "work-matrix",
    "group": "crew",
    "title": "Work Priorities Matrix",
    "where": "Top-left management navigation → Priority panel.",
    "summary": "Allow, prefer or forbid different work types for individual colonists.",
    "actions": [
      {
        "label": "Rows",
        "description": "Colonists are listed individually; All Colonists allows broad changes."
      },
      {
        "label": "Columns",
        "description": "Each column is a work type such as Construction, Research, Cooking or Hauling."
      },
      {
        "label": "Left click a cell",
        "description": "Cycle through neutral, two higher settings, two lower settings and prohibition."
      },
      {
        "label": "Hover a cell",
        "description": "Inspect the relevant colonist's skill for that work type."
      },
      {
        "label": "Cross",
        "description": "Prohibit that colonist from performing the job type."
      }
    ],
    "tip": "This is workforce allocation. It does not set a particular machine or hull construction errand to priority 9; that is the bottom-right P tool.",
    "related": [
      "colonist:priorities",
      "colonist:skills",
      "control:action-tools",
      "guide:G06",
      "guide:G18"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "schedule",
    "group": "crew",
    "title": "Schedule Editor",
    "where": "Top-left management navigation → Schedule panel.",
    "summary": "Paint the crew's 24-hour activity blocks and assign colonists to schedule profiles.",
    "actions": [
      {
        "label": "Work",
        "description": "Assigned work takes precedence except urgent bodily needs."
      },
      {
        "label": "Free Time",
        "description": "Personal activities are possible; work is still allowed."
      },
      {
        "label": "Downtime",
        "description": "Leisure time only; no ordinary work."
      },
      {
        "label": "Bedtime",
        "description": "Sleeping period, which urgent bodily needs can interrupt."
      },
      {
        "label": "Add New Schedule",
        "description": "Create an additional timetable profile."
      },
      {
        "label": "+ / X by colonist",
        "description": "Assign or remove a colonist from a schedule profile."
      },
      {
        "label": "Rename / Delete schedule",
        "description": "Edit the profile name or remove the schedule where allowed."
      }
    ],
    "tip": "Overlapping Free Time or Downtime is relevant to socialization. For a balanced work/bedtime setup, follow the linked Guide rather than this short control reference.",
    "related": [
      "colonist:schedule",
      "colonist:social",
      "guide:G18",
      "guide:G17"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "object-panel",
    "group": "build",
    "title": "Building Status & Device Actions",
    "where": "Select a finished building or workstation on the colony map.",
    "summary": "Read device status, then use the specific actions supported by that building.",
    "actions": [
      {
        "label": "Status",
        "description": "Inspect whether the device is active, waiting for a worker/input or affected by unavailable output."
      },
      {
        "label": "Enable / Disable",
        "description": "Switch applicable devices between active and inactive operating states."
      },
      {
        "label": "Priority",
        "description": "Adjust the individual object's task urgency where available."
      },
      {
        "label": "Deconstruct / Cancel",
        "description": "Use the action appropriate to a built structure or pending order."
      },
      {
        "label": "Device-specific actions",
        "description": "Some buildings expose their own plant, fertilizer or other operational switches."
      }
    ],
    "tip": "Button availability depends on the selected building. Disabled production equipment does not behave like a simply idle machine.",
    "related": [
      "station:production",
      "station:priority",
      "guide:G06",
      "guide:G11"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "recipes",
    "group": "build",
    "title": "Production & Recipe Panel",
    "where": "Select a production workstation such as Smelter, Crafting Table or Meal Assembly Table.",
    "summary": "Understand the controls for choosing a recipe and its production target.",
    "actions": [
      {
        "label": "Select recipe",
        "description": "Choose an available output and inspect its input requirements."
      },
      {
        "label": "Fixed quantity",
        "description": "Produce a set number of batches."
      },
      {
        "label": "If less than",
        "description": "Produce while the colony's quantity is below the configured threshold."
      },
      {
        "label": "Continuous (∞)",
        "description": "Repeat processing while inputs and operating conditions permit."
      },
      {
        "label": "Facility status",
        "description": "Check waiting reasons and operation state."
      },
      {
        "label": "Disable",
        "description": "Stop the machine's active work and power consumption where applicable."
      }
    ],
    "tip": "The shared controls do not imply every device uses the same exact panel. For a first complete production chain, use the linked Guidebook.",
    "related": [
      "station:production",
      "feature:F14",
      "feature:F15",
      "guide:G11",
      "guide:G12",
      "guide:G13"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "storage-panel",
    "group": "build",
    "title": "Storage Permissions & Priorities",
    "where": "Select a Stockpile, Storage Container, Coolbox or other storage building.",
    "summary": "Choose which resources may be stored and where colonists should deliver them.",
    "actions": [
      {
        "label": "Permissions",
        "description": "Allow or exclude the available resource classes for the container."
      },
      {
        "label": "Storage Priority",
        "description": "Prefer particular storage locations for eligible materials."
      },
      {
        "label": "Copy compatible rules",
        "description": "Copy settings between supported storage units of the same type."
      },
      {
        "label": "Before construction",
        "description": "The wiki says Stockpile and Storage Container permissions can be set before completion."
      }
    ],
    "tip": "Storage rules are separate from Shift+Click group commands. Higher storage priority cannot make an incompatible item fit a container.",
    "related": [
      "station:storage",
      "feature:F13",
      "guide:G10"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "farming-panel",
    "group": "build",
    "title": "Growing & Botany Controls",
    "where": "Select a growing structure or Botany Station to access its supported crops or projects.",
    "summary": "Choose crop production or botanical research without confusing a plant with a technology.",
    "actions": [
      {
        "label": "Growing structure",
        "description": "Inspect available plants and select the allowed crop."
      },
      {
        "label": "Plant / Remove Plant",
        "description": "Use the controls shown by the selected planter when available."
      },
      {
        "label": "Fertilizer control",
        "description": "Use the supported fertilizer setting where the building exposes it."
      },
      {
        "label": "Botany Station projects",
        "description": "Select projects to unlock additional crops when prerequisites and resources are met."
      }
    ],
    "tip": "Specific crop choices and project costs depend on the building and research. The Guidebook covers setup, growing and unlocking new plants.",
    "related": [
      "feature:F16",
      "feature:F17",
      "guide:G14",
      "guide:G15",
      "building:Botany Station"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "research",
    "group": "events",
    "title": "Research Interface",
    "where": "Top-left management navigation → Research.",
    "summary": "Read prerequisites, select available technologies and distinguish research progression from unlocked objects.",
    "actions": [
      {
        "label": "Research Tree",
        "description": "Browse the available technology tiers and their connections."
      },
      {
        "label": "Prerequisites",
        "description": "Check which earlier technologies are required."
      },
      {
        "label": "Select Technology",
        "description": "Choose eligible research for the colony to complete."
      },
      {
        "label": "Opens",
        "description": "Shows the technologies made reachable by this research."
      },
      {
        "label": "Unlocks",
        "description": "Shows buildings or other objects that become accessible."
      },
      {
        "label": "Touchdown",
        "description": "Represents the starting technology package already available to the colony."
      }
    ],
    "tip": "The Technology section of RDCpedia has a linked mini-diagram for each documented demo technology. It is not an in-game research command.",
    "related": [
      "feature:F29",
      "tech:Touchdown",
      "guide:G21",
      "building:Basic Research Table"
    ],
    "important": false,
    "sourceNote": ""
  },
  {
    "id": "support",
    "group": "events",
    "title": "Orbital Support & Event Dialogs",
    "where": "A Supply Delivery Available notification and its View Supplies / event window.",
    "summary": "Compare orbital offers and understand the important differences between supplies and a crew candidate.",
    "actions": [
      {
        "label": "View Supplies",
        "description": "Open the active Supply Delivery offer."
      },
      {
        "label": "Material packages",
        "description": "Compare the three raw-material bundle options and use Pick for your chosen one."
      },
      {
        "label": "Crew candidate",
        "description": "Every third delivery may offer a colonist; hover the candidate to inspect skills."
      },
      {
        "label": "Candidate / Materials tabs",
        "description": "Switch between the candidate and resource offers when recruitment is available."
      },
      {
        "label": "Accept / Pick / Decline",
        "description": "Accept a valid candidate, choose resources or reject the offer as appropriate."
      },
      {
        "label": "Escape",
        "description": "Closes the dialog; the wiki distinguishes Escape behavior between supply and crew offers."
      }
    ],
    "tip": "A new colonist needs the appropriate landing pad and no active dust storm. Do not assume closing the recruit dialog equals explicitly declining the recruit.",
    "related": [
      "feature:F30",
      "guide:G22",
      "station:storms",
      "building:Supply Rocket Pad"
    ],
    "important": true,
    "sourceNote": ""
  },
  {
    "id": "storm",
    "group": "events",
    "title": "Dust Storm: Outside Override",
    "where": "Available during the Dust Storm restriction. Look for the control labelled “Allow colonists to go outside”.",
    "summary": "The game normally prevents outdoor movement during a storm, but the player can manually override that safety rule for exceptional work.",
    "actions": [
      {
        "label": "Storm warning",
        "description": "Read the event alert and its countdown in the upper HUD."
      },
      {
        "label": "Automatic restriction",
        "description": "When the storm starts, colonists are normally prevented from going outside."
      },
      {
        "label": "Allow colonists to go outside",
        "description": "Use this explicitly named toggle if urgent outdoor work must be allowed."
      },
      {
        "label": "After overriding",
        "description": "Check the crew's mood, suit oxygen and time required to return safely."
      },
      {
        "label": "Return to safe operation",
        "description": "When urgent work is finished, do not keep exposing colonists unnecessarily."
      }
    ],
    "tip": "Easy to miss: this is a manual safety override, not a cure for the storm. Outdoor work during the storm applies an increasingly severe Mood penalty. The provided wiki confirms the toggle's name and effect but does not specify its exact screen position; that location still needs a verified screenshot.",
    "related": [
      "environment:outdoor",
      "feature:F31",
      "colonist:outside",
      "guide:G23"
    ],
    "important": true,
    "sourceNote": "Exact on-screen placement is not specified in the wiki. Do not claim a particular panel/button position before in-game verification."
  },
  {
    "id": "system",
    "group": "events",
    "title": "Game Menu & Community Tools",
    "where": "Game menu and information shortcuts available in the main interface.",
    "summary": "Access system commands and community feedback without confusing them with colony management.",
    "actions": [
      {
        "label": "Escape / Game Menu",
        "description": "Open the menu for settings, save/load and exit options."
      },
      {
        "label": "Bug Report",
        "description": "Access the in-game feedback/reporting tool."
      },
      {
        "label": "Discord",
        "description": "Open the game's community shortcut."
      },
      {
        "label": "Wishlist / Info",
        "description": "Open the shortcut supporting the game on Steam."
      },
      {
        "label": "Tutorial / Info (i)",
        "description": "Open the original game tutorial hub."
      }
    ],
    "tip": "Do not use Escape as a substitute for reading and choosing an event's specific Decline/Accept action; dialog behavior can differ.",
    "related": [
      "control:support",
      "station:overview"
    ],
    "important": false,
    "sourceNote": ""
  }
];
