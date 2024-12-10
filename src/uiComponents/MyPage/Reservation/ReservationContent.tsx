import MainBtn from '@/components/Button/MainBtn';
import Modal from '@/components/Modal/Modal';
import XSmallTitle from '@/components/Title/XSmallTitle';
import { useModalStore } from '@/store/modalStore';
import { IReservationContentProps } from '@/config/types';
import EstimationConfirm from './EstimationConfirm/EstimationConfirm';
import UserReviewEdit from './UserReviewEdit/ReviewEdit';
import { formatDate } from '@/utils/formatDate';
import { useNavigate } from 'react-router-dom';
import useModeChangerStore from '@/store/modeChangerStore';
import { fetchReserveUserList } from '@/api/reserve';

const ReservationContent = ({
  title,
  expertUser,
  requestUser,
  charge,
  serviceTime,
  reserveStatus,
  date,
  chatroomId,
  reservationId,
  reviewModal,
  estimationId,
  estimationModal,
}: IReservationContentProps) => {
  const { openModal, closeModal } = useModalStore();
  const { mode } = useModeChangerStore();
  const navigate = useNavigate();

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

  const chatRoomClick = (id: number) => {
    navigate(`/chatpage/${id}`);
  };

  // 최종견적서 호출
  const handleConfirmClick = async () => {
    const data = await fetchReserveUserList();
    console.log('reserveUSERlist:', data);
    openModal(`${estimationModal}`);
  };

  // 예약 완료상태 api
  const handleCompleteClick = () => {};

  // 예약 상태에 따른 버튼 렌더링
  // 모드에 따른 버튼 렌더링도 달라야함
  const renderButtons = () => {
    switch (reserveStatus) {
      case 'confirmed':
        return (
          <>
            <MainBtn name='채팅방 이동' size='medium' width='10rem' onClick={() => chatRoomClick(chatroomId)} />
            {mode !== 'user' ? (
              <>
                <MainBtn
                  name='견적서 확인'
                  size='medium'
                  width='10rem'
                  onClick={() => openModal(`${estimationModal}`)}
                />
                <Modal
                  modalId={`${estimationModal}`}
                  title='최종 견적서'
                  width='40rem'
                  height='60vh'
                  borderRadius='8px'
                  extraClass='estimationModal'
                  content={<EstimationConfirm estimationId={estimationId} charge={charge} />}
                  firstBtn={true}
                  firstBtnName='예약 취소'
                  firstBtnOnClick={() => closeModal(`${estimationModal}`)}
                  secondBtn={true}
                  secondBtnName='서비스완료'
                  secondBtnOnClick={() => console.log('post요청')}
                />
              </>
            ) : (
              <>
                <MainBtn name='후기 작성' size='medium' width='10rem' onClick={() => openModal(`${reviewModal}`)} />
                <Modal
                  modalId={`${reviewModal}`}
                  title='후기 작성하기'
                  width='40rem'
                  height='60vh'
                  borderRadius='8px'
                  extraClass='reviewModal'
                  content={
                    <UserReviewEdit
                      expertName={expertUser}
                      serviceTime={serviceTime}
                      reservationId={reservationId}
                      reviewModal={reviewModal}
                    />
                  }
                />
                <MainBtn
                  name='견적서 확인'
                  size='medium'
                  width='10rem'
                  onClick={() => openModal(`${estimationModal}`)}
                />
                <Modal
                  modalId={`${estimationModal}`}
                  title='최종 견적서'
                  width='40rem'
                  height='60vh'
                  borderRadius='8px'
                  extraClass='estimationModal'
                  content={<EstimationConfirm estimationId={estimationId} charge={charge} />}
                  firstBtn={true}
                  firstBtnName='닫기'
                  firstBtnOnClick={() => closeModal(`${estimationModal}`)}
                />
              </>
            )}
          </>
        );

      case 'completed':
        return (
          <>
            {mode !== 'user' ? (
              <>
                <MainBtn
                  name='견적서 확인'
                  size='medium'
                  width='10rem'
                  onClick={() => openModal(`${estimationModal}`)}
                />
                <Modal
                  modalId={`${estimationModal}`}
                  title='견적서 확인'
                  width='40rem'
                  height='60vh'
                  borderRadius='8px'
                  extraClass='estimationModal'
                  content={<EstimationConfirm estimationId={estimationId} charge={charge} />}
                />
              </>
            ) : (
              <>
                <MainBtn name='후기 작성' size='medium' width='10rem' onClick={() => openModal(`${reviewModal}`)} />
                <Modal
                  modalId={`${reviewModal}`}
                  title='후기 작성하기'
                  width='40rem'
                  height='60vh'
                  borderRadius='8px'
                  extraClass='reviewModal'
                  content={
                    <UserReviewEdit
                      expertName={expertUser}
                      serviceTime={serviceTime}
                      reservationId={reservationId}
                      reviewModal={reviewModal}
                    />
                  }
                />
                <MainBtn
                  name='견적서 확인'
                  size='medium'
                  width='10rem'
                  onClick={() => openModal(`${estimationModal}`)}
                />
                <Modal
                  modalId={`${estimationModal}`}
                  title='견적서 확인'
                  width='40rem'
                  height='60vh'
                  borderRadius='8px'
                  extraClass='estimationModal'
                  content={<EstimationConfirm estimationId={estimationId} charge={charge} />}
                />
              </>
            )}
          </>
        );

      case 'canceled':
        return (
          <>
            <MainBtn name='견적서 확인' size='medium' width='10rem' onClick={() => openModal(`${estimationModal}`)} />
            <Modal
              modalId={`${estimationModal}`}
              title='최종 견적서'
              width='40rem'
              height='60vh'
              borderRadius='8px'
              extraClass='estimationModal'
              content={<EstimationConfirm estimationId={estimationId} charge={charge} />}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className='content'>
        <div className='expert'>
          <div className='info'>
            {mode !== 'user' ? (
              <>
                <XSmallTitle title={`${getService(title)}`} extraClass='title' />
                <div className='name'>{requestUser}</div>
              </>
            ) : (
              <>
                <XSmallTitle title={`${getService(title)}`} extraClass='title' />
                <div className='name'>{expertUser}</div>
              </>
            )}
          </div>
          <div className='serviceInfo'>진행 일자 : {serviceTime}</div>
        </div>
        <div className='reserve'>
          <div className='reserveInfo'>
            <div className={`status ${reserveStatus}`}>{getStatus(reserveStatus)}</div>
            <div>{formatDate(date)} 예약</div>
          </div>
          <div className='reserveBtn'>{renderButtons()}</div>
        </div>
      </div>
    </>
  );
};

export default ReservationContent;
