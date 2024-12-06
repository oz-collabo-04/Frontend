import React, { useState } from 'react';
import ProfileBadge from '@/components/Badge/ProfileBadge';
import MainBtn from '@/components/Button/MainBtn';
import SmallTitle from '@/components/Title/SmallTitle';
import Modal from '@/components/Modal/Modal';
import { useModalStore } from '@/store/modalStore';
import { DataItem } from '../ChatListPage/chat';
import { formatDate } from '@/utils/formatDate';
import { auth } from '@/api/axiosInstance';
import TransactionModal from './Modal/TransactionModal';
import TransactionConfirmModal from './Modal/TransactionConfirmModal';

interface ExpertWrapperProps {
  extraClass: string;
  chatData: DataItem | null;
  isExpert: boolean;
}

const ExpertWrapper = ({ extraClass, chatData, isExpert }: ExpertWrapperProps) => {
  const { openModal } = useModalStore();
  const [btnListVisible, setBtnListVisible] = useState(false);
  const [amount, setAmount] = useState<string | number>(''); // 금액 상태 추가

  // 최종 견적 보내기 PATCH 요청
  const updateEstimation = async (estimationId: string) => {
    if (!amount || Number(amount) <= 0) {
      console.error('유효한 금액을 입력하세요.');
      return;
    }

    const requestData = {
      due_date: '2024-12-06',
      service: 'mc',
      charge: Number(amount), // 숫자 변환 추가
    };

    try {
      const response = await auth.patch(`/experts/estimations/${estimationId}/`, requestData);
      console.log('업데이트 성공:', response.data);
      useModalStore.getState().closeModal('transactionModal'); // 거래요청 후 모달 닫기
      return response.data;
    } catch (error) {
      console.error('API 요청에 실패했습니다:', error);
      throw error;
    }
  };

  // 채팅방 나가기 DELETE 요청
  const chatRoomExit = () => {
    const chatRoomDelete = async () => {
      try {
        const response = await auth.delete(`chat/chatrooms/${chatData?.id}/`);
        console.log('삭제 성공:', response.data);
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
                {/* <li>
                  <button type='button'>신고하기</button>
                </li> */}
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
            2부 예식 여부 : <strong>대기</strong>
          </li>
        </ul>
      </div>
      <div className='btnBox'>
        {!isExpert ? (
          <>
            <MainBtn name='거래요청' onClick={() => openModal('transactionModal')} />
            <MainBtn name='예약 완료' />
            <MainBtn name='최종 견적 확인하기' onClick={() => openModal('transactionConfirmModal')} />
          </>
        ) : (
          <div>dd</div>
        )}
      </div>

      <Modal
        modalId='transactionModal'
        title='거래요청'
        content={<TransactionModal amount={amount} setAmount={setAmount} />}
        width='32rem'
        firstBtn={true}
        firstBtnName='거래 요청하기'
        firstBtnOnClick={() => {
          if (chatData?.id) {
            updateEstimation(chatData.id); // 견적 업데이트
            useModalStore.getState().closeModal('transactionModal'); // 모달 닫기
          }
        }}
      />
      <Modal
        modalId='transactionConfirmModal'
        title='최종 견적 확인하기'
        content={<TransactionConfirmModal />}
        width='32rem'
      />
    </div>
  );
};

export default ExpertWrapper;
