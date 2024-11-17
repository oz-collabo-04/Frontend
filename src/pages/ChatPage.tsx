import ChatRoom from '@/uiComponents/ChatPage/ChatRoom';
import ExpertWrapper from '@/uiComponents/ChatPage/ExpertWrapper';
import '@/styles/ChatPage/chatPage.scss';
import PageTitle from '@/components/PageTitle/PageTitle';

const ChatPage = () => {
  return (
    <>
      <div className='chatPage'>
        <div className='contentLayout'>
          {/* chatRoomTop */}
          <div className='chatRoomTop'>
            <PageTitle title='김대식' prevUrl='/chatlistpage' />
          </div>

          <div className='chatWrapper'>
            {/* chatRoom */}
            <ChatRoom />

            {/* expertWrapper */}
            <ExpertWrapper />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
