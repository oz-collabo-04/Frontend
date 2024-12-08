import { create } from 'zustand';

interface Alarm {
  created_at: string;
  id: number;
  is_read: boolean;
  message: string;
  notification_type: string;
  receiver: number;
  title: string;
}

interface AlarmStore {
  alarms: Alarm[]; // 알림 리스트
  getAlarms: (notifications: Alarm[]) => void; // 알림 리스트 가져오기
  updateAlarm: (id: number) => void; // 특정 알림 업데이트
  addAlarm: (alarm: Alarm) => void; // 새로운 알림 추가
  clearAlarms: () => void; // 알림 리스트 초기화
}

const useAlarmStore = create<AlarmStore>((set) => ({
  alarms: [],

  // 알림 리스트를 Zustand 스토어에 설정
  getAlarms: (notifications) =>
    set(() => ({
      alarms: notifications, // 기존 알림 리스트를 대체
    })),

  // 특정 알림의 읽음 상태를 업데이트
  updateAlarm: (id) =>
    set((state) => ({
      alarms: state.alarms.map((alarm) => (alarm.id === id ? { ...alarm, is_read: true } : alarm)),
    })),

  // 새로운 알림 추가
  addAlarm: (alarm) =>
    set((state) => ({
      alarms: [...state.alarms, alarm], // 기존 알림에 추가
    })),

  // 알림 리스트 초기화
  clearAlarms: () =>
    set(() => ({
      alarms: [],
    })),
}));

export default useAlarmStore;
