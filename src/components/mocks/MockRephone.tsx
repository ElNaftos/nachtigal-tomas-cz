// Minimal landing for B2B refurbished iPhones
export function MockRephone() {
  return (
    <div className="absolute inset-0 bg-[#0a0c12] p-6 flex flex-col gap-4">
      {/* Top bar */}
      <div className="flex justify-between items-center pb-2 border-b border-[#1f2230]">
        <span className="font-serif text-[15px] tracking-[-0.01em] text-[#ededec]">
          Re<span className="text-[#3b82f6]">Phone</span>
        </span>
        <span className="font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.14em]">
          B2B Mobile s.r.o.
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-3">
        <span className="font-mono text-[8px] text-[#3b82f6] uppercase tracking-[0.18em]">
          Pro firmy / Velkoobchod
        </span>
        <h3
          className="font-serif text-[clamp(16px,2.4vw,22px)] m-0 text-[var(--cream)] italic leading-[1.05]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          Repasované iPhony
          <br />
          v garantované kvalitě.
        </h3>

        <div className="grid grid-cols-3 gap-2 mt-2">
          {["iPhone 13", "iPhone 14", "iPhone 15"].map((m, i) => (
            <div
              key={m}
              className="border border-[#1f2230] p-1.5 flex flex-col items-center gap-1"
            >
              <div
                className="w-5 h-7 rounded-[2px] border border-[#3b82f680]"
                style={{
                  background: i === 1 ? "#162236" : "#0e131c",
                }}
              />
              <span className="font-mono text-[7px] text-[#6a6a68] uppercase tracking-[0.1em]">
                {m}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[#1f2230] flex items-center justify-between">
        <span className="font-mono text-[8px] text-[#6a6a68] uppercase tracking-[0.14em]">
          Volat
        </span>
        <span className="font-mono text-[10px] text-[#3b82f6] tracking-[0.14em]">
          721 419 183
        </span>
      </div>
    </div>
  );
}
