import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-dark/20 text-white mt-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="text-9xl absolute top-10 left-10">🌿</div>
        <div className="text-9xl absolute bottom-10 right-10">♻️</div>
        <div className="text-7xl absolute top-1/2 left-1/2">🌍</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-4xl">🌱</span>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  쿠그린
                </h3>
                <p className="text-xs text-gray-400">KHU Green</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              경희대학교 친환경 굿즈 쇼핑몰
              <br />
              지속 가능한 캠퍼스 문화를 만들어갑니다
            </p>
            <div className="flex gap-2 text-2xl">
              <span>♻️</span>
              <span>🌍</span>
              <span>💚</span>
              <span>🌿</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-primary transition-colors">
                  상품 보기
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-300 hover:text-primary transition-colors">
                  장바구니
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">문의</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>📧 khugreen@khu.ac.kr</li>
              <li>📞 02-961-0114</li>
              <li>🏫 경희대학교 서울캠퍼스</li>
            </ul>
          </div>
        </div>

        {/* Environmental Message */}
        <div className="col-span-1 md:col-span-3 mt-8 border-t border-gray-700 pt-8">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🌍</span>
                <div>
                  <p className="text-lg font-semibold text-white">환경을 위한 우리의 약속</p>
                  <p className="text-sm text-gray-300">모든 제품 판매 수익의 일부를 환경 보호 단체에 기부합니다</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">♻️ 100%</p>
                <p className="text-xs text-gray-400">재사용 가능</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">🌱 지구를 위한 작은 실천, 쿠그린과 함께하세요</p>
          <p>&copy; 2025 쿠그린 (KHU Green). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
