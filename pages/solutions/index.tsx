import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Seo } from '@/components/Seo/Seo';
import { SolutionsHub } from '@/components/Solutions/SolutionsHub';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'UXQode Solutions',
  description:
    'AI back-office automation, custom AI solutions, fund administration platforms, legacy migration, SPV formation, banking process automation, custom enterprise fintech, and dedicated engineering teams.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'AI Back-Office Automation',
      url: 'https://ux-qode.com/solutions/ai-back-office',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Custom AI Solutions',
      url: 'https://ux-qode.com/solutions/custom-ai',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Fund Administration Platforms',
      url: 'https://ux-qode.com/work',
    },
    { '@type': 'ListItem', position: 4, name: 'Legacy Migration', url: 'https://ux-qode.com/work' },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'SPV Formation & Administration',
      url: 'https://ux-qode.com/#contact-us',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Banking Process Automation',
      url: 'https://ux-qode.com/work',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'Custom Enterprise Fintech',
      url: 'https://ux-qode.com/#contact-us',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'Dedicated Engineering Teams',
      url: 'https://ux-qode.com/teams',
    },
  ],
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ux-qode.com' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://ux-qode.com/solutions' },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <Seo
        title="Solutions — AI Back Office, Custom AI & Fund Admin | UXQode"
        description="Eight ways to work with UXQode: AI back-office automation, custom AI solutions, fund administration platforms, legacy migration, SPV formation, banking process automation, and dedicated engineering teams."
        path="/solutions"
        keywords="UXQode solutions, AI back office, custom AI solutions, fund administration platform, legacy migration, SPV administration, banking process automation, dedicated engineering teams"
        structuredData={[structuredData, breadcrumb]}
      />

      <Header />
      <main>
        <SolutionsHub />
      </main>
      <Footer />
    </>
  );
}
