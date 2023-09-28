import { FetchProps } from '@/types/common/response';
import { useEffect, useState, useCallback } from 'react';

// API fetch custom Hook
const useFetch = <T>({ fetchFn, arg }: FetchProps<T>) => {
  const [response, setResponse] = useState<T>(null as T);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      // TODO: 로딩 처리 정의 해야함
      setLoading(true);
      const data = await fetchFn(arg);
      setResponse(data);
      // TODO: 에러 처리 정의 해야함
    } catch (error) {
      throw new Error();
    } finally {
      setLoading(false);
    }
  }, [arg, fetchFn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { response, loading };
};

export default useFetch;
