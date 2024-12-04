import { useRef, useState } from 'react';
import IconBtn from '@/components/IconButton/IconBtn';
import Input from '@/components/Input/Input';

interface InputFieldProps {
  onSendMessage: (message: string) => void; // 메시지를 전송하는 함수
}

const InputField = ({ onSendMessage }: InputFieldProps) => {
  const [message, setMessage] = useState(''); // 메시지 상태 관리 추가
  const inputRef = useRef<HTMLInputElement | null>(null); // 입력 필드에 포커스 관리

  // 메시지 전송 이벤트 핸들러
  const handleSendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim()); // 부모 컴포넌트의 메시지 전송 핸들러 호출
      setMessage(''); // 입력 필드 초기화
    }
    inputRef.current?.focus(); // 메시지 전송 후 입력 필드에 포커스 유지
  };

  return (
    <form className='chatForm' onSubmit={handleSendMessage}>
      <Input
        ref={inputRef} // 입력 필드 참조 설정
        type='text'
        width='100%'
        value={message} // 입력 필드 값과 상태 연동
        onChange={(e) => setMessage(e.target.value)} // 입력값 변경 시 상태 업데이트
        placeholder='메시지를 입력하세요...' // 사용자 경험 개선을 위한 placeholder 추가
      />
      <IconBtn src='/image/chat_enter_icon.svg' alt='채팅 입력' type='submit' />
    </form>
  );
};

export default InputField;
