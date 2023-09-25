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
export interface LunchListItemProps {
  type: string;
  content: string;
  category?: string;
  time?: number;
  imageUrl?: string;
  isChecked?: boolean;
}

export interface LunchRatingButtonProps {
  title: string;
}

export interface LunchReviewCategoryProps {
  title: string;
}
export interface LunchSelectButtonProps {
  text: string;
}

export interface LunchSubTitleProps {
  title: string;
  type: 'title' | 'subTitle' | 'recent' | 'more';
  userName?: string;
}

export interface LunchWriteButtonProps {
  isCompleted: boolean;
  onClick: (e: React.MouseEvent) => void;
}
