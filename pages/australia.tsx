import { Australia } from '@/components/Australia/Australia';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Seo } from '@/components/Seo/Seo';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Back-Office Automation',
  name: 'UXQode AI Back-Office Automation for Australian Companies',
  description:
    "UXQode's flagship AI back-office automation — invoice and AP processing, bank and custodian reconciliation, and fund-tech accounting — for Australian businesses, plus related legacy modernisation and custom software. Backed by a 20+ person engineering team with 200+ businesses served.",
  provider: {
    '@type': 'Organization',
    name: 'UXQode',
    url: 'https://ux-qode.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  url: 'https://ux-qode.com/australia',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'UXQode services for Australian companies',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Invoice & AP Automation',
          description:
            'AI extraction, validation, classification and posting of invoices and payables, with human-supervised exceptions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bank & Custodian Reconciliation',
          description:
            'Line-level automated matching of bank and custodian statements and cash movements, with explained breaks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fund Administration & Accounting',
          description:
            'NAV, fund accounting and investor reporting for fund managers and administrators, built on a deterministic accounting engine.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Process Automation',
          description: 'Approvals, reporting and manual back-office admin automated end to end.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legacy System Modernisation',
          description: 'Migrating businesses off spreadsheets and ageing vendor software.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dedicated Engineering Teams & Fractional CTO',
          description:
            'Extended engineering capacity and senior technical leadership on a subscription or fixed-scope basis.',
        },
      },
    ],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ux-qode.com' },
    { '@type': 'ListItem', position: 2, name: 'Australia', item: 'https://ux-qode.com/australia' },
  ],
};

export default function AustraliaPage() {
  return (
    <>
      <Seo
        title="AI Back-Office Automation for Australian Companies | UXQode"
        description="UXQode's flagship AI back-office automation — invoice processing, bank & custodian reconciliation, and fund-tech accounting — for Australian businesses, backed by a 20+ person engineering team with 200+ businesses served."
        path="/australia"
        keywords="AI back-office automation Australia, invoice automation Australia, bank reconciliation automation, fund administration software Australia, accounting automation Australia, business process automation Australia, legacy system modernisation Australia, dedicated engineering team Australia, fractional CTO Australia, UXQode"
        structuredData={[structuredData, breadcrumb]}
      />

      <Header />
      <main>
        <Australia />
      </main>
      <Footer />
    </>
  );
}
