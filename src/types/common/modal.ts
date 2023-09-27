// useModalStore.ts
export interface ModalStoreTypes {
  modalState: ModalStateTypes;
  openModal: (title: string, content: string | JSX.Element) => void;
  closeModal: () => void;
}

export interface ModalStateTypes {
  isOpen: boolean;
  title: string | null;
  content: string | JSX.Element | null;
}

// Modal.tsx
export interface ModalProps {
  isAlert?: boolean;
  content?: string;
  onClick?: () => void;
}
