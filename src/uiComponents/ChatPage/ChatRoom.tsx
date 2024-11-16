import MyMessageBox from '@/uiComponents/ChatPage/MyMessageBox';
import YourMessageBox from '@/uiComponents/ChatPage/YourMessageBox';
import Input from '@/components/Input/Input';
import IconBtn from '@/components/IconButton/IconBtn';

const ChatRoom = () => {
  return (
    <div className='chatRoom'>
      <div className='chatContainer'>
        <div className='chatBox'>
          <MyMessageBox />
          <YourMessageBox />
        </div>
      </div>
      <form className='chatForm'>
        <Input type='text' width='100%' />
        <IconBtn src='/image/chat_enter_icon.svg' alt='채팅 입력' />
      </form>
    </div>
  );
};

export default ChatRoom;
