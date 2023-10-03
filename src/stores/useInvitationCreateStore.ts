import { create } from 'zustand';
import {
  PostInvitationContents,
  InvitationCreateStore,
} from '@/types/invitation/api';

export const initialCreateState: PostInvitationContents = {
  purpose: '',
  commonPlaceId: null,
  officeName: '5층 공용 라운지 (5층 509호)',
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
