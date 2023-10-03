import { create } from 'zustand';
import { ToggleStoreTypes } from '@/types/common/toggle';

const useToggleStore = create<ToggleStoreTypes>()((set) => ({
  isOn: false,
  onToggle: () => {
    set({ isOn: true });
  },
  offToggle: () => {
    set({ isOn: false });
  },
}));

export default useToggleStore;
