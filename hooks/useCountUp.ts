import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 → `end` over `duration` ms once `active` becomes true.
 * Uses requestAnimationFrame with an ease-out curve for a polished count-up.
 * `decimals` controls fixed precision so values like 99.9 animate cleanly.
 */
export function useCountUp(end: number, active: boolean, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setValue(end);
      return;
    }

    let raf = 0;
    let startTime = 0;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(end * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(end);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, end, duration]);

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
}
