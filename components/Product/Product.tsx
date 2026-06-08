import { Badge, Button, Container, Group, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import {
  IconArrowRight,
  IconBolt,
  IconChartDots3,
  IconUsers,
} from '@tabler/icons-react';
import classes from './Product.module.css';

const highlights = [
  {
    icon: IconBolt,
    title: 'Real-Time AI Predictions',
    description:
      'Get instant business forecasts powered by state-of-the-art machine learning models trained on global data.',
  },
  {
    icon: IconUsers,
    title: 'Intelligent Talent Matching',
    description:
      'Connect the right people with the right opportunities using advanced behavioural AI and semantic search.',
  },
  {
    icon: IconChartDots3,
    title: 'Unified Analytics Dashboard',
    description:
      'Visualise every metric that matters in one place — from hiring pipelines to business KPIs and market signals.',
  },
];

export function Product() {
  return (
    <section className={classes.section} id="product" aria-label="aama.io product spotlight">
      <Container size="lg">
        <div className={classes.wrapper}>
          <div className={classes.glow} aria-hidden="true" />

          <div className={classes.header}>
            <Badge variant="filled" color="brand" size="md" radius="xl" className={classes.badge}>
              Crown Product
            </Badge>
            <Title component="h2" className={classes.title} mt="sm">
              Meet{' '}
              <span className={classes.productName}>aama.io</span>
              {' '}— The Intelligent Platform
            </Title>
            <Text component="p" className={classes.description} mt="md">
              aama.io is UXQode&apos;s flagship AI platform — a unified engine that combines predictive
              analytics, smart talent matching, and business intelligence to help enterprises
              make faster, smarter decisions at a global scale.
            </Text>
            <Group justify="center" mt="xl">
              <Button
                component="a"
                href="https://aama.io"
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                radius="xl"
                className={classes.cta}
                rightSection={<IconArrowRight size={16} />}
              >
                Launch aama.io
              </Button>
            </Group>
          </div>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mt={64}>
            {highlights.map((h) => (
              <div key={h.title} className={classes.card}>
                <ThemeIcon
                  size={52}
                  radius="xl"
                  className={classes.iconWrapper}
                >
                  <h.icon size={24} stroke={1.8} />
                </ThemeIcon>
                <Text className={classes.cardTitle} mt="md">
                  {h.title}
                </Text>
                <Text className={classes.cardDesc} mt="xs">
                  {h.description}
                </Text>
              </div>
            ))}
          </SimpleGrid>
        </div>
      </Container>
    </section>
  );
}
