import { ReactNode } from 'react';
import classes from './Marquee.module.css';

interface MarqueeProps {
  items: ReactNode[];
  /** Seconds for one full loop. Default: 28 */
  duration?: number;
  /** Reverse direction. Default: false */
  reverse?: boolean;
}

/**
 * Seamless infinite marquee. The track is duplicated and translated -50%, so
 * the loop is gapless. Pauses on hover. Edges fade out via a CSS mask.
 */
export function Marquee({ items, duration = 28, reverse = false }: MarqueeProps) {
  const row = (
    <div className={classes.group}>
      {items.map((item, i) => (
        <span key={i} className={classes.item}>
          {item}
          <span className={classes.sep} aria-hidden="true" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={classes.marquee} aria-hidden="true">
      <div
        className={classes.track}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
