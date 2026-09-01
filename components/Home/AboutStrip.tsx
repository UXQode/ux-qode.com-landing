import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { Anchor, Container, Text } from '@mantine/core';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import classes from '@/components/service/service.module.css';

const facts = [
  { value: '2017', label: 'Founded' },
  { value: '50+', label: 'Engineers trained' },
  { value: '10-yr', label: 'Anchor contract' },
];

const credibility = ['We operate what we build', 'Regulatory fluency', 'Proven migration playbook'];

export function AboutStrip() {
  return (
    <section className={classes.section} id="about" aria-label="About UXQode">
      <Container size="lg">
        <SectionHeading
          index="02"
          label="About UXQode"
          title={
            <>
              We are <span className={classes.heroAccent}>operators</span>, not just developers
            </>
          }
          description="Founded in 2017, UXQode has grown from an enterprise software consultancy into a product engineering firm behind full-scale fund administration platforms used by licensed fund managers and capital markets firms — and we run our own platforms on live, regulated funds today."
        />

        <Reveal direction="up">
          <div className={classes.heroStats} style={{ marginTop: 'clamp(28px, 3vw, 40px)' }}>
            {facts.map((f) => (
              <div key={f.label} className={classes.heroStat}>
                <span className={classes.heroStatValue}>{f.value}</span>
                <span className={classes.heroStatLabel}>{f.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className={classes.chipList} style={{ justifyContent: 'center', marginTop: 32 }}>
            {credibility.map((label) => (
              <span key={label} className={classes.chip}>
                <span className={classes.chipDot} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <Text ta="center" mt={28}>
            <Anchor
              component={Link}
              href="/about"
              underline="never"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontWeight: 700,
                color: '#3ac1ce',
              }}
            >
              Learn more about us <IconArrowRight size={15} />
            </Anchor>
          </Text>
        </Reveal>
      </Container>
    </section>
  );
}
