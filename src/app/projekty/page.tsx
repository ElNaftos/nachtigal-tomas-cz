import type { Metadata } from "next";
import { PageShell } from "@/components/seo/PageShell";
import { IndexHeader } from "@/components/seo/IndexHeader";
import { CardList } from "@/components/seo/CardList";
import { JsonLd } from "@/components/seo/JsonLd";
import { projectsIndex, caseCards } from "@/data/seo/cases";

const SITE_URL = "https://nachtigal-tomas.cz";

export const metadata: Metadata = {
  title: projectsIndex.title,
  description: projectsIndex.description,
  alternates: { canonical: "/projekty" },
  openGraph: {
    title: projectsIndex.title,
    description: projectsIndex.description,
    url: `${SITE_URL}/projekty`,
    type: "website",
  },
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projekty",
  itemListElement: caseCards.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    url: `${SITE_URL}/projekty/${c.slug}`,
  })),
};

export default function ProjektyPage() {
  return (
    <PageShell
      width="wide"
      crumbs={[
        { label: "Domů", href: "/" },
        { label: "Projekty", href: "/projekty" },
      ]}
    >
      <JsonLd data={itemListLd} />
      <IndexHeader label="Projekty / 01" h1={projectsIndex.h1} lead={projectsIndex.lead} />
      <CardList
        cards={caseCards.map((c) => ({
          href: `/projekty/${c.slug}`,
          name: c.name,
          text: c.text,
          cta: "Detail projektu",
        }))}
      />
    </PageShell>
  );
}
