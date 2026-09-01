import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Seo } from '@/components/Seo/Seo';
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

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ux-qode.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Team', item: 'https://ux-qode.com/teams' },
  ],
};

export default function TeamsPage() {
  return (
    <>
      <Seo
        title="Our Team — Dedicated Engineering Teams | UXQode"
        description="Meet the UXQode team — 20+ engineers, designers and product thinkers based in Singapore. The people who design, build and ship our work, including aama.io and the AI back office."
        path="/teams"
        keywords="UXQode team, dedicated engineering teams, our team, software engineers, product designers, Singapore, aama.io, technology company team"
        structuredData={[structuredData, breadcrumb]}
      />

      <Header />
      <main>
        <TeamsService />
      </main>
      <Footer />
    </>
  );
}
