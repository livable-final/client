import { create } from 'zustand';
import { VisitorInfo, PatchInvitationContents } from '@/types/invitation/api';

interface InvitationEditStore {
  editContents: PatchInvitationContents;
  setEditContents: (
    key: string,
    content: string | number | Date | VisitorInfo[] | null | undefined,
  ) => void;
}

// 초대장 수정 데이터 초기값
const initialEditState: PatchInvitationContents = {
  commonPlaceId: null,
  description: '',
  startDate: '',
  endDate: '',
  visitors: [],
};

const useInvitationEditStore = create<InvitationEditStore>((set) => ({
  editContents: initialEditState,
  setEditContents: (key, content) => {
    set((state) => ({
      editContents: {
        ...state.editContents,
        [key]: content,
      },
    }));
  },
}));

export default useInvitationEditStore;
