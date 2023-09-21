import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { Sunny } from '@/assets/icons';

function HomeBulletinWeather() {
  return (
    <div css={containerStyles}>
      <p css={celsiusStyles}>21˚c</p>
      <Sunny />
    </div>
  );
}

const containerStyles = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const celsiusStyles = css`
  display: flex;
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.greyscale.grey50};
`;
export default HomeBulletinWeather;
