import { useEffect, useRef } from 'react';

/**
 * Cursor-follow spotlight. Publishes `--mx` / `--my` (in px, relative to the
 * element) as the pointer moves, so a CSS radial-gradient glow can track the
 * cursor. Safe to use everywhere — the glow itself is opt-in via CSS opacity
 * on hover, so reduced-motion users simply see a static card.
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      raf = 0;
      node.style.setProperty('--mx', `${x}px`);
      node.style.setProperty('--my', `${y}px`);
    };
    const onMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    node.addEventListener('pointermove', onMove);
    return () => {
      node.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}
