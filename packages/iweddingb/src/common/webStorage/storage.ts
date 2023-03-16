import { parseJson } from '@iweddingb-workspace/shared';

export const getStorage = (key: string) => {
  return global.window ? parseJson(localStorage.getItem(key)) : '';
};
export const setStorage = (key: string, value: any) => {
  return global.window && localStorage.setItem(key, JSON.stringify(value));
};

export const setSessionStorage = (key: string, value: any) => {
  return global.window && sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key: string) => {
  return global.window ? parseJson(sessionStorage.getItem(key)) : '';
};
