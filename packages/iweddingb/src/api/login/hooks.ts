import fetcher from 'common/fetcher/fetcher';
import useSWR from 'swr';

const useGetApiTest = () => {
  const { data, isValidating, mutate } = useSWR(`/login/getUser`, url => fetcher<any[]>(url));
  const customMutate = () => {
    // 추가 로직
    return mutate();
  };
  return { data, isValidating, mutate, customMutate };
};

export default useGetApiTest;
export { useGetApiTest };
