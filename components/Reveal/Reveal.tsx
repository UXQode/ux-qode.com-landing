import { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import classes from './Reveal.module.css';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: ReactNode;
  /** Animation entrance direction. Default: 'up' */
  direction?: Direction;
  /** Stagger delay in ms before the animation starts. */
  delay?: number;
  /** Render as a different element (e.g. 'li', 'span'). Default: 'div' */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps content in a scroll-triggered entrance animation. Pair with `delay`
 * on siblings to create a staggered reveal across a grid of cards.
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  as: Component = 'div',
  className,
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Component
      ref={ref}
      className={`${classes.reveal} ${classes[direction]} ${inView ? classes.visible : ''} ${className ?? ''}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Component>
  );
}
