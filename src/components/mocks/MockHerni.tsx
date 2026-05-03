const PRODUCTS = [
  ["Logitech G Pro X", "3 290 Kč"],
  ["Razer Huntsman", "4 890 Kč"],
  ["SteelSeries QcK", "590 Kč"],
  ["HyperX Cloud II", "2 490 Kč"],
  ["Corsair K70", "5 690 Kč"],
  ["Glorious Model O", "1 890 Kč"],
];

export function MockHerni() {
  return (
    <div className="absolute inset-0 bg-[#0e0e10] p-4 flex flex-col gap-2.5">
      <div className="flex justify-between items-center pb-2.5 border-b border-[#1f1f22]">
        <span className="font-serif text-[15px] tracking-[-0.01em] text-[#ededec]">
          Herní<span className="text-[var(--cream)]">.</span>Centro
        </span>
        <span className="font-mono text-[8px] text-[var(--cream)] tracking-[0.14em] uppercase">
          Košík · 3
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {PRODUCTS.slice(0, 3).map(([name, price]) => (
          <ProductCard key={name} name={name} price={price} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {PRODUCTS.slice(3).map(([name, price]) => (
          <ProductCard key={name} name={name} price={price} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="border border-[#1f1f22] p-2 flex flex-col gap-1 relative">
      <div
        className="aspect-[4/3] mb-1"
        style={{
          background: "linear-gradient(135deg, #16161a, #1f1f22)",
        }}
      />
      <span className="font-serif text-[10px] text-[#ededec] leading-tight">
        {name}
      </span>
      <span className="font-mono text-[9px] text-[var(--cream)] mt-auto">
        {price}
      </span>
    </div>
  );
}
