import { useEffect, useState } from 'react';
import useAlarmStore from '@/store/useAlarmStore';
import AlarmSocket from '@/utils/alarmSocket';
import '@/styles/alarm.scss';

const socketBaseUrl = import.meta.env.VITE_BACKEND_CHAT_URL;

const Alarm = () => {
  const [showAlarm, setShowAlarm] = useState(false);
  const { alarms } = useAlarmStore(); // Zustand 스토어에서 알람 상태 가져오기
  const [alarmSocket, setAlarmSocket] = useState<AlarmSocket | null>(null);
  console.log(alarmSocket);

  const handleAlarm = () => {
    setShowAlarm((prev) => !prev);
  };

  useEffect(() => {
    // AlarmSocket 초기화
    const socket = new AlarmSocket(`${socketBaseUrl}/notifications/`);
    setAlarmSocket(socket);

    return () => {
      // 컴포넌트 언마운트 시 WebSocket 연결 해제
      socket.close();
    };
  }, []);

  return (
    <div className='alarmBox'>
      <button className='alarmBtn' onClick={handleAlarm}>
        알람
        <span className={`on ${alarms.length > 0 ? 'active' : ''}`}></span>
      </button>
      {showAlarm && (
        <div className='alarmListBox'>
          {alarms.length > 0 ? (
            <ul className='alarmList'>
              {alarms.map((alarm) => (
                <li className='alarm' key={alarm.id}>
                  <button>{alarm.alarmContent}</button>
                </li>
              ))}
            </ul>
          ) : (
            <div className='noAlarm'>알람이 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Alarm;
