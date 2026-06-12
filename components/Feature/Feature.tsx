import {
  IconArrowUpRight,
  IconBuildingSkyscraper,
  IconDeviceMobileCode,
  IconPlugConnected,
  IconRobot,
  IconServerBolt,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { useSpotlight } from '@/hooks/useSpotlight';
import classes from './Feature.module.css';

type Service = (typeof services)[number];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useSpotlight<HTMLElement>();
  return (
    <article className={classes.card} ref={ref}>
      <div className={classes.accentBar} aria-hidden="true" />
      <div className={classes.sheen} aria-hidden="true" />

      <div className={classes.cardTop}>
        <ThemeIcon
          size={52}
          radius={0}
          variant="gradient"
          gradient={service.gradient}
          className={classes.icon}
        >
          <service.icon size={26} stroke={1.7} />
        </ThemeIcon>
        <span className={classes.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
      </div>

      <Text component="h3" className={classes.cardTitle}>
        {service.title}
      </Text>
      <Text className={classes.cardDesc}>{service.description}</Text>

      <span className={classes.cardArrow} aria-hidden="true">
        <IconArrowUpRight size={18} stroke={2} />
      </span>
    </article>
  );
}

const services = [
  {
    title: 'Enterprise Software Development',
    description:
      'Intelligent, scalable platforms built to your exact specifications — from architecture to delivery — engineered for performance and reliability at enterprise scale.',
    icon: IconServerBolt,
    gradient: { from: 'cyan', to: 'blue' } as const,
  },
  {
    title: 'AI Agent Solutions',
    description:
      'AI-automated solutions that take the operational hassle off your team — intelligent agents and workflows that integrate with your existing systems.',
    icon: IconRobot,
    gradient: { from: 'violet', to: 'grape' } as const,
  },
  {
    title: 'Mobile Application Development',
    description:
      'High-performance mobile apps for iOS and Android, crafted with a product mindset to deliver fast, polished experiences your users love.',
    icon: IconDeviceMobileCode,
    gradient: { from: 'blue', to: 'indigo' } as const,
  },
  {
    title: 'Business IT Consulting',
    description:
      'Strategic guidance that aligns technology with your business goals — helping you establish a digital identity and ship the right product.',
    icon: IconUsersGroup,
    gradient: { from: 'teal', to: 'cyan' } as const,
  },
  {
    title: 'API & Cloud Integration',
    description:
      'Seamlessly connect and integrate your systems and the cloud — secure, horizontally scalable, and built for maximum operational efficiency.',
    icon: IconPlugConnected,
    gradient: { from: 'blue', to: 'cyan' } as const,
  },
  {
    title: 'Fintech & Capital Markets',
    description:
      'Deep experience building fintech and investment platforms — including aama.io — for mutual funds, capital markets, and modern fund managers.',
    icon: IconBuildingSkyscraper,
    gradient: { from: 'indigo', to: 'blue' } as const,
  },
];

export function Feature() {
  return (
    <section className={classes.section} id="features" aria-label="Services">
      <Container size="lg">
        <SectionHeading
          index="02"
          label="Services & Capabilities"
          title={
            <>
              Enterprise-grade solutions that{' '}
              <span className={classes.titleAccent}>power innovation</span>
            </>
          }
          description="UXQode partners with ambitious businesses to build intelligent, scalable, and secure platforms — from enterprise software and AI agents to the fintech engineering behind aama.io. A global perspective with localized service, delivered from Singapore and Nepal."
        />

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={1} verticalSpacing={1} className={classes.grid} mt={56}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
