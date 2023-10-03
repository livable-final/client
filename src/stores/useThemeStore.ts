import { create } from 'zustand';
import { ThemelStoreTypes } from '@/types/invitation/view';

// 테마 초기값
const initialThemeState = {
  clickCount: 0,
  theme: 'default',
};

const useThemeStore = create<ThemelStoreTypes>()((set) => ({
  themeState: initialThemeState,
  setThemeState: (key, content) => {
    set((state) => ({
      themeState: {
        ...state.themeState,
        [key]: content,
      },
    }));
  },
}));
export default useThemeStore;
