import '@/global.scss';
import '@/styles/MyPage/Reservation.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import MediumTitle from '@/components/Title/MediumTitle';
import ReservationContent from '@/uiComponents/MyPage/Reservation/ReservationContent';
import { useEffect, useState } from 'react';
import { IReservationData } from '@/config/types';
import { useModalStore } from '@/store/modalStore';
import { fetchReserveList } from '@/api/reserve';

const ReservationPage = () => {
  const [reserveData, setReserveData] = useState<IReservationData | null>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { openModal } = useModalStore();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data: IReservationData = await fetchReserveList();
      setReserveData(data);
      console.log('data:', data);
      console.log('reserveData:', reserveData);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  // 예약 리스트 로딩
  useEffect(() => {
    fetchData();
    console.log('reserveData:', reserveData);
    // setExpert(reserveData);
  }, []);

  // 최종견적서
  const handleEstimationClick = (id: number) => {
    openModal('estimationConfirm');
  };

  // 전문가 리뷰 연결
  const handleReviewClick = (id: number) => {
    // setSelectedExpertId(id);
    openModal('expertReview');
  };
  return (
    <>
      <div className='reservationPage contentLayout'>
        <PageTitle title='예약 내역' isPrevBtn={true} prevUrl='/mypage' />
        <div className='reserveList '>
          <MediumTitle title='예약 리스트' />
          <div className='reserveContainer'>
            {/* 리스트 개별 컨텐츠 반복 */}
            {reserveData?.map((reservation) => {
              const { estimation, status, id } = reservation;
              const { expert } = estimation;
              return (
                <ReservationContent
                  key={id}
                  title={estimation.service}
                  name={expert.user.name}
                  charge={estimation.charge}
                  serviceTime={estimation.due_date}
                  reserveStatus={status}
                  date={estimation.created_at}
                  reservationId={id}
                  estimationId={estimation.id}
                  estimationModal={estimation.request_user.name}
                  reviewModal={expert.user.id}
                  onEstimateClick={() => handleEstimationClick(estimation.id)}
                  onReviewClick={() => handleReviewClick(expert.user.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
