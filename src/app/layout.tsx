import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://nachtigal-tomas.cz";
const SITE_DESCRIPTION =
  "Tvorba webů, systémů na míru a datových projektů. Solo developer z Písku.";

export const metadata: Metadata = {
  title: {
    default: "Tomáš Nachtigal — weby a systémy na míru",
    template: "%s — Tomáš Nachtigal",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Tomáš Nachtigal", url: SITE_URL }],
  creator: "Tomáš Nachtigal",
  keywords: [
    "tvorba webů",
    "webový vývojář Písek",
    "Next.js vývojář",
    "datové projekty",
    "Tomáš Nachtigal",
    "OSVČ web developer",
  ],
  openGraph: {
    title: "Tomáš Nachtigal — weby a systémy na míru",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Tomáš Nachtigal",
    type: "website",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomáš Nachtigal — weby a systémy na míru",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Globální strukturovaná data — Person + WebSite, dostupná na všech stránkách. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Tomáš Nachtigal",
      url: SITE_URL,
      image: `${SITE_URL}/tomas.webp`,
      jobTitle: "Tvůrce webů, e-shopů a digitálních nástrojů",
      description:
        "Tomáš Nachtigal navrhuje a staví weby, e-shopy, portfolio stránky a digitální nástroje pro firmy, podnikatele a nové projekty.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Písek",
        addressCountry: "CZ",
      },
      email: "mailto:nachtigal.tom@proton.me",
      telephone: "+420721419183",
      knowsAbout: [
        "tvorba webů",
        "tvorba e-shopů",
        "Shoptet",
        "SEO",
        "GEO optimalizace",
        "UX",
        "AI automatizace",
        "digitální produkty",
      ],
      sameAs: [
        "https://github.com/ElNaftos",
        "https://www.linkedin.com/in/tomasnachtigal/",
        "https://www.instagram.com/naftos/",
      ],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tvorba webů, e-shopů a systémů na míru",
          areaServed: "CZ",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Tomáš Nachtigal",
      description: SITE_DESCRIPTION,
      inLanguage: "cs-CZ",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      data-scroll-behavior="smooth"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {GA_ID ? (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          </>
        ) : null}
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>{children}</Providers>
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
