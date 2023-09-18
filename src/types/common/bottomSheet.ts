// useBottomSheetStore.ts
export interface BottomSheetState {
  bottomSheetState: BottomSheetStateTypes;
  openBottomSheet: (content: React.ReactNode) => void;
  closeBottomSheet: () => void;
}

export interface BottomSheetStateTypes {
  isOpen: boolean;
  content: React.ReactNode | string | null;
}

// BottomSheet.tsx
export interface BottomSheetProps {
  onClick?: () => void;
}
