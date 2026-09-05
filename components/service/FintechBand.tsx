import { ReactNode } from 'react';
import { Button, Container } from '@mantine/core';
import classes from './service.module.css';

interface Cta {
  label: string;
  href: string;
  primary?: boolean;
  external?: boolean;
}

interface FintechBandProps {
  variant?: 'full' | 'compact';
  title?: ReactNode;
  body?: ReactNode;
  ctas?: Cta[];
  /** Wrap the band in its own padded <section> + Container (for drop-in use on a page). */
  withSection?: boolean;
  /** Eyebrow text above the title. Defaults to the fintech-specific line. */
  eyebrow?: ReactNode;
  /** Chip list on the right. Defaults to fintech domain chips. */
  chips?: string[];
}

const defaultChips = [
  'Fund administration',
  'NAV & IFRS accounting',
  'KYC / AML onboarding',
  'Capital calls & distributions',
  'Investor reporting',
  'MAS-aligned compliance',
];

const defaultBody = (
  <>
    UXQode is the maker of <strong>aama.io</strong>, an end-to-end fund-management platform. Our
    teams have shipped the entire fund lifecycle in production — not as a demo, but as software real
    fund managers run on every day. That domain depth ships with every engineer and every
    engagement.
  </>
);

export function FintechBand({
  variant = 'full',
  title = (
    <>
      We don&apos;t just understand fintech —{' '}
      <span className={classes.heroAccent}>we built it</span>
    </>
  ),
  body = defaultBody,
  ctas,
  withSection = false,
  eyebrow = 'Fintech & fund-tech · in our DNA',
  chips = defaultChips,
}: FintechBandProps) {
  const band = (
    <div className={`${classes.fintech} ${variant === 'compact' ? classes.fintechCompact : ''}`}>
      <div className={classes.fintechInner}>
        <div>
          <div className={classes.fintechEyebrow}>
            <span className={classes.chipDot} aria-hidden="true" />
            {eyebrow}
          </div>
          <h2 className={classes.fintechTitle}>{title}</h2>
          <p className={classes.fintechBody}>{body}</p>
          {ctas && ctas.length > 0 && (
            <div className={classes.fintechActions}>
              {ctas.map((c) => (
                <Button
                  key={c.label}
                  component="a"
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  radius={0}
                  className={c.primary ? classes.btnPrimary : classes.btnGhost}
                >
                  {c.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className={classes.fintechChips}>
          {chips.map((chip) => (
            <span key={chip} className={classes.chip}>
              <span className={classes.chipDot} aria-hidden="true" />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (withSection) {
    return (
      <section className={classes.section}>
        <Container size="xl">{band}</Container>
      </section>
    );
  }
  return band;
}
