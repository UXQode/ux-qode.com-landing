import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text>ux-qode.com</Text>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <Text className={classes.link}>Copyright, 2024</Text>
        </Group>
      </Container>
    </div>
  );
}