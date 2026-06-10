import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import classes from './Stats.module.css';

interface GaugeProps {
  /** Percentage 0–100 the arc fills to. */
  percent: number;
  /** Big number shown in the center (e.g. 99.9). */
  value: number;
  decimals?: number;
  suffix?: string;
  /** Optional text shown instead of an animated number (e.g. "SOC 2"). */
  staticLabel?: string;
  caption: string;
}

const R = 52;
const CIRC = 2 * Math.PI * R;

/** Animated radial gauge: the arc draws in and the center value counts up. */
export function Gauge({
  percent,
  value,
  decimals = 0,
  suffix = '',
  staticLabel,
  caption,
}: GaugeProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const count = useCountUp(value, inView, 1700, decimals);
  const offset = inView ? CIRC * (1 - percent / 100) : CIRC;

  return (
    <div className={classes.gauge} ref={ref}>
      <div className={classes.gaugeRing}>
        <svg viewBox="0 0 120 120" className={classes.gaugeSvg}>
          <circle className={classes.gaugeTrack} cx="60" cy="60" r={R} />
          <circle
            className={classes.gaugeFill}
            cx="60"
            cy="60"
            r={R}
            strokeDasharray={CIRC}
            strokeDashoffset={offset}
          />
        </svg>
        <div className={classes.gaugeCenter}>
          {staticLabel ? (
            <span className={classes.gaugeValue}>{staticLabel}</span>
          ) : (
            <span className={classes.gaugeValue}>
              {count}
              {suffix}
            </span>
          )}
        </div>
      </div>
      <div className={classes.gaugeCaption}>{caption}</div>
    </div>
  );
}
