import Bnb from '@/components/common/Bnb';
import Title from '@/components/common/Title';
import LunchDetail from '@/components/lunch/detail';
import LunchMainContents from '@/components/lunch/LunchMainContents';
import LunchReviewsByRanking from '@/components/lunch/review/LunchReviewsByRanking';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import usePagesStore from '@/stores/usePagesStore';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function LunchHome() {
  const { title } = CALENDAR_CONTENT;
  const { nextComponent } = usePagesStore();

  // 오점완 홈 -> 리뷰 상세
  switch (nextComponent) {
    case 'LunchDetail':
      return <LunchDetail />;
    // 오점완 홈 -> 랭킹별 리뷰
    case 'LunchReviewsByRanking':
      return <LunchReviewsByRanking />;
    default:
      return (
        <>
          <div css={containerStyles}>
            <Title title={title.main} part="lunch" />
            <LunchMainContents />
          </div>
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
