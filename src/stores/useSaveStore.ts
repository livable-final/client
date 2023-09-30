import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Save = {
  PhotoMsg: boolean;
};

type SaveStore = {
  isSave: Save;
  user: string;
  visitor: string;
  setIsSavePhotoMsg: () => void;
  clearIsSave: () => void;
  setUserToken: (value: string) => void;
  setVisitorToken: (value: string) => void;
};

const initialSaveState = {
  PhotoMsg: false,
};

const initialTokenState = {
  user: '',
  visitor: '',
};

const useSaveStore = create<SaveStore>()(
  persist(
    (set) => ({
      isSave: initialSaveState,
      user: initialTokenState.user,
      visitor: initialTokenState.visitor,

      setIsSavePhotoMsg: () =>
        set((pre) => ({
          isSave: { ...pre.isSave, PhotoMsg: true },
        })),
      clearIsSave: () => {
        set({ isSave: initialSaveState });
      },
      setUserToken: (value: string) =>
        set({
          user: value,
        }),
      setVisitorToken: (value: string) =>
        set({
          visitor: value,
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSaveStore;
