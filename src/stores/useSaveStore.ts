import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Save = {
  PhotoMsg: boolean;
};

type Visit = {
  visitMsg: boolean;
  visitMsgText: string;
};

type SaveStore = {
  isSave: Save;
  user: string;
  visitor: string;
  keyword: string[];
  visit: Visit;
  setIsSavePhotoMsg: () => void;
  setKeyword: (data: string) => void;
  deleteKeyword: (data: string) => void;
  clearIsSave: () => void;
  setUserToken: (value: string) => void;
  setVisitorToken: (value: string) => void;
  setIsSaveVisitMsg: (state: boolean) => void;
  setVisitMsgText: (text: string) => void;
  clearVisitMsg: () => void;
};

// 오늘점심 초기값
const initialSaveState = {
  PhotoMsg: false,
};

const initialTokenState = {
  user: '',
  visitor: '',
};
// 사용자 토큰 초기값
const initialUserState = '';

// 초대장 생성 방문tip 초기값
const initialVisitMsg = {
  visitMsg: false,
  visitMsgText: '',
};

const useSaveStore = create<SaveStore>()(
  persist(
    (set) => ({
      isSave: initialSaveState,
      user: initialTokenState.user,
      visitor: initialTokenState.visitor,

      user: initialUserState,
      keyword: [],
      visit: initialVisitMsg,
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
      setVisitorToken: (value: string) =>
        set({
          visitor: value,
        }),
      setIsSaveVisitMsg: (state: boolean) =>
        set((pre) => ({
          visit: { ...pre.visit, visitMsg: state },
        })),
      setVisitMsgText: (text: string) => {
        set((pre) => ({
          visit: { ...pre.visit, visitMsgText: text },
        }));
      },
      clearVisitMsg: () => {
        set({ visit: initialVisitMsg });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSaveStore;
