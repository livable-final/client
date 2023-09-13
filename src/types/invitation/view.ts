export interface Example {
  example: string;
}

export interface ViewStore {
  nextComponents: string;
  setNextComponent: (page: string) => void;
}
