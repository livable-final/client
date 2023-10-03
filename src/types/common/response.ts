export interface Response<T> {
  map(
    arg0: (item: unknown) => import('react').JSX.Element,
  ): import('react').ReactNode;
  data: T;
  status: number;
  statusText: string;
}

export interface FetchFunction<T> {
  (): Promise<T>;
}

export interface FetchProps<T> {
  fetchFn: FetchFunction<T>;
}

// 에러 타입
export interface ErrorProps extends Error {
  response: { error: string; path: string; status: number; timestamp: string };
}
