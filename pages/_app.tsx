import '@mantine/core/styles.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { MantineProvider } from '@mantine/core';
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07111f" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <AIBackground />
        <ScrollProgress />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
