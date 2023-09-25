import { css } from '@emotion/react';
import LunchRankingCard from '@/components/lunch/main/LunchMainRankingCard';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';

const data = [
  {
    date: '2023-09-11',
    count: '194',
    menuId: '1',
    rank: '1',
    menuName: '부대찌개',
    menuImage: '/menu.png',
  },
  {
    date: '2023-09-11',
    count: '152',
    menuId: '2',
    rank: '2',
    menuName: '제육볶음',
    menuImage: '/menu.png',
  },
  {
    date: '2023-09-11',
    count: '121',
    menuId: '3',
    rank: '3',
    menuName: '돈까스',
    menuImage: '/menu.png',
  },
  {
    date: '2023-09-11',
    count: '95',
    menuId: '4',
    rank: '4',
    menuName: '메밀국수',
    menuImage: '/menu.png',
  },
];

function LunchMainRankingMenus() {
  const { heights } = LUNCH_MAIN_CONSTANTS.ranking;
  const top3Menus = [...data].slice(0, 3);
  const sortedMenus = [
    { ...top3Menus[1], height: heights[0] },
    { ...top3Menus[0], height: heights[1] },
    { ...top3Menus[2], height: heights[2] },
  ];

  return (
    <div css={containerStyles}>
      {sortedMenus.map((item) => (
        <LunchRankingCard
          key={item.menuName}
          menuImage={item.menuImage}
          menuName={item.menuName}
          count={item.count}
          rank={item.rank}
          height={item.height}
        />
      ))}
    </div>
  );
}

const containerStyles = css`
  display: flex;
  padding: 12px 42.5px 20px;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  align-self: stretch;
`;

export default LunchMainRankingMenus;
