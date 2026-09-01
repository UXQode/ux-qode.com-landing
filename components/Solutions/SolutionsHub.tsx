import Link from 'next/link';
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBuildingBank,
  IconBuildingSkyscraper,
  IconCode,
  IconRobot,
  IconRoute,
  IconTransfer,
  IconUsersGroup,
  IconWand,
} from '@tabler/icons-react';
import { Button, Container, Text, ThemeIcon } from '@mantine/core';
import { FAQ } from '@/components/FAQ/FAQ';
import { Reveal } from '@/components/Reveal/Reveal';
import { FintechBand } from '@/components/service/FintechBand';
import classes from '@/components/service/service.module.css';

const offerings = [
  {
    icon: IconRobot,
    title: 'AI back-office automation',
    description:
      'Drop-in processing of invoices, bank statements, and custodian statements — automated extraction, posting, and reconciliation with human-supervised exceptions. Our flagship.',
    href: '/solutions/ai-back-office',
  },
  {
    icon: IconWand,
    title: 'Custom AI solutions',
    description:
      'Discovery-led engagements that map your actual workflows and automate them — for fintechs, banks, insurers, corporates, and professional services firms.',
    href: '/solutions/custom-ai',
  },
  {
    icon: IconBuildingBank,
    title: 'Fund administration platforms',
    description:
      'License or deploy our proven fund administration engine — or have us build and tailor one to your regulatory environment, asset classes, and reporting standards.',
    href: '/work',
  },
  {
    icon: IconTransfer,
    title: 'Legacy migration',
    description:
      'We take fund managers off spreadsheets, aging vendor software, and in-house tools — migrating historical data cleanly with zero downtime for investors.',
    href: '/work',
  },
  {
    icon: IconBuildingSkyscraper,
    title: 'SPV formation & administration',
    description:
      'End-to-end SPV management: formation through wind-down, investor onboarding, capital calls, and compliant financial reporting.',
    href: '/#contact-us',
  },
  {
    icon: IconRoute,
    title: 'Banking process automation',
    description:
      'Workflow and BPM platforms that digitize loan processing, approvals, and back-office operations on open-source foundations — no per-seat licensing traps.',
    href: '/work',
  },
  {
    icon: IconCode,
    title: 'Custom enterprise fintech',
    description:
      'Investor portals, pricing engines, market data integrations, accounting automation, and AI-assisted business workflows — built by a team that operates these systems in production.',
    href: '/#contact-us',
  },
  {
    icon: IconUsersGroup,
    title: 'Dedicated engineering teams',
    description:
      'Access the team that has trained 50+ engineers and delivered institutional software across Singapore, Australia, and beyond.',
    href: '/teams',
  },
];

const faqs = [
  {
    q: 'Which solution should I start with?',
    a: 'If documents arrive that people re-type, check, and reconcile, start with the AI back office or a custom AI discovery call — both begin with a pilot on your own data before any long-term commitment.',
  },
  {
    q: 'Do you offer fixed-price engagements?',
    a: 'Yes, for defined-scope work like a discovery and workflow-mapping phase or a pilot. Larger builds and ongoing platform work are typically scoped after that first engagement.',
  },
  {
    q: "What if my need isn't listed here?",
    a: "Tell us what you're trying to solve. We build custom enterprise fintech and process automation beyond this list, and we'll say plainly if it's not a fit.",
  },
];

export function SolutionsHub() {
  return (
    <div className={classes.page}>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="lg">
          <Reveal direction="fade">
            <span className={classes.eyebrow}>Solutions</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={classes.heroTitle}>
              Eight ways to put this <span className={classes.heroAccent}>depth to work</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className={classes.heroLead}>
              From the AI back office to bespoke platform builds, every offering below is grounded
              in software we operate ourselves — not a slide deck.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className={classes.section}>
        <Container size="lg">
          <Reveal direction="up">
            <div className={classes.grid4}>
              {offerings.map((o, i) => (
                <Link
                  key={o.title}
                  href={o.href}
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
                      <o.icon size={24} stroke={1.7} />
                    </ThemeIcon>
                    <span className={classes.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <Text component="h3" className={classes.cardTitle}>
                    {o.title}
                  </Text>
                  <Text className={classes.cardDesc}>{o.description}</Text>
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
        </Container>
      </section>

      <FintechBand
        withSection
        variant="compact"
        title={
          <>
            Prefer senior leadership over a project?{' '}
            <span className={classes.heroAccent}>We do that too</span>
          </>
        }
        body={
          <>
            Bring in a <strong>fractional CTO</strong> for architecture, hiring and delivery
            leadership, or work directly with the <strong>dedicated team</strong> that ships all of
            the above.
          </>
        }
        ctas={[
          { label: 'Fractional CTO', href: '/fractional-cto', primary: true },
          { label: 'Meet the team', href: '/teams' },
        ]}
      />

      <FAQ index="02" label="FAQ" title="Solutions — questions, answered" items={faqs} />

      <section className={classes.ctaBand}>
        <Container size="lg">
          <div className={classes.ctaInner}>
            <div className={classes.ctaGlow} aria-hidden="true" />
            <h2 className={classes.ctaTitle}>Not sure which fits?</h2>
            <p className={classes.ctaText}>
              Tell us what you&apos;re trying to solve — we&apos;ll point you at the right one, or
              tell you honestly if we&apos;re not it.
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
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
