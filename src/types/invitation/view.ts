export interface Example {
  example: string;
}

export interface ViewStore {
  nextComponents: string;
  setNextComponent: (page: string) => void;
}

export interface InvitationHostInfoItemProps {
  label: string;
  content: string;
  isContact?: boolean;
}
