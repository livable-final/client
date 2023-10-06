import theme from '@/styles/theme';
import { css } from '@emotion/react';
import useFetch from '@/hooks/useFetch';
import usePagesStore from '@/stores/common/usePagesStore';
import LunchCard from '@/components/lunch/LunchCard';
import useLunchReviewStore from '@/stores/lunch/useLunchReviewStore';
import COMPONENT_NAME from '@/constants/common/pages';
import { ReviewList } from '@/types/lunch/reviewList';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import useUserStore from '@/stores/common/useUserStore';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import { getReviewList } from '@/pages/api/lunch/lunchRequests';
import LunchReview from '@/components/lunch/review/LunchReview';

//
function LunchReviews() {
  const { setReviewList } = useLunchReviewStore();
  const { setNextComponent } = usePagesStore();
  const { buildingId, buildingName } = useUserStore();
  const { prefix, suffix } = LUNCH_MAIN_CONSTANTS.main.reviews;
  const { response } = useFetch({
    fetchFn: () => getReviewList(buildingId),
  });

  const onClickHandler = (item: ReviewList) => {
    setNextComponent(COMPONENT_NAME.lunch.detail.detail); // LunchDetail.tsx로 이동
    setReviewList({ ...item, hasReview: true }); // 클릭 한 리뷰 내용 store에 저장
    window.scrollTo({ top: 0 }); // 페이지 top: 0으로 이동
  };

  return (
    <LunchCard col>
      {/* 최근 OO빌딩 입주자들의 리뷰 */}
      <LunchSubTitle
        title={`${prefix} ${buildingName} ${suffix}`}
        type="recent"
      />
      {response?.data.map((item) => (
        <button
          css={buttonStyles}
          type="button"
          key={item.reviewId}
          onClick={() => onClickHandler(item)}
        >
          <LunchReview {...item} noPad />
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

export default LunchReviews;
