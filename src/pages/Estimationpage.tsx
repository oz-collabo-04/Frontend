import React, { useMemo, ReactNode } from 'react'
import '@/styles/estimation.scss'
import MainBtn from '@/components/Button/MainBtn'
import Tab from '@/components/Tab/Tab'
import ProfileBadge from '@/components/Badge/ProfileBadge'

interface EstimationCardProps {
  category: string;
  name: string;
  price: number;
  profileImage?: string;
}

const EstimationCard: React.FC<EstimationCardProps> = ({ category, name, price, profileImage }) => (
  <div className="Estimation-card">
    <div className="Estimation-card__header">
      <span className="Estimation-card__category">{category}</span>
      <ProfileBadge
        width="60px"
        height="60px"
        src={profileImage}
        borderRadius={30}
        className="Estimation-card__profileImage"
        defaultColor="#ffd800"
      />
    </div>
    <h3 className="Estimation-card__name">{name}</h3>
    <p className="Estimation-card__price">{price.toLocaleString()}원</p>
    <div className="Estimation-card__actions">
      <MainBtn
        name="전문가 프로필"
        size="small"
        backgroundColor="#FFE14C"
        color="#000000"
      />
      <MainBtn
        name="채팅하기"
        size="small"
        backgroundColor="#FFFFFF"
        borderColor="#000000"
        color="#000000"
      />
    </div>
  </div>
)

interface Estimation {
  id: number;
  category: string;
  name: string;
  price: number;
  profileImage?: string;
}

const EstimationList: React.FC = () => {
  const categories = ['전체', '결혼식 사회자', '축가 가수', '영상촬영', '스냅 촬영']

  const estimations: Estimation[] = useMemo(() => [
    { id: 1, category: '결혼식 사회자', name: '김사회', price: 300000, profileImage: '/path/to/image1.jpg' },
    { id: 2, category: '축가 가수', name: '이가수', price: 500000, profileImage: '/path/to/image2.jpg' },
    { id: 3, category: '영상촬영', name: '박촬영', price: 800000, profileImage: '/path/to/image3.jpg' },
    { id: 4, category: '스냅 촬영', name: '최스냅', price: 600000, profileImage: '/path/to/image4.jpg' },
    { id: 5, category: '결혼식 사회자', name: '정사회', price: 350000, profileImage: '/path/to/image5.jpg' },
    { id: 6, category: '축가 가수', name: '강가수', price: 550000, profileImage: '/path/to/image6.jpg' },
  ], []);

  const renderEstimationCards = (category: string) => {
    const filteredEstimations = category === '전체'
      ? estimations
      : estimations.filter(estimation => estimation.category === category);

    const cards = filteredEstimations.map(estimation => (
      <EstimationCard key={estimation.id} {...estimation} />
    ));

    // 빈 카드를 추가하여 레이아웃 유지
    const emptyCards = Array(3 - (cards.length % 3 || 3))
      .fill(null)
      .map((_, index) => <div key={`empty-${index}`} className="Estimation-card" style={{visibility: 'hidden'}} />);

    return (
      <div className="Estimation-grid">
        {cards}
        {emptyCards}
      </div>
    )
  }

  const tabContent: { label: string; content: ReactNode }[] = categories.map(category => ({
    label: category,
    content: renderEstimationCards(category),
  }))

  return (
    <div className="Estimation-container">
      <main className="Estimation-main">
        <h2 className="Estimation-main__pageTitle">받은 견적 리스트</h2>
        <Tab tabs={tabContent} />
      </main>
    </div>
  )
}

export default EstimationList;
