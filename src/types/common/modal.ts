// useModalStore.ts
export interface ModalStoreTypes {
  modalState: ModalStateTypes;
  openModal: (title: string, content: string) => void;
  closeModal: () => void;
}

export interface ModalStateTypes {
  isOpen: boolean;
  title: string | null;
  content: string | null;
}

// Modal.tsx
export interface ModalProps {
  onClick: () => void;
}
