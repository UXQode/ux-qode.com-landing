import Link from 'next/link';
import {
  IconArrowUpRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
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
      { label: 'Fractional CTO', href: '/fractional-cto' },
      { label: 'IT Consulting', href: '/#contact-us' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our Team', href: '/teams' },
      { label: 'Fractional CTO', href: '/fractional-cto' },
      { label: 'Contact Us', href: '/#contact-us' },
      { label: 'Sister Company', href: 'https://uxqode.co', external: true },
    ],
  },
];

const socials = [
  { icon: IconBrandLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/uxqode/' },
  { icon: IconBrandFacebook, label: 'Facebook', href: 'https://www.facebook.com/UXQode/' },
  { icon: IconBrandInstagram, label: 'Instagram', href: 'https://www.instagram.com/uxqode/' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        {/* Editorial CTA strip */}
        <div className={classes.cta}>
          <span className={classes.ctaKicker}>Start a conversation</span>
          <Anchor
            component={Link}
            href="/#contact-us"
            className={classes.ctaLink}
            underline="never"
          >
            Let&apos;s build something great
            <IconArrowUpRight size={36} className={classes.ctaArrow} stroke={1.8} />
          </Anchor>
        </div>

        <div className={classes.top}>
          <div className={classes.brand}>
            <Anchor
              component={Link}
              href="/"
              className={classes.logo}
              underline="never"
              aria-label="UXQode home"
            >
              <Logo height={40} />
            </Anchor>
            <Text className={classes.tagline} mt="md">
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
                  <social.icon size={18} stroke={1.6} />
                </Anchor>
              ))}
            </Group>
          </div>

          <SimpleGrid cols={{ base: 2, sm: 3 }} className={classes.links}>
            {footerLinks.map((col) => (
              <Stack key={col.heading} gap={10}>
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
            © {year} UXQode Pte. Ltd. · Registered in Singapore · All rights reserved.
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

      {/* Giant wordmark signature */}
      <div className={classes.wordmark} aria-hidden="true">
        UXQODE
      </div>
    </footer>
  );
}
