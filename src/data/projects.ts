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
    name: "HRS Sanitky",
    url: "hrs-sanitky.cz",
    href: "https://hrs-sanitky.cz",
    meta: "2025 · Healthcare · Live",
    tagline: "Dopravní zdravotnická služba.",
    description:
      "Moderní prezentační web pro zdravotnickou dopravní službu HRS Sanitky. Cílem bylo vytvořit důvěryhodnou a přehlednou online prezentaci, která jasně komunikuje poskytované služby, usnadňuje kontakt se zákazníky a zároveň působí profesionálně v prostředí zdravotnictví. Důraz byl kladen na čistý design, srozumitelnost informací a bezproblémové používání na mobilních zařízeních.",
    stats: [],
    tags: ["Next.js", "Tailwind", "Vercel", "Responzivní"],
    image: "/projects/hrs-sanitky.cz.webp",
    accentColor: "#3DA94E",
  },
  {
    number: "03",
    name: "ChytreSazeni.cz",
    url: "chytresazeni.cz",
    href: "https://chytresazeni.cz",
    meta: "2025 · Datový nástroj · Live",
    tagline:
      "Výzkumný nástroj pro kombinatoriku a práci s rozsáhlými číselnými soubory.",
    description:
      "Projekt vychází z více než dvouleté odborné práce mého otce, technického inženýra, který se dlouhodobě zabýval matematickými rozpisy, kombinatorikou a hledáním efektivních způsobů zpracování velkého množství číselných kombinací. Mým úkolem bylo převést jeho výpočty, postupy a matematické modely do srozumitelného digitálního nástroje. Systém pracuje s covering designem, strukturálními rozpisy, hypergrafovou analýzou a dalšími metodami diskrétní matematiky. Loterijní hry zde slouží především jako praktický a snadno pochopitelný datový model. Projekt neslibuje výhru ani se nesnaží obcházet princip náhody. Ukazuje, jak lze složité matematické postupy převést do funkční aplikace, automatizovat výpočty a prezentovat výsledky uživatelsky srozumitelnou formou.",
    stats: [
      { value: "2 roky", label: "odborného vývoje" },
      { value: "3 matematické modely", label: "pro různé typy zadání" },
      { value: "Miliony", label: "vyhodnocovaných kombinací" },
    ],
    tags: ["React", "Vite", "Supabase", "Stripe"],
    image: "/projects/chytresazeni.cz.webp",
    accentColor: "#6DB8A0",
  },
  {
    number: "04",
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
    number: "05",
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
    number: "06",
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
    number: "07",
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
];
