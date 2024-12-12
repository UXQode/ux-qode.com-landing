import { Burger, Center, Container, Group, Menu, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { ActionToggle } from '../ActionToggle/ActionToggle';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Text>Ux-qode.com</Text>
          <Group gap={5} visibleFrom="sm">
            <ActionToggle />
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}