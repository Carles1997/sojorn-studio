// All visible copy for the home page, taken from CONTENT_STRATEGY.md.

// Address that receives the contact form requests. While it stays empty the
// form validates and explains itself, but nothing is sent.
export const CONTACT_EMAIL: string = "";

// Placeholder photography from Unsplash until the real shoots arrive.
const photo = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;

export const images = {
  hero: {
    src: photo("1786966485314-47d35985e5d3", 1600),
    alt: "Cadires de fusta amb coixins de lli al voltant de taules de pedra, en un pati rústic",
  },
  gaze: {
    src: photo("1785529018344-d2661d6b5511", 1600),
    alt: "Casa de pedra amb teulada de teula sobre una cala",
  },
  method: {
    src: photo("1788927783390-326c75c0265e", 1600),
    alt: "Habitació assolellada amb un llit de dia, mobles de fusta i una gran finestra",
  },
  potential: {
    src: photo("1758972574715-bcb23a467697", 2400),
    alt: "Un arc de pedra obre la vista a una casa mediterrània vora el mar",
  },
  before: {
    src: photo("1631049307264-da0ec9d70304", 1200),
    alt: "Habitació d’hotel convencional amb un llit doble",
  },
  opportunity: {
    src: photo("1543418219-44e30b057fea", 1200),
    alt: "Fileres de vinya amb el sol baix",
  },
  after: {
    src: photo("1738315452605-f3ff2d162631", 1200),
    alt: "Sala d’estar amb bigues de fusta i llum natural",
  },
  closing: {
    src: photo("1775137014196-c96d4eecaceb", 2400),
    alt: "Paisatge de vinyes i turons al capvespre",
  },
};

export const navigation = [
  { href: "#que-fem", label: "Què fem" },
  { href: "#serveis", label: "Serveis" },
  { href: "#metode", label: "Mètode" },
  { href: "#projectes", label: "Projectes" },
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
    note: {
      title: "No cal reformar-ho tot.",
      text: "Transformació per fases: prioritzem les intervencions que poden generar més impacte amb la menor inversió necessària.",
    },
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

export const interests = [
  ...services.map((service) => ({ value: service.value, label: service.name })),
  { value: "undecided", label: "Encara no ho sé" },
];

export const methodSteps = [
  {
    index: "01",
    title: "Descobrim",
    text: "Visitem l’allotjament i el territori. Parlem amb els propietaris. Entenem la història, els problemes i els objectius.",
  },
  {
    index: "02",
    title: "Analitzem",
    text: "Estudiem l’espai, el client, la competència, el territori, la marca i la comunicació. I detectem oportunitats.",
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
  "Un punt de partida per descobrir el territori.",
  "Un lloc per menjar producte local.",
  "Una porta al món del vi.",
  "Una escapada de cap de setmana.",
  "Una experiència.",
  "Una destinació.",
];

export const projectStages = [
  {
    stage: "Abans",
    label: "El repte",
    image: images.before,
    quote: "Habitació doble amb esmorzar.",
    text: "Un hotel que té molt a oferir, però una web que només explica on dormir.",
  },
  {
    stage: "Oportunitat",
    label: "El potencial",
    image: images.opportunity,
    quote: "Vinyes, cellers i pobles de pedra.",
    text: "Una ubicació perfecta per fer rutes, però sense cap proposta per al client.",
  },
  {
    stage: "Després",
    label: "La transformació",
    image: images.after,
    quote: "48 hores per descobrir el Priorat.",
    text: "Dormir entre vinyes, visitar un celler, descobrir un poble de pedra i acabar el dia amb un sopar de producte local.",
  },
];

export const disciplines = ["estratègia", "arquitectura", "interiorisme", "territori", "marca", "comunicació"];
