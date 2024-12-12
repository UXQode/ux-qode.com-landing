import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Feature } from '@/components/Feature/Feature';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero/>
      <Feature />
      <Contact />
    </>
  );
}
