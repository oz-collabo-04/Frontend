import { useState } from 'react'
import { User } from 'lucide-react'

// 헤더 컴포넌트 (임시)
const Header = () => (
  <header className="flex items-center justify-between px-8 py-4 border-b">
    <div className="flex items-center gap-4">
      <h1 className="text-xl font-bold">So New Wedding</h1>
      <span className="text-sm">견적 요청</span>
    </div>
    <div className="flex items-center gap-6">
      <button className="text-sm">받은 견적</button>
      <button className="text-sm">채팅</button>
      <User className="w-6 h-6" />
    </div>
  </header>
)

// 메인 버튼 컴포넌트
interface BtnProps {
  name: string
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
  backgroundColor?: string
}

const MainBtn = ({ name, size = 'medium', disabled, backgroundColor }: BtnProps) => {
  const sizeClasses = {
    large: 'h-12 text-lg',
    medium: 'h-10 text-base',
    small: 'h-8 text-sm'
  }

  return (
    <button
      className={`px-6 font-semibold rounded-md disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed ${sizeClasses[size]}`}
      style={{ backgroundColor: backgroundColor || '#ffd800' }}
      disabled={disabled}
    >
      {name}
    </button>
  )
}

// 서비스 유형 정의
const serviceTypes = [
  { id: 'all', label: '전체' },
  { id: 'mc', label: '결혼식 사회자' },
  { id: 'singer', label: '축가 가수' },
  { id: 'video', label: '영상 촬영' },
  { id: 'photo', label: '스냅 촬영' }
]

export default function Component() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-[1920px] mx-auto px-8 py-8">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-2xl font-bold">받은 견적 리스트</h2>
        </div>

        {/* 필터 탭 */}
        <div className="relative mb-8">
          <div className="flex gap-12 border-b">
            {serviceTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`relative pb-4 transition-colors ${
                  activeTab === type.id ? 'text-black' : 'text-gray-400'
                }`}
              >
                <span className="flex items-center gap-2">
                  {type.label}
                </span>
                {activeTab === type.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative bg-white rounded-xl border-2 border-orange-200 p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-lg font-bold">결혼식 사회자</div>
                  </div>
                  <div className="text-lg mb-2">권순용</div>
                  <div className="text-2xl font-bold">300,000원</div>
                </div>
                <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <MainBtn
                  name="전문가 프로필"
                  size="medium"
                  backgroundColor="#ffd800"
                  className="flex-1"
                />
                <MainBtn
                  name="채팅하기"
                  size="medium"
                  backgroundColor="#ffd800"
                  className="flex-1"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}