import type { DetailPage } from "@/data/seo/types";
import { ContentBlocks } from "./ContentBlocks";
import { Faq } from "./Faq";
import { RelatedLinks } from "./RelatedLinks";
import { ContactCta } from "./ContactCta";
import { JsonLd } from "./JsonLd";

/**
 * Vykreslí detailní stránku (služba / případová studie / znalostní článek)
 * z jednotného datového tvaru DetailPage.
 */
export function DetailView({
  page,
  label,
  jsonLd,
}: {
  page: DetailPage;
  /** Mono label nad nadpisem, např. „Služby" nebo „Případová studie". */
  label: string;
  /** Doplňková strukturovaná data (Service / Article / CreativeWork). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <article>
      {jsonLd ? <JsonLd data={jsonLd} /> : null}

      <header>
        <p className="label mb-6">{label}</p>
        <h1 className="font-serif text-[clamp(38px,6vw,72px)] leading-[1.04] tracking-[-0.025em] text-[var(--ink)] m-0">
          {page.h1}
        </h1>
        <div className="mt-9 space-y-5">
          {page.lead.map((p, i) => (
            <p
              key={i}
              className="font-sans text-[19px] leading-[1.6] font-light text-[var(--ink)]"
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              {p}
            </p>
          ))}
        </div>
      </header>

      <div className="mt-10">
        <ContentBlocks blocks={page.blocks} />
      </div>

      {page.cta ? <ContactCta text={page.cta} /> : null}

      {page.faq && page.faq.length > 0 ? <Faq items={page.faq} /> : null}

      {page.related ? (
        <RelatedLinks heading={page.related.heading} links={page.related.links} />
      ) : null}
    </article>
  );
}
