// 룰렛 가동 시 선택되는 요소들을 관리하는 store
import { create } from 'zustand';

const useBuildingStore = create(() => ({
  buildingId: 1,
  buildingName: '현대테라타워DIMC',
  hasCafeteria: false,
}));

export default useBuildingStore;
