import Link from 'next/link';
import { IconArrowRight, IconMapPin } from '@tabler/icons-react';
import { Badge, Button, Container, Group, Text, Title } from '@mantine/core';
import { Marquee } from '@/components/Marquee/Marquee';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { HeroVisual } from './HeroVisual';
import classes from './Hero.module.css';

const stats = [
  { value: 200, suffix: '+', decimals: 0, label: 'Clients Served' },
  { value: 30, suffix: '+', decimals: 0, label: 'Apps Delivered' },
  { value: 20, suffix: '+', decimals: 0, label: 'Engineers & Designers' },
  { value: 2, suffix: '', decimals: 0, label: 'Global Hubs · SG & NP' },
];

const fundTypes = [
  'Private Equity',
  'Venture Capital',
  'Hedge Funds',
  'Family Offices',
  'Mutual Funds',
  'Single-Asset SPVs',
  'Fund Administrators',
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
      <Text
        component="span"
        className={classes.statValue}
        aria-label={`${value}${suffix} ${label}`}
      >
        {count}
        {suffix}
      </Text>
      <Text component="span" className={classes.statLabel}>
        {label}
      </Text>
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

      <Container size="lg" className={classes.container}>
        <div className={classes.layout}>
          <div className={classes.inner}>
            <Badge
              variant="outline"
              color="brand"
              size="md"
              radius="xl"
              className={classes.locationBadge}
              leftSection={<IconMapPin size={12} />}
            >
              Headquartered in Singapore · Serving Globally
            </Badge>

            <Title component="h1" className={classes.title}>
              Engineering the Future of <span className={classes.gradient}>AI&#8209;Powered</span>
              <br />
              Digital Experiences
            </Title>

            <Text component="p" className={classes.description}>
              UXQode builds intelligent digital solutions that transform how global enterprises
              operate, compete, and grow — and the engineering behind <strong>aama.io</strong>, our
              fund-management platform built for modern fund managers.
            </Text>

            <Group className={classes.controls}>
              <Button
                ref={magneticRef}
                component="a"
                href="https://aama.io"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                radius="xl"
                className={classes.primaryBtn}
                rightSection={<IconArrowRight size={18} />}
              >
                Explore aama.io
              </Button>
              <Button
                component={Link}
                href="/#contact-us"
                size="lg"
                radius="xl"
                variant="outline"
                className={classes.secondaryBtn}
              >
                Talk to Us
              </Button>
            </Group>

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

      <Container size="lg" className={classes.container}>
        <div className={classes.marqueeWrap}>
          <span className={classes.marqueeLabel}>Built for</span>
          <Marquee items={fundTypes} duration={32} />
        </div>
      </Container>
    </section>
  );
}
