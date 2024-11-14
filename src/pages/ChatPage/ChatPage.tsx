import MainBtn from '@/components/Button/MainBtn';
import IconBtn from '@/components/IconButton/IconBtn';
import Input from '@/components/Input/Input';
import SmallTitle from '@/components/Title/SmallTitle';
import '@/styles/ChatPage/chat.scss';
import { useState } from 'react';

const ChatPage = () => {
  const [btnListVisible, setBtnListVisible] = useState(false);
  return (
    <>
      <header className='chatHeader'>헤더</header>
      <div className='chatPage'>
        {/* chatRoomTop */}
        <div className='chatRoomTop'>
          <button type='button' className='prevBtn'>
            이전
          </button>
          <SmallTitle title='User Name' />
        </div>

        <div className='chatWrapper'>
          {/* chatRoom */}
          <div className='chatRoom'>
            <div className='chatContainer'>
              <div className='chatBox'>
                <div className='messageBox myMessageBox'>
                  <span className='userProfileImg'>
                    <img src='/image/dalbong.jpg' alt='사용자 이미지' />
                  </span>
                  <div className='speechBubble'>말풍선말풍선1</div>
                  <span className='createMessageTime'>오후 1:30</span>
                </div>
                {/*  */}
                <div className='messageBox yourMessageBox'>
                  <span className='userProfileImg'>
                    <img src='/image/dalbong.jpg' alt='사용자 이미지' />
                  </span>
                  <div className='speechBubble'>
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                  </div>
                  <span className='createMessageTime'>오후 1:30</span>
                </div>
                <div className='messageBox yourMessageBox'>
                  <span className='userProfileImg'>
                    <img src='/image/dalbong.jpg' alt='사용자 이미지' />
                  </span>
                  <div className='speechBubble'>
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                  </div>
                  <span className='createMessageTime'>오후 1:30</span>
                </div>
                <div className='messageBox yourMessageBox'>
                  <span className='userProfileImg'>
                    <img src='/image/dalbong.jpg' alt='사용자 이미지' />
                  </span>
                  <div className='speechBubble'>
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                    말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선 말풍선
                  </div>
                  <span className='createMessageTime'>오후 1:30</span>
                </div>
              </div>
            </div>
            <form className='chatForm'>
              <Input type='text' width='100%' />
              <IconBtn src='/image/test_icon.svg' alt='아이콘버튼' />
            </form>
          </div>

          {/* expertWrapper */}
          <div className='expertWrapper'>
            <div>
              <div className='expertInfo'>
                <IconBtn width='5.2rem' height='5.2rem' src='/image/dalbong.jpg' alt='아이콘버튼' isFull={true} />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
