import { css } from '@emotion/react';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import LunchRest from '@/components/lunch/LunchRest';
import theme from '@/styles/theme';
import useLunchRouletteStore from '@/stores/lunch/useLunchRouletteStore';
import usePagesStore from '@/stores/common/usePagesStore';
import { useRouter } from 'next/router';
import useLunchReviewStore from '@/stores/lunch/useLunchReviewStore';
import { GetRestListData } from '@/types/lunch/api';
import COMPONENT_NAME from '@/constants/common/pages';
import useUserStore from '@/stores/common/useUserStore';
import DUMMY_DATA from '@/constants/lunch/dummy';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchReviewRestList from '@/components/lunch/review/LunchReviewRestList';

function LunchRouletteReviews() {
  const router = useRouter();
  const { title } = LUNCH_ROULETTE_CONSTANTS;
  const { detail } = COMPONENT_NAME.lunch.detail;
  const { memberName } = useUserStore();
  const { setNextComponent } = usePagesStore();
  const { setReviewList, reviewList } = useLunchReviewStore();
  const { isAgain, menuState, isDecided, isOperated } = useLunchRouletteStore();

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

  // 타이틀 렌더 함수
  const renderTitle = () => {
    // '이걸로 결정' 버튼을 눌렀을 경우
    if (isDecided) return `"${menuState}" ${title.review}`;

    // 최초 동작 완료 전일 경우
    if (isOperated && !isAgain) return `${memberName}${title.recent}`;

    // 그 이외에는 아무 내용도 보이지 않는다.
    return '';
  };

  // 식당 리스트 렌더 함수
  const renderRestList = () => {
    // '이걸로 결정' 버튼을 눌렀을 경우
    if (isDecided) {
      return <LunchReviewRestList onClick={onClickHandler} />;
    }

    // 최초 동작 완료 전일 경우
    if (isOperated && !isAgain) {
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

    // 그 이외에는 아무 내용도 보이지 않는다.
    return '';
  };

  return (
    <div css={wrapperStyles}>
      <div css={stickyStyles}>
        <LunchSubTitle title={renderTitle()} type="title" />
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

export default LunchRouletteReviews;
