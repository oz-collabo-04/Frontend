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
  const { mode } = useModeChangerStore();
  const { isExpert } = useUserStateStore();

  // 유저모드 api
  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const data: IReservationData = await fetchReserveUserList();
      setReserveData(data);
      console.log('reservation data:', data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  // 전문가모드 api
  const fetchExpertData = async () => {
    setIsLoading(true);
    try {
      const data: IReservationData = await fetchReserveExpertList();
      setReserveData(data);
      console.log('reservation data:', data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  // 렌더링시 예약 리스트 로딩
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

  return (
    <>
      <div className='reservationPage contentLayout'>
        <PageTitle title='예약 내역' isPrevBtn={true} prevUrl='/mypage' />
        <div className='reserveList '>
          <MediumTitle title='예약 리스트' />
          {isLoading && !reserveData ? (
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
                    expertUser={expert.user.name}
                    requestUser={reservation.estimation.request_user.name}
                    expertUserId={expert.user.id}
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
