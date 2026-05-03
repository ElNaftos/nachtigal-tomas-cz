const PINS: Array<[string, string]> = [
  ["30%", "42%"],
  ["50%", "62%"],
  ["65%", "48%"],
  ["38%", "75%"],
  ["72%", "80%"],
  ["22%", "58%"],
  ["55%", "35%"],
];

export function MockSaun() {
  return (
    <div className="absolute inset-0 bg-[#0e0e10] overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(#16161A 1px, transparent 1px), linear-gradient(90deg, #16161A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {PINS.map(([top, left], i) => (
        <span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[var(--cream)]"
          style={{
            top,
            left,
            boxShadow: "0 0 0 4px rgba(212,207,198,0.08)",
          }}
        />
      ))}
      <div className="absolute left-4 top-4 w-[38%] bg-[#09090b] border border-[#1f1f22] p-3">
        <h4 className="font-serif text-[13px] m-0 mb-1 text-[var(--cream)]">
          Sauna Vesna
        </h4>
        <span className="font-mono text-[8px] text-[#6a6a68] tracking-[0.14em]">
          Brno · finská
        </span>
        <div className="font-mono text-[8px] text-[#8a8a88] py-1.5 border-t border-[#1f1f22] flex justify-between mt-1.5">
          <span>Teplota</span>
          <span>92 °C</span>
        </div>
        <div className="font-mono text-[8px] text-[#8a8a88] py-1.5 border-t border-[#1f1f22] flex justify-between">
          <span>Kapacita</span>
          <span>14 míst</span>
        </div>
        <div className="font-mono text-[8px] text-[#8a8a88] py-1.5 border-t border-[#1f1f22] flex justify-between">
          <span>Cena</span>
          <span>240 Kč</span>
        </div>
      </div>
    </div>
  );
}
