'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductsPage() {
  const [filter, setFilter] = useState<'all' | 'cup-holder' | 'tumbler'>('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            상품 목록
          </h1>
          <p className="text-lg text-gray-600">
            경희대학교 친환경 굿즈를 만나보세요
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setFilter('cup-holder')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              filter === 'cup-holder'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            컵홀더
          </button>
          <button
            onClick={() => setFilter('tumbler')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              filter === 'tumbler'
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            텀블러
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">해당 카테고리에 상품이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
