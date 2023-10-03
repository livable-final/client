import Image from 'next/image';
import { css } from '@emotion/react';
import { DateDishNoPhoto } from '@/assets/icons';
import { DateDishPhotoProps } from '@/types/lunch/calendar';
import useCalendarStore from '@/stores/useCalendarStore';
import useWriteStore from '@/stores/useWriteStore';
import theme from '@/styles/theme';

function LunchCalendarDateContent({ dayReviewData }: DateDishPhotoProps) {
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
    <button type="button" css={imageBoxStyles} onClick={onClickHandler}>
      <div css={overlayStyles} />
      <Image
        width={44}
        height={44}
        src={dayReview[0].images[0]}
        alt="test"
        css={imageStyles}
      />
    </button>
  );
}

const imageBoxStyles = css`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  border: 2.4px solid #e2e2e2;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
`;

const overlayStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* 흰색 불투명도 50% 설정 */
  pointer-events: none; /* 이벤트를 이미지 아래로 전달 */
`;

const imageStyles = css`
  object-fit: cover;
`;

export default LunchCalendarDateContent;
