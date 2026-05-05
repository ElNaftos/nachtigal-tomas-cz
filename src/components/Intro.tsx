import { AnimatedText } from "./AnimatedText";
import { FadeIn } from "./FadeIn";
import { ProfilePhoto } from "./ProfilePhoto";
import { SectionLabel } from "./SectionLabel";

type StackBlock = {
  label: string;
  /** Tailwind grid-cols class string — musí být doslovně, kvůli Tailwind purge */
  cols: string;
  items: Array<[string, string]>;
};

const STACK: StackBlock[] = [
  {
    label: "Technologie",
    cols: "grid-cols-2 md:grid-cols-4",
    items: [
      ["Next.js", "Framework"],
      ["React", "UI"],
      ["TypeScript", "Typový systém"],
      ["HTML & CSS", "Základ"],
      ["Tailwind", "Styly"],
      ["Supabase", "DB · Auth"],
      ["Vercel", "Deploy"],
      ["Stripe", "Platby"],
    ],
  },
  {
    label: "Platformy a nástroje",
    cols: "grid-cols-2 md:grid-cols-3",
    items: [
      ["Shoptet", "E-shopy"],
      ["Eshop-rychle", "E-shopy"],
      ["Figma", "Design"],
      ["Canva", "Grafika"],
      ["Lovable", "Prototypy"],
      ["Notion", "Organizace"],
    ],
  },
  {
    label: "Marketing a analytika",
    cols: "grid-cols-2 md:grid-cols-5",
    items: [
      ["GA4", "Analytics"],
      ["Search Console", "SEO"],
      ["Microsoft Clarity", "Heatmapy"],
      ["Meta Ads", "FB · IG"],
      ["Google Ads", "PPC"],
    ],
  },
  {
    label: "AI nástroje",
    cols: "grid-cols-3 md:grid-cols-5",
    items: [
      ["Claude", "Anthropic"],
      ["ChatGPT", "OpenAI"],
      ["Gemini", "Google"],
      ["Perplexity", "Search"],
      ["Manus", "Agent"],
    ],
  },
];

export function Intro() {
  return (
    <section className="py-[200px] max-md:py-32">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)]">
        <div className="grid grid-cols-1 md:grid-cols-[40fr_55fr] gap-12 md:gap-20">
          {/* LEVÝ — label, heading, fotka */}
          <FadeIn>
            <SectionLabel className="mb-8">O mně / 02</SectionLabel>
            <h2 className="font-serif text-[clamp(40px,4.4vw,64px)] leading-[1.02] tracking-[-0.02em] m-0">
              <AnimatedText text="Pár slov " trigger="view" />
              <span className="quote">
                <AnimatedText text="o mně" trigger="view" startDelay={9} />
              </span>
            </h2>
            <ProfilePhoto />
          </FadeIn>

          {/* PRAVÝ — text + tech stack */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p
                className="font-sans text-[18px] leading-[1.6] font-light text-[var(--ink)] m-0"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                Stavím weby a systémy primárně na míru, ale nejsou mi cizí
                ani krabicová řešení jako Shoptet či Eshop-rychle a další.
              </p>
              <p
                className="font-sans text-[18px] leading-[1.6] font-light text-[var(--ink-dim)] m-0"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                Každý projekt, který vidíte níže, má za sebou stovky
                drobných rozhodnutí. Co zobrazit, co schovat, jak pojmenovat
                tlačítko, jakou zvolit vizuální identitu, odkud brát data,
                jak s nimi pracovat.
              </p>
              <p
                className="font-sans text-[18px] leading-[1.6] font-light text-[var(--ink-dim)] m-0"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                Záleží mi na detailech, protože věřím, že právě ty stojí
                za úspěšnými projekty.
              </p>
            </div>

            {/* Tech stack — 4 kategorie */}
            <div className="mt-14 pt-8 border-t border-[var(--rule-soft)] space-y-12">
              {STACK.map((block, blockIdx) => (
                <FadeIn key={block.label} delay={blockIdx * 0.06}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-mute)] mb-6">
                    {block.label}
                  </div>
                  <div className="h-px bg-[var(--rule)] mb-6" />
                  <div className={`grid ${block.cols} gap-x-8 gap-y-6`}>
                    {block.items.map(([name, desc]) => (
                      <div key={name} className="flex flex-col gap-1">
                        <span className="font-sans font-bold text-[14px] text-[var(--ink)] leading-tight">
                          {name}
                        </span>
                        <span className="font-mono text-[11px] text-[var(--ink-mute)] leading-tight">
                          {desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
