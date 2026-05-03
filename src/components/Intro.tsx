import { FadeIn } from "./FadeIn";

const STACK: Array<[string, string]> = [
  ["Next.js", "15"],
  ["Supabase", "DB · Auth"],
  ["TypeScript", "5.4"],
  ["Vercel", "Deploy"],
  ["Tailwind", "v4"],
  ["Stripe", "Payments"],
  ["Claude Code", "Pair"],
  ["Postgres", "RLS"],
];

export function Intro() {
  return (
    <section className="py-[200px] max-md:py-32">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)]">
        <div className="grid grid-cols-1 md:grid-cols-[35fr_55fr] gap-12 md:gap-24">
          <FadeIn>
            <span className="label block mb-8">O mně / 02</span>
            <h2 className="font-serif text-[clamp(40px,4.4vw,64px)] leading-[1.02] tracking-[-0.02em] m-0">
              Pár slov <span className="quote">o mně</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p
                className="font-sans text-[18px] leading-[1.6] font-light text-[var(--ink)] m-0"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                Stavím weby a datové projekty pro český a slovenský trh.
                Většinou sám, většinou s pomocí AI — ale nikdy na jedno
                kliknutí.
              </p>
              <p
                className="font-sans text-[18px] leading-[1.6] font-light text-[var(--ink-dim)] m-0"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                Každý projekt, který vidíte níže, má za sebou stovky
                drobných rozhodnutí. Co zobrazit, co schovat, jak pojmenovat
                tlačítko, odkud brát data, jak s nimi pracovat.
              </p>
              <p
                className="font-sans text-[18px] leading-[1.6] font-light text-[var(--ink-dim)] m-0"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                Na tom záleží víc než na tom, jaký framework jsem použil.
              </p>
            </div>

            <div className="mt-14 pt-8 border-t border-[var(--rule-soft)] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
              <span className="label block mb-2 col-span-full">
                Tech stack
              </span>
              {STACK.map(([name, version]) => (
                <div key={name} className="stat-item">
                  <span>{name}</span>
                  <span className="num">{version}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
