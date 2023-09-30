// 룰렛 가동 시 선택되는 요소들을 관리하는 store
import { create } from 'zustand';

const useRouletteStore = create(() => ({
  categoryState: '카테고리', // 랜덤 카테고리명
  menuState: '메뉴', // 랜덤 메뉴명
  menuIdState: 0, // 메뉴 ID
  isLocked: false, // 카테고리 잠금 state
  isOperated: true, // 가동 완료 여부 state
  isPressed: false, // 버튼 클릭 state
  isAgain: false, // 재선택 여부 state
}));

export default useRouletteStore;
