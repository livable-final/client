// 오점완 홈에서 특정 리뷰를 클릭 했을 시, 리뷰에 대한 정보를 저장하는 store
import { IdList, IdListStore } from '@/types/common/id';
import { create } from 'zustand';

const initialState: IdList = {
  invitationId: 0,
  commonPlaceId: 0,
  buildingId: 0,
  restaurantIdId: 0,
  reviewId: 0,
  menuId: 0,
};

const useIdStore = create<IdListStore>((set) => ({
  idList: initialState,
  setIdList: (item: IdList) => {
    set({ idList: item });
  },
}));

export default useIdStore;
