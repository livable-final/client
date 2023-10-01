import Header from '@/components/common/Header';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import usePagesStore from '@/stores/usePagesStore';
import LunchRankings from '@/components/lunch/ranking/LunchRankings';
import ToTop from '@/components/common/ToTop';
import useFetch from '@/hooks/useFetch';
import { getRanking } from '@/pages/api/lunch/lunchRequests';
import useBuildingStore from '@/stores/useBuildingStore';

function LunchReviewsByRanking() {
  const { setNextComponent } = usePagesStore();
  const { title, palette } = LUNCH_MAIN_CONSTANTS.ranking;
  const { buildingId } = useBuildingStore();
  const { response } = useFetch({
    fetchFn: () => getRanking({ buildingId }),
  });

  const rankData = response?.data.map((item, idx) => ({
    ...item,
    color: palette[idx],
  }));

  const onClickHandler = () => {
    setNextComponent('');
  };

  return (
    <section>
      <Header title={title} onClick={onClickHandler} type="close" isCloseOnly />
      {rankData?.map((item) => <LunchRankings key={item.menuId} {...item} />)}
      <ToTop />
    </section>
  );
}

export default LunchReviewsByRanking;
