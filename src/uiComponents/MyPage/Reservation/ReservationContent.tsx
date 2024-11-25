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
  ServiceTime,
  reserveStatus,
  date,
  reviewId,
}: IReservationContentProps) => {
  const { openModal } = useModalStore();

  const getStatusClass = (status: string) => {
    switch (status) {
      case '채팅 중':
        return 'status-chatting';
      case '예약 확정':
        return 'status-confirmed';
      case '서비스 완료':
        return 'status-complete';
      case '예약 취소':
        return 'status-canceled';
      default:
        return 'status-default';
    }
  };

  return (
    <>
      <div className='content'>
        <div className='expertInfo'>
          <XSmallTitle title={title} />
          <div className='serviceInfo'>
            <div className='name'>{name}</div>
            <div className='serviceCharge'>{charge}</div>
            <div className='serviceTime'>진행 시간 : {ServiceTime}</div>
          </div>
        </div>
        <div className='reserve'>
          <div className='reserveInfo'>
            <div className={`status ${getStatusClass(reserveStatus)}`}>{reserveStatus}</div>
            <div>예약 일시 {date}</div>
          </div>
          <div className='reserveBtn'>
            <MainBtn name='채팅하기' size='medium' width='14rem' />
            <MainBtn name='후기 작성하기' size='medium' width='14rem' onClick={() => openModal(`${reviewId}`)} />
            <Modal modalId={`${reviewId}`} title='후기 작성하기' content={<UserReview />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationContent;
