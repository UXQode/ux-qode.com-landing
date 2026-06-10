import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';

/**
 * Scroll-driven parallax. Translates the element vertically based on its
 * distance from the viewport center, so it drifts as the page scrolls.
 * Positive `speed` moves with the scroll, negative moves against it.
 * Writes the independent `translate` property inside rAF (so it composes with
 * any `transform` animation on the same element) — no re-renders.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.12) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = node.getBoundingClientRect();
      const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      node.style.translate = `0 ${(fromCenter * speed).toFixed(2)}px`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
