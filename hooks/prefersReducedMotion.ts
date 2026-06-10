/** True when the user has requested reduced motion. SSR-safe (returns false on server). */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}
