import { GetRestListData } from '@/types/lunch/api';

export interface ReviewList {
  restaurantName: string;
  restaurantId: number;
  memberName: string;
  memberProfileImage: string;
  reviewId: number;
  reviewTaste: string;
  reviewAmount: string;
  reviewService: string;
  reviewSpeed: string;
  reviewCreatedAt: string;
  reviewImages: string[];
  reviewDescription: string;
  hasReview?: boolean;
}

export interface ReviewListStore {
  reviewList: ReviewList;
  setReviewList: (item: ReviewList) => void;
}

export interface LunchReviewProps extends ReviewList {
  isRow?: boolean;
  noPad?: boolean;
}

export interface LunchRestListProps {
  onClick: (item: GetRestListData) => void;
}
