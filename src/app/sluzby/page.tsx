import type { Metadata } from "next";
import { PageShell } from "@/components/seo/PageShell";
import { IndexHeader } from "@/components/seo/IndexHeader";
import { CardList } from "@/components/seo/CardList";
import { Faq } from "@/components/seo/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicesIndex, serviceCards } from "@/data/seo/services";
import { globalFaq } from "@/data/seo/global-faq";

const SITE_URL = "https://nachtigal-tomas.cz";

export const metadata: Metadata = {
  title: { absolute: servicesIndex.title },
  description: servicesIndex.description,
  alternates: { canonical: "/sluzby" },
  openGraph: {
    title: servicesIndex.title,
    description: servicesIndex.description,
    url: `${SITE_URL}/sluzby`,
    type: "website",
  },
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Služby",
  itemListElement: serviceCards.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: `${SITE_URL}/sluzby/${s.slug}`,
  })),
};

export default function SluzbyPage() {
  return (
    <PageShell
      width="wide"
      crumbs={[
        { label: "Domů", href: "/" },
        { label: "Služby", href: "/sluzby" },
      ]}
    >
      <JsonLd data={itemListLd} />

      <IndexHeader label="Služby / 01" h1={servicesIndex.h1} lead={servicesIndex.lead} />

      <div className="max-w-[680px] mb-14">
        <p className="font-sans text-[18px] leading-[1.6] font-light text-[var(--ink-dim)] mb-5">
          {servicesIndex.listHeading}
        </p>
        <ul className="space-y-2.5">
          {servicesIndex.list.map((it) => (
            <li
              key={it}
              className="relative pl-6 font-sans text-[17px] leading-[1.6] font-light text-[var(--ink-dim)]"
            >
              <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-3.5 bg-[var(--cream)]" />
              {it}
            </li>
          ))}
        </ul>
        <p
          className="mt-7 font-sans text-[18px] leading-[1.6] font-light text-[var(--ink)]"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          {servicesIndex.outro}
        </p>
      </div>

      <CardList
        cards={serviceCards.map((s) => ({
          href: `/sluzby/${s.slug}`,
          name: s.name,
          text: s.text,
          cta: s.cta,
        }))}
      />

      <div className="max-w-[760px]">
        <Faq items={globalFaq} heading="S čím vám pomůžu" />
      </div>
    </PageShell>
  );
}
