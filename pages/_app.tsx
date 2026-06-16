import '@mantine/core/styles.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { AIBackground } from '@/components/AIBackground/AIBackground';
import { ScrollProgress } from '@/components/ScrollProgress/ScrollProgress';
import { theme } from '../theme';

const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {HUBSPOT_PORTAL_ID && (
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src={`https://js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
        />
      )}
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <ColorSchemeScript defaultColorScheme="dark" />
      </Head>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <AIBackground />
        <ScrollProgress />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
