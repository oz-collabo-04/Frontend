import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal/Modal';
import StarRating from '@/components/Rating/StarRating';
import ProfileBadge from '@/components/Badge/ProfileBadge'
import '@/styles/Estimationpage/expertprofile.scss';
import { auth } from '@/api/axiosInstance';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner'

interface User {
  id: number;
  name: string;
  email: string;
}

interface Career {
  id: number;
  company: string;
  position: string;
  start_date: string;
  end_date: string | null;
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
}

interface ExpertProfileModalProps {
  expertId: number | null;
}

const ExpertProfileModal: React.FC<ExpertProfileModalProps> = ({ expertId }) => {
  const [expertData, setExpertData] = useState<Expert | null>(null);
  const [showFullEstimate, setShowFullEstimate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpertData = async () => {
      if (!expertId) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await auth.get(`/estimations/${expertId}/`);
        setExpertData(response.data);
      } catch (err) {
        setError('전문가 데이터를 불러오는 데 실패했습니다.');
        console.error('Error fetching expert data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpertData();
  }, [expertId]);

  const toggleEstimate = () => setShowFullEstimate(!showFullEstimate);
  
  const handleRatingChange = (newRating: number) => {
    if (expertData) {
      setExpertData({ ...expertData, rating: newRating.toString() });
    }
  };

  const renderExpertContent = () => {
    if (!expertData) return null;

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
            <h3 className="expert-name">{expertData.user.name}</h3>
            <div className="rating-wrapper">
              <StarRating initialRating={parseFloat(expertData.rating)} onChange={handleRatingChange} />
            </div>
          </div>
          <p className="expert-description">{expertData.appeal}</p>
        </div>

        <div className="expert-profile-section">
          <h3 className="section-title">제공 서비스</h3>
          <div className="service-tag-wrapper">
            <span className="service-tag">{expertData.service}</span>
          </div>
        </div>

        <div className="expert-profile-section">
          <h3 className="section-title">견적</h3>
          <div className="estimate-content">
            <p>{showFullEstimate ? expertData.appeal : `${expertData.appeal.slice(0, 100)}...`}</p>
            <button onClick={toggleEstimate} className="more-button">
              {showFullEstimate ? '접기' : 'more'}
            </button>
          </div>
        </div>

        <div className="expert-profile-section">
          <h3 className="section-title">비용</h3>
          <p className="cost-value">{expertData.standard_charge}원</p>
        </div>

        <div className="expert-profile-section">
          <h3 className="section-title">활동 지역</h3>
          <p>{expertData.available_location}</p>
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
      </div>
    );
  };

  const modalContent = (
    <div className="expert-profile-container">
      {isLoading ? (
        <div className="loading">
          <LoadingSpinner className="estimationLoading" />
        </div>
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

export default ExpertProfileModal