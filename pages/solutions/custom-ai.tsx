import { CustomAI } from '@/components/CustomAI/CustomAI';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Seo } from '@/components/Seo/Seo';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom AI Solutions',
  name: 'UXQode Custom AI Solutions',
  description:
    'Discovery-led AI engagements that map real workflows and automate them for fintechs, banks, insurers, corporates, and professional services firms — pilot on real documents before any long-term commitment.',
  provider: { '@type': 'Organization', name: 'UXQode', url: 'https://ux-qode.com' },
  areaServed: 'Worldwide',
  url: 'https://ux-qode.com/solutions/custom-ai',
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
      name: 'Custom AI Solutions',
      item: 'https://ux-qode.com/solutions/custom-ai',
    },
  ],
};

export default function CustomAIPage() {
  return (
    <>
      <Seo
        title="Custom AI Solutions for Banks & Fintechs | UXQode"
        description="What we did for the fund industry, we can build for yours. Discovery-led AI engagements for banks, fintechs, insurers, corporates, and professional services firms — piloted on your own documents."
        path="/solutions/custom-ai"
        keywords="custom AI solutions, AI automation consulting, workflow automation, document automation, discovery-led AI, AI for banks, AI for fintech, UXQode"
        structuredData={[structuredData, breadcrumb]}
      />

      <Header />
      <main>
        <CustomAI />
      </main>
      <Footer />
    </>
  );
}
