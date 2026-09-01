import {
  IconCategory2,
  IconChecklist,
  IconHistory,
  IconScan,
  IconUpload,
  IconUsersGroup,
} from '@tabler/icons-react';
import { useInView } from '@/hooks/useInView';
import classes from './PipelineFlow.module.css';

const steps = [
  { icon: IconUpload, label: 'Drop it in', sub: 'Any format' },
  { icon: IconScan, label: 'AI extraction', sub: 'Every field' },
  { icon: IconChecklist, label: 'Validation', sub: 'Before posting' },
  { icon: IconCategory2, label: 'Classify & post', sub: 'Your chart of accounts' },
  { icon: IconUsersGroup, label: 'Exceptions', sub: 'To humans' },
  { icon: IconHistory, label: 'Audit trail', sub: 'Always' },
];

/**
 * Animated document-processing pipeline. As the section scrolls into view the
 * connector "fills" left-to-right and each stage pops in sequence — an
 * at-a-glance map of how a document moves from inbox to posted, reconciled
 * entry. Adapted from the fund-lifecycle diagram in components/Product/FundFlow.
 */
export function PipelineFlow() {
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
          style={{ ['--d' as string]: `${i * 140}ms` }}
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
