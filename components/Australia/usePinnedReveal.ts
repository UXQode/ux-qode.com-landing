import { useEffect, useRef, useState } from 'react';

/**
 * Drives a "pinned scroll" reveal for a tall wrapper: while it scrolls past
 * the viewport, returns how many of `count` items should be visible, spaced
 * evenly across that scroll distance — the section holds in place and items
 * light up one by one, then releases once the last one has appeared.
 *
 * Only active at >=900px, and only when the user hasn't asked for reduced
 * motion — on smaller screens or with that preference set, every item is
 * revealed immediately and the page scrolls normally.
 */
export function usePinnedReveal(count: number) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(count);

  useEffect(() => {
    const node = ref.current;
    if (!node || count <= 0) {
      return undefined;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 900px)').matches;
    if (reduceMotion || !isDesktop) {
      setActive(count);
      return undefined;
    }

    setActive(1);
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setActive(count);
        return;
      }
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      const next = Math.min(count, Math.floor(progress * (count - 1)) + 1);
      setActive(next);
    };
    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, [count]);

  return { ref, active };
}
