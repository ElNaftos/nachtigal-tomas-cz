import type { Metadata } from "next";
import { PageShell } from "@/components/seo/PageShell";
import { IndexHeader } from "@/components/seo/IndexHeader";
import { CardList } from "@/components/seo/CardList";
import { JsonLd } from "@/components/seo/JsonLd";
import { knowledgeIndex, knowledgeCards } from "@/data/seo/knowledge";

const SITE_URL = "https://nachtigal-tomas.cz";

export const metadata: Metadata = {
  title: knowledgeIndex.title,
  description: knowledgeIndex.description,
  alternates: { canonical: "/znalosti" },
  openGraph: {
    title: knowledgeIndex.title,
    description: knowledgeIndex.description,
    url: `${SITE_URL}/znalosti`,
    type: "website",
  },
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Znalosti",
  itemListElement: knowledgeCards.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    url: `${SITE_URL}/znalosti/${c.slug}`,
  })),
};

export default function ZnalostiPage() {
  return (
    <PageShell
      width="wide"
      crumbs={[
        { label: "Domů", href: "/" },
        { label: "Znalosti", href: "/znalosti" },
      ]}
    >
      <JsonLd data={itemListLd} />
      <IndexHeader label="Znalosti / 01" h1={knowledgeIndex.h1} lead={knowledgeIndex.lead} />
      <CardList
        cards={knowledgeCards.map((c) => ({
          href: `/znalosti/${c.slug}`,
          name: c.name,
          text: c.text,
          cta: "Číst",
        }))}
      />
    </PageShell>
  );
}
