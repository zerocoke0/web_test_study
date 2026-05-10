import dynamic from 'next/dynamic';
import { Hero } from '@/components/main/hero';
import { Navbar } from '@/components/main/navbar';
import { Portfolio } from '@/components/main/portfolio';

// Lazy load non-critical sections
const Process = dynamic(() => import('@/components/main/process').then(mod => mod.Process));
const Guarantee = dynamic(() => import('@/components/main/guarantee').then(mod => mod.Guarantee));
const FAQ = dynamic(() => import('@/components/main/faq').then(mod => mod.FAQ));
const CTA = dynamic(() => import('@/components/main/cta').then(mod => mod.CTA));
const Footer = dynamic(() => import('@/components/main/footer').then(mod => mod.Footer));

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

