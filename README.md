# 🌱 쿠그린 (KHU Green)

경희대학교 친환경 굿즈 쇼핑몰 - 재사용 컵홀더 & 텀블러

## 프로젝트 소개

쿠그린은 경희대학교의 "KHU"와 환경을 의미하는 "그린(Green)"을 결합한 이름입니다.
일회용품 사용을 줄이고 지속 가능한 캠퍼스 문화를 만들기 위한 친환경 굿즈 쇼핑몰입니다.

## 주요 기능

- ✅ 상품 목록 및 카테고리 필터링 (컵홀더/텀블러)
- ✅ 상품 상세 페이지
- ✅ 장바구니 기능 (LocalStorage 사용)
- ✅ 주문/결제 페이지
- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 경희대 브랜드 컬러 디자인 시스템

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks + LocalStorage
- **Font**: Noto Sans KR, Geist

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속하세요.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── page.tsx           # 홈페이지
│   ├── products/          # 상품 목록 & 상세
│   ├── cart/              # 장바구니
│   ├── checkout/          # 주문/결제
│   └── about/             # 소개 페이지
├── components/
│   ├── layout/            # Header, Footer
│   └── ui/                # Button, ProductCard 등
├── data/                  # 상품 데이터
└── lib/                   # Types 정의
```

## 디자인 컬러

- **Primary Green**: #22c55e (친환경)
- **Secondary Blue**: #0ea5e9 (경희대)
- **Accent Amber**: #f59e0b (활력)

## 다음 단계

- [ ] 실제 결제 시스템 연동 (Toss Payments, KakaoPay 등)
- [ ] 백엔드 API 연동 (상품/주문 관리)
- [ ] 사용자 인증 시스템
- [ ] 관리자 페이지
- [ ] 상품 이미지 업로드
- [ ] 리뷰 시스템

## 라이센스

MIT
