export interface GetRankingData {
  buildingId: number;
}

export interface GetMenuReviewsData {
  menuId: number;
  page: number;
}

export interface GetMenusData {
  categoryName: string;
  menus: GetMenuData[];
}

export interface GetMenuData {
  menuId: number;
  name: string;
}

export interface GetRestListData {
  restaurantId: number;
  name: string;
  tastePercentage: number;
  representativeImageUrl: string;
  address: string;
  floor: number;
  isBuilding: boolean;
  estimatedTime: number;
  review: string;
}
