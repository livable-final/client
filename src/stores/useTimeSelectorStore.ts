import { create } from 'zustand';

interface TimeSelectorStoreTypes {
  selectTime: string | JSX.Element;
  setSelectTime: (time: string | JSX.Element) => void;
  clearSelectTime: () => void;
}

const useTimeSelectorStore = create<TimeSelectorStoreTypes>()((set) => ({
  selectTime: '',
  setSelectTime: (time: string | JSX.Element) => {
    set({ selectTime: time });
  },
  clearSelectTime: () => {
    set({ selectTime: '' });
  },
}));

export default useTimeSelectorStore;
