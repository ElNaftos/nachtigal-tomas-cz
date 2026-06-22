/**
 * Spolehlivý smooth-scroll na sekci podle id.
 *
 * Proč vlastní implementace místo `href="#id"` + CSS `scroll-behavior: smooth`:
 * stránka má scroll-driven animace (GSAP ScrollTrigger v Projects) a líně
 * načítané obrázky, které při scrollu volají `ScrollTrigger.refresh()`. To
 * nativní smooth-scroll k vzdálené kotvě přeruší → scroll se zasekne v půlce
 * nebo skočí zpět nahoru. Tahle smyčka čte cílovou pozici v každém snímku,
 * takže přežije layout posuny a doscrolluje přesně na cíl — na všech zařízeních.
 */
export function scrollToSection(id: string, offset = 0) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  const html = document.documentElement;
  const maxY = () => Math.max(0, html.scrollHeight - window.innerHeight);
  const targetY = () =>
    Math.min(
      maxY(),
      Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset)
    );

  // Aktualizuj hash bez nativního skoku prohlížeče (ten by kolidoval).
  try {
    history.replaceState(null, "", `#${id}`);
  } catch {
    /* no-op */
  }

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) {
    window.scrollTo(0, targetY());
    return;
  }

  const startY = window.scrollY;
  const duration = 700;
  let startTime: number | null = null;
  let cancelled = false;
  const ease = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  // Per-frame scrolly musí být okamžité — dočasně vypni globální CSS smooth.
  const prevBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";

  const onUserScroll = () => {
    cancelled = true;
  };
  window.addEventListener("wheel", onUserScroll, { passive: true });
  window.addEventListener("touchstart", onUserScroll, { passive: true });

  const cleanup = () => {
    html.style.scrollBehavior = prevBehavior;
    window.removeEventListener("wheel", onUserScroll);
    window.removeEventListener("touchstart", onUserScroll);
  };

  const frame = (now: number) => {
    if (cancelled) {
      cleanup();
      return;
    }
    if (startTime === null) startTime = now;
    const t = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, startY + (targetY() - startY) * ease(t));

    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      window.scrollTo(0, targetY());
      // Doladění pro pozdní layout posuny (líné obrázky → ScrollTrigger.refresh).
      window.setTimeout(() => {
        if (!cancelled) window.scrollTo(0, targetY());
        cleanup();
      }, 160);
    }
  };

  requestAnimationFrame(frame);
}
