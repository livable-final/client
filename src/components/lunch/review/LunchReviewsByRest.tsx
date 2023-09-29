import { css } from '@emotion/react';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import { DUMMY_RESPONSE } from '@/constants/lunch/dummy';
import LunchRest from '@/components/lunch/LunchRest';
import theme from '@/styles/theme';
// import { getRestList } from '@/pages/api/lunch/lunchRequests';
// import useFetch from '@/hooks/useFetch';
// { menuId }: { menuId: number }

function LunchReviewsByRest() {
  const { title } = LUNCH_ROULETTE_CONSTANTS;
  // const { response } = useFetch({
  //   fetchFn: getRestList,
  //   arg: menuId,
  // });

  return (
    <div css={wrapperStyles}>
      <div css={stickyStyles}>
        <LunchSubTitle title={title.review} type="title" />
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
  width: calc(100% + 32px);
  padding: 16px 0;
  margin: 0 -16px;
  top: 56px;
  left: 0;
  background-color: ${theme.palette.white};

  > div {
    padding-left: 16px;
  }
`;

export default LunchReviewsByRest;
