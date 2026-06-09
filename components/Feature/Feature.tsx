import {
  IconBrain,
  IconChartBar,
  IconCloudUpload,
  IconCode,
  IconDeviceAnalytics,
  IconSearch,
} from '@tabler/icons-react';
import { Badge, Card, Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './Feature.module.css';

const services = [
  {
    title: 'AI-Powered Predictions',
    description:
      'Leverage cutting-edge machine learning for business forecasting. Make data-driven decisions with accuracy and confidence using our proprietary ML models.',
    icon: IconChartBar,
    gradient: { from: 'cyan', to: 'blue' } as const,
  },
  {
    title: 'Job Matching Algorithms',
    description:
      'Intelligent matching technology that connects candidates with opportunities perfectly aligned to their skills, experience, and career aspirations.',
    icon: IconSearch,
    gradient: { from: 'blue', to: 'indigo' } as const,
  },
  {
    title: 'Research & Development',
    description:
      'Dedicated to pioneering AI and ML innovation — exploring breakthrough solutions that transform industries and drive measurable operational efficiency.',
    icon: IconBrain,
    gradient: { from: 'violet', to: 'grape' } as const,
  },
  {
    title: 'Advanced Analytics',
    description:
      'Gain actionable insights with our enterprise analytics services, empowering you to understand trends, reduce costs, and make better decisions faster.',
    icon: IconDeviceAnalytics,
    gradient: { from: 'teal', to: 'cyan' } as const,
  },
  {
    title: 'Custom Software Development',
    description:
      'Build tailor-made applications engineered to your exact specifications — helping you achieve your business objectives with precision and performance.',
    icon: IconCode,
    gradient: { from: 'indigo', to: 'blue' } as const,
  },
  {
    title: 'Cloud Integration Services',
    description:
      'Seamlessly migrate and integrate with the cloud. We ensure security, horizontal scalability, and maximum operational efficiency for your infrastructure.',
    icon: IconCloudUpload,
    gradient: { from: 'blue', to: 'cyan' } as const,
  },
];

export function Feature() {
  return (
    <section className={classes.section} id="features" aria-label="Services">
      <Container size="lg">
        <div className={classes.header}>
          <Badge variant="light" color="brand" size="md" radius="xl">
            Our Services
          </Badge>
          <Title component="h2" className={classes.title} mt="sm">
            Pioneering AI Solutions for{' '}
            <span className={classes.titleAccent}>Tomorrow&apos;s Challenges</span>
          </Title>
          <Text component="p" className={classes.description} mt="md">
            At UXQode, we are at the forefront of technology — developing AI products and services
            that redefine the way businesses operate and people connect worldwide.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mt={60}>
          {services.map((service) => (
            <Card
              key={service.title}
              className={classes.card}
              radius="xl"
              padding="xl"
              component="article"
            >
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
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
