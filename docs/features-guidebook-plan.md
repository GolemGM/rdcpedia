# RDCpedia — Features × Guidebook, pracovní verze 2 (CZ)

> **Stav:** podklad pro implementaci **v0.9 Features × Guidebook**. Tento dokument nahrazuje dřívější přehnaně rozdrobený seznam 55 kandidátních funkcí a 53 úkolů. V aplikaci je na základě plánu připraveno 34 stručných Feature a 24 postupových Guide (anglické texty v `features-data.js` a `guidebook-data.js`). **Všech 14 původních tutorialů je zachováno jako zdroj a mapováno níže.**
>
> **Podklady:** wiki soubory Getting Started, Base Infrastructure, Management & Operations, Colonists & Survival, Agriculture & Food, Research, Rooms, Storage Units, Events & Crises, Recipes, Buildings/Items a screenshoty in-game Tutorial Hub poskytnuté 18. 10. 2026.
>
> **Pravidlo:** *Feature = co systém umožňuje, proč existuje a jaké má důsledky.* *Guide = konkrétní postup ke kýženému výsledku ve hře.* *Controls = kde je tlačítko / jakou klávesu stisknout*. Oddělené Features vznikají podle odlišného chování a práce hráče, **ne podle každého předmětu nebo varianty téže události**.

## Struktura bez extrémů

- **34 Features** je pracovní katalog, nikoliv 34 povinných dlouhých stránek. Každá má krátkou funkční kartu. Podrobnosti, které už jsou ve Station, Colonists, Technology nebo Environment, se zbytečně neopisují.
- **24 Guides** jsou samostatně otevřitelné praktické postupy (přes odkazy). V levém menu mohou být ve společných tematických skupinách. Každý obsahuje: **cíl → požadavky → postup → kontrola výsledku → proč to nefunguje → odkazy**.
- Video není automatickou součástí Guide. Preferujeme reálné ikony budov/itemů, obrázková schémata a vybrané snímky in-game Tutorial Hubu. Krátký klip případně až tam, kde je skutečný pohyb/tažení myší důležitý.
- **Touchdown** je výchozí část Research, **materiálové a personální Supply Drop** jsou dvě varianty téhož systému. **Deconstructing** se odděluje od stavby, **Wires** od stavby hullů, protože se s nimi ve hře zachází rozdílně.
- Obecné Controls (kamera, čas, F1–F7, nástroje G/C/X/P, Shift+Click, UI) se neopakují jako samostatné Features, ale jsou dostupné v Controls a prolinkované z Guide.

## Feature katalog (34)

### Začátek a posádka

| ID | Feature | Co hráči vysvětlí / přinese | Kde se řeší prakticky |
|---|---|---|---|
| F01 | **Expedition Setup** | Výběr terénu, velikosti mapy a obtížnosti. Ovlivňuje počáteční podmínky a dostupnost podpory, není to návod na kameru. | G01 |
| F02 | **Crew Selection** | Výběr a případné přelosování kolonistů podle dovedností, atributů, vlastností a zájmů; složení posádky má provozní důsledky. | G01 |

### Stavba a příkazy

| ID | Feature | Co hráči vysvětlí / přinese | Kde se řeší prakticky |
|---|---|---|---|
| F03 | **Hull Expansion** | Rozšiřování tlakové podlahy Prefab/Concrete Hull včetně automatické obvodové stěny a omezení při odstraňování. | G02 |
| F04 | **Building Placement & Partitions** | Umístění interiérových a venkovních staveb, dveří, airlocku, zdí a nástěnných prvků podle jejich podmínek. | G02, G03 |
| F05 | **Cancel, Deconstruct & Move** | Zrušení čekajícího úkolu není totéž jako rozebrání hotové stavby; přesun a hromadný výběr mají další omezení. | G04 |
| F06 | **Mining & Extraction** | Zadání těžby jednoho pole nebo oblasti, získání surovin a jejich následný odvoz. | G05 |
| F07 | **Task Priority** | Naléhavost konkrétních světových úkolů 1–9, výběrové filtry All/Building/Hull/Wires; liší se od priorit práce kolonistů. | G06 |
| F08 | **Rooms & Recognition** | Rozpoznání pokojů podle velikosti, vybavení a povolených kategorií; reálné funkce místností se liší od pouhé klasifikace. | G03, G17 |

### Provoz stanice

| ID | Feature | Co hráči vysvětlí / přinese | Kde se řeší prakticky |
|---|---|---|---|
| F09 | **Power Generation & Storage** | Výroba elektrické energie a akumulace; spotřeba, výpadky, den/noc a vlivy bouře. | G07, G23 |
| F10 | **Power Grid & Wires** | Vedení kabelů, propojení zdrojů a spotřebičů, elektrické okruhy a kontrola ve F4. Oddělené od samotného stavění hullů. | G07 |
| F11 | **Atmosphere & Life Support** | Kyslík, CO2, kapacita zařízení a proudění vzduchu; podmínky obyvatelnosti a dopady při selhání. | G08, G24 |
| F12 | **Water & Waste** | Těžba ledu, výroba vody, její spotřeba a zpracování odpadu; propojuje životní podporu, hygienu a zemědělství. | G09, G08 |
| F13 | **Storage & Hauling** | Druhy skladů, povolené položky, skladové priority a přeprava surovin ke strojům. | G10, G06 |
| F14 | **Production Orders** | Stavy strojů a tři režimy zadávání výroby: pevný počet, udržování zásoby a kontinuální produkce. | G11, G06 |

### Výroba a jídlo

| ID | Feature | Co hráči vysvětlí / přinese | Kde se řeší prakticky |
|---|---|---|---|
| F15 | **Industrial Processing & Crafting** | Přeměna surovin ve výrobní stanici pomocí receptu; zahrnuje Smelting, Concrete a součástky, které sdílejí základní princip. | G11, G12, G13 |
| F16 | **Cultivation & Harvest** | Pěstování, zalévání, hnojení, pracovní dovednost Botany, sklizeň a vliv nedostatku vody na růst. | G14 |
| F17 | **Botany Projects** | Projekty ve stanici Botany odemykají nové plodiny či zlepšení; Cotton je speciální případ návazný na Utility Planting. | G15 |
| F18 | **Meal Preparation & Preservation** | Sestavování jídel, Pantry, dostupnost surovin, šarže a uchovávání potravin pomocí Coolbox. | G16 |
| F19 | **Nutrition & Satiety** | Kalorie, složení živin, vláknina a potřeba jídla; proč zasycení nemusí znamenat vyváženou stravu. | G16 |

### Kolonisté

| ID | Feature | Co hráči vysvětlí / přinese | Kde se řeší prakticky |
|---|---|---|---|
| F20 | **Energy & Sleep** | Únava, postele, odpočinek, přerušený spánek a souvislost s rozvrhem. | G17, G18 |
| F21 | **Bladder & Privacy** | Používání toalety, nehody, soukromí a vztah mezi Bathroom a potřebami kolonistů. | G17 |
| F22 | **Social Interaction** | Kdy kolonisté navazují kontakt a proč Free Time/Downtime a společný čas ovlivňují potřebu Social. | G18, G19 |
| F23 | **Mood & Mental Breakdowns** | Pozitivní a negativní vlivy na náladu, riziko nehod, zhroucení a odlišné projevy podle Traits. | G19 |
| F24 | **Health & Medical Care** | Zranění a nemoc, stav vědomí a pohyblivosti, Medical Bed, Bandage, omezení léčby v demu. | G20 |
| F25 | **Skills, Attributes & Traits** | Schopnosti, zkušenosti, zájmy a vrozené vlastnosti, které mohou činnosti zrychlit, znevýhodnit či zakázat. | G01, G18 |
| F26 | **Schedules & Shifts** | Rozvrh 24 hodin, Work/Free Time/Downtime/Bedtime a provoz v různých směnách. | G18 |
| F27 | **Work Priorities** | Pracovní matice: kdo smí vykonávat kterou činnost a s jakou předností; není to totéž jako Priority [P]. | G06, G18 |
| F28 | **Outdoor Work & Suit Oxygen** | Vycházení přes Airlock, omezený kyslík, příkaz Go To a riziko ručních přesunů. | G23 |

### Vývoj a události

| ID | Feature | Co hráči vysvětlí / přinese | Kde se řeší prakticky |
|---|---|---|---|
| F29 | **Research & Technology** | Výzkum, Tier, předpoklady, Opens/Unlocks a Touchdown jako výchozí technologický balíček — jeden systém. | G21 |
| F30 | **Orbital Support / Supply Drops** | Jedna opakující se nabídka podpory z orbity s variantou zásob nebo kandidáta na kolonistu; liší se podmínky přijetí. | G22 |
| F31 | **Dust Storms** | Varování, změny výroby energie, omezení vycházení, ruční přepsání zákazu a následky pro Mood. | G23 |
| F32 | **Starting Life Support Failure** | Skriptovaná porucha počátečního Life Support Machine a nutnost vybudovat nezávislou podporu. | G24 |
| F33 | **Death & Funerals** | Smrt, uložení těla do Grave, nabídka pohřbu a související rizika. Stačí popis funkce, nikoliv samostatný návod. | Bez samostatného návodu |
| F34 | **Demo Completion** | Oznámení dosažení milníku dema a možnost pokračovat v hraní. Informační Feature bez návodu. | Bez samostatného návodu |

## Guidebook (24 skutečných postupů)

*Guide se tvoří tehdy, když je potřeba několik kroků, více zařízení, propojení materiálů/práce/energie nebo když existuje typický problém s diagnostikou. Jeden návod může využít několik Features — a naopak.*

| ID | Guide / postup | Co musí hráč zvládnout | Stručná kostra postupu | Vizuální forma |
|---|---|---|---|---|
| G01 | **Start a New Colony** | Vybrat mapu a posádku, potvrdit expedici a začít s přehledem základních rizik. | Nastavení → porovnání kolonistů → potvrzení startu. | Kontrolní seznam + screenshot |
| G02 | **Expand the Hull** | Rozšířit obyvatelný půdorys bez zbytečných blokací. | Vybrat Hull → zajistit materiál a pracovníka → vyznačit plochu → ověřit dokončení. | 3 snímky; krátký klip později pomůže |
| G03 | **Build a Recognized Room** | Postavit oddělenou místnost a ověřit její typ. | Hull → Walls/Door → požadované vybavení → F7 a kontrola kategorií. | 3 snímky + ukázka F7 |
| G04 | **Cancel, Deconstruct or Move** | Bezpečně zrušit zadání, rozebrat stavbu nebo přesunout přemístitelný objekt. | Rozlišit stav úkolu → vybrat příkaz → zkontrolovat Building/Hull/Wires → ověřit výsledek. | Screenshoty; krátký klip později pomůže |
| G05 | **Mine and Collect Resources** | Vytěžit jedno pole či celou oblast a dostat suroviny do zásob. | Mine [G] → bod/oblast → pracovník Mining → odvoz → kontrola skladu. | 2 snímky; krátký klip volitelně |
| G06 | **Why Is This Job Not Getting Done?** | Zjistit, proč se stavba nebo jiná zakázka neprovádí. | Materiály Available/Needed → přístup → Work Priorities → Priority [P] a správný filtr. | Rozhodovací schéma + screenshot priorit |
| G07 | **Build a Working Power Grid** | Připojit spotřebič k výrobě a zásobě elektřiny. | Generátor → Wire → spotřebič (+ Battery) → F4 → kontrola zatížení/výkonu. | Schéma s herními ikonami + F4 snímek |
| G08 | **Create a Breathable Station** | Samostatně vyrábět O2 a odstraňovat CO2. | Power/Water → Oxygen Diffuser/CO2 Scrubber → spuštění → kontrola F1/F2. | Dvě barevné mapy + checklist |
| G09 | **Turn Ice into Water** | Zajistit vodu a kontrolovat spotřebu a odpad. | Těžba Ice → Ice Processing Station → Water/Storage → spotřebiče a Waste. | Tokové schéma z herních assetů |
| G10 | **Set Up Storage & Hauling** | Dostat správné suroviny na správná místa. | Zvolit typ skladu → permissions → priorita → přístup → ověřit pohyb surovin. | Screenshot nastavení skladu |
| G11 | **Run a Crafting Recipe** | Vyrobit produkt a nastavit výrobní příkaz — základní univerzální návod. | Odemknout stroj → postavit → dodat vstupy → napájet a přidělit práci podle typu → vybrat recept a režim → ověřit produkt. | Schéma vstupy → stroj → výstup + panel receptu |
| G12 | **Smelt Ore into Materials** | Získat materiál ze surové železné či měděné rudy. | Ore → Smelter + požadovaná energie/práce → recept → Iron Plate/Copper Wire. | Původní screenshot/diagram Smelting |
| G13 | **Produce Concrete** | Vyrobit Concrete pro další výstavbu. | Regolith → Rock Crusher → Crushed Regolith + Water → Concrete Mixer → Concrete. | Tokové schéma bez videa |
| G14 | **Grow and Harvest Crops** | Vypěstovat základní plodinu a získat sklizeň. | Plant Rack/Plot → vhodná dostupná plodina → Water (příp. Fertilizer) → práce → sklizeň. | Screenshot pěstebního zařízení |
| G15 | **Use Botany Projects** | Odemknout novou plodinu včetně navazujícího Cotton Project. | Technologie → Botany Station → Water/Fertilizer → projekt → přístupná plodina. | Screenshot projektů + vazba na Research |
| G16 | **Prepare Useful Meals** | Z dostupných plodin vytvořit jídlo a omezit plýtvání. | Meal Preparation → Meal Assembly Table → Pantry/ingredience → menší série → kontrola živin → Coolbox. | Schéma + screenshot Pantry |
| G17 | **Provide Sleep & Bathroom Privacy** | Vyřešit potřebu spánku a hygieny bez zbytečných mood postihů. | Beds + režim odpočinku → Toilet → vhodně uzavřená Bathroom → F7/ověření. | 2 statické snímky |
| G18 | **Set Work and Social Schedules** | Rozdělit pracovníky a vytvořit prostor pro odpočinek a Social. | Skills/Traits → Work Priorities → hodinový Schedule → společný Free Time/Downtime → kontrola. | Snímky matice práce a rozvrhu |
| G19 | **Reduce Mood Problems** | Najít příčiny špatné nálady a bezpečně řešit riziko psychického zhroucení. | Mood modifiers → základní potřeby → práce/Traits → společný čas; rizikové chování bez domýšlení algoritmu. | Panel nálady + postup kontroly |
| G20 | **Help an Injured Colonist** | Zajistit zraněnému nebo nemocnému kolonistovi dostupnou péči. | Odstranit příčinu ohrožení → Medical Bed / Bandage → pracovník Medical → sledovat zdraví. | Text + obrázky Medical Bed / Bandage |
| G21 | **Start Research** | Vybrat a zpřístupnit konkrétní technologii. | Basic Research Table → pracovník Research → Tier/předpoklady → odemčená budova; Touchdown = startovní obsah. | Screenshot tech tree, bez videa |
| G22 | **Use Orbital Support** | Vybrat zásoby nebo nového kolonistu v rámci stejné události. | Otevřít Support Drop → prohlédnout dostupné nabídky → rozhodnout o materials/colonist → u posádky ověřit landing pad a počasí. | Snímek nabídky a přepínání variant |
| G23 | **Get Through a Dust Storm** | Udržet stanici během bouře a případně bezpečně povolit naléhavou práci venku. | Příprava baterií a alternativní výroby → omezení venku → případné ruční povolení → sledovat Mood a Suit O2. | Checklist počasí + Power/Outdoor screenshot |
| G24 | **Survive the Starting Life Support Failure** | Přestát poruchy startovního Life Support Machine bez ztráty obyvatelnosti. | První oprava → včasný Power + O2 + CO2 → F1/F2/F4 → připravit se na definitivní selhání. | Časová osa + schéma tří systémů |

## Vazby z původního Tutorial Hubu (14)

| Originální název | Umístění v RDCpedii | Pravidlo |
|---|---|---|
| Camera Controls | Controls | Bez samostatného Guide; klávesy a ovládání kamery. |
| Controlling time flow | Controls | Bez samostatného Guide; pause/speed. |
| Deconstructing | G04 | Zachovat jako konkrétní návod. |
| Mining | G05 | Zachovat jako konkrétní návod. |
| Priority | G06 | Vysvětlit rozdíl pracovní/úkolová priorita. |
| Hull Expansion | G02 | Zachovat jako konkrétní návod. |
| Power Grid | G07 | Zachovat jako konkrétní návod. |
| Metal Smelting | G12 | Jeden z výrobních příkladů. |
| Concrete Manufacturing | G13 | Jeden z výrobních příkladů. |
| Sleep and Rest | G17 | Součást řešení základních potřeb. |
| Bathroom | G17 | Druhá část řešení základních potřeb. |
| Food and Nutrition | G16 | Jídlo, živiny a dostupnost surovin. |
| Botany | G15 | Pěstování a botanické projekty. |
| Research | G21 | Jedna Feature včetně Touchdown. |

## Jak se to propojí s existující RDCpedií

**Příklad — výroba:**
- Feature **F14 Production Orders** vysvětlí režimy a stav zařízení.
- Feature **F15 Industrial Processing & Crafting** vysvětlí koncept vstupní surovina → zařízení/recept → výstup.
- Guide **G11 Run a Crafting Recipe** učí obecnou obsluhu výroby: zjistit technologii, postavit správný stroj, dodat materiál, připojit energii *pokud daný stroj vyžaduje*, přidělit vhodnou práci *pokud je vyžadována*, nastavit recept a ověřit produkt.
- Guide **G12 Metal Smelting** a **G13 Concrete Manufacturing** ukazují dva odlišné, konkrétní výrobní řetězce. **Nevznikají kvůli každému vyrobenému itemu další samostatné Features**.
- Ikony odkazují na existující Buildings/Items/Technology a případně na sekci Station.

**Příklad — orbital support:** Feature **F30 Orbital Support / Supply Drops** popíše opakující se událost, společné ovládání a rozdíly nabídky. Guide **G22** ukáže prohlédnutí nabídek a volbu. Nedělá se zvlášť Guide na každou ze tří zásilkových nabídek a další na každého potenciálního kolonistu.

**Příklad — priority:** Feature **F07 Task Priority** je priorita konkrétní práce ve světě a volba Building/Hull/Wires. Feature **F27 Work Priorities** je oprávnění a preference pracovních typů konkrétních kolonistů. Guide **G06** propojí oba systémy pro hráče, kterému se nedaří dokončit stavbu.

## Původní ovládání patří do Controls, nikoliv do Feature katalogu

- **Camera Controls**: WASD/RMB, Mouse Wheel, Q/E/MMB a pohledy.
- **Controlling time flow**: Space, Tab, 1/2/3; v podkladech se liší znění rychlostí mezi tlačítky a popisy, před publikací příkazu zachovat podle aktuálního screenshotu.
- **Tools**: Mine [G], Cancel [C], Deconstruct [X], Priority [P], výběrové filtry All/Building/Hull/Wires a Shift+Click.
- **Overlays**: F1 Oxygen, F2 CO2, F3 Hazardous Gases (mechanika neaktivní), F4 Power, F5 Plumbing (neaktivní), F7 Rooms. Potvrzenou funkci F6 nemáme.
- **HUD**: správa kolonistů, zásoby Total/Available/In Use/Needed, stavební menu, oznámení a menu hry.

## Co NEBUDE mít vlastní Guide

- Touchdown: část Research / výchozí technologický stav, stačí ve F29 a G21.
- Jednotlivé recepty či itemy: odkazy na jeden společný obecný návod výroby; příklady G12 a G13 podle odlišných výrobních řetězců.
- Varianta Supply Drop podle konkrétního balíčku: patří do F30 a G22.
- Death & Funerals: zatím F33, stručný průběh a odkazy na Grave/Colonists; samostatný návod není nezbytný.
- Demo Completion: F34, popis události a tlačítek, bez praktického Guide.
- Připravené, ale v demu neaktivní Hazardous Gases / F5 Plumbing / budoucí počasí a léky: označit stav, nenabízet postup pro neexistující gameplay.
- Potvrzenou existenci Berserk máme z wiki, ale útoky a reakci utíkajících kolonistů jako přesně popsaný algoritmus nikoliv; ve Feature označit jako vyžadující ověření, netvořit spekulativní Guide.

## Implementace v0.9 a další kontrola

1. **Features:** všech 34 mechanik je v aplikaci; mají 6 skupin, stručný popis, důležité principy, příslušný Guide a odkazy na existující encyklopedii.
2. **Guidebook:** všech 24 postupů je v 8 skupinách. Každý obsahuje požadavky, konkrétní kroky, kontrolu úspěchu, řešení problémů a související mechaniky.
3. **Obrázky:** pouze existující katalogové assety budov a itemů; u skutečných řetězců propojení šipkami, u jiného vybavení bez zavádějících šipek. Žádná videa ani GIF.
4. **Kontrola před zveřejněním:** otestovat datové odkazy, přechody mezi sekcemi, grafiku a vybrané instrukce ve hře. Návody se po uživatelské kontrole mohou upravit bez přestavby aplikace.
5. **Controls:** samostatné zpracování zůstává na později.
