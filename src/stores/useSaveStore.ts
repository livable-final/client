import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Save = {
  PhotoMsg: boolean;
};

interface PointData {
  [key: string]: boolean;
}

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
  point: PointData;
  setIsSavePhotoMsg: () => void;
  setPoint: (data: PointData) => void;
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

const initialPoint = {
  point500: false,
  point1000: false,
  point1500: false,
};

const initialTokenState = {
  user: '',
  visitor: '',
};

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
      keyword: [],
      visit: initialVisitMsg,
      point: initialPoint,
      setIsSavePhotoMsg: () =>
        set((pre) => ({
          isSave: { ...pre.isSave, PhotoMsg: true },
        })),
      setPoint: (data) => set((pre) => ({ point: { ...pre.point, ...data } })),
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
