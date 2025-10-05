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
    <div className="bg-nature-bg min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Environmental Message */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-3 mb-4">
            <span className="text-5xl">🌱</span>
            <span className="text-5xl">♻️</span>
            <span className="text-5xl">🌍</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            친환경 제품 라인업
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            경희대학교 친환경 굿즈를 만나보세요
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            모든 제품은 재사용 가능하며, 연간 수백 개의 일회용품을 절감할 수 있습니다
          </p>
        </div>

        {/* Environmental Impact Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-around gap-4 text-center">
            <div>
              <div className="text-3xl mb-1">♻️</div>
              <div className="text-2xl font-bold">{products.length}</div>
              <div className="text-sm opacity-90">친환경 제품</div>
            </div>
            <div>
              <div className="text-3xl mb-1">🌊</div>
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-sm opacity-90">절감된 일회용 컵</div>
            </div>
            <div>
              <div className="text-3xl mb-1">🌳</div>
              <div className="text-2xl font-bold">50kg</div>
              <div className="text-sm opacity-90">CO₂ 감축</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-primary/20'
            }`}
          >
            🌿 전체
          </button>
          <button
            onClick={() => setFilter('cup-holder')}
            className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              filter === 'cup-holder'
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-primary/20'
            }`}
          >
            ☕ 컵홀더
          </button>
          <button
            onClick={() => setFilter('tumbler')}
            className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
              filter === 'tumbler'
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-primary/20'
            }`}
          >
            🧃 텀블러
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
