import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { SubpageNav } from "./SubpageNav";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/**
 * Společný rám podstránek SEO/GEO vrstvy: horní lišta, breadcrumbs,
 * čtecí sloupec a footer. Drží vizuál konzistentní s homepage.
 */
export function PageShell({
  crumbs,
  children,
  width = "narrow",
}: {
  crumbs: Crumb[];
  children: ReactNode;
  /** „narrow" = čtecí sloupec (detaily), „wide" = plná šířka (rozcestníky). */
  width?: "narrow" | "wide";
}) {
  return (
    <>
      <SubpageNav />
      <main className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)] pt-10 pb-[140px] max-md:pb-24">
        <div className="mb-12">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className={width === "narrow" ? "max-w-[760px]" : ""}>{children}</div>
      </main>
      <Footer />
    </>
  );
}
