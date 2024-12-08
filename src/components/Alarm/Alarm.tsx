import { useEffect, useState } from 'react';
import useAlarmStore from '@/store/useAlarmStore';
import '@/styles/alarm.scss';
import { auth } from '@/api/axiosInstance';
import { useToastStore } from '@/store/toastStore';

const Alarm = () => {
  const [showAlarm, setShowAlarm] = useState(false); // 알람 박스 표시 여부
  const alarms = useAlarmStore((state) => state.alarms); // Zustand 스토어에서 알람 상태 가져오기
  const { addToasts } = useToastStore();

  const getAlarms = useAlarmStore((state) => state.getAlarms);
  const updateAlarm = useAlarmStore((state) => state.updateAlarm); // Zustand에서 알림 업데이트 함수 추가

  // 알림 리스트 GET 요청
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await auth.get(`/notifications/`);
        getAlarms(response.data.notifications);
      } catch (error) {
        console.error('알림 가져오기 실패:', error);
      }
    };
    fetchNotifications();
  }, [getAlarms]);

  const handleAlarm = () => {
    setShowAlarm((prev) => !prev);
  };

  // 알림 읽음 상태 변경 및 알림 삭제
  const markAsRead = async (notificationId: number) => {
    try {
      const response = await auth.post(`/notifications/${notificationId}/`, {});
      if (response.status === 200) {
        updateAlarm(notificationId); // Zustand에서 알림 업데이트
        addToasts({ type: 'success', title: '알림 읽음 처리', id: Date.now().toString() });
      }
    } catch (error) {
      console.error('알림 읽음 처리 실패:', error);
    }
  };

  // 전체 알림 읽음 처리
  const allMarkAsRead = async () => {
    try {
      const response = await auth.post(`/notifications/read_all/`);
      if (response.status === 200) {
        getAlarms([]); // 상태 초기화 (전체 알림을 읽음 처리 후, 상태 업데이트)
        addToasts({ type: 'success', title: '전체 알림 읽음 처리', id: Date.now().toString() });
      }
    } catch (error) {
      console.error('전체 알림 읽음 처리 실패:', error);
    }
  };

  return (
    <div className='alarmBox'>
      <button className='alarmBtn' onClick={handleAlarm}>
        알람
        <span className={alarms.length > 0 ? 'on' : ''}></span>
      </button>
      {showAlarm && (
        <button
          className='alarmCloseBtn'
          onClick={() => {
            setShowAlarm(false);
          }}
        ></button>
      )}

      <div className={`alarmListBox ${showAlarm ? 'show' : ''}`}>
        {/* 알림 리스트 */}
        <div className='alarmTop'>
          <p className='title'>전체 알람</p>
          <button className='allReadBtn' onClick={allMarkAsRead}>
            전체읽음
          </button>
        </div>
        {alarms.length > 0 ? (
          <ul className='alarmList'>
            {alarms.map((item) => (
              <li key={item.id} className='alarm'>
                <p className='alarmTitle'>{item.title.trim()}</p>
                {!item.is_read ? (
                  <button className='isReadBtn' onClick={() => markAsRead(item.id)}>
                    {/* 읽음 처리 */}
                  </button>
                ) : (
                  <p className='read'>읽음</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className='noAlarm'>알람이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default Alarm;
