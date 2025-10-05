'use client';

import { useParams, useRouter } from 'next/navigation';
import { products } from '@/data/products';
import Button from '@/components/ui/Button';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">상품을 찾을 수 없습니다</h1>
          <Button onClick={() => router.push('/products')}>
            상품 목록으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('장바구니에 추가되었습니다!');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg flex items-center justify-center h-96">
              <div className="text-9xl">📦</div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {product.category === 'cup-holder' ? '컵홀더' : '텀블러'}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.nameKo}
                </h1>

                <p className="text-gray-600 text-lg mb-6">
                  {product.descriptionKo}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">제품 특징</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 mb-2">재고: {product.stock}개</p>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-primary">
                    {product.price.toLocaleString('ko-KR')}원
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <label className="text-gray-700 font-medium">수량:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="flex-1"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                  >
                    장바구니 담기
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => {
                      handleAddToCart();
                      router.push('/cart');
                    }}
                    disabled={product.stock === 0}
                  >
                    바로 구매
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
