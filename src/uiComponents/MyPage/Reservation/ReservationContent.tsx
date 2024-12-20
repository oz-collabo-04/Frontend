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
import { getServiceKorean } from '@/utils/serviceKorean';
import { getStatusKorean } from '@/utils/statusKorean';
import { fetchReservationStatus } from '@/api/reserve';
import { useState } from 'react';
import { useToastStore } from '@/store/toastStore';

const ReservationContent = ({
  title,
  expertUser,
  expertUserId,
  requestUser,
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
  const [currentStatus, setCurrentStatus] = useState(reserveStatus);
  const { addToasts } = useToastStore();

  const chatRoomClick = (id: number) => {
    navigate(`/chatpage/${id}`);
  };

  const updateReservationStatus = async (id: number, newStatus: string) => {
    try {
      const updatedData = await fetchReservationStatus(id, newStatus);
      setCurrentStatus(updatedData.status); // 업데이트된 상태를 반영
    } catch (error) {
      console.error('Failed to update reservation status:', error);
    }
  };

  // 예약 완료상태 api
  const handleCompleteBtnClick = (reservationId: number) => {
    updateReservationStatus(reservationId, 'completed'); // 서비스 완료 상태로 변경
    addToasts({ type: 'success', title: '서비스 완료 상태로 바뀌었습니다.', id: Date.now().toString() });
    closeModal(`${estimationModal}`);
  };

  const handleCancelBtnClick = (reservationId: number) => {
    updateReservationStatus(reservationId, 'canceled'); // 예약 취소 상태로 변경
    addToasts({ type: 'success', title: '서비스 완료 상태로 바뀌었습니다.', id: Date.now().toString() });
    closeModal(`${estimationModal}`);
  };

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
                  content={<EstimationConfirm estimationId={estimationId} expertUserId={expertUserId} />}
                  firstBtn={true}
                  firstBtnName='예약 취소'
                  firstBtnOnClick={() => handleCancelBtnClick(reservationId)}
                  secondBtn={true}
                  secondBtnName='서비스완료'
                  secondBtnOnClick={() => handleCompleteBtnClick(reservationId)}
                />
              </>
            ) : (
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
                  content={<EstimationConfirm estimationId={estimationId} expertUserId={expertUserId} />}
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
                  content={<EstimationConfirm estimationId={estimationId} expertUserId={expertUserId} />}
                  firstBtn={true}
                  firstBtnName='닫기'
                  firstBtnOnClick={() => closeModal(`${estimationModal}`)}
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
                  content={<EstimationConfirm estimationId={estimationId} expertUserId={expertUserId} />}
                  firstBtn={true}
                  firstBtnName='닫기'
                  firstBtnOnClick={() => closeModal(`${estimationModal}`)}
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
              content={<EstimationConfirm estimationId={estimationId} expertUserId={expertUserId} />}
              firstBtn={true}
              firstBtnName='닫기'
              firstBtnOnClick={() => closeModal(`${estimationModal}`)}
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
                <XSmallTitle title={`${getServiceKorean(title)}`} extraClass='title' />
                <div className='name'>{requestUser}</div>
              </>
            ) : (
              <>
                <XSmallTitle title={`${getServiceKorean(title)}`} extraClass='title' />
                <div className='name'>{expertUser}</div>
              </>
            )}
          </div>
          <div className='serviceInfo'>진행 일자 : {serviceTime}</div>
        </div>
        <div className='reserve'>
          <div className='reserveInfo'>
            <div className={`status ${reserveStatus}`}>{getStatusKorean(reserveStatus)}</div>
            <div>{formatDate(date)} 예약</div>
          </div>
          <div className='reserveBtn'>{renderButtons()}</div>
        </div>
      </div>
    </>
  );
};

export default ReservationContent;
