import LunchCard from '@/components/lunch/LunchCard';
import LunchRankingPodium from '@/components/lunch/ranking/LunchRankingPodium';
import { css } from '@emotion/react';
import usePagesStore from '@/stores/common/usePagesStore';
import theme from '@/styles/theme';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import { Right } from '@/assets/icons';
import useFetch from '@/hooks/useFetch';
import { getRanking } from '@/pages/api/lunch/lunchRequests';
import useUserStore from '@/stores/common/useUserStore';
import COMPONENT_NAME from '@/constants/common/pages';
import Loading from '@/components/common/Loading';

// '오늘 점심' 홈의 랭킹 파트
function LunchRanking() {
  const { title, heights, colors, margin } = LUNCH_MAIN_CONSTANTS.main.ranking;
  const { reviewByRanking } = COMPONENT_NAME.lunch.detail;
  const { setNextComponent } = usePagesStore();
  const { buildingId } = useUserStore();
  const { response, loading } = useFetch({
    fetchFn: () => getRanking(buildingId),
  });
  const top3Menus = response?.data.slice(0, 3);

  const onClickHandler = () => {
    setNextComponent(reviewByRanking); // 리뷰별 랭킹페이지로 이동
    window.scrollTo({ top: 0 }); // 페이지 top: 0으로 이동
  };

  // 2위 - 1위 - 3위 순으로 정렬.
  let sortedMenus;
  if (response) {
    sortedMenus = [
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
  }

  return (
    <LunchCard col nopad>
      <button type="button" onClick={onClickHandler} css={buttonStyles}>
        <div css={titleStyles}>
          <span css={spanStyles}>{title}</span>
          <Right />
        </div>
        <div css={wrapperStyles}>
          {loading ? (
            <Loading />
          ) : (
            sortedMenus?.map((item) => (
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
            ))
          )}
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
