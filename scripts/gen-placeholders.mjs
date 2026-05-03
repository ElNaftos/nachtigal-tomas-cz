import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "public", "projects");
mkdirSync(OUT, { recursive: true });

const names = ["bladers", "chytresazeni", "mapasaun", "hernicentro"];

for (const name of names) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
  <rect width="100%" height="100%" fill="#1a1a1f"/>
  <text x="50%" y="50%" font-family="ui-monospace, monospace" font-size="24" fill="#5c5c5f" text-anchor="middle" dominant-baseline="middle">${name}.cz</text>
</svg>`;

  await sharp(Buffer.from(svg))
    .webp({ quality: 80 })
    .toFile(join(OUT, `${name}.webp`));

  console.log(`✓ ${name}.webp`);
}
