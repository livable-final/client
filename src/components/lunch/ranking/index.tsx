import LunchCard from '@/components/lunch/LunchCard';
import LunchRankingPodium from '@/components/lunch/ranking/LunchRankingPodium';
import { css } from '@emotion/react';
import usePagesStore from '@/stores/usePagesStore';
import { DUMMMY_MENU_TOP_TEN } from '@/constants/lunch/dummy';
import theme from '@/styles/theme';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import { Right } from '@/assets/icons';
// import { useQuery } from '@tanstack/react-query';
// import theme from '@/styles/theme';
// import { useEffect, useState } from 'react';
// import getRanking from '@/pages/api/lunch/lunchRequests';

function LunchRanking() {
  const { setNextComponent } = usePagesStore();
  const { title, heights, colors, margin } = LUNCH_MAIN_CONSTANTS.main.ranking;
  const top3Menus = [...DUMMMY_MENU_TOP_TEN].slice(0, 3);
  const sortedMenus = [
    {
      ...top3Menus[1],
      height: heights[0],
      color: colors[0],
      margin: margin[0],
    },
    {
      ...top3Menus[0],
      height: heights[1],
      color: colors[1],
      margin: margin[1],
    },
    {
      ...top3Menus[2],
      height: heights[2],
      color: colors[2],
      margin: margin[2],
    },
  ];
  // const { data, isError, error } = useQuery(
  //   ['getRanking'],
  //   () => getRanking(),
  //   {},
  // );

  // // TOFIXED: 에러용 단순 모달 필요
  // if (isError) return <div>{error?.toString()}</div>;

  const onClickHandler = () => {
    setNextComponent('LunchReviewsByRanking'); // 리뷰별 랭킹페이지로 이동
    window.scrollTo({ top: 0 }); // 페이지 top: 0으로 이동
  };

  return (
    <LunchCard col nopad>
      <button type="button" onClick={onClickHandler} css={buttonStyles}>
        <div css={titleStyles}>
          <span css={spanStyles}>{title}</span>
          <Right />
        </div>
        <div css={wrapperStyles}>
          {sortedMenus.map((item) => (
            <LunchRankingPodium
              key={item.menuName}
              menuImage={item.menuImage}
              menuName={item.menuName}
              count={item.count}
              rank={item.rank}
              height={item.height}
              color={item.color}
              margin={item.margin}
            />
          ))}
        </div>
      </button>
    </LunchCard>
  );
}

const buttonStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  &:active {
    background-color: ${theme.palette.greyscale.grey5};
  }
`;

const titleStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding-bottom: 16px;
  padding: 16px 20px;

  > svg {
    width: 24px;
    height: 24px;
  }
`;

const spanStyles = css`
  font: ${theme.font.body.body1_600};
  color: ${theme.palette.title};
`;

const wrapperStyles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  align-self: stretch;
  padding: 12px 20px 20px;
`;
export default LunchRanking;
