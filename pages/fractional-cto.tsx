import Head from 'next/head';
import { FractionalCTO } from '@/components/FractionalCTO/FractionalCTO';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

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
    { '@type': 'ListItem', position: 2, name: 'Fractional CTO', item: 'https://ux-qode.com/fractional-cto' },
  ],
};

export default function FractionalCTOPage() {
  return (
    <>
      <Head>
        <title>Fractional CTO — Senior Technical Leadership On Demand | UXQode</title>
        <meta
          name="description"
          content="Hire a Fractional CTO from UXQode — architecture, hiring and delivery leadership for founders and scale-ups. Available as a monthly subscription or a fixed-scope packaged engagement."
        />
        <meta
          name="keywords"
          content="fractional CTO, part-time CTO, interim CTO, technical leadership, tech due diligence, architecture review, CTO as a service, UXQode, Singapore"
        />
        <link rel="canonical" href="https://ux-qode.com/fractional-cto" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ux-qode.com/fractional-cto" />
        <meta property="og:title" content="Fractional CTO — Senior Technical Leadership On Demand | UXQode" />
        <meta
          property="og:description"
          content="A seasoned CTO embedded in your team without the full-time hire — subscription or fixed-scope. By UXQode."
        />
        <meta property="og:image" content="https://ux-qode.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      </Head>

      <Header />
      <main>
        <FractionalCTO />
      </main>
      <Footer />
    </>
  );
}
