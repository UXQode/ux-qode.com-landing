import {
  IconBuildingSkyscraper,
  IconDeviceMobileCode,
  IconPlugConnected,
  IconRobot,
  IconServerBolt,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Card, Container, SimpleGrid, Text, ThemeIcon } from '@mantine/core';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { useTilt } from '@/hooks/useTilt';
import classes from './Feature.module.css';

type Service = (typeof services)[number];

function ServiceCard({ service }: { service: Service }) {
  const tiltRef = useTilt<HTMLDivElement>({ max: 7, scale: 1.03, lift: 14 });
  return (
    <Card ref={tiltRef} className={classes.card} radius="xl" padding="xl" component="article">
      <div className={classes.sheen} aria-hidden="true" />
      <div className={classes.iconHalo} aria-hidden="true" />
      <ThemeIcon
        size={56}
        radius="xl"
        variant="gradient"
        gradient={service.gradient}
        className={classes.icon}
      >
        <service.icon size={26} stroke={1.8} />
      </ThemeIcon>
      <Text component="h3" className={classes.cardTitle} mt="lg">
        {service.title}
      </Text>
      <Text className={classes.cardDesc} mt="sm">
        {service.description}
      </Text>
    </Card>
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
          index="04"
          label="Services & Capabilities"
          title={
            <>
              Enterprise-grade solutions that{' '}
              <span className={classes.titleAccent}>power innovation</span>
            </>
          }
          description="UXQode partners with ambitious businesses to build intelligent, scalable, and secure platforms — from enterprise software and AI agents to the fintech engineering behind aama.io. A global perspective with localized service, delivered from Singapore and Nepal."
        />

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mt={60}>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
