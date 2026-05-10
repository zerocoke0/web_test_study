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
      <Hero 
        headline={{
          line1: "고객이 이해하고, 신뢰하며,",
          line2: "문의하는 웹사이트"
        }}
        subtitle="서비스 소개부터 문의 흐름까지, 고객이 망설이는 지점을 먼저 정리합니다. 기획·카피·디자인·개발을 하나의 흐름으로 설계해 사업을 설득하는 웹사이트를 만듭니다."
        buttons={{
          primary: { text: "프로젝트 문의하기" },
          secondary: { text: "포트폴리오 보기" }
        }}
      />
      <Portfolio />
      <Process />
      <Guarantee />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

