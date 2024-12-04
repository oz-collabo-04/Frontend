import ProfileBadge from '@/components/Badge/ProfileBadge';
import { DataItem } from '../ChatListPage/chat';

export interface Message {
  content: string; // 메시지 내용
  sender: number; // 보낸 사람의 아이디
  is_read: boolean;
  timestamp: string;
}

interface ChatContainerProps {
  messageList: Message[]; // 메시지 목록
  roomData: DataItem;
}

const ChatContainer = ({ messageList, roomData }: ChatContainerProps) => {
  const user_id = localStorage.getItem('user_id');
  // let profile_image = ''
  return (
    <div className='chatContainer'>
      <div className='chatBox'>
        {messageList.map((message, index) => {
          const isMyMessage = Number(user_id) === message.sender; // 현재 유저 확인
          // console.log(`내메시지야? - ${isMyMessage}, 보낸사람은? ${message.sender}, 나는누구? ${user_id}`);
          const isExpert = message.sender === roomData.expert.user.id;
          // console.log(
          //   `메시지 보낸사람이 전문가? - ${isExpert}, 보낸사람은? ${message.sender}, 전문가는 누군데? ${roomData.expert.user.id}`
          // );
          const profileImage = isExpert ? roomData.expert.expert_image : roomData.user.profile_image; // 프로필 이미지 설정

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
