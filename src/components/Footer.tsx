import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
        <span className="label">© 2026 Tomáš Nachtigal</span>
        <Link
          href="/cv"
          className="label hover:text-[var(--text-primary)] transition-colors"
        >
          CV
        </Link>
      </div>
    </footer>
  );
}
