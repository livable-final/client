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
  isChecked: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export interface LunchReviewCategoryProps {
  title: string;
}
export interface LunchSelectButtonProps {
  text: string;
  onClick: (e: React.MouseEvent) => void;
}

export interface LunchSubTitleProps {
  title: string;
  type: 'title' | 'subTitle';
  userName?: string;
}

export interface LunchWriteButtonProps {
  isCompleted: boolean;
}
