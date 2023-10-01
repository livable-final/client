import { FetchProps } from '@/types/common/response';
import { useEffect, useState, useCallback } from 'react';

// API fetch custom Hook
const useFetch = <T>({ fetchFn }: FetchProps<T>) => {
  const [response, setResponse] = useState<T>(null as T);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      // TODO: 로딩 처리 정의 해야함
      setLoading(true);
      const data = await fetchFn();
      setResponse(data);
      // TODO: 에러 처리 정의 해야함
    } catch (error) {
      setErrors(true);
    } finally {
      setLoading(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    fetchData();
  }, []);

  return { response, loading, errors };
};

export default useFetch;
