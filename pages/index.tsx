import Head from 'next/head';
import { Contact } from '@/components/Contact/Contact';
import { Feature } from '@/components/Feature/Feature';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Product } from '@/components/Product/Product';
import { Stats } from '@/components/Stats/Stats';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://ux-qode.com/#organization',
      name: 'UXQode',
      url: 'https://ux-qode.com',
      logo: 'https://ux-qode.com/favicon.svg',
      description:
        'UXQode is a Singapore-headquartered technology company delivering enterprise-grade digital solutions — enterprise software development, AI agent solutions, mobile applications, and IT consulting — and the maker of aama.io, end-to-end fund management software. Operating from Singapore and Nepal.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Robinson Road, #14-04',
        addressLocality: 'Singapore Business Federation Center',
        postalCode: '068914',
        addressCountry: 'SG',
      },
      sameAs: [
        'https://uxqode.co',
        'https://aama.io',
        'https://www.linkedin.com/company/uxqode/',
        'https://www.facebook.com/UXQode/',
        'https://www.instagram.com/uxqode/',
      ],
      foundingLocation: 'Singapore',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'aama.io',
      url: 'https://aama.io',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description:
        'aama.io is end-to-end fund management software that lets fund managers run their entire fund on one platform — fund administration, IFRS-compliant accounting and NAV, KYC/AML investor onboarding, capital calls and distributions, real-time portfolio reporting, and MAS-aligned compliance.',
      publisher: { '@id': 'https://ux-qode.com/#organization' },
      audience: {
        '@type': 'Audience',
        audienceType:
          'Fund managers, private equity, venture capital, hedge funds, family offices, SPVs',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>UXQode — AI-Powered Digital Solutions | Headquartered in Singapore</title>
        <meta
          name="description"
          content="UXQode is a Singapore-based AI technology company building intelligent digital solutions for global enterprises — and the maker of aama.io, end-to-end fund management software that lets fund managers run their entire fund on one platform."
        />
        <meta
          name="keywords"
          content="UXQode, aama.io, fund management software, fund administration, fund accounting, NAV calculation, investor onboarding, KYC AML, capital calls, fund reporting, MAS compliance, Singapore tech company, AI solutions, custom software development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ux-qode.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ux-qode.com" />
        <meta property="og:title" content="UXQode — AI-Powered Digital Solutions | Singapore" />
        <meta
          property="og:description"
          content="Singapore-headquartered AI technology company building intelligent digital solutions for global enterprises — and the maker of aama.io, end-to-end fund management software for modern fund managers."
        />
        <meta property="og:image" content="https://ux-qode.com/og-image.png" />
        <meta property="og:site_name" content="UXQode" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@uxqode" />
        <meta name="twitter:title" content="UXQode — AI-Powered Digital Solutions | Singapore" />
        <meta
          name="twitter:description"
          content="Singapore-headquartered AI technology company and maker of aama.io — end-to-end fund management software. Run your entire fund on one platform."
        />
        <meta name="twitter:image" content="https://ux-qode.com/og-image.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <Product />
        <Stats />
        <Feature />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
