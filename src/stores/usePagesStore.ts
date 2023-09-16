import { PagesStore } from '@/types/common/pages';
import { create } from 'zustand';

const useViewStore = create<PagesStore>()((set) => ({
  nextComponents: '',
  setNextComponent: (page) => set({ nextComponents: page }),
}));

export default useViewStore;
