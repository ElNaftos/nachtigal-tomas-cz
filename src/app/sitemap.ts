import type { MetadataRoute } from "next";
import { serviceCards } from "@/data/seo/services";
import { caseCards } from "@/data/seo/cases";
import { knowledgeCards } from "@/data/seo/knowledge";

const SITE_URL = "https://nachtigal-tomas.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/cv`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/sluzby`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/projekty`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/znalosti`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceCards.map((s) => ({
    url: `${SITE_URL}/sluzby/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectPages: MetadataRoute.Sitemap = caseCards.map((c) => ({
    url: `${SITE_URL}/projekty/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const knowledgePages: MetadataRoute.Sitemap = knowledgeCards.map((c) => ({
    url: `${SITE_URL}/znalosti/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...knowledgePages];
}
