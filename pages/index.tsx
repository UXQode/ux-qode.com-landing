import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Product } from '@/components/Product/Product';
import { Feature } from '@/components/Feature/Feature';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'UXQode',
  url: 'https://ux-qode.com',
  logo: 'https://ux-qode.com/favicon.svg',
  description:
    'UXQode is a Singapore-headquartered technology company engineering AI-powered digital solutions for global enterprises.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Robinson Road, #14-04',
    addressLocality: 'Singapore Business Federation Center',
    postalCode: '068914',
    addressCountry: 'SG',
  },
  sameAs: ['https://uxqode.co', 'https://aama.io'],
  foundingLocation: 'Singapore',
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>UXQode — AI-Powered Digital Solutions | Headquartered in Singapore</title>
        <meta
          name="description"
          content="UXQode is a Singapore-based AI technology company building intelligent digital solutions for global enterprises. Discover aama.io — our flagship AI platform for business intelligence and talent matching."
        />
        <meta
          name="keywords"
          content="AI solutions, digital transformation, Singapore tech company, aama.io, AI platform, machine learning, business intelligence, cloud integration, custom software development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ux-qode.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ux-qode.com" />
        <meta
          property="og:title"
          content="UXQode — AI-Powered Digital Solutions | Singapore"
        />
        <meta
          property="og:description"
          content="Singapore-headquartered AI technology company building intelligent digital solutions for global enterprises. Our flagship platform aama.io is redefining how businesses leverage AI."
        />
        <meta property="og:image" content="https://ux-qode.com/og-image.png" />
        <meta property="og:site_name" content="UXQode" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@uxqode" />
        <meta
          name="twitter:title"
          content="UXQode — AI-Powered Digital Solutions | Singapore"
        />
        <meta
          name="twitter:description"
          content="Singapore-headquartered AI technology company. Discover aama.io — our flagship AI platform."
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
        <Feature />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
