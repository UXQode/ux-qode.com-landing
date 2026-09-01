import { Contact } from '@/components/Contact/Contact';
import { FAQ } from '@/components/FAQ/FAQ';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { AboutStrip } from '@/components/Home/AboutStrip';
import { CaseStudyTeaser } from '@/components/Home/CaseStudyTeaser';
import { SolutionsTeaser } from '@/components/Home/SolutionsTeaser';
import { Seo } from '@/components/Seo/Seo';
import { FintechBand } from '@/components/service/FintechBand';
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
        'UXQode is a Singapore-incorporated software engineering firm building the financial software that runs behind licensed institutions — fund administration platforms, banking automation, and AI-powered back-office systems — and the maker of aama.io.',
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
      foundingDate: '2017',
    },
    {
      '@type': 'Service',
      name: 'AI-Powered Back-Office Automation',
      serviceType: 'Document processing and reconciliation automation',
      provider: { '@id': 'https://ux-qode.com/#organization' },
      description:
        'AI-powered extraction, validation, classification, posting, and reconciliation of invoices, bank statements, and custodian statements — with human-supervised exceptions and a deterministic accounting core.',
      areaServed: 'Worldwide',
      url: 'https://ux-qode.com/solutions/ai-back-office',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'aama.io',
      url: 'https://aama.io',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description:
        'aama.io is UXQode’s Singapore-focused fund administration platform, built on the same core engine UXQode uses to run fund administration, IFRS-compliant accounting and NAV, KYC/AML investor onboarding, capital calls and distributions, and MAS-aligned compliance for licensed fund managers.',
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
    a: 'UXQode is a Singapore-incorporated software engineering firm that builds financial software for licensed institutions — fund administration platforms, banking automation, and AI-powered back-office systems that read, post, and reconcile documents automatically. See our Solutions page for the full list.',
  },
  {
    q: 'Where is UXQode based?',
    a: 'UXQode is incorporated in Singapore, serving licensed fund managers, capital markets firms, and banks globally.',
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
      <Seo
        title="UXQode — Financial Software & AI Back Office | Singapore"
        description="UXQode builds the financial software behind licensed institutions — AI back-office automation, custom AI solutions, and fund administration platforms. Singapore-based, serving fund managers, capital markets firms, and banks."
        path="/"
        keywords="UXQode, AI back office, back-office automation, document automation, AI reconciliation, fund administration software, banking automation, custom AI solutions, aama.io, fund accounting, NAV calculation, KYC AML, capital calls, MAS compliance, Singapore fintech"
        structuredData={structuredData}
      />

      <Header />
      <main>
        <Hero />
        <AboutStrip />
        <SolutionsTeaser />
        <CaseStudyTeaser />
        <FintechBand
          withSection
          variant="compact"
          title={
            <>
              The team behind aama.io can{' '}
              <span className={serviceClasses.heroAccent}>build yours</span>
            </>
          }
          body={
            <>
              aama.io is what our engineers ship every day. Bring that same fund-tech and AI depth
              to your own roadmap — bring in a <strong>fractional CTO</strong>, or get to know the{' '}
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
