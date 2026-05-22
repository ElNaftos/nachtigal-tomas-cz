// Pre-optimize public assets pro PageSpeed (Vercel free tier má quota
// na image transformations, takže next/image používáme s `unoptimized: true`).
// Tento skript zmenší zdrojové WebPy přímo v public/, aby odpovídaly
// zobrazované velikosti. Tracked v gitu — reversible.

import sharp from "sharp";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PROJECTS_DIR = "public/projects";
const PROJECT_MAX_WIDTH = 800; // zobrazované max ~600px, +retina rezerva
const PROFILE_SIZE = 376; // zobrazované 188px na mobilu, 2x retina

const files = readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".webp"));

for (const f of files) {
  const p = join(PROJECTS_DIR, f);
  const before = statSync(p).size;
  const buf = await sharp(p)
    .resize({ width: PROJECT_MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toBuffer();
  writeFileSync(p, buf);
  console.log(
    `${f}: ${(before / 1024).toFixed(1)} KB → ${(statSync(p).size / 1024).toFixed(1)} KB`,
  );
}

const tp = "public/tomas.webp";
const tBefore = statSync(tp).size;
const tBuf = await sharp(tp)
  .resize({ width: PROFILE_SIZE, height: PROFILE_SIZE, withoutEnlargement: true })
  .webp({ quality: 85, effort: 6 })
  .toBuffer();
writeFileSync(tp, tBuf);
console.log(
  `tomas.webp: ${(tBefore / 1024).toFixed(1)} KB → ${(statSync(tp).size / 1024).toFixed(1)} KB`,
);
