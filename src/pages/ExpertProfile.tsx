import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from '@/components/Rating/StarRating';
import ProfileBadge from '@/components/Badge/ProfileBadge';
import '@/styles/Estimationpage/expertprofile.scss';

// 리뷰 인터페이스 정의
interface Review {
  customerName: string;
  content: string;
  hasImage?: boolean;
}

// 전문가 데이터 인터페이스 정의
interface ExpertData {
  name: string;
  avatar: string;
  rating: number;
  services: string[];
  cost: string;
  estimateDescription: string;
  description: string;
  reviews: Review[];
}

export default function ExpertProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expertData, setExpertData] = useState<ExpertData | null>(null);
  const [showFullEstimate, setShowFullEstimate] = useState(false);

  useEffect(() => {
    const fetchExpertData = async () => {
      // 실제 구현에서는 이 부분을 API 호출로 대체하세요.
      setTimeout(() => {
        const mockData: ExpertData = {
          name: "김사회",
          avatar: "/images/expert-avatar.jpg",
          rating: 4.5,
          services: ["결혼식 사회자"],
          cost: "500,000원부터",
          estimateDescription: "경력에 맞춰 고객님의 원하는 부분을 빠르게 캐치해 일당으로 받는...",
          description: "10년 경력의 전문 결혼식 사회자입니다. 자연스러운 순간을 포착하여 특별한 추억을 만들어드립니다.",
          reviews: [
            {
              customerName: "고객이름",
              content: "리뷰 내용",
              hasImage: true
            },
            {
              customerName: "고객이름",
              content: "리뷰 내용",
              hasImage: false
            },
            {
              customerName: "고객이름",
              content: "리뷰 내용",
              hasImage: false
            }
          ]
        };
        setExpertData(mockData);
      }, 1000);
    };

    fetchExpertData();
  }, [id]);

  const toggleEstimate = () => setShowFullEstimate(!showFullEstimate);
  
  const handleRatingChange = (newRating: number) => {
    if (expertData) {
      setExpertData({ ...expertData, rating: newRating });
      // 여기에 새로운 평점을 서버에 저장하는 로직을 추가할 수 있습니다.
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  // 리뷰 섹션 렌더링 함수
  const renderReviews = () => {
    if (!expertData?.reviews) return null;

    return (
      <div className="expertProfileReviewSection">
        <h3 className="expertProfileReviewTitle">최근 리뷰</h3>
        <h4 className="expertProfileReviewSubtitle">4.13 별 모양</h4>
        <div className="expertProfileReviewList">
          {expertData.reviews.map((review, index) => (
            <div key={index} className="expertProfileReviewCard">
              <div className="expertProfileReviewContent">
                <div className="expertProfileReviewHeader">
                  <span className="expertProfileReviewCustomer">{review.customerName}</span>
                  <span className="expertProfileReviewLabel">리뷰 내용</span>
                </div>
                <div className="expertProfileReviewActions">
                  <button className="expertProfileMoreButton">more</button>
                  <button className="expertProfileImageButton">이미지 추가</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!expertData) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="expertProfile">
      <h2 className="expertProfileTitle">받은 견적 리스트</h2>
      
      <div className="expertProfileCard">
        <div className="expertProfileCardHeader">
          <h3>결혼식 사진가 {expertData.name}</h3>
          <button className="expertProfileCloseButton" onClick={handleClose}>X</button>
        </div>

        <div className="expertProfileSection">
          <div className="expertProfileContent">
            <div className="expertProfileAvatarRatingWrapper">
              <div className="expertProfileAvatarWrapper">
                {expertData.avatar ? (
                  <img
                    src={expertData.avatar}
                    alt={expertData.name}
                    className="expertProfileAvatar"
                  />
                ) : null}
                <ProfileBadge width="60px" height="60px" />
              </div>
              <div className="expertProfileRating">
                <StarRating initialRating={expertData.rating} onChange={handleRatingChange} />
              </div>
            </div>
            <div className="expertProfileInfo">
              <p className="expertProfileDescription">{expertData.description}</p>
            </div>
          </div>
        </div>
          
        <div className="expertProfileSection">
          <div className="expertProfileServiceInfo">
            <h4>제공 서비스</h4>
            <div className="expertProfileServiceTag">{expertData.services.join(', ')}</div>
          </div>
        </div>

        <div className="expertProfileSection">
          <div className="expertProfileEstimateInfo">
            <h4>견적</h4>
            <p>{showFullEstimate ? expertData.estimateDescription : `${expertData.estimateDescription.slice(0, 100)}...`}</p>
            <button 
              onClick={toggleEstimate}
              className="expertProfileMoreButton"
            >
              {showFullEstimate ? '접기' : 'more'}
            </button>
          </div>
        </div>

        <div className="expertProfileSection">
          <div className="expertProfileCostInfo">
            <h4>비용</h4>
            <p>{expertData.cost}</p>
          </div>
        </div>

        <div className="expertProfileSection">
          {renderReviews()}
        </div>
      </div>
    </div>
  );
}