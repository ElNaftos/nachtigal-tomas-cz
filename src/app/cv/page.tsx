import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Tomáš Nachtigal",
  description: "Připravuji novou verzi.",
};

export default function CVPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <span className="label block mb-6">CV / 07</span>
        <p className="font-sans text-[18px] font-light text-[var(--ink-dim)]">
          Připravuji novou verzi.
        </p>
      </div>
    </main>
  );
}
