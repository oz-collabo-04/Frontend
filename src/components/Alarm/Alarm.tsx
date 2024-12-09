import { useEffect, useState } from 'react';
import useAlarmStore from '@/store/useAlarmStore';
import '@/styles/alarm.scss';
import { auth } from '@/api/axiosInstance';
import { useToastStore } from '@/store/toastStore';
import { useNavigate } from 'react-router-dom';

const Alarm = () => {
  const [showAlarm, setShowAlarm] = useState(false); // 알람 박스 표시 여부
  const alarms = useAlarmStore((state) => state.alarms); // Zustand 스토어에서 알람 상태 가져오기
  const { addToasts } = useToastStore();
  const navigate = useNavigate();
  const getAlarms = useAlarmStore((state) => state.getAlarms);
  const updateAlarm = useAlarmStore((state) => state.updateAlarm);
  const removeAlarm = useAlarmStore((state) => state.removeAlarm);

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

  // 알림 읽음 상태 변경 및 알림 삭제
  const markAsRead = async (notificationId: number) => {
    try {
      const response = await auth.post(`/notifications/${notificationId}/`, {});
      if (response.status === 200) {
        updateAlarm(notificationId); // 읽음 상태로 업데이트
        removeAlarm(notificationId); // 읽음 처리 후 상태에서 삭제
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

  // 알림 타입에 따른 페이지 링크
  const alarmNavigate = (notificationType: string) => {
    switch (notificationType) {
      case 'message': // 채팅 리스트
        navigate('/chatlistpage');
        break;
      case 'reserve': // 예약내역
        navigate('/reservation');
        break;
      case 'estimation': // 예약내역
        navigate('/estimationlist');
        break;
      case 'estimation_request': // 받은요청
        navigate('/expertlist');
        break;
      default:
        console.warn('notificationType:', notificationType);
    }
  };

  // 알림 on/off
  const handleAlarm = () => {
    setShowAlarm((prev) => !prev);
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
                <button className='alarmTitle' onClick={() => alarmNavigate(item.notification_type)}>
                  {item.title.trim()}
                </button>
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
