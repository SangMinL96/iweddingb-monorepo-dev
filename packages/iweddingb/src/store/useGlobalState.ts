import { create } from 'zustand';

import { ProductItf, UserInfoItf } from '@iweddingb-workspace/shared';

const defaultState = {
  user: null,
  productList: null,
  isLeftMenu: true,
  isProductDropdown: true,
};
export interface GlobalState {
  user?: UserInfoItf;
  productList?: ProductItf[];
  isLeftMenu: boolean;
  isProductDropdown: boolean;
  setIsLeftMenu: (value: boolean) => void;
  setIsProductDropdown: (value: boolean) => void;
  setProductList: (products: ProductItf[]) => void;
  resetState: () => void;
}

export const useGlobalState = create<GlobalState>(set => ({
  ...defaultState,
  setProductList: productList => set({ productList }),
  setIsLeftMenu: value => set({ isLeftMenu: value }),
  setIsProductDropdown: value => set({ isProductDropdown: value }),
  resetState: () => set(defaultState),
}));
