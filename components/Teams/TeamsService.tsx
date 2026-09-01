import Image from 'next/image';
import {
  IconArrowRight,
  IconChartBar,
  IconChecklist,
  IconCloud,
  IconDeviceDesktop,
  IconDeviceMobileCode,
  IconPalette,
  IconRobot,
  IconRocket,
  IconServerBolt,
  IconShieldLock,
  IconTargetArrow,
  IconUserCheck,
  IconWorld,
} from '@tabler/icons-react';
import { Button, Container, Text, ThemeIcon } from '@mantine/core';
import { FAQ } from '@/components/FAQ/FAQ';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { FintechBand } from '@/components/service/FintechBand';
import classes from '@/components/service/service.module.css';

const UXQODE = 'https://uxqode.co';

const disciplines = [
  {
    icon: IconDeviceDesktop,
    title: 'Frontend',
    desc: 'React, Next.js & TypeScript — accessible, polished interfaces and design systems.',
  },
  {
    icon: IconServerBolt,
    title: 'Backend',
    desc: 'Node, Go and Python — APIs, data and distributed systems built to scale.',
  },
  {
    icon: IconDeviceMobileCode,
    title: 'Mobile',
    desc: 'Native iOS & Android plus React Native and Flutter for cross-platform apps.',
  },
  {
    icon: IconRobot,
    title: 'AI & ML',
    desc: 'LLM apps, agents, RAG and the data pipelines that feed them.',
  },
  {
    icon: IconCloud,
    title: 'DevOps & Cloud',
    desc: 'AWS, GCP, Kubernetes and CI/CD — infrastructure as code, shipped safely.',
  },
  {
    icon: IconChecklist,
    title: 'QA & Automation',
    desc: 'Manual, automated and performance testing baked into delivery.',
  },
  {
    icon: IconPalette,
    title: 'Product Design',
    desc: 'UX research, UI design and prototyping that make the product feel considered.',
  },
  {
    icon: IconChartBar,
    title: 'Data & Analytics',
    desc: 'Warehousing, dashboards and the insight to act on them.',
  },
  {
    icon: IconShieldLock,
    title: 'Security',
    desc: 'AppSec, audits and compliance readiness — habits, not afterthoughts.',
  },
];

const values = [
  {
    icon: IconUserCheck,
    title: 'Senior by default',
    description:
      'No juniors hidden in the mix — experienced people who have shipped real products before.',
  },
  {
    icon: IconWorld,
    title: 'One accountable team',
    description:
      'A single Singapore-based team that owns the work end to end — no handoffs, no scattered freelancers.',
  },
  {
    icon: IconTargetArrow,
    title: 'We own outcomes',
    description: 'We measure ourselves on what ships and works for users — not hours logged.',
  },
  {
    icon: IconRocket,
    title: 'We ship weekly',
    description: 'A bias for delivery means something real lands in front of users every week.',
  },
  {
    icon: IconPalette,
    title: 'Design-led engineering',
    description: 'Product and design sit beside engineering, so what we build feels intentional.',
  },
  {
    icon: IconShieldLock,
    title: 'Security-minded',
    description: 'Security and compliance are habits, built in from the very first commit.',
  },
];

const faqs = [
  { q: 'Where is the UXQode team based?', a: 'The team is based in Singapore.' },
  {
    q: 'How big is the UXQode team?',
    a: 'UXQode has a team of 20+ engineers, designers and product specialists.',
  },
  {
    q: 'What technologies does the team work with?',
    a: 'The team covers frontend (React, Next.js, TypeScript), backend (Node, Go, Python), mobile (iOS, Android, React Native, Flutter), AI/ML, DevOps and cloud (AWS, GCP, Kubernetes), QA, product design, data and security.',
  },
  {
    q: 'Can we work with the UXQode team?',
    a: 'Yes. Get in touch via the contact form or email dev@ux-qode.com to discuss your project.',
  },
];

const heroStats = [
  { value: '20+', label: 'Engineers' },
  { value: '200+', label: 'Clients served' },
  { value: '30+', label: 'Apps shipped' },
  { value: 'Singapore', label: 'Based in' },
];

export function TeamsService() {
  return (
    <div className={classes.page}>
      {/* Hero */}
      <section className={classes.hero}>
        <Container size="lg">
          <Reveal direction="fade">
            <span className={classes.eyebrow}>Our Team</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={classes.heroTitle}>
              The people behind <span className={classes.heroAccent}>UXQode</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className={classes.heroLead}>
              We&apos;re a team of 20+ engineers, designers and product thinkers based in Singapore
              — the people who design, build and ship UXQode&apos;s work, including aama.io.
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
                Get in touch
              </Button>
              <Button
                component="a"
                href={UXQODE}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                radius={0}
                className={classes.btnGhost}
              >
                Visit uxqode.co
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
          <Reveal delay={320}>
            <div className={classes.heroShowcase}>
              <Image
                src="/uxqode/heroImage.jpg"
                alt="The UXQode team in Singapore"
                className={classes.heroShowcaseImg}
                width={1200}
                height={800}
                sizes="(max-width: 920px) 100vw, 920px"
                priority
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Disciplines */}
      <section className={`${classes.section} ${classes.sectionAlt}`}>
        <Container size="lg">
          <SectionHeading
            index="01"
            label="Disciplines"
            title={
              <>
                Every discipline, <span className={classes.heroAccent}>under one roof</span>
              </>
            }
            description="From first sketch to production and beyond — the full range of skills it takes to build and run modern software lives on our team."
          />
          <div className={classes.grid}>
            {disciplines.map((d, i) => (
              <div key={d.title} className={classes.card}>
                <div className={classes.accentBar} aria-hidden="true" />
                <div className={classes.cardTop}>
                  <ThemeIcon
                    size={50}
                    radius={0}
                    variant="gradient"
                    gradient={{ from: 'cyan', to: 'blue' }}
                    className={classes.cardIcon}
                  >
                    <d.icon size={24} stroke={1.7} />
                  </ThemeIcon>
                  <span className={classes.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <Text component="h3" className={classes.cardTitle}>
                  {d.title}
                </Text>
                <Text className={classes.cardDesc}>{d.desc}</Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fintech expertise band */}
      <FintechBand
        title={
          <>
            Fintech runs in our team&apos;s <span className={classes.heroAccent}>DNA</span>
          </>
        }
        body={
          <>
            Our team didn&apos;t read about the fund lifecycle — we built it. UXQode is the maker of{' '}
            <strong>aama.io</strong>, end-to-end fund-management software in production today,
            covering administration, NAV, compliance and investor reporting.
          </>
        }
        ctas={[{ label: 'See what we built — aama.io', href: 'https://aama.io', external: true }]}
        withSection
      />

      {/* How we work */}
      <section className={`${classes.section} ${classes.sectionAlt}`}>
        <Container size="lg">
          <SectionHeading
            index="02"
            label="How we work"
            title={
              <>
                The way <span className={classes.heroAccent}>we build</span>
              </>
            }
            description="A few principles the whole team shares — the reason our work holds up after we ship it."
          />
          <div className={classes.grid}>
            {values.map((v, i) => (
              <div key={v.title} className={classes.card}>
                <div className={classes.accentBar} aria-hidden="true" />
                <div className={classes.cardTop}>
                  <ThemeIcon
                    size={50}
                    radius={0}
                    variant="gradient"
                    gradient={{ from: 'cyan', to: 'blue' }}
                    className={classes.cardIcon}
                  >
                    <v.icon size={24} stroke={1.7} />
                  </ThemeIcon>
                  <span className={classes.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <Text component="h3" className={classes.cardTitle}>
                  {v.title}
                </Text>
                <Text className={classes.cardDesc}>{v.description}</Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ index="03" label="FAQ" title="Working with our team" items={faqs} />

      {/* CTA */}
      <section className={classes.ctaBand}>
        <Container size="lg">
          <div className={classes.ctaInner}>
            <div className={classes.ctaGlow} aria-hidden="true" />
            <h2 className={classes.ctaTitle}>Want to build something with our team?</h2>
            <p className={classes.ctaText}>
              Tell us what you&apos;re working on and we&apos;ll point the right people at it —
              usually within a day.
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
                Get in touch
              </Button>
              <Button
                component="a"
                href={UXQODE}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                radius={0}
                className={classes.btnGhost}
              >
                Visit uxqode.co
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
