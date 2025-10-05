export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🌱</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              쿠그린 소개
            </h1>
            <p className="text-xl text-gray-600">
              KHU Green - 경희대학교 친환경 프로젝트
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                쿠그린이란?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                쿠그린은 경희대학교의 "KHU"와 환경을 의미하는 "그린(Green)"을 결합한 이름입니다.
                우리는 경희대학교 학생들의 일상생활에서 시작되는 작은 환경 보호 실천을 응원하고,
                지속 가능한 캠퍼스 문화를 만들어가는 것을 목표로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                우리의 미션
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">♻️</div>
                  <h3 className="font-bold text-gray-800 mb-2">친환경 실천</h3>
                  <p className="text-gray-600 text-sm">
                    일회용품 사용을 줄이고 재사용 가능한 제품을 사용하여 환경을 보호합니다
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🎓</div>
                  <h3 className="font-bold text-gray-800 mb-2">캠퍼스 문화</h3>
                  <p className="text-gray-600 text-sm">
                    경희대학교 굿즈를 통해 학교에 대한 자긍심과 소속감을 높입니다
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">💚</div>
                  <h3 className="font-bold text-gray-800 mb-2">지속 가능성</h3>
                  <p className="text-gray-600 text-sm">
                    환경에 대한 인식을 높이고 지속 가능한 소비 문화를 확산시킵니다
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🌍</div>
                  <h3 className="font-bold text-gray-800 mb-2">글로벌 책임</h3>
                  <p className="text-gray-600 text-sm">
                    기후 변화에 대응하고 더 나은 미래를 위해 함께 행동합니다
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                왜 재사용 제품인가요?
              </h2>
              <div className="bg-primary-light bg-opacity-20 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>매년 수백만 개의 일회용 컵이 버려지고 있습니다</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>재사용 컵 사용으로 연간 플라스틱 쓰레기를 크게 줄일 수 있습니다</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>텀블러 사용 시 카페 할인 혜택도 받을 수 있습니다</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>작은 실천이 모여 큰 변화를 만듭니다</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                함께해요!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                쿠그린은 단순히 제품을 판매하는 것을 넘어, 경희대학교 구성원들과 함께
                친환경 문화를 만들어가는 커뮤니티입니다. 여러분의 작은 실천이
                캠퍼스와 지구의 미래를 바꿀 수 있습니다. 쿠그린과 함께 시작해보세요!
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-primary to-secondary rounded-lg text-white text-center">
            <p className="text-lg font-medium">
              문의사항이 있으신가요?
            </p>
            <p className="mt-2">
              📧 khugreen@khu.ac.kr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
