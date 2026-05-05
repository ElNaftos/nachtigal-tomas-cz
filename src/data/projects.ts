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
      "Kompletní katalog Pokémon TCG a Magic: The Gathering s denně aktualizovanými cenami v eurech. Rozšířené vyhledávání a filtry podle setů, rarit a dalších parametrů. Osobní sbírka s přehledem hodnoty, booster simulátor, kvízy. Postaveno tak, aby zvládlo desítky tisíc karet bez kompromisů ve výkonu.",
    stats: [
      { value: "114K+", label: "karet" },
      { value: "1.2K+", label: "setů" },
      { value: "56K+", label: "stránek" },
    ],
    tags: ["Next.js", "Supabase", "Cardmarket API", "Scryfall"],
    image: "/projects/bladers.eu.webp",
    accentColor: "#8b5cf6",
  },
  {
    number: "01b",
    name: "Bladers.eu",
    url: "bladers.eu",
    href: "https://bladers.eu",
    meta: "2025 · Sister · Live",
    tagline: "Verze pro Beyblade komunitu.",
    description:
      "Sesterský projekt Bladers.cz zaměřený výhradně na Beyblade.",
    stats: [],
    tags: ["Lovable", "HTML", "CSS"],
    image: "/projects/bladers.cz.webp",
    accentColor: "#8B1A1A",
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
      "Nástroj pro hráče Sportky, EuroJackpotu a Extra Renty. Zadáš čísla, systém vygeneruje optimální rozpis — covering design, strukturální rozpisy, hypergraf analýza, predikce na základě kombinatoriky. Komplexní analytické nástroje postavené na reálných datech. Napojeno na www.novaverze.cz. Tři cenové tarify, Stripe platby.",
    stats: [
      { value: "3 roky", label: "dat" },
      { value: "3 hry", label: "loterie" },
      { value: "3 tarify", label: "předplatné" },
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
      "Adresář saun po celém Česku a nově i na Slovensku. Rozšířené filtry podle typu, teploty, ceny a kapacity. Mapa s rychlým náhledem, napojení na Google Maps navigaci a zobrazení recenzí. První verze — v plánu rozšíření na celou střední Evropu.",
    stats: [
      { value: "764", label: "saun" },
      { value: "14", label: "krajů" },
      { value: "2 země", label: "pokryto" },
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
      "Vizuální a UX redesign existujícího e-shopu na platformě Eshop-rychle. Custom homepage s herním hero blokem, produktové bannery, kompletní přestavba kategorií. Vylepšení UX/UI pro zákazníka ale i vyhledávače.",
    stats: [],
    tags: ["eshop-rychle.cz", "UX/UI", "SEO"],
    image: "/projects/hernicentro.cz.webp",
    accentColor: "#007AFF",
  },
  {
    number: "05",
    name: "Racingblood.eu",
    url: "racingblood.eu",
    href: "https://racingblood.eu",
    meta: "2025 · Brand · Live",
    tagline: "Motosport streetwear vyrobený v EU.",
    description:
      "Kompletní e-shop postavený od nuly na platformě Shoptet. Streetwear značka pro fanoušky motorsportu — mikiny a trička s vlastním grafickým designem, 100 % bavlna, šité v EU. Včetně SEO popisů, produktových fotek, právních náležitostí. Kolekce vznikly ve spolupráci se Scuderia Praha Racing, Suzuka 1000KM a v rámci FIM Superbike World Championship.",
    stats: [
      { value: "4", label: "spolupráce" },
      { value: "EU", label: "produkce" },
      { value: "100 %", label: "bavlna" },
    ],
    tags: ["Shoptet", "Photo Direction", "Social Media"],
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
      "Landing page a kompletní e-shop pro B2B Mobile s.r.o. — exkluzivní zastoupení repasovaných iPhonů z Holandska pro Českou republiku. Přes 10 000 produktů na Shoptet platformě. Důkladné kategorie, SEO popisy, meta descriptions a produktové obrázky. Napojení na analytické nástroje, CTA optimalizace, správa sociálních sítí a kompletní vedení firmy.",
    stats: [
      { value: "10K+", label: "produktů" },
      { value: "B2B", label: "segment" },
      { value: "NL", label: "import" },
    ],
    tags: ["Landing", "Shoptet", "E-shop"],
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
      "Online numerologický test — uživatel zadá jméno a datum narození, dostane profil osobních čísel s interpretací. Projekt vznikl narychlo pro zábavu s využitím AI toolingu. Mobile-first rozhraní, čtyři jazykové verze: čeština, angličtina, ruština, ukrajinština.",
    stats: [],
    tags: ["React", "Vite", "Vercel"],
    image: "/projects/numerotest.online.webp",
    accentColor: "#EBE7E0",
  },
];
