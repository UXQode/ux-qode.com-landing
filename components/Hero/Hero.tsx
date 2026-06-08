import { Badge, Button, Container, Group, Text, Title } from '@mantine/core';
import { IconArrowRight, IconMapPin } from '@tabler/icons-react';
import classes from './Hero.module.css';
import Link from 'next/link';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Enterprise Clients' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years of Innovation' },
];

export function Hero() {
  return (
    <section className={classes.root} aria-label="Hero">
      <div className={classes.glow} aria-hidden="true" />
      <div className={classes.grid} aria-hidden="true" />
      <Container size="lg" className={classes.container}>
        <div className={classes.inner}>
          <Badge
            variant="outline"
            color="brand"
            size="md"
            radius="xl"
            className={classes.locationBadge}
            leftSection={<IconMapPin size={12} />}
          >
            Headquartered in Singapore · Serving Globally
          </Badge>

          <Title component="h1" className={classes.title}>
            Engineering the Future of{' '}
            <span className={classes.gradient}>AI&#8209;Powered</span>
            <br />
            Digital Experiences
          </Title>

          <Text component="p" className={classes.description}>
            UXQode builds intelligent digital solutions that transform how global enterprises
            operate, compete, and grow. From AI predictions to cloud infrastructure — we
            engineer technology that scales without limits.
          </Text>

          <Group className={classes.controls}>
            <Button
              component="a"
              href="https://aama.io"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              radius="xl"
              className={classes.primaryBtn}
              rightSection={<IconArrowRight size={18} />}
            >
              Explore aama.io
            </Button>
            <Button
              component={Link}
              href="/#contact-us"
              size="lg"
              radius="xl"
              variant="outline"
              className={classes.secondaryBtn}
            >
              Talk to Us
            </Button>
          </Group>

          <div className={classes.statsRow} role="list" aria-label="Company statistics">
            {stats.map((stat) => (
              <div key={stat.label} className={classes.statItem} role="listitem">
                <Text component="span" className={classes.statValue} aria-label={`${stat.value} ${stat.label}`}>
                  {stat.value}
                </Text>
                <Text component="span" className={classes.statLabel}>
                  {stat.label}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
