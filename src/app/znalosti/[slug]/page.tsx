import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/seo/PageShell";
import { DetailView } from "@/components/seo/DetailView";
import { knowledge } from "@/data/seo/knowledge";

const SITE_URL = "https://nachtigal-tomas.cz";

export const dynamicParams = false;

export function generateStaticParams() {
  return knowledge.map((a) => ({ slug: a.slug }));
}

function getArticle(slug: string) {
  return knowledge.find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Článek nenalezen" };
  const url = `${SITE_URL}/znalosti/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/znalosti/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${SITE_URL}/znalosti/${article.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    url,
    mainEntityOfPage: url,
    inLanguage: "cs",
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Tomáš Nachtigal",
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Tomáš Nachtigal",
    },
  };

  return (
    <PageShell
      crumbs={[
        { label: "Domů", href: "/" },
        { label: "Znalosti", href: "/znalosti" },
        { label: article.crumb, href: `/znalosti/${article.slug}` },
      ]}
    >
      <DetailView page={article} label="Znalosti" jsonLd={articleLd} />
    </PageShell>
  );
}
