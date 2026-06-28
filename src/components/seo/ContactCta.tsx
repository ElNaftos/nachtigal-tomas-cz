const EMAIL = "nachtigal.tom@proton.me";

/**
 * Závěrečný CTA blok detailní stránky — text ze zadání + odkaz na e-mail/telefon.
 * Vede k jednomu kroku, bez agresivního marketingu.
 */
export function ContactCta({ text }: { text?: string }) {
  return (
    <section className="mt-20 rounded-[6px] border border-[var(--rule)] bg-[var(--bg-elev)] p-8 md:p-10">
      {text ? (
        <p
          className="font-sans text-[18px] leading-[1.6] font-light text-[var(--ink)] max-w-[620px]"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          {text}
        </p>
      ) : null}
      <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href={`mailto:${EMAIL}`}
          className="group inline-flex items-baseline gap-2.5 font-serif text-[clamp(22px,2.6vw,32px)] tracking-[-0.01em] text-[var(--ink)] transition-colors hover:text-[var(--cream)]"
        >
          {EMAIL}
          <span
            aria-hidden
            className="font-sans text-[0.5em] transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
        <a
          href="tel:+420721419183"
          className="font-mono text-[13px] tracking-[0.16em] text-[var(--ink-dim)] transition-colors hover:text-[var(--cream)]"
        >
          721 419 183
        </a>
      </div>
    </section>
  );
}
