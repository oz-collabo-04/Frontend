import ProfileBadge from '@/components/Badge/ProfileBadge';
import profile from '@/assets/images/dalbong.jpg';

interface Message {
  content: string; // 메시지 내용
  user: { name: string; profileImage?: string }; // 보낸 사람의 이름 및 프로필 이미지
}

interface User {
  name: string; // 현재 유저 이름
}

interface ChatContainerProps {
  messageList: Message[]; // 메시지 목록
  user: User | null; // 현재 유저 정보
}

const ChatContainer = ({ messageList, user }: ChatContainerProps) => {
  console.log(messageList);
  return (
    <div className='chatContainer'>
      <div className='chatBox'>
        {messageList.map((message, index) => {
          const isMyMessage = user?.name === message.user?.name; // 현재 유저 확인
          const profileImage = message.user?.profileImage || profile; // 프로필 이미지 설정

          return (
            <div
              key={index} // 고유 키 추가
              className={`messageBox ${isMyMessage ? 'myMessageBox' : 'yourMessageBox'}`} // 동적 클래스
            >
              <ProfileBadge width='3.2rem' height='3.2rem' src={profileImage} />
              <div className='speechBubble'>
                {message.content}
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
