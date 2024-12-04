import useMessageStore from '@/store/useMessageStore';

// interface Message {
//   type: string; // 메시지의 유형 (예: "text", "image" 등)
//   content: string; // 메시지 내용
//   sender?: string; // 보낸 사람 (옵션)
//   timestamp?: string; // 메시지가 생성된 시간 (옵션)
// }

class ChatSocket {
  webSocket: WebSocket | null = null;

  constructor(url: string, subProtocol: string[] | undefined = undefined) {
    // WebSocket 객체 생성
    this.webSocket = new WebSocket(url, subProtocol);

    // 웹소켓 연결
    this.webSocket.onopen = () => {
      console.log('웹소켓 연결 ^^');
    };

    // 웹 소켓 에러
    this.webSocket.onerror = (error) => {
      // console.error('웹 소켓 에러', error);
      console.error('웹 소켓 에러:', error);
      console.error('WebSocket 상태:', this.webSocket?.readyState);
    };

    // 웹소켓 종료
    this.webSocket.onclose = (event) => {
      console.log('웹소켓 종료~', event);
    };

    // 웹소켓으로부터 메시지를 받았을 때 실행되는 함수
    this.webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // 상태 관리 스토어를 통해 메시지 업데이트
      useMessageStore.getState().addMessage(data);
    };
  }

  // WebSocket 연결 종료 메서드
  close() {
    this.webSocket?.close();
  }

  // 메시지 전송 메서드
  sendMessage(content: string) {
    if (this.webSocket?.readyState === WebSocket.OPEN) {
      // JSON.stringify로 객체를 문자열로 변환
      this.webSocket.send(JSON.stringify({ content }));
    } else {
      console.warn('WebSocket이 연결되어 있지 않습니다.');
    }
  }
}

export default ChatSocket;
