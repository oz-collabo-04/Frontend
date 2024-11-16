import React, { useState } from 'react';
import ProfileBadge from '@/components/Badge/ProfileBadge';
import MainBtn from '@/components/Button/MainBtn';
import SmallTitle from '@/components/Title/SmallTitle';
import profile from '@/assets/images/dalbong.jpg';

const ExpertWrapper = () => {
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
        <MainBtn name='거래 요청' />
        <MainBtn name='예약 완료' />
        <MainBtn name='최종 견적 확인하기' />
      </div>
    </div>
  );
};

export default ExpertWrapper;
