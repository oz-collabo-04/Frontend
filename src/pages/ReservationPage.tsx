import '@/global.scss';
import '@/styles/MyPage/Reservation.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import MediumTitle from '@/components/Title/MediumTitle';
import ReservationContent from '@/uiComponents/MyPage/Reservation/ReservationContent';
import { useEffect, useState } from 'react';
import { IReservationData } from '@/config/types';
import { fetchReserveExpertList, fetchReserveUserList } from '@/api/reserve';
import useModeChangerStore from '@/store/modeChangerStore';
import useUserStateStore from '@/store/useUserStateStore';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

const ReservationPage = () => {
  const [reserveData, setReserveData] = useState<IReservationData | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { mode, setMode } = useModeChangerStore();
  const { isExpert } = useUserStateStore();

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const data: IReservationData = await fetchReserveUserList();
      setReserveData(data);
      console.log('data:', data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  const fetchExpertData = async () => {
    setIsLoading(true);
    try {
      const data: IReservationData = await fetchReserveExpertList();
      setReserveData(data);
      console.log('data:', data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  // 예약 리스트 로딩
  useEffect(() => {
    if (!isExpert && mode === 'user') {
      fetchUserData();
    } else if (isExpert && mode === 'expert') {
      fetchExpertData();
    } else if (isExpert && mode === 'user') {
      fetchUserData();
    } else if (mode === 'user') {
      fetchUserData();
    } else {
      fetchUserData();
    }
    setIsLoading(false);
  }, [isExpert, mode]);

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <>
      <div className='reservationPage contentLayout'>
        <PageTitle title='예약 내역' isPrevBtn={true} prevUrl='/mypage' />
        <div className='reserveList '>
          <MediumTitle title='예약 리스트' />
          {isLoading ? (
            <div className='loading'>
              <LoadingSpinner />
              <p>견적 정보를 불러오는 중입니다...</p>
            </div>
          ) : (
            <div className='reserveContainer'>
              {/* 리스트 개별 컨텐츠 반복 */}
              {reserveData?.map((reservation) => {
                const { estimation, status, id, chatroom_id } = reservation;
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
                    chatroomId={chatroom_id}
                    reservationId={id}
                    reviewModal={expert.user.name}
                    estimationId={id}
                    estimationModal={estimation.request_user.name}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
