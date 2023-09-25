import { css } from '@emotion/react';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import { Right } from '@/assets/icons';
import theme from '@/styles/theme';

function LunchMainRankingTitle() {
  return (
    <div css={containerStyles}>
      <span css={spanStyles}>{LUNCH_MAIN_CONSTANTS.ranking.title}</span>
      <Right />
    </div>
  );
}

const containerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  > svg {
    width: 24px;
    height: 24px;
  }
`;

const spanStyles = css`
  font: ${theme.font.body.body1_600};
  color: ${theme.palette.title};
`;

export default LunchMainRankingTitle;
