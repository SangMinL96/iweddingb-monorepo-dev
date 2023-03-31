import { execFetcher } from 'common/fetcher/fetcher';
import { ExecResultItf, LoginParamsItf } from '@iweddingb-workspace/shared';

const postHpAuthNumSend = async (hp: string, authnum: string): Promise<ExecResultItf> => {
  const result = await execFetcher('post', '/auth/hpAuthNum-send', { hp, authnum });
  return result;
};

export default postHpAuthNumSend;
export { postHpAuthNumSend };
