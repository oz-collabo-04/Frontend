import ChatRoom from '@/uiComponents/ChatPage/ChatRoom';
import ExpertWrapper from '@/uiComponents/ChatPage/ExpertWrapper';
import '@/styles/ChatPage/chatPage.scss';
import PageTitle from '@/components/PageTitle/PageTitle';
import { useState } from 'react';

const ChatPage = () => {
  const [expertWrapperShow, setExpertWrapperShow] = useState(false);

  const toggleExpertWrapper = () => {
    setExpertWrapperShow((prev) => !prev);
  };

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
            <ExpertWrapper extraClass={expertWrapperShow ? 'show' : ''} />
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
