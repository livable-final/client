import { useState } from 'react';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import useFetch from '@/hooks/useFetch';
import Icons from '@/components/common/Icons';
import usePagesStore from '@/stores/common/usePagesStore';
import useLunchReviewStore from '@/stores/lunch/useLunchReviewStore';
import COMPONENT_NAME from '@/constants/common/pages';
import { ReviewList } from '@/types/lunch/reviewList';
import LunchReview from '@/components/lunch/review/LunchReview';
import { getMenuReviews } from '@/pages/api/lunch/lunchRequests';

// '오늘 점심' 랭킹별 리뷰 컴포넌트
function LunchRankingReviews({ menuId }: { menuId: number }) {
  const [isMore, setIsMore] = useState(false); // 더보기 버튼 클릭 여부
  const { setNextComponent } = usePagesStore();
  const { setReviewList } = useLunchReviewStore();
  const { detail } = COMPONENT_NAME.lunch.detail; // 오늘 점심 리뷰 상세
  const { response } = useFetch({
    fetchFn: () => getMenuReviews(menuId),
  });

  // 클릭 시 리뷰 상세로 이동하는 핸들러
  const onClickDetailHandler = (item: ReviewList) => {
    setNextComponent(detail); // LunchDetail.tsx로 이동
    setReviewList(item); // 클릭 한 리뷰 내용 store에 저장
    window.scrollTo({ top: 0 }); // 페이지 top: 0으로 이동
  };

  // Icon 클릭 (더보기 이벤트)시 나머지 데이터 호출
  const onClickMoreHandler = () => {
    setIsMore(true);
  };

  return (
    <div>
      {/* 최초에는 3개의 리뷰만 노출 */}
      {response?.data.slice(0, 3).map((item) => (
        <button
          css={reviewStyles}
          type="button"
          key={item.reviewId}
          onClick={() => onClickDetailHandler(item)}
        >
          <LunchReview key={item.reviewId} {...item} isRow />
        </button>
      ))}
      {/* 더보기 버튼을 누르면 나머지 리뷰도 최대 10개까지 노출 */}
      {isMore &&
        response?.data.slice(3, 10).map((item) => (
          <button
            css={reviewStyles}
            type="button"
            key={item.reviewId}
            onClick={() => onClickDetailHandler(item)}
          >
            <LunchReview key={item.reviewId} {...item} isRow />
          </button>
        ))}
      <button type="button" onClick={onClickMoreHandler} css={iconContainer}>
        <Icons icon="down" color={theme.palette.greyscale.grey20} />
      </button>
    </div>
  );
}

const reviewStyles = css`
  width: calc(100% + 32px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 0 -16px;
  align-self: stretch;

  &:active {
    background-color: ${theme.palette.greyscale.grey5};
  }

  ${mq.lg} {
    margin: 0 16px;
  }
`;

const iconContainer = css`
  display: flex;
  padding: 6px 0px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  margin: 0 -16px;
  width: calc(100% + 32px);

  &:active {
    background-color: ${theme.palette.greyscale.grey5};
  }
`;

export default LunchRankingReviews;
