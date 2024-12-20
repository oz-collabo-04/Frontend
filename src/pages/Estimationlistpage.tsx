import { useState, useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/styles/Estimationpage/estimation.scss'
import MainBtn from '@/components/Button/MainBtn'
import Tab from '@/components/Tab/Tab'
import ProfileBadge from '@/components/Badge/ProfileBadge'
import ExpertProfileModal from '@/uiComponents/Estimationlist/ExpertProfileModal'
import { useModalStore } from '@/store/modalStore'
import { auth } from '@/api/axiosInstance'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import useModeChangerStore from '@/store/modeChangerStore'

interface Career {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
}

interface Expert {
  id: number;
  rating: string; 
  expert_image: string;
  service: 'mc' 
  standard_charge: number;
  appeal: string;
  available_location: string;
  user: User;
  careers: Career[];
  service_display: string;
  available_location_display: string;
  gender_display: string;
  location_display: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  gender: 'M' | 'F'; 
  gender_display: string;
}

interface Estimation {
  id: number;
  request: number;
  expert: Expert;
  location: string;
  location_display: string;
  due_date: string;
  service: 'mc';
  service_display: string;
  charge: number;
  created_at: string;
  updated_at: string;
  description: string;
}

interface EstimationCardProps {
  estimation: Estimation;
  onProfileClick: (estimationId: number) => void;
  onChatClick: (expert_id: number, estimation_id: number) => void;
}

const EstimationCard = ({ 
  estimation,
  onProfileClick,
  onChatClick
}: EstimationCardProps) => {
  return (
    <div className="estimationCard">
      <div className="estimationCardHeader">
        <div className="estimationCardInfo">
          <span className="estimationCardCategory">{estimation.service_display}</span>
          <h3 className="estimationCardName">{estimation.expert.user.name}</h3>
          <p className="estimationCardLocation">{estimation.location_display}</p>
          <p className="estimationCardGender">{estimation.expert.user.gender_display}</p>
        </div>
        <ProfileBadge
          width="8rem"
          height="8rem"
          src={estimation.expert.expert_image}
          borderRadius={'1.2rem'}
          className="estimationprofileBadge"
        />
      </div>
      <p className="estimationCardPrice">{estimation.charge.toLocaleString()}원</p>
      <p className="estimationCardAvailableLocation">{estimation.expert.available_location_display}</p>
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
          onClick={() => onChatClick(estimation.expert.id, estimation.id)}
        />
      </div>
    </div>
  )
}

const EstimationList = () => {
  const navigate = useNavigate()
  const { openModal } = useModalStore();
  const { mode } = useModeChangerStore(); 
  const [selectedEstimationId, setSelectedEstimationId] = useState<number | null>(null);
  const [estimations, setEstimations] = useState<Estimation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>(['전체']);

  const fetchEstimations = async () => {
    setIsLoading(true);
    try {
      const response = await auth.get('/estimations/');
      const estimationsData = Array.isArray(response.data) ? response.data : [];
      setEstimations(estimationsData);
      
      const uniqueCategories = ['전체', ...new Set(estimationsData.map(est => est.service_display))];
      setCategories(uniqueCategories);
    } catch (err) {
      setError(`API 요청 실패: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (mode === 'user') {
      fetchEstimations()
    } else {
      navigate('/') 
    }
  }, [navigate, mode])

  const handleProfileClick = (estimationId: number) => {
    setSelectedEstimationId(estimationId);
    openModal('expertProfile');
  };

  const handleChatClick = async (expert_id: number, estimation_id: number) => {
    try {
      const response = await auth.post('/chat/chatrooms/', {
        expert_id: expert_id, 
        estimation_id: estimation_id,
      });
      const data = response.data;
      navigate(`/chatpage/${data.id}`);
    } catch (err) {
      setError(`API 요청 실패: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const renderEstimationCards = (category: string) => {
    const filteredEstimations = category === '전체'
      ? estimations
      : estimations.filter(estimation => estimation.service_display === category);

    return (
      <div className="estimationGrid">
      {filteredEstimations.length === 0 ? (
        <div className="noEstimations">현재 견적이 없습니다.</div>
      ) : (
        filteredEstimations.map(estimation => (
          <EstimationCard 
            key={estimation.id} 
            estimation={estimation}
            onProfileClick={handleProfileClick}
            onChatClick={handleChatClick}
          />
        ))
      )}
      </div>
    )
  }

  const tabContent: { label: string; content: ReactNode }[] = categories.map(category => ({
    label: category,
    content: renderEstimationCards(category),
  }))

  if (isLoading) {
    return (
      <div className="estimationContainer">
        <LoadingSpinner className="estimationLoading" />
        <span className="sr-only">견적 목록을 불러오는 중...</span>
      </div>
    );
  }

  if (error) {
    return <div aria-live="assertive" role="alert" className="estimationError">{error}</div>;
  }

  return (
    <div className="estimationContainer">
      <main className="estimationMain">
        <h1 className="estimationMainPageTitle">받은 견적 리스트</h1>
        <Tab tabs={tabContent} />
      </main>
      <ExpertProfileModal estimationId={selectedEstimationId} />
    </div>
  )
}

export default EstimationList