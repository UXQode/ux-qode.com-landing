import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '@/hooks/prefersReducedMotion';
import classes from './RotatingWord.module.css';

interface RotatingWordProps {
  words: string[];
  /** ms each word stays before rotating. Default: 2200 */
  interval?: number;
}

/**
 * Cycles through `words`, sliding the current one up and out while the next
 * slides in from below — the signature kinetic-typography move. Width animates
 * to fit each word so surrounding text reflows smoothly. Static (first word)
 * under reduced-motion.
 */
export function RotatingWord({ words, interval = 2200 }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || words.length < 2) return;
    setAnimate(true);
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const current = words[index];

  return (
    <span className={classes.rotator} aria-label={words.join(', ')}>
      {/* Invisible sizer keeps layout width = widest word so nothing jumps */}
      <span className={classes.sizer} aria-hidden="true">
        {words.reduce((a, b) => (b.length > a.length ? b : a), '')}
      </span>
      <span
        key={index}
        className={`${classes.word} ${animate ? classes.in : ''}`}
        aria-hidden="true"
      >
        {current}
      </span>
    </span>
  );
}
