import React, { useMemo, ReactNode } from 'react'
import '@/styles/Estimationpage/estimation.scss'
import MainBtn from '@/components/Button/MainBtn'
import Tab from '@/components/Tab/Tab'
import ProfileBadge from '@/components/Badge/ProfileBadge'
import profile from '@/assets/images/dalbong.jpg'
import ExpertProfileModal from '@/uiComponents/ExpertProfileEditPage/ExpertProfileModal'
import { useModalStore } from '@/store/modalStore'

interface EstimationCardProps {
  id: number;
  category: string;
  name: string;
  price: number;
  profileImage?: string;
  onProfileClick: (id: number) => void;
}

const EstimationCard: React.FC<EstimationCardProps> = ({ 
  id,
  category, 
  name, 
  price, 
  onProfileClick 
}) => {
  return (
    <div className="estimationCard">
      <div className="estimationCardHeader">
        <div className="estimationCardInfo">
          <span className="estimationCardCategory">{category}</span>
          <h3 className="estimationCardName">{name}</h3>
        </div>
        <ProfileBadge
          width="8rem"
          height="8rem"
          src={profile}
          borderRadius={'1.2rem'}
        />
      </div>
      <p className="estimationCardPrice">{price.toLocaleString()}원</p>
      <div className="estimationCardActions">
        <MainBtn
          name="전문가 프로필"
          size="medium"
          backgroundColor="$main-color"
          color="$font-color"
          onClick={() => onProfileClick(id)}
        />
        <MainBtn
          name="채팅하기"
          size="medium"
          backgroundColor="$main-color"
          color="$font-color"
        />
      </div>
    </div>
  )
}

interface Estimation {
  id: number;
  category: string;
  name: string;
  price: number;
  profileImage?: string;
}

const EstimationList: React.FC = () => {
  const categories = ['전체', '결혼식 사회자', '축가 가수', '영상촬영', '스냅 촬영']
  const { openModal } = useModalStore();
  const [selectedExpertId, setSelectedExpertId] = React.useState<number | null>(null);

  const estimations: Estimation[] = useMemo(() => [
    { id: 1, category: '결혼식 사회자', name: '김사회', price: 300000, profileImage: '/path/to/image1.jpg' },
    { id: 2, category: '축가 가수', name: '이가수', price: 500000, profileImage: '/path/to/image2.jpg' },
    { id: 3, category: '영상촬영', name: '박촬영', price: 800000, profileImage: '/path/to/image3.jpg' },
    { id: 4, category: '스냅 촬영', name: '최스냅', price: 600000, profileImage: '/path/to/image4.jpg' },
    { id: 5, category: '결혼식 사회자', name: '정사회', price: 350000, profileImage: '/path/to/image5.jpg' },
    { id: 6, category: '축가 가수', name: '강가수', price: 550000, profileImage: '/path/to/image6.jpg' },
    { id: 7, category: '축가 가수', name: '한가수', price: 650000, profileImage: '/path/to/image6.jpg' },
    { id: 8, category: '스냅 촬영', name: '장스냅', price: 400000, profileImage: '/path/to/image6.jpg' },
  ], []);

  const handleProfileClick = (id: number) => {
    setSelectedExpertId(id);
    openModal('expertProfile');
  };

  const renderEstimationCards = (category: string) => {
    const filteredEstimations = category === '전체'
      ? estimations
      : estimations.filter(estimation => estimation.category === category);

    return (
      <div className="estimationGrid">
        {filteredEstimations.map(estimation => (
          <EstimationCard 
            key={estimation.id} 
            {...estimation} 
            onProfileClick={handleProfileClick}
          />
        ))}
      </div>
    )
  }

  const tabContent: { label: string; content: ReactNode }[] = categories.map(category => ({
    label: category,
    content: renderEstimationCards(category),
  }))

  return (
    <div className="estimationContainer">
      <main className="estimationMain">
        <h2 className="estimationMainPageTitle">받은 견적 리스트</h2>
        <Tab tabs={tabContent} />
      </main>
      <ExpertProfileModal expertId={selectedExpertId} />
    </div>
  )
}

export default EstimationList