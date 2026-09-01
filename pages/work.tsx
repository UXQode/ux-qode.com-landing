import { CaseStudy } from '@/components/CaseStudy/CaseStudy';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Seo } from '@/components/Seo/Seo';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Matrix Mutual — Replacing a legacy mutual fund system, mid-flight',
  description:
    'A licensed capital markets company absorbed 5x growth with zero added headcount after UXQode replaced its legacy mutual fund system mid-flight, on a live scheme open to the public.',
  articleSection: 'Case Study',
  author: { '@type': 'Organization', name: 'UXQode', url: 'https://ux-qode.com' },
  publisher: {
    '@type': 'Organization',
    name: 'UXQode',
    url: 'https://ux-qode.com',
    logo: 'https://ux-qode.com/logo.png',
  },
  datePublished: '2024-05-01',
  dateModified: '2026-09-01',
  mainEntityOfPage: 'https://ux-qode.com/work',
  url: 'https://ux-qode.com/work',
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ux-qode.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Work', item: 'https://ux-qode.com/work' },
  ],
};

export default function WorkPage() {
  return (
    <>
      <Seo
        title="Fund Administration Case Study — Matrix Mutual | UXQode"
        description="Built a full fund administration engine and shipped it twice. See how UXQode replaced a legacy mutual fund system mid-flight — 5x growth absorbed with zero added headcount."
        path="/work"
        keywords="fund administration case study, Matrix Mutual, legacy fund system migration, fund accounting, aama.io, UXQode"
        structuredData={[structuredData, breadcrumb]}
      />

      <Header />
      <main>
        <CaseStudy />
      </main>
      <Footer />
    </>
  );
}
