import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Anchor, Burger, Button, Container, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ActionToggle } from '../ActionToggle/ActionToggle';
import { Logo } from '../Logo/Logo';
import classes from './Header.module.css';

const navLinks = [
  { label: 'Services', href: '/#features' },
  { label: 'Products', href: '/#product' },
  { label: 'Contact', href: '/#contact-us' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
        <Container size="lg">
          <div className={classes.inner}>
            <Anchor
              component={Link}
              href="/"
              className={classes.logo}
              underline="never"
              aria-label="UXQode home"
            >
              <Logo height={50} />
            </Anchor>

            <nav aria-label="Main navigation" className={classes.nav}>
              {navLinks.map((link) => (
                <Anchor
                  component={Link}
                  key={link.label}
                  href={link.href}
                  className={classes.link}
                  underline="never"
                >
                  {link.label}
                </Anchor>
              ))}
              <ActionToggle />
            </nav>

            <div className={classes.mobileControls}>
              <ActionToggle />
              <Burger opened={opened} onClick={toggle} size="sm" aria-label="Toggle navigation" />
            </div>
          </div>
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        padding="xl"
        title={<Logo height={28} />}
        hiddenFrom="sm"
        zIndex={200}
      >
        <Stack gap="xs">
          {navLinks.map((link) => (
            <Anchor
              component={Link}
              key={link.label}
              href={link.href}
              className={classes.drawerLink}
              underline="never"
              onClick={close}
            >
              {link.label}
            </Anchor>
          ))}
          <Button
            component="a"
            href="https://aama.io"
            target="_blank"
            rel="noopener noreferrer"
            radius="xl"
            className={classes.cta}
            mt="sm"
            fullWidth
          >
            Try aama.io
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
