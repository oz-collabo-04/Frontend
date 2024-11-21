import '@/styles/MyPage/main.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import SmallTitle from '@/components/Title/SmallTitle';
import { ReservationSection } from '@/uiComponents/MyPage/ReservationSection';
import { useState } from 'react';

export default function Mypage() {
  const [isExpert, setIsExpert] = useState(ture); // 임시코드. 전문가 여부에 따라 수정 예정

  return (
    <div className='myPage contentLayout'>
      <PageTitle title='마이페이지' isPrevBtn={true} prevUrl='/' />
      <main className='myMain'>
        <SmallTitle title='예약 관리' />
        <div className='reservationContainer'>
          <ReservationSection className='myReservation' title='예약 내역' linkTo='/reservation' />
          {isExpert && <ReservationSection className='myCalender' title='캘린더' linkTo='/calender' />}
        </div>
      </main>
    </div>
  );
}
