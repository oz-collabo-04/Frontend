import React, { useMemo } from 'react'
import { MapPin } from 'lucide-react'
import MainBtn from '@/components/Button/MainBtn'
import ProfileBadge from '@/components/Badge/ProfileBadge'
import profile from '@/assets/images/dalbong.jpg'
import ExpertModal from '@/pages/ExpertModal'
import { useModalStore } from '@/store/modalStore'
import  '@/styles/Expertlistpage/expertlistpage.scss'

interface ExpertCardProps {
  id: number;
  category: string;
  name: string;
  location: string;
  venueName: string;
  datetime: string;
  profileImage?: string;
  onProfileClick: (id: number) => void;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ 
  id,
  category, 
  name, 
  location,
  venueName,
  datetime,
  onProfileClick 
}) => {
  return (
    <div className="expertCard">
      <div className="expertCardHeader">
        <ProfileBadge
          width="8rem"
          height="8rem"
          src={profile}
          borderRadius={'0.8rem'}
        />
        <div className="expertCardInfo">
          <div className="expertCardCategory">{category}</div>
          <h3 className="expertCardName">{name}</h3>
        </div>
      </div>
      <div className='expertCardSchedule'>
      <div className="expertCardLocation">
        <MapPin size={16} />
        <span>{location} {venueName}</span>
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
        <span>{datetime}</span>
      </div>
      </div>
      <div className="expertCardActions">
        <MainBtn
          name="견적서 보내기"
          size="medium"
          backgroundColor="$main-color"
          color="$font-color"
          onClick={() => onProfileClick(id)}
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

interface Expert {
  id: number;
  category: string;
  name: string;
  location: string;
  venueName: string;
  datetime: string;
  profileImage?: string;
}

const Expertlistpage: React.FC = () => {
  const { openModal } = useModalStore();
  const [selectedExpertId, setSelectedExpertId] = React.useState<number | null>(null);

  const experts: Expert[] = useMemo(() => [
    { 
      id: 1, 
      category: '결혼식 사회자', 
      name: '김대식', 
      location: '서울시 서초구',
      venueName: '더채플웨딩',
      datetime: '2024-11-14  11:00',
      profileImage: profile 
    },
    { 
      id: 2, 
      category: '결혼식 사회자', 
      name: '김수민', 
      location: '서울시 강남구',
      venueName: '소노펠리체',
      datetime: '2024-12-21  11:00',
      profileImage: profile 
    },
    { 
      id: 3, 
      category: '결혼식 사회자', 
      name: '박미선', 
      location: '서울시 서초구',
      venueName: '아펠가모',
      datetime: '2024-12-22  11:00',
      profileImage: profile 
    },
    { 
        id: 4, 
        category: '결혼식 사회자', 
        name: '손수민', 
        location: '서울시 용산구',
        venueName: '더채플웨딩',
        datetime: '2024-12-22  14:00',
        profileImage: profile 
      },
      { 
        id: 5, 
        category: '결혼식 사회자', 
        name: '이상민', 
        location: '서울시 용산구',
        venueName: '더채플웨딩',
        datetime: '2024-12-14  14:00',
        profileImage: profile 
      },
      { 
        id: 6, 
        category: '결혼식 사회자', 
        name: '김규식', 
        location: '서울시 강남구',
        venueName: '소노펠리체',
        datetime: '2024-12-25  14:00',
        profileImage: profile 
      },
      { 
        id: 7, 
        category: '결혼식 사회자', 
        name: '박대인', 
        location: '서울시 서초구',
        venueName: '아펠가모',
        datetime: '2024-12-26  11:00',
        profileImage: profile 
      },
      { 
          id: 8, 
          category: '결혼식 사회자', 
          name: '손희준', 
          location: '서울시 용산구',
          venueName: '더채플웨딩',
          datetime: '2024-12-30  11:00',
          profileImage: profile 
        },

  ], []);

  const handleProfileClick = (id: number) => {
    setSelectedExpertId(id);
    openModal('expertProfile');
  };

  return (
    <div className="expertListContainer">
      <main className="expertListMain">
        <h2 className="expertListMainTitle">받은 요청 리스트</h2>
        <div className="expertGrid">
          {experts.map(expert => (
            <ExpertCard 
              key={expert.id} 
              {...expert} 
              onProfileClick={handleProfileClick}
            />
          ))}
        </div>
      </main>
      <ExpertModal expertId={selectedExpertId} modalId={''} />
    </div>
  )
}

export default Expertlistpage