import InputField from './InputField';
import { useEffect, useRef } from 'react';
import ChatContainer from './ChatContainer';
import { ChatRoomProps } from '@/pages/ChatPage';
import ChatSocket from '@/utils/chatSocket';
import useMessageStore from '@/store/useMessageStore';
import { auth } from '@/api/axiosInstance';

const socketBaseUrl = import.meta.env.VITE_BACKEND_CHAT_URL;

const ChatRoom = ({ roomId }: ChatRoomProps) => {
  const chatSocketRef = useRef<ChatSocket | null>(null); // ChatSocket 인스턴스 관리
  const messages = useMessageStore((state) => state.messages); // 메시지 스토어에서 메시지 가져오기

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await auth.get(`chat/chatrooms/${roomId}/messages/`);
        // console.log('data :', response.data);
      } catch (error) {
        console.log('API 요청에 실패했습니다 :', error);
      }
    };
    fetchChatList();
  }, []);

  useEffect(() => {
    if (roomId && !chatSocketRef.current) {
      // WebSocket 연결이 중복되지 않도록 조건 추가
      chatSocketRef.current = new ChatSocket(`${socketBaseUrl}/chat/${roomId}/`, [
        localStorage.getItem('access_token')!, // WebSocket 인증용 토큰 전달
      ]);
    }

    // 컴포넌트 언마운트 시 WebSocket 연결 해제 및 초기화
    return () => {
      chatSocketRef.current?.close(); // WebSocket 연결 닫기
      chatSocketRef.current = null; // WebSocket 인스턴스 초기화
      console.log('ChatSocket closed');
    };
  }, [roomId]); // roomId 변경 시 WebSocket 연결 갱신

  // 메시지 전송 핸들러
  const handleSendMessage = (messageContent: string) => {
    // const message = {
    //   type: 'chat_message', // 메시지 타입 추가
    //   content: messageContent, // 입력받은 메시지 내용
    //   timestamp: new Date().toISOString(), // 타임스탬프 추가
    // };
    chatSocketRef.current?.sendMessage(messageContent); // ChatSocket을 통해 메시지 전송
  };

  return (
    <div className='chatRoom'>
      <ChatContainer messageList={messages} /> {/* 메시지 목록 렌더링 */}
      <InputField onSendMessage={handleSendMessage} /> {/* 메시지 전송 핸들러 전달 */}
    </div>
  );
};

export default ChatRoom;
