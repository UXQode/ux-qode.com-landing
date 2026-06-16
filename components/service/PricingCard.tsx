import { IconCheck } from '@tabler/icons-react';
import { Button, Text } from '@mantine/core';
import classes from './service.module.css';

export interface PricingTier {
  name: string;
  /** Show a "from" prefix above the amount. */
  from?: boolean;
  /** The amount, e.g. "$6,500" or "Custom". */
  price: string;
  /** Period suffix, e.g. "/ month" or "one-off". Omit for "Custom". */
  period?: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div className={`${classes.priceCard} ${tier.featured ? classes.priceFeatured : ''}`}>
      {tier.badge && <span className={classes.priceBadge}>{tier.badge}</span>}

      <Text className={classes.priceName}>{tier.name}</Text>

      {tier.from && <div className={classes.priceFrom}>From</div>}
      <div className={classes.priceAmount}>
        <span className={classes.priceValue}>{tier.price}</span>
        {tier.period && <span className={classes.pricePeriod}>{tier.period}</span>}
      </div>

      <Text className={classes.priceBlurb}>{tier.blurb}</Text>

      <div className={classes.priceDivider} />

      <ul className={classes.priceList}>
        {tier.features.map((f) => (
          <li key={f} className={classes.priceFeat}>
            <IconCheck size={17} stroke={2.6} className={classes.priceCheck} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        component="a"
        href={tier.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        radius={0}
        fullWidth
        className={`${classes.priceCta} ${tier.featured ? classes.priceCtaPrimary : classes.priceCtaGhost}`}
      >
        {tier.ctaLabel}
      </Button>
    </div>
  );
}
