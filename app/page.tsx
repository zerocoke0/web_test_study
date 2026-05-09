import { Hero } from '@/components/main/hero';
import { Navbar } from '@/components/main/navbar';
import { Portfolio } from '@/components/main/portfolio';
import { Process } from '@/components/main/process';
import { Guarantee } from '@/components/main/guarantee';
import { FAQ } from '@/components/main/faq';
import { CTA } from '@/components/main/cta';
import { Footer } from '@/components/main/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <Process />
      <Guarantee />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

