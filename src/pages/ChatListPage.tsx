import { useEffect, useState } from 'react';
import PageTitle from '@/components/PageTitle/PageTitle';
import '@/styles/ChatListPage/chatListPage.scss';
import AllChats from '@/uiComponents/ChatListPage/AllChats';
import OngoingChats from '@/uiComponents/ChatListPage/OngoingChats';
import CompletedChats from '@/uiComponents/ChatListPage/CompletedChats';
import { auth } from '@/api/axiosInstance';

const ChatListPage = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const [messageUnread] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case '진행중':
        return <OngoingChats />;
      case '예약완료':
        return <CompletedChats />;
      default:
        return <AllChats />;
    }
  };

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await auth.get('/chat/chatrooms/');
        console.log('data :', response.data);
      } catch (error) {
        console.log('API 요청에 실패했습니다 :', error);
      }
    };
    fetchChatList();
  }, []);

  return (
    <div className='chatListPage'>
      <div className='contentLayout'>
        <PageTitle title='채팅 리스트' isPrevBtn={false} />
        <div className='chatTab'>
          <div className='tabBtnBox'>
            {['전체', '진행중', '예약완료'].map((tab) => (
              <button
                key={tab}
                type='button'
                className={`
                  ${messageUnread && tab === '진행중' ? 'highlight' : ''} 
                  ${activeTab === tab ? 'active' : ''}
                `}
                onClick={() => setActiveTab(tab)}
              >
                <span>{tab}</span>
              </button>
            ))}
          </div>
          <div className='tabConBox'>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatListPage;
