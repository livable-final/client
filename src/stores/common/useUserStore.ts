// 룰렛 가동 시 선택되는 요소들을 관리하는 store
import { create } from 'zustand';

const useUserStore = create(() => ({
  buildingId: 1,
  buildingName: '',
  hasCafeteria: false,
  companyName: '',
  memberName: '회원',
  pointValance: 0,
}));

export default useUserStore;
