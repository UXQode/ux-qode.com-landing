import Link from 'next/link';
import { IconArrowRight, IconArrowUpRight, IconCheck } from '@tabler/icons-react';
import { Anchor, Button, Container, Text } from '@mantine/core';
import { FAQ } from '@/components/FAQ/FAQ';
import { Reveal } from '@/components/Reveal/Reveal';
import classes from '@/components/service/service.module.css';
import { Gauge } from '@/components/Stats/Gauge';
import statsClasses from '@/components/Stats/Stats.module.css';

const technicalHighlights = [
  'Full double-entry fund accounting with journal entry automation across 17 security asset classes.',
  'Multi-currency architecture that locks foreign and local currency values at transaction time for audit-proof reporting.',
  'An automated pricing engine integrating market data vendors and central bank FX rates, with weekend/holiday fallback logic and audit-trail stale-price flagging.',
  'SFRS(I) 9-compliant financial reporting for Singapore-domiciled funds.',
];

const matrixResults = [
  '5x growth absorbed with zero added headcount — daily transactions and client volume grew roughly fivefold, processed by the same operations team.',
  '1–2 hours saved every day by automating redundant processes and eliminating manual authorization of client actions.',
  'Computation errors eliminated — redemption proceeds, unit allocation, and fee calculations now processed accurately by the system.',
  'Payment gateway integrations in weeks, not months — including automated e-mandate deductions and automatic reconciliation across providers.',
  'Management reporting (MIS) where none existed — saving hours of manual report assembly each month.',
  'Regulatory-grade KYC built in — onboarding aligned with current AML/CFT regulation.',
  'Improved market standing — usability and transparency strengthened the client’s position among competing open-end schemes.',
];

const gauges = [
  { percent: 100, value: 5, suffix: 'x', caption: 'Growth absorbed, zero added headcount' },
  {
    percent: 100,
    value: 1.5,
    decimals: 1,
    suffix: ' hrs',
    caption: 'Saved every day, per operator',
  },
  {
    percent: 100,
    value: 0,
    staticLabel: '0 errors',
    caption: 'Computation errors, post-migration',
  },
  { percent: 100, value: 0, staticLabel: 'AML/CFT', caption: 'Regulatory-grade KYC built in' },
];

const servingClients = [
  'Multiple licensed fund managers run their fund accounting and administration on our platform under long-term agreements — including a 10-year contract with our anchor client.',
  'Hinode, our first Singapore client on aama.io, runs a complex multi-asset, multi-currency portfolio on the platform.',
  'Supporting US Delaware SPV structures with fund services and tax-layer coordination.',
];

const faqs = [
  {
    q: 'How long did the Matrix Mutual migration take?',
    a: 'The client-facing portal and related back-office functions went live in May 2024. As with any fund system replacement, timelines depend on data volume and integration count — a discovery call scopes yours.',
  },
  {
    q: 'Was there downtime during the migration?',
    a: 'No. Matrix Mutual replaced the legacy system mid-flight, on a live scheme open to the public, with zero downtime for investors — the same approach we bring to every legacy migration.',
  },
  {
    q: 'Do you take on similar legacy fund system migrations?',
    a: 'Yes. Legacy migration is one of our core solutions — moving fund managers off spreadsheets, aging vendor software, and in-house tools, with historical data migrated cleanly.',
  },
];

export function CaseStudy() {
  return (
    <div className={classes.page}>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="lg">
          <Reveal direction="fade">
            <span className={classes.eyebrow}>What We&apos;ve Done</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={classes.heroTitle}>
              Built a full fund administration engine —{' '}
              <span className={classes.heroAccent}>and shipped it twice</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className={classes.heroLead}>
              UXQode engineered a complete fund administration platform covering the entire fund
              lifecycle: LP onboarding and KYC, capital calls and distributions, fund accounting,
              investor portals, deal-flow CRM, and SPV management. The same core engine now powers
              two products — including{' '}
              <Anchor href="https://aama.io" target="_blank" rel="noopener noreferrer" c="#3ac1ce">
                aama.io
              </Anchor>
              , our Singapore-focused fund administration platform.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className={classes.section}>
        <Container size="lg">
          <Reveal direction="up">
            <div className={statsClasses.gaugeGrid}>
              {gauges.map((g) => (
                <Gauge key={g.caption} {...g} />
              ))}
            </div>
          </Reveal>

          <Reveal direction="up">
            <div className={classes.priceLabel} style={{ marginTop: 'clamp(56px, 6vw, 88px)' }}>
              Technical highlights
            </div>
            <ul className={classes.priceList}>
              {technicalHighlights.map((item) => (
                <li key={item} className={classes.priceFeat}>
                  <IconCheck size={16} className={classes.priceCheck} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up">
            <div className={classes.priceLabel} style={{ marginTop: 'clamp(56px, 6vw, 88px)' }}>
              Case study · Matrix Mutual, May 2024
            </div>
            <h3 className={classes.priceHeading}>
              Replacing a legacy mutual fund system, mid-flight
            </h3>
            <p className={classes.priceSub}>
              A licensed capital markets company running a public open-end mutual fund scheme was
              held back by a legacy vendor system riddled with recurring defects and an architecture
              that resisted new integrations. UXQode replaced the client-facing portal and related
              back-office functions with Matrix Mutual — mid-flight, on a live scheme open to the
              public.
            </p>
            <ul className={classes.priceList} style={{ marginTop: 20 }}>
              {matrixResults.map((item) => (
                <li key={item} className={classes.priceFeat}>
                  <IconCheck size={16} className={classes.priceCheck} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={classes.quote}>
              <Text className={classes.quoteText}>
                &ldquo;We have noted significant increase in efficiency of Operations Teams along
                with quality of Customer Experience. With daily transactions and clients increasing
                around 5 folds, we are able to process all these with the same number of
                staff.&rdquo;
              </Text>
              <div className={classes.quoteAttribution}>
                — Operations Team, licensed fund management client
              </div>
            </div>
          </Reveal>

          <Reveal direction="up">
            <div className={classes.priceLabel} style={{ marginTop: 'clamp(56px, 6vw, 88px)' }}>
              Serving clients across markets
            </div>
            <ul className={classes.priceList}>
              {servingClients.map((item) => (
                <li key={item} className={classes.priceFeat}>
                  <IconCheck size={16} className={classes.priceCheck} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up">
            <div className={classes.priceLabel} style={{ marginTop: 'clamp(56px, 6vw, 88px)' }}>
              Enterprise banking automation
            </div>
            <p className={classes.priceSub}>
              Beyond fund administration, UXQode builds process automation for banks — including a{' '}
              <strong>Workflow Design Studio</strong>, a BPM platform built on Node-RED that lets
              banks design, deploy, and manage operational workflows (loan processing, insurance
              workflows, approvals) without vendor lock-in.
            </p>
            <Anchor
              href="https://aama.io"
              target="_blank"
              rel="noopener noreferrer"
              underline="never"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 12,
                fontWeight: 700,
                color: '#3ac1ce',
              }}
            >
              Explore aama.io <IconArrowUpRight size={16} />
            </Anchor>
          </Reveal>
        </Container>
      </section>

      <FAQ index="02" label="FAQ" title="This case study — questions, answered" items={faqs} />

      {/* CTA */}
      <section className={classes.ctaBand}>
        <Container size="lg">
          <div className={classes.ctaInner}>
            <div className={classes.ctaGlow} aria-hidden="true" />
            <h2 className={classes.ctaTitle}>Want results like this on your own operation?</h2>
            <p className={classes.ctaText}>
              Whether it&apos;s a legacy migration or the AI back office, we start with a discovery
              call and your own documents — not a demo.
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
                Talk to our team
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
