// useAlertStore.ts
export interface AlertStoreTypes {
  alertState: AlertStateTypes;
  openAlert: (
    title: string,
    content: string | JSX.Element,
    onClick?: () => void,
  ) => void;
  closeAlert: (onClick?: () => void) => void;
}

export interface AlertStateTypes {
  isOpen: boolean;
  title: string | null;
  content: string | JSX.Element | null;
  onClick?: () => void;
}
