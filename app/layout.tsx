import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atio Studio | 압도적인 성과를 만드는 프리미엄 웹 에이전시",
  description: "기획부터 배포까지 단 1주일. 비즈니스의 가치를 증명하는 고감도 랜딩페이지와 웹 어플리케이션을 제작합니다.",
  keywords: ["웹 에이전시", "랜딩페이지 제작", "홈페이지 제작", "Atio Studio", "프리미엄 웹디자인", "Next.js 에이전시"],
  authors: [{ name: "Atio Studio" }],
  openGraph: {
    title: "Atio Studio | 프리미엄 웹 에이전시",
    description: "비즈니스의 가치를 증명하는 고감도 웹사이트 제작, Atio Studio",
    url: "https://web-test-study.netlify.app",
    siteName: "Atio Studio",
    images: [
      {
        url: "/images/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Atio Studio Premium Web Agency",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atio Studio | 프리미엄 웹 에이전시",
    description: "비즈니스의 가치를 증명하는 고감도 웹사이트 제작",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/Black.svg",
  }
};

import { VisualEffects } from "@/components/ui/visual-effects";
import SmoothScroll from "@/components/ui/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Atio Studio",
              "url": "https://web-test-study.netlify.app",
              "logo": "https://web-test-study.netlify.app/Black.svg",
              "description": "기획부터 배포까지 단 1주일. 압도적인 성과를 만드는 프리미엄 웹 에이전시",
              "sameAs": [
                "https://www.instagram.com/atio.studio" // 예시 소셜 링크
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+82-10-0000-0000",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white relative">
        <VisualEffects />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
