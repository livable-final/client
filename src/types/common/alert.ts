// useAlertStore.ts
export interface AlertStoreTypes {
  alertState: AlertStateTypes;
  openAlert: (title: string, content: string | JSX.Element) => void;
  closeAlert: () => void;
}

export interface AlertStateTypes {
  isOpen: boolean;
  title: string | null;
  content: string | JSX.Element | null;
}

// Alert.tsx
export interface AlertProps {
  isAlert?: boolean;
  content?: string;
  onClick?: () => void;
}
