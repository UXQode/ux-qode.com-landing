import {
  IconArrowRight,
  IconProgressCheck,
  IconRoute,
  IconScale,
  IconShieldLock,
  IconSitemap,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Button, Container, Text, ThemeIcon } from '@mantine/core';
import { FAQ } from '@/components/FAQ/FAQ';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { FintechBand } from '@/components/service/FintechBand';
import { PricingCard, PricingTier } from '@/components/service/PricingCard';
import classes from '@/components/service/service.module.css';

const UXQODE = 'https://uxqode.co';

const capabilities = [
  {
    icon: IconRoute,
    title: 'Technical Strategy & Roadmap',
    description:
      'Translate business goals into a pragmatic technology roadmap — what to build, in what order, and what to deliberately defer.',
  },
  {
    icon: IconSitemap,
    title: 'Architecture & Scalability',
    description:
      'Design systems that hold up as you grow — clean architecture, sensible cloud, and a plan for the load you actually expect.',
  },
  {
    icon: IconUsersGroup,
    title: 'Team Building & Hiring',
    description:
      'Define the org you need, write the scorecards, run the technical interviews, and mentor your engineers as they ramp.',
  },
  {
    icon: IconProgressCheck,
    title: 'Delivery & Engineering Process',
    description:
      'Install the rituals that make shipping predictable — planning, CI/CD, code review, and metrics leadership can trust.',
  },
  {
    icon: IconShieldLock,
    title: 'Security & Compliance',
    description:
      'Bake in a security baseline and the controls auditors ask for — SOC 2, ISO, MAS — before they become a fire drill.',
  },
  {
    icon: IconScale,
    title: 'Vendor & Build-vs-Buy',
    description:
      'Cut through vendor pitches and make defensible build-vs-buy calls, so budget goes where it creates real leverage.',
  },
];

const subscription: PricingTier[] = [
  {
    name: 'Advisory',
    price: '$2,500',
    period: '/ month',
    blurb:
      'A few hours a week of senior guidance for founders who mostly need direction, not hands on keys.',
    features: [
      'Weekly strategy & roadmap reviews',
      'Architecture & tooling guidance',
      'Async support (Slack / email)',
      'Monthly leadership report',
    ],
    ctaLabel: 'Start advisory',
    ctaHref: UXQODE,
  },
  {
    name: 'Embedded',
    price: '$6,500',
    period: '/ month',
    featured: true,
    badge: 'Most popular',
    blurb: '1–2 days a week, hands-on. We lead your engineering while you focus on the business.',
    features: [
      'Everything in Advisory',
      'Hands-on technical leadership',
      'Hiring & interviewing your team',
      'Vendor & build-vs-buy decisions',
      'Sprint planning & delivery oversight',
    ],
    ctaLabel: 'Book a call',
    ctaHref: UXQODE,
  },
  {
    name: 'Scale',
    price: 'Custom',
    blurb:
      'Multiple days a week across product, security and org — for teams in a critical growth or raise phase.',
    features: [
      'Everything in Embedded',
      'Multi-day weekly engagement',
      'Security & compliance ownership',
      'Board & investor reporting',
      'Priority on-call advisory',
    ],
    ctaLabel: 'Talk to us',
    ctaHref: UXQODE,
  },
];

const packaged: PricingTier[] = [
  {
    name: 'Tech Due Diligence',
    from: true,
    price: '$4,000',
    period: 'one-off',
    blurb:
      'A 2-week assessment of a codebase, team and roadmap — for investors or founders who need the truth.',
    features: [
      '2-week engagement',
      'Code, architecture & security review',
      'Team & process assessment',
      'Risk report + prioritised actions',
    ],
    ctaLabel: 'Request diligence',
    ctaHref: UXQODE,
  },
  {
    name: 'Architecture Sprint',
    from: true,
    price: '$7,500',
    period: 'one-off',
    featured: true,
    badge: 'Most requested',
    blurb:
      'A focused 3–4 week deep-dive that leaves you with a target architecture and a delivery plan.',
    features: [
      '3–4 week engagement',
      'Target architecture & scalability plan',
      'Build-vs-buy & vendor shortlist',
      'Costed delivery roadmap',
    ],
    ctaLabel: 'Scope a sprint',
    ctaHref: UXQODE,
  },
  {
    name: 'CTO Kickstart',
    from: true,
    price: '$12,000',
    period: 'one-off',
    blurb:
      'A 6-week engagement to stand up engineering foundations from zero — stack, process and first hires.',
    features: [
      '6-week engagement',
      'Stack, CI/CD & environments set up',
      'Security & compliance baseline',
      'First 1–2 engineers hired',
    ],
    ctaLabel: 'Get started',
    ctaHref: UXQODE,
  },
];

const steps = [
  {
    title: 'Discovery call',
    desc: 'A 30-minute call to understand your stage, goals and where the technical risk sits.',
  },
  {
    title: 'Diagnostic & plan',
    desc: 'We assess your stack, team and roadmap, then agree the engagement and outcomes.',
  },
  {
    title: 'Embed & execute',
    desc: 'We plug into your team and ship — leadership, hiring and delivery, week over week.',
  },
  {
    title: 'Handover & scale',
    desc: 'We document, mentor and hand the wheel to your team as it grows into the role.',
  },
];

const faqs = [
  {
    q: 'What is a fractional CTO?',
    a: 'A fractional CTO is an experienced technology leader who works with your company part-time, providing architecture, hiring, delivery and security leadership without the cost of a full-time executive hire.',
  },
  {
    q: 'How much does a fractional CTO cost?',
    a: 'UXQode offers fractional CTO engagements as a monthly subscription — from about $2,500/month (Advisory) to $6,500/month (Embedded) — or as fixed-scope packages such as a Tech Due Diligence from $4,000 or an Architecture Sprint from $7,500. Pricing is indicative and confirmed after a discovery call.',
  },
  {
    q: 'Should I choose a subscription or a packaged engagement?',
    a: 'Choose a subscription for ongoing technical leadership that scales with your stage. Choose a packaged engagement for a defined outcome with a fixed price and end date — such as due diligence, an architecture sprint, or standing up engineering from scratch.',
  },
  {
    q: 'How quickly can a fractional CTO start?',
    a: 'Most engagements go live within a week of the first discovery call.',
  },
  {
    q: 'Do you only work with fintech companies?',
    a: 'No. UXQode works across industries, and brings especially deep fintech and fund-tech expertise from building aama.io.',
  },
];

const heroStats = [
  { value: '15+ yrs', label: 'Avg leadership' },
  { value: '48 hrs', label: 'To get started' },
  { value: 'Singapore', label: 'Based in' },
];

export function FractionalCTO() {
  return (
    <div className={classes.page}>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="xl">
          <Reveal direction="fade">
            <span className={classes.eyebrow}>Fractional CTO · uxqode.co</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={classes.heroTitle}>
              Senior technical leadership, <span className={classes.heroAccent}>on demand</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className={classes.heroLead}>
              A seasoned CTO embedded in your team — without the full-time hire. UXQode gives
              founders and scale-ups the architecture, hiring and delivery leadership to ship with
              confidence, as a monthly subscription or a fixed-scope engagement.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className={classes.heroCtas}>
              <Button
                component="a"
                href={UXQODE}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                radius={0}
                className={classes.btnPrimary}
                rightSection={<IconArrowRight size={18} />}
              >
                Book a discovery call
              </Button>
              <Button
                component="a"
                href="#pricing"
                size="lg"
                radius={0}
                className={classes.btnGhost}
              >
                See pricing
              </Button>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className={classes.heroStats}>
              {heroStats.map((s) => (
                <div key={s.label} className={classes.heroStat}>
                  <span className={classes.heroStatValue}>{s.value}</span>
                  <span className={classes.heroStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Capabilities */}
      <section className={classes.section}>
        <Container size="xl">
          <SectionHeading
            index="01"
            label="What you get"
            title={
              <>
                Everything a great CTO does —{' '}
                <span className={classes.heroAccent}>none of the overhead</span>
              </>
            }
            description="One accountable technical leader covering the work that usually needs three hires, plugged into your team from week one."
          />
          <div className={classes.grid}>
            {capabilities.map((c, i) => (
              <div key={c.title} className={classes.card}>
                <div className={classes.accentBar} aria-hidden="true" />
                <div className={classes.cardTop}>
                  <ThemeIcon
                    size={50}
                    radius={0}
                    variant="gradient"
                    gradient={{ from: 'cyan', to: 'blue' }}
                    className={classes.cardIcon}
                  >
                    <c.icon size={24} stroke={1.7} />
                  </ThemeIcon>
                  <span className={classes.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <Text component="h3" className={classes.cardTitle}>
                  {c.title}
                </Text>
                <Text className={classes.cardDesc}>{c.description}</Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fintech credibility band */}
      <FintechBand
        withSection
        variant="compact"
        title={
          <>
            A CTO who&apos;s shipped <span className={classes.heroAccent}>regulated fintech</span>
          </>
        }
        body={
          <>
            Beyond general engineering leadership, UXQode brings deep fund-tech and fintech
            expertise — we&apos;re the maker of <strong>aama.io</strong>, and we&apos;ve taken the
            full fund lifecycle through NAV, compliance and audit in production. If you operate in a
            regulated domain, that&apos;s a CTO who&apos;s seen the hard parts before.
          </>
        }
        ctas={[{ label: 'Explore aama.io', href: 'https://aama.io', external: true }]}
      />

      {/* Pricing */}
      <section className={`${classes.section} ${classes.sectionAlt}`} id="pricing">
        <Container size="xl">
          <SectionHeading
            index="02"
            label="Engagement & pricing"
            title={
              <>
                Subscribe monthly, or <span className={classes.heroAccent}>scope a package</span>
              </>
            }
            description="Ongoing leadership as a subscription, or a fixed-scope engagement with a clear deliverable. Indicative pricing — final scope is confirmed on a call."
          />

          <Reveal direction="up">
            <div className={classes.priceLabel}>Subscription · ongoing leadership</div>
            <h3 className={classes.priceHeading}>Monthly retainer</h3>
            <p className={classes.priceSub}>
              A standing technical leader for your team. Scale the days up or down as your stage
              changes — cancel or pause anytime.
            </p>
            <div className={classes.pricingGrid}>
              {subscription.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </div>
          </Reveal>

          <div style={{ height: 'clamp(48px, 6vw, 80px)' }} />

          <Reveal direction="up">
            <div className={classes.priceLabel}>Packaged · fixed scope</div>
            <h3 className={classes.priceHeading}>One-off engagements</h3>
            <p className={classes.priceSub}>
              A defined outcome, a fixed price, a clear end date. Ideal for a raise, a rebuild
              decision, or standing engineering up from scratch.
            </p>
            <div className={classes.pricingGrid}>
              {packaged.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </div>
            <p className={classes.priceNote}>
              Prices in USD and indicative. Engagements are tailored after a discovery call —
              multi-month and equity-inclusive arrangements available.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Process */}
      <section className={classes.section}>
        <Container size="xl">
          <SectionHeading
            index="03"
            label="How it works"
            title={
              <>
                From first call to <span className={classes.heroAccent}>shipping</span>
              </>
            }
            description="A lightweight start — most engagements are live within a week of the first conversation."
          />
          <div className={classes.steps}>
            {steps.map((s, i) => (
              <div key={s.title} className={classes.step}>
                <div className={classes.stepNum}>{String(i + 1).padStart(2, '0')}</div>
                <Text component="h3" className={classes.stepTitle}>
                  {s.title}
                </Text>
                <Text className={classes.stepDesc}>{s.desc}</Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ index="04" label="FAQ" title="Fractional CTO — questions, answered" items={faqs} />

      {/* CTA */}
      <section className={classes.ctaBand}>
        <Container size="xl">
          <div className={classes.ctaInner}>
            <div className={classes.ctaGlow} aria-hidden="true" />
            <h2 className={classes.ctaTitle}>Get a CTO in your corner this week</h2>
            <p className={classes.ctaText}>
              Tell us where you are and what&apos;s at stake. We&apos;ll come back with the
              engagement that fits — usually within a day.
            </p>
            <div className={classes.ctaActions}>
              <Button
                component="a"
                href={UXQODE}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                radius={0}
                className={classes.btnPrimary}
                rightSection={<IconArrowRight size={18} />}
              >
                Book a discovery call
              </Button>
              <Button
                component="a"
                href="mailto:dev@ux-qode.com"
                size="lg"
                radius={0}
                className={classes.btnGhost}
              >
                Email the team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
