import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/seo/PageShell";
import { DetailView } from "@/components/seo/DetailView";
import { services } from "@/data/seo/services";

const SITE_URL = "https://nachtigal-tomas.cz";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Služba nenalezena" };
  const url = `${SITE_URL}/sluzby/${service.slug}`;
  return {
    title: { absolute: service.title },
    description: service.description,
    alternates: { canonical: `/sluzby/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/sluzby/${service.slug}`;
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.description,
    url,
    areaServed: "CZ",
    provider: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Tomáš Nachtigal",
    },
  };

  return (
    <PageShell
      crumbs={[
        { label: "Domů", href: "/" },
        { label: "Služby", href: "/sluzby" },
        { label: service.crumb, href: `/sluzby/${service.slug}` },
      ]}
    >
      <DetailView page={service} label="Služby" jsonLd={serviceLd} />
    </PageShell>
  );
}
