import { Anchor, Burger, Button, Container, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import classes from './Header.module.css';
import { ActionToggle } from '../ActionToggle/ActionToggle';
import Link from 'next/link';

const navLinks = [
  { label: 'Products', href: '/#product' },
  { label: 'Services', href: '/#features' },
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
            <Anchor component={Link} href="/" className={classes.logo} underline="never">
              <span className={classes.logoUx}>UX</span>
              <span className={classes.logoQode}>Qode</span>
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
              <Button
                component="a"
                href="https://aama.io"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                radius="xl"
                className={classes.cta}
              >
                Try aama.io
              </Button>
            </nav>

            <div className={classes.mobileControls}>
              <ActionToggle />
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                aria-label="Toggle navigation"
              />
            </div>
          </div>
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        padding="xl"
        title={
          <span className={classes.drawerLogo}>
            <span className={classes.logoUx}>UX</span>
            <span className={classes.logoQode}>Qode</span>
          </span>
        }
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
