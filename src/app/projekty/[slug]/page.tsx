import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/seo/PageShell";
import { DetailView } from "@/components/seo/DetailView";
import { cases } from "@/data/seo/cases";

const SITE_URL = "https://nachtigal-tomas.cz";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) return { title: "Projekt nenalezen" };
  const url = `${SITE_URL}/projekty/${study.slug}`;
  return {
    title: { absolute: study.title },
    description: study.description,
    alternates: { canonical: `/projekty/${study.slug}` },
    openGraph: {
      title: study.title,
      description: study.description,
      url,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) notFound();

  const url = `${SITE_URL}/projekty/${study.slug}`;
  const creativeWorkLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.h1,
    headline: study.h1,
    description: study.description,
    url,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Tomáš Nachtigal",
    },
  };

  return (
    <PageShell
      crumbs={[
        { label: "Domů", href: "/" },
        { label: "Projekty", href: "/projekty" },
        { label: study.crumb, href: `/projekty/${study.slug}` },
      ]}
    >
      <DetailView page={study} label="Případová studie" jsonLd={creativeWorkLd} />
    </PageShell>
  );
}
