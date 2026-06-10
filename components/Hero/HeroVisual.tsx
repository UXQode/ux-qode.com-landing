import { IconArrowUpRight, IconShieldCheck, IconUsers } from '@tabler/icons-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';
import { useTilt } from '@/hooks/useTilt';
import classes from './HeroVisual.module.css';

const bars = [42, 58, 50, 72, 64, 86, 78, 96];

/**
 * Animated "fund dashboard" mockup for the hero. Pure SVG + CSS motion:
 * an area/line chart that draws itself in, growing bar columns, a filling
 * donut, and floating metric cards — an at-a-glance infographic of what
 * aama.io looks like in action.
 */
export function HeroVisual() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const tiltRef = useTilt<HTMLDivElement>({ max: 9, scale: 1.03, lift: 20 });
  const nav = useCountUp(248.6, inView, 1800, 1);
  const investors = useCountUp(1240, inView, 1800);

  return (
    <div className={classes.visual} ref={ref} aria-hidden="true">
      <div className={classes.glowA} />
      <div className={classes.glowB} />

      {/* Floating metric cards */}
      <div className={`${classes.floatCard} ${classes.floatTop}`}>
        <div className={classes.floatIcon} data-variant="up">
          <IconArrowUpRight size={16} />
        </div>
        <div>
          <div className={classes.floatLabel}>Net IRR</div>
          <div className={classes.floatValue}>+18.4%</div>
        </div>
      </div>

      <div className={`${classes.floatCard} ${classes.floatBottom}`}>
        <div className={classes.floatIcon} data-variant="users">
          <IconUsers size={16} />
        </div>
        <div>
          <div className={classes.floatLabel}>Investors (LPs)</div>
          <div className={classes.floatValue}>{investors}</div>
        </div>
      </div>

      {/* Main dashboard panel — tilts in 3D toward the cursor */}
      <div className={classes.tiltWrap} ref={tiltRef}>
        <div className={classes.panel}>
          <div className={classes.sheen} aria-hidden="true" />
          <div className={classes.panelHead}>
            <div className={classes.dots}>
              <span /> <span /> <span />
            </div>
            <div className={classes.badge}>
              <IconShieldCheck size={12} /> SOC 2 · Live
            </div>
          </div>

          <div className={classes.navRow}>
            <div>
              <div className={classes.navLabel}>Fund NAV</div>
              <div className={classes.navValue}>
                ${nav}
                <span className={classes.navUnit}>M</span>
              </div>
            </div>
            <div className={classes.donut}>
              <svg viewBox="0 0 36 36" className={classes.donutSvg}>
                <circle className={classes.donutTrack} cx="18" cy="18" r="15.5" />
                <circle
                  className={`${classes.donutFill} ${inView ? classes.donutAnimate : ''}`}
                  cx="18"
                  cy="18"
                  r="15.5"
                />
              </svg>
              <div className={classes.donutText}>
                <span>92%</span>
                <small>Called</small>
              </div>
            </div>
          </div>

          {/* Area + line chart */}
          <svg className={classes.chart} viewBox="0 0 320 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3ac1ce" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#3ac1ce" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3ac1ce" />
                <stop offset="100%" stopColor="#0070f3" />
              </linearGradient>
            </defs>
            <path
              className={`${classes.area} ${inView ? classes.areaShow : ''}`}
              d="M0,95 C40,80 60,86 90,60 C120,36 150,52 180,40 C210,28 240,30 270,16 C290,8 305,10 320,6 L320,120 L0,120 Z"
              fill="url(#heroArea)"
            />
            <path
              className={`${classes.line} ${inView ? classes.lineDraw : ''}`}
              d="M0,95 C40,80 60,86 90,60 C120,36 150,52 180,40 C210,28 240,30 270,16 C290,8 305,10 320,6"
              fill="none"
              stroke="url(#heroLine)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* Bar chart */}
          <div className={classes.bars}>
            {bars.map((h, i) => (
              <div
                key={i}
                className={`${classes.bar} ${inView ? classes.barGrow : ''}`}
                style={{ ['--h' as string]: `${h}%`, ['--d' as string]: `${i * 90}ms` }}
              />
            ))}
          </div>

          <div className={classes.legend}>
            <span className={classes.legendItem}>
              <i className={classes.dotPrimary} /> Capital Called
            </span>
            <span className={classes.legendItem}>
              <i className={classes.dotMuted} /> Distributions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
