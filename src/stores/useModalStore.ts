import { create } from 'zustand';
import { ModalStoreTypes } from '@/types/common/modal';

// 모달 초기값
const initialModalState = {
  isOpen: false,
  title: null,
  content: null,
};

const useModalStore = create<ModalStoreTypes>()((set) => ({
  modalState: initialModalState,
  openModal: (title, content) => {
    set({ modalState: { isOpen: true, title, content } });
  },
  closeModal: () => {
    set({ modalState: initialModalState });
  },
}));

export default useModalStore;
