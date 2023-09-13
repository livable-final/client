import { ViewStore } from '@/types/invitation/view';
import { create } from 'zustand';

const useViewStore = create<ViewStore>()((set) => ({
  nextComponents: '',
  setNextComponent: (page) => set({ nextComponents: page }),
}));

export default useViewStore;
