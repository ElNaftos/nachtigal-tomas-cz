// Numerology — input panel + result big numbers
const RESULT = [
  { num: "7", label: "Life Path" },
  { num: "11", label: "Soul Urge" },
  { num: "3", label: "Personality" },
];

export function MockNumerotest() {
  return (
    <div className="absolute inset-0 bg-[#0d0a14] p-5 flex flex-col gap-4">
      <div className="flex justify-between items-center pb-2 border-b border-[#1f1a2a]">
        <span className="font-serif text-[15px] tracking-[-0.01em] text-[#ededec]">
          Numero<span className="text-[#a855f7]">test</span>
        </span>
        <span className="font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.14em]">
          EN
        </span>
      </div>

      {/* Input row */}
      <div className="flex gap-2">
        <div className="flex-1 border border-[#1f1a2a] px-2 py-1.5 flex flex-col gap-0.5">
          <span className="font-mono text-[7px] text-[#6a6a68] uppercase tracking-[0.14em]">
            Name
          </span>
          <span className="font-serif text-[11px] text-[#ededec]">Tomáš N.</span>
        </div>
        <div className="flex-1 border border-[#1f1a2a] px-2 py-1.5 flex flex-col gap-0.5">
          <span className="font-mono text-[7px] text-[#6a6a68] uppercase tracking-[0.14em]">
            Birth
          </span>
          <span className="font-serif text-[11px] text-[#ededec]">12 / 04 / 1995</span>
        </div>
      </div>

      {/* Big result numbers */}
      <div className="flex-1 grid grid-cols-3 gap-2">
        {RESULT.map((r) => (
          <div
            key={r.label}
            className="border border-[#1f1a2a] flex flex-col items-center justify-center gap-1 py-2"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(168,85,247,0.08) 0%, transparent 70%)",
            }}
          >
            <span
              className="font-serif italic leading-none"
              style={{ fontSize: "clamp(28px,5vw,40px)", color: "#a855f7" }}
            >
              {r.num}
            </span>
            <span className="font-mono text-[7px] text-[#6a6a68] uppercase tracking-[0.14em]">
              {r.label}
            </span>
          </div>
        ))}
      </div>

      <div className="font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.14em] text-center">
        Reveal your numerology destiny
      </div>
    </div>
  );
}
