import Link from 'next/link';
import {
  IconActivity,
  IconArrowRight,
  IconBrain,
  IconShieldLock,
  IconSitemap,
  IconTransfer,
  IconUserCheck,
} from '@tabler/icons-react';
import { Button, Container, Text, ThemeIcon } from '@mantine/core';
import { FAQ } from '@/components/FAQ/FAQ';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import classes from '@/components/service/service.module.css';

const facts = [
  { value: '2017', label: 'Founded' },
  { value: '50+', label: 'Engineers trained in-house' },
  { value: '10-yr', label: 'Anchor client contract' },
];

const reasons = [
  {
    icon: IconActivity,
    title: 'We operate what we build',
    description:
      'Our platforms run live funds today — we know what production-grade financial software demands, because we answer for it every day.',
  },
  {
    icon: IconShieldLock,
    title: 'Regulatory fluency',
    description:
      'SFRS(I) 9 reporting, KYC/AML workflows, audit trails, and multi-jurisdiction fund structures are native to our platforms, not bolted on.',
  },
  {
    icon: IconBrain,
    title: 'AI with accountability',
    description:
      'Deterministic accounting core, human-in-the-loop controls, full explainability — AI that a compliance officer can sign off on.',
  },
  {
    icon: IconTransfer,
    title: 'Proven migration playbook',
    description:
      "We've done the legacy-to-modern transition repeatedly for licensed institutions, on live operations, without downtime.",
  },
  {
    icon: IconSitemap,
    title: 'Workflow-first, not tool-first',
    description:
      'We start by understanding how your business actually works — then build the system around it, not the other way round.',
  },
  {
    icon: IconUserCheck,
    title: 'Long-term partnership',
    description:
      'Our anchor clients sign multi-year agreements because we stay accountable after go-live.',
  },
];

const faqs = [
  {
    q: 'Is UXQode a fund manager?',
    a: "No. UXQode is the technology partner — we build and operate the software fund managers, capital markets firms, and banks run their operations on. We don't manage client assets.",
  },
  {
    q: "What does 'operators, not developers' mean?",
    a: 'Our own platforms run live, regulated funds today. That means every system we ship has to survive audits, regulators, month-end, and real users, because we depend on it working too — not just the client.',
  },
  {
    q: 'How big is the UXQode team?',
    a: 'UXQode has trained and developed more than 50 software engineers in-house since 2017, with 20+ engineers, designers, and product thinkers currently based in Singapore.',
  },
];

export function About() {
  return (
    <div className={classes.page}>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="xl">
          <Reveal direction="fade">
            <span className={classes.eyebrow}>About UXQode</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={classes.heroTitle}>
              We are <span className={classes.heroAccent}>operators</span>, not just developers
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className={classes.heroLead}>
              Founded in 2017, UXQode has grown from an enterprise software consultancy into a
              product engineering firm behind full-scale fund administration platforms used by
              licensed fund managers and capital markets firms.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className={classes.heroStats}>
              {facts.map((f) => (
                <div key={f.label} className={classes.heroStat}>
                  <span className={classes.heroStatValue}>{f.value}</span>
                  <span className={classes.heroStatLabel}>{f.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Story */}
      <section className={classes.section}>
        <Container size="xl">
          <Reveal direction="up">
            <Text className={classes.priceSub} maw={720} mx="auto" ta="center" fz={16}>
              Our founding team&apos;s background spans enterprise software delivery for companies
              in Australia, including <strong>Verdikt</strong>, <strong>Bova Compounding</strong>,{' '}
              <strong>Lonely Kids Club</strong>, and <strong>Tradiee</strong> — experience
              we&apos;ve carried into building institutional-grade financial systems. Along the
              way, we&apos;ve trained and developed more than 50 software engineers in-house.
            </Text>
            <Text className={classes.priceSub} mt={16} maw={720} mx="auto" ta="center" fz={16}>
              Our own platforms run live, regulated funds today. That changes how we build: every
              system we ship has to survive audits, regulators, month-end, and real users — because
              ours do.
            </Text>
          </Reveal>
        </Container>
      </section>

      {/* Why UXQode */}
      <section className={`${classes.section} ${classes.sectionAlt}`}>
        <Container size="xl">
          <SectionHeading
            index="01"
            label="Why UXQode"
            title={
              <>
                Software that has to{' '}
                <span className={classes.heroAccent}>survive Monday morning</span>
              </>
            }
          />
          <Reveal direction="up">
            <div className={classes.grid}>
              {reasons.map((r) => (
                <div key={r.title} className={classes.card}>
                  <div className={classes.accentBar} aria-hidden="true" />
                  <div className={classes.cardTop}>
                    <ThemeIcon
                      size={50}
                      radius={0}
                      variant="gradient"
                      gradient={{ from: 'indigo', to: 'blue' }}
                      className={classes.cardIcon}
                    >
                      <r.icon size={24} stroke={1.7} />
                    </ThemeIcon>
                  </div>
                  <Text component="h3" className={classes.cardTitle}>
                    {r.title}
                  </Text>
                  <Text className={classes.cardDesc}>{r.description}</Text>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <FAQ index="02" label="FAQ" title="About UXQode — questions, answered" items={faqs} />

      {/* CTA */}
      <section className={classes.ctaBand}>
        <Container size="xl">
          <div className={classes.ctaInner}>
            <div className={classes.ctaGlow} aria-hidden="true" />
            <h2 className={classes.ctaTitle}>Meet the team that builds it</h2>
            <p className={classes.ctaText}>
              20+ engineers, designers and product thinkers based in Singapore — the people who ship
              our work, including aama.io.
            </p>
            <div className={classes.ctaActions}>
              <Button
                component={Link}
                href="/teams"
                size="lg"
                radius={0}
                className={classes.btnPrimary}
                rightSection={<IconArrowRight size={18} />}
              >
                Meet the team
              </Button>
              <Button
                component={Link}
                href="/#contact-us"
                size="lg"
                radius={0}
                className={classes.btnGhost}
              >
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
