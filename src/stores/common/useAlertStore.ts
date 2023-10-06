import { create } from 'zustand';
import { AlertStoreTypes } from '@/types/common/alert';

// 알럿 초기값
const initialAlertState = {
  isOpen: false,
  title: null,
  content: null,
  onClick: () => {},
};

const useAlertStore = create<AlertStoreTypes>()((set) => ({
  alertState: initialAlertState,
  openAlert: (title, content, onClick) => {
    set({ alertState: { isOpen: true, title, content, onClick } });
  },
  closeAlert: (onClick) => {
    set({ alertState: { ...initialAlertState, onClick } });
  },
}));

export default useAlertStore;
