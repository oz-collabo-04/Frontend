import ExpertWrapper from '@/uiComponents/ChatPage/ExpertWrapper';
import '@/styles/ChatPage/chatPage.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { auth } from '@/api/axiosInstance';
import { DataItem } from '@/uiComponents/ChatListPage/chat';
import ChatRoom from '@/uiComponents/ChatPage/ChatRoom';

export interface ChatRoomProps {
  roomId?: string;
}

const ChatPage = () => {
  const [expertWrapperShow, setExpertWrapperShow] = useState(false);
  const [chatData, setChatData] = useState<DataItem | null>(null);
  const { roomId } = useParams();

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await auth.get(`/chat/chatrooms/${roomId}`);
        setChatData(response.data);
      } catch (error) {
        console.log('API 요청에 실패했습니다 :', error);
      }
    };
    fetchChatList();
  }, [roomId]);

  const isExpert = Number(localStorage.getItem('user_id')) === chatData?.expert.user.id;

  // 모바일 화면 Expert창 토글 버튼
  const toggleExpertWrapper = () => {
    setExpertWrapperShow((prev) => !prev);
  };

  return (
    <>
      <div className='chatPage'>
        <div className='contentLayout'>
          {/* chatRoomTop */}
          <div className='chatRoomTop'>
            <PageTitle
              title={
                chatData ? (isExpert ? chatData.user.name : chatData.expert.user.name) : '' // chatData가 없을 때 빈 문자열 표시
              }
              prevUrl='/chatlistpage'
            />
          </div>

          <div className='chatWrapper'>
            {/* chatRoom */}
            <ChatRoom roomId={roomId!} />

            {/* expertWrapper */}
            <ExpertWrapper extraClass={expertWrapperShow ? 'show' : ''} chatData={chatData} isExpert={isExpert} />
          </div>

          <button type='button' className='showBtn' onClick={toggleExpertWrapper}>
            {expertWrapperShow ? '숨기기' : '보이기'}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
