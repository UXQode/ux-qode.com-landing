import {
  IconCash,
  IconChartHistogram,
  IconFileInvoice,
  IconUserCheck,
  IconWallet,
} from '@tabler/icons-react';
import { useInView } from '@/hooks/useInView';
import classes from './FundFlow.module.css';

const steps = [
  { icon: IconUserCheck, label: 'Onboard LPs', sub: 'KYC / AML' },
  { icon: IconCash, label: 'Capital Calls', sub: 'Drawdowns' },
  { icon: IconChartHistogram, label: 'Accounting', sub: 'NAV · IFRS' },
  { icon: IconFileInvoice, label: 'Reporting', sub: 'LP portal' },
  { icon: IconWallet, label: 'Distributions', sub: 'Waterfalls' },
];

/**
 * Animated fund-lifecycle pipeline. As the section scrolls into view the
 * connector "fills" left-to-right and each stage pops in sequence — an
 * at-a-glance map of how a fund runs end-to-end on aama.io.
 */
export function FundFlow() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div className={classes.flow} ref={ref} aria-hidden="true">
      <div className={classes.track}>
        <div className={`${classes.trackFill} ${inView ? classes.trackFillOn : ''}`} />
        {inView && (
          <>
            <span className={classes.packet} style={{ animationDelay: '2.4s' }} />
            <span className={classes.packet} style={{ animationDelay: '3.6s' }} />
            <span className={classes.packet} style={{ animationDelay: '4.8s' }} />
          </>
        )}
      </div>
      {steps.map((s, i) => (
        <div
          key={s.label}
          className={`${classes.step} ${inView ? classes.stepOn : ''}`}
          style={{ ['--d' as string]: `${i * 180}ms` }}
        >
          <div className={classes.node}>
            <span className={classes.ring} />
            <s.icon size={22} stroke={1.8} />
          </div>
          <div className={classes.label}>{s.label}</div>
          <div className={classes.sub}>{s.sub}</div>
        </div>
      ))}
    </div>
  );
}
