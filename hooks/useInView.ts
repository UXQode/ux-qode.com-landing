import { useEffect, useRef, useState } from 'react';

interface Options {
  /** Fire only once, then stop observing. Default: true */
  once?: boolean;
  /** IntersectionObserver threshold. Default: 0.15 */
  threshold?: number;
  /** Root margin, e.g. to trigger slightly before fully in view. */
  rootMargin?: string;
}

/**
 * Lightweight scroll-into-view detector. Returns a ref to attach and a boolean
 * that flips to `true` once the element enters the viewport. Used to drive the
 * site's scroll-reveal animations and number count-ups without a heavy library.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(options: Options = {}) {
  const { once = true, threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion — reveal immediately.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}
