import { Anchor, Container, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import { IconBrandLinkedin, IconBrandTwitter, IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Footer.module.css';

const footerLinks = [
  {
    heading: 'Products',
    links: [
      { label: 'aama.io', href: 'https://aama.io', external: true },
      { label: 'AI Predictions', href: '/#features' },
      { label: 'Talent Matching', href: '/#features' },
      { label: 'Analytics', href: '/#features' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Custom Development', href: '/#features' },
      { label: 'Cloud Integration', href: '/#features' },
      { label: 'Research & Development', href: '/#features' },
      { label: 'AI Consulting', href: '/#contact-us' },
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
  { icon: IconBrandLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: IconBrandTwitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: IconBrandGithub, label: 'GitHub', href: 'https://github.com' },
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <div className={classes.top}>
          <div className={classes.brand}>
            <Anchor component={Link} href="/" className={classes.logo} underline="never">
              <span className={classes.logoUx}>UX</span>
              <span className={classes.logoQode}>Qode</span>
            </Anchor>
            <Text className={classes.tagline} mt="sm">
              AI-powered digital solutions engineered for a global future. Headquartered in
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
            © {new Date().getFullYear()} UXQode Pte. Ltd. · Registered in Singapore ·
            All rights reserved.
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
