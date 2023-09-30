export interface Response<T> {
  data: T;
  status: number;
}

export type ArgType = number | string | Date | string[];

export interface FetchFunction<T> {
  (arg?: ArgType): Promise<T>;
}

export interface FetchProps<T> {
  fetchFn: FetchFunction<T>;
  arg?: ArgType;
}
