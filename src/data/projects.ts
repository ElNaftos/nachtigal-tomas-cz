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
    tagline: "Český hub pro sběratele karet",
    description:
      "Databáze 114 000+ karet z Pokémon TCG a Magic: The Gathering s aktuálními cenami z Cardmarketu. Registrace, osobní sbírka s přehledem hodnoty, booster simulátor, kvízy a blog. 22 000 indexovaných stránek v Google. Tři jazyky.",
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
      "Analytický nástroj pro hráče Sportky, EuroJackpotu a Extra Renty. Covering design — optimální pokrytí kombinací za minimum tiketů. Tři cenové tarify, Stripe platby, Meta Ads kampaň.",
    stack: ["React", "Vite", "Supabase", "Stripe", "Lovable"],
    url: "chytresazeni.cz",
    href: "https://chytresazeni.cz",
    image: "/projects/chytresazeni.webp",
  },
  {
    number: "03",
    name: "MapaSaun.cz",
    tagline: "Adresář saun v Česku",
    description:
      "207 saun s AI-generovanými popisy, interaktivní mapa, blog. Plán rozšíření na 2 000 saun včetně střední Evropy.",
    stack: ["Lovable", "Supabase", "cesky-hosting.cz"],
    url: "mapasaun.cz",
    href: "https://mapasaun.cz",
    image: "/projects/mapasaun.webp",
  },
  {
    number: "04",
    name: "HerniCentro.cz",
    tagline: "Gaming e-shop",
    description:
      "Vizuální redesign e-shopu pro přítele. Custom homepage hero, benefits sekce, Google Reviews widget generovaný přes Playwright. Barter projekt.",
    stack: ["eshop-rychle.cz", "Custom JS", "Playwright"],
    url: "hernicentro.cz",
    href: "https://hernicentro.cz",
    image: "/projects/hernicentro.webp",
  },
];
