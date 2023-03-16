import { AxiosRequestConfig } from 'axios';
import adminAxios from './adminAxios';
import { FetcherResultItf } from '@iweddingb-workspace/shared';

async function fetcher<T>(url: string, config?: AxiosRequestConfig): Promise<{ data: T } | FetcherResultItf> {
  try {
    const { data, status } = await adminAxios.get(url, config);
    return { data: data as T, status, result: 'success' };
  } catch (error) {
    return { data: null, status: 200, error: `fetcher error\n${error}`, result: 'fail' };
  }
}

async function execFetcher(
  method: 'put' | 'post' | 'delete',
  url: string,
  params,
  config?: AxiosRequestConfig,
): Promise<{ data?: any } | FetcherResultItf> {
  try {
    const { data, status } = await adminAxios[method](url, params, config);
    return { ...data, status };
  } catch (error) {
    return { data: null, error: `fetcher error\n${error}`, result: 'fail' };
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
