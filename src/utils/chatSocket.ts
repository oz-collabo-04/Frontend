import useMessageStore from '@/store/useMessageStore';

interface otherUserState {
  user_id: number | null; // 상대방 유저 아이디
  is_exist: boolean;
}

class ChatSocket {
  webSocket: WebSocket | null = null;
  otherUser: otherUserState;

  constructor(url: string, subProtocol: string[] | undefined = undefined) {
    // WebSocket 객체 생성
    this.webSocket = new WebSocket(url, subProtocol);
    this.otherUser = {
      user_id: null,
      is_exist: false,
    };

    // 웹소켓 연결
    this.webSocket.onopen = () => {
      // console.log('채팅 웹소켓 연결');
    };

    // 웹 소켓 에러
    this.webSocket.onerror = (error) => {
      console.error('채팅 웹 소켓 에러:', error);
      console.error('WebSocket 상태:', this.webSocket?.readyState);
    };

    // 웹소켓 종료
    this.webSocket.onclose = (event) => {
      // console.log('채팅 웹소켓 종료', event);
    };

    // 웹소켓으로부터 메시지를 받았을 때 실행되는 함수
    this.webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (['announce_entered', 'announce_exist'].includes(data.type)) {
        this.setOtherUser(data.user_id, true);
        if (data.type === 'announce_entered') {
          this.sendMyExist();
        }
      } else if (data.type === 'chat_message') {
        // 상태 관리 스토어를 통해 메시지 업데이트
        useMessageStore.getState().addMessage(data);
      } else if (data.type === 'chat_exited') {
        this.setOtherUser(null, false);
      }
    };
  }
  setOtherUser(user_id: number | null, is_exist: boolean) {
    this.otherUser.is_exist = is_exist;
    this.otherUser.user_id = user_id;
  }

  // WebSocket 연결 종료 메서드
  close() {
    this.setOtherUser(null, false);
    this.webSocket?.close();
    // console.log(`웹소켓 연결 종료됨. 상대유저 정보 초기화 - ${this.otherUser.user_id}, ${this.otherUser.is_exist}`);
  }

  // 메시지 전송 메서드
  sendMyExist() {
    if (this.webSocket?.readyState === WebSocket.OPEN) {
      // JSON.stringify로 객체를 문자열로 변환
      this.webSocket.send(
        JSON.stringify({
          type: 'announce_exist',
          user_id: localStorage.getItem('user_id'),
          is_exist: true,
        })
      );
    } else {
      console.warn('WebSocket이 연결되어 있지 않습니다.');
    }
  }

  // 메시지 전송 메서드
  sendMessage(message: string) {
    if (this.webSocket?.readyState === WebSocket.OPEN) {
      // JSON.stringify로 객체를 문자열로 변환
      this.webSocket.send(
        JSON.stringify({
          content: message,
          is_read: this.otherUser.is_exist,
        })
      );
    } else {
      console.warn('WebSocket이 연결되어 있지 않습니다.');
    }
  }
}

export default ChatSocket;
