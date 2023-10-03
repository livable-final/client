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
    set((prev) => ({ selectTime: [...prev.selectTime, time] }));
  },
  clearSelectTime: () => {
    set({ selectTime: [] });
  },
}));

export default useTimeSelectorStore;
