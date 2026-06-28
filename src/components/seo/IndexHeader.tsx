/** Hlavička rozcestníku (label + serif H1 + úvodní odstavce). */
export function IndexHeader({
  label,
  h1,
  lead,
}: {
  label: string;
  h1: string;
  lead: readonly string[];
}) {
  return (
    <header className="mb-14">
      <p className="label mb-6">{label}</p>
      <h1 className="font-serif text-[clamp(44px,7vw,84px)] leading-[1.02] tracking-[-0.03em] text-[var(--ink)] m-0">
        {h1}
      </h1>
      <div className="mt-9 max-w-[680px] space-y-5">
        {lead.map((p, i) => (
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
  );
}
