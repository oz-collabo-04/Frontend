import { useState } from 'react';
import ProfileBadge from '@/components/Badge/ProfileBadge';
import MainBtn from '@/components/Button/MainBtn';
import SmallTitle from '@/components/Title/SmallTitle';
import Modal from '@/components/Modal/Modal';
import { useModalStore } from '@/store/modalStore';
import DealModal from './Modal/DealModal';
import { DataItem } from '../ChatListPage/chat';
import { formatDate } from '@/utils/formatDate';

interface ExpertWrapperProps {
  extraClass: string;
  chatData: DataItem | null;
  isExpert: boolean;
}

const ExpertWrapper = ({ extraClass, chatData, isExpert }: ExpertWrapperProps) => {
  const { openModal } = useModalStore();
  const [btnListVisible, setBtnListVisible] = useState(false);
  console.log(chatData?.expert.expert_image);

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
                  <button type='button'>채팅방 나가기</button>
                </li>
                <li>
                  <button type='button'>신고하기</button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <ul className='weddingSchedule'>
          <li>
            필요한 서비스 : <strong>{chatData?.request.service_list_display}</strong>
          </li>
          <li>
            예식장 위치 : <strong>{chatData?.request.location_display}</strong>
          </li>
          <li>
            예식장 이름 : <strong>{chatData?.request.wedding_hall}</strong>
          </li>
          <li>
            예식날짜 : {''}
            <strong>
              {chatData?.request.wedding_datetime ? formatDate(chatData?.request.wedding_datetime) : '날짜 없음'}
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
        {isExpert ? (
          <>
            <MainBtn name='거래요청' onClick={() => openModal('modal1')} />
            <MainBtn name='예약 완료' />
          </>
        ) : (
          <MainBtn name='최종 견적 확인하기' />
        )}
      </div>

      <Modal
        modalId='modal1'
        title='거래요청'
        content={<DealModal />}
        width='32rem'
        firstBtn={true}
        firstBtnName='거래 요청하기'
        firstBtnOnClick={() => console.log('거래요청하기')}
      />
    </div>
  );
};

export default ExpertWrapper;
