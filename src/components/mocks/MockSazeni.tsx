const BARS = [30, 55, 85, 40, 65, 25, 90, 50, 35, 70, 45, 78, 32, 60, 48, 22];
const HOT = new Set([2, 6, 11]);
const BALLS: Array<{ n: number; hot?: boolean }> = [
  { n: 7, hot: true },
  { n: 14 },
  { n: 23, hot: true },
  { n: 31 },
  { n: 42 },
  { n: 49, hot: true },
];

export function MockSazeni() {
  return (
    <div className="absolute inset-0 bg-[#0e0e10] p-[18px] flex flex-col gap-2.5">
      <span className="font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.14em]">
        Tah 7318 · 28. 04. 2026
      </span>
      <h3 className="font-serif text-[18px] m-0 text-[#ededec]">
        Frekvenční analýza
      </h3>
      <div className="flex gap-1.5 flex-wrap">
        {BALLS.map((b) => (
          <span
            key={b.n}
            className={`w-6 h-6 rounded-full border flex items-center justify-center font-serif text-[11px] ${
              b.hot
                ? "border-[var(--cream)] text-[var(--cream)]"
                : "border-[#2a2a2d] text-[#ededec]"
            }`}
          >
            {b.n}
          </span>
        ))}
      </div>
      <span className="font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.14em] mt-1.5">
        Distribuce 1—49 (posledních 100 tahů)
      </span>
      <div className="flex-1 flex items-end gap-[3px] pt-2">
        {BARS.map((h, i) => (
          <div
            key={i}
            className={`flex-1 ${HOT.has(i) ? "bg-[var(--cream)]" : "bg-[#2a2a2d]"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}
