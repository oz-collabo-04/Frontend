import { useRef } from 'react';
import IconBtn from '@/components/IconButton/IconBtn';
import Input from '@/components/Input/Input';

interface InputFieldProps {
  message: string; // 현재 입력된 메시지 값
  setMessage: (message: string) => void; // 메시지를 업데이트하는 함수
  sendMessage: (event: React.FormEvent) => void; // 메시지를 전송하는 함수
}

const InputField = ({ message, setMessage, sendMessage }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    sendMessage(event); // 메시지 전송 함수 호출
    setMessage(''); // 메시지 전송 후 입력 필드 비우기
    if (inputRef.current) {
      inputRef.current.focus(); // 메시지 전송 후 입력 필드에 포커스 맞추기
    }
  };

  return (
    <form className='chatForm' onSubmit={handleSendMessage}>
      <Input
        ref={inputRef}
        type='text'
        width='100%'
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <IconBtn src='/image/chat_enter_icon.svg' alt='채팅 입력' type='submit' />
    </form>
  );
};

export default InputField;
