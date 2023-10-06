// 오점완 홈에서 특정 리뷰를 클릭 했을 시, 리뷰에 대한 정보를 저장하는 store
import { ReviewList, ReviewListStore } from '@/types/lunch/reviewList';
import { create } from 'zustand';

const initialState: ReviewList = {
  restaurantName: '',
  restaurantId: 0,
  memberName: '',
  memberProfileImage: '',
  reviewId: 0,
  reviewTaste: '',
  reviewAmount: '',
  reviewService: '',
  reviewSpeed: '',
  reviewCreatedAt: '',
  reviewImages: [],
  reviewDescription: '',
};

const useLunchReviewStore = create<ReviewListStore>((set) => ({
  reviewList: initialState,
  setReviewList: (item: ReviewList) => {
    set({ reviewList: item });
  },
}));

export default useLunchReviewStore;
