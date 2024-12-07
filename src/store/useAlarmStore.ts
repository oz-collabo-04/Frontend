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
  alarms: Alarm[];
  getAlarms: (notifications: Alarm[]) => void;
  addAlarm: (alarm: Alarm) => void;
  clearAlarms: () => void;
}

const useAlarmStore = create<AlarmStore>((set) => ({
  alarms: [],
  getAlarms: (notifications) =>
    set(() => ({
      alarms: notifications, // 기존 알림리스트를 대체합니다.
    })),
  addAlarm: (alarm) =>
    set((state) => ({
      alarms: [...state.alarms, alarm],
    })),
  clearAlarms: () =>
    set({
      alarms: [],
    }),
}));

export default useAlarmStore;
