import { create } from 'zustand';

type SelectedDate = {
  restaurantId?: number;
  restaurantName: string;
};

type WriteStore = {
  restaurant: SelectedDate;
  selectedMenu: string[];
  isChecked: boolean;
  setRestaurant: (data: SelectedDate) => void;
  setSelectedMenu: (data: string) => void;
  setRemoveMenu: (data: string) => void;
  setIsChecked: (data: boolean) => void;
  clear: () => void;
};

const initialState = {
  restaurantId: 0,
  restaurantName: '',
};

const useWriteStore = create<WriteStore>()((set) => ({
  restaurant: initialState,
  selectedMenu: [],
  isChecked: false,
  setRestaurant: (data) => set({ restaurant: data }),
  setSelectedMenu: (data) =>
    set((pre) => ({ selectedMenu: [...pre.selectedMenu, data] })),
  setRemoveMenu: (data) =>
    set((pre) => ({
      selectedMenu: [...pre.selectedMenu.filter((menu) => menu !== data)],
    })),
  setIsChecked: (data) => set({ isChecked: !data }),
  clear: () => set({ restaurant: initialState }),
}));

export default useWriteStore;
