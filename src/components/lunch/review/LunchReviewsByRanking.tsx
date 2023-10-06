import useFetch from '@/hooks/useFetch';
import ToTop from '@/components/common/ToTop';
import Header from '@/components/common/Header';
import usePagesStore from '@/stores/common/usePagesStore';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import useUserStore from '@/stores/common/useUserStore';
import { getRanking } from '@/pages/api/lunch/lunchRequests';
import LunchRankings from '@/components/lunch/ranking/LunchRankings';

// 랭킹별 리뷰 컨테이너 컴포넌트
function LunchReviewsByRanking() {
  const { setNextComponent } = usePagesStore();
  const { title, palette } = LUNCH_MAIN_CONSTANTS.ranking;
  const { buildingId } = useUserStore();
  const { response } = useFetch({
    fetchFn: () => getRanking(buildingId),
  });

  const rankData = response?.data.map((item, idx) => ({
    ...item,
    color: palette[idx],
  }));

  // 뒤로 가기
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
