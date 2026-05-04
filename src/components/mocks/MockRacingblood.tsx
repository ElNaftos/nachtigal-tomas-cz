// Streetwear motorsport — black/red brand panel + product grid
const ITEMS = [
  { name: "Moto Grid Hoodie", price: "1 850 Kč", color: "#0b0b0e" },
  { name: "Car Grid Tee", price: "1 350 Kč", color: "#162026" },
  { name: "Cloud Cream Hoodie", price: "1 850 Kč", color: "#d4cfc6" },
  { name: "Dark Red Tee", price: "1 350 Kč", color: "#3a0e10" },
];

export function MockRacingblood() {
  return (
    <div className="absolute inset-0 bg-[#0a0a0c] flex flex-col">
      {/* Hero band */}
      <div className="px-4 py-3 border-b border-[#1f1f22] flex items-center justify-between">
        <span className="font-serif text-[16px] tracking-[-0.01em] text-[#ededec] flex items-center gap-1.5">
          Racing<span className="text-[#dc2626]">Blood</span>
        </span>
        <div className="flex gap-3 font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.1em]">
          <span>Mikiny</span>
          <span>Trička</span>
          <span>Lookbook</span>
        </div>
      </div>

      <div
        className="px-4 py-3 border-b border-[#1f1f22]"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(220,38,38,0.12) 0%, transparent 60%)",
        }}
      >
        <div className="font-serif text-[14px] text-[var(--cream)] italic leading-tight">
          Clothing with passion for motorsport.
        </div>
        <div className="font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.14em] mt-1">
          100% Cotton · EU Made
        </div>
      </div>

      {/* Product grid */}
      <div className="flex-1 grid grid-cols-2 gap-2 p-3">
        {ITEMS.map((it) => (
          <div
            key={it.name}
            className="border border-[#1f1f22] flex flex-col"
          >
            <div className="aspect-[4/3] relative" style={{ background: it.color }}>
              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />
            </div>
            <div className="px-2 py-1.5 flex items-center justify-between">
              <span className="font-serif text-[9px] text-[#ededec] truncate">
                {it.name}
              </span>
              <span className="font-mono text-[8px] text-[#dc2626]">
                {it.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
