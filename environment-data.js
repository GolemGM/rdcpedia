/* RDCpedia v0.8 Environment.
   Grounded in user-provided wiki pages:
   Event-and-Crises, Colonist-and-Survival, Getting-started,
   Management-&-Operations, Traits, Rooms and existing building articles.
   Player-observed Berserk bystander reactions are expressly not presented
   as verified wiki mechanics. Demo limitations and approximate values marked.
   Link notation: [[environment:id]], [[station:id]], [[colonist:id]],
   [[building:Name]], [[item:Name]], [[tech:Name]].
*/
const ENVIRONMENT_TOPICS = [
  {
    "id": "outdoor",
    "title": "Outdoor Atmosphere",
    "subtitle": "Martian Surface, Dust Storms & Exposure",
    "lead": "The surface of Mars is hostile to unprotected colonists. Outdoor work depends on a suit, a safe route home, and weather conditions that can also affect the station's power supply.",
    "sections": [
      {
        "title": "The Martian surface",
        "paragraphs": [
          "Colonists can live in ordinary clothing inside a regulated, pressurized station. To work on the surface, they must leave through an [[building:Airlock|Airlock]] and wear an outdoor suit.",
          "A suit carries only a limited oxygen supply. Trips to remote mining sites or construction locations therefore need enough time for a safe return. Manual Go To movement can override normal activities, but it does not create a new oxygen source or force a work assignment.",
          "This section describes the *environmental effect*. See [[colonist:outside|Outdoor Operations & Suits]] for manual movement and crew safety, and [[station:placement|Indoor & Outdoor Placement]] for construction constraints."
        ],
        "bullets": []
      },
      {
        "title": "Dust storm warnings and the outside restriction",
        "paragraphs": [
          "Dust Storm Incoming! is a weather event announced in advance. The upper HUD timeline shows a countdown and expected duration. The wiki gives an example warning about 4.2 days ahead and a storm lasting about 1.1 days; these are observed demo figures rather than guaranteed constants.",
          "By default, the game automatically restricts colonists from going outside during an active dust storm. This is a **movement safety restriction**, not a statement that the station's airlock or hull physically closes.",
          "The player can use **Allow colonists to go outside** to override the restriction for necessary tasks. The wiki explicitly records an increasingly severe negative [[environment:social|Mood]] effect the longer colonists work outside during the storm. The override does not remove the limited oxygen supply carried in their suits."
        ],
        "bullets": [
          "Leave the restriction active for nonessential outdoor jobs.",
          "If an emergency requires an outside trip, check the distance to the airlock and suit oxygen before lifting the restriction.",
          "Remember that letting someone outside may solve a repair problem while worsening their mood."
        ]
      },
      {
        "title": "What dust storms do to the base",
        "paragraphs": [
          "[[building:Solar Panel|Solar Panels]] stop producing electricity during a dust storm. Small panels accumulate dust and need cleaning before they regain normal operation, while [[building:Large Solar Panel|Large Solar Panels]] retract their protective covers.",
          "[[building:Wind Turbine|Wind Turbines]] produce about twice their normal power output in storm winds according to the wiki. This can offset part of the loss of solar generation, but the actual result depends on the station's power demand and installed equipment.",
          "If generation cannot meet demand and [[building:Small Battery|battery]] reserves are exhausted, life support and other machines may stop. Monitor the [[station:overlays|F4 power overlay]] rather than relying on the weather warning alone."
        ],
        "bullets": []
      },
      {
        "title": "How colonists react to the weather",
        "paragraphs": [
          "The [[colonist:traits|Hardened]] trait is described as preventing disorientation during extreme weather. [[colonist:traits|Sheltered]] is associated with negative mood and performance effects in extreme weather.",
          "These trait effects are different from the general worsening mood caused by working outside during a storm after the manual override. The available sources do not define a precise formula for stacking those penalties.",
          "Outdoor access is also important for [[building:Supply Rocket Pad|crew arrivals]]: a landing pad and no active dust storm are required to accept a new recruit, according to the event wiki."
        ],
        "bullets": []
      },
      {
        "title": "What is not yet active",
        "paragraphs": [
          "The event wiki identifies meteor strikes and cold waves as **future hazards**, not as available hazards in the current demo. They are not treated as playable events in this reference."
        ],
        "bullets": []
      }
    ],
    "related": [
      "station:storms",
      "station:power",
      "station:overlays",
      "station:placement",
      "colonist:outside",
      "colonist:traits",
      "environment:social",
      "building:Airlock",
      "building:Solar Panel",
      "building:Wind Turbine",
      "building:Large Solar Panel",
      "building:Supply Rocket Pad"
    ]
  },
  {
    "id": "indoor",
    "title": "Indoor Atmosphere",
    "subtitle": "Oxygen, Carbon Dioxide & Breathable Rooms",
    "lead": "The station's pressurized hull provides shelter, but every occupied area still needs enough oxygen, effective CO2 removal and reliable supporting infrastructure.",
    "sections": [
      {
        "title": "A sealed station is not automatically safe",
        "paragraphs": [
          "The [[station:hulls|hull and pressure boundary]] allow colonists to stay indoors without suits. However, the volume of interior air must be supported by oxygen production and carbon-dioxide removal.",
          "A colony begins with a prebuilt [[building:Life Support Machine|Life Support Machine]], which temporarily supplies power, oxygen and CO2 scrubbing. The wiki documents a repairable failure around Sol 5 and a permanent failure at the end of Sol 14. Independent equipment is essential before that happens.",
          "Oxygen production uses [[building:Oxygen Diffuser|Oxygen Diffusers]], while [[building:CO2 Scrubber|CO2 Scrubbers]] remove the gas generated by occupancy. [[station:power|Power failure]] or insufficient [[item:Water|water]] can undermine these systems even if the hull remains intact."
        ],
        "bullets": []
      },
      {
        "title": "Low oxygen — suffocation",
        "paragraphs": [
          "The [[station:overlays|F1 Oxygen overlay]] shows a colour scale documented by the wiki from roughly 600 (turquoise) to 50 (critical red). These are interface reference values, not universal real-world oxygen units.",
          "When oxygen drops too low, colonists experience difficult breathing and choking. The wiki describes suffocation reducing Consciousness, Movement and Manipulation, applying negative mood effects and, if not corrected, risking death.",
          "As the pressurized area expands, oxygen supply that was once sufficient may no longer cover every room effectively. Check the actual gas map before occupying a new wing."
        ],
        "bullets": [
          "Inspect F1 to find low-O2 rooms.",
          "Check whether the Oxygen Diffuser has power and water.",
          "If the entire wing is affected, look at station size, machine capacity and gas movement through doorways."
        ]
      },
      {
        "title": "High CO2 — toxicity",
        "paragraphs": [
          "The [[station:overlays|F2 CO2 overlay]] treats 0 as ideal and around 30 as dangerous in the demo wiki. As CO2 accumulates, colonists can experience headaches and dizziness; dangerous concentrations can cause loss of consciousness.",
          "A large colony may need additional [[building:CO2 Scrubber|CO2 Scrubbers]] when the original units no longer keep up. Oxygen and CO2 are **separate conditions**: improving one does not by itself prove that the other is safe."
        ],
        "bullets": [
          "Inspect F2 independently of F1.",
          "Verify the scrubber is powered and operational.",
          "Do not mistake a breathable-looking room for a room with acceptable CO2."
        ]
      },
      {
        "title": "Air movement between rooms",
        "paragraphs": [
          "[[building:Door|Doors]] and [[building:Double Door|Double Doors]] allow basic gas exchange even while closed, according to the wiki and our documented in-game observations. They are not airtight separators between adjacent indoor rooms.",
          "[[building:Wall Vent|Wall Vents]] provide another path for gas exchange through interior partitions. They can be useful for the layout, but there is no basis for claiming every door needs a vent beside it.",
          "If a room has poor air despite the presence of nearby equipment, inspect the actual F1/F2 gradients and the partition layout. The sources do not provide enough detail to assert a universal air-flow calculation."
        ],
        "bullets": []
      },
      {
        "title": "Hazardous gases and the F3 overlay",
        "paragraphs": [
          "The game includes an [[station:overlays|F3 Hazardous Gases overlay]] and an [[building:Air Purifier|Air Purifier]]. The wiki describes 0 as ideal and 20 as hazardous on its display.",
          "**In the current demo, the hazardous-gas system and Air Purifier have no active gameplay effect.** Their UI presence should not be confused with a working toxin-management requirement.",
          "For actual colonist health consequences, consult [[colonist:health|Health & Body Status]]. For device placement and maintenance, use [[station:atmosphere|Atmosphere & Life Support]] under Station."
        ],
        "bullets": []
      }
    ],
    "related": [
      "station:atmosphere",
      "station:overlays",
      "station:hulls",
      "station:power",
      "station:water",
      "colonist:atmosphere",
      "colonist:health",
      "building:Life Support Machine",
      "building:Oxygen Diffuser",
      "building:CO2 Scrubber",
      "building:Door",
      "building:Wall Vent"
    ]
  },
  {
    "id": "social",
    "title": "Social Atmosphere",
    "subtitle": "Social Needs, Mood & Mental Breakdowns",
    "lead": "Life inside the station is shaped not only by physical survival but by time spent together, acceptable work, living conditions and each colonist's psychological state.",
    "sections": [
      {
        "title": "Why colonists need social contact",
        "paragraphs": [
          "Social is one of the core colonist [[colonist:conditions|Conditions]], alongside Energy, Satiety and Bladder. When it is neglected, the resulting dissatisfaction can push overall Mood down.",
          "The wiki states that **colonists do not socialize while working**. Having several colonists assigned to neighbouring machines does not by itself satisfy their social need.",
          "Colonists need chances to meet when they are not committed to regular work. The safest management approach is to leave overlapping personal time in their schedules instead of assigning every crew member to a different shift."
        ],
        "bullets": []
      },
      {
        "title": "When and how socialisation happens",
        "paragraphs": [
          "The [[colonist:schedule|Schedule Editor]] has four modes: Work, Free Time, Downtime and Bedtime. During **Work**, colonists carry out jobs except for urgent bodily needs. During **Free Time**, they may work or undertake personal activities; during **Downtime**, they do not work and instead have leisure time.",
          "Overlapping Free Time or Downtime gives colonists an opportunity to gather and talk. An entirely staggered schedule may keep machines operating all day but leave little common time for social contact.",
          "Shared spaces such as dining or recreation areas can organise where colonists spend their time. The current wiki does **not** establish a numerical social bonus for each [[station:room-types|room type]], so one is not invented here."
        ],
        "bullets": [
          "Give at least some crew members matching Free Time or Downtime.",
          "Avoid treating uninterrupted Work shifts as social opportunities.",
          "Check the individual Social need and Mood rather than assuming that furnishing a room has solved the problem."
        ]
      },
      {
        "title": "Mood and its causes",
        "paragraphs": [
          "The wiki gives a baseline Mood of around **40%**, changed over time by positive and negative modifiers. Unmet needs, interrupted sleep, hunger, missing toilet privacy and extreme weather can reduce Mood.",
          "Positive influences include uninterrupted rest, suitable food and preferred work. An interest is indicated by the lightning symbol beside a skill, and [[colonist:traits|traits]] may modify responses to certain duties or schedules.",
          "The **Allow colonists to go outside** override during a dust storm adds an increasingly negative mood influence for those working outside. This is a direct link between [[environment:outdoor|outdoor conditions]] and the colony's social atmosphere."
        ],
        "bullets": []
      },
      {
        "title": "Risk increases as Mood falls",
        "paragraphs": [
          "The following thresholds are reported in the demo wiki as escalating **risks**, not fixed triggers that guarantee a particular action on the next tick."
        ],
        "bullets": [
          "**Below 30%** — greater chance of minor work mishaps.",
          "**Below 20%** — higher risk of serious accidents, such as burns or broken bones.",
          "**Below 10%** — critical risk of mental breakdown and potentially dangerous behaviour."
        ]
      },
      {
        "title": "What a mental breakdown can look like",
        "paragraphs": [
          "The [[colonist:traits|traits wiki]] associates **Destructive** with tantrums or sabotage; **Aggressive** with an insulting spree or **Berserk**; and **Depressive** with crying, hiding or catatonia. These are tendencies, not guarantees that every low-Mood colonist will perform one exact action.",
          "**Berserk** is a dangerous loss-of-control state. The player has described instances in which a Berserk colonist attacks other colonists and nearby people flee. This interaction is useful to document, but the provided wiki confirms the Berserk breakdown type **without specifying the attack/flee behaviour or its exact trigger**. We treat that detailed reaction as a player observation requiring verification, rather than a settled game rule.",
          "A mental break is not simply an unhappy mood icon: it may interrupt work, affect safety and create problems for the rest of the crew. The available sources do not establish a universal duration, target-selection algorithm or guaranteed escape response."
        ],
        "bullets": []
      },
      {
        "title": "Improving the social environment",
        "paragraphs": [
          "Address the active negative mood modifiers instead of only adding decorations. Check [[colonist:energy|sleep]], [[colonist:satiety|food]], [[colonist:bladder|toilets]], [[colonist:social|Social]], [[colonist:priorities|work assignments]] and [[colonist:schedule|daily schedules]].",
          "Traits may restrict jobs or add mood penalties: for example, [[colonist:traits|Entitled]], Callous, Restless and Easily Disgusted react negatively to particular activities. A mismatch can make a seemingly efficient work roster psychologically unsustainable.",
          "This section focuses on the **effects of the social environment**. For the full set of personal modifiers and controls, continue to [[colonist:mood|Mood & Mental Breaks]], [[colonist:traits|Colonist Traits]] and [[colonist:schedule|Schedules & Shifts]]."
        ],
        "bullets": []
      }
    ],
    "related": [
      "colonist:social",
      "colonist:mood",
      "colonist:traits",
      "colonist:schedule",
      "colonist:conditions",
      "colonist:energy",
      "colonist:priorities",
      "station:rooms",
      "station:room-types",
      "environment:outdoor",
      "building:Chair",
      "building:Small Square Table"
    ]
  }
];
