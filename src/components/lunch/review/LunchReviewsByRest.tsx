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
import COMPONENT_NAME from '@/constants/common/pages';
import useUserStore from '@/stores/useUserStore';
import DUMMY_DATA from '@/constants/lunch/dummy';

function LunchReviewsByRest() {
  const router = useRouter();
  const { title } = LUNCH_ROULETTE_CONSTANTS;
  const { detail } = COMPONENT_NAME.lunch.detail;
  const { memberName } = useUserStore();
  const { setNextComponent } = usePagesStore();
  const { setReviewList, reviewList } = useReviewStore();
  const { isAgain, isOperated, menuIdState } = useRouletteStore();

  const renderTitle = () => {
    // "메뉴 이름" 맛집을 알려드릴게요.
    if (isAgain && isOperated) {
      return `"${menuIdState}" ${title.review} `;
    }
    // "멤버 이름"께 추천하는 식당.
    if (isOperated) {
      return `${memberName}${title.recent}`;
    }
    return '';
  };

  const { response } = useFetch({
    fetchFn: () => getRestList(menuIdState),
  });

  const onClickHandler = (item: GetRestListData) => {
    router.push('/lunch');
    setReviewList({
      ...reviewList,
      restaurantId: item.restaurantId,
      restaurantName: item.restaurantName,
      hasReview: false,
    }); // 클릭 한 리뷰 내용 store에 저장
    setNextComponent(detail); // LunchDetail.tsx로 이동
    window.scrollTo({ top: 0 }); // 페이지 top: 0으로 이동
  };

  const renderRestList = () => {
    if (isAgain && isOperated) {
      return response?.data.map((item) => (
        <button
          type="button"
          key={item.restaurantId}
          onClick={() => onClickHandler(item)}
        >
          <LunchRest key={item.restaurantId} {...item} />
        </button>
      ));
    }
    if (isOperated) {
      return DUMMY_DATA.map((item) => (
        <button
          type="button"
          key={item.restaurantId}
          onClick={() => onClickHandler(item)}
        >
          <LunchRest key={item.restaurantId} {...item} />
        </button>
      ));
    }
    return null;
  };

  return (
    <div css={wrapperStyles}>
      <div css={stickyStyles}>
        <LunchSubTitle title={`${renderTitle()}`} type="title" />
      </div>
      {renderRestList()}
    </div>
  );
}

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`;

const stickyStyles = css`
  position: sticky;
  padding: 16px 0;
  top: 56px;
  left: 0;
  background-color: ${theme.palette.white};
`;

export default LunchReviewsByRest;
