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
  restaurantName: string;
  tastePercentage: number;
  representativeImageUrl: string;
  address: string;
  floor: number;
  inBuilding: boolean;
  estimatedTime: number;
  review: string;
}

export interface GetRankingData {
  date: string;
  count: number;
  rank: number;
  menuId: number;
  menuName: string;
  menuImage: string;
}

// * POST 룰렛 메뉴 선택 완료 request body
export interface PostMenuContent {
  menuId: number;
  date: string;
}
