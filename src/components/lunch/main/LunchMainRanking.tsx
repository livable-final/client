import Card from '@/components/common/Card';
import LunchMainRankingTitle from '@/components/lunch/main/LunchMainRankingTitle';
import LunchMainRankingMenus from '@/components/lunch/main/LunchMainRankingMenus';
import { css } from '@emotion/react';

function LunchMainRanking() {
  return (
    <Card>
      <div css={wrapperStyles}>
        <LunchMainRankingTitle />
        <LunchMainRankingMenus />
      </div>
    </Card>
  );
}

const wrapperStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default LunchMainRanking;
