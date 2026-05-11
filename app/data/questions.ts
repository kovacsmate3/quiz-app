// Az ELTE Haladó Szoftvertechnológia (w01, w38–w50) heti kvízeinek kérdései.
// A két "rejtett" helyes választ (w38_q2, w43_q2) az előadás-anyagok és a
// practice quiz alapján rekonstruáltuk — ld. explanation mezők.

export type Lang = "hu" | "en";

export interface Question {
  id: string;
  week: string;
  topic: { hu: string; en: string };
  question: { hu: string; en: string };
  options: { hu: string[]; en: string[] };
  correctIndex: number;
  explanation: { hu: string; en: string };
  inferred?: boolean; // a Canvas elrejtette a helyes választ
}

export const QUESTIONS: Question[] = [
  // ────────── w38 — Termékfejlesztés ──────────
  {
    id: "w38_q1",
    week: "w38",
    topic: { hu: "Termékfejlesztés", en: "Product development" },
    question: {
      hu: "Mi kell ahhoz, hogy figyelemre méltó terméket fejlesszünk?",
      en: "What is needed to develop a remarkable product?",
    },
    options: {
      hu: [
        "Python",
        "Megjelenés a cápák között",
        "Ügyfelekkel való beszélgetés",
        "Korlátlan tőke",
      ],
      en: [
        "Python",
        "Appearing on Shark Tank",
        "Talking to customers",
        "Unlimited capital",
      ],
    },
    correctIndex: 2,
    explanation: {
      hu: "Minden lean/agile módszertan központi alapelve: csak akkor tudsz figyelemre méltó terméket csinálni, ha valódi felhasználói problémát oldasz meg — és ezt csak az ügyfelekkel folytatott beszélgetéssel deríted ki. (Lean UX, Customer Development.)",
      en: "Core principle of every lean/agile methodology: a remarkable product solves a real user problem, and the only way to discover that is by talking to customers (Lean UX, Customer Development).",
    },
  },
  {
    id: "w38_q2",
    week: "w38",
    topic: { hu: "Product-Market Fit", en: "Product-Market Fit" },
    question: {
      hu: "Milyen metrikát használhatunk a product-market fit detektálására?",
      en: "Which metric can we use to detect product-market fit?",
    },
    options: {
      hu: [
        "Rendszeresen visszatérő felhasználók száma.",
        "A barátok és ismerősök száma a felhasználók között.",
        "A barátok visszajelzései.",
        "Nem lehet mérhető módon detektálni, csak kvalitatív módon.",
      ],
      en: [
        "Number of regularly returning users.",
        "Number of friends and acquaintances among the users.",
        "Feedback from friends.",
        "It cannot be measured, only detected qualitatively.",
      ],
    },
    correctIndex: 0,
    inferred: true,
    explanation: {
      hu: "A PMF klasszikus, mérhető indikátora a retention: ha a felhasználók rendszeresen visszatérnek és használják a terméket, akkor megtaláltad a piac-illeszkedést. A barátok véleménye torzított (bias), és a PMF nagyon is mérhető — A/B teszt, retention curve, NPS stb.",
      en: "The classic, measurable indicator of PMF is retention — if users keep coming back, you've found product-market fit. Friends' feedback is biased, and PMF is very much measurable (A/B tests, retention curves, NPS).",
    },
  },
  {
    id: "w38_q3",
    week: "w38",
    topic: { hu: "Startup", en: "Startup" },
    question: {
      hu: "Az alábbiak közül mi lehet az oka egy startup csődjének?",
      en: "Which of the following could cause a startup to fail?",
    },
    options: {
      hu: [
        "Túl sok ügyfél",
        "Gyors végrehajtás",
        "A product-market fit hiánya",
        "Jó a hangulat a csapatban",
      ],
      en: [
        "Too many customers",
        "Fast execution",
        "Lack of product-market fit",
        "Good team atmosphere",
      ],
    },
    correctIndex: 2,
    explanation: {
      hu: "A CB Insights startup-csőd kutatás szerint a #1 ok a 'no market need' — senki sem akarja a terméket. Ez pontosan a hiányzó product-market fit. A többi opció vagy nem létező probléma (túl sok ügyfél), vagy kifejezetten jó dolog (gyors végrehajtás, jó csapat).",
      en: "Per CB Insights' startup post-mortem research, the #1 reason is 'no market need' — exactly missing product-market fit. The other options are either non-issues or positives.",
    },
  },

  // ────────── w39 — UX, Use Case, User Story ──────────
  {
    id: "w39_q1",
    week: "w39",
    topic: { hu: "UX Persona", en: "UX Persona" },
    question: { hu: "A UX Persona", en: "The UX Persona is" },
    options: {
      hu: [
        "egy grafikus designer, akinek speciális területe az anime.",
        "egy női felhasználó, akit tesztelésre alkalmaznak.",
        "egy elképzelt felhasználó, mely egy felhasználói kör sztereotíp megtestesítője az egyszerűbb kezelés és átélés érdekében.",
        "a felhasználói élményt elősegítő, felelős személy, általában a UX Designer kollégák vezetője.",
      ],
      en: [
        "a graphic designer specializing in anime.",
        "a female user hired for testing.",
        "an imagined user — a stereotypical embodiment of a user segment, for easier handling and empathy.",
        "the person responsible for user experience, usually the UX Designer team lead.",
      ],
    },
    correctIndex: 2,
    explanation: {
      hu: "A persona egy fiktív, de a valódi felhasználói kutatáson alapuló archetípus (név, kor, célok, frusztrációk). A fejlesztők ezt használják, hogy 'kit szolgálunk?' kérdésre konkrét képük legyen, ne absztrakt 'a felhasználók'.",
      en: "A persona is a fictional but research-based archetype (name, age, goals, frustrations). It gives the team a concrete picture of who they're serving instead of abstract 'users'.",
    },
  },
  {
    id: "w39_q2",
    week: "w39",
    topic: { hu: "User Story vs. Use Case", en: "User Story vs. Use Case" },
    question: {
      hu: "Melyikre igaz az alábbi állítás? Egy felhasználói követelmény egyszerű, tömör, de rögzített szerkezetű leírása.",
      en: "Which one is a simple, concise but fixed-structure description of a user requirement?",
    },
    options: {
      hu: ["Use Case", "User Story", "Mindkettő", "Egyik sem"],
      en: ["Use Case", "User Story", "Both", "Neither"],
    },
    correctIndex: 1,
    explanation: {
      hu: "A User Story kötött formátumú, egysoros leírás: 'As a <user>, I want <goal> so that <reason>.' Pont az a lényege, hogy rövid, jól megjegyezhető, sprint-szinten kezelhető. (Agile/Scrum standard.)",
      en: "A User Story has a fixed one-line format: 'As a <user>, I want <goal> so that <reason>.' Designed to be short, memorable, and sprint-sized (Agile/Scrum standard).",
    },
  },
  {
    id: "w39_q3",
    week: "w39",
    topic: { hu: "Use Case vs. User Story", en: "Use Case vs. User Story" },
    question: {
      hu: "Melyikre igaz az alábbi állítás? Egy felhasználói követelmény részletes leírása, gyakran UML diagrammal is szemléltetve.",
      en: "Which one is a detailed description of a user requirement, often illustrated with a UML diagram?",
    },
    options: {
      hu: ["Mindkettő", "Egyik sem", "Use Case", "User Story"],
      en: ["Both", "Neither", "Use Case", "User Story"],
    },
    correctIndex: 2,
    explanation: {
      hu: "A Use Case részletes: aktorok, fő flow, alternate flow-k, kivételek, pre/post-conditionek. Az UML-nek külön Use Case diagram típusa van rá. Sokkal nehezebb, mint egy User Story — ezért használják inkább vízesés/V-modell típusú projektekben.",
      en: "A Use Case is detailed: actors, main flow, alternate flows, exceptions, pre/post-conditions. UML even has a dedicated Use Case diagram type. Heavier than a User Story — more common in waterfall/V-model projects.",
    },
  },

  // ────────── w40 — Fejlesztési modellek ──────────
  {
    id: "w40_q1",
    week: "w40",
    topic: { hu: "Vízesés modell", en: "Waterfall model" },
    question: {
      hu: "Mi jellemzi a vízesés modellt?",
      en: "What characterizes the waterfall model?",
    },
    options: {
      hu: [
        "Alapos tervezéssel igyekszik minimalizálni a későbbi fázisok kockázatát.",
        "A fejlesztés a »legkisebb ellenállás« irányába halad, ahogyan a vízesésen átfolyó víz is.",
        "Iteratív módszer: a vízesés egyes lépcsői iterációkat jelölnek.",
        "Igyekszik maximalizálni az implementációra fordított erőforrásokat.",
      ],
      en: [
        "Aims to minimize the risk of later phases through thorough planning.",
        "Development flows in the path of least resistance, like water over a waterfall.",
        "An iterative method — the steps of the waterfall represent iterations.",
        "Tries to maximize resources spent on implementation.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "A vízesés modell alapfeltevése: a hibajavítás költsége exponenciálisan nő a későbbi fázisokban (követelmény → terv → kód → teszt → release). Ezért az elején alapos tervezéssel próbálja minimalizálni a kockázatot. NEM iteratív (az pont az ellentéte, az agile).",
      en: "Waterfall's core assumption: bug-fix cost grows exponentially in later phases (req → design → code → test → release). So heavy upfront planning is used to minimize risk. It is NOT iterative — that's the opposite, agile.",
    },
  },
  {
    id: "w40_q2",
    week: "w40",
    topic: { hu: "Gyártósor analógia", en: "Assembly line analogy" },
    question: {
      hu: "A gyártósor analógia arra vonatkozik, hogy ...",
      en: "The assembly line analogy refers to...",
    },
    options: {
      hu: [
        "könnyen reagálhatunk a változó követelményekre, hiszen a munkadarabot is bármikor vissza lehet küldeni a gyártósor elejére.",
        "a szoftverfejlesztést a gyártósorokhoz hasonlóan kell tervezhetővé és magas minőségűvé tenni.",
        "a szoftverfejlesztők munkabeosztását pontosan szabályozni kell az optimális eredmény érdekében.",
        "a szoftverfejlesztés a mobiltelefon- vagy számítógépgyártásnak csak egy lépése.",
      ],
      en: [
        "we can easily react to changing requirements — you can send the workpiece back to the start.",
        "software development must be made plannable and high-quality, similar to assembly lines.",
        "software developers' schedules must be precisely regulated for optimal results.",
        "software development is just one step in phone/computer manufacturing.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "A gyártósor (assembly line) analógia lényege: a szoftverfejlesztést is iparosított, tervezhető, ismételhető, mérhető minőségű folyamattá kell tenni — mint Ford T-modelljét. Innen jön a CI/CD pipeline metafora is (egy 'pipeline' = gyártósor).",
      en: "The assembly line analogy: software development should become an industrialized, plannable, repeatable, measurable-quality process — like Ford's Model T. This is also where the CI/CD pipeline metaphor comes from (a pipeline = assembly line).",
    },
  },
  {
    id: "w40_q3",
    week: "w40",
    topic: { hu: "Extreme Programming", en: "Extreme Programming" },
    question: {
      hu: "Az XP / Extreme Programming alapötlete, hogy",
      en: "The core idea of XP / Extreme Programming is that",
    },
    options: {
      hu: [
        "mindent szénné tesztelünk.",
        "jelentősen túlbiztosítjuk a fejlesztési folyamatot.",
        "mindenképpen párban programozunk.",
        "számos, szándékosan különböző visszacsatolási idejű folyamaton keresztül győződünk meg arról, hogy jó irányba haladunk, és gyorsan korrigálunk, ha szükséges.",
      ],
      en: [
        "we test everything to death.",
        "we significantly over-engineer the development process.",
        "we always pair-program.",
        "we use multiple, intentionally different feedback-loop timescales to verify direction and quickly correct course.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Az XP lényege a feedback loops különböző időskálákon: pair programming (másodperc), unit test (perc), continuous integration (óra), iteráció (1–2 hét), release (hónap). Minden visszacsatolás más-más típusú hibát fog meg, és gyors korrekciót tesz lehetővé.",
      en: "XP's essence is feedback loops at different timescales: pair programming (seconds), unit tests (minutes), CI (hours), iterations (1–2 weeks), releases (months). Each loop catches a different class of error and enables fast course-correction.",
    },
  },

  // ────────── w42 — CI/CD, DevOps ──────────
  {
    id: "w42_q1",
    week: "w42",
    topic: { hu: "Artifact Repository", en: "Artifact Repository" },
    question: {
      hu: "Az Artifact Repository-ban",
      en: "In the Artifact Repository",
    },
    options: {
      hu: [
        "a build során fellépő, megmagyarázhatatlan anomáliákról tárolunk adatokat.",
        "a forráskód biztonsági mentését tároljuk, több példányt időben visszamenőleg.",
        "bármilyen információt, adatot tárolhatunk, ami egy build során létrejön, buildenként verziózva.",
        "a végleg kiadásra kerülő programcsomagot tároljuk, mindig a legutolsó verziót.",
      ],
      en: [
        "we store data about unexplained anomalies that occur during the build.",
        "we store source code backups, multiple versions going back in time.",
        "we can store anything that's produced during a build, versioned per build.",
        "we store the final release package — always only the latest version.",
      ],
    },
    correctIndex: 2,
    explanation: {
      hu: "Az artifact repository (pl. Nexus, Artifactory, GitHub Packages) bármilyen build-output verziózott tárolására való: JAR, Docker image, npm package, dokumentáció, test report. Nem csak a 'végleges' release-t — minden buildet, hogy reprodukálhatóság legyen. A forráskód a VCS-be (Git) megy, nem ide.",
      en: "Artifact repositories (Nexus, Artifactory, GitHub Packages) store any versioned build output: JARs, Docker images, npm packages, docs, test reports. Not just the final release — every build, for reproducibility. Source code goes to VCS (Git), not here.",
    },
  },
  {
    id: "w42_q2",
    week: "w42",
    topic: { hu: "Statikus kódanalízis", en: "Static code analysis" },
    question: {
      hu: "Egy statikus kód analízis eszköz feladata egy CI pipeline-ban az, hogy",
      en: "The role of a static code analysis tool in a CI pipeline is to",
    },
    options: {
      hu: [
        "nehezebbé tegye a végtermék feltörését, kódfeltörési algoritmusokat futtatva.",
        "a forráskód elemzésével potenciális programozói hibákat szűrjön ki a build során.",
        "a build futásának elemzésével javaslatokat tegyen hatékonyabb CI pipeline implementációkhoz.",
        "elemezze a statikus változók helyes használatát és kiszűrje a rossz singleton-implementációkat.",
      ],
      en: [
        "make breaking the end product harder by running code-cracking algorithms.",
        "analyze the source code and flag potential programmer errors during the build.",
        "suggest more efficient CI pipeline implementations by analyzing the build run.",
        "analyze the use of static variables and filter out bad singleton implementations.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "Statikus analízis = a kódot futtatás NÉLKÜL elemzi (SonarQube, ESLint, Pylint, Coverity). Olyan hibákat keres, mint null pointer dereference, használaton kívüli változó, security vulnerability, code smell. A 'statikus' itt nem a static változókra utal, hanem arra, hogy nem futtatunk semmit.",
      en: "Static analysis examines code WITHOUT running it (SonarQube, ESLint, Pylint, Coverity). Looks for null pointer dereferences, unused variables, security vulnerabilities, code smells. 'Static' here refers to non-execution, not to `static` variables.",
    },
  },
  {
    id: "w42_q3",
    week: "w42",
    topic: { hu: "DevOps", en: "DevOps" },
    question: {
      hu: "A DevOps a gyakorlatban azt jelenti, hogy",
      en: "In practice, DevOps means that",
    },
    options: {
      hu: [
        "a fejlesztők, tesztelők és rendszergazdák közötti határvonal elmosódik, mivel mindenki csinál dolgokat mindhárom terület feladatai közül.",
        "a fejlesztők és rendszergazdák közötti ellentétet közös programokkal, tréningekkel próbáljuk feloldani.",
        "erőforrást fektetünk be abba, hogy a rendszergazdai teendők jobban, automatizáltabban menjenek.",
        "nem végzünk tesztelést, hanem azt online a felhasználókra hagyjuk, monitoringgal követve.",
      ],
      en: [
        "the lines between developers, testers, and ops blur — everyone does work from all three areas.",
        "we try to resolve developer-vs-ops conflict with joint programs and team building.",
        "we invest resources in making sysadmin tasks more automated.",
        "we don't test — we leave testing to users online, tracking with monitoring systems.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "A DevOps a Dev (fejlesztés) és Ops (üzemeltetés) közötti SILO-FALAT bontja le. Nem külön csapat, hanem kultúra + automatizálás: a fejlesztő ír Terraformot, az üzemeltető lát kódot, a tesztelő ír CI pipeline-t. 'You build it, you run it.' (Werner Vogels, Amazon).",
      en: "DevOps tears down the SILO between Dev and Ops. Not a separate team — a culture plus automation: developers write Terraform, ops reads code, testers write CI pipelines. 'You build it, you run it.' (Werner Vogels, Amazon.)",
    },
  },

  // ────────── w43 — ML, MLOps ──────────
  {
    id: "w43_q1",
    week: "w43",
    topic: { hu: "Mélytanulás", en: "Deep learning" },
    question: {
      hu: "A mélytanulás (deep learning) ...",
      en: "Deep learning is ...",
    },
    options: {
      hu: [
        "az emberi lélek mélységeinek gépi feltérképezése.",
        "gépi tanulás többrétegű neuronhálókkal.",
        "közösségi hálózatokban megvalósuló mesterséges intelligencia.",
        "a ChatGPT válaszadásakor valósul meg.",
      ],
      en: [
        "the machine mapping of the depths of the human soul.",
        "machine learning with multi-layer neural networks.",
        "AI implemented within social networks.",
        "what happens when ChatGPT responds.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "Definíció szerint a deep learning a machine learning egy alága, amely többrétegű (deep = sok rejtett réteg) mesterséges neuronhálókat használ. A 'deep' a rétegek számára utal, nem a 'mélységes' filozófiai értelemre.",
      en: "By definition, deep learning is a subset of machine learning using multi-layer (deep = many hidden layers) artificial neural networks. 'Deep' refers to layer count, not to philosophical depth.",
    },
  },
  {
    id: "w43_q2",
    week: "w43",
    topic: { hu: "MLOps automatizáció", en: "MLOps automation" },
    question: {
      hu: "A modelltanítás, kiértékelés és validáció folyamatát azért érdemes automatizálni, mert",
      en: "We automate the model training/evaluation/validation process because",
    },
    options: {
      hu: [
        "enélkül nehéz kiválasztani a megfelelő modell-architektúrát.",
        "így kevesebb GPU kell a modell tanításához.",
        "az adattudósok sokat keresnek, és a vállalat így spórolhat.",
        "így a modell a célkörnyezetben is (újra)tanítható.",
      ],
      en: [
        "without it, choosing the right model architecture is hard.",
        "this way fewer GPUs are needed for training.",
        "data scientists are expensive, so the company saves money.",
        "this way the model can be (re)trained in the target environment.",
      ],
    },
    correctIndex: 3,
    inferred: true,
    explanation: {
      hu: "Az előadás explicit kimondja (w43, MLOps level 1): 'Automatic (re)training in production + automatic deployment of new version. Triggers: ad-hoc, scheduled, new data available, model drift...' Az automatizáció fő gyakorlati haszna, hogy a modellt a production környezetben is automatikusan újra lehet tanítani, ha az adat változik (data drift, model drift).",
      en: "The lecture (w43, MLOps level 1) states explicitly: 'Automatic (re)training in production + automatic deployment of new version. Triggers: ad-hoc, scheduled, new data available, model drift...' The practical payoff is that the model can auto-retrain in production when data shifts.",
    },
  },
  {
    id: "w43_q3",
    week: "w43",
    topic: { hu: "MLOps", en: "MLOps" },
    question: { hu: "Az MLOps ...", en: "MLOps is ..." },
    options: {
      hu: [
        "a ChatGPT alkalmazása szoftvertermékek üzemeltetéséhez.",
        "ML technológiák alkalmazása a hatékonyabb DevOps érdekében.",
        "egy ML előtti mesterséges intelligencia megvalósítás.",
        "a DevOps adaptációja ML modellekhez.",
      ],
      en: [
        "applying ChatGPT to operate software products.",
        "applying ML technologies for more efficient DevOps.",
        "a pre-ML AI implementation.",
        "the adaptation of DevOps for ML models.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Az előadás definíciója: 'Traditional SW: DevOps. ML models: MLOps.' Vagyis az MLOps a DevOps elveinek (CI/CD, automatizáció, monitoring, verziókövetés) kiterjesztése ML modellekre. FIGYELEM: MLOps ≠ AIOps (utóbbi az AI alkalmazása IT üzemeltetésre, pl. log-elemzés).",
      en: "Per the lecture: 'Traditional SW: DevOps. ML models: MLOps.' MLOps extends DevOps principles (CI/CD, automation, monitoring, versioning) to ML models. NOTE: MLOps ≠ AIOps (the latter applies AI to IT ops, e.g. log analysis).",
    },
  },

  // ────────── w45 — SOLID ──────────
  {
    id: "w45_q1",
    week: "w45",
    topic: { hu: "Liskov Substitution", en: "Liskov Substitution" },
    question: {
      hu: "A Liskov-féle behelyettesítési elv szerint",
      en: "According to the Liskov Substitution Principle",
    },
    options: {
      hu: [
        "az interfészektől való függőségeket közvetlen osztály-függőségekkel kell helyettesíteni.",
        "a leszármazott osztály objektumai használhatók minden olyan környezetben, ahol az ősosztály objektumai.",
        "az ősosztály objektumai használhatók minden olyan környezetben, ahol a leszármazott osztály objektumai.",
        "a közvetlen osztály-függőségeket interfészektől való függőséggel kell helyettesíteni.",
      ],
      en: [
        "interface dependencies should be replaced by direct class dependencies.",
        "derived class objects are usable in every context where the base class objects are.",
        "base class objects are usable in every context where derived class objects are.",
        "direct class dependencies should be replaced by interface dependencies.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "LSP (Barbara Liskov, 1987): ha B leszármazottja A-nak, akkor minden A-t váró helyen B-t is használhatunk anélkül, hogy a program viselkedése elromolna. A klasszikus ellenpélda: Square extends Rectangle — látszólag oké, de a setWidth/setHeight invariánsai sérülnek.",
      en: "LSP (Barbara Liskov, 1987): if B derives from A, you can use B anywhere A is expected without breaking program behavior. Classic counter-example: Square extends Rectangle — looks fine until setWidth/setHeight invariants are violated.",
    },
  },
  {
    id: "w45_q2",
    week: "w45",
    topic: { hu: "Open/Closed Principle", en: "Open/Closed Principle" },
    question: {
      hu: "Az Open/Closed Principle jelentése, hogy",
      en: "The Open/Closed Principle states that",
    },
    options: {
      hu: [
        "az osztály nyílt a módosításra, de zárt a kiterjesztésre.",
        "az osztály zárt a módosításra, de nyílt a kiterjesztésre.",
        "az osztály nyílt forráskóddal rendelkezik, de rajta a cég szerzői joga van.",
        "a fejlesztők nyitottak új ötletekre, de nem tolerálják a toxikus viselkedést.",
      ],
      en: [
        "a class is open for modification but closed for extension.",
        "a class is closed for modification but open for extension.",
        "a class has open source code but is copyrighted by the company.",
        "developers are open to new ideas but don't tolerate toxic behavior.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "OCP (Bertrand Meyer): új funkcionalitást NEM a meglévő osztály módosításával, hanem leszármaztatással/komponáltatással (kiterjesztéssel) adunk hozzá. Ha módosítanánk, regression-t okozhatnánk a meglévő kódban. Practical eszközei: strategy pattern, polimorfizmus, interfészek.",
      en: "OCP (Bertrand Meyer): add new functionality by extending (inheritance/composition), not by modifying existing classes — modification risks regressions. Practical tools: strategy pattern, polymorphism, interfaces.",
    },
  },
  {
    id: "w45_q3",
    week: "w45",
    topic: { hu: "Interface Segregation", en: "Interface Segregation" },
    question: {
      hu: "Az interfész-szegregációs elv szerint",
      en: "According to the Interface Segregation Principle",
    },
    options: {
      hu: [
        "a nagy interfészeket érdemes egymástól függetlenebb kisebbekre szétbontani.",
        "az elavult interfészeket szegregálni kell, azaz az új osztályok nem implementálhatják őket.",
        "az interfészeket csoportokba kell szervezni.",
        "az interfészek definiálásakor kell eldönteni, mely osztályoknak kell implementálni az adott interfészt.",
      ],
      en: [
        "large interfaces should be split into smaller, more independent ones.",
        "obsolete interfaces must be segregated — new classes can't implement them.",
        "interfaces must be organized into groups.",
        "when defining interfaces, decide which classes must implement them.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "ISP: 'Clients should not be forced to depend upon interfaces that they do not use.' (Robert C. Martin). Ha van egy 20 metódusos 'kövér' interfész, amiből egy osztály csak 3-at használ, akkor a 17 üres implementáció = code smell. Bontsd szét kisebb, fókuszált interfészekre.",
      en: "ISP: 'Clients should not be forced to depend upon interfaces they do not use.' (Robert C. Martin). A 20-method 'fat' interface where a class uses only 3 → the 17 stub methods are a code smell. Split into smaller, focused interfaces.",
    },
  },

  // ────────── w46 — UML ──────────
  {
    id: "w46_q1",
    week: "w46",
    topic: { hu: "UML Use Case diagram", en: "UML Use Case diagram" },
    question: {
      hu: "Az UML Use Case diagramja",
      en: "The UML Use Case diagram",
    },
    options: {
      hu: [
        "funkcionális követelményeket mutat.",
        "felhasználói hibákat mutat.",
        "a felhasználók objektumokkal való viszonyát mutatja.",
        "a felhasználók osztályokkal való viszonyát mutatja.",
      ],
      en: [
        "shows functional requirements.",
        "shows user errors.",
        "shows users' relationships with objects.",
        "shows users' relationships with classes.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "A Use Case diagram a rendszer FUNKCIONÁLIS követelményeit ábrázolja: kik az aktorok (pálcikaemberek), milyen use case-eket (ovális) használnak, milyen kapcsolatokkal (include, extend). Nem osztályokkal, hanem funkciókkal foglalkozik.",
      en: "Use Case diagrams depict the system's FUNCTIONAL requirements: actors (stick figures), use cases (ovals), and relationships (include, extend). They show functions, not classes.",
    },
  },
  {
    id: "w46_q2",
    week: "w46",
    topic: {
      hu: "Osztály- vs. komponensdiagram",
      en: "Class vs. component diagram",
    },
    question: {
      hu: "Hogyan viszonyul egymáshoz az UML osztály- és komponensdiagramja?",
      en: "How do UML class and component diagrams relate?",
    },
    options: {
      hu: [
        "Az osztálydiagram nagyobb, a komponensdiagram kisebb, osztályok részei közötti statikus viszonyt mutat.",
        "Az osztálydiagram kisebb, a komponensdiagram nagyobb, több osztályból álló egységek statikus viszonyát mutatja.",
        "Az osztálydiagram statikus felépítést, a komponensdiagram dinamikus viselkedést mutat.",
        "A két diagramtípus között nincs kapcsolat azon kívül, hogy mindkettő az UML szabvány része.",
      ],
      en: [
        "Class diagram is larger, component diagram smaller — relations between parts of classes.",
        "Class diagram is smaller, component diagram larger — static relations between multi-class units.",
        "Class diagram is static structure, component diagram is dynamic behavior.",
        "The two diagram types have no relation beyond both being part of UML.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "A komponensdiagram MAGASABB absztrakciós szinten dolgozik: egy komponens több osztály egysége (pl. 'AuthModule', 'PaymentService'). Mindkettő STATIKUS struktúrát mutat — nem dinamikus viselkedést (az a sequence/state machine).",
      en: "Component diagrams work at a HIGHER abstraction level: a component aggregates multiple classes (e.g. 'AuthModule', 'PaymentService'). Both show STATIC structure — not dynamic behavior (that's sequence/state machine diagrams).",
    },
  },
  {
    id: "w46_q3",
    week: "w46",
    topic: {
      hu: "State Machine vs. Activity",
      en: "State Machine vs. Activity",
    },
    question: {
      hu: "Mi a közös az UML State Machine és Activity diagramjai között?",
      en: "What is common between UML State Machine and Activity diagrams?",
    },
    options: {
      hu: [
        "Mindkettő folytonos folyamatok időbeni lefolyását mutatja.",
        "Mindkettő a rendszer statikus felépítését mutatja.",
        "Mindkettő a rendszer dinamikus viselkedését mutatja.",
        "Mindkettő egy objektum belső invariánsait kódolja.",
      ],
      en: [
        "Both show the time-evolution of continuous processes.",
        "Both show the system's static structure.",
        "Both show the system's dynamic behavior.",
        "Both encode an object's internal invariants.",
      ],
    },
    correctIndex: 2,
    explanation: {
      hu: "A State Machine (állapotgép) az objektum állapotváltozásait mutatja (állapotok + tranzíciók), az Activity diagram a folyamatok lépéseit (kicsit mint a flowchart, párhuzamos ágakkal). Mindkettő DINAMIKUS — vagyis a rendszer időbeni viselkedését írja le, szemben a statikus osztálydiagrammal.",
      en: "State Machine shows object state changes (states + transitions); Activity diagrams show process steps (like a flowchart with parallel branches). Both are DYNAMIC — they describe behavior over time, unlike the static class diagram.",
    },
  },

  // ────────── w47 — Tervminták I. ──────────
  {
    id: "w47_q1",
    week: "w47",
    topic: { hu: "RAII", en: "RAII" },
    question: {
      hu: "RAII használata esetén megakadályozzuk az",
      en: "Using RAII prevents",
    },
    options: {
      hu: [
        "erőforrások megfelelő lezárásának elmaradását.",
        "erőforrások helyes létrehozásának elmaradását.",
        "erőforrások által generált riasztásokat.",
        "erőforrások használatával kapcsolatos lokalizációs problémákat.",
      ],
      en: [
        "the failure to properly release resources.",
        "the failure to correctly create resources.",
        "alerts generated by resources.",
        "localization problems related to resource use.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "RAII = Resource Acquisition Is Initialization (C++, Bjarne Stroustrup). Az erőforrás (fájl, mutex, memória, socket) életciklusát az objektum élettartamához kötjük: konstruktor megszerzi, DESTRUKTOR felszabadítja. Így exception/early return esetén is automatikusan lezárul — nincs erőforrás-szivárgás (resource leak).",
      en: "RAII = Resource Acquisition Is Initialization (C++, Bjarne Stroustrup). Tie a resource's (file, mutex, memory, socket) lifetime to an object: constructor acquires, DESTRUCTOR releases. Even on exception/early return, cleanup happens automatically — no resource leaks.",
    },
  },
  {
    id: "w47_q2",
    week: "w47",
    topic: { hu: "Object Pool", en: "Object Pool" },
    question: {
      hu: "Az Object Pool tervmintában",
      en: "In the Object Pool design pattern",
    },
    options: {
      hu: [
        "újrahasznosítunk objektumokat egy meglévő készletből, azokat többször is felhasználva.",
        "hash adatstruktúrával gyorsítjuk az objektumok elérését.",
        "valós objektumokat modellezünk fizikai szimulációval.",
        "FIFO sorrendben hozunk létre és semmisítünk meg objektumokat.",
      ],
      en: [
        "we reuse objects from an existing pool, drawing them multiple times.",
        "we use a hash data structure to speed up object lookup.",
        "we model real objects via physical simulation.",
        "we create and destroy objects in FIFO order.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "Object Pool: drága létrehozású objektumokat (DB connection, thread, nagy buffer) előre allokálunk egy 'medencébe', és kérésre kiosztjuk, használat után visszakapjuk. Nem create/destroy ciklus, hanem acquire/release. Tipikus pl. JDBC connection pool, thread pool.",
      en: "Object Pool: pre-allocate expensive-to-create objects (DB connections, threads, large buffers) into a 'pool'; hand them out on request, take them back after use. Not create/destroy but acquire/release. Classic example: JDBC connection pool, thread pool.",
    },
  },
  {
    id: "w47_q3",
    week: "w47",
    topic: { hu: "Builder pattern", en: "Builder pattern" },
    question: {
      hu: "A Builder pattern lényege, hogy",
      en: "The Builder pattern's essence is that",
    },
    options: {
      hu: [
        "objektumok létrehozásánál sok paraméteres konstruáló művelet helyett egy gyártó objektumot állítunk be egyszerű setterekkel.",
        "csak olyan alapvető építőköveket használjunk, melyet a programozási nyelv támogat.",
        "apró elemekből rakjuk össze lépésenként az új objektumunkat.",
        "a létrehozott objektumokat további setterekkel lehessen paraméterezni.",
      ],
      en: [
        "instead of a many-parameter constructor, we configure a builder object via simple setters.",
        "we only use building blocks supported by the programming language.",
        "we assemble the new object step-by-step from small elements.",
        "the created objects can be further configured via additional setters.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "Builder pattern: a `new Pizza(true, false, true, 'thin', 30, ['ham','olive'], ...)` típusú olvashatatlan, hibás sorrendű konstruktor helyett: `new PizzaBuilder().withCheese().thinCrust().diameter(30).build()`. Fluent API, named arguments szimuláció, opcionális mezők kezelése.",
      en: "Builder pattern: replaces unreadable `new Pizza(true, false, true, 'thin', 30, ['ham','olive'], ...)` with `new PizzaBuilder().withCheese().thinCrust().diameter(30).build()`. Fluent API, simulated named arguments, handles optional fields.",
    },
  },

  // ────────── w48 — Tervminták II. ──────────
  {
    id: "w48_q1",
    week: "w48",
    topic: { hu: "Flyweight pattern", en: "Flyweight pattern" },
    question: {
      hu: "A haverjaid 4K képeket másolgatnak tömörítetlenül a mobilon. Az app rohadt lassú. Mit teszel?",
      en: "Your buddies are passing around uncompressed 4K images on mobile. The app is dog-slow. What do you do?",
    },
    options: {
      hu: [
        "Elkezdem Proxy-zni a képeket, hogy nyerjek memóriát.",
        "Majd egy erősebb mobilon demózunk.",
        "Leülünk és belevésem, hogyan kell normálisan használni a Decorator tervmintát.",
        "Átalakítom a kép osztályt egy Flyweight-té, és implementálok mögé egy copy-on-write-ot, ha szükséges.",
      ],
      en: [
        "I start Proxy-ing the images to gain memory.",
        "We'll demo on a beefier phone.",
        "I sit them down and drill the Decorator pattern into their heads.",
        "I convert the image class into a Flyweight with copy-on-write behind it if needed.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Flyweight: ha sok objektumnak ugyanaz a 'súlyos' belső állapota (intrinsic state) — pl. a 4K kép pixeladata — akkor azt egyszer tároljuk, és csak referenciákat osztogatunk. Copy-on-write: csak akkor másolunk, amikor valaki ténylegesen módosítani akar. Drasztikus memóriacsökkenés.",
      en: "Flyweight: when many objects share the same 'heavy' intrinsic state — e.g. the 4K pixel data — store it once and pass around references. Copy-on-write: clone only when someone actually modifies. Drastic memory reduction.",
    },
  },
  {
    id: "w48_q2",
    week: "w48",
    topic: { hu: "Facade pattern", en: "Facade pattern" },
    question: {
      hu: "Káosz van a backendben, frontendet rá kéne kapcsolni minden funkcióra. Mit teszel?",
      en: "Chaos in the backend, frontend needs to plug into everything. What do you do?",
    },
    options: {
      hu: [
        "Egy Iteratorral végigmegyek a haverok kicsi moduljain.",
        "Mission Impossible. Újrázok következő félévben.",
        "Mediátort hívok segítségül, hogy beszélje le a csapattagokkal.",
        "Csinálok egy Facade API-t, ami egységesíti a behívást és átlátható, szimpla interfészt mutat a frontend felé.",
      ],
      en: [
        "I walk through the buddies' modules with an Iterator.",
        "Mission Impossible. I'll retake next semester.",
        "I bring in a Mediator to negotiate with the teammates.",
        "I build a Facade API that unifies the calls and presents a simple interface to the frontend.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Facade (homlokzat): bonyolult alrendszer elé teszünk egy egyszerű, egységes interfészt. A frontend nem foglalkozik a 17-féle backend modul kaotikus API-jával — egyetlen `BackendFacade.doStuff()` van. Bevett pattern a microservice → BFF (Backend-For-Frontend) átalakításnál is.",
      en: "Facade: put a simple, unified interface in front of a complex subsystem. The frontend doesn't deal with 17 chaotic backend module APIs — just one `BackendFacade.doStuff()`. Common pattern in microservice → BFF (Backend-For-Frontend) refactors.",
    },
  },
  {
    id: "w48_q3",
    week: "w48",
    topic: { hu: "Behavioral patterns", en: "Behavioral patterns" },
    question: {
      hu: "Melyek viselkedést leíró tervminták (behavioral design pattern) a következőek közül?",
      en: "Which of the following are behavioral design patterns?",
    },
    options: {
      hu: [
        "Composite, Decorator",
        "Command, State",
        "Prototype, Factory Method",
        "egyik sem",
      ],
      en: [
        "Composite, Decorator",
        "Command, State",
        "Prototype, Factory Method",
        "none of them",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "GoF kategóriák: Creational (Singleton, Factory Method, Abstract Factory, Builder, Prototype), Structural (Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy), Behavioral (Chain of Resp., Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor). Command + State → behavioral ✓.",
      en: "GoF categories: Creational (Singleton, Factory Method, Abstract Factory, Builder, Prototype), Structural (Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy), Behavioral (Chain of Resp., Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor). Command + State → behavioral ✓.",
    },
  },

  // ────────── w49 — Tervminták III. ──────────
  {
    id: "w49_q1",
    week: "w49",
    topic: { hu: "Memento pattern", en: "Memento pattern" },
    question: {
      hu: "Undo funkcionalitást implementálsz az editorodban. Melyik tervminta jönne jól ehhez?",
      en: "You're implementing Undo in your editor. Which pattern would help?",
    },
    options: {
      hu: ["RAII", "Bridge", "Memento", "Proxy"],
      en: ["RAII", "Bridge", "Memento", "Proxy"],
    },
    correctIndex: 2,
    explanation: {
      hu: "A Memento egy 'pillanatfelvételt' (snapshot) készít az objektum belső állapotáról anélkül, hogy a kapszulázást megsértené. Undo-stack-be tett mementókat egyenként pop-olva visszaállíthatod az előző állapotokat. (Originator → készíti, Memento → tárolja, Caretaker → kezeli a stack-et.)",
      en: "Memento captures a snapshot of an object's internal state without breaking encapsulation. Push mementos onto an undo stack; pop them to restore previous states. (Originator creates them, Memento stores them, Caretaker manages the stack.)",
    },
  },
  {
    id: "w49_q2",
    week: "w49",
    topic: { hu: "Concurrency patterns", en: "Concurrency patterns" },
    question: {
      hu: "A Concurrency design patternek",
      en: "Concurrency design patterns",
    },
    options: {
      hu: [
        "memóriaelérési problémákkal foglalkoznak.",
        "kódformázási problémákkal foglalkoznak.",
        "párhuzamossággal kapcsolatos problémákkal foglalkoznak.",
        "játékelméleti problémákkal foglalkoznak.",
      ],
      en: [
        "deal with memory-access problems.",
        "deal with code formatting problems.",
        "deal with parallelism-related problems.",
        "deal with game-theory problems.",
      ],
    },
    correctIndex: 2,
    explanation: {
      hu: "A concurrency = párhuzamosság. Ezek a tervminták (Active Object, Monitor Object, Half-Sync/Half-Async, Producer-Consumer, Reader-Writer Lock stb.) a többszálú/párhuzamos végrehajtás problémáit oldják meg: race condition, deadlock, szinkronizáció, ütemezés.",
      en: "Concurrency = parallelism. These patterns (Active Object, Monitor Object, Half-Sync/Half-Async, Producer-Consumer, Reader-Writer Lock, etc.) solve multi-threaded/parallel execution problems: race conditions, deadlocks, synchronization, scheduling.",
    },
  },
  {
    id: "w49_q3",
    week: "w49",
    topic: { hu: "Active Object", en: "Active Object" },
    question: {
      hu: "Az Active Object tervminta azt jelenti, hogy",
      en: "The Active Object pattern means",
    },
    options: {
      hu: [
        "függvényhívásszerű szemantikával indítunk párhuzamos folyamatot, ahol a következő szinkronizációs pont a függvény eredményének lekérdezése.",
        "az objektumunk tartalmaz nem statikus vagy nem konstans (mutable) tagot.",
        "az objektumunk bizonyos mezőit másik szálról bármikor módosíthatják.",
        "egyszerű API-n keresztül transzparens módon távoli eljárásokat hívok meg.",
      ],
      en: [
        "we start a parallel process with function-call-like semantics; the next sync point is querying the function's result.",
        "our object contains a non-static or non-constant (mutable) member.",
        "certain fields of our object can be modified from another thread at any time.",
        "via a simple API I transparently call remote procedures.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "Active Object: a metódushívás aszinkron lesz — a hívás azonnal visszatér egy Future/Promise objektummal, a tényleges munka egy másik szálon fut. Szinkronizáció: amikor a Future-ön get()-et hívsz, az blokkol az eredményig. Ez van a JavaScript async/await, Java CompletableFuture, C++ std::async mögött.",
      en: "Active Object: method calls become async — they return immediately with a Future/Promise; actual work runs on another thread. Synchronization: calling get() on the Future blocks until ready. This is what powers JavaScript async/await, Java CompletableFuture, C++ std::async.",
    },
  },
  // ────────── w01 — Szoftvertervezés alapok ──────────
  {
    id: "w01_q1",
    week: "w01",
    topic: { hu: "Szoftvertervezés alapok", en: "Software Engineering Basics" },
    question: {
      hu: "Melyik állítás tekinthető az esetek többségében igaznak a költségekkel kapcsolatban?",
      en: "Which statement is generally considered true regarding costs?",
    },
    options: {
      hu: [
        "Egy rendszernek a hardver költségei nagyobbak, mint a szoftver költségei.",
        "Egy rendszernek a szoftver költségei magasabbak, mint a hardver költségei.",
        "A hardver és szoftver költségek mindig megegyeznek.",
        "A szoftver költségek elhanyagolhatók a hardverhez képest.",
      ],
      en: [
        "Hardware costs of a system are higher than software costs.",
        "Software costs of a system are higher than hardware costs.",
        "Hardware and software costs are always equal.",
        "Software costs are negligible compared to hardware.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "Napjainkban egy rendszer szoftverköltségei (fejlesztés, tesztelés, karbantartás) jellemzően jóval meghaladják a hardver költségeit.",
      en: "Nowadays, the software costs of a system (development, testing, maintenance) typically far exceed the hardware costs.",
    },
  },
  {
    id: "w01_q2",
    week: "w01",
    topic: { hu: "Szoftvertervezés alapok", en: "Software Engineering Basics" },
    question: {
      hu: "Melyik állítás tekinthető az esetek többségében igaznak a karbantartásról?",
      en: "Which statement is generally considered true regarding maintenance?",
    },
    options: {
      hu: [
        "Egy szoftver fejlesztési költségei magasabbak, mint a karbantartási költségei.",
        "Egy szoftver karbantartási költségei magasabbak, mint a fejlesztési költségei.",
        "A karbantartás ingyenes, ha jól írták meg a kódot.",
        "A két költség általában megegyezik.",
      ],
      en: [
        "Software development costs are higher than maintenance costs.",
        "Software maintenance costs are higher than development costs.",
        "Maintenance is free if the code is well written.",
        "The two costs are generally equal.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "A szoftverek életciklusa során a karbantartásra (hibajavítás, új funkciók, környezeti változások lekövetése) fordított idő és pénz általában többszöröse az eredeti fejlesztési költségnek.",
      en: "Over a software lifecycle, time and money spent on maintenance (bug fixes, new features, adapting to environment changes) is usually several times the initial development cost.",
    },
  },
  {
    id: "w01_q3",
    week: "w01",
    topic: { hu: "Módszertanok", en: "Methodologies" },
    question: {
      hu: "Melyik a legjobb szoftvertervezési módszer?",
      en: "Which is the best software design method?",
    },
    options: {
      hu: [
        "Agilis szoftverfejlesztés",
        "V-modell",
        "Iteratív és inkrementális módszer",
        "Attól függ, miről van szó",
      ],
      en: [
        "Agile software development",
        "V-model",
        "Iterative and incremental method",
        "It depends on the context",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Nincs 'ezüst golyó' (No Silver Bullet). A megfelelő módszertan mindig az adott projekt méretétől, a csapat tapasztalatától, a követelmények változékonyságától és a megrendelői környezettől függ.",
      en: "There is no 'silver bullet'. The right methodology always depends on project size, team experience, requirement volatility, and the client environment.",
    },
  },

  // ────────── w38 — Termékfejlesztés, Startup ──────────
  {
    id: "w38_q4",
    week: "w38",
    topic: { hu: "Startup probléma", en: "Startup Problem" },
    question: {
      hu: "Mi jellemzi azt a problémát, amire érdemes startupot alapítani?",
      en: "What characterizes a problem worth founding a startup for?",
    },
    options: {
      hu: [
        "Az ötlet megoldását a barátok zseniálisnak tartják.",
        "Új technológia szükséges a megoldásához.",
        "A kedvenc technológiámat kell hozzá használni.",
        "Rendkívül fájdalmas, és sok ember küzd vele.",
      ],
      en: [
        "Friends think my solution idea is brilliant.",
        "New technology is required to solve it.",
        "I get to use my favorite technology.",
        "It is extremely painful, and many people struggle with it.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Egy jó startup egy valós, nagy fájdalmat okozó ('hair on fire') problémát old meg, amellyel egy elég nagy célközönség küzd.",
      en: "A good startup solves a real, highly painful ('hair on fire') problem that a sufficiently large target audience struggles with.",
    },
  },
  {
    id: "w38_q5",
    week: "w38",
    topic: { hu: "Innováció", en: "Innovation" },
    question: {
      hu: "Hogyan lehet megtalálni a jó innovációs ötleteket?",
      en: "How can you find good innovation ideas?",
    },
    options: {
      hu: [
        "Keress egy nagy ipari vagy üzleti szektort, amelyik látszólag rosszul működik.",
        "Startup versenyt lehet vele nyerni.",
        "ChatGPT-vel kapcsolatos.",
        "Barátok lelkesen támogatják.",
      ],
      en: [
        "Find a large industrial or business sector that seems to work poorly.",
        "You can win a startup competition with it.",
        "It is related to ChatGPT.",
        "Friends enthusiastically support it.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "A diszruptív innovációk gyakran olyan meglévő, hagyományos iparágakból indulnak ki, amelyek elavult, nem hatékony folyamatokat használnak.",
      en: "Disruptive innovations often originate in traditional industries that rely on outdated, inefficient processes.",
    },
  },
  {
    id: "w38_q6",
    week: "w38",
    topic: { hu: "Product-Market Fit", en: "Product-Market Fit" },
    question: {
      hu: "Mi a product-market fit definíciója?",
      en: "What is the definition of product-market fit?",
    },
    options: {
      hu: [
        "A termék chatbot alapú, és több befektetővel tárgyalunk.",
        "A termékkel startup versenyeket nyerünk, de ügyfelek még nincsenek.",
        "A termék hatékonyan elégíti ki egy meghatározott vásárlói csoport igényeit, jelentős értéket teremtve és pozitív választ generálva.",
        "Sikerült bekerülni a Y Combinator programjába.",
      ],
      en: [
        "The product is chatbot-based and we are negotiating with investors.",
        "We win startup competitions with the product, but have no customers yet.",
        "The product effectively satisfies the needs of a specific group of customers, creating significant value and generating a positive response.",
        "We managed to get into the Y Combinator program.",
      ],
    },
    correctIndex: 2,
    explanation: {
      hu: "A PMF lényege, hogy a piac valóban akarja a termékedet. A befektetők, a technológia vagy a versenyeredmények nem garantálják a PMF-et; a fizető/visszatérő ügyfelek elégedettsége igen.",
      en: "The essence of PMF is that the market truly wants your product. Investors, technology, or competition wins don't guarantee PMF; satisfied paying/returning customers do.",
    },
  },

  // ────────── w39 — A/B tesztelés ──────────
  {
    id: "w39_q4",
    week: "w39",
    topic: { hu: "A/B Testing", en: "A/B Testing" },
    question: {
      hu: "Az A/B tesztelés ...",
      en: "A/B testing is ...",
    },
    options: {
      hu: [
        "egy belső folyamat, amelyben a UX-es kollégák hozzáértését teszteljük.",
        "során kártyákat mutatunk a felhasználónak és feljegyezzük a választásait.",
        "alfa és béta tesztelés, a kiadás előtti két fázis.",
        "során két különböző felhasználói hipotézis közül választunk a termékben implementált verziókból nyert adatok alapján.",
      ],
      en: [
        "an internal process where we test UX colleagues' competence.",
        "showing cards to users and recording their choices.",
        "alpha and beta testing, two phases directly preceding release.",
        "choosing between two user hypotheses by collecting data from different versions implemented in the product.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Az A/B tesztelés során az éles termék két (vagy több) variációját mutatjuk meg a felhasználóknak, és metrikák (pl. konverzió) alapján döntjük el, melyik a jobb.",
      en: "During A/B testing, two (or more) live product variants are shown to users, and metrics (e.g., conversion) determine which performs better.",
    },
  },

  // ────────── w40 — Agilis csapat ──────────
  {
    id: "w40_q4",
    week: "w40",
    topic: { hu: "Csapatstruktúra", en: "Team structure" },
    question: {
      hu: "Mit jelent a 'cross functional' / keresztfunkcionális csapat kifejezés?",
      en: "What does the term 'cross functional' team mean?",
    },
    options: {
      hu: [
        "A csapatban olyan szakértők dolgoznak, akik ötvözik a funkcionális nyelveket más paradigmákkal.",
        "A csapatban azonos szakterületről érkezett kollégák segítik egymást.",
        "A csapatban különböző területek szakértői dolgoznak együtt egy közös célért.",
        "A csapatban megvetik a funkcionális programozói tudással nem rendelkezőket.",
      ],
      en: [
        "The team consists of experts combining functional languages with other paradigms.",
        "The team consists of colleagues from the same field helping each other.",
        "Experts from different fields work together toward a common goal.",
        "The team despises those without functional programming knowledge.",
      ],
    },
    correctIndex: 2,
    explanation: {
      hu: "Az agilis (Scrum) keresztfunkcionális csapatai önállóak és rendelkeznek minden szükséges kompetenciával (pl. fejlesztő, tesztelő, dizájner, elemző), így nem kell külső részlegekre várniuk.",
      en: "Agile (Scrum) cross-functional teams are self-sufficient and include all competencies needed to deliver (e.g., dev, QA, design, analysis), without waiting for external departments.",
    },
  },

  // ────────── w41 — Architektúra ──────────
  {
    id: "w41_q1",
    week: "w41",
    topic: { hu: "Architektúra tervezés", en: "Architecture design" },
    question: {
      hu: "Az architektúra tervezés kapcsolatot teremt ...",
      en: "Architecture design establishes a connection between ...",
    },
    options: {
      hu: [
        "a szoftverkövetelmények felmérése és a szoftver tervezése között",
        "a szoftveresek és az építészek között",
        "a szoftver tervezői és a menedzsment között",
        "a frontend és a backend fejlesztők között",
      ],
      en: [
        "software requirements assessment and software design",
        "software engineers and architects",
        "software designers and management",
        "frontend and backend developers",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "Az architekturális tervezés az a híd, amely a magas szintű követelményeket (mit kell csinálnia a rendszernek) a tényleges szerkezeti tervre fordítja le (hogyan építjük fel).",
      en: "Architectural design is the bridge that translates high-level requirements (what the system should do) into structural design (how to build it).",
    },
  },

  // ────────── w42 — Continuous Integration ──────────
  {
    id: "w42_q4",
    week: "w42",
    topic: { hu: "Continuous Integration", en: "Continuous Integration" },
    question: {
      hu: "A folyamatos integráció (Continuous Integration) mint módszer lényege, hogy",
      en: "The essence of Continuous Integration (CI) is that",
    },
    options: {
      hu: [
        "a fő fejlesztési ágból sosem adunk ki szoftvert, csak release ágakból.",
        "számos fejlesztési ágba szervezzük a munkát, és csak havonta integrálunk.",
        "a fejlesztést kisebb lépésekben végezzük, és a változásokat folyamatosan a főágba integráljuk, így a szoftver folyamatosan közel kiadásra kész marad.",
        "az új kollégákat fokozatosan integráljuk a csapatba.",
      ],
      en: [
        "we never release software from the main branch, only from release branches.",
        "we organize work into many branches and integrate only monthly.",
        "we develop in small steps and continuously integrate changes into main, keeping a tested version nearly ready for release.",
        "we integrate new colleagues gradually into the team.",
      ],
    },
    correctIndex: 2,
    explanation: {
      hu: "A CI elve: a fejlesztők gyakran commitolnak a közös kódbázisba, amit automata build és tesztelés ellenőriz. Ezzel megelőzhető az 'integration hell'.",
      en: "CI principle: developers commit frequently to a shared codebase, continuously validated by automated builds and tests. This prevents 'integration hell'.",
    },
  },
  {
    id: "w42_q5",
    week: "w42",
    topic: { hu: "Code Coverage", en: "Code Coverage" },
    question: {
      hu: "Azért kell a build során magas code coverage arányra törekednünk, mert",
      en: "We should aim for high code coverage during builds because",
    },
    options: {
      hu: [
        "így biztosítjuk, hogy a commit fejlesztőjét van, aki helyettesíteni tudná.",
        "így gyorsíthatjuk a buildet és ezzel spórolunk.",
        "így minimalizáljuk a build során detektált hibák számát.",
        "így maximalizáljuk a letesztelt kód mennyiségét.",
      ],
      en: [
        "it ensures the commit author has a substitute.",
        "it speeds up the build and saves money.",
        "it minimizes the number of bugs detected during build.",
        "it maximizes the amount of tested code.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "A code coverage azt méri, hogy az automata tesztek a forráskód mekkora részét futtatták. A magas lefedettség önmagában nem garantál hibamentességet, de növeli az ellenőrzött logika arányát.",
      en: "Code coverage measures how much of the source code is executed by automated tests. High coverage alone does not guarantee correctness, but it increases the proportion of verified logic.",
    },
  },

  // ────────── w44 — Keretrendszerek ──────────
  {
    id: "w44_q1",
    week: "w44",
    topic: { hu: "Keretrendszerek", en: "Frameworks" },
    question: {
      hu: "Melyik állítás helyes az alkalmazási keretrendszerek és a termékcsaládok viszonyáról?",
      en: "Which statement is correct about the relationship between application frameworks and product families?",
    },
    options: {
      hu: [
        "Szoftver termékcsaládot érdemes alkalmazási keretrendszerre fejleszteni.",
        "Keretrendszerrel készített alkalmazásokat érdemes szoftver termékcsaláddá fejleszteni.",
        "A kettő kizárja egymást egy projekten belül.",
        "Az alkalmazási keretrendszerek csak egyedi, egyszer használatos szoftverekhez valók.",
      ],
      en: [
        "It is worth developing a software product family on an application framework.",
        "Applications built using a framework should be developed into a software product family.",
        "The two are mutually exclusive within a project.",
        "Application frameworks are only for unique, single-use software.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "A keretrendszerek technikai alapot adnak. Ha egy doménben keretrendszerrel több alkalmazást készítünk, a felhalmozott üzleti logika mentén érdemes termékcsaláddá fejleszteni őket az újrahasznosítás maximalizálásához.",
      en: "Frameworks provide the technical foundation. If multiple apps are built in one domain, accumulated business logic can be evolved into a product family to maximize reuse.",
    },
  },
  {
    id: "w44_q2",
    week: "w44",
    topic: { hu: "Termékcsaládok", en: "Product Families" },
    question: {
      hu: "Termékcsalád esetén az ügyféligényekhez igazított példány előállítása tipikusan hogyan történik?",
      en: "In a software product family, how is a client-tailored instance typically produced?",
    },
    options: {
      hu: [
        "A meglévő variabilitási pontok konfigurálásával, és az ügyféllel egyeztetett kompromisszumok mentén.",
        "A rendszer forráskódját minden ügyfélnél alapjaiban újraírjuk, hogy pontosan minden egyedi igény teljesüljön.",
        "Az ügyféligényeket nem vesszük figyelembe, mindenki ugyanazt a fix példányt kapja.",
        "A testreszabás kizárólag az infrastruktúra (pl. cloud) cseréjével történik.",
      ],
      en: [
        "By configuring existing variability points and negotiating trade-offs with the client.",
        "By fundamentally rewriting the source code for each client to satisfy every custom request exactly.",
        "Client needs are ignored; everyone gets the same fixed instance.",
        "Customization is achieved solely by changing infrastructure (e.g., cloud platform).",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "A termékcsalád (SPL) lényege az újrahasznosítás és a variabilitás kezelése. A testreszabás fő eszköze a konfiguráció és az előre tervezett variációs pontok használata, nem az ügyfelenkénti teljes újraírás.",
      en: "The essence of SPL is reuse with managed variability. Customization is primarily done through configuration and planned variation points, not full per-client rewrites.",
    },
  },
  {
    id: "w40_q6",
    week: "w40",
    topic: { hu: "Kanban metrikák", en: "Kanban metrics" },
    question: {
      hu: "A Kanban az idő és scope projektmetrikák szempontjából leginkább úgy írható le, hogy",
      en: "Regarding time and scope project metrics, Kanban is best described as",
    },
    options: {
      hu: [
        "Fix sprintidővel dolgozik, és a sprint végére vállalt scope a fő tervezési egység.",
        "A folyamatos áramlást optimalizálja: WIP limitekkel csökkenti az átfutási időt (lead/cycle time).",
        "A scope-ot mindig teljesen fixálja, és minden más metrikát ennek rendel alá.",
        "Elsősorban a fejlesztők bérezési modelljét határozza meg.",
      ],
      en: [
        "It uses fixed sprint timeboxes, with sprint scope as the main planning unit.",
        "It optimizes continuous flow: using WIP limits to reduce lead/cycle time.",
        "It always fully fixes scope and subordinates all other metrics to it.",
        "It primarily defines developer compensation models.",
      ],
    },
    correctIndex: 1,
    explanation: {
      hu: "A Kanban központi célja a flow optimalizálása és az átfutási idők csökkentése WIP limitálással és folyamatos húzásos munkaszervezéssel. A fix idődoboz inkább Scrum-jellemző.",
      en: "Kanban's core goal is flow optimization and shorter lead/cycle times via WIP limits and pull-based continuous work. Fixed timeboxes are more characteristic of Scrum.",
    },
  },
  {
    id: "w47_q4",
    week: "w47",
    topic: { hu: "Tervminták lényege", en: "Essence of Design Patterns" },
    question: {
      hu: "A Design Pattern / tervminták lényege, hogy",
      en: "The essence of Design Patterns is to",
    },
    options: {
      hu: [
        "gyakori szoftvertervezési problémákra nyelvfüggetlen, bevált megoldásvázlatokat és közös nevezéktant adjanak.",
        "gyakori problémákra konkrét, nyelvfüggő kész implementációt adjanak.",
        "kizárólag algoritmikus optimalizálási feladatokat oldjanak meg.",
        "csak UML diagramok rajzolására szolgáljanak.",
      ],
      en: [
        "provide language-agnostic, proven solution templates and shared vocabulary for recurring software design problems.",
        "provide concrete, language-specific ready-made implementations for common problems.",
        "solve only algorithmic optimization tasks.",
        "serve only for drawing UML diagrams.",
      ],
    },
    correctIndex: 0,
    explanation: {
      hu: "A GoF tervminták nem kész kódok, hanem újrahasznosítható tervezési mintázatok. Nagy előnyük az egységes szakmai szótár (pl. Facade, Strategy, Observer), amely gyorsítja a kommunikációt és a tervezést.",
      en: "GoF patterns are not ready-made code, but reusable design templates. A major benefit is shared professional vocabulary (e.g., Facade, Strategy, Observer), which speeds up communication and design.",
    },
  },
  // ────────── UX (Kép 2) ──────────
  {
    id: "w39_q5",
    week: "w39",
    topic: { hu: "UX Persona célja", en: "UX Persona purpose" },
    question: {
      hu: "A UX Personá(ka)t arra használjuk, hogy",
      en: "We use UX Persona(s) to",
    },
    options: {
      hu: [
        "specifikációt adjon a fejlesztők számára a termék vizuális és használhatósági követelményeinek tekintetében.",
        "minőségbiztosítson minden olyan folyamatot, melyben UX-alapú megfontolások is szükségesek.",
        "konferenciákon prezentáljuk mutatva, hogy a cégünk mennyire figyel a felhasználói élményre.",
        "nem UX-es kollégák számára átélhetőbbé, megfoghatóbbá tegye a felhasználóink egy csoportját.",
      ],
      en: [
        "provide developers with a specification regarding the product's visual and usability requirements.",
        "quality assure any process that requires UX-based considerations.",
        "present at conferences to show how much our company cares about user experience.",
        "make a user group more tangible and relatable for non-UX colleagues.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "A persona célja az empátia építése a fejlesztők és más, nem UX fókuszú csapattagok körében. Segít, hogy 'élő', emberi képük legyen a végfelhasználóról a száraz adatok vagy absztrakt követelmények helyett. (A Canvas képen a specifikációs válasz be volt jelölve, de az 0 pontos, azaz Helytelen!)",
      en: "The purpose of a persona is to build empathy among developers and other non-UX team members. It helps them have a 'living', human picture of the end-user instead of dry data or abstract requirements. (Note: on the Canvas screenshot, the specification answer was marked, but it was scored 0, i.e., Incorrect!)",
    },
  },

  // ────────── Agilis módszertanok (Kép 3, 4) ──────────
  {
    id: "w40_q8",
    week: "w40",
    topic: { hu: "Agilis keretrendszerek", en: "Agile frameworks" },
    question: {
      hu: "Melyik felsorolt fejlesztési módszertanok számítanak agilisnek?",
      en: "Which of the listed development methodologies are considered agile?",
    },
    options: {
      hu: [
        "Chaos model",
        "Bármelyik lehet az, csak kivitelezés és jó menedzsment kérdése",
        "Spiral, Waterfall, V-model",
        "Kanban, XP, Scrum",
      ],
      en: [
        "Chaos model",
        "Any of them can be, it's just a matter of execution and good management",
        "Spiral, Waterfall, V-model",
        "Kanban, XP, Scrum",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "A Kanban, az eXtreme Programming (XP) és a Scrum mind az agilis szoftverfejlesztés legismertebb és leggyakrabban használt módszertanai/keretrendszerei. A Waterfall és V-modell tradicionális, nehézsúlyú modellek.",
      en: "Kanban, eXtreme Programming (XP), and Scrum are the best-known and most widely used methodologies/frameworks of agile software development. Waterfall and V-model are traditional, heavyweight models.",
    },
  },
  {
    id: "w40_q9",
    week: "w40",
    topic: { hu: "Sprint Backlog", en: "Sprint Backlog" },
    question: {
      hu: "Melyik állítás igaz a Sprint Backlogra?",
      en: "Which statement is true about the Sprint Backlog?",
    },
    options: {
      hu: [
        "A felhasználók hibajelentéseiből áll össze valamilyen ticketing rendszerben.",
        "A release manager állítja össze a sikeres kiadások listája alapján.",
        "A termékmenedzser állítja össze az ügyfél- / felhasználói igények alapján.",
        "A fejlesztők állítják össze a felmerült feladatok és problémák felmérése, lebontása alapján.",
      ],
      en: [
        "It consists of user bug reports in a ticketing system.",
        "The release manager compiles it based on the list of successful releases.",
        "The Product Owner compiles it based on client/user needs.",
        "The developers compile it based on the assessment and breakdown of emerging tasks and problems.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Míg a *Product Backlogot* a Product Owner (termékmenedzser) kezeli, a *Sprint Backlogot* a fejlesztőcsapat (Developers) hozza létre a Sprint Planning során, amikor a kiválasztott elemeket kisebb technikai feladatokra (taskokra) bontják. Ez az ő munkatervük a sprintre.",
      en: "While the *Product Backlog* is managed by the Product Owner, the *Sprint Backlog* is created by the Developers during Sprint Planning, breaking down selected items into smaller technical tasks. It is their work plan for the sprint.",
    },
  },
  {
    id: "w40_q10",
    week: "w40",
    topic: { hu: "Scrum metrikák", en: "Scrum metrics" },
    question: {
      hu: "A Scrum az idő és scope (elvégzendő feladatok) projektmetrikák tekintetében",
      en: "Regarding the project metrics of time and scope, Scrum",
    },
    options: {
      hu: [
        "a scope-ot veszi fix, adottnak és az időt minimalizálja, hiszen arra törekszik, hogy adott mennyiségű feladatot a lehető legrövidebb idő alatt tudjuk lefejleszteni.",
        "a scope-ot maximalizálja, az időt minimalizálja, hiszen ez a konstelláció vezet a legjobb eredmény eléréséhez.",
        "időalapon biztosítja a fejlesztők bérezését.",
        "a scope-ot maximalizálja és az időt veszi fix, megadott paraméterként, hiszen a sprint végére mindenképpen demózható eredmény az elvárás még akkor is, ha esetleg kevesebb dolgot sikerült lefejleszteni.",
      ],
      en: [
        "takes scope as fixed and minimizes time, aiming to develop a given amount of tasks in the shortest possible time.",
        "maximizes scope and minimizes time, as this constellation leads to the best results.",
        "ensures developer compensation on a time basis.",
        "maximizes scope and takes time as a fixed, specified parameter, since a demonstrable result is expected by the end of the sprint even if fewer things were developed.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "A Scrumban a Sprint ideje szigorúan fix (timeboxed, pl. 2 hét). Ha a csapat nem végez mindennel, a sprintet nem hosszabbítják meg, hanem a scope csökken (a be nem fejezett feladatok nem kerülnek be az elkészült inkrementumba). A Kanban ezzel szemben a scope-ot (egy taskot) fixál, és annak átfutási idejét minimalizálja.",
      en: "In Scrum, the Sprint time is strictly fixed (timeboxed, e.g., 2 weeks). If the team doesn't finish everything, the sprint is not extended; instead, the scope is reduced (unfinished tasks don't make it into the increment). Kanban, conversely, fixes the scope (a task) and minimizes its cycle time.",
    },
  },

  // ────────── Szoftvertervezés Elvek (Kép 7) ──────────
  {
    id: "w45_q4",
    week: "w45",
    topic: { hu: "Osztálynormalizáció", en: "Class Normalization" },
    question: {
      hu: "Az osztálynormalizáció során",
      en: "During class normalization",
    },
    options: {
      hu: [
        "az objektumaink adatait normalizált sémájú relációs adatbázisban tároljuk.",
        "az osztályaink nevét változtatjuk meg, hogy kifejezőbbek legyenek.",
        "a hibásan működő osztályokat elimináljuk az osztálymodellünkből.",
        "az osztályainkat refaktoráljuk, hogy egyes normálformák szabályainak megfeleljenek.",
      ],
      en: [
        "we store our objects' data in a relational database with a normalized schema.",
        "we change the names of our classes to make them more expressive.",
        "we eliminate malfunctioning classes from our class model.",
        "we refactor our classes to conform to the rules of certain normal forms.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Hasonlóan az adatbázisok normalizálásához, az objektumorientált tervezésben (Ambler-féle osztálynormalizáció) az a cél, hogy az osztályaink redundanciamentesek, jól fókuszáltak (magas kohéziójúak) legyenek, és ehhez normálformák (pl. 1ONF, 2ONF) szabályai szerint refaktoráljuk a kódot.",
      en: "Similar to database normalization, in object-oriented design (Ambler's class normalization), the goal is to make classes redundancy-free and well-focused (high cohesion) by refactoring the code according to the rules of normal forms (e.g., 1ONF, 2ONF).",
    },
  },

  // ────────── UML (Kép 8) ──────────
  {
    id: "w46_q22",
    week: "w46",
    topic: { hu: "UML Osztálydiagram", en: "UML Class Diagram" },
    question: {
      hu: "Az UML osztálydiagram egy",
      en: "The UML class diagram is a",
    },
    options: {
      hu: [
        "a rendszer dinamikus viselkedését mutató diagram, mivel a csak futási idejű kapcsolatokat mutatja.",
        "folyamatábra, melyen a program főbb elemeinek és döntési pontjainak működése látszik.",
        "osztályok klaszterizációját mutató diagram, melyet a ChatGPT is tud generálni.",
        "az architektúra statikus felépítését mutató diagram, mivel a fordítási időben is létező osztályok kapcsolatait mutatja.",
      ],
      en: [
        "diagram showing the dynamic behavior of the system, as it shows only runtime relationships.",
        "flowchart showing the operation of the main elements and decision points of the program.",
        "diagram showing the clustering of classes, which can also be generated by ChatGPT.",
        "diagram showing the static structure of the architecture, as it shows the relationships of classes existing at compile time.",
      ],
    },
    correctIndex: 3,
    explanation: {
      hu: "Az UML osztálydiagram egy strukturális, azaz statikus diagram. A rendszer felépítését ábrázolja (osztályok, attribútumok, operációk és viszonyok) úgy, ahogy azok a kódban, fordítási időben definiálva vannak. A futásidejű állapotokat és folyamatokat dinamikus diagramok (pl. Sequence, State, Activity) írják le.",
      en: "The UML class diagram is a structural, meaning static, diagram. It depicts the system's architecture (classes, attributes, operations, and relationships) as they are defined in code at compile time. Runtime states and processes are described by dynamic diagrams (e.g., Sequence, State, Activity).",
    },
  },
];

// Fisher–Yates shuffle (random permutation)
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
