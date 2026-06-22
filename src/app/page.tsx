import { Contact } from "@/components/Contact";
import { Domains } from "@/components/Domains";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { SectionDivider } from "@/components/SectionDivider";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tomáš Nachtigal",
  url: "https://nachtigal-tomas.cz",
  image: "https://nachtigal-tomas.cz/tomas.webp",
  jobTitle: "Web developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Písek",
    addressCountry: "CZ",
  },
  email: "mailto:nachtigal.tom@proton.me",
  telephone: "+420721419183",
  sameAs: [
    "https://github.com/ElNaftos",
    "https://www.linkedin.com/in/tomasnachtigal/",
    "https://www.instagram.com/naftos/",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Vercel",
    "Shoptet",
    "SEO",
    "data projects",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Tvorba webů, e-shopů a systémů na míru",
      areaServed: "CZ",
    },
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <SectionDivider />
      <Intro />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Domains />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
