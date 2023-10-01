import { create } from 'zustand';
import {
  PostInvitationContents,
  InvitationCreateStore,
} from '@/types/invitation/api';

const initialCreateState: PostInvitationContents = {
  purpose: '',
  commonPlaceId: 0,
  officeName: '',
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
}));

export default useInvitationCreateStore;
