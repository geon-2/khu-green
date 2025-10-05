import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🌱</span>
              <h3 className="text-xl font-bold text-primary">쿠그린</h3>
            </div>
            <p className="text-gray-300 text-sm">
              경희대학교 친환경 굿즈 쇼핑몰
              <br />
              지속 가능한 캠퍼스 문화를 만들어갑니다
            </p>
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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 쿠그린 (KHU Green). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
