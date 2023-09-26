import { DUMMY_DATA } from '@/constants/lunch/dummy';
import LunchReview from '@/components/lunch/review/LunchReview';
import { css } from '@emotion/react';
import { ReviewList } from '@/types/lunch/reviewList';
import usePagesStore from '@/stores/usePagesStore';
import useReviewStore from '@/stores/useReviewStore';
import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import { useState } from 'react';
import mq from '@/utils/mediaquery';
// import { getMenuReviews } from '@/pages/api/lunch/lunchRequests';

function LunchRankingReviews() {
  const [page, setPage] = useState(1);
  const { setNextComponent } = usePagesStore();
  const { setReviewList } = useReviewStore();

  // useQuery로 API 호출
  // const { data } = useQuery(['menuReviews', page], () =>
  //   getMenuReviews({ menuId: 1, page }),
  // );

  const onClickGetDetailHandler = (item: ReviewList) => {
    setNextComponent('LunchDetail'); // LunchDetail.tsx로 이동
    setReviewList(item); // 클릭 한 리뷰 내용 store에 저장
    window.scrollTo({ top: 0 }); // 페이지 top: 0으로 이동
  };

  // Icon 클릭 (더보기 이벤트)시 page number를 증가시키면서 query cache 호출
  const onClickMoreReviewHandler = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {/* 추후 query data로 대체 예정 */}
      {DUMMY_DATA.map((item) => (
        <button
          css={reviewStyles}
          type="button"
          key={item.reviewId}
          onClick={() => onClickGetDetailHandler(item)}
        >
          <LunchReview key={item.reviewId} {...item} isRow />
        </button>
      ))}
      <button
        type="button"
        onClick={onClickMoreReviewHandler}
        css={iconContainer}
      >
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
