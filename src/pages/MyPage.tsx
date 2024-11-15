import LargeTitle from '@/components/Title/LargeTitle';
import SmallTitle from '@/components/Title/SmallTitle';
import '@/styles/MyPage/main.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Mypage() {
  const [isExpert, useIsExpert] = useState(false); // 임시코드. 일단 전문가 아이디 확정되면 전문가아이디에 따라 boolean

  return (
    <>
      <div className='myPage contentLayout'>
        <div className='myHeader'>
          <button onClick={() => (window.location.href = '/')}>뒤로가기</button>
          <LargeTitle title='마이 페이지' />
        </div>

        <main className='myMain'>
          <SmallTitle title='예약 관리' />

          <div className='mySection'>
            <div>예약 내역</div>
            <Link to='/reservation'>
              <button>{'>'}</button>
            </Link>
          </div>

          {isExpert && (
            // 캘린더 부분은 후순위지만 일단 넣음. 추후에 안 쓸거면 코드 지우면 됨
            <div className='mySection'>
              <div>캘린더</div>
              <Link to='/calender'>
                <button>{'>'}</button>
              </Link>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
