import { execFetcher } from 'common/fetcher/fetcher';
import { LoginParamsItf } from '@iweddingb-workspace/shared';

const postLogin = async (params: LoginParamsItf): Promise<{ access_token: string; refresh_token: string }> => {
  const result = await execFetcher<{ access_token: string; refresh_token: string }>('post', '/login/hp-login', params);
  return result;
};

export default postLogin;
export { postLogin };
