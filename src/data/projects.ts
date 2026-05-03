export type Project = {
  number: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  url: string;
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Bladers.cz",
    tagline: "Český TCG hub pro sběratele karet",
    description:
      "V Česku neexistoval jeden web, kde najdeš Pokémon i Magic karty s cenami z Cardmarketu. Tak jsem ho postavil. 114 000 karet, osobní sbírka s hodnotou v eurech, booster simulátor, kvízy. 22 000 stránek v Google indexu — a roste.",
    stack: ["Next.js", "Supabase", "Vercel", "Scryfall API", "Pokémon TCG API"],
    url: "bladers.cz",
    href: "https://bladers.cz",
    image: "/projects/bladers.webp",
  },
  {
    number: "02",
    name: "ChytreSazeni.cz",
    tagline: "Matematické rozpisy pro loterie",
    description:
      "Většina hráčů Sportky tipuje naslepo. Tenhle nástroj jim dá systém — covering design, který pokryje maximum kombinací za minimum tiketů. Ne predikce. Čistá kombinatorika.",
    stack: ["React", "Vite", "Supabase", "Stripe", "Lovable"],
    url: "chytresazeni.cz",
    href: "https://chytresazeni.cz",
    image: "/projects/chytresazeni.webp",
  },
  {
    number: "03",
    name: "MapaSaun.cz",
    tagline: "Každá sauna v Česku na jednom místě",
    description:
      "Adresář 207 saun s popisy, mapou a blogem. Plán: rozšířit na 2 000 saun ve střední Evropě.",
    stack: ["Lovable", "Supabase", "cesky-hosting.cz"],
    url: "mapasaun.cz",
    href: "https://mapasaun.cz",
    image: "/projects/mapasaun.webp",
  },
  {
    number: "04",
    name: "HerniCentro.cz",
    tagline: "Gaming e-shop pro kamaráda",
    description:
      "Redesign stávajícího e-shopu — custom hero sekce, Google Reviews widget, produktové bannery. Barter projekt, reálný výsledek.",
    stack: ["eshop-rychle.cz", "Custom JS", "Playwright"],
    url: "hernicentro.cz",
    href: "https://hernicentro.cz",
    image: "/projects/hernicentro.webp",
  },
];
