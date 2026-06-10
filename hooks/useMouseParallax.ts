import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';

/**
 * Publishes normalized pointer position as `--px` / `--py` (range -0.5 → 0.5)
 * on the element, eased toward the target each frame. Child layers can then
 * drift by different amounts via `translate(calc(var(--px) * Npx), ...)`,
 * producing layered depth that follows the cursor.
 */
export function useMouseParallax<T extends HTMLElement = HTMLDivElement>(ease = 0.08) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    let raf = 0;
    let tx = 0;
    let ty = 0; // target
    let cx = 0;
    let cy = 0; // current

    const loop = () => {
      cx += (tx - cx) * ease;
      cy += (ty - cy) * ease;
      node.style.setProperty('--px', cx.toFixed(4));
      node.style.setProperty('--py', cy.toFixed(4));
      if (Math.abs(tx - cx) > 0.0005 || Math.abs(ty - cy) > 0.0005) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width - 0.5;
      ty = (e.clientY - rect.top) / rect.height - 0.5;
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };

    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', onLeave);
    return () => {
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ease]);

  return ref;
}
