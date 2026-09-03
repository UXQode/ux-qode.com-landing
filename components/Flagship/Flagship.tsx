import Link from 'next/link';
import {
  IconArrowRight,
  IconBug,
  IconCalculator,
  IconCategory2,
  IconChecklist,
  IconClockHour4,
  IconEye,
  IconHistory,
  IconLock,
  IconMoodSmile,
  IconRocket,
  IconScan,
  IconUpload,
  IconUsers,
  IconUsersGroup,
  IconUserShield,
} from '@tabler/icons-react';
import { Button, Container, Text, ThemeIcon } from '@mantine/core';
import { FAQ } from '@/components/FAQ/FAQ';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import classes from '@/components/service/service.module.css';
import { PipelineFlow } from './PipelineFlow';

const pipelineSteps = [
  {
    icon: IconUpload,
    title: 'Drop it in',
    description:
      'Any document, any format. Drag a file in, forward an email, or connect a folder — invoices, bank statements, custodian statements, broker confirms, fee notes, remittance advices. No templates to configure, no breakage when a bank redesigns its statement layout.',
  },
  {
    icon: IconScan,
    title: 'AI extraction',
    description:
      'Every line, every field: dates, counterparties, account numbers, amounts, currencies, references, line items, fees, taxes, running balances — across multi-page, multi-currency, mixed-quality scans.',
  },
  {
    icon: IconChecklist,
    title: 'Validation',
    description:
      'Checked against itself and your records before anything touches your books — totals, opening balances, duplicates, counterparty master data. Anything that fails validation never posts silently; it goes to a human.',
  },
  {
    icon: IconCategory2,
    title: 'Classify & post',
    description:
      'The AI codes each transaction against your chart of accounts and posting rules, learned from your history and refined by your team. Complete journal entries, ready for one-click approval or straight-through posting.',
  },
  {
    icon: IconUsersGroup,
    title: 'Exceptions to humans',
    description:
      "Anything ambiguous or first-of-its-kind routes to your team with the AI's analysis attached — what it found, what it's unsure about, what it recommends. Every resolution teaches the system.",
  },
  {
    icon: IconHistory,
    title: 'A complete audit trail',
    description:
      'Every extraction, classification, posting, and override is logged and traceable back to the source document — down to the exact region of the page a figure came from.',
  },
];

const reconciliation = [
  {
    title: 'Line-level matching',
    desc: 'Holdings, trades, cash movements, dividends, fees, and corporate actions — including partial matches, timing differences, one-to-many splits, and FX conversions.',
  },
  {
    title: 'Break detection with explanation',
    desc: "Unmatched items are surfaced with the AI's analysis of why they broke — a missed fee accrual, a settlement date mismatch, an FX rate difference — not just a list to hunt through.",
  },
  {
    title: 'Position and cash proofs',
    desc: 'Holdings and balances tied out automatically at each period-end, with every movement explained.',
  },
  {
    title: 'Period-end in minutes',
    desc: 'What was a multi-day manual exercise across spreadsheets becomes a supervised review of a short exceptions list.',
  },
];

const trust = [
  {
    icon: IconUserShield,
    title: 'Human-in-the-loop by design',
    description:
      "You define confidence thresholds, approval workflows, and four-eyes controls. The AI accelerates your people; it doesn't bypass your controls.",
  },
  {
    icon: IconLock,
    title: 'Your data stays yours',
    description:
      'Client documents and data are never used to train models for anyone else. Deployment options range from cloud to fully private environments.',
  },
  {
    icon: IconCalculator,
    title: 'Deterministic where it matters',
    description:
      'The AI handles reading, classification, and matching — the numbers are computed by the same deterministic accounting core that runs live funds today. No hallucinated figures in your ledger.',
  },
  {
    icon: IconEye,
    title: 'Explainability',
    description:
      'Every automated decision carries its reasoning and its source. Nothing is a black box.',
  },
];

const benefits = [
  {
    icon: IconClockHour4,
    title: 'Massive time savings',
    description:
      'Document processing and reconciliation drop from hours per day to minutes of exception review.',
  },
  {
    icon: IconBug,
    title: 'Fewer errors',
    description:
      'No transcription mistakes, no missed lines, no fatigue-driven slips at month-end.',
  },
  {
    icon: IconUsers,
    title: 'Scale without hiring',
    description:
      'Absorb growing transaction and document volumes with your existing team — the same way our platform clients absorbed 5x growth with zero added headcount.',
  },
  {
    icon: IconRocket,
    title: 'Faster closes',
    description:
      'Daily processing keeps books current, so month-end becomes a review, not a scramble.',
  },
  {
    icon: IconMoodSmile,
    title: 'Happier teams',
    description: 'Your best people move from typing to analysis, review, and client work.',
  },
];

const faqs = [
  {
    q: 'Does the AI post directly to our ledger?',
    a: 'High-confidence, routine items can post straight-through under thresholds you control; everything else drafts a complete journal entry for one-click approval. You decide where that line sits.',
  },
  {
    q: 'Is our data used to train models for other clients?',
    a: 'No. Client documents and data are never used to train models for anyone else. Deployment options range from cloud to fully private environments, depending on your regulatory posture.',
  },
  {
    q: "What happens when a document doesn't match anything on file?",
    a: "It routes to your team as an exception with the AI's analysis attached — what it found, what it's unsure about, and what it recommends. Every resolution teaches the system, so the exception rate falls month over month.",
  },
  {
    q: 'How long does it take to go live?',
    a: 'A pilot on your own historical documents typically runs 4–8 weeks, so you see extraction accuracy, straight-through rate, and time saved on your own data before any long-term commitment.',
  },
];

export function Flagship() {
  return (
    <div className={classes.page}>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="xl">
          <Reveal direction="fade">
            <span className={classes.eyebrow}>Flagship · AI-Powered Back-Office Automation</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={classes.heroTitle}>
              Stop keying in documents.{' '}
              <span className={classes.heroAccent}>Start dropping them in.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className={classes.heroLead}>
              The back office of every fund, financial institution, and enterprise runs on the same
              painful loop: documents arrive and skilled people spend their days transcribing them
              into systems, checking their own work, then reconciling one system against another.
              We&apos;ve eliminated that loop. UXQode&apos;s AI-powered back office reads your
              documents, understands them, posts them, and reconciles them — with your team
              supervising exceptions instead of doing data entry.
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
                Book a demo
              </Button>
              <Button
                component="a"
                href="#pipeline"
                size="lg"
                radius={0}
                className={classes.btnGhost}
              >
                See how it works
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* How it works */}
      <section className={classes.section} id="pipeline">
        <Container size="xl">
          <SectionHeading
            index="01"
            label="How the document pipeline works"
            title="From inbox to posted, reconciled entry"
            description="Six steps, one supervised flow — no templates to configure, and nothing posts silently."
          />

          <Reveal delay={120}>
            <div className={classes.pipelineFrame}>
              <PipelineFlow />
            </div>
          </Reveal>

          <div className={classes.grid} style={{ marginTop: 'clamp(28px, 3vw, 40px)' }}>
            {pipelineSteps.map((s, i) => (
              <div key={s.title} className={classes.card}>
                <div className={classes.accentBar} aria-hidden="true" />
                <div className={classes.cardTop}>
                  <ThemeIcon
                    size={50}
                    radius={0}
                    variant="gradient"
                    gradient={{ from: 'cyan', to: 'blue' }}
                    className={classes.cardIcon}
                  >
                    <s.icon size={24} stroke={1.7} />
                  </ThemeIcon>
                  <span className={classes.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <Text component="h3" className={classes.cardTitle}>
                  {s.title}
                </Text>
                <Text className={classes.cardDesc}>{s.description}</Text>
              </div>
            ))}
          </div>

          {/* Reconciliation */}
          <Reveal direction="up">
            <div className={classes.priceLabel} style={{ marginTop: 'clamp(56px, 6vw, 88px)' }}>
              Custodian &amp; bank reconciliation
            </div>
            <h3 className={classes.priceHeading}>Where back offices lose entire days</h3>
            <p className={classes.priceSub}>
              Our AI reconciliation engine matches your books against custodian and bank statements
              automatically — surfacing breaks with an explanation instead of a list to hunt
              through.
            </p>
            <div className={classes.steps}>
              {reconciliation.map((r, i) => (
                <div key={r.title} className={classes.step}>
                  <div className={classes.stepNum}>{String(i + 1).padStart(2, '0')}</div>
                  <Text component="h4" className={classes.stepTitle}>
                    {r.title}
                  </Text>
                  <Text className={classes.stepDesc}>{r.desc}</Text>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Trust & controls */}
      <section className={`${classes.section} ${classes.sectionAlt}`}>
        <Container size="xl">
          <SectionHeading
            index="02"
            label="Built for regulated institutions"
            title="Trust is the constraint we designed around"
            description="Trust is not a feature we added; it's the constraint every part of this system was built to satisfy."
          />
          <Reveal direction="up">
            <div className={classes.grid4}>
              {trust.map((t) => (
                <div key={t.title} className={classes.card}>
                  <div className={classes.accentBar} aria-hidden="true" />
                  <div className={classes.cardTop}>
                    <ThemeIcon
                      size={50}
                      radius={0}
                      variant="gradient"
                      gradient={{ from: 'violet', to: 'grape' }}
                      className={classes.cardIcon}
                    >
                      <t.icon size={24} stroke={1.7} />
                    </ThemeIcon>
                  </div>
                  <Text component="h3" className={classes.cardTitle}>
                    {t.title}
                  </Text>
                  <Text className={classes.cardDesc}>{t.description}</Text>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Benefits */}
      <section className={classes.section}>
        <Container size="xl">
          <SectionHeading
            index="03"
            label="The payoff"
            title="What this means for your operations team"
          />
          <Reveal direction="up">
            <div className={classes.grid5}>
              {benefits.map((b) => (
                <div key={b.title} className={classes.card}>
                  <div className={classes.accentBar} aria-hidden="true" />
                  <div className={classes.cardTop}>
                    <ThemeIcon
                      size={50}
                      radius={0}
                      variant="gradient"
                      gradient={{ from: 'teal', to: 'cyan' }}
                      className={classes.cardIcon}
                    >
                      <b.icon size={24} stroke={1.7} />
                    </ThemeIcon>
                  </div>
                  <Text component="h3" className={classes.cardTitle}>
                    {b.title}
                  </Text>
                  <Text className={classes.cardDesc}>{b.description}</Text>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <FAQ index="04" label="FAQ" title="AI back office — questions, answered" items={faqs} />

      {/* CTA */}
      <section className={classes.ctaBand}>
        <Container size="xl">
          <div className={classes.ctaInner}>
            <div className={classes.ctaGlow} aria-hidden="true" />
            <h2 className={classes.ctaTitle}>See the AI back office on your own documents</h2>
            <p className={classes.ctaText}>
              We&apos;ll pilot it on your actual historical documents, not a demo — so you see
              accuracy and time saved before any long-term commitment.
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
                Book a demo
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
