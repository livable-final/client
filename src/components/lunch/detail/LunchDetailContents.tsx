import { css } from '@emotion/react';
import LunchReview from '@/components/lunch/review/LunchReview';
import useLunchReviewStore from '@/stores/lunch/useLunchReviewStore';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import theme from '@/styles/theme';
import useFetch from '@/hooks/useFetch';
import { getRestReviewList } from '@/pages/api/lunch/lunchRequests';

// 리뷰 상세 내부 컨텐츠 컴포넌트
function LunchDetailContents() {
  const { reviewList } = useLunchReviewStore();
  const { title } = LUNCH_MAIN_CONSTANTS.main.detail; // '의 더 많은 리뷰'
  const { restaurantId } = useLunchReviewStore().reviewList;
  const { response } = useFetch({
    fetchFn: () => getRestReviewList(restaurantId),
  });

  return (
    <div css={wrapperStyles}>
      <LunchSubTitle
        title={`${reviewList.restaurantName}${title}`}
        type="more"
      />
      <div css={reviewStyles}>
        {response?.data.map((item) => (
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
