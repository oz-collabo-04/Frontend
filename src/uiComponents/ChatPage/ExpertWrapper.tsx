import React, { useState } from 'react';
import ProfileBadge from '@/components/Badge/ProfileBadge';
import MainBtn from '@/components/Button/MainBtn';
import SmallTitle from '@/components/Title/SmallTitle';
import Modal from '@/components/Modal/Modal';
import { useModalStore } from '@/store/modalStore';
import { DataItem, EstimationDetails } from '../ChatListPage/chat';
import { formatDate } from '@/utils/formatDate';
import { auth } from '@/api/axiosInstance';
import TransactionModal from './Modal/TransactionModal';
import TransactionConfirmModal from './Modal/TransactionConfirmModal';
import { useToastStore } from '@/store/toastStore';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

interface ExpertWrapperProps {
  extraClass: string;
  chatData: DataItem | null;
  isExpert: boolean;
}

const ExpertWrapper = ({ extraClass, chatData, isExpert }: ExpertWrapperProps) => {
  const { openModal } = useModalStore();
  const [btnListVisible, setBtnListVisible] = useState(false);
  const [amount, setAmount] = useState<string | number>(''); // 금액 상태 추가
  const [estimationDetails, setEstimationDetails] = useState<EstimationDetails | null>(null);
  const { addToasts } = useToastStore();
  const navigate = useNavigate();

  // 최종 견적 보내기 PATCH 요청
  const updateEstimation = async (estimationId: number) => {
    if (!amount || Number(amount) <= 0) {
      console.error('유효한 금액을 입력하세요.');
      return;
    }

    const requestData = {
      due_date: chatData?.estimation.due_date,
      service: chatData?.estimation.service,
      charge: Number(amount), // 숫자 변환 추가
    };

    try {
      const response = await auth.patch(`/experts/estimations/${estimationId}/`, requestData);
      // console.log('업데이트 성공:', response.data);
      useModalStore.getState().closeModal('transactionModal'); // 거래요청 후 모달 닫기
      addToasts({ type: 'success', title: '견적을 보냈습니다.', id: Date.now().toString() });
      return response.data;
    } catch (error) {
      console.error('API 요청에 실패했습니다:', error);
      addToasts({ type: 'error', title: '견적 요청을 실패했습니다.', id: Date.now().toString() });
      throw error;
    }
  };

  // 최종 견적 확인하기 GET 요청
  const fetchEstimationDetails = async (estimationId: number) => {
    try {
      const response = await auth.get(`/estimations/${estimationId}`);
      // console.log('최종 견적 확인 성공:', response.data);
      setEstimationDetails(response.data);
      return response.data;
    } catch (error) {
      console.error('최종 견적 확인 실패:', error);
      throw error;
    }
  };

  // 예약 완료 POST요청
  const reservationComplete = async (estimationId?: number) => {
    try {
      const response = await auth.post('/reservations/create/', {
        estimation_id: estimationId,
      });
      if (response.status === 201) {
        addToasts({ type: 'success', title: '예약이 완료되었습니다.', id: Date.now().toString() });
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('예약 실패:', axiosError);
      if (error.response.status === 400 && error.response.data.detail === 'Reservation already exists') {
        addToasts({ type: 'error', title: '이미 예약이 존재합니다.', id: Date.now().toString() });
      } else {
        addToasts({ type: 'error', title: '예약에 실패했습니다.', id: Date.now().toString() });
      }
    }
  };

  // 채팅방 나가기 DELETE 요청
  const chatRoomExit = () => {
    const chatRoomDelete = async () => {
      try {
        const response = await auth.delete(`chat/chatrooms/${chatData?.id}/`);
        navigate('/chatlistpage');
        // console.log('삭제 성공:', response.data);
      } catch (error) {
        console.error('API 요청에 실패했습니다:', error);
      }
    };
    chatRoomDelete();
  };

  return (
    <div className={`expertWrapper ${extraClass}`}>
      <div>
        <div className='expertInfo'>
          <ProfileBadge width='5.2rem' height='5.2rem' src={chatData?.expert.expert_image} />
          <div className='expertDetail'>
            <SmallTitle title={chatData ? chatData.expert.user.name : ''} />
            <p className='expertOcc'>{chatData?.expert.service_display}</p>
          </div>
          <div className='addFuncBtnBox'>
            <button type='button' className='listBtn' onClick={() => setBtnListVisible((prev) => !prev)}>
              리스트
            </button>
            {btnListVisible && (
              <ul className='btnList'>
                <li>
                  <button type='button' onClick={chatRoomExit}>
                    채팅방 나가기
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <ul className='weddingSchedule'>
          <li>
            필요한 서비스 : <strong>{chatData?.estimation.request.service_list_display}</strong>
          </li>
          <li>
            예식장 위치 : <strong>{chatData?.estimation.request.location_display}</strong>
          </li>
          <li>
            예식장 이름 : <strong>{chatData?.estimation.request.wedding_hall}</strong>
          </li>
          <li>
            예식날짜 : {''}
            <strong>
              {chatData?.estimation.request.wedding_datetime
                ? formatDate(chatData?.estimation.request.wedding_datetime)
                : '날짜 없음'}
            </strong>
          </li>
          <li>
            의뢰자 : <strong>{chatData?.user.name}</strong>
          </li>
          <li>
            2부 예식 여부 : <strong>{chatData?.estimation.request.is_reception ? '진행' : '진행안함'}</strong>
          </li>
        </ul>
      </div>
      <div className='btnBox'>
        {isExpert ? (
          <>
            <MainBtn name='거래요청' onClick={() => openModal('transactionModal')} />
            <MainBtn
              name='예약 완료'
              onClick={() => {
                if (chatData?.estimation.id) {
                  reservationComplete(chatData.estimation.id);
                }
              }}
            />
          </>
        ) : (
          <MainBtn
            name='최종 견적 확인하기'
            onClick={() => {
              if (chatData?.estimation.id) {
                fetchEstimationDetails(chatData.estimation.id);
                openModal('transactionConfirmModal');
              }
            }}
          />
        )}
      </div>

      <Modal
        modalId='transactionModal'
        title='거래요청'
        content={<TransactionModal amount={amount} setAmount={setAmount} chatData={chatData} />}
        width='32rem'
        firstBtn={true}
        firstBtnName='거래 요청하기'
        firstBtnOnClick={() => {
          if (chatData?.id) {
            updateEstimation(chatData.estimation.id); // 견적 업데이트
            useModalStore.getState().closeModal('transactionModal'); // 모달 닫기
          }
        }}
      />
      <Modal
        modalId='transactionConfirmModal'
        title='최종 견적 확인하기'
        content={<TransactionConfirmModal estimationDetails={estimationDetails} />}
        width='32rem'
      />
    </div>
  );
};

export default ExpertWrapper;
