import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Save = {
  PhotoMsg: boolean;
};

type SaveStore = {
  isSave: Save;
  user: string;
  keyword: string[];
  setIsSavePhotoMsg: () => void;
  setKeyword: (data: string) => void;
  deleteKeyword: (data: string) => void;
  clearIsSave: () => void;
  setUserToken: (value: string) => void;
};

const initialSaveState = {
  PhotoMsg: false,
};

const initialUserState = '';

const useSaveStore = create<SaveStore>()(
  persist(
    (set) => ({
      isSave: initialSaveState,
      user: initialUserState,
      keyword: [],
      setIsSavePhotoMsg: () =>
        set((pre) => ({
          isSave: { ...pre.isSave, PhotoMsg: true },
        })),
      setKeyword: (data) =>
        set((pre) => ({
          keyword: [...pre.keyword, data],
        })),
      deleteKeyword: (data) =>
        set((pre) => ({
          keyword: [...pre.keyword.filter((value) => value !== data)],
        })),
      clearIsSave: () => {
        set({ isSave: initialSaveState });
      },
      setUserToken: (value: string) =>
        set({
          user: value,
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSaveStore;
