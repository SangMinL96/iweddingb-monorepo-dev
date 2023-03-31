import { EnterPriseResultIft, formatToday, getRand, ScheduleItf } from '@iweddingb-workspace/shared';
import theme from '@styles/theme';
import fetcher from 'common/fetcher/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const useScheduleData = () => {
  const router = useRouter();
  const { curdate = formatToday(), isday = '0' } = router.query;
  const [year, month, day] = String(curdate).split('/');
  const query = [`year=${year}`, `month=${month}`];
  if (isday === '1') {
    query.push(`day=${day}`);
  }
  const { data, isValidating, mutate } = useSWR(`/schedule/times?${query.join('&')}`, url => fetcher<ScheduleItf[]>(url));
  const customMutate = () => {
    // 추가 로직
    return mutate();
  };
  return { data, isValidating, mutate, customMutate };
};

const useEnterpriseInfo = () => {
  const { data, isValidating, mutate } = useSWR(`/enterprise/info`, url => fetcher<EnterPriseResultIft>(url));

  return { data, isValidating, mutate };
};

export default useScheduleData;
export { useScheduleData, useEnterpriseInfo };
