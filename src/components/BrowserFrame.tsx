import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  placeholder?: string;
};

export function BrowserFrame({ src, alt, placeholder }: Props) {
  return (
    <div className="rounded-lg border border-[var(--border)] overflow-hidden bg-[var(--bg-elevated)]">
      <div className="h-7 bg-[var(--bg-surface)] flex items-center px-3 gap-1.5 border-b border-[var(--border)]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
      </div>
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          width={1200}
          height={800}
          className="w-full h-auto block"
          unoptimized
        />
      ) : (
        <div className="aspect-[3/2] bg-[var(--bg-surface)] flex items-center justify-center">
          <span className="text-[var(--text-muted)] text-sm font-mono">
            {placeholder ?? "Screenshot"}
          </span>
        </div>
      )}
    </div>
  );
}
