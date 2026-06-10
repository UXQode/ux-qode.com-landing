import classes from './Logo.module.css';

interface LogoProps {
  /** Rendered height in px (width scales to the logo's aspect ratio). Default: 30 */
  height?: number;
}

/**
 * UXQode brand logo. Renders both the dark and light artwork and swaps between
 * them based on the active Mantine color scheme (handled in CSS, so there's no
 * hydration flash). Source files come from uxqode.co.
 */
export function Logo({ height = 30 }: LogoProps) {
  return (
    <span className={classes.logo} style={{ height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="UXQode" className={classes.light} width={749} height={333} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logoDark.png" alt="UXQode" className={classes.dark} width={749} height={333} />
    </span>
  );
}
