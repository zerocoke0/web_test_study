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
  title: "Atio Studio | 프리미엄 웹 에이전시",
  description: "비즈니스의 가치를 바꾸는 고감도 웹사이트 제작, Atio Studio",
  icons: {
    icon: "/Black.svg",
  }
};

import { VisualEffects } from "@/components/ui/visual-effects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white relative">
        <VisualEffects />
        {children}
      </body>
    </html>
  );
}
