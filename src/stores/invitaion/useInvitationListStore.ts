import { create } from 'zustand';
import {
  UserInvitationList,
  InvitationListStore,
} from '@/types/user/invitationList';

// 테마 초기값
const initialInvitationListState: UserInvitationList = {
  invitationId: 0,
  visitorName: '',
  visitorCount: 0,
  purpose: '',
  officeName: '',
  startDate: '',
  startTime: '',
  endTime: '',
};

const useInvitationListStore = create<InvitationListStore>()((set) => ({
  invitationList: initialInvitationListState,
  setInvitationListeState: (item: UserInvitationList) => {
    set({ invitationList: item });
  },
}));

export default useInvitationListStore;
