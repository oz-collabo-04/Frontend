import { auth } from '@/api/axiosInstance';
import { fetchFinalConfirmData } from '@/api/reserve';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { ConfirmData, WeddingConfirm } from '@/config/types';
import { formatDate } from '@/utils/formatDate';
import { getServiceKorean } from '@/utils/serviceKorean';
import { getStatusKorean } from '@/utils/statusKorean';
import { useEffect, useState } from 'react';
import '@/styles/MyPage/EstimationConfirm.scss';

interface EstimationConfirmProps {
  estimationId: number; // 예상되는 타입 정의
  expertUserId: number;
}

// estimation 타입지정 필요함
const EstimationConfirm = ({ estimationId, expertUserId }: EstimationConfirmProps) => {
  const [confirmData, setConfirmData] = useState<ConfirmData | null>(null);
  const [weddingData, setWeddingData] = useState<WeddingConfirm | null>(null);

  // 웨딩홀 정보 호출 API요청
  const fetchWeddingData = async (id: number): Promise<WeddingConfirm | undefined> => {
    try {
      const response = await auth.get(`/estimations/request/${id}`);
      return response.data as WeddingConfirm;
    } catch (err) {
      console.error('Error Fetching Wedding Data :', err);
    }
  };

  useEffect(() => {
    const fetchEstimationData = async () => {
      try {
        const finalConfirmData = await fetchFinalConfirmData(estimationId);
        const weddingConfirmData = await fetchWeddingData(expertUserId);
        setConfirmData(finalConfirmData as ConfirmData); // 상태 업데이트
        setWeddingData(weddingConfirmData || null);

        // console.log('weddingConfirm data:', weddingConfirmData); // 디버깅용
        // console.log('confirm data:', finalConfirmData); // 디버깅용
      } catch (err) {
        console.error(err);
      }
    };

    fetchEstimationData(); // 비동기 함수 호출
  }, [estimationId, expertUserId]);

  if (!confirmData && !weddingData) {
    return <LoadingSpinner />;
  }

  return (
    <div className='estimationConfirm'>
      <ul className='user'>
        <li>
          <strong>예약일자:</strong> {confirmData && formatDate(confirmData.estimation.created_at)}
        </li>
        <li>
          <strong>예약상태:</strong> {confirmData && getStatusKorean(confirmData.status)}
        </li>
        <li>
          <strong>예약금액:</strong> {confirmData?.estimation.charge.toLocaleString()}원
        </li>
        <li>
          <strong>지역:</strong> {weddingData?.location_display}
        </li>
        <li>
          <strong>예식일자:</strong> {weddingData && formatDate(weddingData.wedding_datetime)}
        </li>
      </ul>
      <ul className='expert'>
        <li>
          <strong>전문가 이름:</strong> {confirmData?.estimation.expert.user.name}
        </li>
        <li>
          <strong>전문가 제공 서비스:</strong> {confirmData && getServiceKorean(confirmData.estimation.service)}
        </li>
        <li>
          <strong>전문가 연락처:</strong> {confirmData?.estimation.expert.user.phone_number}
        </li>
        <li>
          <strong>전문가 프로필</strong>
          <span className='imgBox'>
            <img src={confirmData?.estimation.expert.expert_image} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default EstimationConfirm;
