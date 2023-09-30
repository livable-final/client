export interface Response<T> {
  data: T;
  status: number;
}

export interface FetchFunction<T> {
  (arg?: number | string | Date): Promise<T>;
}

export interface FetchProps<T> {
  fetchFn: FetchFunction<T>;
  arg?: number | string | Date;
}
