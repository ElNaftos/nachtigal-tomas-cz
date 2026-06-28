import type { DetailPage } from "./types";

/** Karta projektu na rozcestníku /projekty. */
export type CaseCard = {
  slug: string;
  name: string;
  text: string;
};

export const caseCards: CaseCard[] = [
  {
    slug: "bladers-cz",
    name: "Bladers.cz",
    text: "Obsahový a komunitní web pro sběratele Beyblade, Pokémon a TCG. Projekt stojí hlavně na velké obsahové struktuře, encyklopedii, databázi, SEO a praktických nástrojích pro sběratele.",
  },
  {
    slug: "hernicentrum-cz",
    name: "HerniCentrum.cz",
    text: "E-shop zaměřený na herní a sběratelský sortiment. Projekt navazuje na obsahové weby a řeší propojení návštěvnosti, důvěry a nákupní cesty.",
  },
  {
    slug: "mapasaun-cz",
    name: "MapaSaun.cz",
    text: "Jednoduchý obsahový a mapový projekt pro hledání saun. Ukázka toho, jak se dá z obyčejného nápadu vytvořit užitečný web s potenciálem pro lokální SEO.",
  },
  {
    slug: "hrs-sanitky-cz",
    name: "HRS Sanitky",
    text: "Prezentační web pro službu v oblasti zdravotní dopravy. Důraz na srozumitelnost, důvěru, klidný tón a rychlé pochopení služby.",
  },
];

export const projectsIndex = {
  slug: "projekty",
  title: "Projekty | Tomáš Nachtigal",
  description:
    "Vybrané weby, e-shopy a digitální projekty, na kterých pracoval Tomáš Nachtigal. Praktické ukázky tvorby webů, obsahu, struktury a online nástrojů.",
  h1: "Projekty",
  lead: [
    "Tady jsou vybrané projekty, na kterých jsem pracoval nebo které sám rozvíjím.",
    "Nejsou to jen odkazy do portfolia. Každý projekt ukazuje trochu jiný typ práce: někde šlo hlavně o obsah, jinde o e-shop, komunitu, strukturu webu, SEO, nebo nápad převedený do použitelné online podoby.",
    "U webů mě zajímá hlavně to, jestli dávají smysl. Jestli člověk rychle pochopí, o co jde. Jestli se v nich neztratí. A jestli mají šanci dlouhodobě růst.",
  ],
} as const;

export const cases: DetailPage[] = [
  {
    slug: "bladers-cz",
    title: "Bladers.cz | Obsahový web pro Beyblade a sběratele",
    description:
      "Případová studie projektu Bladers.cz. Obsahový a komunitní web pro Beyblade, TCG, sběratele, databázi, encyklopedii a organickou návštěvnost.",
    h1: "Bladers.cz – obsahový web pro sběratele a hráče",
    crumb: "Bladers.cz",
    lead: [
      "Bladers.cz je obsahový a komunitní projekt zaměřený na Beyblade, Pokémon, TCG a sběratelský svět.",
      "Cílem nebylo vytvořit jen jednoduchý web s pár články. Cílem bylo postavit základ pro větší obsahový ekosystém, který dokáže lidem pomáhat s orientací ve světě sběratelství, edic, karet, Bladů, boosterů, cen a dalších pojmů.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Projekt stojí hlavně na obsahové struktuře. Důležitá je encyklopedie, databáze, interní prolinkování, otázky a odpovědi, detailní stránky a postupné budování autority ve vyhledávání.",
      },
      { kind: "h2", text: "Co jsem řešil" },
      {
        kind: "ul",
        items: [
          "návrh struktury webu",
          "obsahové sekce",
          "encyklopedické otázky a odpovědi",
          "SEO architekturu",
          "interní prolinkování",
          "texty v lidském tónu",
          "napojení na e-shopový směr",
          "dlouhodobou rozšiřitelnost projektu",
        ],
      },
      { kind: "h2", text: "Co projekt ukazuje" },
      {
        kind: "p",
        text: "Bladers.cz ukazuje, že web nemusí být jen online vizitka. Může být obsahový systém, který postupně sbírá návštěvnost, odpovídá na otázky lidí a vytváří důvěru kolem tématu.",
      },
      {
        kind: "p",
        text: "U takového projektu je důležité nepřemýšlet jen nad jednou stránkou, ale nad celou strukturou. Každý detail, pojem, článek nebo karta může být vstupní bod z vyhledávání.",
      },
    ],
    related: {
      heading: "Související služby",
      links: [
        { label: "Tvorba webů", href: "/sluzby/tvorba-webu" },
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
        { label: "AI automatizace", href: "/sluzby/ai-automatizace" },
        { label: "Tvorba e-shopů", href: "/sluzby/tvorba-eshopu" },
      ],
    },
  },
  {
    slug: "hernicentrum-cz",
    title: "HerniCentrum.cz | E-shop a sběratelský sortiment",
    description:
      "Případová studie projektu HerniCentrum.cz. E-shopový projekt zaměřený na herní a sběratelský sortiment, důvěru, obsah a nákupní cestu.",
    h1: "HerniCentrum.cz – e-shop propojený s obsahem a komunitou",
    crumb: "HerniCentrum.cz",
    lead: [
      "HerniCentrum.cz je e-shopový projekt zaměřený na herní a sběratelský sortiment.",
      "Důležitá myšlenka projektu je propojit obsah, komunitu a samotný nákup. Nestačí jen mít produkty. U sběratelského sortimentu lidé často hledají informace, vysvětlení, edice, rozdíly, rarity a důvěru v obchod.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Proto dává smysl, aby e-shop nebyl oddělený od obsahových projektů, ale aby na ně navazoval. Člověk se nejdřív zorientuje, pochopí téma a teprve potom má větší důvod nakoupit.",
      },
      { kind: "h2", text: "Co jsem řešil" },
      {
        kind: "ul",
        items: [
          "e-shopovou logiku",
          "propojení s obsahovým směrem",
          "důvěryhodnost nabídky",
          "strukturu kategorií",
          "texty pro zákazníky",
          "směr pro organickou návštěvnost",
          "návaznost na Bladers.cz",
        ],
      },
      { kind: "h2", text: "Co projekt ukazuje" },
      {
        kind: "p",
        text: "HerniCentrum.cz ukazuje, že e-shop může fungovat lépe, když kolem sebe nemá jen reklamu, ale i obsah. U sběratelských témat je důvěra extrémně důležitá. Lidé chtějí vědět, co kupují, proč to má hodnotu a čemu věřit.",
      },
    ],
    related: {
      heading: "Související služby",
      links: [
        { label: "Tvorba e-shopů", href: "/sluzby/tvorba-eshopu" },
        { label: "Shoptet úpravy", href: "/sluzby/shoptet-upravy" },
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
        { label: "Tvorba webů", href: "/sluzby/tvorba-webu" },
      ],
    },
  },
  {
    slug: "mapasaun-cz",
    title: "MapaSaun.cz | Lokální obsahový a mapový projekt",
    description:
      "Případová studie projektu MapaSaun.cz. Jednoduchý mapový a obsahový web pro hledání saun s potenciálem pro lokální SEO.",
    h1: "MapaSaun.cz – jednoduchý nápad převedený do užitečného webu",
    crumb: "MapaSaun.cz",
    lead: [
      "MapaSaun.cz je jednoduchý mapový a obsahový projekt pro hledání saun.",
      "Na první pohled jde o jednoduchý nápad. Právě v tom je ale síla podobných projektů. Když lidé něco hledají opakovaně a informace jsou roztříštěné, dává smysl vytvořit místo, kde se v tom rychle zorientují.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Projekt má potenciál hlavně v lokálním SEO, přehledných detailech míst, filtrování a praktických informacích. U takového webu není cílem složitost, ale užitečnost.",
      },
      { kind: "h2", text: "Co jsem řešil" },
      {
        kind: "ul",
        items: [
          "návrh jednoduché struktury",
          "mapový princip projektu",
          "lokální SEO směr",
          "praktické texty",
          "potenciál pro rozšiřování databáze",
          "propojení obsahu a hledání",
        ],
      },
      { kind: "h2", text: "Co projekt ukazuje" },
      {
        kind: "p",
        text: "MapaSaun.cz ukazuje, že dobrý web nemusí začínat obřím systémem. Někdy stačí jasně pojmenovaný problém a jednoduché řešení. Pokud lidé něco hledají, porovnávají a chtějí rychlou odpověď, může mít i menší projekt velký smysl.",
      },
    ],
    related: {
      heading: "Související služby",
      links: [
        { label: "Tvorba webů", href: "/sluzby/tvorba-webu" },
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
        { label: "AI automatizace", href: "/sluzby/ai-automatizace" },
      ],
    },
  },
  {
    slug: "hrs-sanitky-cz",
    title: "HRS Sanitky | Prezentační web pro zdravotní dopravu",
    description:
      "Případová studie webu HRS Sanitky. Prezentační web pro zdravotní dopravu s důrazem na srozumitelnost, důvěru a rychlý kontakt.",
    h1: "HRS Sanitky – prezentační web pro zdravotní dopravu",
    crumb: "HRS Sanitky",
    lead: [
      "HRS Sanitky je prezentační web pro službu v oblasti zdravotní dopravy.",
      "U podobného webu je důležité hlavně to, aby působil klidně, důvěryhodně a srozumitelně. Člověk často nepřichází ve chvíli, kdy chce dlouze číst marketingové texty. Potřebuje rychle pochopit, jaká služba je k dispozici, komu pomáhá a jak se spojit.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Proto má web jasně vysvětlit službu, nezahltit návštěvníka a vést ho k dalšímu kroku.",
      },
      { kind: "h2", text: "Co jsem řešil" },
      {
        kind: "ul",
        items: [
          "srozumitelnou prezentaci služby",
          "jednoduchou strukturu webu",
          "důvěryhodný tón",
          "rychlý přístup ke kontaktu",
          "texty bez zbytečné omáčky",
          "přehlednost na mobilu",
        ],
      },
      { kind: "h2", text: "Co projekt ukazuje" },
      {
        kind: "p",
        text: "HRS Sanitky ukazují, že u služeb nejde jen o vzhled webu. Důležité je i to, jak web působí. U zdravotní dopravy musí být komunikace klidná, věcná a jasná. Návštěvník nemá luštit, co firma dělá. Má to pochopit během pár vteřin.",
      },
    ],
    related: {
      heading: "Související služby",
      links: [
        { label: "Tvorba webů", href: "/sluzby/tvorba-webu" },
        { label: "Texty a struktura webu", href: "/sluzby/tvorba-webu" },
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
      ],
    },
  },
];
