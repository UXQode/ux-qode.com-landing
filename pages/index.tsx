import Head from 'next/head';
import { Contact } from '@/components/Contact/Contact';
import { FAQ } from '@/components/FAQ/FAQ';
import { Feature } from '@/components/Feature/Feature';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Product } from '@/components/Product/Product';
import { FintechBand } from '@/components/service/FintechBand';
import { Stats } from '@/components/Stats/Stats';
import serviceClasses from '@/components/service/service.module.css';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://ux-qode.com/#website',
      url: 'https://ux-qode.com',
      name: 'UXQode',
      publisher: { '@id': 'https://ux-qode.com/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://ux-qode.com/#organization',
      name: 'UXQode',
      url: 'https://ux-qode.com',
      logo: 'https://ux-qode.com/logo.png',
      description:
        'UXQode is a Singapore-headquartered technology company delivering enterprise-grade digital solutions — enterprise software development, AI agent solutions, mobile applications, and IT consulting — and the maker of aama.io, end-to-end fund management software. Headquartered in Singapore.',
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

const faqs = [
  {
    q: 'What does UXQode do?',
    a: 'UXQode is a Singapore-based software company that builds enterprise software, AI agent solutions, mobile apps and IT consulting for global businesses. It is also the maker of aama.io, end-to-end fund-management software.',
  },
  {
    q: 'What is aama.io?',
    a: "aama.io is UXQode's flagship product — end-to-end fund-management software that lets fund managers run an entire fund on one platform: administration, IFRS NAV and accounting, KYC/AML investor onboarding, capital calls and distributions, and MAS-aligned compliance.",
  },
  {
    q: 'Where is UXQode based?',
    a: 'UXQode is headquartered in Singapore, serving clients globally.',
  },
  {
    q: 'Does UXQode offer fractional CTO and dedicated team services?',
    a: 'Yes. UXQode offers a Fractional CTO service — available as a monthly subscription or a fixed-scope engagement — as well as dedicated engineering teams. See the Fractional CTO and Team pages.',
  },
  {
    q: 'How can I contact UXQode?',
    a: 'Email dev@ux-qode.com or use the contact form on this site. The Singapore-based team typically replies within 24 hours.',
  },
];

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
        <meta property="og:image" content="https://ux-qode.com/logo.png" />
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
        <meta name="twitter:image" content="https://ux-qode.com/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <Feature />
        <Stats />
        <Product />
        <FintechBand
          withSection
          title={
            <>
              The team behind aama.io can <span className={serviceClasses.heroAccent}>build yours</span>
            </>
          }
          body={
            <>
              aama.io is what our engineers ship every day. Bring that same fund-tech depth to your
              own roadmap — bring in a <strong>fractional CTO</strong>, or get to know the{' '}
              <strong>team</strong> that builds it.
            </>
          }
          ctas={[
            { label: 'Fractional CTO', href: '/fractional-cto', primary: true },
            { label: 'Meet the team', href: '/teams' },
          ]}
        />
        <FAQ index="05" label="FAQ" title="Frequently asked questions" items={faqs} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
