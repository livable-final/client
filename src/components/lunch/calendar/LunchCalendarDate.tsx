import Image from 'next/image';
import dayjs from 'dayjs';
import { css } from '@emotion/react';
import { DateDish, DateDishNoPhoto } from '@/assets/icons';
import { DateDishPhotoProps } from '@/types/lunch/calendar';
import useCalendarStore from '@/stores/useCalendarStore';
import useWriteStore from '@/stores/useWriteStore';

function CalendarTileContent({ date, view }: { date: Date; view: string }) {
  const { reviewDetails } = useCalendarStore();

  if (
    view === 'month' &&
    reviewDetails?.find(
      (value) => value.reviewCreatedAt === dayjs(date).format('YYYY-MM-DD'),
    )
  ) {
    const filteredDate = dayjs(date).format('YYYY-MM-DD');
    const dayReviewData = reviewDetails.filter(
      (value) => value.reviewCreatedAt === filteredDate,
    );
    return <DateDishPhoto dayReviewData={dayReviewData} />;
  }
  return <DateDish />;
}

function DateDishPhoto({ dayReviewData }: DateDishPhotoProps) {
  const setIsChecked = useWriteStore((state) => state.setIsChecked);
  const { reviewDetails, setReviewDetails } = useCalendarStore();
  const allReviews = [...reviewDetails];
  const dayReview = [...dayReviewData];

  const onClickHandler = () => {
    const targetIndex = allReviews.findIndex(
      (item) => item.reviewId === dayReview[0].reviewId,
    );
    const sliceArray = allReviews.slice(targetIndex);
    const newArray = sliceArray.concat(allReviews.slice(0, targetIndex));
    setReviewDetails(newArray);
    setIsChecked();
  };

  if (!dayReview[0].images?.length) {
    return <DateDishNoPhoto onClick={onClickHandler} />;
  }

  return (
    <Image
      width={44}
      height={44}
      src={dayReview[0].images[0]}
      alt="test"
      css={ImageStyles}
      onClick={onClickHandler}
    />
  );
}

const ImageStyles = css`
  object-fit: cover;
  border-radius: 100px;
  border: 2.4px solid #e2e2e2;
  box-sizing: border-box;
`;

export default CalendarTileContent;
