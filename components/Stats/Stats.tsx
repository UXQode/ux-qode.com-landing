import { Badge, Container, Text, Title } from '@mantine/core';
import { Reveal } from '@/components/Reveal/Reveal';
import { useInView } from '@/hooks/useInView';
import { Gauge } from './Gauge';
import classes from './Stats.module.css';

const gauges = [
  { percent: 99.9, value: 99.9, decimals: 1, suffix: '%', caption: 'Platform uptime SLA' },
  { percent: 100, value: 100, suffix: '%', caption: 'IFRS & MAS audit-ready' },
  { percent: 100, value: 0, staticLabel: 'SOC 2', caption: 'VAPT-certified security' },
  { percent: 100, value: 256, suffix: '-bit', caption: 'End-to-end encryption' },
];

// Representative "time to go live" — aama.io ships in weeks, legacy stacks in quarters.
const timeline = [
  { label: 'Spreadsheets & legacy tools', weeks: 16, max: 16, variant: 'muted' as const },
  { label: 'aama.io implementation', weeks: 3, max: 16, variant: 'brand' as const },
];

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className={classes.section} aria-label="aama.io by the numbers">
      <Container size="lg">
        <div className={classes.header}>
          <Reveal direction="scale">
            <Badge variant="light" color="brand" size="md" radius="xl">
              By the Numbers
            </Badge>
          </Reveal>
          <Reveal delay={80}>
            <Title component="h2" className={classes.title} mt="sm">
              Compliance, scale, and speed — <span className={classes.accent}>measured</span>
            </Title>
          </Reveal>
          <Reveal delay={140}>
            <Text component="p" className={classes.description} mt="md">
              aama.io is built to enterprise standards so boutique fund managers can operate like
              institutions — without the institutional overhead.
            </Text>
          </Reveal>
        </div>

        <div className={classes.gaugeGrid}>
          {gauges.map((g, i) => (
            <Reveal key={g.caption} delay={i * 100} direction="up">
              <Gauge {...g} />
            </Reveal>
          ))}
        </div>

        {/* Comparison infographic */}
        <Reveal delay={120}>
          <div className={classes.compare} ref={ref}>
            <div className={classes.compareHead}>
              <Text className={classes.compareTitle}>Time to go live</Text>
              <Text className={classes.compareSub}>Weeks, not quarters</Text>
            </div>
            {timeline.map((t, i) => (
              <div key={t.label} className={classes.compareRow}>
                <div className={classes.compareLabel}>{t.label}</div>
                <div className={classes.compareBarTrack}>
                  <div
                    className={`${classes.compareBar} ${classes[t.variant]}`}
                    style={{
                      width: inView ? `${(t.weeks / t.max) * 100}%` : '0%',
                      transitionDelay: `${i * 200 + 200}ms`,
                    }}
                  >
                    <span className={classes.compareWeeks}>
                      {t.weeks}
                      {t.weeks === 16 ? '+' : ''} wks
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
