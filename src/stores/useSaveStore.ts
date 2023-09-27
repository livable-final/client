import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Save = {
  PhotoMsg: boolean;
};

type SaveStore = {
  isSave: Save;
  setIsSavePhotoMsg: () => void;
  clearIsSave: () => void;
  setUserToken: (value: string) => void;
};

const initialSaveState = {
  PhotoMsg: false,
};

const useSaveStore = create<SaveStore>()(
  persist(
    (set) => ({
      isSave: initialSaveState,
      setIsSavePhotoMsg: () =>
        set((pre) => ({
          isSave: { ...pre.isSave, PhotoMsg: true },
        })),
      clearIsSave: () => {
        set({ isSave: initialSaveState });
      },
      setUserToken: (value: string) => {
        localStorage.setItem('user', value);
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSaveStore;
