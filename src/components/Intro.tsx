import { AnimatedText } from "./AnimatedText";
import { FadeIn } from "./FadeIn";
import { ProfilePhoto } from "./ProfilePhoto";
import { SectionLabel } from "./SectionLabel";
import { TechStack } from "./TechStack";

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

            <TechStack />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
