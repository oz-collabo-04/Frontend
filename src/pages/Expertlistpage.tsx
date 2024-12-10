import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import MainBtn from '@/components/Button/MainBtn';
import ProfileBadge from '@/components/Badge/ProfileBadge';
import ExpertModal from '@/uiComponents/Expertlist/ExpertModal';
import { useModalStore } from '@/store/modalStore';
import { useCategoryStore } from '@/store/expertListStore';
import '@/styles/Expertlistpage/expertlistpage.scss';
import { auth } from '@/api/axiosInstance';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import useModeChangerStore from '@/store/modeChangerStore';

export interface User {
  id: number;
  name: string;
  email: string;
  profile_image: string;
}

export interface Request {
  id: number;
  user: User;
  service_list: string[] | string;
  service_list_display: string[] | string;
  prefer_gender: string;
  prefer_gender_display: string;
  wedding_hall: string;
  wedding_datetime: string;
  location: string;
  location_display: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Expert {
  id: number;
  request: Request;
  created_at: string;
  updated_at: string;
}

const Expertlistpage = () => {
  const navigate = useNavigate();
  const { openModal } = useModalStore();
  const { setCategory } = useCategoryStore();
  const { mode } = useModeChangerStore();
  const [selectedExpertId, setSelectedExpertId] = useState<number | null>(null);
  const [experts, setExperts] = useState<Expert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingExperts, setDeletingExperts] = useState<{ [key: number]: boolean }>({});
  const [selectedDateTime, setSelectedDateTime] = useState('');

  const formatServiceList = (serviceList: string[] | string): string => {
    return Array.isArray(serviceList) ? serviceList.join(', ') : serviceList || 'N/A';
  };

  useEffect(() => {
    if (mode !== 'expert') {
      navigate('/'); 
    }
  }, [navigate, mode]);

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
            setCategory(expert.id, formatServiceList(expert.request.service_list));
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

  const handleProfileClick = (id: number, weddingDateTime: string) => {
    setSelectedExpertId(id);
    setSelectedDateTime(weddingDateTime);
    openModal('expertProfile');
  };

  const handleDelete = async (id: number) => {
    setDeletingExperts((prev) => ({ ...prev, [id]: true }));
    try {
      await auth.delete(`/experts/estimations/requests/${id}/`);
      setExperts((prevExperts) => prevExperts.filter((expert) => expert.id !== id));
      console.log(`Expert with id ${id} deleted successfully.`);
    } catch (error: unknown) {
      console.error('Error deleting request:', error);
      if (error instanceof Error) {
        setError(`요청을 삭제하는 데 실패했습니다: ${error.message}`);
      } else {
        setError('요청을 삭제하는 데 실패했습니다.');
      }
    } finally {
      setDeletingExperts((prev) => ({ ...prev, [id]: false }));
    }
  };

  const renderExpertCard = (expert: Expert) => {
    if (!expert || !expert.request) {
      return null;
    }

    const service_list_display = formatServiceList(expert.request.service_list_display);

    return (
      <div key={expert.id} className='expertCard'>
        <div className='expertCardHeader'>
          <ProfileBadge
            width='8rem'
            height='8rem'
            src={expert.request.user?.profile_image || ''}
            borderRadius={'0.8rem'}
          />
          <div className='expertCardInfo'>
            <div className='expertCardCategory'>{service_list_display}</div>
            <h3 className='expertCardName'>{expert.request.user?.name || 'Unknown'}</h3>
          </div>
        </div>
        <div className='expertCardSchedule'>
          <div className='expertCardLocation'>
            <MapPin size={16} />
            <span>
              {expert.request.location_display || 'N/A'} {expert.request.wedding_hall || 'N/A'}
            </span>
          </div>
          <div className='expertCardTime'>
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V3C13 2.44772 12.5523 2 12 2Z'
                stroke='currentColor'
                strokeWidth='1.5'
              />
              <path d='M3 6H13' stroke='currentColor' strokeWidth='1.5' />
            </svg>
            <span>
              {expert.request.wedding_datetime ? new Date(expert.request.wedding_datetime).toLocaleString() : 'N/A'}
            </span>
          </div>
        </div>
        <div className='expertCardActions'>
          <MainBtn
            name='견적서 보내기'
            size='medium'
            backgroundColor='$main-color'
            color='$font-color'
            onClick={() => handleProfileClick(expert.request.id, expert.request.wedding_datetime)}
          />
          <MainBtn
            name={deletingExperts[expert.id] ? '삭제 중...' : '받은요청삭제'}
            size='medium'
            backgroundColor='$main-color'
            color='$font-color'
            onClick={() => handleDelete(expert.id)}
            disabled={deletingExperts[expert.id]}
          />
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className='estimationLoading'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='expertListContainer'>
      <main className='expertListMain'>
        <h2 className='expertListMainTitle'>받은 요청 리스트</h2>
        <div className='expertGrid'>{experts.map(renderExpertCard)}</div>
      </main>
      <ExpertModal expertId={selectedExpertId} modalId='expertProfile' weddingDateTime={selectedDateTime} />
    </div>
  );
};

export default Expertlistpage