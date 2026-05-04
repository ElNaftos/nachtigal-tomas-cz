import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "src", "app");
mkdirSync(OUT, { recursive: true });

const flowerOfLife = (cx, cy, r, opacity = 0.35, strokeColor = "#d4cfc6") => {
  const sqrt3_2 = Math.sqrt(3) / 2;
  const circles = [
    [cx, cy],
    [cx + r, cy],
    [cx + r / 2, cy + r * sqrt3_2],
    [cx - r / 2, cy + r * sqrt3_2],
    [cx - r, cy],
    [cx - r / 2, cy - r * sqrt3_2],
    [cx + r / 2, cy - r * sqrt3_2],
  ];
  const inner = circles
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`)
    .join("");
  return `<g fill="none" stroke="${strokeColor}" stroke-width="1.5" opacity="${opacity}">
    ${inner}
    <circle cx="${cx}" cy="${cy}" r="${r * 2}" stroke-width="1"/>
  </g>`;
};

const ogSvg = ({ width = 1200, height = 630 } = {}) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#09090b"/>

  <!-- Subtle radial accent -->
  <defs>
    <radialGradient id="glow" cx="20%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#d4cfc6" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#d4cfc6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>

  <!-- Flower of life decoration top right -->
  ${flowerOfLife(width - 150, 150, 50, 0.3)}

  <!-- Label -->
  <text x="80" y="170" font-family="ui-monospace, 'JetBrains Mono', Menlo, monospace" font-size="22" letter-spacing="3" fill="#8a8a88" font-weight="500">TVORBA WEBŮ · SYSTÉMY NA MÍRU · DATA</text>

  <!-- Heading -->
  <text x="80" y="320" font-family="'Instrument Serif', 'Times New Roman', Georgia, serif" font-size="120" fill="#ededec" letter-spacing="-3">Tomáš</text>
  <text x="80" y="450" font-family="'Instrument Serif', 'Times New Roman', Georgia, serif" font-size="120" font-style="italic" fill="#d4cfc6" letter-spacing="-3">Nachtigal</text>

  <!-- Rule -->
  <rect x="80" y="486" width="80" height="3" fill="#d4cfc6"/>

  <!-- Subtitle -->
  <text x="80" y="552" font-family="'Inter', system-ui, -apple-system, sans-serif" font-size="28" fill="#ededec" font-weight="300">Weby a systémy na míru.</text>

  <!-- Bottom-right meta -->
  <text x="${width - 80}" y="${height - 48}" text-anchor="end" font-family="ui-monospace, 'JetBrains Mono', Menlo, monospace" font-size="16" letter-spacing="2" fill="#5a5a58">NACHTIGAL-TOMAS.CZ</text>
</svg>
`;

// OpenGraph 1200×630
await sharp(Buffer.from(ogSvg({ width: 1200, height: 630 })))
  .jpeg({ quality: 88 })
  .toFile(join(OUT, "opengraph-image.jpg"));
console.log("✓ opengraph-image.jpg");

// Twitter — same dimensions, summary_large_image
await sharp(Buffer.from(ogSvg({ width: 1200, height: 630 })))
  .jpeg({ quality: 88 })
  .toFile(join(OUT, "twitter-image.jpg"));
console.log("✓ twitter-image.jpg");

// Apple touch icon — flower of life on dark, 180×180
const appleSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#09090b" rx="32"/>
  ${flowerOfLife(90, 90, 24, 1, "#d4cfc6")}
</svg>
`;
await sharp(Buffer.from(appleSvg))
  .png()
  .toFile(join(OUT, "apple-icon.png"));
console.log("✓ apple-icon.png");
