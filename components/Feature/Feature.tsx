import {
  IconBuildingSkyscraper,
  IconDeviceMobileCode,
  IconPlugConnected,
  IconRobot,
  IconServerBolt,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Badge, Card, Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import { Reveal } from '@/components/Reveal/Reveal';
import classes from './Feature.module.css';

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
        <div className={classes.header}>
          <Reveal direction="scale">
            <Badge variant="light" color="brand" size="md" radius="xl">
              Our Services
            </Badge>
          </Reveal>
          <Reveal delay={80}>
            <Title component="h2" className={classes.title} mt="sm">
              Enterprise-Grade Digital Solutions that{' '}
              <span className={classes.titleAccent}>Power Innovation</span>
            </Title>
          </Reveal>
          <Reveal delay={140}>
            <Text component="p" className={classes.description} mt="md">
              UXQode partners with ambitious businesses to build intelligent, scalable, and secure
              platforms — from enterprise software and AI agents to the fintech engineering behind
              aama.io. A global perspective with localized service, delivered from Singapore and
              Nepal.
            </Text>
          </Reveal>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mt={60}>
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90}>
              <Card className={classes.card} radius="xl" padding="xl" component="article">
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
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
