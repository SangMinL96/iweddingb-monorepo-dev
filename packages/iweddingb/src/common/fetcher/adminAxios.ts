import axios, { InternalAxiosRequestConfig } from 'axios';
import { getAccessToken, getRefreshToken, getStorage, setAccessToken } from 'common/webStorage/storage';
import PortalModal from 'common/ui/PortalModal';
import { ExecResultItf } from '@iweddingb-workspace/shared';
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

const isHaveAccessToken = !!getAccessToken();
if (isHaveAccessToken) {
  adminAxios.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`;
}

adminAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
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
  async error => {
    const originalRequest = error.config;
    if (error.response) {
      // 엑세트 토큰 만료로 재발급 요청
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const apiURL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_HOST : process.env.NEXT_PUBLIC_DEV_API_HOST;
          // 리프레쉬 토큰을 보내 검증후 엑세트 토큰 재발급
          const res = await fetch(`${apiURL}/api/v1/auth/refresh-validate`, {
            method: 'post',
            headers: { Authorization: `Bearer ${getRefreshToken()}` },
          });
          const { result, access_token } = (await res.json()) as ExecResultItf & { access_token: string };
          if (result === 'success') {
            setAccessToken(access_token);
            originalRequest.headers['Authorization'] = `Bearer ${access_token}`;
            return adminAxios(originalRequest);
          }
          // 재발급중 에러 로그인페이지로 보냄
          return history.pushState({}, '', '/login');
        } catch (err) {
          return history.pushState({}, '', '/login');
        }
      }
      // 401에러를 제외한 에러
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default adminAxios;
