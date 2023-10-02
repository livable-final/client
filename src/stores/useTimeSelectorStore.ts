import { create } from 'zustand';

interface TimeSelectorStoreTypes {
  selectTime: string;
  setSelectTime: (time: string) => void;
  clearSelectTime: () => void;
}

const useTimeSelectorStore = create<TimeSelectorStoreTypes>()((set) => ({
  selectTime: '',
  setSelectTime: (time: string) => {
    set({ selectTime: time });
  },
  clearSelectTime: () => {
    set({ selectTime: '' });
  },
}));

export default useTimeSelectorStore;
