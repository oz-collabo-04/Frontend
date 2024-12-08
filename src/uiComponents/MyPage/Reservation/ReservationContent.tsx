import MainBtn from '@/components/Button/MainBtn';
import Modal from '@/components/Modal/Modal';
import XSmallTitle from '@/components/Title/XSmallTitle';
import { useModalStore } from '@/store/modalStore';
import { IReservationContentProps } from '@/config/types';
import EstimationConfirm from './EstimationConfirm';
import UserReviewEdit from './UserReview/UserReviewEdit';
import TwoUserReviewEditCopy from './UserReview/TwoUserReviewEditCopy';

const ReservationContent = ({
  title,
  name,
  charge,
  serviceTime,
  reserveStatus,
  date,
  reservationId,
  estimationId,
  estimationModal,
  reviewModal,
}: IReservationContentProps) => {
  const { openModal, closeModal } = useModalStore();

  // 데이터상태 한글변경
  const getStatus = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '예약 확정';
      case 'completed':
        return '서비스 완료';
      case 'canceled':
        return '예약 취소';
      default:
        return '기본';
    }
  };

  // 서비스 한글변경
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
            <MainBtn name='견적서 확인' size='medium' width='14rem' onClick={() => openModal(`${estimationModal}`)} />
            <Modal
              modalId={`${estimationModal}`}
              title='최종 견적서'
              content={<EstimationConfirm estimationId={estimationId} />}
              width='40rem'
              height='60vh'
              borderRadius='8px'
              firstBtn={true}
              firstBtnName='닫기'
              firstBtnOnClick={() => closeModal(`${estimationModal}`)}
            />
            <MainBtn name='후기 작성하기' size='medium' width='14rem' onClick={() => openModal(`${reviewModal}`)} />
            <Modal
              modalId={`${reviewModal}`}
              title='후기 작성하기'
              content={<TwoUserReviewEditCopy name={name} serviceTime={serviceTime} reservationId={reservationId} />}
              width='40rem'
              height='60vh'
              borderRadius='8px'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationContent;
