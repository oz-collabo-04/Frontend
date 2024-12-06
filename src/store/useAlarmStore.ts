import { create } from 'zustand';

interface Alarm {
  id: number;
  alarmContent: string;
}

interface AlarmStore {
  alarms: Alarm[];
  addAlarm: (alarm: Alarm) => void;
  clearAlarms: () => void;
}

const useAlarmStore = create<AlarmStore>((set) => ({
  alarms: [],
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
