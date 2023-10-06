import { create } from 'zustand';

type SelectTimeType = string | JSX.Element;
interface TimeSelectorStoreTypes {
  selectTime: SelectTimeType[];
  setSelectTime: (time: SelectTimeType) => void;
  clearSelectTime: () => void;
}

const useTimeSelectorStore = create<TimeSelectorStoreTypes>()((set) => ({
  selectTime: [],
  setSelectTime: (time: SelectTimeType) => {
    set((prev) => ({ selectTime: [...prev.selectTime, time].sort() })); // TimeSelector를 순서대로 누르지 않았을 경우 대비하여 데이터 정렬
  },
  clearSelectTime: () => {
    set({ selectTime: [] });
  },
}));

export default useTimeSelectorStore;
