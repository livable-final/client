import { create } from 'zustand';
import { AlertStoreTypes } from '@/types/common/alert';

// 알럿 초기값
const initialAlertState = {
  isOpen: false,
  title: null,
  content: null,
};

const useAlertStore = create<AlertStoreTypes>()((set) => ({
  alertState: initialAlertState,
  openAlert: (title, content) => {
    set({ alertState: { isOpen: true, title, content } });
  },
  closeAlert: () => {
    set({ alertState: initialAlertState });
  },
}));

export default useAlertStore;
