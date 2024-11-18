import ProfileBadge from '@/components/Badge/ProfileBadge';
import profile from '@/assets/images/dalbong.jpg';

interface Message {
  chat: string; // 메시지 내용
  user: { name: string }; // 보낸 사람의 이름
}

interface User {
  name: string; // 유저의 이름
}

interface ChatContainerProps {
  messageList: Message[]; // 메시지 목록 (Message 배열)
  user: User | null; // 현재 유저 (User 객체 또는 null)
}

const ChatContainer = ({ messageList, user }: ChatContainerProps) => {
  return (
    <div className='chatContainer'>
      <div className='chatBox'>
        {messageList.map((message, index) => {
          const isMyMessage = user && message.user?.name === user.name;

          return isMyMessage ? (
            // 내가 보낸 메시지
            <div className='messageBox myMessageBox' key={index}>
              <ProfileBadge width='3.2rem' height='3.2rem' src={profile} />
              <div className='speechBubble'>
                {message.chat}
                <span className='createMessageTime'>
                  오후 1:30
                  <span className='messageUnread'>안읽음</span>
                </span>
              </div>
            </div>
          ) : (
            // 상대방이 보낸 메시지
            <div className='messageBox yourMessageBox' key={index}>
              <ProfileBadge width='3.2rem' height='3.2rem' src={profile} />
              <div className='speechBubble'>
                {message.chat}
                <span className='createMessageTime'>
                  오후 1:30
                  <span className='messageUnread'>안읽음</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatContainer;
