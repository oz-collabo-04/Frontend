import MainBtn from '@/components/Button/MainBtn';
import Modal from '@/components/Modal/Modal';
import XSmallTitle from '@/components/Title/XSmallTitle';
import UserReview from './UserReview';
import { useModalStore } from '@/store/modalStore';
import { IReservationContentProps } from '@/config/types';

const ReservationContent = ({
  title,
  name,
  charge,
  serviceTime,
  reserveStatus,
  date,
  reviewId,
  onChatClick,
}: IReservationContentProps) => {
  const { openModal } = useModalStore();

  // 데이터상태에 따른 스위치
  const getStatus = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '예약 확정';
      case 'completed':
        return '서비스 완료';
      case 'canceled':
        return '예약 취소';
      default:
        return '상태 없음';
    }
  };

  const getService = (service: string) => {
    switch (service) {
      case 'mc':
        return '결혼식 사회자';
      case 'singer':
        return '축가 가수';
      case 'video':
        return '영상 촬영';
      case 'snap':
        return '스냅 촬영';
      default:
        return '새로운 서비스';
    }
  };

  return (
    <>
      <div className='content'>
        <div className='expertInfo'>
          <XSmallTitle title={`${getService(title)}`} />
          <div className='serviceInfo'>
            <div className='name'>{name}</div>
            <div className='serviceCharge'>{charge}</div>
            <div className='serviceTime'>진행 시간 : {serviceTime}</div>
          </div>
        </div>
        <div className='reserve'>
          <div className='reserveInfo'>
            <div className={`status ${reserveStatus}`}>{getStatus(reserveStatus)}</div>
            <div>예약 일시 {date}</div>
          </div>
          <div className='reserveBtn'>
            <MainBtn name='채팅하기' size='medium' width='14rem' onClick={() => onChatClick?.()} />
            <MainBtn name='후기 작성하기' size='medium' width='14rem' onClick={() => openModal(`${reviewId}`)} />
            <Modal
              modalId={`${reviewId}`}
              title='후기 작성하기'
              content={<UserReview />}
              width='60rem'
              height='40vh'
              borderRadius='8px'
              firstBtn={true}
              firstBtnName='후기 작성 완료'
              firstBtnOnClick={() => console.log('첫 번째 버튼 클릭')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationContent;
