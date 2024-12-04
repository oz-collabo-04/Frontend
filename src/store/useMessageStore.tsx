import { create } from 'zustand';

interface Message {
  id: number; // 메시지 ID
  sender: string; // 보낸 사람
  content: string; // 메시지 내용
  timestamp: string; // 보낸 시간
}

interface MessageStore {
  messages: Message[]; // 메시지 배열
  addMessage: (message: Message) => void; // 메시지 추가
  clearMessages: () => void; // 메시지 초기화
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],

  // 메시지 추가 메서드
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  // 메시지 초기화 메서드
  clearMessages: () =>
    set(() => ({
      messages: [],
    })),
}));

export default useMessageStore;
