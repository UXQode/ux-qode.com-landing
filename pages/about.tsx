import { About } from '@/components/About/About';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Seo } from '@/components/Seo/Seo';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About UXQode',
  description:
    'UXQode is a Singapore-incorporated software engineering firm, founded in 2017, building the financial software that runs behind licensed institutions and the AI that runs their back office.',
  url: 'https://ux-qode.com/about',
  about: { '@type': 'Organization', name: 'UXQode', url: 'https://ux-qode.com' },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ux-qode.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://ux-qode.com/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About UXQode — Singapore Fintech Engineering Firm"
        description="Founded in 2017, UXQode has grown from an enterprise software consultancy into a product engineering firm behind full-scale fund administration platforms for licensed fund managers and capital markets firms."
        path="/about"
        keywords="about UXQode, Singapore fintech company, fund administration software company, fintech engineering firm"
        structuredData={[structuredData, breadcrumb]}
      />

      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
