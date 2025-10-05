import { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'KHU Green Cup Holder',
    nameKo: '쿠그린 컵홀더',
    description: 'Eco-friendly reusable cup holder with KHU branding',
    descriptionKo: '경희대학교 굿즈 친환경 재사용 컵홀더',
    price: 15000,
    images: ['/products/cup-holder-1.jpg'],
    category: 'cup-holder',
    stock: 50,
    features: [
      '친환경 소재 사용',
      '경희대 로고 각인',
      '다양한 컵 사이즈 호환',
      '세척 용이'
    ]
  },
  {
    id: '2',
    name: 'KHU Green Tumbler - Classic',
    nameKo: '쿠그린 텀블러 - 클래식',
    description: 'Stainless steel tumbler with KHU logo - Classic edition',
    descriptionKo: '경희대학교 로고 스테인리스 텀블러 - 클래식 에디션',
    price: 25000,
    images: ['/products/tumbler-classic.jpg'],
    category: 'tumbler',
    stock: 30,
    features: [
      '스테인리스 스틸 재질',
      '보온/보냉 기능',
      '500ml 용량',
      '경희대 로고 각인'
    ]
  },
  {
    id: '3',
    name: 'KHU Green Tumbler - Premium',
    nameKo: '쿠그린 텀블러 - 프리미엄',
    description: 'Premium tumbler with vacuum insulation - KHU edition',
    descriptionKo: '진공 단열 프리미엄 텀블러 - 경희대 에디션',
    price: 35000,
    images: ['/products/tumbler-premium.jpg'],
    category: 'tumbler',
    stock: 25,
    features: [
      '이중 진공 단열',
      '24시간 보온/보냉',
      '750ml 대용량',
      '프리미엄 패키징'
    ]
  },
  {
    id: '4',
    name: 'KHU Green Cup Holder Set',
    nameKo: '쿠그린 컵홀더 세트',
    description: 'Set of 3 cup holders in different colors',
    descriptionKo: '3개입 다양한 색상 컵홀더 세트',
    price: 40000,
    images: ['/products/cup-holder-set.jpg'],
    category: 'cup-holder',
    stock: 20,
    features: [
      '3가지 컬러 (그린, 블루, 화이트)',
      '친환경 소재',
      '경희대 로고 각인',
      '선물용 패키징'
    ]
  }
];
