import type { ContentBlock } from "@/data/seo/types";

/** Vykreslí obsahové bloky detailní stránky (server component, plně indexovatelné). */
export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "h2":
            return (
              <h2
                key={i}
                className="font-serif text-[clamp(26px,3vw,38px)] leading-[1.1] tracking-[-0.02em] text-[var(--ink)] pt-6"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="font-sans text-[19px] font-medium leading-snug text-[var(--ink)] pt-2"
              >
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="font-sans text-[17px] leading-[1.65] font-light text-[var(--ink-dim)]"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="relative pl-6 font-sans text-[17px] leading-[1.6] font-light text-[var(--ink-dim)]"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.7em] h-px w-3.5 bg-[var(--cream)]"
                    />
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "pre":
            return (
              <pre
                key={i}
                className="overflow-x-auto rounded-[4px] border border-[var(--rule)] bg-[var(--bg-elev)] p-5 font-mono text-[13px] leading-[1.8] text-[var(--ink-dim)] whitespace-pre-wrap"
              >
                {b.text}
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
