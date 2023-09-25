import LunchCard from '@/components/lunch/LunchCard';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import DUMMY_DATA from '@/constants/lunch/dummy';
import LunchReview from '@/components/lunch/review/LunchReview';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import { css } from '@emotion/react';
import usePagesStore from '@/stores/usePagesStore';
import useReviewStore from '@/stores/useReviewStore';
import { ReviewList } from '@/types/lunch/reviewList';
import theme from '@/styles/theme';

function LunchMainReviews() {
  const { setNextComponent } = usePagesStore();
  const { setReviewList } = useReviewStore();

  const onClickHandler = (item: ReviewList) => {
    setNextComponent('LunchDetail'); // LunchDetail.tsx로 이동
    setReviewList(item); // 클릭 한 리뷰 내용 store에 저장
    window.scrollTo({ top: 0 }); // 페이지 top: 0으로 이동
  };

  return (
    <LunchCard col>
      <LunchSubTitle title={LUNCH_MAIN_CONSTANTS.reviews.title} type="recent" />
      {DUMMY_DATA.map((item) => (
        <button
          css={buttonStyles}
          type="button"
          key={item.reveiwId}
          onClick={() => onClickHandler(item)}
        >
          <LunchReview {...item} />
        </button>
      ))}
    </LunchCard>
  );
}

const buttonStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 0 -16px;
  align-self: stretch;

  &:active {
    background-color: ${theme.palette.greyscale.grey5};
  }
`;

export default LunchMainReviews;
