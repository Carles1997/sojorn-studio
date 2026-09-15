// All visible copy for the site, taken from CONTENT_STRATEGY.md.

// Address that receives the diagnostic requests. While it stays empty the
// form validates and explains itself, but nothing is sent.
export const CONTACT_EMAIL: string = "";

// Placeholder photography from Unsplash until the real shoots arrive.
const photo = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;

export type Photo = { src: string; alt: string };

export const images = {
  hero: {
    src: photo("1786966485314-47d35985e5d3", 1600),
    alt: "Cadires de fusta amb coixins de lli al voltant de taules de pedra, en un pati rústic",
  },
  gaze: {
    src: photo("1785529018344-d2661d6b5511", 1600),
    alt: "Casa de pedra amb teulada de teula sobre una cala",
  },
  before: {
    src: photo("1631049307264-da0ec9d70304", 2000),
    alt: "Habitació d’hotel convencional amb un llit doble",
  },
  opportunity: {
    src: photo("1543418219-44e30b057fea", 1200),
    alt: "Fileres de vinya amb el sol baix",
  },
  after: {
    src: photo("1738315452605-f3ff2d162631", 2000),
    alt: "Sala d’estar amb bigues de fusta i llum natural",
  },
  closing: {
    src: photo("1775137014196-c96d4eecaceb", 2400),
    alt: "Paisatge de vinyes i turons al capvespre",
  },
  territory: {
    src: photo("1780628816901-2b17292cbb77", 1600),
    alt: "Camí entre l’herba i un arbre, amb vistes al mar",
  },
  produce: {
    src: photo("1630009939650-3e4210bbf10a", 1200),
    alt: "Cebes vermelles en un bol de ceràmica",
  },
  cellar: {
    src: photo("1783443799503-e1587f423bd0", 2400),
    alt: "Celler amb voltes de maó i fileres de bótes",
  },
  terrace: {
    src: photo("1653228410470-9915c4cfca67", 2000),
    alt: "Taula i cadires en una terrassa amb vistes a les vinyes",
  },
  table: {
    src: photo("1785603103953-471d9149f30e", 1200),
    alt: "Una persona asseguda a taula davant de muntanyes verdes",
  },
  village: {
    src: photo("1783353954295-de0d5ba42923", 2400),
    alt: "Campanar de pedra en un carrer estret de poble",
  },
  studio: {
    src: photo("1758659708467-102e368436f0", 1600),
    alt: "Taula sota un arbre de tardor amb vistes a les muntanyes",
  },
  diagnostic: {
    src: photo("1694150314864-714ae37a4d14", 1600),
    alt: "Taules de fusta sota un arbre",
  },
  walker: {
    src: photo("1764955949954-9024cbf6bd36", 1600),
    alt: "Una persona caminant per un sender vora el mar",
  },
} satisfies Record<string, Photo>;

export const navigation = [
  { href: "/serveis", label: "Serveis" },
  { href: "/metode", label: "Mètode" },
  { href: "/projectes", label: "Projectes" },
  { href: "/estudi", label: "Estudi" },
];

export const assets = [
  "Edificis amb caràcter.",
  "Paisatges extraordinaris.",
  "Gastronomia.",
  "Cultura.",
  "Natura.",
  "Camins.",
  "Productes locals.",
];

export const problems = [
  { asset: "Una habitació amb bones vistes", gap: "però una fotografia poc cuidada." },
  { asset: "Un restaurant amb producte local", gap: "però sense relat." },
  { asset: "Una ubicació perfecta per fer rutes", gap: "però sense cap proposta per al client." },
  { asset: "Una casa amb una arquitectura extraordinària", gap: "però una decoració sense identitat." },
  { asset: "Un hotel que té molt a oferir", gap: "però una web que només explica on dormir." },
];

export type Area = {
  index: string;
  title: string;
  headline: string;
  body: string[];
  groups: { label: string; items: string[] }[];
  note?: { title: string; text: string };
};

export const areas: Area[] = [
  {
    index: "01",
    title: "Diagnòstic i estratègia",
    headline: "Primer mirem. Després decidim.",
    body: [
      "Analitzem l’allotjament, el seu entorn, el client potencial, la competència i la manera com es presenta actualment.",
      "Detectem què funciona, què no funciona i sobretot què està desaprofitat.",
    ],
    groups: [
      {
        label: "Inclou",
        items: [
          "Auditoria de l’allotjament",
          "Anàlisi de competència",
          "Anàlisi de posicionament",
          "Identificació d’oportunitats",
          "Anàlisi de l’experiència del client",
          "Revisió de la comunicació actual",
          "Proposta de posicionament",
          "Full de ruta de transformació",
        ],
      },
    ],
    note: {
      title: "Hotel Potential Audit",
      text: "Un diagnòstic complet que acaba amb una pregunta molt senzilla: què hauríem de fer si realment volguéssim treure tot el potencial d’aquest lloc?",
    },
  },
  {
    index: "02",
    title: "Interiorisme i transformació",
    headline: "Fer que l’espai expliqui qui és.",
    body: [
      "No busquem convertir una masia en un hotel de moda. Busquem descobrir què fa especial aquella masia.",
      "Treballem l’espai perquè arquitectura, interiorisme, materials, llum, mobiliari i paisatge expliquin una mateixa història.",
    ],
    groups: [
      {
        label: "Serveis",
        items: [
          "Concepte d’interiorisme",
          "Direcció estètica",
          "Moodboards",
          "Selecció de materials",
          "Mobiliari i il·luminació",
          "Habitacions",
          "Zones comunes",
          "Restaurant",
          "Terrasses i espais exteriors",
          "Senyalètica",
          "Styling",
          "Direcció i coordinació de reforma",
        ],
      },
    ],
  },
  {
    index: "03",
    title: "Experiència i territori",
    headline: "L’hotel no acaba a la porta de l’hotel.",
    body: [
      "El client no ha vingut només a dormir. Ha vingut a descobrir un lloc.",
      "Per això estudiem tot allò que existeix al voltant de l’allotjament i ho convertim en part de l’experiència.",
    ],
    groups: [
      {
        label: "Gastronomia",
        items: [
          "Producte local",
          "Restaurants",
          "Cellers",
          "Productors",
          "Esmorzars amb identitat",
          "Menús experiencials",
          "Tast de productes",
          "Rutes gastronòmiques",
        ],
      },
      {
        label: "Natura",
        items: ["Senderisme", "Bicicleta", "Rutes", "Miradors", "Platges", "Parcs naturals", "Activitats"],
      },
      {
        label: "Cultura",
        items: ["Pobles", "Patrimoni", "Arquitectura", "Artesania", "Museus", "Història local"],
      },
      {
        label: "Experiències",
        items: [
          "Escapades romàntiques",
          "Caps de setmana gastronòmics",
          "Enoturisme",
          "Wellness",
          "Cicloturisme",
          "Famílies",
          "Pet friendly",
          "Experiències de temporada",
        ],
      },
    ],
  },
  {
    index: "04",
    title: "Identitat i comunicació",
    headline: "Si no ho expliques, no existeix.",
    body: [
      "Un allotjament extraordinari pot perdre clients simplement perquè no transmet el que realment ofereix.",
      "Construïm una identitat visual i verbal coherent amb l’espai.",
    ],
    groups: [
      {
        label: "Serveis",
        items: [
          "Naming",
          "Identitat visual",
          "Direcció d’art",
          "Storytelling",
          "Copywriting",
          "Guia de comunicació",
          "Direcció de fotografia",
          "Fotografia d’espais",
          "Vídeo",
          "Reels",
          "Banc d’imatges",
          "Materials comercials",
          "Catàlegs",
          "Presentacions",
        ],
      },
    ],
  },
  {
    index: "05",
    title: "Digital i captació",
    headline: "Convertir l’interès en reserves.",
    body: ["La web no ha de ser només una targeta de visita. Ha de vendre l’experiència."],
    groups: [
      {
        label: "Treballem",
        items: [
          "Disseny web",
          "UX",
          "Arquitectura de continguts",
          "SEO",
          "Estratègia de continguts",
          "Fotografia web",
          "Pàgines d’experiències",
          "Landing pages",
          "Campanyes",
          "Xarxes socials",
          "Email marketing",
          "Google Business",
          "Plataformes de reserva",
        ],
      },
    ],
    note: {
      title: "Comunicació orientada a vendre el lloc, no només l’habitació.",
      text: "Això transforma un allotjament en una experiència.",
    },
  },
];

export const services = [
  {
    value: "discover",
    index: "01",
    name: "Discover",
    kicker: "Diagnòstic i estratègia",
    description: "Per a propietaris que saben que alguna cosa no funciona, però no saben exactament què.",
    includesLabel: "Inclou",
    includes: ["Auditoria", "Visita", "Competència", "Territori", "Posicionament", "Pla d’acció"],
  },
  {
    value: "transform",
    index: "02",
    name: "Transform",
    kicker: "Estratègia, disseny i execució",
    description: "Per a allotjaments que volen fer un canvi real.",
    includesLabel: "Inclou",
    includes: ["Diagnòstic", "Interiorisme", "Experiència", "Identitat", "Comunicació", "Coordinació de projectes"],
  },
  {
    value: "signature",
    index: "03",
    name: "Signature",
    kicker: "Transformació integral",
    description: "Per a projectes amb ambició. Un únic equip per transformar tot l’allotjament.",
    includesLabel: "Del concepte al llançament",
    includes: [
      "Concepte",
      "Arquitectura i interiorisme",
      "Experiència",
      "Marca",
      "Fotografia",
      "Web",
      "Continguts",
      "Llançament",
    ],
  },
  {
    value: "evolve",
    index: "04",
    name: "Evolve",
    kicker: "Acompanyament continu",
    description:
      "El projecte no acaba quan acaba la reforma. Continuem treballant al teu costat, amb un acompanyament mensual o anual.",
    includesLabel: "Treballem",
    includes: [
      "Continguts",
      "Fotografies",
      "Campanyes",
      "Noves experiències",
      "Temporada",
      "Web",
      "Xarxes",
      "Promocions",
      "Col·laboracions",
      "Gastronomia",
      "Rutes",
      "Posicionament",
    ],
  },
];

export type Service = (typeof services)[number];

export const interests = [
  ...services.map((service) => ({ value: service.value, label: service.name })),
  { value: "undecided", label: "Encara no ho sé" },
];

export type MethodStep = { index: string; title: string; text: string; formula?: string };

export const methodSteps: MethodStep[] = [
  {
    index: "01",
    title: "Descobrim",
    text: "Visitem l’allotjament i el territori. Parlem amb els propietaris. Entenem la història, els problemes i els objectius.",
  },
  {
    index: "02",
    title: "Analitzem",
    text: "Estudiem cada peça de l’allotjament i del seu entorn. I detectem oportunitats.",
    formula: "Espai + client + competència + territori + marca + comunicació",
  },
  {
    index: "03",
    title: "Imaginem",
    text: "Definim què podria arribar a ser l’allotjament. Creem el concepte, el posicionament i el pla d’actuació.",
  },
  {
    index: "04",
    title: "Transformem",
    text: "Dissenyem i executem les actuacions prioritàries. Des de petits canvis d’interiorisme fins a reformes integrals.",
  },
  {
    index: "05",
    title: "Expliquem",
    text: "Construïm la identitat, les imatges, la web i el relat. Fem que el client entengui per què ha de venir.",
  },
  {
    index: "06",
    title: "Activem",
    text: "Creem experiències i continguts perquè l’allotjament no depengui només de l’habitació.",
  },
];

export const potential = [
  { line: "Un punt de partida per descobrir el territori.", image: images.territory },
  { line: "Un lloc per menjar producte local.", image: images.produce },
  { line: "Una porta al món del vi.", image: images.cellar },
  { line: "Una escapada de cap de setmana.", image: images.terrace },
  { line: "Una experiència.", image: images.table },
  { line: "Una destinació.", image: images.village },
];

export const caseStructure = [
  { index: "01", title: "El repte", text: "Què estava passant." },
  { index: "02", title: "El potencial", text: "Què vam detectar." },
  { index: "03", title: "La transformació", text: "Què vam proposar." },
  { index: "04", title: "El resultat", text: "Què va canviar." },
];

export const projectStages = [
  {
    stage: "Abans",
    image: images.before,
    quote: "Habitació doble amb esmorzar.",
    text: "Un hotel que té molt a oferir, però una web que només explica on dormir.",
  },
  {
    stage: "Oportunitat",
    image: images.opportunity,
    quote: "Vinyes, cellers i pobles de pedra.",
    text: "Una ubicació perfecta per fer rutes, però sense cap proposta per al client.",
  },
  {
    stage: "Després",
    image: images.after,
    quote: "48 hores per descobrir el Priorat.",
    text: "Dormir entre vinyes, visitar un celler, descobrir un poble de pedra i acabar el dia amb un sopar de producte local.",
  },
];

export const manifest = [
  "Catalunya està plena de llocs extraordinaris. Masies amb història. Hotels entre vinyes. Cases davant del mar. Petits refugis a la muntanya. Restaurants amb producte local. Camins, pobles, paisatges i històries.",
  "Però tenir-ho no sempre és suficient. Cal saber veure-ho. Cal saber donar-li forma. I, sobretot, cal saber explicar-ho.",
  "Per això no comencem preguntant-nos què podem reformar. Comencem preguntant-nos què pot arribar a ser aquest lloc.",
  "Perquè l’hotel no és només l’edifici. És el que passa quan obres la porta. El que menges. El que descobreixes. El que recordes. El que expliques quan tornes a casa.",
];

export const notUs = [
  "Una empresa de reformes d’hotels.",
  "Una agència de màrqueting per a hotels.",
  "Un estudi d’interiorisme.",
];

export const pillars = ["Estratègia", "Espais", "Experiències", "Marca"];

export const disciplines = ["estratègia", "arquitectura", "interiorisme", "territori", "marca", "comunicació"];
