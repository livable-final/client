import { create } from 'zustand';

type CalendarDate = {
  year: number;
  month: number;
};

interface RevieDetails {
  reviewId: number;
  reviewTitle: string;
  reviewTaste?: string;
  reviewDescription?: string;
  reviewCreatedAt: string;
  location?: string;
  images: string[];
  reviewType: string;
}

type CalnedarStore = {
  dateData: CalendarDate;
  reviewDetails: RevieDetails[];
  setReviewDetails: (data: RevieDetails[]) => void;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  clearDate: () => void;
};

const initialCalendarState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};
const useCalendarStore = create<CalnedarStore>()((set) => ({
  dateData: initialCalendarState,
  reviewDetails: [],
  setReviewDetails: (data) => set({ reviewDetails: data }),
  setYear: (year) =>
    set((pre) => ({
      dateData: { ...pre.dateData, year },
    })),
  setMonth: (month) =>
    set((pre) => ({
      dateData: { ...pre.dateData, month },
    })),
  clearDate: () => set({ dateData: initialCalendarState }),
}));

export default useCalendarStore;
