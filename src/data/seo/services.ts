import type { DetailPage } from "./types";

/** Karta služby na rozcestníku /sluzby. */
export type ServiceCard = {
  slug: string;
  name: string;
  text: string;
  cta: string;
};

export const serviceCards: ServiceCard[] = [
  {
    slug: "tvorba-webu",
    name: "Tvorba webů",
    text: "Web nemá být jen vizitka. Má lidem rychle říct, kdo jsi, co děláš, proč ti mají věřit a co mají udělat dál. Pomůžu se strukturou, texty, vzhledem i technickým nastavením.",
    cta: "Více o tvorbě webů",
  },
  {
    slug: "tvorba-eshopu",
    name: "Tvorba e-shopů",
    text: "E-shop musí být přehledný, důvěryhodný a jednoduchý na používání. Nestačí jen nahrát zboží. Důležité je, aby zákazník rychle pochopil nabídku, neměl zbytečné překážky a věděl, proč nakoupit právě tady.",
    cta: "Více o tvorbě e-shopů",
  },
  {
    slug: "shoptet-upravy",
    name: "Shoptet úpravy",
    text: "Shoptet je dobrý základ, ale často potřebuje doladit. Pomůžu s texty, strukturou, kategoriemi, vzhledem, drobnými úpravami a celkovým dojmem e-shopu.",
    cta: "Více o Shoptetu",
  },
  {
    slug: "ai-automatizace",
    name: "AI automatizace",
    text: "AI nemá být hračka pro efekt. Má šetřit čas, zrychlit práci nebo pomoct s opakovanými úkoly. Pomáhám vymyslet a zapojit jednoduché automatizace, které dávají praktický smysl.",
    cta: "Více o AI automatizaci",
  },
  {
    slug: "seo-geo-optimalizace",
    name: "SEO a GEO optimalizace",
    text: "Web musí být čitelný nejen pro lidi, ale i pro vyhledávače a AI nástroje. Pomůžu s obsahem, strukturou, titulky, interními odkazy, FAQ a technickými základy, aby web dával větší smysl i mimo samotnou homepage.",
    cta: "Více o SEO a GEO",
  },
];

export const servicesIndex = {
  slug: "sluzby",
  title: "Služby | Tvorba webů, e-shopů a digitálních nástrojů",
  description:
    "Tvorba webů, e-shopů, Shoptet úpravy, AI automatizace a obsahová struktura webů. Prakticky, lidsky a s důrazem na výsledek.",
  h1: "Služby",
  lead: [
    "Pomáhám s tvorbou webů, e-shopů a digitálních nástrojů od první myšlenky až po použitelný výsledek.",
    "Neřeším jen vzhled. Důležité je, aby web dával smysl, byl srozumitelný, dobře se používal a lidé rychle pochopili, proč zůstat právě u tebe.",
  ],
  listHeading: "Nejčastěji pomáhám s těmito věcmi:",
  list: [
    "tvorba webu pro firmu, službu nebo osobní značku",
    "tvorba e-shopu nebo úpravy Shoptetu",
    "landing page pro konkrétní službu nebo kampaň",
    "texty a struktura webu",
    "základní SEO a GEO optimalizace",
    "AI automatizace a praktické digitální nástroje",
    "vylepšení existujícího webu, který už nějak funguje, ale mohl by fungovat lépe",
  ],
  outro:
    "Cílem není vytvořit další hezkou stránku do internetu. Cílem je vytvořit web, který lidem něco vysvětlí, vzbudí důvěru a pomůže jim udělat další krok.",
} as const;

export const services: DetailPage[] = [
  {
    slug: "tvorba-webu",
    title: "Tvorba webů pro firmy a podnikatele | Tomáš Nachtigal",
    description:
      "Tvořím weby pro firmy, služby, osobní značky a nové projekty. Pomohu se strukturou, texty, UX, SEO základy i technickým zpracováním.",
    h1: "Tvorba webů pro firmy, služby a nové projekty",
    crumb: "Tvorba webů",
    lead: [
      "Web nemá být jen vizitka. Má lidem rychle říct, kdo jsi, co děláš, proč ti mají věřit a co mají udělat dál.",
      "Při tvorbě webu řeším hlavně to, aby byl přehledný, srozumitelný a praktický. Nehoním se za efekty, které vypadají dobře první tři vteřiny, ale potom překáží. Dobrý web má člověka vést, ne ho zmást.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Pomůžu ti s návrhem struktury, texty, rozložením obsahu, základním SEO, technickým nastavením a celkovým dojmem webu.",
      },
      { kind: "p", text: "Hodí se to pro:" },
      {
        kind: "ul",
        items: [
          "menší firmy",
          "živnostníky",
          "služby",
          "osobní značky",
          "nové projekty",
          "lokální podnikání",
          "portfolio weby",
        ],
      },
      {
        kind: "p",
        text: "Nejdřív je potřeba pochopit, co má web dělat. Někdy má získat poptávku. Někdy má vysvětlit službu. Někdy má ukázat důvěryhodnost. A někdy má jen konečně vypadat tak, aby se za něj člověk nemusel stydět.",
      },
      { kind: "h2", text: "Co při tvorbě webu řeším" },
      {
        kind: "ul",
        items: [
          "jasnou strukturu stránky",
          "texty, kterým člověk rozumí",
          "vzhled bez zbytečného chaosu",
          "mobilní verzi",
          "rychlost načítání",
          "základní SEO",
          "kontaktní formuláře a CTA",
          "napojení na analytiku",
          "technické detaily, které běžný návštěvník nevidí, ale web bez nich nefunguje dobře",
        ],
      },
    ],
    cta: "Máš web, který už neodpovídá tomu, co dnes děláš? Nebo teprve začínáš a potřebuješ tomu dát jasnou podobu? Napiš mi a podíváme se, co dává největší smysl.",
    faq: [
      {
        q: "Kolik stojí tvorba webu?",
        a: "Cena záleží na rozsahu. Jiná práce je jednoduchá prezentační stránka a jiná práce je větší web s více podstránkami, texty, formuláři a SEO strukturou. Vždy dává větší smysl nejdřív pochopit cíl webu a podle toho navrhnout rozsah.",
      },
      {
        q: "Jak dlouho trvá vytvoření webu?",
        a: "Menší web může vzniknout poměrně rychle, pokud jsou jasné podklady a cíl. U většího webu je důležitější neuspěchat strukturu, texty a obsah. Právě tam se často rozhoduje, jestli web bude fungovat.",
      },
      {
        q: "Umíš pomoct i s texty?",
        a: "Ano. Texty jsou často větší problém než samotný design. Pomůžu přepsat nabídku do normální řeči, aby člověk rychle pochopil, co děláš a proč ho to má zajímat.",
      },
      {
        q: "Řešíš i SEO?",
        a: "Ano, minimálně základní SEO strukturu. To znamená titulky, popisky, nadpisy, čisté URL, interní odkazy, strukturu obsahu a technické základy, aby web dával smysl i vyhledávačům.",
      },
      {
        q: "Pro koho web není vhodný?",
        a: "Pokud někdo chce jen rychle něco „naházet na internet“ bez přemýšlení nad obsahem, cílem a strukturou, nebude to ideální spolupráce. Web má mít důvod a směr.",
      },
    ],
    related: {
      heading: "Související",
      links: [
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
        { label: "Tvorba e-shopů", href: "/sluzby/tvorba-eshopu" },
        { label: "Jak připravit zadání pro web", href: "/znalosti/jak-pripravit-zadani-pro-web" },
        { label: "Co je landing page", href: "/znalosti/co-je-landing-page" },
      ],
    },
  },
  {
    slug: "tvorba-eshopu",
    title: "Tvorba e-shopů a úpravy online prodeje | Tomáš Nachtigal",
    description:
      "Pomáhám s tvorbou a úpravou e-shopů, strukturou kategorií, texty, důvěryhodností a praktickým zlepšením nákupní cesty.",
    h1: "Tvorba e-shopů, které dávají zákazníkům smysl",
    crumb: "Tvorba e-shopů",
    lead: [
      "E-shop není jen katalog zboží. Je to místo, kde se zákazník musí rychle zorientovat, pochopit nabídku a nemít pocit, že něco nesedí.",
      "Při tvorbě nebo úpravě e-shopu řeším hlavně přehlednost, důvěru a jednoduchou cestu k nákupu. Někdy pomůže lepší struktura kategorií. Někdy texty. Někdy úvodní vysvětlení. Někdy jen odstranit věci, které zákazníkovi překáží.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Pomůžu ti dát e-shopu jasnější podobu. Od základní struktury přes produktové texty až po drobné úpravy, které zlepší celkový dojem.",
      },
      { kind: "h2", text: "Co můžu řešit" },
      {
        kind: "ul",
        items: [
          "strukturu kategorií",
          "úvodní texty kategorií",
          "produktové popisy",
          "homepage e-shopu",
          "důvěryhodnost e-shopu",
          "CTA prvky",
          "základní SEO pro kategorie a produkty",
          "propojení s obsahem",
          "UX nákupní cesty",
          "napojení měření a analytiky",
        ],
      },
      { kind: "h2", text: "Pro koho to dává smysl" },
      {
        kind: "ul",
        items: [
          "pro nový e-shop, který potřebuje dobře odstartovat",
          "pro existující e-shop, který vypadá slabě nebo nepřehledně",
          "pro Shoptet e-shopy, které potřebují doladit",
          "pro menší prodejce, kteří nechtějí agenturní přístup",
          "pro projekty, kde je potřeba spojit obsah, nabídku a důvěru",
        ],
      },
    ],
    cta: "Pokud máš e-shop, který už běží, ale necítíš z něj důvěru nebo jasný směr, má cenu se na něj podívat. Často nejde o jednu velkou změnu, ale o více menších věcí, které dohromady udělají lepší výsledek.",
    faq: [
      {
        q: "Pomůžeš i s e-shopem na Shoptetu?",
        a: "Ano. Shoptet je častý případ. Umím pomoct se strukturou, texty, kategoriemi, úpravami vzhledu, doplňky a celkovým dojmem e-shopu.",
      },
      {
        q: "Je lepší začít od nuly, nebo upravit stávající e-shop?",
        a: "Záleží na stavu. Někdy stačí upravit texty, kategorie a vzhled. Jindy je lepší přestavět e-shop pořádně. Nejdřív je dobré zjistit, co opravdu brzdí prodej nebo důvěru.",
      },
      {
        q: "Děláš i produktové popisy?",
        a: "Ano. Produktový popis nemá být jen suchý seznam parametrů. Má zákazníkovi vysvětlit, proč daný produkt dává smysl, pro koho je a co od něj čekat.",
      },
      {
        q: "Řešíš i SEO kategorií?",
        a: "Ano. Kategorie jsou u e-shopu důležité. Měly by mít jasný název, čistou URL, rozumný text, správný title, description a propojení s dalšími částmi e-shopu.",
      },
    ],
    related: {
      heading: "Související",
      links: [
        { label: "Shoptet úpravy", href: "/sluzby/shoptet-upravy" },
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
        { label: "případová studie HerniCentrum.cz", href: "/projekty/hernicentrum-cz" },
      ],
    },
  },
  {
    slug: "shoptet-upravy",
    title: "Shoptet úpravy, texty a vylepšení e-shopu | Tomáš Nachtigal",
    description:
      "Pomáhám upravit Shoptet e-shopy tak, aby byly přehlednější, důvěryhodnější a lépe připravené pro zákazníky i vyhledávače.",
    h1: "Shoptet úpravy bez zbytečné omáčky",
    crumb: "Shoptet úpravy",
    lead: [
      "Shoptet je dobrý základ. Problém je, že hodně e-shopů na Shoptetu pak vypadá podobně, nemá jasné texty a zákazník z něj necítí důvěru.",
      "Pomůžu ti Shoptet upravit tak, aby víc odpovídal tomu, co prodáváš a komu to prodáváš. Nejde jen o grafiku. Často je důležitější struktura, názvy kategorií, popisy, úvodní bloky, tlačítka a celkový dojem.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Někdy stačí pár menších úprav. Jindy dává smysl projít celý e-shop a poskládat ho tak, aby byl srozumitelnější.",
      },
      { kind: "h2", text: "Co můžu na Shoptetu řešit" },
      {
        kind: "ul",
        items: [
          "úpravu homepage",
          "texty kategorií",
          "produktové popisy",
          "strukturu menu",
          "vzhled a rozložení bloků",
          "drobné HTML/CSS úpravy",
          "přidání obsahových sekcí",
          "základní SEO nastavení",
          "propojení s Google Analytics nebo Search Console",
          "úpravy důvěryhodnosti e-shopu",
        ],
      },
      { kind: "h2", text: "Kdy to dává smysl" },
      {
        kind: "ul",
        items: [
          "e-shop působí nedodělaně",
          "zákazníci se v nabídce hůř orientují",
          "kategorie nemají texty",
          "homepage nevysvětluje, proč u tebe nakoupit",
          "e-shop vypadá moc genericky",
          "chceš ho připravit lépe pro SEO",
        ],
      },
    ],
    cta: "Shoptet nemusí být složitý. Ale musí být dobře poskládaný. Pokud chceš e-shop doladit tak, aby působil lépe a dával větší smysl zákazníkům, napiš mi.",
    faq: [
      {
        q: "Musí se kvůli úpravám měnit celý e-shop?",
        a: "Nemusí. Často stačí upravit jen nejdůležitější části: homepage, kategorie, texty, menu, produktové detaily a základní SEO.",
      },
      {
        q: "Umíš upravit vzhled Shoptetu?",
        a: "Ano, v rozumném rozsahu. Nejčastěji jde o drobné HTML/CSS úpravy, přehlednější bloky, lepší texty a čistší rozložení.",
      },
      {
        q: "Pomůžeš i s kategoriemi?",
        a: "Ano. Kategorie jsou pro Shoptet zásadní. Mají vliv na orientaci zákazníka i na SEO. Dává smysl je pojmenovat jednoduše, logicky a doplnit normálním textem.",
      },
      {
        q: "Dává smysl řešit SEO na Shoptetu?",
        a: "Ano. Hlavně u kategorií, produktů a obsahových stránek. Shoptet má technický základ, ale bez dobré struktury a textů z toho vyhledávače moc nepochopí.",
      },
    ],
    related: {
      heading: "Související",
      links: [
        { label: "Tvorba e-shopů", href: "/sluzby/tvorba-eshopu" },
        { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
      ],
    },
  },
  {
    slug: "ai-automatizace",
    title: "AI automatizace pro weby a malé projekty | Tomáš Nachtigal",
    description:
      "Pomáhám vymýšlet a zapojovat praktické AI automatizace pro weby, e-shopy, obsah, zákaznickou komunikaci a opakované úkoly.",
    h1: "AI automatizace, které mají praktický smysl",
    crumb: "AI automatizace",
    lead: [
      "AI nemusí být jen hračka na generování obrázků nebo textů. Dobře použitá AI může šetřit čas, pomoct s obsahem, zrychlit práci a automatizovat věci, které se pořád opakují.",
      "Nejde o to zapojit AI za každou cenu. Jde o to najít místo, kde opravdu pomůže.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Pomůžu ti vymyslet jednoduché automatizace pro web, e-shop nebo interní práci. Může jít o tvorbu obsahu, třídění poptávek, odpovědi na časté dotazy, přípravu podkladů, práci s daty nebo napojení více nástrojů dohromady.",
      },
      { kind: "h2", text: "Příklady využití" },
      {
        kind: "ul",
        items: [
          "automatická příprava návrhů textů pro web nebo e-shop",
          "třídění poptávek podle typu služby",
          "jednoduchý AI asistent pro časté otázky",
          "obsahové podklady pro články a kategorie",
          "automatizace mezi formulářem, e-mailem a tabulkou",
          "sumarizace dat, objednávek nebo zpráv",
          "příprava zadání pro vývojáře nebo grafika",
          "automatické vytváření návrhů příspěvků na sociální sítě",
        ],
      },
      { kind: "h2", text: "Jak k tomu přistupuji" },
      {
        kind: "p",
        text: "Nejdřív je potřeba pochopit, co se opakuje a co bere čas. Pak se dá navrhnout jednoduchý proces. AI má být součást řešení, ne hlavní atrakce.",
      },
      {
        kind: "p",
        text: "Dobrá automatizace není ta, která vypadá složitě. Dobrá automatizace je ta, která ti ušetří práci a můžeš ji reálně používat.",
      },
    ],
    cta: "Pokud máš pocit, že pořád dokola řešíš stejné zprávy, texty, tabulky nebo úkoly, možná tam AI dává smysl. Napiš mi a podíváme se, co by šlo zjednodušit.",
    faq: [
      {
        q: "Co znamená AI automatizace?",
        a: "Jednoduše řečeno jde o zapojení AI do opakovaných úkolů. Třeba příprava textů, třídění dat, odpovědi na dotazy, sumarizace nebo propojení více nástrojů.",
      },
      {
        q: "Je AI vhodná pro malou firmu?",
        a: "Ano, ale jen pokud řeší konkrétní problém. Malá firma nepotřebuje složitý systém. Často stačí jednoduchá automatizace, která ušetří čas každý týden.",
      },
      {
        q: "Může AI psát texty na web?",
        a: "Může pomoct s návrhy, strukturou a variantami. Finální text ale musí dávat smysl pro konkrétní značku, službu a zákazníka. Slepě generované texty většinou působí prázdně.",
      },
      {
        q: "Pomůžeš s návrhem procesu?",
        a: "Ano. Nejdřív se podíváme, co se opakuje, kde vzniká zbytečná práce a co by šlo zjednodušit. Potom má smysl řešit nástroje.",
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
    slug: "seo-geo-optimalizace",
    title: "SEO a GEO optimalizace webu | Tomáš Nachtigal",
    description:
      "Pomáhám webům být srozumitelnější pro lidi, vyhledávače i AI nástroje. Řeším strukturu, texty, metadata, FAQ, interní odkazy a obsahovou vrstvu.",
    h1: "SEO a GEO optimalizace bez zbytečných triků",
    crumb: "SEO a GEO optimalizace",
    lead: [
      "SEO není jen o klíčových slovech. A GEO není kouzelný trik pro AI. V obou případech jde hlavně o to, aby byl web jasný, strukturovaný a důvěryhodný.",
      "Když někdo přijde na web, musí rychle pochopit, co nabízíš. Když web čte vyhledávač nebo AI nástroj, měl by pochopit to samé.",
    ],
    blocks: [
      {
        kind: "p",
        text: "Pomůžu ti vytvořit nebo upravit obsahovou strukturu webu tak, aby dávala smysl lidem i strojům. To znamená lepší podstránky, titulky, popisky, nadpisy, interní odkazy, FAQ, případové studie a technické prvky, které pomáhají web správně zařadit.",
      },
      { kind: "h2", text: "Co řeším" },
      {
        kind: "ul",
        items: [
          "title a meta description",
          "H1, H2 a strukturu obsahu",
          "jasné URL adresy",
          "interní prolinkování",
          "obsahové podstránky",
          "FAQ otázky a odpovědi",
          "strukturovaná data",
          "sitemapu",
          "případové studie",
          "texty služeb",
          "obsah pro AI vyhledávače",
        ],
      },
      { kind: "h2", text: "Jaký je rozdíl mezi SEO a GEO" },
      {
        kind: "p",
        text: "SEO pomáhá webu ve vyhledávačích jako Google nebo Seznam.",
      },
      {
        kind: "p",
        text: "GEO pomáhá tomu, aby obsah webu dokázaly lépe pochopit a použít AI nástroje, chatboti a generativní vyhledávání.",
      },
      {
        kind: "p",
        text: "V praxi se to hodně překrývá. Dobře napsaný, strukturovaný a důvěryhodný obsah pomáhá oběma směrům.",
      },
    ],
    cta: "Pokud máš web, který vypadá dobře, ale vyhledávače z něj moc nechápou, co přesně děláš, má smysl přidat pod něj chytrou obsahovou vrstvu. Nemusí být křiklavá. Musí být dobře postavená.",
    faq: [
      {
        q: "Co je SEO?",
        a: "SEO je úprava webu tak, aby ho lépe pochopily vyhledávače a aby se mohl zobrazovat na relevantní dotazy. Nejde jen o klíčová slova, ale hlavně o obsah, strukturu, technický stav a důvěryhodnost.",
      },
      {
        q: "Co je GEO?",
        a: "GEO znamená optimalizace obsahu pro generativní vyhledávání a AI odpovědi. Cílem je, aby AI nástroje lépe pochopily, kdo jsi, co děláš a proč je tvůj obsah relevantní.",
      },
      {
        q: "Musí se kvůli SEO přepsat celá homepage?",
        a: "Ne vždy. Často je lepší nechat homepage čistou a vytvořit pod ní kvalitní síť podstránek, služeb, případových studií a článků. To je přesně případ, kdy se dá SEO vrstva udělat nenápadně.",
      },
      {
        q: "Pomůže FAQ sekce?",
        a: "Ano. Dobře napsané otázky a odpovědi pomáhají lidem, vyhledávačům i AI. Důležité je, aby odpovědi byly konkrétní a ne jen obecné fráze.",
      },
    ],
    related: {
      heading: "Související",
      links: [
        { label: "Co je SEO", href: "/znalosti/co-je-seo" },
        { label: "Co je GEO optimalizace", href: "/znalosti/co-je-geo-optimalizace" },
        { label: "Tvorba webů", href: "/sluzby/tvorba-webu" },
      ],
    },
  },
];
