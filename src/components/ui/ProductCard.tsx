import Link from 'next/link';
import { Product } from '@/lib/types';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 bg-gray-100 flex items-center justify-center">
          <div className="text-6xl">📦</div>
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-primary transition-colors">
            {product.nameKo}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.descriptionKo}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">
            {product.price.toLocaleString('ko-KR')}원
          </span>
          <span className="text-sm text-gray-500">
            재고: {product.stock}개
          </span>
        </div>

        <Link href={`/products/${product.id}`}>
          <Button variant="primary" className="w-full">
            상세보기
          </Button>
        </Link>
      </div>
    </div>
  );
}
