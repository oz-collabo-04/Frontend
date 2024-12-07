import { useEffect, useState } from 'react';
import useAlarmStore from '@/store/useAlarmStore';
import '@/styles/alarm.scss';
import { auth } from '@/api/axiosInstance';

const Alarm = () => {
  const [showAlarm, setShowAlarm] = useState(false);
  const alarms = useAlarmStore((state) => state.alarms); // Zustand 스토어에서 알람 상태 가져오기
  const getAlarms = useAlarmStore((state) => state.getAlarms);

  // 알림 리스트 GET 요청
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await auth.get(`/notifications/`);
        // console.log('알람 리스트', response.data);
        getAlarms(response.data.notifications);
        // return response.data;
      } catch (error) {
        console.error('최종 견적 확인 실패:', error);
        throw error;
      }
    };
    fetchNotifications();
  }, []);

  const handleAlarm = () => {
    setShowAlarm((prev) => !prev);
  };

  console.log(alarms);

  return (
    <div className='alarmBox'>
      <button className='alarmBtn' onClick={handleAlarm}>
        알람
        {/* <span className={`${alarms.length > 0 ? 'on' : ''}`}></span> */}
      </button>
      {showAlarm && (
        <div className='alarmListBox'>
          {alarms.length > 0 ? (
            <ul className='alarmList'>
              {alarms.map((item) => (
                <li key={item.id} className='alarm'>
                  <button>{item.title}</button>
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
