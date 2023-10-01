export interface Response<T> {
  data: T;
  status: number;
}

export interface FetchFunction<T> {
  (): Promise<T>;
}

export interface FetchProps<T> {
  fetchFn: FetchFunction<T>;
}
