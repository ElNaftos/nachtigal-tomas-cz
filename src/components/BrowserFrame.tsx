import Image from "next/image";

type Props = {
  url: string;
  imageSrc: string;
  imageAlt: string;
};

export function BrowserFrame({ url, imageSrc, imageAlt }: Props) {
  return (
    <div className="border border-[var(--rule)] bg-[var(--bg-elev)] rounded-[4px] overflow-hidden transition-colors duration-300 hover:border-[var(--ink-mute)]">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--rule)] bg-[#0b0b0e]">
        <span className="w-[9px] h-[9px] rounded-full bg-[#3d3936]" />
        <span className="w-[9px] h-[9px] rounded-full bg-[#3d3936]" />
        <span className="w-[9px] h-[9px] rounded-full bg-[#3d3936]" />
        <span className="ml-4 font-mono text-[10px] tracking-[0.05em] text-[var(--ink-mute)]">
          {url}
        </span>
      </div>
      <div className="relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1000}
          height={832}
          sizes="(max-width: 768px) 100vw, 600px"
          className="w-full h-auto block"
          unoptimized
        />
      </div>
    </div>
  );
}
