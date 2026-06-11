import { ElementType } from 'react';
import classes from './WordReveal.module.css';

interface WordRevealProps {
  /** The line(s) of text. Pass an array to force line breaks. */
  lines: string[];
  as?: ElementType;
  className?: string;
  /** ms delay before the first word animates. Default: 0 */
  startDelay?: number;
  /** per-word stagger in ms. Default: 70 */
  stagger?: number;
}

/**
 * Splits text into words and reveals each with a clip-up + fade, staggered.
 * Pure CSS animation on mount — great for big editorial headlines. The full
 * text stays accessible via an sr-only copy.
 */
export function WordReveal({
  lines,
  as: Component = 'span',
  className,
  startDelay = 0,
  stagger = 70,
}: WordRevealProps) {
  let counter = 0;
  return (
    <Component className={className}>
      <span className={classes.sr}>{lines.join(' ')}</span>
      <span aria-hidden="true" className={classes.wrap}>
        {lines.map((line, li) => (
          <span key={li} className={classes.line}>
            {line.split(' ').map((word, wi) => {
              const delay = startDelay + counter * stagger;
              counter += 1;
              return (
                <span key={wi} className={classes.word}>
                  <span className={classes.inner} style={{ animationDelay: `${delay}ms` }}>
                    {word}
                  </span>
                </span>
              );
            })}
          </span>
        ))}
      </span>
    </Component>
  );
}
