// 달력 리뷰 데이터
export interface DateDishPhotoProps {
  reviewData: ReviewData[];
}

export interface ReviewData {
  reviewId: number;
  type: string;
  reviewImageUrl: string;
  reviewDate: string;
}

//
export interface LunchCalendarListItemProps {
  type: string;
  content: string;
  category?: string;
  time?: number;
  imageUrl?: string;
  isChecked?: boolean;
}

export interface LunchCalendarRatingBtnProps {
  title: string;
}

export interface LunchCalendarReviewCategoryProps {
  title: string;
}
export interface LunchCalendarSelectBtnProps {
  text: string;
}

export interface LunchSubTitleProps {
  title: string;
  type: 'title' | 'subTitle' | 'recent' | 'more';
  userName?: string;
}

export interface LunchCalendarWriteBtnProps {
  isCompleted: boolean;
  onClick: (e: React.MouseEvent) => void;
}
