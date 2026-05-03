import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Tomáš Nachtigal",
  description: "Připravuji novou verzi.",
};

export default function CVPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <span className="label">CV</span>
        <p className="body mt-6">Připravuji novou verzi.</p>
      </div>
    </main>
  );
}
