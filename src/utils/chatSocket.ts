import useMessageStore from '@/store/useMessageStore';

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
  sendMessage(message: any) {
    if (this.webSocket?.readyState === WebSocket.OPEN) {
      this.webSocket.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket이 연결되어 있지 않습니다.');
    }
  }
}

export default ChatSocket;
