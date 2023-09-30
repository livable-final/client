import { css } from '@emotion/react';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import { DUMMY_RESPONSE } from '@/constants/lunch/dummy';
import LunchRest from '@/components/lunch/LunchRest';
import theme from '@/styles/theme';
import useRouletteStore from '@/stores/useRouletteStore';
// import { getRestList } from '@/pages/api/lunch/lunchRequests';
// import useFetch from '@/hooks/useFetch';
// { menuId }: { menuId: number }

function LunchReviewsByRest() {
  const { title } = LUNCH_ROULETTE_CONSTANTS;
  const { menuState, isAgain, isOperated } = useRouletteStore();
  // const { response } = useFetch({
  //   fetchFn: getRestList,
  //   arg: menuId,
  const renderTitle = () => {
    return isAgain && isOperated ? `"${menuState}"` : `${title.recent}`;
  };

  return (
    <div css={wrapperStyles}>
      <div css={stickyStyles}>
        <LunchSubTitle
          title={`${renderTitle()} ${title.review}`}
          type="title"
        />
      </div>
      {/* {response?.data.map((v) => v.address)} */}
      {DUMMY_RESPONSE.data.map((item) => (
        <LunchRest key={item.restaurantId} {...item} />
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
