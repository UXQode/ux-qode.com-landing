import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { Button, Container, Text } from '@mantine/core';
import { WordReveal } from '@/components/Kinetic/WordReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { HeroVisual } from './HeroVisual';
import classes from './Hero.module.css';

const stats = [
  { value: 9, suffix: '+', decimals: 0, label: 'Years in Fintech' },
  { value: 50, suffix: '+', decimals: 0, label: 'Engineers Trained' },
  { value: 10, suffix: '-yr', decimals: 0, label: 'Anchor Client Contract' },
];

const marqueeWords = [
  'AI BACK OFFICE',
  'FUND ADMINISTRATION',
  'BANKING AUTOMATION',
  'RECONCILIATION',
  'CUSTOM AI SOLUTIONS',
  'COMPLIANCE',
  'ENTERPRISE SOFTWARE',
];

function StatItem({
  value,
  suffix,
  decimals,
  label,
}: {
  value: number;
  suffix: string;
  decimals: number;
  label: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const count = useCountUp(value, inView, 1600, decimals);
  return (
    <div className={classes.statItem} role="listitem" ref={ref}>
      <span className={classes.statValue} aria-label={`${value}${suffix} ${label}`}>
        {count}
        {suffix}
      </span>
      <span className={classes.statLabel}>{label}</span>
    </div>
  );
}

export function Hero() {
  const sceneRef = useMouseParallax<HTMLDivElement>();
  const magneticRef = useMagnetic<HTMLAnchorElement>(0.35);

  return (
    <section className={classes.root} aria-label="Hero" ref={sceneRef}>
      {/* Parallax depth layers — drift with the cursor at different rates */}
      <div className={classes.glow} aria-hidden="true" style={{ ['--depth' as string]: 1 }} />
      <div
        className={classes.glowSecondary}
        aria-hidden="true"
        style={{ ['--depth' as string]: -1.4 }}
      />
      <div className={classes.orb1} aria-hidden="true" style={{ ['--depth' as string]: 2.6 }} />
      <div className={classes.orb2} aria-hidden="true" style={{ ['--depth' as string]: -2.2 }} />
      <div className={classes.orb3} aria-hidden="true" style={{ ['--depth' as string]: 3.4 }} />

      <Container size="xl" className={classes.container}>
        <div className={classes.overline}>
          <span className={classes.index}>01</span>
          <span className={classes.overlineLine} />
          <span className={classes.overlineLabel}>
            UXQode · Financial Software &amp; AI Back Offices · Singapore
          </span>
        </div>

        <h1 className={classes.title}>
          <WordReveal
            lines={['Financial software for', 'licensed institutions.']}
            className={classes.titleStatic}
          />
        </h1>

        <div className={classes.row}>
          <div className={classes.left}>
            <Text component="p" className={classes.description}>
              And the AI that runs their back office. UXQode is a Singapore-incorporated engineering
              firm building fund administration platforms, banking automation, and AI-powered
              back-office systems — for licensed fund managers, capital markets firms, and banks.
            </Text>

            <div className={classes.controls}>
              <Button
                ref={magneticRef}
                component={Link}
                href="/#contact-us"
                size="lg"
                radius="0"
                className={classes.primaryBtn}
                rightSection={<IconArrowRight size={18} />}
              >
                Talk to our team
              </Button>
              <Button
                component={Link}
                href="/solutions/ai-back-office"
                size="lg"
                radius="0"
                variant="outline"
                className={classes.secondaryBtn}
              >
                See the AI back office
              </Button>
            </div>

            <div className={classes.statsRow} role="list" aria-label="Company statistics">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          <div className={classes.visualCol}>
            <HeroVisual />
          </div>
        </div>
      </Container>

      {/* Giant outline-text marquee — editorial signature */}
      <div className={classes.bigMarquee} aria-hidden="true">
        <div className={classes.bigTrack}>
          {[0, 1].map((dup) => (
            <span key={dup} className={classes.bigGroup}>
              {marqueeWords.map((w) => (
                <span key={w} className={classes.bigWord}>
                  {w}
                  <span className={classes.star}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
