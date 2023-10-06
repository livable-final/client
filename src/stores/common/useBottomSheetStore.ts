import { create } from 'zustand';
import {
  BottomSheetState,
  BottomSheetStateTypes,
} from '@/types/common/bottomSheet';

const initialBottomSheetState: BottomSheetStateTypes = {
  isOpen: false,
  content: null,
};

const useBottomSheetStore = create<BottomSheetState>((set) => ({
  bottomSheetState: initialBottomSheetState,
  openBottomSheet: (content) =>
    set({ bottomSheetState: { isOpen: true, content } }),
  closeBottomSheet: () => set({ bottomSheetState: initialBottomSheetState }),
}));

export default useBottomSheetStore;
