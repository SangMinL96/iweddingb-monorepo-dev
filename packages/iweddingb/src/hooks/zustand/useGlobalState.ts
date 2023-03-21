import create from 'zustand';
import { EnterPriseResultIft, UserInfoItf } from '@iweddingb-workspace/shared';

const defaultState = {
  user: null,
  enterpriseInfo: null,
};
export interface GlobalState {
  user?: UserInfoItf;
  enterpriseInfo?: EnterPriseResultIft;
  setEnterpriseInfo: (enterpriseInfo: EnterPriseResultIft) => void;
}

export const useGlobalState = create<GlobalState>(set => ({
  ...defaultState,
  setEnterpriseInfo: enterpriseInfo => set({ enterpriseInfo }),
}));
