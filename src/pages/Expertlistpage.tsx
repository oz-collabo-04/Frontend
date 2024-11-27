import React, { useState, useEffect } from 'react'
import { MapPin } from 'lucide-react'
import MainBtn from '@/components/Button/MainBtn'
import ProfileBadge from '@/components/Badge/ProfileBadge'
import ExpertModal from '@/uiComponents/ExpertProfileEditPage/ExpertModal'
import { useModalStore } from '@/store/modalStore'
import { useCategoryStore } from '@/store/expertListStore'
import '@/styles/Expertlistpage/expertlistpage.scss'
import { auth } from '@/api/axiosInstance'

interface Expert {
  id: number;
  request: {
    id: number;
    user: {
      id: number;
      name: string;
      email: string;
      profile_image: string;
    };
    service_list: string[];
    prefer_gender: string;
    wedding_hall: string;
    wedding_datetime: string;
    location: string;
    status: string;
    created_at: string;
    updated_at: string;
  };
  created_at: string;
  updated_at: string;
}

interface ExpertCardProps {
  expert: Expert;
  onProfileClick: (id: number) => void;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ 
  expert,
  onProfileClick
}) => {
  if (!expert || !expert.request) {
    return null;
  }

  return (
    <div className="expertCard">
      <div className="expertCardHeader">
        <ProfileBadge
          width="8rem"
          height="8rem"
          src={expert.request.user?.profile_image || ''}
          borderRadius={'0.8rem'}
        />
        <div className="expertCardInfo">
          <div className="expertCardCategory">{expert.request.service_list?.join(', ') || 'N/A'}</div>
          <h3 className="expertCardName">{expert.request.user?.name || 'Unknown'}</h3>
        </div>
      </div>
      <div className='expertCardSchedule'>
        <div className="expertCardLocation">
          <MapPin size={16} />
          <span>{expert.request.location || 'N/A'} {expert.request.wedding_hall || 'N/A'}</span>
        </div>
        <div className="expertCardTime">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V3C13 2.44772 12.5523 2 12 2Z" 
              stroke="currentColor" 
              strokeWidth="1.5"
            />
            <path d="M3 6H13" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span>{expert.request.wedding_datetime ? new Date(expert.request.wedding_datetime).toLocaleString() : 'N/A'}</span>
        </div>
      </div>
      <div className="expertCardActions">
        <MainBtn
          name="견적서 보내기"
          size="medium"
          backgroundColor="$main-color"
          color="$font-color"
          onClick={() => onProfileClick(expert.id)}
        />
        <MainBtn
          name="받은요청삭제"
          size="medium"
          backgroundColor="$main-color"
          color="$font-color"
        />
      </div>
    </div>
  )
}

const Expertlistpage: React.FC = () => {
  const { openModal } = useModalStore();
  const { setCategory } = useCategoryStore();
  const [selectedExpertId, setSelectedExpertId] = useState<number | null>(null);
  const [experts, setExperts] = useState<Expert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        setIsLoading(true);
        const response = await auth.get('/experts/estimations/requests/');
        console.log('API Response:', response.data);

        const expertsData = Array.isArray(response.data) ? response.data : [response.data];
        setExperts(expertsData);
        
        expertsData.forEach((expert: Expert) => {
          if (expert && expert.request && expert.request.service_list) {
            setCategory(expert.id, expert.request.service_list.join(', '));
          }
        });
      } catch (error) {
        console.error('Error fetching experts:', error);
        setError('전문가 데이터를 불러오는 데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchExperts();
  }, [setCategory]);

  const handleProfileClick = (id: number) => {
    setSelectedExpertId(id);
    openModal('expertProfile');
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="expertListContainer">
      <main className="expertListMain">
        <h2 className="expertListMainTitle">받은 요청 리스트</h2>
        <div className="expertGrid">
          {experts.map(expert => (
            <ExpertCard 
              key={expert.id}
              expert={expert}
              onProfileClick={handleProfileClick}
            />
          ))}
        </div>
      </main>
      <ExpertModal expertId={selectedExpertId} modalId="expertProfile" />
    </div>
  )
}

export default Expertlistpage

