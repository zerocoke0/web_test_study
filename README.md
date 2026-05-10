# Atio Studio - Premium Digital Agency Landing Page

고객을 설득하는 힘, 비즈니스의 본질을 꿰뚫는 디자인과 기술력으로 당신의 가치를 증명하는 Atio Studio의 프리미엄 랜딩페이지입니다.

## 🚀 주요 특징 (Key Features)

- **Premium Ethereal Design**: 현대적이고 우아한 'Etherealism' 컨셉을 바탕으로 한 고감도 디자인 시스템.
- **Visual Hierarchy Optimization**: 1.25배율(Major Third)의 정밀한 타이포그래피 위계(100px-80px-64px) 적용.
- **Smooth Interaction**: Lenis 라이브러리를 활용한 부드러운 스크롤 경험과 Framer Motion 기반의 고급 애니메이션.
- **Dark Mode Aesthetic**: 깊이감 있는 블랙 테마와 보랏빛 포인트 컬러를 활용한 다크 모드 인터페이스.
- **Responsive Layout**: 모든 기기에서 완벽하게 작동하는 1400px 기반의 반응형 그리드 시스템.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, Three.js
- **Smooth Scroll**: Lenis (@studio-freight/lenis)
- **Deployment**: Netlify

## 📁 프로젝트 구조 (Project Structure)

- `/app`: 메인 페이지 및 레이아웃 설정
- `/components/main`: 히어로, 포트폴리오, 프로세스 등 주요 섹션 컴포넌트
- `/components/ui`: 스무스 스크롤 등 공통 UI 컴포넌트
- `/public`: SVG 로고 및 이미지 자산

## ⚡ 성능 최적화 (Performance Optimization)

구글 라이트하우스(Lighthouse) 점수 개선을 위해 다음과 같은 최적화 작업을 수행했습니다.

- **Font Optimization**: 외부 CDN 의존성을 제거하고 `next/font/local`을 통한 로컬 폰트 호스팅 및 `display: swap` 전략 적용. (기존 624KB 로딩 병목 해소)
- **Image LCP & Quality**: 
  - 포트폴리오 이미지의 WebP 변환 및 최적 해상도 유지.
  - `fetchPriority="high"` 및 `sizes` 속성 적용으로 LCP 요소 로딩 속도 극대화.
  - 불필요한 이미지 최적화 중복 방지를 위한 `unoptimized` 설정 및 고화질 자산 관리.
- **Main Thread Work Reduction**:
  - Hero 섹션의 Three.js 쉐이더 초기화 지연(100ms) 및 연산 루프 최적화.
  - 전역 SVG 노이즈 필터(`feTurbulence`)의 복잡도 감소(`numOctaves` 3 -> 2).
  - 무거운 애니메이션(`animate-pulse`) 최적화 및 메인 스레드 점유 시간 단축.
- **Bundle Optimization**: `next/dynamic`을 활용하여 화면 하단(Below the fold) 컴포넌트의 지연 로딩 구현.
- **SEO & Metadata**: 테마 컬러, 뷰포트 설정, Apple 아이콘 등 필수 메타데이터 보강을 통한 Best Practices 점수 개선.
- **High-Performance Visuals**: 
  - Three.js/WebGL 기반의 커스텀 쉐이더 백그라운드 도입으로 독보적인 브랜드 무드 연출.
  - 마우스/터치 인터랙션에 실시간 반응하는 역동적인 비주얼 시스템 구축.
  - 가독성 보호를 위한 시네마틱 비네트(Vignette) 및 텍스트 섀도우 레이어 적용.

## 📝 개발 가이드라인

본 프로젝트는 다음의 디자인 및 개발 원칙을 준수합니다.
1. **폰트 시스템**: 헤드라인(SUIT Variable), 본문(Pretendard)의 이원화 시스템.
2. **인터랙션**: 정적인 호버 효과와 부드러운 전환을 통한 프리미엄 사용자 경험.
3. **가로폭**: 전체 섹션 가로 최대폭 1400px 유지.

---
© 2026 Atio Studio. All Rights Reserved.
