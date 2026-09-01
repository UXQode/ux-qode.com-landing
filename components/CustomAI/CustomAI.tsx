import Link from 'next/link';
import {
  IconArrowRight,
  IconFileCheck,
  IconShieldCheck,
  IconStack2,
  IconTargetArrow,
} from '@tabler/icons-react';
import { Button, Container, Text, ThemeIcon } from '@mantine/core';
import { FAQ } from '@/components/FAQ/FAQ';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import classes from '@/components/service/service.module.css';

const phases = [
  {
    title: 'Discovery & workflow mapping',
    desc: '2–4 weeks. We embed with your operations team and map how work actually happens — which documents arrive, who touches them, where errors occur, where time actually goes. You get a documented workflow map and a quantified automation opportunity, valuable even before any software is built.',
  },
  {
    title: 'Pilot on your real documents',
    desc: '4–8 weeks. We automate one high-volume, high-pain workflow end-to-end using your actual historical documents — not demo data. You measure the results against your own baseline before any long contract.',
  },
  {
    title: 'Production build & integration',
    desc: 'We harden the pilot into a production system integrated with your ERP, accounting system, core banking platform, or data warehouse — built to your security, access, and audit standards.',
  },
  {
    title: 'Expand, operate, and improve',
    desc: 'Workflow by workflow, the automated footprint grows. We stay engaged after go-live — monitoring accuracy, tuning on your team’s corrections — under long-term agreements.',
  },
];

const whyCustom = [
  {
    icon: IconTargetArrow,
    title: 'Your workflow is the spec',
    description:
      'The system matches how your business actually operates, including the exceptions and edge cases that generic tools ignore.',
  },
  {
    icon: IconStack2,
    title: 'Your systems are the foundation',
    description:
      "We integrate with what you run today rather than forcing a migration — though when a migration is the right answer, we've done those too, on live regulated operations, without downtime.",
  },
  {
    icon: IconShieldCheck,
    title: 'Your controls are preserved',
    description:
      'Approval chains, segregation of duties, audit requirements — encoded, not worked around.',
  },
  {
    icon: IconFileCheck,
    title: 'You own the outcome',
    description:
      'Clear IP and deployment arrangements, including private deployment where confidentiality or regulation demands it.',
  },
];

const industries = [
  'Fund managers & administrators',
  'Banks & lenders',
  'Fintechs',
  'Insurance',
  'Corporates & enterprises',
  'Accounting & professional services firms',
  'Trading, logistics & supply chain',
];

const faqs = [
  {
    q: 'Do you only work with fund managers?',
    a: 'No. The same discovery-led method transfers to banks, fintechs, insurers, corporates, and professional services firms — anywhere documents arrive that people re-type, check, and reconcile.',
  },
  {
    q: 'How long does a pilot take?',
    a: '4–8 weeks on one high-volume, high-pain workflow, using your actual historical documents — not demo data. You measure the results against your own baseline before any long-term commitment.',
  },
  {
    q: 'Who owns the resulting software?',
    a: 'Clear IP and deployment arrangements are agreed up front, including private deployment where confidentiality or regulation demands it.',
  },
  {
    q: 'What happens after go-live?',
    a: "We stay engaged under long-term agreements — monitoring accuracy, tuning on your team's corrections, and expanding the automated footprint workflow by workflow.",
  },
];

export function CustomAI() {
  return (
    <div className={classes.page}>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="lg">
          <Reveal direction="fade">
            <span className={classes.eyebrow}>
              Custom AI Solutions for Fintechs &amp; Enterprises
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={classes.heroTitle}>
              What we did for the fund industry,{' '}
              <span className={classes.heroAccent}>we can build for yours</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className={classes.heroLead}>
              The AI back office wasn&apos;t built in a lab — it was built inside a real, regulated
              industry by engineers sitting with real operations teams, mapping real workflows, and
              automating them one by one. That method transfers. Every industry has its own version
              of the same problem: documents in, manual processing, reconciliation between systems,
              reporting out. We build it custom, around your workflow, on your systems.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className={classes.heroCtas}>
              <Button
                component={Link}
                href="/#contact-us"
                size="lg"
                radius={0}
                className={classes.btnPrimary}
                rightSection={<IconArrowRight size={18} />}
              >
                Book a discovery call
              </Button>
              <Button
                component="a"
                href="#how-we-work"
                size="lg"
                radius={0}
                className={classes.btnGhost}
              >
                How we work
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* How we work */}
      <section className={classes.section} id="how-we-work">
        <Container size="lg">
          <SectionHeading
            index="01"
            label="How we work with you"
            title="Four phases, no long contract before you've seen it work"
          />
          <div className={classes.steps}>
            {phases.map((p, i) => (
              <div key={p.title} className={classes.step}>
                <div className={classes.stepNum}>{String(i + 1).padStart(2, '0')}</div>
                <Text component="h4" className={classes.stepTitle}>
                  {p.title}
                </Text>
                <Text className={classes.stepDesc}>{p.desc}</Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why custom */}
      <section className={`${classes.section} ${classes.sectionAlt}`}>
        <Container size="lg">
          <SectionHeading
            index="02"
            label="Why custom beats off-the-shelf"
            title="Off-the-shelf tools break at the edges — that's where the cost lives"
          />
          <Reveal direction="up">
            <div className={classes.grid4}>
              {whyCustom.map((w) => (
                <div key={w.title} className={classes.card}>
                  <div className={classes.accentBar} aria-hidden="true" />
                  <div className={classes.cardTop}>
                    <ThemeIcon
                      size={50}
                      radius={0}
                      variant="gradient"
                      gradient={{ from: 'indigo', to: 'blue' }}
                      className={classes.cardIcon}
                    >
                      <w.icon size={24} stroke={1.7} />
                    </ThemeIcon>
                  </div>
                  <Text component="h3" className={classes.cardTitle}>
                    {w.title}
                  </Text>
                  <Text className={classes.cardDesc}>{w.description}</Text>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Industries */}
      <section className={classes.section}>
        <Container size="lg">
          <SectionHeading
            index="03"
            label="Where this applies"
            title="If documents arrive that people re-type, check, and reconcile — we can automate it"
          />
          <Reveal delay={80}>
            <div className={classes.chipList} style={{ justifyContent: 'center' }}>
              {industries.map((label) => (
                <span key={label} className={classes.chip}>
                  <span className={classes.chipDot} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <FAQ index="04" label="FAQ" title="Custom AI solutions — questions, answered" items={faqs} />

      {/* CTA */}
      <section className={classes.ctaBand}>
        <Container size="lg">
          <div className={classes.ctaInner}>
            <div className={classes.ctaGlow} aria-hidden="true" />
            <h2 className={classes.ctaTitle}>Tell us about your workflow</h2>
            <p className={classes.ctaText}>
              A 30-minute discovery call is enough to know if there&apos;s a fast, low-risk pilot
              worth running on your own documents.
            </p>
            <div className={classes.ctaActions}>
              <Button
                component={Link}
                href="/#contact-us"
                size="lg"
                radius={0}
                className={classes.btnPrimary}
                rightSection={<IconArrowRight size={18} />}
              >
                Book a discovery call
              </Button>
              <Button
                component={Link}
                href="/solutions"
                size="lg"
                radius={0}
                className={classes.btnGhost}
              >
                See all solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
