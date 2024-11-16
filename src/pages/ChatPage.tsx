import SmallTitle from '@/components/Title/SmallTitle';
import ChatRoom from '@/uiComponents/ChatPage/ChatRoom';
import ExpertWrapper from '@/uiComponents/ChatPage/ExpertWrapper';
import '@/styles/ChatPage/chatPage.scss';

const ChatPage = () => {
  return (
    <>
      <div className='chatPage'>
        <div className='contentLayout'>
          {/* chatRoomTop */}
          <div className='chatRoomTop'>
            <button type='button' className='prevBtn'>
              이전
            </button>
            <SmallTitle title='User Name' />
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
