import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';

/**
 * Magnetic hover: the element eases toward the cursor while hovered and springs
 * back on leave. `strength` is the fraction of the cursor offset applied.
 */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(strength = 0.4) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          node.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
        });
      }
    };
    const onLeave = () => {
      node.style.transform = 'translate(0, 0)';
    };

    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', onLeave);
    return () => {
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}
