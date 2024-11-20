import React, { useState, useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/Estimationpage/estimation.scss'
import MainBtn from '@/components/Button/MainBtn'
import Tab from '@/components/Tab/Tab'
import ProfileBadge from '@/components/Badge/ProfileBadge'
import profile from '@/assets/images/dalbong.jpg'
import ExpertProfileModal from '@/uiComponents/ExpertProfileEditPage/ExpertProfileModal'
import { useModalStore } from '@/store/modalStore'

interface Estimation {
  id: number;
  category: string;
  name: string;
  price: number;
  profileImage?: string;
}

interface EstimationCardProps {
  estimation: Estimation;
  onProfileClick: (id: number) => void;
  onChatClick: (id: number) => void;
}

const EstimationCard: React.FC<EstimationCardProps> = ({ 
  estimation,
  onProfileClick,
  onChatClick
}) => {
  return (
    <div className="estimationCard">
      <div className="estimationCardHeader">
        <div className="estimationCardInfo">
          <span className="estimationCardCategory">{estimation.category}</span>
          <h3 className="estimationCardName">{estimation.name}</h3>
        </div>
        <ProfileBadge
          width="8rem"
          height="8rem"
          src={profile}
          borderRadius={'1.2rem'}
        />
      </div>
      <p className="estimationCardPrice">{estimation.price.toLocaleString()}원</p>
      <div className="estimationCardActions">
        <MainBtn
          name="전문가 프로필"
          size="medium"
          backgroundColor="$main-color"
          color="$font-color"
          onClick={() => onProfileClick(estimation.id)}
        />
        <MainBtn
          name="채팅하기"
          size="medium"
          backgroundColor="$main-color"
          color="$font-color"
          onClick={() => onChatClick(estimation.id)}
        />
      </div>
    </div>
  )
}

const EstimationList: React.FC = () => {
  const navigate = useNavigate()
  const categories = ['전체', '결혼식 사회자', '축가 가수', '영상촬영', '스냅 촬영']
  const { openModal } = useModalStore();
  const [selectedExpertId, setSelectedExpertId] = useState<number | null>(null);
  const [estimations, setEstimations] = useState<Estimation[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchEstimations = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch('https://api.example.com/estimations');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch estimations');
  //       }
  //       const data = await response.json();
  //       setEstimations(data);
  //     } catch (err) {
  //       setError('Failed to load estimations. Please try again later.');
  //       console.error('Error fetching estimations:', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchEstimations();
  // }, []);

  // 정적 데이터 사용
  const staticEstimations: Estimation[] = [
    { id: 1, category: '결혼식 사회자', name: '김사회', price: 300000, profileImage: '/path/to/image1.jpg' },
    { id: 2, category: '축가 가수', name: '이가수', price: 500000, profileImage: '/path/to/image2.jpg' },
    { id: 3, category: '영상촬영', name: '박촬영', price: 800000, profileImage: '/path/to/image3.jpg' },
    { id: 4, category: '스냅 촬영', name: '최스냅', price: 600000, profileImage: '/path/to/image4.jpg' },
    { id: 5, category: '결혼식 사회자', name: '정사회', price: 350000, profileImage: '/path/to/image5.jpg' },
    { id: 6, category: '축가 가수', name: '강가수', price: 550000, profileImage: '/path/to/image6.jpg' },
    { id: 7, category: '축가 가수', name: '한가수', price: 650000, profileImage: '/path/to/image7.jpg' },
    { id: 8, category: '스냅 촬영', name: '장스냅', price: 400000, profileImage: '/path/to/image8.jpg' },
  ];

  useEffect(() => {
    setEstimations(staticEstimations);
  }, []);

  const handleProfileClick = (id: number) => {
    setSelectedExpertId(id);
    openModal('expertProfile');
  };

  const handleChatClick = (id: number) => {
    navigate(`/chatpage/${id}`);
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
            estimation={estimation}
            onProfileClick={handleProfileClick}
            onChatClick={handleChatClick}
          />
        ))}
      </div>
    )
  }

  const tabContent: { label: string; content: ReactNode }[] = categories.map(category => ({
    label: category,
    content: renderEstimationCards(category),
  }))

  // if (isLoading) {
  //   return <div>Loading estimations...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

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