import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🌱</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              쿠그린
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              KHU Green - 경희대학교 친환경 굿즈
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              지속 가능한 캠퍼스 문화를 함께 만들어가요
            </p>
            <Link href="/products">
              <Button variant="secondary" size="lg" className="!bg-white !text-primary hover:!bg-gray-100 shadow-lg">
                상품 둘러보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">친환경</h3>
              <p className="text-gray-600">
                재사용 가능한 제품으로 환경을 보호합니다
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">경희대 굿즈</h3>
              <p className="text-gray-600">
                경희인의 자긍심을 담은 공식 굿즈
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">고품질</h3>
              <p className="text-gray-600">
                엄선된 소재로 만든 프리미엄 제품
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            인기 상품
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="outline" size="lg">
                모든 상품 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            지금 시작하세요
          </h2>
          <p className="text-xl mb-8">
            쿠그린과 함께 친환경 캠퍼스 라이프를 경험하세요
          </p>
          <Link href="/products">
            <Button variant="secondary" size="lg" className="!bg-white !text-primary hover:!bg-gray-100 shadow-lg">
              쇼핑 시작하기
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
