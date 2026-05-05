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
  image: string;
  accentColor: string;
  /** True = render menší (sister/varianta projektu) */
  compact?: boolean;
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
    image: "/projects/bladers.eu.webp",
    accentColor: "#8B1A1A",
  },
  {
    number: "01b",
    name: "Bladers.eu",
    url: "bladers.eu",
    href: "https://bladers.eu",
    meta: "2024 · Sister · Live",
    tagline: "Verze pro Beyblade komunitu.",
    description:
      "Sesterský projekt Bladers.cz zaměřený výhradně na Beyblade — wiki, slovník termínů a komunitní e-shop. Sdílí s Bladers.cz část kódové báze i infrastrukturu.",
    stats: [],
    tags: ["Next.js", "Supabase", "Vercel"],
    image: "/projects/bladers.cz.webp",
    accentColor: "#8b5cf6",
    compact: true,
  },
  {
    number: "02",
    name: "ChytreSazeni.cz",
    url: "chytresazeni.cz",
    href: "https://chytresazeni.cz",
    meta: "2025 · Tool · Live",
    tagline: "Matematické rozpisy pro loterie.",
    description:
      "Nástroj pro hráče Sportky, EuroJackpotu a Extra Renty. Zadáš čísla, systém vygeneruje optimální rozpis přes covering design — pokrytí maxima kombinací za minimum tiketů. Tři tarify, Stripe platby.",
    stats: [
      { value: "3 roky", label: "dat" },
      { value: "3 hry", label: "loterie" },
      { value: "14", label: "strategií" },
    ],
    tags: ["React", "Vite", "Supabase", "Stripe"],
    image: "/projects/chytresazeni.cz.webp",
    accentColor: "#6DB8A0",
  },
  {
    number: "03",
    name: "MapaSaun.cz",
    url: "mapasaun.cz",
    href: "https://mapasaun.cz",
    meta: "2025 · Directory · Live",
    tagline: "Všechny české sauny na jedné mapě.",
    description:
      "Adresář ručně ověřených saun po celém Česku. Filtry podle typu, teploty, ceny a kapacity. Mapa s rychlým náhledem, detail s otevírací dobou. V plánu rozšíření na celou střední Evropu.",
    stats: [
      { value: "207", label: "saun" },
      { value: "14", label: "krajů" },
      { value: "100 %", label: "ověřeno" },
    ],
    tags: ["Lovable", "Supabase", "Mapbox", "Cloudflare"],
    image: "/projects/mapasaun.cz.webp",
    accentColor: "#8A5B33",
  },
  {
    number: "04",
    name: "HerniCentro.cz",
    url: "hernicentro.cz",
    href: "https://hernicentro.cz",
    meta: "2026 · E-shop · Redesign",
    tagline: "Gaming e-shop po vizuálním restartu.",
    description:
      "Vizuální a UX redesign existujícího e-shopu na platformě Eshop-rychle. Custom homepage s herním hero blokem, produktové bannery, integrace Google Reviews widgetu generovaného přes Playwright.",
    stats: [],
    tags: ["eshop-rychle.cz", "Custom JS", "Playwright"],
    image: "/projects/hernicentro.cz.webp",
    accentColor: "#007AFF",
  },
  {
    number: "05",
    name: "Racingblood.eu",
    url: "racingblood.eu",
    href: "https://racingblood.eu",
    meta: "2026 · Brand · Live",
    tagline: "Motosport streetwear vyrobený v EU.",
    description:
      "Streetwear značka pro fanoušky motorsportu. Mikiny a trička s vlastním grafickým designem, 100 % bavlna, šité v EU. Kolekce vznikly ve spolupráci se Scuderia Praha Racing, Suzuka 1000KM a v rámci FIM Superbike World Championship.",
    stats: [
      { value: "1 850", label: "Kč mikina" },
      { value: "1 350", label: "Kč triko" },
      { value: "EU", label: "produkce" },
    ],
    tags: ["E-shop", "Brand identity", "Photo direction"],
    image: "/projects/racingblood.eu.webp",
    accentColor: "#C41617",
  },
  {
    number: "06",
    name: "RePhone.cz",
    url: "rephone.cz",
    href: "https://rephone.cz",
    meta: "2026 · B2B · Landing",
    tagline: "Druhý život iPhonů — pro firmy.",
    description:
      "Landing page a brandová identita pro B2B Mobile s.r.o. — společnost zaměřenou na repasované iPhony pro firemní zákazníky. Minimalistická prezentace, lead form, telefon jako hlavní CTA.",
    stats: [],
    tags: ["Landing", "Brand", "Lead form"],
    image: "/projects/rephone.cz.webp",
    accentColor: "#377A52",
  },
  {
    number: "07",
    name: "Numerotest.online",
    url: "numerotest.online",
    href: "https://numerotest.online",
    meta: "2026 · Tool · Live",
    tagline: "Numerologie do prohlížeče.",
    description:
      "Online numerologický test — uživatel zadá jméno a datum narození, dostane profil osobních čísel s interpretací. Mobile-first rozhraní, anglická lokalizace, postaveno rychlostně přes AI tooling.",
    stats: [],
    tags: ["React", "Vite", "Vercel"],
    image: "/projects/numerotest.online.webp",
    accentColor: "#EBE7E0",
  },
];
