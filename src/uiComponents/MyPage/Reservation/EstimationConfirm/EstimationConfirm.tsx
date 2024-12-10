import { auth } from '@/api/axiosInstance';
import { fetchFinalConfirmData } from '@/api/reserve';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { ConfirmData, WeddingConfirm } from '@/config/types';
import { formatDate } from '@/utils/formatDate';
import { getServiceKorean } from '@/utils/serviceKorean';
import { getStatusKorean } from '@/utils/statusKorean';
import { useEffect, useState } from 'react';

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
      console.log('wedding hall data :', response.status);
      return response.data as WeddingConfirm;
    } catch (err) {
      console.error('Error Fetching Wedding Data :', err);
    }
  };

  // 예약 완료상태 api
  const handleCompleteClick = () => {};

  useEffect(() => {
    const fetchEstimationData = async () => {
      try {
        const finalConfirmData = await fetchFinalConfirmData(estimationId);
        const weddingConfirmData = await fetchWeddingData(expertUserId);
        setConfirmData(finalConfirmData as ConfirmData); // 상태 업데이트
        setWeddingData(weddingConfirmData || null);

        console.log('weddingConfirm data:', weddingConfirmData); // 디버깅용
        console.log('confirm data:', finalConfirmData); // 디버깅용
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
    <>
      <div>예약일자: {confirmData && formatDate(confirmData.estimation.created_at)}</div>
      <div>예약상태: {confirmData && getStatusKorean(confirmData.status)}</div>
      <div>예약금액: {confirmData?.estimation.charge}</div>
      <div>지역: {weddingData?.location_display}</div>
      <div>서비스 제공일시: {weddingData && formatDate(weddingData.wedding_datetime)}</div>
      <div>서비스 제공자: {confirmData?.estimation.expert.user.name}</div>
      <div>서비스 제공영역: {confirmData && getServiceKorean(confirmData.estimation.service)}</div>
      <div>서비스 제공자 연락처: {confirmData?.estimation.expert.user.phone_number}</div>
      <div>서비스 제공자 이미지: {confirmData?.estimation.expert.expert_image}</div>
    </>
  );
};

export default EstimationConfirm;
