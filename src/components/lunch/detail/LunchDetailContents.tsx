import { css } from '@emotion/react';
import LunchReview from '@/components/lunch/review/LunchReview';
import useReviewStore from '@/stores/useReviewStore';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import { DUMMY_DATA } from '@/constants/lunch/dummy';
import theme from '@/styles/theme';

function LunchDetailContents() {
  const { reviewList } = useReviewStore();
  const { detail } = LUNCH_MAIN_CONSTANTS.main;

  return (
    <div css={wrapperStyles}>
      <LunchSubTitle
        title={`${reviewList.restaurantName}${detail.title}`}
        type="more"
      />
      <div css={reviewStyles}>
        {DUMMY_DATA.map((item) => (
          <LunchReview key={item.reviewId} {...item} noPad />
        ))}
      </div>
    </div>
  );
}

const wrapperStyles = css`
  margin: 0 -16px;
  padding: 24px 0;

  > div {
    &:first-of-type {
      margin-left: 16px;
    }
  }
`;

const reviewStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background: ${theme.palette.white};
`;

export default LunchDetailContents;
