import Link from 'next/link';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { Anchor, Container, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import { Logo } from '../Logo/Logo';
import classes from './Footer.module.css';

const footerLinks = [
  {
    heading: 'aama.io',
    links: [
      { label: 'Fund Management', href: 'https://aama.io', external: true },
      { label: 'Fund Administration', href: '/#product' },
      { label: 'Investor Onboarding', href: '/#product' },
      { label: 'Compliance & Reporting', href: '/#product' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Enterprise Software', href: '/#features' },
      { label: 'AI Agent Solutions', href: '/#features' },
      { label: 'Mobile Apps', href: '/#features' },
      { label: 'IT Consulting', href: '/#contact-us' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About UXQode', href: '/#about' },
      { label: 'Contact Us', href: '/#contact-us' },
      { label: 'Sister Company', href: 'https://uxqode.co', external: true },
    ],
  },
];

const socials = [
  {
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/uxqode/',
  },
  { icon: IconBrandFacebook, label: 'Facebook', href: 'https://www.facebook.com/UXQode/' },
  { icon: IconBrandInstagram, label: 'Instagram', href: 'https://www.instagram.com/uxqode/' },
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <div className={classes.top}>
          <div className={classes.brand}>
            <Anchor
              component={Link}
              href="/"
              className={classes.logo}
              underline="never"
              aria-label="UXQode home"
            >
              <Logo height={50} />
            </Anchor>
            <Text className={classes.tagline} mt="sm">
              AI-powered digital solutions engineered for a global future — and the makers of
              aama.io, fund-management software for modern fund managers. Headquartered in
              Singapore.
            </Text>
            <Group gap="xs" mt="lg">
              {socials.map((social) => (
                <Anchor
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialIcon}
                  aria-label={social.label}
                >
                  <social.icon size={18} stroke={1.5} />
                </Anchor>
              ))}
            </Group>
          </div>

          <SimpleGrid cols={{ base: 2, sm: 3 }} className={classes.links}>
            {footerLinks.map((col) => (
              <Stack key={col.heading} gap="xs">
                <Text className={classes.colHeading}>{col.heading}</Text>
                {col.links.map((link) =>
                  link.external ? (
                    <Anchor
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.link}
                      underline="never"
                    >
                      {link.label}
                    </Anchor>
                  ) : (
                    <Anchor
                      key={link.label}
                      component={Link}
                      href={link.href}
                      className={classes.link}
                      underline="never"
                    >
                      {link.label}
                    </Anchor>
                  )
                )}
              </Stack>
            ))}
          </SimpleGrid>
        </div>

        <div className={classes.bottom}>
          <Text className={classes.copyright}>
            © {new Date().getFullYear()} UXQode Pte. Ltd. · Registered in Singapore · All rights
            reserved.
          </Text>
          <Text className={classes.sister}>
            Sister company of{' '}
            <Anchor
              href="https://uxqode.co"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.sisterLink}
              underline="never"
            >
              uxqode.co
            </Anchor>
          </Text>
        </div>
      </Container>
    </footer>
  );
}
