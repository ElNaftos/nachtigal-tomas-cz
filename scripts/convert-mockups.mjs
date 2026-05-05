import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SRC = "/Users/elnaftos/Desktop/mockup";
const OUT = join(process.cwd(), "public", "projects");

mkdirSync(OUT, { recursive: true });

const files = readdirSync(SRC).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const out = file.replace(/\.png$/i, ".webp");
  const meta = await sharp(join(SRC, file)).metadata();
  await sharp(join(SRC, file))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(join(OUT, out));
  console.log(`✓ ${out}  (src ${meta.width}×${meta.height})`);
}
