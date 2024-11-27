import InputField from './InputField';
import { useState } from 'react';
// import socket from '@/config/server';
import ChatContainer from './ChatContainer';

interface Message {
  chat: string; // 메시지 내용
  user: { name: string }; // 보낸 사람의 이름
}

const ChatRoom = () => {
  const [user] = useState<{ name: string } | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messageList] = useState<Message[]>([]);
  console.log('messageList', messageList);

  // // 웹소켓 연결
  // useEffect(() => {
  //   console.log('Socket instance:', socket);
  //   // socket 객체가 제대로 초기화되었는지 확인하기 위해 출력

  //   socket.on('connect', () => {
  //     console.log('Connected to server with id:', socket.id);
  //   });
  //   // 서버와 연결이 성공했을 때 실행되는 콜백 함수 등록
  //   // 서버로부터 할당받은 socket ID를 출력

  //   socket.on('response', (msg) => {
  //     console.log('Message from server:', msg);
  //   });
  //   // 서버에서 "response"라는 이벤트가 발생했을 때 실행되는 콜백 함수 등록
  //   // 서버에서 전송된 메시지를 콘솔에 출력

  //   socket.on('disconnect', () => {
  //     console.log('Disconnected from server');
  //   });
  //   // 서버와의 연결이 끊어졌을 때 실행되는 콜백 함수 등록
  //   // 연결 해제 메시지를 콘솔에 출력

  //   return () => {
  //     socket.off('connect');
  //     // "connect" 이벤트에 대한 리스너를 제거

  //     socket.off('response');
  //     // "response" 이벤트에 대한 리스너를 제거

  //     socket.off('disconnect');
  //     // "disconnect" 이벤트에 대한 리스너를 제거
  //   };
  //   // 컴포넌트가 언마운트되거나 리렌더링될 때 리스너 정리
  //   // 메모리 누수 및 중복 이벤트 등록 방지
  // }, []);

  // // 유저 이름을 입력받고 로그인 처리
  // const askUserName = () => {
  //   const userName = prompt('당신의 이름을 입력하세요.');
  //   console.log('userName', userName);

  //   socket.emit('login', userName, (res: { ok: boolean; data: { name: string } }) => {
  //     if (res?.ok) {
  //       setUser(res.data);
  //     }
  //   });
  // };

  // // 서버에서 메시지 수신 시 처리
  // useEffect(() => {
  //   socket.on('message', (message) => {
  //     setMessageList((prevState) => prevState.concat(message));
  //   });

  //   askUserName();
  // }, []);

  // 메시지 전송 함수
  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    // socket.emit('sendMessage', message, (res: { ok: boolean }) => {
    //   console.log('sendMessage res', res);
    // });
  };

  return (
    <div className='chatRoom'>
      <ChatContainer messageList={messageList} user={user} />
      <InputField message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;
