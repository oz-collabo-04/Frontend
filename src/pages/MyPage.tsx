import '@/styles/MyPage/main.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import SmallTitle from '@/components/Title/SmallTitle';
import { ReservationSection } from '@/uiComponents/MyPage/ReservationSection';
import useUserStateStore from '@/store/useUserStateStore';
import { ProfileEditSection } from '@/uiComponents/MyPage/ProfileEditSection';
import useModeChangerStore from '@/store/modeChangerStore';

export default function Mypage() {
  const { mode } = useModeChangerStore();
  const { isExpert } = useUserStateStore();

  return (
    <div className='myPage contentLayout'>
      <PageTitle title='마이페이지' isPrevBtn={true} prevUrl='/' />
      <main className='myMain'>
        <section className='reservationSection'>
          <SmallTitle title='예약 관리' />
          <div className='reservationContainer'>
            <ReservationSection className='myReservation' title='예약 내역' linkTo='/reservation' />
            {mode === 'expert' && <ReservationSection className='myCalender' title='캘린더' linkTo='/calenderPage' />}
          </div>
        </section>

        {mode === 'expert' && isExpert && (
          <section className='profileSection'>
            <SmallTitle title='프로필 관리' />
            <div className='profileContainer'>
              <ProfileEditSection className='myProfile' title='프로필' linkTo='/expertProfileEditPage' />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
