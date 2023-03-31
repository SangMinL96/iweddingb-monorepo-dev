import { ExecResultItf, ScheduleItf, scheduleTimeUpdateParams } from '@iweddingb-workspace/shared';
import { execFetcher } from 'common/fetcher/fetcher';

const putTimeUpdate = async ({ no, type, returnData }: scheduleTimeUpdateParams): Promise<ScheduleItf[]> => {
  const { result } = await execFetcher<ExecResultItf>('put', '/schedule/time/update', { no, type });
  if (result === 'success') {
    return returnData;
  }
};

export default putTimeUpdate;
export { putTimeUpdate };
