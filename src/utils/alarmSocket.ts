import useAlarmStore from '@/store/useAlarmStore';

class AlarmSocket {
  webSocket: WebSocket | null = null;

  constructor(url: string, subProtocol: string[] | undefined = undefined) {
    // WebSocket 객체 생성
    this.webSocket = new WebSocket(url, subProtocol);
    // 웹소켓 연결
    this.webSocket.onopen = () => {
      // console.log('알람 WebSocket 연결 성공');
    };
    // 웹소켓 에러
    this.webSocket.onerror = (error) => {
      // console.error('알람 WebSocket 에러:', error);
    };
    // 웹소켓 종료
    this.webSocket.onclose = (event) => {
      // console.log('알람 WebSocket 연결 종료', event);
    };
    // 웹소켓으로부터 메시지를 받았을 때 실행되는 함수
    this.webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'send_notification') {
        // 알람 데이터를 Zustand 스토어에 추가
        useAlarmStore.getState().addAlarm(data.notification);
      }
    };
  }

  // WebSocket 연결 종료 메서드
  close() {
    this.webSocket?.close();
    // console.log('알람 WebSocket 연결 종료');
  }
}

export default AlarmSocket;
