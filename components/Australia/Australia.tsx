import {
  IconArrowRight,
  IconArrowsExchange,
  IconBuildingBank,
  IconBuildingSkyscraper,
  IconCode,
  IconFileInvoice,
  IconReportMoney,
  IconRoute,
  IconShieldLock,
  IconTransfer,
  IconUsersGroup,
  IconWand,
} from '@tabler/icons-react';
import { Button, Container, Text, ThemeIcon } from '@mantine/core';
import { FAQ } from '@/components/FAQ/FAQ';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import classes from '@/components/service/service.module.css';
import styles from './Australia.module.css';
import { usePinnedReveal } from './usePinnedReveal';

const backOfficeHighlights = [
  { value: '5x', label: 'Growth absorbed, zero added headcount' },
  { value: 'Minutes', label: 'Period-end review, not a multi-day exercise' },
  { value: '0', label: 'Computation errors, post-automation' },
];

const backOfficeCapabilities = [
  {
    icon: IconFileInvoice,
    title: 'Invoice & AP Automation',
    description:
      'AI reads, validates and posts invoices and payables — coded to your chart of accounts, with anything ambiguous routed to your team instead of posted silently.',
  },
  {
    icon: IconArrowsExchange,
    title: 'Bank & Custodian Reconciliation',
    description:
      'Line-level matching of bank statements, custodian statements and cash movements, with breaks surfaced along with an explanation of why they broke.',
  },
  {
    icon: IconBuildingBank,
    title: 'Fund Administration & Accounting',
    description:
      'NAV, fund accounting and investor reporting automated on the same deterministic engine that runs live, regulated funds today — for Australian fund managers and administrators.',
  },
  {
    icon: IconReportMoney,
    title: 'Business Process Automation',
    description:
      'Approvals, month-end reporting and the manual admin that slows a finance team down — automated, with a human supervising exceptions instead of doing data entry.',
  },
];

const otherCapabilities = [
  {
    icon: IconTransfer,
    title: 'Modernise Legacy Systems',
    description:
      'Replace ageing, patched-together systems and spreadsheets with software that fits how your business actually runs — migrated cleanly, with no disruption to the people using it daily.',
  },
  {
    icon: IconWand,
    title: 'Build Intelligent Software',
    description:
      'Custom platforms, internal tools and customer-facing products with AI built in from the start — not bolted on after the fact.',
  },
  {
    icon: IconCode,
    title: 'Custom Enterprise Software',
    description:
      'Internal tools, customer portals and system integrations built to fit how your business actually works — not squeezed into a generic template.',
  },
  {
    icon: IconUsersGroup,
    title: 'Dedicated Engineering Teams',
    description:
      'Extend your engineering capacity with a proven team, without the time and cost of building one locally from scratch.',
  },
  {
    icon: IconRoute,
    title: 'Fractional CTO',
    description:
      'Senior technical leadership — architecture, hiring and delivery — as a monthly subscription or a fixed-scope engagement, for founders and scale-ups who need direction, not a full-time hire.',
  },
  {
    icon: IconShieldLock,
    title: 'Enterprise-Grade Delivery',
    description:
      'The same rigour we bring to regulated financial software — security, auditability and process discipline — applied to every engagement, regardless of industry.',
  },
];

const australianClients = ['Verdikt', 'Bova Compounding', 'Lonely Kids Club', 'Tradiee'];

const credibilityTags = [
  'AI back-office automation',
  'Fund-tech & accounting',
  'Business process automation',
  'Legacy system modernisation',
  'Fintech-grade engineering rigour',
  'Remote-first delivery',
];

const steps = [
  {
    title: 'Discovery call',
    desc: 'A short call to understand your documents, systems and where the manual effort actually sits.',
  },
  {
    title: 'Workflow & systems audit',
    desc: 'We map your invoices, statements, ledgers and legacy systems to find what’s worth automating or replacing first.',
  },
  {
    title: 'Build & automate',
    desc: 'We design and ship — back-office automation, modernised systems, or new intelligent software — as a scoped pilot on your own documents.',
  },
  {
    title: 'Scale & support',
    desc: 'Once it’s working, we roll it out across your business and stay on to support, extend and maintain it.',
  },
];

const faqs = [
  {
    q: 'What does UXQode automate for Australian businesses?',
    a: 'Our main focus in Australia is AI back-office automation — invoice and accounts payable processing, bank and custodian reconciliation, and fund administration and accounting for fund managers and administrators. We also take on related business process automation, legacy system modernisation, and custom software.',
  },
  {
    q: 'Do you work with Australian fund managers and accounting firms?',
    a: 'Yes. UXQode runs live, regulated fund administration and accounting on the same engine we build with — NAV, investor reporting and reconciliation — so fund-tech and accounting automation for Australian fund managers, administrators and finance teams is a natural fit, not a new capability.',
  },
  {
    q: 'Does UXQode work with Australian businesses remotely?',
    a: 'Yes. UXQode is a remote-first team based in Singapore, with meaningful business-hours overlap with Australia. Our founding team also has direct, first-hand experience delivering enterprise software for Australian companies, including Verdikt, Bova Compounding, Lonely Kids Club and Tradiee.',
  },
  {
    q: 'Can I be invoiced locally, in AUD?',
    a: 'Yes. UXQode bills Australian clients through a local Australian entity, so invoicing runs in AUD — no FX conversion or overseas payment friction on your end.',
  },
  {
    q: 'How big is the UXQode team?',
    a: 'UXQode is a team of 20+ engineers, designers and product thinkers, with 200+ businesses served since founding in 2017 — and more than 50 engineers trained in-house over that time.',
  },
  {
    q: 'Can I get a fractional CTO instead of a full automation project?',
    a: 'Yes. UXQode offers a fractional CTO service — architecture, hiring and delivery leadership — as a monthly subscription or a fixed-scope engagement, alongside project-based back-office automation and software builds.',
  },
  {
    q: 'How do engagements start?',
    a: 'With a discovery call to understand your documents, systems and workflows. From there we scope either a fixed-price pilot on your own invoices and statements, or an ongoing engagement for a dedicated team or fractional CTO.',
  },
  {
    q: 'Where is UXQode based, and does that affect data security?',
    a: 'UXQode is Singapore-incorporated and builds software that already meets the bar set by licensed financial institutions. We offer deployment options from cloud to fully private environments, and client documents are never used to train models for other clients — the same standard we bring to every Australian engagement.',
  },
];

const heroStats = [
  { value: '20+', label: 'Engineers' },
  { value: '200+', label: 'Businesses served' },
  { value: '2017', label: 'Building since' },
];

export function Australia() {
  const { ref: pinRef, active } = usePinnedReveal(otherCapabilities.length);

  return (
    <div className={classes.page}>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="xl">
          <Reveal direction="fade">
            <span className={classes.eyebrow}>Australia · AI Back-Office Automation</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={classes.heroTitle}>
              AI &amp; Business Software{' '}
              <span className={classes.heroAccent}>for Australian Companies</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className={classes.heroLead}>
              UXQode helps Australian businesses automate operations, modernise legacy systems and
              build intelligent software — backed by a 20+ person engineering team with 200+
              businesses served. AI back-office automation is our flagship offering, alongside
              related fund-tech, accounting and business-process automation.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className={classes.heroCtas}>
              <Button
                component="a"
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
                href="mailto:dev@ux-qode.com"
                size="lg"
                radius={0}
                className={classes.btnGhost}
              >
                Email the team
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

      {/* AI back-office automation — flagship */}
      <section className={classes.section}>
        <Container size="xl">
          <SectionHeading
            index="01"
            label="Our flagship offering"
            title={
              <>
                AI back-office automation —{' '}
                <span className={classes.heroAccent}>and the fund-tech behind it</span>
              </>
            }
            description="The same document AI and accounting engine that runs live, regulated funds today, applied to your invoices, statements, reconciliations and books."
          />

          <Reveal direction="up">
            <div className={classes.heroStats} style={{ marginTop: 'clamp(32px, 4vw, 48px)' }}>
              {backOfficeHighlights.map((s) => (
                <div key={s.label} className={classes.heroStat}>
                  <span className={classes.heroStatValue}>{s.value}</span>
                  <span className={classes.heroStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className={classes.grid4} style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
            {backOfficeCapabilities.map((c, i) => (
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

          <Reveal direction="up">
            <div className={classes.heroCtas} style={{ justifyContent: 'flex-start' }}>
              <Button
                component="a"
                href="/solutions/ai-back-office"
                size="md"
                radius={0}
                className={classes.btnGhost}
                rightSection={<IconArrowRight size={16} />}
              >
                See how AI back-office automation works
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Beyond the back office — a pinned-scroll reveal, not another card grid.
          The wrapper is taller than the viewport, so the section holds in place
          while these items light up one by one as the page scrolls past it. */}
      <section className={`${classes.section} ${classes.sectionAlt}`}>
        <div ref={pinRef} className={styles.pinWrap}>
          <div className={styles.pinInner}>
            <Container size="xl">
              <div className={styles.split}>
                <Reveal direction="fade">
                  <div>
                    <SectionHeading
                      index="02"
                      label="Beyond the back office"
                      align="left"
                      title={
                        <>
                          Automate, modernise, build —{' '}
                          <span className={classes.heroAccent}>without the local hiring cost</span>
                        </>
                      }
                      description="One accountable engineering partner covering the work that would otherwise mean building a team from scratch."
                    />
                    <Button
                      component="a"
                      href="/#contact-us"
                      radius={0}
                      className={`${classes.btnGhost} ${styles.splitCta}`}
                      rightSection={<IconArrowRight size={16} />}
                    >
                      Talk to our team
                    </Button>
                  </div>
                </Reveal>

                <div className={styles.list}>
                  {otherCapabilities.map((c, i) => (
                    <div
                      key={c.title}
                      className={`${styles.listItem} ${i < active ? styles.listItemActive : ''}`}
                    >
                      <span className={styles.listIcon} aria-hidden="true">
                        <c.icon size={20} stroke={1.7} />
                      </span>
                      <div className={styles.listBody}>
                        <Text component="h3" className={styles.listTitle}>
                          {String(i + 1).padStart(2, '0')} · {c.title}
                        </Text>
                        <Text className={styles.listDesc}>{c.description}</Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Australia credibility band — a real two-column layout so the actual
          client names get their own visual weight instead of a narrow column
          of text floating in an otherwise-empty wide card. */}
      <section className={classes.section}>
        <Container size="xl">
          <div className={classes.fintech}>
            <div className={styles.credInner}>
              <div className={styles.credText}>
                <div className={classes.fintechEyebrow}>
                  <span className={classes.chipDot} aria-hidden="true" />
                  Australia · already in our founding team&apos;s DNA
                </div>
                <h2 className={classes.fintechTitle}>
                  We&apos;ve built for{' '}
                  <span className={classes.heroAccent}>Australian companies</span> before
                </h2>
                <p className={classes.fintechBody}>
                  UXQode&apos;s founding team&apos;s background spans enterprise software delivery
                  for companies across Australia — the same discipline we carry into building
                  financial software that runs behind licensed institutions.
                </p>

                <div className={styles.credTagRow}>
                  <span className={styles.credLabel}>What we bring</span>
                  <div className={classes.fintechChips}>
                    {credibilityTags.map((tag) => (
                      <span key={tag} className={classes.chip}>
                        <span className={classes.chipDot} aria-hidden="true" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={classes.fintechActions}>
                  <Button component="a" href="/work" radius={0} className={classes.btnGhost}>
                    See our work
                  </Button>
                </div>
              </div>

              <div className={styles.clientWallWrap}>
                <span className={styles.credLabel}>Delivered for</span>
                <div className={styles.clientWall}>
                  {australianClients.map((name) => (
                    <div key={name} className={styles.clientCard}>
                      <IconBuildingSkyscraper size={20} stroke={1.7} className={styles.clientIcon} />
                      <span className={styles.clientName}>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
            description="A lightweight start, run entirely remotely — most engagements are scoped within a week of the first conversation."
          />
          <div className={styles.timeline}>
            {steps.map((s, i) => (
              <div key={s.title} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <span
                    className={`${styles.timelineLine} ${styles.timelineLineLeft}`}
                    aria-hidden="true"
                  />
                  <span className={styles.timelineDot}>{String(i + 1).padStart(2, '0')}</span>
                  <span
                    className={`${styles.timelineLine} ${styles.timelineLineRight}`}
                    aria-hidden="true"
                  />
                </div>
                <div className={styles.timelineContent}>
                  <Text component="h3" className={styles.timelineTitle}>
                    {s.title}
                  </Text>
                  <Text className={styles.timelineDesc}>{s.desc}</Text>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ
        index="04"
        label="FAQ"
        title="UXQode for Australian businesses — questions, answered"
        items={faqs}
      />

      {/* CTA */}
      <section className={classes.ctaBand}>
        <Container size="xl">
          <div className={classes.ctaInner}>
            <div className={classes.ctaGlow} aria-hidden="true" />
            <h2 className={classes.ctaTitle}>Let&apos;s automate your back office</h2>
            <p className={classes.ctaText}>
              Tell us what&apos;s slow, manual or held together with spreadsheets. We&apos;ll come
              back with the shortest path to fixing it — usually within a day.
            </p>
            <div className={classes.ctaActions}>
              <Button
                component="a"
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
