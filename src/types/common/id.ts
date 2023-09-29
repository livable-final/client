export interface IdList {
  invitationId: number;
  commonPlaceId: number;
  buildingId: number;
  restaurantIdId: number;
  reviewId: number;
  menuId: number;
}

export interface IdListStore {
  idList: IdList;
  setIdList: (item: IdList) => void;
}
