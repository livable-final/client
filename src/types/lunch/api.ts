export interface GetRankingData {
  buildingId: number;
}

export interface GetMenuReviewsData {
  memberName: string;
  memberProfileImage: string;
  restaurantId: number;
  restaurantName: string;
  reviewId: number;
  reviewCreatedAt: string;
  reviewDescription: string;
  reviewTaste: string;
  reviewAmount: string;
  reviewService: string;
  reviewSpeed: string;
  reviewImages: string[];
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
