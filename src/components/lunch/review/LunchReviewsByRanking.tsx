import Header from '@/components/common/Header';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import { DUMMMY_MENU_TOP_TEN } from '@/constants/lunch/dummy';
import usePagesStore from '@/stores/usePagesStore';
import LunchRankings from '@/components/lunch/ranking/LunchRankings';
import ToTop from '@/components/common/ToTop';
import { useState } from 'react';
import { css } from '@emotion/react';

function LunchReviewsByRanking() {
  const [isHidden, setIsHidden] = useState(false);
  const { setNextComponent } = usePagesStore();
  const { title, palette } = LUNCH_MAIN_CONSTANTS.ranking;
  const queryData = DUMMMY_MENU_TOP_TEN.map((item, idx) => ({
    ...item,
    color: palette[idx],
  }));

  const onClickHandler = () => {
    setIsHidden(true);
    setTimeout(() => {
      setNextComponent('');
    }, 200);
  };

  return (
    <section css={slideStyles(isHidden)}>
      <Header title={title} onClick={onClickHandler} type="close" isCloseOnly />
      {queryData.map((item) => (
        <LunchRankings key={item.menuId} {...item} />
      ))}
      <ToTop />
    </section>
  );
}

const slideStyles = (isHidden: boolean) => css`
  transform: ${isHidden ? 'translateX(100%)' : 'translateX(0)'};
  transition: transform 0.2s ease-out;
`;

export default LunchReviewsByRanking;
