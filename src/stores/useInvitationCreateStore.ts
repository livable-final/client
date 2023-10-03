import { create } from 'zustand';
import {
  PostInvitationContents,
  InvitationCreateStore,
} from '@/types/invitation/api';

export const initialCreateState: PostInvitationContents = {
  purpose: '',
  commonPlaceId: null,
  officeName: '식스센스 10층 사무실 (10층 1004호)',
  description: '',
  startDate: '',
  endDate: '',
  visitors: [],
};

const useInvitationCreateStore = create<InvitationCreateStore>((set) => ({
  createContents: initialCreateState,
  setCreateContents: (key, content) => {
    set((state) => ({
      createContents: {
        ...state.createContents,
        [key]: content,
      },
    }));
  },
  clearCreateContents: () => {
    set({ createContents: initialCreateState });
  },
}));

export default useInvitationCreateStore;
