import '@/global.scss';
import '@/styles/MyPage/Reservation.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import MediumTitle from '@/components/Title/MediumTitle';
import ReservationContent from '@/uiComponents/MyPage/Reservation/ReservationContent';
import { useEffect, useState } from 'react';
import { IReservationData } from '@/config/types';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '@/store/modalStore';
import { useExpertStore } from '@/store/expertStore';
import { fetchReserveList } from '@/api/reserve';

const ReservationPage = () => {
  const [reserveData, setReserveData] = useState<IReservationData | null>([]);
  const { expert, setExpert } = useExpertStore();
  const [isLoading, setIsLoading] = useState(true);
  const { openModal } = useModalStore;

  const navigate = useNavigate();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data: IReservationData = await fetchReserveList();
      setReserveData(data);
      console.log('data:', data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  // 예약 리스트 로딩
  useEffect(() => {
    fetchData();
    // setExpert(reserveData);
  }, []);

  // 전문가 리뷰 연결
  const handleReviewClick = (id: number) => {
    // setSelectedExpertId(id);
    openModal('expertReview');
  };

  // 채팅방연결
  const handleChatClick = (id: number) => {
    navigate(`/chatpage/${id}`);
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
              const { estimation, status } = reservation;
              const { expert } = estimation;
              return (
                <ReservationContent
                  key={reservation.id}
                  title={estimation.service}
                  name={expert.user.name}
                  charge={estimation.charge}
                  serviceTime={estimation.due_date}
                  reserveStatus={status}
                  date={estimation.created_at}
                  reviewId={expert.id}
                  onChatClick={() => handleChatClick(expert.id)}
                  onReviewClick={() => handleReviewClick(reservation.id)}
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
