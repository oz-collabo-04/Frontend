import '@/global.scss';
import '@/styles/MyPage/Reservation.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import MediumTitle from '@/components/Title/MediumTitle';
import ReservationContent from '@/uiComponents/MyPage/Reservation/ReservationContent';
import { useEffect, useState } from 'react';
import { fetchReserveList } from '@/api/reserve';
import { IReservationData } from '@/config/types';

const ReservationPage = () => {
  const [reserveData, setReserveData] = useState<IReservationData | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: IReservationData = await fetchReserveList();
        setReserveData(data);
        console.log('data:', data);
        return data;
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

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
                  name={expert.name}
                  charge={estimation.charge}
                  ServiceTime={estimation.due_date}
                  reserveStatus={status}
                  date={estimation.created_at}
                  reviewId={estimation.id}
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
