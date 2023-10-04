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
interface Keyword {
  id: number;
  text: string;
}

type SaveStore = {
  isSave: Save;
  user: string;
  visitor: string;
  keywordList: Keyword[];
  visit: Visit;
  point: PointData;
  setIsSavePhotoMsg: () => void;
  setPoint: (data: PointData) => void;
  setKeywordList: (data: Keyword) => void;
  deleteKeywordList: (id: number) => void;
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
      keywordList: [],
      visit: initialVisitMsg,
      point: initialPoint,
      setIsSavePhotoMsg: () =>
        set((pre) => ({
          isSave: { ...pre.isSave, PhotoMsg: true },
        })),
      setPoint: (data) => set((pre) => ({ point: { ...pre.point, ...data } })),
      setKeywordList: (data) =>
        set((pre) => ({
          keywordList: [...pre.keywordList, data],
        })),
      deleteKeywordList: (id) =>
        set((state) => ({
          keywordList: state.keywordList.filter((value) => value.id !== id),
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
