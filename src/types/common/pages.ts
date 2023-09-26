export interface PagesStore {
  nextComponent: string;
  backComponents: string[];
  setNextComponent: (page: string) => void;
  goBack: () => void;
}
