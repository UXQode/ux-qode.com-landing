import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './prefersReducedMotion';

interface TiltOptions {
  /** Maximum tilt in degrees. Default: 10 */
  max?: number;
  /** Scale applied while hovering. Default: 1.02 */
  scale?: number;
  /** Optional lift in px on the Z axis (via translateZ). Default: 0 */
  lift?: number;
}

/**
 * Pointer-driven 3D tilt. The element rotates toward the cursor and eases back
 * on leave. Also publishes `--mx` / `--my` (0–100%) so a child glow can track
 * the pointer. Attach the returned ref to the element you want to tilt.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(options: TiltOptions = {}) {
  const { max = 10, scale = 1.02, lift = 0 } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    let raf = 0;
    let rx = 0;
    let ry = 0;
    let hovering = false;

    const apply = () => {
      raf = 0;
      const s = hovering ? scale : 1;
      node.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(${hovering ? lift : 0}px) scale(${s})`;
    };

    const onMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rx = -py * max * 2;
      ry = px * max * 2;
      node.style.setProperty('--mx', `${((px + 0.5) * 100).toFixed(1)}%`);
      node.style.setProperty('--my', `${((py + 0.5) * 100).toFixed(1)}%`);
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onEnter = () => {
      hovering = true;
      node.style.transition = 'transform 0.12s ease-out';
    };
    const onLeave = () => {
      hovering = false;
      rx = 0;
      ry = 0;
      node.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      if (!raf) raf = requestAnimationFrame(apply);
    };

    node.addEventListener('pointerenter', onEnter);
    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', onLeave);
    return () => {
      node.removeEventListener('pointerenter', onEnter);
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [max, scale, lift]);

  return ref;
}
