import InputField from './InputField';
import { useEffect, useRef, useState } from 'react';
import ChatContainer from './ChatContainer';
import { ChatRoomProps } from '@/pages/ChatPage';
import ChatSocket from '@/utils/chatSocket';
import useMessageStore from '@/store/useMessageStore';

const socketBaseUrl = import.meta.env.VITE_BACKEND_CHAT_URL;

const ChatRoom = ({ roomId }: ChatRoomProps) => {
  const chatSocketRef = useRef<ChatSocket | null>(null); // ChatSocket 인스턴스 관리
  const messages = useMessageStore((state) => state.messages); // 메시지 스토어에서 메시지 가져오기

  useEffect(() => {
    if (roomId) {
      // ChatSocket 인스턴스 생성
      chatSocketRef.current = new ChatSocket(`${socketBaseUrl}/chat/${roomId}/`, [
        localStorage.getItem('access_token')!,
      ]);
      // chatSocketRef.current = chatSocket;

      console.log(`ChatSocket initialized for room ID: ${roomId}`);

      // 컴포넌트가 언마운트되거나 방 ID가 변경될 때 WebSocket 연결 종료
      return () => {
        if (chatSocketRef.current?.webSocket?.readyState === 3) {
          chatSocketRef.current?.close();
          console.log('ChatSocket closed');
        }
      };
    }
  }, [roomId]);

  // 메시지 전송 핸들러
  const handleSendMessage = (messageContent: string) => {
    if (chatSocketRef.current) {
      const message = {
        type: 'chat_message',
        content: messageContent,
        timestamp: new Date().toISOString(),
      };
      chatSocketRef.current.sendMessage(message);
    }
  };

  // const socketRef = useRef<WebSocket | null>(null);
  // const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocket 객체 상태
  // const [message, setMessage] = useState(''); // 사용자 입력 메시지 상태
  // const [chatLog, setChatLog] = useState([]); // 채팅 기록 상태

  // // 웹소켓 연결
  // useEffect(() => {
  //   const newSocket = new WebSocket(`${socketBaseUrl}/chat/${roomId}/`, [localStorage.getItem('access_token')!]);
  //   // setSocket(newSocket); // 상태에 새로 생성된 소켓 객체 저장
  //   socketRef.current = newSocket;

  //   // WebSocket 연결이 성공적으로 열렸을 때 호출되는 이벤트 핸들러
  //   newSocket.onopen = () => {
  //     console.log('WebSocket 연결이 성공적으로 열렸습니다.');
  //     // newSocket.send(JSON.stringify({ type: 'chat_message', content: '메시지' }));
  //   };

  //   // 서버로부터 메시지를 수신했을 때 호출되는 이벤트 핸들러
  //   newSocket.onmessage = (event) => {
  //     console.log('서버로부터 받은 메시지:', event.data);
  //   };

  //   // WebSocket 통신 중 에러가 발생했을 때 호출되는 이벤트 핸들러
  //   newSocket.onerror = (error) => {
  //     console.error('WebSocket 에러:', error);
  //   };

  //   // WebSocket 연결이 닫혔을 때 호출되는 이벤트 핸들러
  //   newSocket.onclose = () => {
  //     console.log('WebSocket 연결이 닫혔습니다.');
  //   };

  //   // 컴포넌트가 언마운트되거나 리렌더링될 때 소켓 연결을 종료
  //   return () => {
  //     newSocket.close();
  //   };
  // }, [roomId]);

  return (
    <div className='chatRoom'>
      {/* <ChatContainer messageList={messageList} user={user} />
      <InputField message={message} setMessage={setMessage} sendMessage={sendMessage} /> */}
    </div>
  );
};

export default ChatRoom;
