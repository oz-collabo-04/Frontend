import { useState } from 'react';
import PageTitle from '@/components/PageTitle/PageTitle';
import '@/styles/ChatListPage/chatListPage.scss';
import ChatList from '@/uiComponents/ChatListPage/ChatList';

const ChatListPage = () => {
  const [activeTab, setActiveTab] = useState('전체');

  const renderContent = () => {
    switch (activeTab) {
      case '진행중':
        return <ChatList status='pending' />;
      case '예약완료':
        return <ChatList status='reserved' />;
      default:
        return <ChatList />;
    }
  };

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
