import { Flagship } from '@/components/Flagship/Flagship';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Seo } from '@/components/Seo/Seo';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI-Powered Back-Office Automation',
  name: 'UXQode AI Back Office',
  description:
    'AI-powered extraction, validation, classification, posting, and reconciliation of invoices, bank statements, and custodian statements — with human-supervised exceptions and a deterministic accounting core.',
  provider: { '@type': 'Organization', name: 'UXQode', url: 'https://ux-qode.com' },
  areaServed: 'Worldwide',
  url: 'https://ux-qode.com/solutions/ai-back-office',
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ux-qode.com' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://ux-qode.com/solutions' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AI Back Office',
      item: 'https://ux-qode.com/solutions/ai-back-office',
    },
  ],
};

export default function AIBackOfficePage() {
  return (
    <>
      <Seo
        title="AI Back Office Software — Document Automation | UXQode"
        description="Stop keying in documents. UXQode's AI back office reads invoices, bank statements, and custodian statements, posts them, and reconciles them — with your team supervising exceptions instead of doing data entry."
        path="/solutions/ai-back-office"
        keywords="AI back office, back-office automation, document automation, AI reconciliation, invoice automation, bank statement automation, custodian reconciliation, UXQode"
        structuredData={[structuredData, breadcrumb]}
      />

      <Header />
      <main>
        <Flagship />
      </main>
      <Footer />
    </>
  );
}
