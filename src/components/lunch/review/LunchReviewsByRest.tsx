import { css } from '@emotion/react';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchRest from '@/components/lunch/LunchRest';
import theme from '@/styles/theme';
import useRouletteStore from '@/stores/useRouletteStore';
import { getRestList } from '@/pages/api/lunch/lunchRequests';
import useFetch from '@/hooks/useFetch';
import usePagesStore from '@/stores/usePagesStore';
import { useRouter } from 'next/router';
import useReviewStore from '@/stores/useReviewStore';
import { GetRestListData } from '@/types/lunch/api';

function LunchReviewsByRest() {
  const page = 1;
  const { title } = LUNCH_ROULETTE_CONSTANTS;
  const router = useRouter();
  const { setNextComponent } = usePagesStore();
  const { setReviewList, reviewList } = useReviewStore();
  const { menuState, isAgain, isOperated, menuIdState } = useRouletteStore();
  const { response } = useFetch({
    fetchFn: () => getRestList(menuIdState, page),
  });

  const renderTitle = () => {
    return isAgain && isOperated ? `"${menuState}"` : `${title.recent}`;
  };

  const onClickHandler = (item: GetRestListData) => {
    router.push('/lunch');
    setReviewList({
      ...reviewList,
      restaurantId: item.restaurantId,
      hasReview: false,
    }); // 클릭 한 리뷰 내용 store에 저장
    setNextComponent('LunchDetail'); // LunchDetail.tsx로 이동
    window.scrollTo({ top: 0 }); // 페이지 top: 0으로 이동
  };

  return (
    <div css={wrapperStyles}>
      <div css={stickyStyles}>
        <LunchSubTitle
          title={`${renderTitle()} ${title.review}`}
          type="title"
        />
      </div>
      {response?.data.map((item) => (
        <button
          type="button"
          key={item.restaurantId}
          onClick={() => onClickHandler(item)}
        >
          <LunchRest key={item.restaurantId} {...item} />
        </button>
      ))}
    </div>
  );
}

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const stickyStyles = css`
  position: sticky;
  padding: 16px 0;
  top: 56px;
  left: 0;
  background-color: ${theme.palette.white};
`;

export default LunchReviewsByRest;
