import useAlertStore from '@/stores/useAlertStore';
import { ErrorProps, FetchProps } from '@/types/common/response';
import { useEffect, useState, useCallback } from 'react';

// API fetch custom Hook
const useFetch = <T>({ fetchFn }: FetchProps<T>) => {
  const [response, setResponse] = useState<T>(null as T);
  const [loading, setLoading] = useState<boolean>(false);
  const { alertState, openAlert } = useAlertStore();

  const fetchData = useCallback(async () => {
    try {
      // TODO: 로딩 처리 정의 해야함
      setLoading(true);
      const data = await fetchFn();
      setResponse(data);
      // TODO: 에러 처리 정의 해야함
    } catch (err: unknown) {
      const error = err as ErrorProps;
      openAlert('에러메시지:', error.response?.error);
    } finally {
      setLoading(false);
    }
  }, [fetchFn, openAlert]);

  useEffect(() => {
    fetchData();
  }, []);

  return { response, loading, alertState };
};

export default useFetch;
