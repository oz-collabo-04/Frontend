import { create } from 'zustand';

export interface Message {
  id: number; // 메시지 ID
  sender: number; // 보낸 사람
  content: string; // 메시지 내용
  timestamp: string; // 보낸 시간
  is_read: boolean; // 읽음 여부 상태
}

interface MessageStore {
  messages: Message[]; // 메시지 배열
  addMessage: (message: Message) => void; // 메시지 추가
  getMessageList: (chat: Message[]) => void;
  clearMessages: () => void; // 메시지 초기화
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],

  // 서버로부터 가져온 메시지 리스트를 상태에 설정
  getMessageList: (chat) =>
    set(() => ({
      messages: chat, // 기존 메시지를 대체합니다.
    })),

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
