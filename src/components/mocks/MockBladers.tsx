const PRICES = [
  "€ 24,50",
  "€ 8,20",
  "€ 142,—",
  "€ 3,10",
  "€ 67,90",
  "€ 1,20",
  "€ 18,40",
  "€ 9,80",
  "€ 220,—",
  "€ 4,60",
];

export function MockBladers() {
  return (
    <div className="absolute inset-0 bg-[#0e0e10] p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center pb-2.5 border-b border-[#1f1f22]">
        <span className="font-serif text-[15px] tracking-[-0.01em] text-[var(--cream)]">
          Bladers
        </span>
        <div className="flex gap-3 font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.1em]">
          <span>Karty</span>
          <span>Sety</span>
          <span>Ceny</span>
          <span>Trade</span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 flex-1">
        {PRICES.map((price, i) => (
          <div
            key={i}
            className="bg-[#16161a] border border-[#1f1f22] rounded-[2px] aspect-[3/4] relative flex items-end p-1"
          >
            <div
              className="absolute pointer-events-none rounded-[1px]"
              style={{
                inset: "4px 4px 30% 4px",
                background:
                  "linear-gradient(135deg, #1f1f22 0%, #2a2a2d 100%)",
              }}
            />
            <span className="font-mono text-[7px] text-[#c7b8a0] relative">
              {price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
