import useAlarmStore from '@/store/useAlarmStore';
import '@/styles/alarm.scss';
import AlarmSocket from '@/utils/alarmSocket';

import { useEffect, useState } from 'react';

const Alarm = () => {
  const [showAlarm, setShowAlarm] = useState(false);
  // const [alarmList] = useState([
  //   { id: 0, alarmContent: '알람 1번' },
  //   { id: 1, alarmContent: '알람 2번' },
  //   { id: 2, alarmContent: '알람 3번' },
  // ]);
  const { alarms } = useAlarmStore();
  const [alarmSocket, setAlarmSocket] = useState<AlarmSocket | null>(null);

  const handleAlarm = () => {
    setShowAlarm(!showAlarm);
  };

  useEffect(() => {
    // AlarmSocket 초기화
    const socket = new AlarmSocket('wss://your-alarm-endpoint');
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
        <span className='on'></span>
      </button>
      {showAlarm && (
        <div className='alarmListBox'>
          {/* {alarmList.length > 0 ? (
            <ul className='alarmList'>
              {alarmList.map((alarm) => (
                <li className='alarm' key={alarm.id}>
                  <button>{alarm.alarmContent}</button>
                </li>
              ))}
            </ul>
          ) : (
            <div className='noAlarm'>알람이 없습니다.</div>
          )} */}
        </div>
      )}
    </div>
  );
};

export default Alarm;
