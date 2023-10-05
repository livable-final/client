import useAlertStore from '@/stores/useAlertStore';
import { ErrorProps, FetchProps } from '@/types/common/response';
import { useEffect, useState, useCallback } from 'react';

// API fetch custom Hook
const useFetch = <T>({ fetchFn, onClick }: FetchProps<T>) => {
  const [response, setResponse] = useState<T>(null as T);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { alertState, openAlert } = useAlertStore();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setIsError(false);
      const data = await fetchFn();
      setResponse(data);
    } catch (err: unknown) {
      const error = err as ErrorProps;
      setIsError(true);
      openAlert('📢', error.message, onClick);
    } finally {
      setLoading(false);
    }
  }, [fetchFn, openAlert]);

  useEffect(() => {
    fetchData();
  }, []);

  return { response, loading, alertState, isError };
};

export default useFetch;
