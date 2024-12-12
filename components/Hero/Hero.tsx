import { IconCheck } from '@tabler/icons-react';
import { Box, Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './Hero.module.css';
import Link from 'next/link';
import { Anchor } from '@mantine/core';

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Welcome to <span className={classes.highlight}>UXQode</span>, the hub for <br /> cutting-edge digital solutions
          </Title>
          <Text c="dimmed" mt="md">
            At UXQode, we empower businesses to succeed by crafting innovative, user-friendly
            digital experiences. Explore our tools and services designed to transform ideas into reality.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Innovative Design</b> – delivering visually stunning, intuitive interfaces for your projects.
            </List.Item>
            <List.Item>
              <b>Seamless Integration</b> – integrating cutting-edge technologies to drive growth.
            </List.Item>
            <List.Item>
              <b>Global Expertise</b> – leveraging years of experience to solve challenges worldwide.
            </List.Item>
          </List>

          <Group mt={30}>
          <Anchor component={Link} href="/#features">
            <Button radius="xl" size="md" className={classes.control} >
              Discover More
            </Button>
            </Anchor>
            <Anchor component={Link} href="/#contact-us">
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Contact Us
            </Button>
            </Anchor>
          </Group>
        </div>
      </div>
    </Container>
  );
}
