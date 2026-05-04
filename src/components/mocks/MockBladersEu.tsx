// Beyblade-themed sister mock — circular spinning tops in grid
const SPINNERS = [
  { name: "Dranzer S", rarity: "S", color: "#ef4444" },
  { name: "Dragoon V", rarity: "A", color: "#3b82f6" },
  { name: "Driger F", rarity: "S", color: "#22c55e" },
  { name: "Draciel V2", rarity: "B", color: "#a855f7" },
  { name: "Phoenix", rarity: "A", color: "#f59e0b" },
  { name: "Wolborg", rarity: "S", color: "#94a3b8" },
];

export function MockBladersEu() {
  return (
    <div className="absolute inset-0 bg-[#0e0e10] p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center pb-2 border-b border-[#1f1f22]">
        <span className="font-serif text-[14px] tracking-[-0.01em] text-[var(--cream)]">
          Bladers <span className="text-[var(--ink-mute)] text-[10px] font-mono uppercase tracking-[0.14em]">.eu</span>
        </span>
        <div className="flex gap-3 font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.1em]">
          <span>Wiki</span>
          <span>Slovník</span>
          <span>Shop</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {SPINNERS.map((s) => (
          <div
            key={s.name}
            className="bg-[#16161a] border border-[#1f1f22] rounded-[2px] p-2 flex flex-col items-center justify-between gap-1"
          >
            <div
              className="rounded-full mt-1"
              style={{
                width: 28,
                height: 28,
                background: `radial-gradient(circle at 50% 50%, ${s.color}40 0%, ${s.color}20 40%, transparent 70%)`,
                border: `1px solid ${s.color}80`,
              }}
            />
            <span className="font-serif text-[9px] text-[#ededec] leading-tight">
              {s.name}
            </span>
            <span
              className="font-mono text-[7px] tracking-[0.12em] uppercase"
              style={{ color: s.color }}
            >
              Tier {s.rarity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
