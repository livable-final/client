import LunchReview from '@/components/lunch/review/LunchReview';
import { css } from '@emotion/react';
import { ReviewList } from '@/types/lunch/reviewList';
import usePagesStore from '@/stores/usePagesStore';
import useReviewStore from '@/stores/useReviewStore';
import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import { useState } from 'react';
import mq from '@/utils/mediaquery';
import COMPONENT_NAME from '@/constants/common/pages';
import useFetch from '@/hooks/useFetch';
import { getMenuReviews } from '@/pages/api/lunch/lunchRequests';
// import { getMenuReviews } from '@/pages/api/lunch/lunchRequests';

function LunchRankingReviews({ menuId }: { menuId: number }) {
  const [isMore, setIsMore] = useState(false);
  const { setNextComponent } = usePagesStore();
  const { setReviewList } = useReviewStore();
  const { detail } = COMPONENT_NAME.lunch.detail; // 오늘 점심 리뷰 상세
  const { response } = useFetch({
    fetchFn: () => getMenuReviews(menuId),
  });

  // useQuery로 API 호출
  // const { data } = useQuery(['menuReviews', page], () =>
  //   getMenuReviews({ menuId: 1, page }),
  // );

  const onClickDetailHandler = (item: ReviewList) => {
    setNextComponent(detail); // LunchDetail.tsx로 이동
    setReviewList(item); // 클릭 한 리뷰 내용 store에 저장
    window.scrollTo({ top: 0 }); // 페이지 top: 0으로 이동
  };

  // Icon 클릭 (더보기 이벤트)시 page number를 증가시키면서 query data 호출
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
