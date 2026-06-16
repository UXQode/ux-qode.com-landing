import Head from 'next/head';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { TeamsService } from '@/components/Teams/TeamsService';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Team — UXQode',
  description:
    'Meet the UXQode team — 20+ engineers, designers and product thinkers based in Singapore who design, build and ship our work, including aama.io.',
  about: {
    '@type': 'Organization',
    name: 'UXQode',
    url: 'https://uxqode.co',
  },
  url: 'https://ux-qode.com/teams',
};

export default function TeamsPage() {
  return (
    <>
      <Head>
        <title>Our Team — The People Behind UXQode | Singapore</title>
        <meta
          name="description"
          content="Meet the UXQode team — 20+ engineers, designers and product thinkers based in Singapore. The people who design, build and ship our work, including aama.io."
        />
        <meta
          name="keywords"
          content="UXQode team, our team, software engineers, product designers, Singapore, aama.io, technology company team"
        />
        <link rel="canonical" href="https://ux-qode.com/teams" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ux-qode.com/teams" />
        <meta property="og:title" content="Our Team — The People Behind UXQode" />
        <meta
          property="og:description"
          content="Meet the UXQode team — engineers, designers and product thinkers based in Singapore."
        />
        <meta property="og:image" content="https://ux-qode.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header />
      <main>
        <TeamsService />
      </main>
      <Footer />
    </>
  );
}
