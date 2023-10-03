// 달력 리뷰 데이터
export interface DateDishPhotoProps {
  dayReviewData: ReviewData[];
}

export interface ReviewData {
  reviewId: number;
  reviewTitle: string;
  reviewTaste?: string;
  reviewDescription?: string;
  reviewCreatedAt: string;
  location?: string;
  images?: string[];
  reviewType: string;
}

// 식당 검색 데이터
export interface RestaurantsData {
  restaurantId: number;
  restaurantName: string;
  restaurantCategory: string;
  inBuilding: boolean;
  estimatedTime: number;
  foor: number;
  thumbnailImageUrl: string;
}
// 식당 메뉴 데이터
export interface MenuData {
  menuId: number;
  menuName: string;
}

export interface MenuDataProps {
  menuData: MenuData[];
  selectedRest: string;
}

// 컴포넌트 타입
export interface LunchCalendarListItemProps {
  type: string;
  content?: string;
  item?: MenuData;
  category?: string;
  time?: number;
  imageUrl?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface LunchCalendarRatingBtnProps {
  title: string;
}

export interface LunchCalendarReviewCategoryProps {
  type: string;
  title: string;
}
export interface LunchCalendarSelectBtnProps {
  text?: string;
}

export interface LunchSubTitleProps {
  title: string;
  type: 'title' | 'subTitle' | 'recent' | 'more' | 'roulette';
  userName?: string;
  margin?: string;
}

export interface LunchCalendarWriteBtnProps {
  isCompleted: boolean;
  onClick: (e: React.MouseEvent) => void;
}
