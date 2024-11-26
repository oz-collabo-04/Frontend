import React, { useState, useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '@/styles/Estimationpage/estimation.scss'
import MainBtn from '@/components/Button/MainBtn'
import Tab from '@/components/Tab/Tab'
import ProfileBadge from '@/components/Badge/ProfileBadge'
import ExpertProfileModal from '@/uiComponents/ExpertProfileEditPage/ExpertProfileModal'
import { useModalStore } from '@/store/modalStore'

interface Career {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  gender: string;
}

interface Expert {
  id: number;
  expert_image: string;
  service: string;
  standard_charge: number;
  appeal: string;
  available_location: string;
  user: User;
  careers: Career[];
}

interface Estimation {
  id: number;
  request: number;
  expert: Expert;
  location: string;
  due_date: string;
  service: string;
  charge: number;
  created_at: string;
  updated_at: string;
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
          <span className="estimationCardCategory">{estimation.service}</span>
          <h3 className="estimationCardName">{estimation.expert.user.name}</h3>
        </div>
        <ProfileBadge
          width="8rem"
          height="8rem"
          src={estimation.expert.expert_image}
          borderRadius={'1.2rem'}
          // alt={`${estimation.expert.user.name}의 프로필 이미지`}
        />
      </div>
      <p className="estimationCardPrice">{estimation.charge.toLocaleString()}원</p>
      <div className="estimationCardActions">
        <MainBtn
          name="전문가 프로필"
          size="medium"
          backgroundColor="$main-color"
          color="$font-color"
          onClick={() => onProfileClick(estimation.expert.id)}
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  axios.interceptors.response.use(
    (response) => {
      console.log('Axios Interceptor - Response:', response);
      return response;
    },
    (error) => {
      console.error('Axios Interceptor - Error:', error);
      return Promise.reject(error);
    }
  );

  const fetchEstimations = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/v1/estimations/');
      console.log('API Response Type:', typeof response.data);
      console.log('API Response:', response.data);
      if (typeof response.data === 'string') {
        try {
          const parsedData = JSON.parse(response.data);
          console.log('Parsed API Response:', parsedData);
          if (Array.isArray(parsedData)) {
            setEstimations(parsedData);
            return;
          }
        } catch (parseError) {
          console.error('Failed to parse API response:', parseError);
        }
      } else if (Array.isArray(response.data)) {
        setEstimations(response.data);
      } else if (response.data && typeof response.data === 'object') {
        // 응답이 객체인 경우, 배열을 포함하는 키를 찾아봅니다.
        const arrayData = Object.values(response.data).find(Array.isArray);
        if (arrayData) {
          setEstimations(arrayData);
        } else {
          throw new Error('API 응답에서 배열 데이터를 찾을 수 없습니다.');
        }
      } else {
        throw new Error(`예상치 못한 API 응답 형식: ${typeof response.data}`);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(`API 요청 실패: ${err.message}`);
        console.error('API 요청 에러:', err.response?.data);
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
        console.error('예상치 못한 에러:', err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEstimations();
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
      : estimations.filter(estimation => estimation.service === category);

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

  if (isLoading) {
    return <div aria-live="polite" aria-busy="true">견적 목록을 불러오는 중...</div>;
  }

  if (error) {
    return <div aria-live="assertive" role="alert">{error}</div>;
  }

  return (
    <div className="estimationContainer">
      <main className="estimationMain">
        <h1 className="estimationMainPageTitle">받은 견적 리스트</h1>
        <Tab tabs={tabContent} />
      </main>
      <ExpertProfileModal expertId={selectedExpertId} />
    </div>
  )
}

export default EstimationList

