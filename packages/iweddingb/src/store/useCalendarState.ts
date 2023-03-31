import { create } from 'zustand';
import dayjs from 'dayjs';

const defaultState = {
  curDate: dayjs(new Date()).format('YYYY/MM/DD'),
  calendarRef: null,
};
export interface CalendarState {
  curDate: String;
  calendarRef?: { setActiveStartDate?: any };
  setCalendarRef: (ref) => void;
  setCurDate: (value: String) => void;
  resetState: () => void;
}

export const useCalendarState = create<CalendarState>(set => ({
  ...defaultState,
  setCurDate: value => set({ curDate: value }),
  setCalendarRef: ref => set({ calendarRef: ref }),
  resetState: () => set(defaultState),
}));
