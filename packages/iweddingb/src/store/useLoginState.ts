import { create } from 'zustand';
import dayjs from 'dayjs';

const defaultState = {
  hpAuthComplate: false,
};
export interface LoginState {
  hpAuthComplate: boolean;
  setHpAuthComplate: (value: boolean) => void;
  resetState: () => void;
}

export const useLoginState = create<LoginState>(set => ({
  ...defaultState,
  setHpAuthComplate: value => set({ hpAuthComplate: value }),
  resetState: () => set(defaultState),
}));
