import { Footer } from '@/components/Footer/Footer';
import { FractionalCTO } from '@/components/FractionalCTO/FractionalCTO';
import { Header } from '@/components/Header/Header';
import { Seo } from '@/components/Seo/Seo';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Fractional CTO',
  name: 'UXQode Fractional CTO',
  description:
    'Senior technical leadership on demand — architecture, hiring and delivery for founders and scale-ups, as a monthly subscription or a fixed-scope engagement. A UXQode consulting service.',
  provider: {
    '@type': 'Organization',
    name: 'UXQode',
    url: 'https://uxqode.co',
  },
  areaServed: 'Worldwide',
  url: 'https://ux-qode.com/fractional-cto',
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ux-qode.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Fractional CTO',
      item: 'https://ux-qode.com/fractional-cto',
    },
  ],
};

export default function FractionalCTOPage() {
  return (
    <>
      <Seo
        title="Fractional CTO — Senior Tech Leadership On Demand | UXQode"
        description="Hire a Fractional CTO from UXQode — architecture, hiring and delivery leadership for founders and scale-ups. Available as a monthly subscription or a fixed-scope packaged engagement."
        path="/fractional-cto"
        keywords="fractional CTO, part-time CTO, interim CTO, technical leadership, tech due diligence, architecture review, CTO as a service, UXQode, Singapore"
        structuredData={[structuredData, breadcrumb]}
      />

      <Header />
      <main>
        <FractionalCTO />
      </main>
      <Footer />
    </>
  );
}
