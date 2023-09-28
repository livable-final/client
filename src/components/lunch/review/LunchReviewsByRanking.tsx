import Header from '@/components/common/Header';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import { DUMMMY_MENU_TOP_TEN } from '@/constants/lunch/dummy';
import usePagesStore from '@/stores/usePagesStore';
import LunchRankings from '@/components/lunch/ranking/LunchRankings';
import ToTop from '@/components/common/ToTop';

function LunchReviewsByRanking() {
  const { setNextComponent } = usePagesStore();
  const { title, palette } = LUNCH_MAIN_CONSTANTS.ranking;
  const queryData = DUMMMY_MENU_TOP_TEN.map((item, idx) => ({
    ...item,
    color: palette[idx],
  }));

  const onClickHandler = () => {
    setNextComponent('');
  };

  return (
    <section>
      <Header title={title} onClick={onClickHandler} type="close" isCloseOnly />
      {queryData.map((item) => (
        <LunchRankings key={item.menuId} {...item} />
      ))}
      <ToTop />
    </section>
  );
}

export default LunchReviewsByRanking;
