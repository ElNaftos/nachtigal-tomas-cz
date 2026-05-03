import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full px-6 md:px-8 max-w-[1400px] mx-auto md:pl-[10vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Levá strana — copy */}
          <div className="md:col-span-7">
            <FadeIn>
              <span className="label">
                Designer · Developer · Builder
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif text-[clamp(56px,7vw,88px)] font-normal leading-[1.05] tracking-[-0.025em] text-[var(--text-primary)] mt-8">
                Tomáš
                <br />
                Nachtigal
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div
                aria-hidden
                className="mt-8 mb-8 h-0.5 w-16 bg-[var(--accent)]"
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-[19px] leading-[1.7] text-[var(--text-secondary)] max-w-[440px] font-normal">
                Stavím weby, které nejdou splést s AI šablonou.
                <br />
                Od nápadu po deploy — s daty, logikou a poctivou prací.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="label mt-14 flex flex-wrap items-center gap-x-3">
                <span>Písek, Česko</span>
                <span aria-hidden>·</span>
                <span>OSVČ</span>
                <span aria-hidden>·</span>
                <span>est. 2024</span>
              </div>
            </FadeIn>
          </div>

          {/* Pravá strana — dekorativní stack čar (desktop only) */}
          <div className="hidden md:block md:col-span-5">
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-12 pl-8">
                <div className="h-px bg-[var(--border)] w-[40%]" />
                <div className="h-px bg-[var(--border)] w-[65%]" />
                <div className="relative">
                  <div className="h-px bg-[var(--border)] w-[55%]" />
                  <span
                    aria-hidden
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                    style={{ left: "55%" }}
                  />
                </div>
                <div className="h-px bg-[var(--border)] w-[80%]" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
