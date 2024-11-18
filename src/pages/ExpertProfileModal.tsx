import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal/Modal';
import StarRating from '@/components/Rating/StarRating';
import ProfileBadge from '@/components/Badge/ProfileBadge'
import '@/styles/Estimationpage/expertprofile.scss';
import { useModalStore } from '@/store/modalStore';

interface Review {
  customerName: string;
  content: string;
  rating: number;
  hasImage: boolean;
}

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

interface ExpertProfileModalProps {
  expertId: number | null;
}

const ExpertProfileModal: React.FC<ExpertProfileModalProps> = ({ expertId }) => {
  const [expertData, setExpertData] = useState<ExpertData | null>(null);
  const [showFullEstimate, setShowFullEstimate] = useState(false);
  const [showFullReviews, setShowFullReviews] = useState<{ [key: string]: boolean }>({});
  const { closeModal } = useModalStore();

  useEffect(() => {
    const fetchExpertData = async () => {
      if (!expertId) return;
    
      setTimeout(() => {
        setExpertData({
          name: "김사회",
          avatar: "/images/expert-avatar.jpg",
          rating: 4.5,
          services: ["결혼식 사회자"],
          cost: "500,000원부터",
          estimateDescription: "경력에 맞춰 고객님의 원하는 부분을 빠르게 캐치해 일당으로 받는 방식으로 진행됩니다. 상세한 견적은 상담 후 결정됩니다.",
          description: "10년 경력의 전문 결혼식 사회자입니다. 자연스러운 순간을 포착하여 특별한 추억을 만들어드립니다.",
          reviews: [
            { customerName: "김고객", content: "매우 만족스러운 서비스였습니다.", rating: 5, hasImage: true },
            { customerName: "이용자", content: "전문적이고 친절했습니다.", rating: 4, hasImage: false }
          ]
        });
      }, 1000);
    };

    fetchExpertData();
  }, [expertId]);

  const toggleEstimate = () => setShowFullEstimate(!showFullEstimate);
  
  const handleRatingChange = (newRating: number) => {
    if (expertData) {
      setExpertData({ ...expertData, rating: newRating });
    }
  };

  const toggleReview = (reviewId: string) => {
    setShowFullReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const handleImageUpload = (reviewIndex: number) => {
    // Implement image upload logic here
    console.log(`Upload image for review ${reviewIndex}`);
  };

  const modalContent = (
    <div className="expert-profile-container">
      {!expertData ? (
        <div className="loading">로딩 중...</div>
      ) : (
        <div className="expert-profile-content">
          <div className="expert-profile-header">
            <ProfileBadge
              src={expertData.avatar}
              width="120px"
              height="120px"
              borderRadius="1.2rem"
              isFull={true}
            />
            <div className="expert-profile-name-rating">
              <h3 className="expert-name">{expertData.name}</h3>
              <div className="rating-wrapper">
                <StarRating initialRating={expertData.rating} onChange={handleRatingChange} />
              </div>
            </div>
            <p className="expert-description">{expertData.description}</p>
          </div>

          <div className="expert-profile-section">
            <h3 className="section-title">제공 서비스</h3>
            <div className="service-tag-wrapper">
              {expertData.services.map((service, index) => (
                <span key={index} className="service-tag">{service}</span>
              ))}
            </div>
          </div>

          <div className="expert-profile-section">
            <h3 className="section-title">견적</h3>
            <div className="estimate-content">
              <p>{showFullEstimate ? expertData.estimateDescription : `${expertData.estimateDescription.slice(0, 100)}...`}</p>
              <button onClick={toggleEstimate} className="more-button">
                {showFullEstimate ? '접기' : 'more'}
              </button>
            </div>
          </div>

          <div className="expert-profile-section">
            <h3 className="section-title">비용</h3>
            <p className="cost-value">{expertData.cost}</p>
          </div>

          <div className="expert-profile-section">
            <div className="review-header">
              <h3 className="section-title">최근 리뷰</h3>
            </div>
            <div className="review-cards">
              {expertData.reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-card-header">
                    <span className="reviewer-name">{review.customerName}</span>
                    <div className="review-rating">
                      <StarRating initialRating={review.rating} onChange={() => {}} />
                    </div>
                  </div>
                  <p className="review-content">
                    {showFullReviews[`review-${index}`] ? review.content : `${review.content.slice(0, 50)}...`}
                  </p>
                  <div className="review-card-actions">
                    <button 
                      className="more-button"
                      onClick={() => toggleReview(`review-${index}`)}
                    >
                      {showFullReviews[`review-${index}`] ? '접기' : 'more'}
                    </button>
                    <button 
                      className="image-button"
                      onClick={() => handleImageUpload(index)}
                    >
                      이미지 추가
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Modal
      modalId="expertProfile"
      width="80rem"
      height="90vh"
      borderRadius="2rem"
      title="전문가 프로필"
      content={modalContent}
    />
  );
};

export default ExpertProfileModal;