import '@/global.scss';
import '@/styles/ReservationPage/Reservation.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import MainBtn from '@/components/Button/MainBtn';
import Modal from '@/components/Modal/Modal';
import { useModalStore } from '@/store/modalStore';
import UserReview from '@/uiComponents/MyPage/ReservationList/UserReview';

const ReservationPage = () => {
  const { openModal } = useModalStore();

  return (
    <>
      <div className='reservationPage contentLayout'>
        <PageTitle title='예약 내역' isPrevBtn={true} prevUrl='/mypage' />
        <div className='reserveList '>
          예약 리스트
          <div className='reserveContainer'>
            <div className='content'>
              <div className='expertInfo'>
                <div className='service'>결혼식 사회자</div>
                <div className='name'>전문가 성함 : 권순율 님</div>
                <div className='serviceTime'>서비스 진행 시간 : 2024/11/12 11:00</div>
                <div className='serviceCharge'>예약금액 : 300,000원</div>
              </div>
              <div className='reserveInfo'>
                <div className='date'>예약 일시 2024/10/11 10:00</div>
                <div className='reserveBtn'>
                  <MainBtn name='채팅하기' size='medium' width='16rem' />
                  <MainBtn name='후기 작성하기' size='medium' width='16rem' onClick={() => openModal('후기')} />
                  <Modal modalId='후기' title='후기 작성하기' content={<UserReview />} />
                </div>
              </div>
            </div>
            {/* // 반복 */}
            <div className='content'>
              <div className='reserveInfo'>
                <div className='service'>결혼식 사회자</div>
                <div className='date'>예약 일시 2024/10/11 10:00</div>
              </div>
              <div className='expertInfo'>
                <div className='name'>전문가 성함 : 권순율 님</div>
                <div className='serviceTime'>서비스 진행 시간 : 2024/11/12 11:00</div>
                <div className='serviceCharge'>예약금액 : 300,000원</div>
              </div>
              <div className='reserveBtn'>
                <MainBtn name='채팅하기' size='medium' width='16rem' />
                <MainBtn name='후기 작성하기' size='medium' width='16rem' onClick={() => openModal('후기')} />
                <Modal modalId='후기' title='후기 작성하기' content={<UserReview />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
