import LunchCard from '@/components/lunch/LunchCard';
import LunchMainRankingTitle from '@/components/lunch/main/LunchMainRankingTitle';
import LunchMainRankingMenus from '@/components/lunch/main/LunchMainRankingMenus';
import { css } from '@emotion/react';

function LunchMainRanking() {
  return (
    <LunchCard>
      <div css={wrapperStyles}>
        <LunchMainRankingTitle />
        <LunchMainRankingMenus />
      </div>
    </LunchCard>
  );
}

const wrapperStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default LunchMainRanking;
