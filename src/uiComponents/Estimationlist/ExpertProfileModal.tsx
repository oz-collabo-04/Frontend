import React, { useState, useEffect } from 'react'
import Modal from '@/components/Modal/Modal'
import StarRating from '@/components/Rating/StarRating'
import ProfileBadge from '@/components/Badge/ProfileBadge'
import '@/styles/Estimationpage/expertprofile.scss'
import { auth } from '@/api/axiosInstance'
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'
import axios from 'axios'
import { useEstimationStore } from '@/store/estimationStore'

interface Career {
  id: number;
  company: string;
  position: string;
  start_date: string;
  end_date: string | null;
}

interface Expert {
  id: number;
  name: string;
  rating: string;
  expert_image: string;
  service: string;
  service_display: string;
  standard_charge: number;
  appeal: string;
  available_location: string;
  available_location_display: string;
  careers: Career[];
}

interface Review {
  id: number;
  user: {
    id: number;
    name: string;
    email: string;
    phone_number: string;
  };
  reservation: number;
  content: string;
  rating: number;
  review_images: Array<{ id: number; image: string }>;
  created_at: string;
  updated_at: string;
}

interface Estimation {
  id: number;
  expert: Expert;
  service_display: string;
  charge: number;
  description: string;
}

interface ExpertProfileModalProps {
  estimationId: number | null;
}

const ExpertProfileModal: React.FC<ExpertProfileModalProps> = ({ estimationId }) => {
  const [estimationData, setEstimationData] = useState<Estimation | null>(null);
  const [expertData, setExpertData] = useState<Expert | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showFullEstimate, setShowFullEstimate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const estimationStore = useEstimationStore();

  useEffect(() => {
    console.log('ExpertProfileModal - Current description:', estimationStore.description);
  }, [estimationStore.description]);

  useEffect(() => {
    console.log('ExpertProfileModal - Mounted');
  }, []);

  useEffect(() => {
    const fetchExpertData = async () => {
      if (!estimationId) return;

      setIsLoading(true);
      setError(null);

      try {
        const estimationResponse = await auth.get(`/estimations/${estimationId}/`);
        setEstimationData(estimationResponse.data);
        setExpertData(estimationResponse.data.expert);

        const reviewsResponse = await auth.get(`/reviews/`);
        setReviews(reviewsResponse.data);
      } catch (err: unknown) {
        console.error('Error fetching data:', err);
        if (err instanceof Error) {
          if (axios.isAxiosError(err) && err.response?.status === 404) {
            setError('견적을 찾을 수 없습니다. 올바른 견적 ID인지 확인해 주세요.');
          } else {
            setError('알 수 없는 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpertData();
  }, [estimationId]);

  const toggleEstimate = () => setShowFullEstimate(!showFullEstimate);

  const renderExpertContent = () => {
    if (!expertData || !estimationData) return null;

    const displayDescription = estimationStore.description || estimationData.description || '';
    console.log('ExpertProfileModal - Display description:', displayDescription);

    return (
      <div className="expert-profile-content">
        <div className="expert-profile-header">
          <ProfileBadge
            src={expertData.expert_image}
            width="120px"
            height="120px"
            borderRadius="1.2rem"
            isFull={true}
          />
          <div className="expert-profile-name-rating">
            <h3 className="expert-name">{expertData.name}</h3>
            <div className="rating-wrapper">
              <StarRating initialRating={parseFloat(expertData.rating)} readOnly={true} />
            </div>
          </div>
          <p className="expert-description">{expertData.appeal}</p>
        </div>

        <div className="expert-profile-section">
          <h3 className="section-title">제공 서비스</h3>
          <div className="service-tag-wrapper">
            <span className="service-tag">{estimationData.service_display}</span>
          </div>
        </div>

        <div className="expert-profile-section">
          <h3 className="section-title">견적</h3>
          <div className="estimate-content">
            {displayDescription ? (
              <>
                <p>{showFullEstimate ? displayDescription : `${displayDescription.slice(0, 100)}...`}</p>
                <button onClick={toggleEstimate} className="more-button">
                  {showFullEstimate ? '접기' : 'more'}
                </button>
              </>
            ) : (
              <p>견적 설명이 없습니다.</p>
            )}
          </div>
        </div>

        <div className="expert-profile-section">
          <h3 className="section-title">비용</h3>
          <p className="cost-value">{estimationData.charge}원</p>
        </div>

        <div className="expert-profile-section">
          <h3 className="section-title">활동 지역</h3>
          <p>{expertData.available_location_display}</p>
        </div>

        {expertData.careers && expertData.careers.length > 0 && (
          <div className="expert-profile-section">
            <h3 className="section-title">경력</h3>
            <div className="career-list">
              {expertData.careers.map((career, index) => (
                <div key={index} className="career-item">
                  <p className="career-company">{career.company}</p>
                  <p className="career-position">{career.position}</p>
                  <p className="career-period">
                    {career.start_date} - {career.end_date || '현재'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {reviews.length > 0 && (
          <div className="expert-profile-section">
            <h3 className="section-title">리뷰</h3>
            <div className="reviews-list">
              {reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="review-user-info">
                      <h4 className="review-user-name">{review.user.name}</h4>
                      <p className="review-date">{new Date(review.created_at).toLocaleDateString()}</p>
                    </div>
                    <StarRating initialRating={review.rating} readOnly={true} />
                  </div>
                  <p className="review-content">{review.content}</p>
                  {review.review_images?.length > 0 && (
                    <div className="review-images">
                      {review.review_images.map((image) => (
                        <img key={image.id} src={image.image} alt="Review" className="review-image" />
                      ))}
                    </div>
                  )}
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
        <div className="loading">
          <LoadingSpinner />
          <p>견적 정보를 불러오는 중입니다...</p>
        </div>
      ) : error ? (
        <div className="error">
          <p>{error}</p>
          <button onClick={() => setError(null)}>다시 시도</button>
        </div>
      ) : expertData && estimationData ? (
        renderExpertContent()
      ) : (
        <p>견적 정보가 없습니다.</p>
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

export default ExpertProfileModal