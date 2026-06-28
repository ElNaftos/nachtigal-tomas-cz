import type { DetailPage } from "./types";

/** Karta článku na rozcestníku /znalosti. */
export type KnowledgeCard = {
  slug: string;
  name: string;
  text: string;
};

export const knowledgeCards: KnowledgeCard[] = [
  {
    slug: "co-je-seo",
    name: "Co je SEO",
    text: "Jednoduché vysvětlení, co je SEO, proč nestačí jen hezký web a jak vyhledávače chápou obsah, strukturu a důvěryhodnost stránky.",
  },
  {
    slug: "co-je-geo-optimalizace",
    name: "Co je GEO optimalizace",
    text: "GEO optimalizace pomáhá webu být srozumitelnější pro AI nástroje a generativní vyhledávání. Praktické vysvětlení bez zbytečné teorie.",
  },
  {
    slug: "co-je-landing-page",
    name: "Co je landing page",
    text: "Landing page je stránka zaměřená na jeden konkrétní cíl. Vysvětlení, kdy dává smysl, jak má vypadat a proč nemá být přeplácaná.",
  },
  {
    slug: "jak-pripravit-zadani-pro-web",
    name: "Jak připravit zadání pro web",
    text: "Praktický návod, co si připravit před tvorbou webu, aby výsledek dával smysl a nevznikal jen podle pocitu.",
  },
  {
    slug: "proc-nestaci-mit-jen-hezkou-webovku",
    name: "Proč nestačí mít jen hezkou webovku",
    text: "Hezký web sám o sobě nestačí. Musí být srozumitelný, důvěryhodný, dohledatelný a vést návštěvníka k dalšímu kroku.",
  },
];

export const knowledgeIndex = {
  slug: "znalosti",
  title: "Znalosti o webech, SEO a digitálních nástrojích | Tomáš Nachtigal",
  description:
    "Praktické vysvětlení pojmů kolem tvorby webů, SEO, GEO, landing pages, e-shopů, obsahu a digitálních nástrojů.",
  h1: "Znalosti",
  lead: [
    "Tady najdeš jednoduché vysvětlení pojmů kolem webů, e-shopů, SEO, GEO, obsahu a digitálních nástrojů.",
    "Ne akademicky. Ne agenturně. Spíš prakticky: co daná věc znamená, proč na ní záleží a kdy ji řešit.",
    "Cílem téhle sekce je pomoct lidem zorientovat se dřív, než začnou řešit nový web, e-shop nebo úpravy stávajícího projektu.",
  ],
} as const;

export const knowledge: DetailPage[] = [
  {
    slug: "co-je-seo",
    title: "Co je SEO a proč ho řešit u webu | Tomáš Nachtigal",
    description:
      "Jednoduché vysvětlení, co je SEO, proč nestačí jen hezký web a jak vyhledávače chápou obsah, strukturu a důvěryhodnost stránky.",
    h1: "Co je SEO",
    crumb: "Co je SEO",
    lead: [
      "SEO je způsob, jak web upravit tak, aby ho lépe pochopily vyhledávače a aby se mohl zobrazovat lidem, kteří hledají relevantní věci.",
      "Nejde jen o klíčová slova. To je častý omyl. SEO je kombinace obsahu, struktury, technického stavu webu, důvěryhodnosti a toho, jestli stránka opravdu odpovídá na to, co člověk hledá.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Jednoduše řečeno: dobré SEO pomáhá tomu, aby web nebyl jen hezký, ale také dohledatelný.",
      },
      { kind: "h2", text: "Co do SEO patří" },
      {
        kind: "ul",
        items: [
          "jasné názvy stránek",
          "dobré titulky a meta popisky",
          "správná struktura nadpisů",
          "srozumitelný obsah",
          "čisté URL adresy",
          "interní odkazy",
          "rychlost webu",
          "mobilní verze",
          "kvalitní podstránky",
          "odpovědi na časté otázky",
          "důvěryhodné informace",
        ],
      },
      { kind: "h2", text: "Proč nestačí jen homepage" },
      {
        kind: "p",
        text: "Hodně webů má pěknou homepage, ale tím to končí. Problém je, že vyhledávače často potřebují víc konkrétních stránek.",
      },
      {
        kind: "p",
        text: "Když někdo hledá „tvorba webu pro firmu“, je lepší mít samostatnou stránku o tvorbě webů než doufat, že Google všechno pochopí z jedné úvodní stránky.",
      },
      {
        kind: "p",
        text: "Proto dává smysl mít služby, případové studie a znalostní články. Každá stránka může odpovídat na trochu jiný dotaz.",
      },
      { kind: "h2", text: "Shrnutí" },
      {
        kind: "p",
        text: "SEO není trik. Je to způsob, jak web udělat srozumitelnější pro lidi i vyhledávače. Když je obsah jasný, struktura logická a web technicky v pořádku, má mnohem větší šanci být dohledatelný.",
      },
    ],
    faq: [
      {
        q: "Je SEO jen o klíčových slovech?",
        a: "Ne. Klíčová slova jsou jen část. Důležitější je, jestli stránka opravdu odpovídá na hledaný dotaz a jestli jí vyhledávač dokáže dobře porozumět.",
      },
      {
        q: "Kdy má SEO smysl řešit?",
        a: "Ideálně už při tvorbě webu. Dodatečné úpravy jsou možné, ale lepší je myslet na strukturu, URL, nadpisy a obsah od začátku.",
      },
      {
        q: "Pomůže SEO hned?",
        a: "Většinou ne okamžitě. SEO je dlouhodobější práce. Výhodou ale je, že dobrý obsah může přivádět návštěvnost dlouhodobě.",
      },
    ],
    related: {
      heading: "Související",
      links: [
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
        { label: "Co je GEO optimalizace", href: "/znalosti/co-je-geo-optimalizace" },
      ],
    },
  },
  {
    slug: "co-je-geo-optimalizace",
    title: "Co je GEO optimalizace pro AI vyhledávání | Tomáš Nachtigal",
    description:
      "GEO optimalizace pomáhá webu být srozumitelnější pro AI nástroje a generativní vyhledávání. Praktické vysvětlení bez zbytečné teorie.",
    h1: "Co je GEO optimalizace",
    crumb: "Co je GEO optimalizace",
    lead: [
      "GEO je optimalizace obsahu pro generativní vyhledávání a AI nástroje.",
      "Zní to složitě, ale základní princip je jednoduchý: web musí být napsaný a strukturovaný tak, aby AI dokázala pochopit, kdo jsi, co děláš, v čem jsi relevantní a jaké informace na webu jsou důležité.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Dřív člověk řešil hlavně to, jak se zobrazit ve výsledcích Googlu. Dnes stále víc lidí používá AI nástroje, chatovací vyhledávání a odpovědi generované z více zdrojů. Proto je důležité, aby web nebyl jen vizuálně pěkný, ale i významově jasný.",
      },
      { kind: "h2", text: "Co GEO řeší" },
      {
        kind: "ul",
        items: [
          "jasné vysvětlení, kdo jsi a co děláš",
          "strukturované stránky služeb",
          "otázky a odpovědi",
          "případové studie",
          "interní prolinkování",
          "metadata",
          "strukturovaná data",
          "konkrétní a důvěryhodné informace",
          "obsah, který není jen marketingová mlha",
        ],
      },
      { kind: "h2", text: "Rozdíl mezi SEO a GEO" },
      {
        kind: "p",
        text: "SEO pomáhá vyhledávačům najít, pochopit a zařadit web.",
      },
      {
        kind: "p",
        text: "GEO pomáhá AI nástrojům pochopit obsah webu a případně ho použít jako relevantní zdroj odpovědi.",
      },
      {
        kind: "p",
        text: "V praxi se obě věci hodně překrývají. Pokud má web jasnou strukturu, dobré texty, konkrétní informace a technické základy, pomáhá to SEO i GEO.",
      },
      { kind: "h2", text: "Proč je to důležité" },
      {
        kind: "p",
        text: "AI nástroje potřebují jasné signály. Pokud je web plný obecných vět, nejasných služeb a prázdných frází, těžko z něj pochopí konkrétní hodnotu.",
      },
      {
        kind: "p",
        text: "Naopak web, který má dobře popsané služby, příklady práce, FAQ a strukturovaná data, je pro AI mnohem čitelnější.",
      },
      { kind: "h2", text: "Shrnutí" },
      {
        kind: "p",
        text: "GEO není náhrada SEO. Je to další vrstva. Cílem je, aby web dával smysl nejen člověku a Googlu, ale i AI nástrojům, které budou stále častěji rozhodovat, jaké zdroje lidem doporučí.",
      },
    ],
    faq: [
      {
        q: "Je GEO něco úplně jiného než SEO?",
        a: "Ne úplně. Hodně principů je podobných. Rozdíl je hlavně v tom, že GEO víc myslí na AI odpovědi, entity, strukturu informací a jasné vysvětlení souvislostí.",
      },
      {
        q: "Musím kvůli GEO měnit celý web?",
        a: "Nemusíš. Často stačí vytvořit lepší obsahovou vrstvu: služby, FAQ, případové studie, znalostní články a strukturovaná data.",
      },
      {
        q: "Pomáhají FAQ otázky AI vyhledávání?",
        a: "Ano. Otázky a odpovědi jsou pro AI dobře čitelné, protože jasně říkají, na jaký problém stránka odpovídá.",
      },
    ],
    related: {
      heading: "Související",
      links: [
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
        { label: "Co je SEO", href: "/znalosti/co-je-seo" },
      ],
    },
  },
  {
    slug: "co-je-landing-page",
    title: "Co je landing page a kdy ji použít | Tomáš Nachtigal",
    description:
      "Landing page je stránka zaměřená na jeden konkrétní cíl. Vysvětlení, kdy dává smysl, jak má vypadat a proč nemá být přeplácaná.",
    h1: "Co je landing page",
    crumb: "Co je landing page",
    lead: [
      "Landing page je stránka vytvořená pro jeden konkrétní cíl.",
      "Může to být získání poptávky, registrace, prodej produktu, představení služby nebo vysvětlení jedné konkrétní nabídky. Rozdíl oproti běžné homepage je v tom, že landing page nemá řešit všechno najednou.",
      "Má člověka vést jedním směrem.",
    ],
    blocks: [
      { kind: "h2", text: "Kdy landing page dává smysl" },
      { kind: "p", text: "Landing page se hodí například když:" },
      {
        kind: "ul",
        items: [
          "spouštíš novou službu",
          "chceš propagovat konkrétní nabídku",
          "pouštíš reklamu",
          "potřebuješ vysvětlit jeden produkt",
          "chceš sbírat poptávky",
          "nechceš posílat lidi na přeplněnou homepage",
        ],
      },
      { kind: "h2", text: "Co má dobrá landing page obsahovat" },
      {
        kind: "ul",
        items: [
          "jasný nadpis",
          "krátké vysvětlení nabídky",
          "pro koho je služba vhodná",
          "proč tomu věřit",
          "konkrétní výhody",
          "ukázky nebo reference",
          "časté otázky",
          "jedno hlavní CTA",
        ],
      },
      { kind: "h2", text: "Častá chyba" },
      {
        kind: "p",
        text: "Nejčastější chyba je, že landing page chce říct všechno. Potom neříká nic pořádně.",
      },
      {
        kind: "p",
        text: "Dobrá landing page má být jednoduchá. Návštěvník má rychle pochopit, kde je, co se nabízí a co má udělat dál.",
      },
      { kind: "h2", text: "Shrnutí" },
      {
        kind: "p",
        text: "Landing page je užitečná hlavně tehdy, když potřebuješ zaměřit pozornost na jednu konkrétní věc. Není to stránka pro všechno. Je to stránka, která má vést k jednomu rozhodnutí.",
      },
    ],
    faq: [
      {
        q: "Jaký je rozdíl mezi homepage a landing page?",
        a: "Homepage představuje celý web nebo značku. Landing page řeší jednu konkrétní nabídku, službu nebo kampaň.",
      },
      {
        q: "Musí mít landing page vlastní URL?",
        a: "Ano, ideálně ano. Díky tomu se dá lépe měřit, sdílet, propagovat a optimalizovat.",
      },
      {
        q: "Je landing page vhodná pro reklamu?",
        a: "Ano. Často je lepší poslat člověka z reklamy na konkrétní landing page než na obecnou homepage.",
      },
    ],
    related: {
      heading: "Související",
      links: [
        { label: "Tvorba webů", href: "/sluzby/tvorba-webu" },
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
      ],
    },
  },
  {
    slug: "jak-pripravit-zadani-pro-web",
    title: "Jak připravit zadání pro nový web | Tomáš Nachtigal",
    description:
      "Praktický návod, co si připravit před tvorbou webu, aby výsledek dával smysl a nevznikal jen podle pocitu.",
    h1: "Jak připravit zadání pro nový web",
    crumb: "Jak připravit zadání pro web",
    lead: [
      "Dobré zadání ušetří hodně času. Neznamená to, že musíš mít všechno dokonale promyšlené. Ale čím jasněji víš, co má web dělat, tím větší šance, že výsledek bude dávat smysl.",
      "Nejhorší zadání je: „Chci moderní web.“",
      "To samo o sobě nic neříká. Moderní web může znamenat cokoliv. Důležitější je vědět, pro koho web je, co má vysvětlit a jaký má mít výsledek.",
    ],
    blocks: [
      { kind: "h2", text: "Co si připravit" },
      { kind: "h3", text: "1. Co děláš" },
      {
        kind: "p",
        text: "Napiš jednoduše, co nabízíš. Bez odborných frází. Tak, aby to pochopil člověk, který tě nezná.",
      },
      { kind: "h3", text: "2. Pro koho to je" },
      {
        kind: "p",
        text: "Kdo je ideální zákazník? Firma, živnostník, rodič, sběratel, pacient, majitel e-shopu, lokální zákazník?",
      },
      { kind: "h3", text: "3. Co má člověk na webu udělat" },
      {
        kind: "p",
        text: "Má zavolat? Poslat poptávku? Koupit produkt? Přečíst si informace? Registrovat se?",
      },
      { kind: "h3", text: "4. Jaké stránky web potřebuje" },
      {
        kind: "p",
        text: "Typicky homepage, služby, o mně, projekty, reference, kontakt. U e-shopu kategorie, produkty, poradna a důvěryhodnostní stránky.",
      },
      { kind: "h3", text: "5. Co tě odlišuje" },
      {
        kind: "p",
        text: "Nemusí to být nic světoborného. Někdy stačí zkušenost, rychlost, osobní přístup, konkrétní specializace nebo lepší vysvětlení služby.",
      },
      { kind: "h3", text: "6. Jaké máš podklady" },
      {
        kind: "p",
        text: "Logo, fotky, texty, reference, starý web, odkazy na konkurenci, ukázky stylu, který se ti líbí.",
      },
      { kind: "h2", text: "Jednoduchá šablona zadání" },
      {
        kind: "pre",
        text: "Co dělám:\nPro koho to je:\nHlavní cíl webu:\nCo má návštěvník udělat:\nJaké stránky potřebuji:\nCo mě odlišuje:\nJaké mám podklady:\nWeby, které se mi líbí:\nWeby, které se mi nelíbí:",
      },
      { kind: "h2", text: "Shrnutí" },
      {
        kind: "p",
        text: "Zadání nemusí být dlouhé. Musí být jasné. Když víme, co má web dělat, dá se mnohem lépe navrhnout struktura, texty i vzhled.",
      },
    ],
    faq: [
      {
        q: "Musím mít předem hotové texty?",
        a: "Nemusíš. Stačí mít základní informace. Texty se dají připravit během tvorby webu.",
      },
      {
        q: "Musím vědět přesně, jak má web vypadat?",
        a: "Ne. Důležitější je vědět, co má web řešit. Vzhled se dá navrhnout podle cíle, obsahu a značky.",
      },
      {
        q: "Stačí poslat odkazy na konkurenci?",
        a: "Pomůže to, ale nestačí. Je dobré říct, co se ti na daných webech líbí nebo nelíbí.",
      },
    ],
    related: {
      heading: "Související",
      links: [
        { label: "Tvorba webů", href: "/sluzby/tvorba-webu" },
        { label: "Co je landing page", href: "/znalosti/co-je-landing-page" },
      ],
    },
  },
  {
    slug: "proc-nestaci-mit-jen-hezkou-webovku",
    title: "Proč nestačí mít jen hezkou webovku | Tomáš Nachtigal",
    description:
      "Hezký web sám o sobě nestačí. Musí být srozumitelný, důvěryhodný, dohledatelný a vést návštěvníka k dalšímu kroku.",
    h1: "Proč nestačí mít jen hezkou webovku",
    crumb: "Proč nestačí jen hezká webovka",
    lead: [
      "Hezký web je dobrý začátek. Ale sám o sobě nestačí.",
      "Problém hodně webů je, že na první pohled vypadají moderně, ale člověk po chvíli neví, co přesně firma dělá, proč jí má věřit a co má udělat dál.",
      "Design má pomáhat obsahu. Nemá ho nahrazovat.",
    ],
    blocks: [
      { kind: "h2", text: "Co musí web zvládnout" },
      { kind: "p", text: "Dobrý web by měl:" },
      {
        kind: "ul",
        items: [
          "rychle vysvětlit, kdo jsi",
          "jasně říct, co nabízíš",
          "ukázat, pro koho to je",
          "vzbudit důvěru",
          "fungovat dobře na mobilu",
          "být rychlý",
          "být dohledatelný",
          "vést člověka k akci",
        ],
      },
      { kind: "h2", text: "Kde bývá problém" },
      {
        kind: "p",
        text: "Často se řeší barvy, animace a efekty, ale zapomene se na základní otázky:",
      },
      {
        kind: "ul",
        items: [
          "Chápe návštěvník do pěti vteřin, kde je?",
          "Ví, co nabízíš?",
          "Ví, proč by měl zůstat?",
          "Najde kontakt?",
          "Je web čitelný na mobilu?",
          "Má každá stránka jasný účel?",
        ],
      },
      {
        kind: "p",
        text: "Když odpověď není ano, web může být hezký, ale pořád slabý.",
      },
      { kind: "h2", text: "Hezký web bez obsahu je jen kulisa" },
      { kind: "p", text: "Vzhled přitáhne pozornost. Obsah ji musí udržet." },
      {
        kind: "p",
        text: "Pokud web nemá jasné texty, dobrou strukturu a důvěryhodné informace, návštěvník odejde. A vyhledávače z něj navíc nemusí pochopit, na jaké dotazy ho mají zobrazovat.",
      },
      { kind: "h2", text: "Shrnutí" },
      {
        kind: "p",
        text: "Hezký web je fajn. Funkční web je lepší. Ideální je spojit obojí: čistý vzhled, dobré texty, jasnou strukturu, technické základy a obsah, který lidem opravdu pomáhá pochopit nabídku.",
      },
    ],
    faq: [
      {
        q: "Znamená to, že design není důležitý?",
        a: "Ne. Design důležitý je. Jen by neměl být jediná věc, která se řeší. Musí podporovat obsah a použitelnost.",
      },
      {
        q: "Co je důležitější než vzhled?",
        a: "Srozumitelnost, důvěra, rychlost, mobilní verze, jasné CTA a obsah, který odpovídá na otázky návštěvníka.",
      },
      {
        q: "Dá se opravit existující web?",
        a: "Ano. Často není nutné začít znovu. Někdy stačí upravit texty, strukturu, nadpisy, podstránky a cestu návštěvníka.",
      },
    ],
    related: {
      heading: "Související",
      links: [
        { label: "Tvorba webů", href: "/sluzby/tvorba-webu" },
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
      ],
    },
  },
];
