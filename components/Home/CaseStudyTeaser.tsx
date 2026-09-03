import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { Button, Container, Text } from '@mantine/core';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import classes from '@/components/service/service.module.css';

const stats = [
  { value: '5x', label: 'Growth, zero added headcount' },
  { value: '1–2 hrs', label: 'Saved every day, per operator' },
  { value: '0', label: 'Computation errors, post-migration' },
];

export function CaseStudyTeaser() {
  return (
    <section className={classes.section} id="work" aria-label="What we've done">
      <Container size="xl">
        <SectionHeading
          index="04"
          label="What We've Done"
          title="Built a full fund administration engine — and shipped it twice"
          description="In May 2024 we replaced a legacy vendor's mutual fund system mid-flight, on a live scheme open to the public — with Matrix Mutual."
        />

        <Reveal direction="up">
          <div className={classes.heroStats} style={{ marginTop: 'clamp(28px, 3vw, 40px)' }}>
            {stats.map((s) => (
              <div key={s.label} className={classes.heroStat}>
                <span className={classes.heroStatValue}>{s.value}</span>
                <span className={classes.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            className={classes.quote}
            style={{ maxWidth: 720, margin: 'clamp(32px, 4vw, 48px) auto 0' }}
          >
            <Text className={classes.quoteText}>
              &ldquo;We have noted significant increase in efficiency of Operations Teams along with
              quality of Customer Experience.&rdquo;
            </Text>
            <div className={classes.quoteAttribution}>
              — Operations Team, licensed fund management client
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 'clamp(32px, 4vw, 48px)',
            }}
          >
            <Button
              component={Link}
              href="/work"
              size="md"
              radius={0}
              className={classes.btnGhost}
              rightSection={<IconArrowRight size={16} />}
            >
              Read the full case study
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
