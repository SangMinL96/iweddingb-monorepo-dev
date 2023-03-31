import { AxiosRequestConfig, isAxiosError } from 'axios';
import adminAxios from './adminAxios';
import { ExecResultItf } from '@iweddingb-workspace/shared';

async function fetcher<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const { data } = await adminAxios.get(url, config);
    return data as T;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(String(error));
    }
  }
}

async function execFetcher<T>(
  method: 'put' | 'post' | 'delete',
  url: string,
  params,
  config?: AxiosRequestConfig,
): Promise<T & ExecResultItf> {
  try {
    const { data } = await adminAxios[method](url, params, config);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(String(error));
    }
  }
}

export default fetcher;
export { fetcher, execFetcher };

// export const postFetcher = async <T>(url: string, params: any, config?: AxiosRequestConfig): Promise<T | null> => {
//   try {
//     if (process.env.NEXT_PUBLIC_STAGING) {
//       adminAxios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST + '/api/v1/';
//     } else {
//       adminAxios.defaults.baseURL = process.env.NEXT_PUBLIC_LOCAL_API_HOST + '/api/v1/';
//     }

//     const { data, status } = await adminAxios.post<T>(url, params, config);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }

//   return null;
// };
