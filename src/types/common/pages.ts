export interface PagesStore {
  nextComponent: string;
  backComponents: string[];
  setNextComponent: (page: string) => void;
  goBack: () => void;
  reset: () => void;
}

export interface ComponentName {
  invitation: {
    create: {
      [key: string]: string;
    };
    view: {
      [key: string]: string;
    };
  };
  lunch: {
    calendar: {
      [key: string]: string;
    };
    detail: {
      [key: string]: string;
    };
  };
  common: {
    [key: string]: string;
  };
}
