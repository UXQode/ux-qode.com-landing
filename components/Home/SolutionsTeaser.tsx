import Link from 'next/link';
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBuildingBank,
  IconRobot,
  IconWand,
} from '@tabler/icons-react';
import { Button, Container, Text, ThemeIcon } from '@mantine/core';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import classes from '@/components/service/service.module.css';

const pillars = [
  {
    icon: IconRobot,
    title: 'AI back-office automation',
    description: 'Drop-in document processing, posting, and reconciliation — our flagship.',
    href: '/solutions/ai-back-office',
  },
  {
    icon: IconWand,
    title: 'Custom AI solutions',
    description: 'Discovery-led engagements that map and automate your real workflows.',
    href: '/solutions/custom-ai',
  },
  {
    icon: IconBuildingBank,
    title: 'Fund administration platforms',
    description: 'License, deploy, or have us build your fund admin engine.',
    href: '/work',
  },
];

export function SolutionsTeaser() {
  return (
    <section
      className={`${classes.section} ${classes.sectionAlt}`}
      id="solutions"
      aria-label="Solutions"
    >
      <Container size="lg">
        <SectionHeading
          index="03"
          label="Solutions"
          title={
            <>
              What we did for the fund industry,{' '}
              <span className={classes.heroAccent}>we can build for yours</span>
            </>
          }
          description="Three ways to put our fund-tech and AI depth to work — plus five more, from SPV formation to dedicated engineering teams."
        />

        <Reveal direction="up">
          <div className={classes.grid}>
            {pillars.map((p, i) => (
              <Link
                key={p.title}
                href={p.href}
                className={classes.card}
                style={{ textDecoration: 'none' }}
              >
                <div className={classes.accentBar} aria-hidden="true" />
                <div className={classes.cardTop}>
                  <ThemeIcon
                    size={50}
                    radius={0}
                    variant="gradient"
                    gradient={{ from: 'cyan', to: 'blue' }}
                    className={classes.cardIcon}
                  >
                    <p.icon size={24} stroke={1.7} />
                  </ThemeIcon>
                  <span className={classes.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <Text component="h3" className={classes.cardTitle}>
                  {p.title}
                </Text>
                <Text className={classes.cardDesc}>{p.description}</Text>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    marginTop: 14,
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#3ac1ce',
                  }}
                >
                  Learn more <IconArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 'clamp(32px, 4vw, 48px)',
            }}
          >
            <Button
              component={Link}
              href="/solutions"
              size="md"
              radius={0}
              className={classes.btnGhost}
              rightSection={<IconArrowRight size={16} />}
            >
              See all 8 solutions
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
