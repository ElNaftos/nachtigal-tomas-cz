import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full pl-6 pr-6 md:pl-[15vw] md:pr-8 max-w-[1400px]">
        <FadeIn>
          <span className="label">nachtigal-tomas.cz</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="headline-xl mt-8">
            Tomáš
            <br />
            Nachtigal
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            aria-hidden
            className="mt-8 h-px w-12 bg-[var(--accent-dim)]"
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="body-lg mt-8 max-w-[480px]">
            Weby a datové projekty pro český trh.
            <br />
            Ne ze šablony. Ne přes noc.
            <br />
            Od nápadu po deploy — s rozumem.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="label mt-12">
            Písek, Česko — OSVČ — 2024–2026
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
