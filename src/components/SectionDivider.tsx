export function SectionDivider() {
  return (
    <div
      aria-hidden
      className="h-px w-full"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, var(--rule) 50%, transparent 100%)",
      }}
    />
  );
}
