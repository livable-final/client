import { create } from 'zustand';

interface HeaderTitleStore {
  headerTitle: string;
  setHeaderTitle: (value: string) => void;
}

const useInvitationHeaderTitleStore = create<HeaderTitleStore>((set) => ({
  headerTitle: '방문자 초대',
  setHeaderTitle: (value: string) => set({ headerTitle: value }),
}));

export default useInvitationHeaderTitleStore;
