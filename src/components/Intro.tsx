import { FadeIn } from "./FadeIn";

const STACK = [
  ["Next.js", "Supabase"],
  ["TypeScript", "Vercel"],
  ["Stripe", "Claude Code"],
];

export function Intro() {
  return (
    <section className="py-40">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <FadeIn>
              <span className="label">Příběh</span>
              <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.02em] mt-4">
                Ne další
                <br />
                <span className="text-[var(--text-secondary)]">„AI developer"</span>
              </h2>
            </FadeIn>
          </div>

          <div className="md:col-span-7 md:col-start-6 md:mt-16">
            <FadeIn delay={0.1}>
              <div className="max-w-[560px] space-y-6 text-[17px] leading-[1.8] text-[var(--text-secondary)]">
                <p>
                  Prodával jsem mobily. Pak jsem zjistil, že mě víc baví
                  stavět produkty než prodávat cizí.
                </p>
                <p>
                  Dneska buduji weby a datové projekty pro český a
                  slovenský trh. Cílím tam, kde jazyk vytváří přirozenou
                  bariéru — a kde jeden člověk s AI nástrojem může
                  vytvořit něco, co by jinak vyžadovalo celý tým.
                </p>
                <p>
                  Ale tady je ten rozdíl: každý projekt, který vidíte níž,
                  prošel stovkami iterací. Žádný nevznikl jedním promptem.
                  Žádný nevypadá jako tisíc dalších webů na internetu.
                </p>
                <p className="text-[var(--text-primary)]">
                  To je to, na čem mi záleží.
                </p>
              </div>

              <div
                aria-hidden
                className="mt-10 h-px w-[120px] bg-[var(--accent-dim)]"
              />

              <div className="mt-6 grid grid-cols-2 gap-x-16 gap-y-3 max-w-[360px]">
                {STACK.flat().map((tech) => (
                  <span key={tech} className="label">
                    {tech}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
