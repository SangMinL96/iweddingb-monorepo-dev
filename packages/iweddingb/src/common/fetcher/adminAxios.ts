import axios, { InternalAxiosRequestConfig } from 'axios';
import { getStorage } from 'common/webStorage/storage';

// @ts-ignore
const adminAxios = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NODE_ENV === 'development'
      ? `${process.env.NEXT_PUBLIC_DEV_API_HOST}/api/v1`
      : `${process.env.NEXT_PUBLIC_API_HOST}/api/v1`,
  timeout: 90000,
});

adminAxios.defaults.withCredentials = true;

const isHaveAccessToken = !!getStorage('access_token');
if (isHaveAccessToken) {
  adminAxios.defaults.headers.common['Authorization'] = `Bearer ${getStorage('access_token')}`;
}

adminAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getStorage('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return Promise.resolve(config);
  },
  error => Promise.reject(error),
);

adminAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const originalRequest = error.config;
    if (error.response) {
      if (error.response.status === 401) {
        // return adminAxios(originalRequest);
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export default adminAxios;
