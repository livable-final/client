import { create } from 'zustand';

type SelectedDate = {
  restaurantId?: number;
  restaurantName: string;
};

export interface MenuData {
  menuId: number;
  menuName: string;
}

type RatingDate = {
  taste?: string;
  amount?: string;
  speed?: string;
  service?: string;
};

interface SetRatingData {
  [key: string]: string;
}

type WriteStore = {
  restaurant: SelectedDate;
  selectedMenu: MenuData[];
  ratingState: RatingDate;
  description: string;
  imageFiles: File[];
  isChecked: boolean;
  setRestaurant: (data: SelectedDate) => void;
  setSelectedMenu: (data: MenuData) => void;
  setRemoveMenu: (data: MenuData) => void;
  setRatingState: (data: SetRatingData) => void;
  setDescription: (data: string | '') => void;
  setImageFiles: (files: File[]) => void;
  setIsChecked: (data: boolean) => void;
  clearRestaurant: () => void;
  resetSelectedMenu: () => void;
};

const initialState = {
  restaurantId: 0,
  restaurantName: '',
};

const initialArray: MenuData[] = [];

const initialRatingState = {
  taste: '',
  amount: 'BAD',
  speed: 'BAD',
  service: 'BAD',
};

const useWriteStore = create<WriteStore>()((set) => ({
  restaurant: initialState,
  selectedMenu: initialArray,
  ratingState: initialRatingState,
  description: '',
  imageFiles: [],
  isChecked: false,
  setRestaurant: (data) => set({ restaurant: data }),
  setSelectedMenu: (data) =>
    set((pre) => ({ selectedMenu: [...pre.selectedMenu, data] })),
  setRemoveMenu: (data) =>
    set((pre) => ({
      selectedMenu: [
        ...pre.selectedMenu.filter((menu) => menu.menuName !== data.menuName),
      ],
    })),
  setRatingState: (data) =>
    set((pre) => ({ ratingState: { ...pre.ratingState, ...data } })),
  setDescription: (data) => set({ description: data }),
  setImageFiles: (selectedFiles) => set({ imageFiles: selectedFiles }),
  setIsChecked: (data) => set({ isChecked: !data }),
  clearRestaurant: () => set({ restaurant: initialState }),
  resetSelectedMenu: () => {
    set({
      selectedMenu: initialArray,
    });
  },
}));

export default useWriteStore;
