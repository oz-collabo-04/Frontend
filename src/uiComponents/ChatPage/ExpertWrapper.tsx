import React, { useState } from 'react';
import ProfileBadge from '@/components/Badge/ProfileBadge';
import MainBtn from '@/components/Button/MainBtn';
import SmallTitle from '@/components/Title/SmallTitle';
import profile from '@/assets/images/dalbong.jpg';
import Modal from '@/components/Modal/Modal';
import { useModalStore } from '@/store/modalStore';
import DealModal from './Modal/DealModal';

const ExpertWrapper = () => {
  const { openModal } = useModalStore();
  const [btnListVisible, setBtnListVisible] = useState(false);
  return (
    <div className='expertWrapper'>
      <div>
        <div className='expertInfo'>
          <ProfileBadge width='5.2rem' height='5.2rem' src={profile} />
          <div className='expertDetail'>
            <SmallTitle title='Expert User Name' />
            <p className='address'>서울 서초구</p>
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
        <div className='weddingSchedule'>예식일정</div>
      </div>
      <div className='btnBox'>
        <MainBtn name='거래요청' onClick={() => openModal('modal1')} />
        <MainBtn name='예약 완료' />
        <MainBtn name='최종 견적 확인하기' />
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
