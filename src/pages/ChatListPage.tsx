import PageTitle from '@/components/PageTitle/PageTitle';
import Tab from '@/components/Tab/Tab';
import TabContent1 from '@/components/Tab/TabContent1';
import TabContent2 from '@/components/Tab/TabContent2';
import TabContent3 from '@/components/Tab/TabContent3';
import '@/styles/ChatListPage/chatListPage.scss';
import Chat from '@/uiComponents/ChatListPage/Chat';

const ChatListPage = () => {
  const tabs = [
    { label: '전체', content: <TabContent1 /> },
    { label: '진행중', content: <TabContent2 /> },
    { label: '예약 완료', content: <TabContent3 /> },
  ];

  return (
    <div className='chatListPage'>
      <div className='contentLayout'>
        <PageTitle title='채팅 리스트' isPrevBtn={false} />
        <Tab tabs={tabs} extraClass='chatTab' />
        <div className='chatListContainer'>
          <div className='chatList'>
            <Chat />
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListPage;
