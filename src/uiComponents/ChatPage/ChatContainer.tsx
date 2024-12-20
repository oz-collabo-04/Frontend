import ProfileBadge from '@/components/Badge/ProfileBadge';
import { DataItem } from '../ChatListPage/chat';
import { useEffect, useRef } from 'react';
import { chatFormatDate } from '@/utils/chatFormatDate';

export interface Message {
  content: string; // 메시지 내용
  sender: number; // 보낸 사람의 아이디
  is_read: boolean;
  timestamp: string;
}

interface ChatContainerProps {
  messageList: Message[]; // 메시지 목록
  roomData: DataItem;
  otherExist: boolean;
}

const ChatContainer = ({ messageList, roomData, otherExist }: ChatContainerProps) => {
  const user_id = sessionStorage.getItem('user_id'); // 로컬스토리지 유저 id 추출
  const chatBoxRef = useRef<HTMLDivElement>(null); // 채팅 컨테이너의 참조 생성

  // 메시지가 업데이트될 때마다 스크롤 최하단으로 이동
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight; // 스크롤 최하단으로 이동
    }
  }, [messageList]);

  return (
    <div className='chatContainer'>
      <div className='chatBox' ref={chatBoxRef}>
        {messageList.map((message, index) => {
          const isMyMessage = Number(user_id) === message.sender; // 현재 유저 확인
          const isExpert = message.sender === roomData.expert.user.id;
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
                  {chatFormatDate(message.timestamp)}
                  <span className='messageUnread'>
                    {!isMyMessage || message.is_read || otherExist ? '읽음' : '안읽음'}
                  </span>
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
