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
    heading: 'What We Build',
    links: [
      { label: 'AI Back Office', href: '/solutions/ai-back-office' },
      { label: 'Custom AI Solutions', href: '/solutions/custom-ai' },
      { label: 'Fund Administration Platforms', href: '/work' },
      { label: 'aama.io', href: 'https://aama.io', external: true },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'All Solutions', href: '/solutions' },
      { label: 'Fractional CTO', href: '/fractional-cto' },
      { label: 'For Australian Businesses', href: '/australia' },
      { label: 'Dedicated Teams', href: '/teams' },
      { label: 'IT Consulting', href: '/#contact-us' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Our Team', href: '/teams' },
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
      <Container size="xl" className={classes.inner}>
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
              We build the financial software that runs behind licensed institutions — and the AI
              that runs their back office. Singapore-incorporated, maker of aama.io.
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
