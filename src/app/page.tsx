import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-nature-bg">
      {/* Hero Section - Environmental Focus */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🌿</div>
          <div className="absolute bottom-10 right-10 text-9xl">♻️</div>
          <div className="absolute top-1/2 left-1/4 text-7xl">🌍</div>
          <div className="absolute top-1/3 right-1/3 text-6xl">💚</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="text-7xl animate-bounce">🌱</span>
              <span className="text-5xl">♻️</span>
              <span className="text-6xl">🌍</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              쿠그린
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              지구를 위한 작은 실천
            </p>
            <p className="text-xl md:text-2xl mb-3">
              KHU Green - 경희대학교 친환경 굿즈
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/95 max-w-3xl mx-auto">
              일회용품 대신 재사용 가능한 제품으로<br />
              지속 가능한 캠퍼스 문화를 함께 만들어가요
            </p>

            {/* Environmental Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-4xl mb-2">♻️</div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">재사용 컵 판매</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-4xl mb-2">🌊</div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm">절감된 일회용 컵</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-4xl mb-2">🌳</div>
                <div className="text-2xl font-bold">50kg</div>
                <div className="text-sm">CO₂ 감축</div>
              </div>
            </div>

            <Link href="/products">
              <Button variant="secondary" size="lg" className="!bg-white !text-primary hover:!bg-gray-100 hover:scale-105 transition-transform shadow-2xl">
                🌿 상품 둘러보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              왜 재사용이 중요할까요?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              하루에 버려지는 일회용 컵은 약 6억 개. 우리의 작은 선택이 지구를 구합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-primary-light to-white border-2 border-primary/20 rounded-2xl p-8 text-center hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-6xl mb-4">♻️</div>
              <h3 className="text-2xl font-bold mb-3 text-primary-dark">재사용</h3>
              <p className="text-gray-700 leading-relaxed">
                한 개의 재사용 컵으로<br />
                연간 <strong className="text-primary font-bold">500개 이상</strong>의<br />
                일회용 컵을 절감할 수 있습니다
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-white border-2 border-secondary/20 rounded-2xl p-8 text-center hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-6xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary-dark">플라스틱 감축</h3>
              <p className="text-gray-700 leading-relaxed">
                플라스틱 컵 하나가 분해되는데<br />
                <strong className="text-secondary font-bold">450년</strong>이 걸립니다<br />
                지금 바꿔야 합니다
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-white border-2 border-accent/20 rounded-2xl p-8 text-center hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-6xl mb-4">🌳</div>
              <h3 className="text-2xl font-bold mb-3 text-accent">탄소 감축</h3>
              <p className="text-gray-700 leading-relaxed">
                재사용 컵 사용으로<br />
                연간 <strong className="text-accent font-bold">3kg CO₂</strong><br />
                배출을 줄일 수 있습니다
              </p>
            </div>
          </div>

          {/* Additional Environmental Message */}
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-7xl">🎓💚</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  경희대학교, 환경을 생각하다
                </h3>
                <p className="text-gray-700 text-lg">
                  쿠그린은 경희인의 자긍심과 환경 보호를 동시에 실현합니다.
                  고품질 재사용 제품으로 지속 가능한 캠퍼스 문화를 만들어가요.
                </p>
              </div>
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

      {/* CTA Section - Environmental Action */}
      <section className="relative bg-gradient-to-r from-primary via-secondary to-primary text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center gap-4 mb-6 text-6xl">
            <span className="animate-bounce">🌍</span>
            <span className="animate-pulse">💚</span>
            <span className="animate-bounce" style={{animationDelay: '0.2s'}}>♻️</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            오늘부터 시작하는 환경 보호
          </h2>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            지구를 위한 작은 실천, 쿠그린과 함께하세요
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            재사용 컵 하나로 일회용품을 줄이고,<br />
            지속 가능한 미래를 만들어갈 수 있습니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <Button variant="secondary" size="lg" className="!bg-white !text-primary hover:!bg-gray-100 hover:scale-105 transition-transform shadow-2xl">
                🛒 지금 시작하기
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="!border-white !border-2 !text-white hover:!bg-white/10">
                📖 더 알아보기
              </Button>
            </Link>
          </div>

          <div className="mt-12 text-sm text-white/80">
            <p>✓ 무료 배송 | ✓ 환경 기여 인증 | ✓ 경희대 공식 굿즈</p>
          </div>
        </div>
      </section>
    </div>
  );
}
