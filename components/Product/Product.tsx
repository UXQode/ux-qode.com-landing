import {
  IconArrowRight,
  IconBuildingBank,
  IconCalculator,
  IconCashBanknote,
  IconChartPie,
  IconShieldCheck,
  IconUserCheck,
} from '@tabler/icons-react';
import { Badge, Button, Container, Group, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import { Reveal } from '@/components/Reveal/Reveal';
import { useParallax } from '@/hooks/useParallax';
import { useSpotlight } from '@/hooks/useSpotlight';
import { FundFlow } from './FundFlow';
import classes from './Product.module.css';

type Highlight = (typeof highlights)[number];

function HighlightCard({ h }: { h: Highlight }) {
  const ref = useSpotlight<HTMLDivElement>();
  return (
    <div className={classes.card} ref={ref}>
      <div className={classes.spot} aria-hidden="true" />
      <ThemeIcon size={52} radius="xl" className={classes.iconWrapper}>
        <h.icon size={24} stroke={1.8} />
      </ThemeIcon>
      <Text className={classes.cardTitle} mt="md">
        {h.title}
      </Text>
      <Text className={classes.cardDesc} mt="xs">
        {h.description}
      </Text>
    </div>
  );
}

const highlights = [
  {
    icon: IconBuildingBank,
    title: 'Fund Administration',
    description:
      'Run admin end-to-end with a white-labeled investor portal — real-time positions, statements, and documents in one secure place.',
  },
  {
    icon: IconCalculator,
    title: 'Fund Accounting & NAV',
    description:
      'IFRS-compliant accounting with automated NAV calculations, so your books and valuations stay accurate without the spreadsheets.',
  },
  {
    icon: IconUserCheck,
    title: 'Investor Onboarding',
    description:
      'KYC/AML-compliant onboarding flows that get new LPs verified and invested in days, not weeks — fully audit-ready.',
  },
  {
    icon: IconCashBanknote,
    title: 'Capital Calls & Distributions',
    description:
      'Automate capital call notices, drawdowns, and distribution waterfalls with accurate allocations across every LP.',
  },
  {
    icon: IconChartPie,
    title: 'Portfolio Dashboards',
    description:
      'Real-time dashboards and reporting across NAV, IRR, exposure, and cash flows — for managers and investors alike.',
  },
  {
    icon: IconShieldCheck,
    title: 'Regulatory Compliance',
    description:
      'MAS-aligned compliance automation, VAPT-certified security, and a 99.9% uptime SLA you can put in front of an auditor.',
  },
];

export function Product() {
  const glowRef = useParallax<HTMLDivElement>(0.08);
  const glowAltRef = useParallax<HTMLDivElement>(-0.07);
  return (
    <section className={classes.section} id="product" aria-label="aama.io product spotlight">
      <Container size="lg">
        <div className={classes.wrapper}>
          <div className={classes.glow} aria-hidden="true" ref={glowRef} />
          <div className={classes.glowAlt} aria-hidden="true" ref={glowAltRef} />

          <div className={classes.header}>
            <Reveal direction="scale">
              <Badge variant="filled" color="brand" size="md" radius="xl" className={classes.badge}>
                Crown Product · Fund Management
              </Badge>
            </Reveal>
            <Reveal delay={80}>
              <Title component="h2" className={classes.title} mt="sm">
                Meet <span className={classes.productName}>aama.io</span>
                <br />
                Run your entire fund on one platform
              </Title>
            </Reveal>
            <Reveal delay={140}>
              <Text component="p" className={classes.description} mt="md">
                aama.io is UXQode&apos;s flagship platform — end-to-end fund management software
                that replaces the spreadsheets and disconnected tools fund managers rely on today.
                Built for boutique private equity, venture capital, hedge funds, family offices, and
                SPVs, it brings administration, accounting, compliance, and investor reporting into
                a single integrated system.
              </Text>
            </Reveal>
            <Reveal delay={200}>
              <Group justify="center" mt="xl">
                <Button
                  component="a"
                  href="https://aama.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  radius="xl"
                  className={classes.cta}
                  rightSection={<IconArrowRight size={16} />}
                >
                  Launch aama.io
                </Button>
              </Group>
            </Reveal>
          </div>

          {/* Animated fund-lifecycle infographic */}
          <Reveal delay={120} className={classes.flowWrap}>
            <FundFlow />
          </Reveal>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mt={56}>
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <HighlightCard h={h} />
              </Reveal>
            ))}
          </SimpleGrid>
        </div>
      </Container>
    </section>
  );
}
