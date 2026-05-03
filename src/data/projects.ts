export type ProjectMockKey = "bladers" | "sazeni" | "saun" | "herni";

export type Project = {
  number: string;
  name: string;
  url: string;
  href: string;
  meta: string;
  tagline: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  tags: string[];
  mock: ProjectMockKey;
  accentColor: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Bladers.cz",
    url: "bladers.cz",
    href: "https://bladers.cz",
    meta: "2024 · TCG · Live",
    tagline: "Český hub pro sběratele karet.",
    description:
      "Kompletní katalog Pokémon TCG a Magic: The Gathering napojený na Cardmarket. Vyhledávání, filtry podle setu a rarity, denně aktualizované ceny v eurech. Postaveno tak, aby zvládlo desítky tisíc karet bez kompromisů ve výkonu.",
    stats: [
      { value: "114K+", label: "karet" },
      { value: "240", label: "setů" },
      { value: "22K", label: "stránek" },
    ],
    tags: ["Next.js", "Supabase", "Cardmarket API", "Scryfall"],
    mock: "bladers",
    accentColor: "#8b5cf6",
  },
  {
    number: "02",
    name: "ChytreSazeni.cz",
    url: "chytresazeni.cz",
    href: "https://chytresazeni.cz",
    meta: "2025 · Tool · Live",
    tagline: "Matematika místo tipů od strejdy.",
    description:
      "Nástroj pro hráče Sportky, EuroJackpotu a Extra Renty. Zadáš čísla, systém vygeneruje optimální rozpis. Čistá matematika.",
    stats: [
      { value: "68 let", label: "dat" },
      { value: "7 318", label: "tahů" },
      { value: "14", label: "strategií" },
    ],
    tags: ["React", "Vite", "Supabase", "Stripe"],
    mock: "sazeni",
    accentColor: "#14b8a6",
  },
  {
    number: "03",
    name: "MapaSaun.cz",
    url: "mapasaun.cz",
    href: "https://mapasaun.cz",
    meta: "2025 · Directory · Live",
    tagline: "Všechny české sauny na jedné mapě.",
    description:
      "Adresář ručně ověřených saun po celém Česku. Filtry podle typu, teploty, ceny a kapacity. Mapa s rychlým náhledem, detail s otevírací dobou a recenzemi.",
    stats: [
      { value: "207", label: "saun" },
      { value: "14", label: "krajů" },
      { value: "100 %", label: "ověřeno" },
    ],
    tags: ["Lovable", "Supabase", "Mapbox", "Cloudflare"],
    mock: "saun",
    accentColor: "#f59e0b",
  },
  {
    number: "04",
    name: "HerniCentro.cz",
    url: "hernicentro.cz",
    href: "https://hernicentro.cz",
    meta: "2026 · E-shop · Redesign",
    tagline: "Gaming e-shop po redesignu.",
    description:
      "Redesign gaming e-shopu. Custom homepage, produktové bannery, Google Reviews widget.",
    stats: [
      { value: "−42 %", label: "bounce" },
      { value: "2.1×", label: "conv." },
      { value: "98", label: "lighthouse" },
    ],
    tags: ["eshop-rychle.cz", "Custom JS", "Playwright"],
    mock: "herni",
    accentColor: "#ef4444",
  },
];
