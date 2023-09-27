export interface ReviewList {
  restaurantName: string;
  restaurantId: string;
  memberName: string;
  profileImageUrl: string;
  reviewId: number;
  reviewTaste: string;
  reviewAmount: string;
  reviewService: string;
  reviewSpeed: string;
  reviewCreatedAt: string;
  reviewImageUrl: string[];
  reviewDescription: string;
}

export interface ReviewListStore {
  reviewList: ReviewList;
  setReviewList: (item: ReviewList) => void;
}

export interface LunchReviewProps extends ReviewList {
  isRow?: boolean;
  noPad?: boolean;
}
