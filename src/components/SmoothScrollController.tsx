import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScrollController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.matchMedia("(max-width: 1024px)");
    const isTouch = window.matchMedia("(pointer: coarse)");

    if (reducedMotion.matches || isMobile.matches || isTouch.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false, // Let native OS handle touch for perfect momentum scrolling on mobile
      wheelMultiplier: 1.0,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}