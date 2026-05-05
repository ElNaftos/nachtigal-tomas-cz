import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Globálně vypneme Vercel image optimizer — webpy v public/ jsou
    // už pre-optimalizované (q85 ~ 22-92 KB), Vercel free tier má
    // měsíční limit na image transformations a po jeho překročení
    // optimizer vrací 402 a obrázky zmizí.
    unoptimized: true,
  },
};

export default nextConfig;
