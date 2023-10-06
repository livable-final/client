import { PagesStore } from '@/types/common/pages';
import { create } from 'zustand';

const usePagesStore = create<PagesStore>()((set) => ({
  nextComponent: '', // 현재 보여질 페이지
  backComponents: [],
  setNextComponent: (page) =>
    set((state) => ({
      backComponents: [...state.backComponents, state.nextComponent],
      nextComponent: page,
    })),
  goBack: () => {
    set((state) => ({
      nextComponent: state.backComponents[state.backComponents.length - 1],
      backComponents: state.backComponents.slice(0, -1),
    }));
  },
  reset: () => {
    set(() => ({
      nextComponent: '',
      backComponents: [],
    }));
  },
}));

export default usePagesStore;
