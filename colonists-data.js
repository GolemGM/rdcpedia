/* Curated from the Red Dust Colony wiki pages:
   Colonists & Survival, Traits, Management & Operations, Getting Started,
   Agriculture & Food, and Rooms (demo-era reference).
   Internal links: [[topic:id|label]], [[building:Name|label]],
   [[item:Name|label]], [[tech:Name|label]], [[tab:Name|label]].
   Figures below are presented as wiki-reported values, not immutable game rules.
*/
const COLONIST_GROUPS = [
  {id:"crew",title:"Crew & Survival"},
  {id:"needs",title:"Daily Needs"},
  {id:"health",title:"Health & Wellbeing"},
  {id:"work",title:"Work & Development"},
  {id:"life",title:"Personality & Life Events"}
];
const COLONIST_TOPICS = [
 {id:"crew",group:"crew",title:"Crew Selection & Recruitment",
  lead:"Your expedition starts with a small crew. Their skills, interests, traits and schedules influence how reliably the colony operates.",
  sections:[
   {title:"Choosing the starting crew",paragraphs:["During expedition setup you can inspect and reroll colonists, rename them and compare their [[topic:skills|skills]], [[topic:attributes|attributes]] and [[topic:traits|traits]]. An interest is marked by a lightning icon beside a skill.","A good mix of construction, medical care, food production and research helps avoid situations in which the only suitable worker is unavailable."],bullets:["Review work restrictions caused by traits before launch.","Prefer complementary skills rather than identical specialists.","Consider how your crew will cover different [[topic:schedule|shifts]]."]},
   {title:"New arrivals",paragraphs:["Additional colonists can arrive through recurring orbital support deliveries. The opportunity to recruit depends on support events rather than ordinary construction.","For the drop system and its restrictions, consult [[tab:Features|Features]] when that section becomes available."]}
  ],related:["topic:skills","topic:traits","topic:priorities","topic:schedule","building:Supply Rocket Pad"]},
 {id:"atmosphere",group:"crew",title:"Atmosphere & Life Support",
  lead:"Colonists can live in ordinary clothing only inside a sealed, breathable station. Oxygen, carbon dioxide and pressure are survival requirements.",
  sections:[
   {title:"Breathable interiors",paragraphs:["A station must maintain suitable air conditions. [[building:Life Support Machine|Life Support Machine]] handles initial life support. [[building:Oxygen Diffuser|Oxygen Diffusers]] increase oxygen supply, while [[building:CO2 Scrubber|CO2 Scrubbers]] remove carbon dioxide.","Low oxygen or excessive CO2 leads to distress, impaired function and potentially loss of consciousness. Room size and the reach of atmosphere equipment matter as the base expands."]},
   {title:"Diagnostic overlays",bullets:["F1 — Oxygen levels.","F2 — Carbon dioxide levels.","F3 — Hazardous gases. The wiki notes that hazardous-gas gameplay is not active in the current demo; do not assume the [[building:Air Purifier|Air Purifier]] provides a required demo mechanic."],paragraphs:["Use the overlays to identify weak areas before moving more colonists into a new part of the station."]},
   {title:"Beyond the station",paragraphs:["Colonists leaving through an [[building:Airlock|Airlock]] require outdoor suits and carry a limited oxygen supply. See [[topic:outside|Outdoor Operations]] for travel hazards."]}
  ],related:["topic:outside","topic:health","building:Life Support Machine","building:Oxygen Diffuser","building:CO2 Scrubber","building:Airlock","tech:Oxygen Regulation"]},
 {id:"outside",group:"crew",title:"Outdoor Operations & Suits",
  lead:"Martian surface work is possible only with a suit. A colonist's portable oxygen reserves are limited.",
  sections:[
   {title:"Leaving the base",paragraphs:["An [[building:Airlock|Airlock]] allows colonists to leave a pressurized station. They put on suits for outside work and must return to a safe interior to replenish oxygen.","The farther away the assignment, the more important travel time becomes."]},
   {title:"Manual movement warnings",paragraphs:["The Go To command immediately overrides normal schedules and work priorities until the destination is reached. It does not force a colonist to build or operate an object just because they stand next to it.","Avoid sending colonists on long manual treks. Depleting suit oxygen can cause suffocation and a medical emergency."]},
   {title:"Emergency checklist",bullets:["Confirm there is a functional airlock and a safe route home.","Check the colonist's condition and available oxygen.","Use [[topic:atmosphere|air overlays]] to evaluate the station they return to."]}
  ],related:["topic:atmosphere","topic:health","topic:priorities","building:Airlock","building:Medical Bed"]},
 {id:"conditions",group:"needs",title:"Conditions Overview",
  lead:"The Conditions panel summarises the basic needs that determine whether a colonist can work, rest and remain content.",
  sections:[
   {title:"Four everyday needs",bullets:["[[topic:energy|Energy]] — depleted by daily activity and restored by sleep.","[[topic:satiety|Satiety]] — reflects the need to eat and the duration a meal sustains the colonist.","[[topic:bladder|Bladder]] — fills over time; colonists need access to a toilet.","[[topic:social|Social]] — requires opportunities to interact away from work."]},
   {title:"How they interact",paragraphs:["These needs are connected. A hungry colonist may wake during bedtime to eat, and an urgent bladder can interrupt sleep. Interrupted rest and unmet needs lower [[topic:mood|Mood]]; poor mood in turn increases incident risks.","Survival also depends on a safe [[topic:atmosphere|atmosphere]], which is monitored separately from everyday needs."]},
   {title:"Where to start",paragraphs:["Early priorities are breathable air, ready-to-eat food, access to a [[building:Toilet|Toilet]], a sleeping place and time for rest. Then improve schedules, meals and living conditions."]}
  ],related:["topic:energy","topic:satiety","topic:bladder","topic:social","topic:mood","building:Toilet","building:Bed"]},
 {id:"energy",group:"needs",title:"Energy & Sleep",
  lead:"Energy falls during activity and recovers during sleep. Uninterrupted sleep is essential to reliable work and a stable mood.",
  sections:[
   {title:"Energy and sleeping",paragraphs:["The wiki reports approximately -4 Energy per hour during the day and +22 per hour while sleeping in the demo. Treat these as observed reference values rather than permanent balance constants.","Colonists can sleep on the floor when necessary, but proper sleeping furniture such as a [[building:Bed|Bed]] or [[building:Bunk Bed|Bunk Bed]] is preferable."]},
   {title:"Why colonists wake early",bullets:["Low [[topic:satiety|Satiety]] can wake a colonist to seek food.","A nearly full [[topic:bladder|Bladder]] can wake them to use a toilet.","Noise can disturb colonists with [[topic:traits|Light Sleeper]], while Heavy Sleeper can ignore it."],paragraphs:["A predictable bedtime cannot guarantee good rest when other needs are neglected."]},
   {title:"Rooms and shifts",paragraphs:["Recognised Bedrooms and Barracks automatically dim nearby lighting when colonists sleep, according to the demo wiki.","Use [[topic:schedule|Bedtime]] blocks to reserve sleeping hours. See [[tab:Station|Station]] for future room-system documentation."]}
  ],related:["topic:schedule","topic:bladder","topic:satiety","topic:traits","topic:mood","building:Bed","building:Bunk Bed","building:Double Bed"]},
 {id:"satiety",group:"needs",title:"Satiety & Hunger",
  lead:"Satiety indicates how long food will sustain a colonist. A full stomach is not the same as a balanced diet.",
  sections:[
   {title:"When colonists seek food",paragraphs:["The wiki describes approximate demo values: food seeking begins below 29 hours of Satiety, hunger penalties appear below about 16 hours and a substantial meal can reach around 36 hours.","Low Satiety can interrupt scheduled sleep when colonists leave bed to look for food."]},
   {title:"Food availability",paragraphs:["Early crews rely on [[item:Meal, Ready to Eat|MREs]]. They can also consume raw crops, but properly assembled meals from a [[building:Meal Assembly Table|Meal Assembly Table]] are a more flexible way to manage nutrition.","The cooking station needs ingredients and an assigned worker. Colonists seeking food first look for prepared meals when available." ]},
   {title:"Quantity versus quality",paragraphs:["A meal can restore Satiety but still lack enough protein, fat, vitamins or other nutrients. Continue to [[topic:nutrition|Nutrition]] for meal composition and fiber effects."]}
  ],related:["topic:nutrition","topic:energy","topic:mood","building:Meal Assembly Table","building:Coolbox","item:Meal, Ready to Eat","item:Cooked Food"]},
 {id:"bladder",group:"needs",title:"Bladder & Toilets",
  lead:"The bladder fills throughout the day. Toilets, food composition and timely breaks all affect whether colonists can remain comfortable.",
  sections:[
   {title:"Using toilets",paragraphs:["Colonists must reach a [[building:Toilet|Toilet]] to relieve themselves. Without one, public accidents can occur and apply serious negative mood effects.","A properly recognised Bathroom provides privacy. The room must meet its construction requirements; simply placing a toilet anywhere does not guarantee a valid Bathroom classification."]},
   {title:"Diet and digestion",paragraphs:["The wiki links dietary fiber to digestion and bladder fill speed. Meals low in fiber can make colonists need a toilet sooner.","An urgent bladder can wake a colonist in the middle of [[topic:energy|sleep]] and undermine rest quality."]},
   {title:"Related work",paragraphs:["Unclogging toilets is a [[topic:skills|Plumbing]] activity. Work priorities determine who is permitted to perform it."]}
  ],related:["topic:nutrition","topic:energy","topic:mood","topic:priorities","building:Toilet","tab:Station"]},
 {id:"social",group:"needs",title:"Social & Free Time",
  lead:"Social is a need in its own right. Colonists do not fulfil it simply by working side by side.",
  sections:[
   {title:"Making time to interact",paragraphs:["Colonists do not socialise during scheduled work. Give crew members overlapping periods of [[topic:schedule|Free Time or Downtime]] so they have opportunities to meet and talk.","Free Time permits optional work as well as personal activities. Downtime is explicitly reserved for leisure without work."]},
   {title:"Shared spaces",paragraphs:["Dining and recreation areas help organise colonist activity. The wiki documents their room categories, but does not establish a fixed numerical social bonus for each room in the demo.","[[building:Chair|Chairs]], [[building:Small Square Table|tables]] and [[building:Bench|benches]] are examples of furnishings that can support common spaces."]},
   {title:"Why it matters",paragraphs:["Unmet social needs worsen [[topic:mood|Mood]], potentially combining with sleep or hunger penalties. Shift staggering should preserve at least some shared off-duty time."]}
  ],related:["topic:schedule","topic:mood","topic:conditions","building:Chair","building:Small Square Table","building:Bench","tab:Station"]},
 {id:"health",group:"health",title:"Health & Body Status",
  lead:"The Health panel reports physical function and ailments rather than only a single health percentage.",
  sections:[
   {title:"Main indicators",bullets:["Consciousness — whether the colonist can remain alert and functional.","Movement — ability to move.","Manipulation — ability to handle and perform physical tasks.","Pain — discomfort that can be increased by injuries and illness."],paragraphs:["In normal conditions, the wiki describes the first three indicators as 100% and Pain as 0%. Hazards and injuries can reduce function."]},
   {title:"Common threats",paragraphs:["Insufficient oxygen, too much CO2, accidents, illness and other hazards can affect physical performance. Suffocation is an immediate threat and should prompt checks of [[topic:atmosphere|life support]] and [[topic:outside|suit oxygen]]."]},
   {title:"Recovery",paragraphs:["A [[building:Medical Bed|Medical Bed]] supports recovery and access to care. See [[topic:medical|Medical Care]] for treatment settings and supplies."]}
  ],related:["topic:medical","topic:mood","topic:atmosphere","topic:outside","building:Medical Bed","item:Bandage"]},
 {id:"medical",group:"health",title:"Medical Care & Recovery",
  lead:"Injured or ill colonists need access to care, time to recover and workers assigned to medical tasks.",
  sections:[
   {title:"Medical beds",paragraphs:["Injured or sick colonists recover faster when resting in a [[building:Medical Bed|Medical Bed]]. Other colonists may deliver meals and provide care while the patient rests."]},
   {title:"Care and work settings",paragraphs:["The wiki describes Self Treatment and Bed Rest Priority settings that determine whether colonists tend themselves or prioritise recovery. Dedicated medics must be allowed to carry out [[topic:skills|Medical]] work.","The wiki also mentions automatic painkiller and antibiotic settings; advanced pharmaceuticals are documented as outside the current demo, so they are not presented here as available demo supplies."]},
   {title:"Practical supplies",paragraphs:["[[item:Bandage|Bandages]] are used for simple wounds and cuts. Managing the patient's [[topic:nutrition|nutrition]] and overall condition also supports recovery.","Suffocation and other immediate environmental dangers must be addressed at their source; a medical bed cannot substitute for breathable air."]}
  ],related:["topic:health","topic:skills","topic:priorities","topic:atmosphere","building:Medical Bed","item:Bandage"]},
 {id:"nutrition",group:"health",title:"Nutrition & Meals",
  lead:"Nutrition tracks how the available diet meets the colonists' needs for energy and individual nutrients.",
  sections:[
   {title:"Food composition",paragraphs:["The wiki discusses calories, carbohydrates, proteins, fats and vitamins. Fiber also affects digestion and the rate at which the [[topic:bladder|bladder]] fills; it is not described there as a separate displayed Nutrition-bar value.","The wiki estimates average consumption near 3,200 kcal per colonist per day in the demo. Exact balance values may change."]},
   {title:"From rations to prepared meals",paragraphs:["[[item:Meal, Ready to Eat|MREs]] provide ready-to-eat emergency food. Raw produce such as [[item:Lettuce|Lettuce]] or [[item:Potato|Potatoes]] can be consumed, but proper meal production offers more control over the nutrient mix.","The [[building:Meal Assembly Table|Meal Assembly Table]] selects ingredients from its Pantry to assemble meals. Its result depends on what ingredients are currently stocked."]},
   {title:"Avoid one-sided batches",paragraphs:["The wiki warns that assembling too many meals when key ingredients are missing can produce nutritionally poor batches. Maintaining a varied pantry and producing smaller batches is a practical recommendation, not a guaranteed fixed recipe.","[[building:Coolbox|Coolboxes]] can help protect perishable food."]},
   {title:"Development status",paragraphs:["The wiki explicitly notes that nutrition and food composition are planned for further rebalance. Treat precise thresholds and nutrient effects as demo-era observations rather than final mechanics."]}
  ],related:["topic:satiety","topic:bladder","topic:health","building:Meal Assembly Table","building:Coolbox","item:Cooked Food","item:Meal, Ready to Eat","tech:Meal Preparation"]},
 {id:"mood",group:"health",title:"Mood & Mental Breaks",
  lead:"Mood ties together fulfilled needs, living standards, work preferences and the risk of accidents or breakdowns.",
  sections:[
   {title:"What changes mood",paragraphs:["The wiki describes a baseline mood around 40%, modified over time by active positive and negative effects. Unmet [[topic:conditions|needs]], poor rest, hunger, lack of privacy or unpleasant conditions may reduce mood.","Uninterrupted sleep, appropriate work interests and better meal or living conditions can improve it. Traits may change these reactions."]},
   {title:"Risk thresholds reported by the wiki",bullets:["Below 30% — increased chance of minor mishaps.","Below 20% — increased risk of serious accidents.","Below 10% — critical risk of breakdowns or dangerous behaviour."],paragraphs:["These percentages are wiki-reported demo thresholds, not guarantees that an accident will occur at a specific value."]},
   {title:"Preventive management",paragraphs:["Start by identifying the active negative modifier, then look for its underlying cause. Check [[topic:energy|sleep]], [[topic:satiety|food]], [[topic:bladder|toilets]], [[topic:social|social time]] and whether [[topic:priorities|work priorities]] conflict with a trait.","[[topic:traits|Destructive]], Aggressive and Depressive are examples of traits associated with different breakdown behaviours."]}
  ],related:["topic:conditions","topic:energy","topic:social","topic:traits","topic:schedule","topic:priorities","building:Bed","building:Toilet"]},
 {id:"skills",group:"work",title:"Skills & Interests",
  lead:"Skills influence task effectiveness; interests influence how colonists feel about their assigned jobs and how they develop.",
  sections:[
   {title:"Primary work skills",bullets:["Construction — building structures and machines.","Mining — extracting rock and terrain.","Plumbing — unclogging toilets.","Operating / Mechanics — running production machinery.","Research — conducting research at stations.","Botany — growing plants and working on botany projects.","Crafting — assembling items at worktables.","Medical — caring for injured and sick colonists.","Cooking — preparing meals."]},
   {title:"Interests and growth",paragraphs:["A lightning symbol beside a skill marks an interest. The Getting Started wiki page describes a 3× learning multiplier for interested skills, while Colonists & Survival also associates preferred work with an Enjoyed Work mood bonus.","Assigning suitable work can therefore improve both development and [[topic:mood|morale]]."]},
   {title:"Other work types",paragraphs:["Hauling has no standalone skill level in the main list; the [[topic:attributes|Strength]] attribute influences it. Servicing covers maintenance and malfunctions. Cleaning is also outside the main skill list and is limited in the current demo.","Use [[topic:priorities|Work Priorities]] to control who may perform each activity."]}
  ],related:["topic:attributes","topic:priorities","topic:traits","topic:mood","building:Basic Research Table","building:Botany Station","building:Crafting Table","building:Meal Assembly Table"]},
 {id:"attributes",group:"work",title:"Attributes & Experience",
  lead:"Attributes represent core physical and mental aptitudes and improve as colonists perform related activities.",
  sections:[
   {title:"The five attributes",bullets:["Strength — physical power and [[topic:skills|Hauling]] capacity or effectiveness.","Dexterity — fine motor tasks and agility.","Intelligence — mental tasks such as research and complex operations.","Endurance — ability to sustain effort.","Charisma — interactions and relationships."]},
   {title:"Level progression",paragraphs:["The wiki describes attributes gaining experience from relevant actions, progressing up to level 20. Its reference value is a flat +5% efficiency per attribute level, for up to +100% at maximum level.","These are reported demo rules and should be checked again if the game's leveling system changes."]},
   {title:"Crew planning",paragraphs:["Skills, attributes and [[topic:traits|traits]] complement one another. A strong hauler is not automatically a good researcher, and a highly trained worker can still be barred from a job by an incompatible trait."]}
  ],related:["topic:skills","topic:traits","topic:priorities","topic:crew"]},
 {id:"priorities",group:"work",title:"Work & Task Priorities",
  lead:"Work Priorities determine who performs a type of job; task priorities determine how urgent a particular object or job is.",
  sections:[
   {title:"Colonist work matrix",paragraphs:["The priorities screen provides per-colonist settings for Construction, Mining, Research, Cooking, Medical, Plumbing, Operating, Hauling, Servicing, Crafting, Botany and Cleaning.","Left-click cycles through neutral, higher and lower priorities, and a cross that prohibits the activity for that colonist. The All Colonists row can apply a change to the crew."]},
   {title:"World-task priority (1–9)",paragraphs:["The Priority tool (P) adjusts urgency for specific structures, construction sites, mining jobs and dropped resources. Priority 5 is the default; 1–4 are less urgent and 6–8 more urgent. Priority 9 is reserved for emergencies.","This is separate from the colonist work matrix. A high-priority job still needs an eligible colonist and available materials."]},
   {title:"Specialisation and manual orders",paragraphs:["Specialists can be allowed to focus on a few suitable job types rather than routine hauling or cleaning. However, too many restrictions may leave the colony without someone to complete essential work.","The Go To movement command overrides current activities but does not force a particular job. See [[topic:outside|Outdoor Operations]] for oxygen risks."]}
  ],related:["topic:skills","topic:traits","topic:schedule","topic:outside","building:Crafting Table","building:Basic Research Table"]},
 {id:"schedule",group:"work",title:"Schedules & Shifts",
  lead:"The Schedule Editor lets you assign hourly blocks for work, personal time and sleep.",
  sections:[
   {title:"Four schedule modes",bullets:["Work — assigned work, except for urgent bodily needs.","Free Time — the colonist may work or pursue personal activities.","Downtime — leisure and no work.","Bedtime — sleep, except when urgent needs intervene."]},
   {title:"Editing and presets",paragraphs:["Schedules contain 24 hourly blocks. You can create, rename and delete schedule profiles and assign colonists to them.","Staggered shifts keep essential services covered, but avoid separating everyone so completely that [[topic:social|social needs]] cannot be met."]},
   {title:"Traits and sleep",paragraphs:["[[topic:traits|Morning Bird]] and Night Owl traits favour different working hours. Light Sleeper and Snorer may affect the quality of a shared bedroom.","Avoid planning bedtime without access to food and toilets: unmet [[topic:satiety|Satiety]] and [[topic:bladder|Bladder]] needs can interrupt sleep."]}
  ],related:["topic:energy","topic:social","topic:traits","topic:priorities","topic:mood","building:Bed","building:Bunk Bed"]},
 {id:"traits",group:"life",title:"Colonist Traits",
  lead:"Traits alter work abilities, accident risk, consumption, mood and behaviour. Some grant bonuses while others block entire activities.",
  sections:[
   {title:"Reading traits",paragraphs:["Traits are assigned during colonist selection and can be inspected when planning jobs and schedules. A strong skill score does not override a trait that makes the colonist incapable of performing that task.","Positive and negative labels summarise the wiki's grouping; individual effects are listed below."]},
   {title:"Planning around restrictions",paragraphs:["For example, Kitchen Phobic prevents cooking, Squeamish prevents medical work, and Scatterbrained prevents research. Match these restrictions with [[topic:priorities|Work Priorities]] rather than repeatedly assigning unsuitable jobs.","Mood-linked traits such as Entitled, Restless and Easily Disgusted are another reason to align jobs with interests."]}
  ],related:["topic:crew","topic:skills","topic:priorities","topic:schedule","topic:mood"]},
 {id:"death",group:"life",title:"Death, Graves & Funerals",
  lead:"Losing a colonist creates both a human cost and practical colony-management tasks.",
  sections:[
   {title:"Causes of death",paragraphs:["The wiki states that colonists do not age and do not die of old age. Death instead follows serious neglected survival or health threats such as suffocation and severe medical conditions.","Prevention starts with [[topic:atmosphere|life support]], [[topic:health|health monitoring]] and safe [[topic:outside|outside travel]]."]},
   {title:"Burial and funerals",paragraphs:["A deceased colonist is carried to a built [[building:Grave|Grave]]. When the body is placed there, the game triggers a funeral event.","The wiki reports that occupied graves cannot be deconstructed or moved. Plan their placement carefully."]},
   {title:"Funeral safety",paragraphs:["The wiki warns that attending colonists may prioritise mourning over their own oxygen safety. Check environmental conditions and travel distance before a ceremony, particularly when the grave is far from breathable shelter."]}
  ],related:["topic:health","topic:atmosphere","topic:outside","topic:mood","building:Grave","tab:Features"]}
];
const COLONIST_TRAITS = {
 positive:[
  ["Hardened","Unaffected by disorientation during extreme weather."],
  ["Heavy Sleeper","Ignores noise while sleeping."],
  ["Small Appetite","Consumes less food."],
  ["Careful","Lower accident rate."],
  ["Fast Learner","Gains skills faster."],
  ["Handyman","Construction work bonus."],
  ["Rock Breaker","Mining work bonus."],
  ["Pipefitter","Plumbing work bonus."],
  ["Tinkerer","Mechanical work bonus."],
  ["Analytical","Research work bonus."],
  ["Green Thumb","Botany work bonus."],
  ["Meticulous","Crafting work bonus."],
  ["Healer's Touch","Medical work bonus."],
  ["Natural Chef","Cooking work bonus."],
  ["Optimist","Higher baseline mood."],
  ["Steady","Higher mental break threshold."],
  ["Morning Bird","Better performance early in the day."],
  ["Night Owl","Better performance at night."],
  ["Efficient Lungs","Lower oxygen consumption."],
  ["Strong Immune System","Gets sick less often and builds immunity faster."],
  ["Sturdy","Faster injury recovery."]
 ],
 negative:[
  ["Sheltered","Mood and performance suffer during extreme weather."],
  ["Light Sleeper","Needs less sleep but wakes easily from noise."],
  ["Snorer","Disturbs nearby sleepers."],
  ["Big Appetite","Consumes more food."],
  ["Clumsy","Higher accident rate."],
  ["Frail","Cannot perform construction or hauling."],
  ["Tremors","Cannot perform medical or crafting work."],
  ["Squeamish","Cannot perform medical work."],
  ["Kitchen Phobic","Cannot cook."],
  ["Technophobe","Cannot operate or service machinery."],
  ["Black Thumb","Cannot perform botany work."],
  ["Scatterbrained","Cannot perform research."],
  ["Entitled","Mood penalty from hauling or cleaning."],
  ["Callous","Mood penalty from medical work."],
  ["Restless","Mood penalty from research work."],
  ["Easily Disgusted","Mood penalty from plumbing."],
  ["Pessimist","Lower baseline mood."],
  ["Volatile","Lower mental break threshold."],
  ["Destructive","Breakdowns tend toward tantrums or sabotage."],
  ["Aggressive","Breakdowns tend toward insults or berserk behaviour."],
  ["Depressive","Breakdowns tend toward crying, hiding or catatonia."],
  ["Heavy Breather","Higher oxygen consumption."],
  ["Sickly","Gets sick more often and builds immunity slower."],
  ["Delicate","Slower injury recovery."]
 ]
};
