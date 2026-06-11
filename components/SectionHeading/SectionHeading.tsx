import { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal/Reveal';
import classes from './SectionHeading.module.css';

interface SectionHeadingProps {
  /** Two-digit section index, e.g. "02". */
  index: string;
  /** Small uppercase overline label. */
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  /** Render on a dark panel (forces light text). */
  onDark?: boolean;
}

/** Editorial section header: index marker + overline + oversized display title. */
export function SectionHeading({
  index,
  label,
  title,
  description,
  align = 'center',
  onDark = false,
}: SectionHeadingProps) {
  return (
    <div className={classes.head} data-align={align} data-dark={onDark || undefined}>
      <Reveal direction="fade">
        <div className={classes.top}>
          <span className={classes.index}>{index}</span>
          <span className={classes.line} />
          <span className={classes.label}>{label}</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className={classes.title}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className={classes.description}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
