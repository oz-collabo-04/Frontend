import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal/Modal';
import StarRating from '@/components/Rating/StarRating';
import ProfileBadge from '@/components/Badge/ProfileBadge'
import '@/styles/Estimationpage/expertprofile.scss';
import { fetchExpertData } from '@/api/estimations';

interface Review {
  customerName: string;
  content: string;
  rating: number;
  hasImage: boolean;
}

interface ExpertData {
  id: number; 
  name: string;
  avatar: string;
  rating: number;
  services: string[];
  standardCharge: string; 
  appeal: string; 
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExpertData = async () => {
      if (!expertId) return;

      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchExpertData(expertId);
        setExpertData(data);
      } catch (err) {
        setError('전문가 데이터를 불러오는 데 실패했습니다.');
        console.error('Error fetching expert data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadExpertData();
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
    console.log(`Upload image for review ${reviewIndex}`);
  };

  const renderExpertContent = () => {
    if (!expertData) return null;

    return (
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

        {expertData.services && expertData.services.length > 0 && (
          <div className="expert-profile-section">
            <h3 className="section-title">제공 서비스</h3>
            <div className="service-tag-wrapper">
              {expertData.services.map((service, index) => (
                <span key={index} className="service-tag">{service}</span>
              ))}
            </div>
          </div>
        )}

        {expertData.appeal && (
          <div className="expert-profile-section">
            <h3 className="section-title">견적</h3>
            <div className="estimate-content">
              <p>{showFullEstimate ? expertData.appeal : `${expertData.appeal.slice(0, 100)}...`}</p>
              <button onClick={toggleEstimate} className="more-button">
                {showFullEstimate ? '접기' : 'more'}
              </button>
            </div>
          </div>
        )}

        {expertData.standardCharge && (
          <div className="expert-profile-section">
            <h3 className="section-title">비용</h3>
            <p className="cost-value">{expertData.standardCharge}</p>
          </div>
        )}

        {expertData.reviews && expertData.reviews.length > 0 && (
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
        )}
      </div>
    );
  };

  const modalContent = (
    <div className="expert-profile-container">
      {isLoading ? (
        <div className="loading">로딩 중...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        renderExpertContent()
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

