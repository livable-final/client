import theme from '@/styles/theme';
import getTodayDate from '@/utils/getTodayDate';
import { css } from '@emotion/react';

function HomeBulletinDate() {
  const today = new Date();
  const todayDate = getTodayDate(today);

  return <span css={spanStyles}>{todayDate}</span>;
}

const spanStyles = css`
  display: flex;
  font: ${theme.font.body.body2_500};
  color: ${theme.palette.title};
`;

export default HomeBulletinDate;
