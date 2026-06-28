/**
 * Sdílené typy pro nenápadnou SEO/GEO vrstvu (služby, projekty, znalosti).
 * Obsah se přebírá 1:1 ze zadání — bloky se jen vykreslují, nepřepisují.
 */

export type FaqItem = { q: string; a: string };

export type RelatedLink = { label: string; href: string };

/** Obsahový blok detailní stránky. */
export type ContentBlock =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "pre"; text: string };

/** Společný tvar pro detail služby, případovou studii i znalostní článek. */
export type DetailPage = {
  slug: string;
  /** <title> */
  title: string;
  /** meta description */
  description: string;
  h1: string;
  /** Krátký label v breadcrumbu. */
  crumb: string;
  /** Úvodní (větší) odstavce nad hlavním tělem. */
  lead: string[];
  blocks: ContentBlock[];
  /** Text CTA bloku před odkazem na kontakt. */
  cta?: string;
  faq?: FaqItem[];
  /** „Související služby" / interní prolinkování. */
  related?: { heading: string; links: RelatedLink[] };
};
