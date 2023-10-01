import Bnb from '@/components/common/Bnb';
import Title from '@/components/common/Title';
import ToWrite from '@/components/common/ToWrite';
import LunchDetail from '@/components/lunch/detail';
import LunchMainContents from '@/components/lunch/LunchMainContents';
import LunchReviewsByRanking from '@/components/lunch/review/LunchReviewsByRanking';
import COMPONENT_NAME from '@/constants/common/pages';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import usePagesStore from '@/stores/usePagesStore';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function LunchHome() {
  const { lunch } = HOME_TEXTS.title;
  const { nextComponent } = usePagesStore();
  const { detail } = COMPONENT_NAME.lunch;

  // 오점완 홈 -> 리뷰 상세
  switch (nextComponent) {
    case detail.detail:
      return <LunchDetail />;
    // 오점완 홈 -> 랭킹별 리뷰
    case detail.reviewByRanking:
      return <LunchReviewsByRanking />;
    default:
      return (
        <>
          <Title title={lunch} part="lunch" />
          <div css={containerStyles}>
            <LunchMainContents />
          </div>
          <ToWrite hasBnb />
          <Bnb />
        </>
      );
  }
}

const containerStyles = css`
  margin: 0 -16px 90px;
  background: ${theme.palette.background.home};
`;

export default LunchHome;
