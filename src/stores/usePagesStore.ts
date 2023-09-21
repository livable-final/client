import { PagesStore } from '@/types/common/pages';
import { create } from 'zustand';

const usePagesStore = create<PagesStore>()((set) => ({
  nextComponent: '',
  setNextComponent: (page) => set({ nextComponent: page }),
}));

export default usePagesStore;
