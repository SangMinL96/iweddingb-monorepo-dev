import { HallScheduleItf } from '@iweddingb-workspace/shared';
import fetcher from 'common/fetcher/fetcher';
import useSWR from 'swr';

const useScheduleData = () => {
  const { data, isValidating, mutate } = useSWR(`/enterprise/hallSchedule`, url => fetcher<HallScheduleItf[]>(url));
  const customMutate = () => {
    // 추가 로직
    return mutate();
  };
  return { data, isValidating, mutate, customMutate };
};

export default useScheduleData;
export { useScheduleData };
