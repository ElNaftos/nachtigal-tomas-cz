import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV — Tomáš Nachtigal",
  description:
    "Životopis Tomáše Nachtigala — e-commerce a obchod, B2B vyjednávání, vedení firmy a webový vývoj. Ke stažení v PDF.",
};

const PDF_URL = "/CV.Nachtigal.Tomas.pdf";

/* ───────────────────────── Data (1:1 z PDF) ───────────────────────── */

const TAGLINE =
  "Specializuji se na e-commerce a obchod, propojuji technický background s kreativním a funkčním přístupem k výsledkům.";

const contact = [
  { icon: "phone", label: "+420 721 419 183", href: "tel:+420721419183" },
  {
    icon: "mail",
    label: "Nachtigal.tom@proton.me",
    href: "mailto:nachtigal.tom@proton.me",
  },
  {
    icon: "globe",
    label: "www.nachtigal-tomas.cz",
    href: "https://www.nachtigal-tomas.cz",
    underline: true,
  },
  { icon: "pin", label: "Brno" },
] as const;

const education = {
  school: "SOŠ a SOU Písek",
  field: "Autotronik",
  years: "2012 - 2015",
};

const languages = [
  { name: "Český", level: "rodný" },
  { name: "Anglický", level: "B1 - mírně pokročilý" },
];

const interests = [
  "Technologie",
  "Investice",
  "Inovace",
  "Cestování",
  "Běh",
  "Umění",
  "Psychologie",
];

const experience = [
  {
    role: "Obchodní partner",
    period: "2022 - 2025",
    company: "Forza-refurbished BV.",
    desc: "Exkluzivní zastoupení značky, vyjednávání B2B partnerství, rozvoj trhu a tvorba obchodních nabídek.",
  },
  {
    role: "Jednatel",
    period: "2022 - 2025",
    company: "B2B Mobile s.r.o.",
    desc: "Kompletní vedení firmy, import a distribuce, cenotvorba a marketing.",
  },
  {
    role: "Manažer pobočky a servisu",
    period: "2021 - 2022",
    company: "NoCo s.r.o.",
    desc: "Management pobočky a servisu, vedení techniků a kontrola kvality procesů i zákaznické péče.",
  },
  {
    role: "Obchodní zástupce",
    period: "2018 - 2021",
    company: "Vodafone a.s. (franšízing NoCo s.r.o.)",
    desc: "Aktivní prodej služeb a zařízení, vyjednávání se zákazníky, plnění obchodních cílů.",
  },
  {
    role: "Servisní technik a prodejce",
    period: "2016 - 2018",
    company: "iMate s.r.o.",
    desc: "Opravy telefonů na počkání, diagnostika závad, práce se zákazníky a doplňkový prodej.",
  },
];

const skills = [
  "E-commerce Development",
  "Obchod & vyjednávání (B2B/B2C)",
  "Komunikační a prezentační dovednosti",
  "Projektové řízení & organizace práce",
  "Technická zdatnost",
  "Marketing & vizuální tvorba",
  "UX/UI orientace & webová úprava",
  "Zákaznický servis & práce s lidmi",
  "Strategické uvažování",
  "Rychlé učení a adaptabilita",
];

const certifications = [
  "AI & Digital Skills Certification",
  "Vodafone Sales Representative",
  "Google Digital Marketing Certification",
  "Řidičský průkaz: B",
];

/* ───────────────────────── Ikony ───────────────────────── */

function Icon({ name }: { name: string }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...common} aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} aria-hidden>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} aria-hidden>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "download":
      return (
        <svg {...common} aria-hidden>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      );
    default:
      return null;
  }
}

/* ───────────────────────── Pilulky nadpisů ───────────────────────── */

function SidebarPill({ children }: { children: React.ReactNode }) {
  // Světlejší zelená na tmavém sidebaru, přetéká k levému okraji
  return (
    <h2 className="-ml-[var(--pad)] mb-5 w-[calc(100%+var(--pad))] max-w-[88%] rounded-r-full bg-[#045d55] py-2.5 pr-6 pl-[var(--pad)] text-center text-[18px] font-bold tracking-tight text-white">
      {children}
    </h2>
  );
}

function MainPill({ children }: { children: React.ReactNode }) {
  // Tmavá zelená na bílém, přetéká k levému okraji
  return (
    <h2 className="-ml-[var(--pad)] mb-7 w-fit max-w-[calc(100%+var(--pad))] rounded-r-full bg-[#022421] py-2.5 pr-10 pl-[var(--pad)] text-[22px] font-bold tracking-tight text-white">
      {children}
    </h2>
  );
}

/* ───────────────────────── Stránka ───────────────────────── */

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-[clamp(14px,4vw,56px)] py-10 md:py-16">
      <div className="mx-auto max-w-[920px]">
        {/* Lišta: zpět + stáhnout PDF */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="meta inline-flex items-center gap-2 transition-colors hover:text-[var(--cream)]"
          >
            <span aria-hidden>←</span> Zpět na portfolio
          </Link>

          <a
            href={PDF_URL}
            download="CV-Tomas-Nachtigal.pdf"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--rule)] bg-[var(--bg-elev)] px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--cream)] transition-colors hover:border-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--bg)]"
          >
            Stáhnout PDF
            <span className="transition-transform group-hover:translate-y-0.5">
              <Icon name="download" />
            </span>
          </a>
        </div>

        {/* List CV */}
        <article className="overflow-hidden rounded-[10px] bg-white text-[#1a1a1a] shadow-[0_30px_90px_-25px_rgba(0,0,0,0.75)] ring-1 ring-black/5">
          {/* Hlavička */}
          <header className="flex flex-col items-center gap-6 bg-[#045d55] px-7 py-9 text-center sm:flex-row sm:gap-9 sm:px-10 sm:text-left">
            <div className="shrink-0">
              <Image
                src="/tomas.webp"
                alt="Tomáš Nachtigal"
                width={376}
                height={376}
                priority
                className="h-32 w-32 rounded-full object-cover ring-4 ring-white/15 sm:h-36 sm:w-36"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-[clamp(30px,5.4vw,46px)] font-bold leading-[1.05] tracking-tight text-white">
                Tomáš Nachtigal
              </h1>
              <div className="mx-auto my-4 h-px w-[min(280px,100%)] bg-white/30 sm:mx-0" />
              <p className="mx-auto max-w-[440px] text-[14px] leading-relaxed text-white/85 sm:mx-0">
                {TAGLINE}
              </p>
            </div>
          </header>

          {/* Tělo: sidebar + hlavní sloupec */}
          <div className="grid grid-cols-1 md:grid-cols-[37%_1fr]">
            {/* Sidebar */}
            <aside
              className="space-y-9 overflow-hidden bg-[#022421] px-[var(--pad)] py-9 text-white md:py-10"
              style={{ "--pad": "28px" } as React.CSSProperties}
            >
              {/* Kontakt */}
              <section>
                <SidebarPill>Kontakt</SidebarPill>
                <ul className="space-y-3.5">
                  {contact.map((c) => {
                    const inner = (
                      <>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#022421]">
                          <Icon name={c.icon} />
                        </span>
                        <span
                          className={`text-[13.5px] leading-snug text-white/90 ${
                            "underline" in c && c.underline
                              ? "underline underline-offset-2"
                              : ""
                          }`}
                        >
                          {c.label}
                        </span>
                      </>
                    );
                    return (
                      <li key={c.label}>
                        {"href" in c && c.href ? (
                          <a
                            href={c.href}
                            className="flex items-center gap-3 transition-opacity hover:opacity-80"
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className="flex items-center gap-3">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>

              {/* Vzdělání */}
              <section>
                <SidebarPill>Vzdělání</SidebarPill>
                <p className="text-[15px] font-bold">{education.school}</p>
                <p className="text-[14px] text-white/80">{education.field}</p>
                <p className="text-[14px] text-white/80">{education.years}</p>
              </section>

              {/* Jazyky */}
              <section>
                <SidebarPill>Jazyky</SidebarPill>
                <ul className="space-y-3">
                  {languages.map((l) => (
                    <li key={l.name}>
                      <p className="text-[15px] font-bold">{l.name}</p>
                      <p className="text-[13px] text-white/70">{l.level}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Zájmy */}
              <section>
                <SidebarPill>Zájmy</SidebarPill>
                <ul className="list-disc space-y-1.5 pl-5 text-[14px] text-white/85 marker:text-white/50">
                  {interests.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </section>
            </aside>

            {/* Hlavní sloupec */}
            <section
              className="relative space-y-10 bg-white px-[var(--pad)] py-9 md:py-10"
              style={{ "--pad": "32px" } as React.CSSProperties}
            >
              {/* Pracovní zkušenosti */}
              <section>
                <MainPill>Pracovní zkušenosti</MainPill>
                <div className="space-y-6">
                  {experience.map((e) => (
                    <article key={`${e.role}-${e.company}`}>
                      <h3 className="text-[16px] font-bold leading-snug text-[#1a1a1a]">
                        {e.role}{" "}
                        <span className="whitespace-nowrap">({e.period})</span>
                      </h3>
                      <p className="mb-1.5 text-[14px] italic text-[#2b2b2b]">
                        {e.company}
                      </p>
                      <ul className="list-disc pl-5 marker:text-[#022421]">
                        <li className="text-[14px] leading-relaxed text-[#333]">
                          {e.desc}
                        </li>
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              {/* Dovednosti */}
              <section>
                <MainPill>Dovednosti</MainPill>
                <ul className="list-disc space-y-2 pl-5 marker:text-[#022421]">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="text-[14.5px] leading-relaxed text-[#1a1a1a]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Certifikace a oprávnění */}
              <section>
                <MainPill>Certifikace a oprávnění</MainPill>
                <ul className="list-disc space-y-2.5 pl-5 marker:text-[#022421]">
                  {certifications.map((c) => (
                    <li
                      key={c}
                      className="text-[14.5px] font-bold leading-relaxed text-[#1a1a1a]"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Dekorativní čtvrtkruh (jako v PDF, pravý dolní roh) */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#045d55]/90"
              />
            </section>
          </div>
        </article>

        {/* Stáhnout PDF (spodní, pro pohodlí) */}
        <div className="mt-8 flex justify-center">
          <a
            href={PDF_URL}
            download="CV-Tomas-Nachtigal.pdf"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--rule)] bg-[var(--bg-elev)] px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--cream)] transition-colors hover:border-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--bg)]"
          >
            Stáhnout PDF
            <span className="transition-transform group-hover:translate-y-0.5">
              <Icon name="download" />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
