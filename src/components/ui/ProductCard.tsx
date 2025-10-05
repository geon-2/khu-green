import Link from 'next/link';
import { Product } from '@/lib/types';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const categoryEmoji = product.category === 'cup-holder' ? '☕' : '🧃';

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 hover:border-primary/30 hover:scale-105">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 bg-gradient-to-br from-primary-light via-white to-secondary/10 flex items-center justify-center overflow-hidden">
          {/* Environmental Badge */}
          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            ♻️ 재사용
          </div>

          {/* Product Icon */}
          <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
            {categoryEmoji}
          </div>

          {/* Eco Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="text-6xl absolute top-2 left-2">🌿</div>
            <div className="text-6xl absolute bottom-2 right-2">🌱</div>
          </div>
        </div>
      </Link>

      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {product.category === 'cup-holder' ? '🍃 컵홀더' : '💧 텀블러'}
          </span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-primary transition-colors group-hover:text-primary">
            {product.nameKo}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.descriptionKo}
        </p>

        {/* Environmental Impact */}
        <div className="bg-primary-light/30 rounded-lg p-3 mb-4 border border-primary/10">
          <div className="flex items-center gap-2 text-xs text-primary-dark">
            <span>🌍</span>
            <span className="font-semibold">연간 500개 일회용 컵 절감 효과</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">
            {product.price.toLocaleString('ko-KR')}원
          </span>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            재고 {product.stock}개
          </span>
        </div>

        <Link href={`/products/${product.id}`}>
          <Button variant="primary" className="w-full group-hover:shadow-lg transition-shadow">
            🛒 상세보기
          </Button>
        </Link>
      </div>
    </div>
  );
}
