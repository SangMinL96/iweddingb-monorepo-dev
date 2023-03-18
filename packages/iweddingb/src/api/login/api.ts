import { execFetcher } from 'common/fetcher/fetcher';
import { LoginParamsItf } from '@iweddingb-workspace/shared';

const postTokenTest = async ({ hp }: LoginParamsItf): Promise<string> => {
  const result = await execFetcher<{ access_token: string }>('post', '/login/hp-login', { hp });
  return result.data.access_token;
};

export default postTokenTest;
export { postTokenTest };
