import LunchCardProps from '@/components/lunch/LunchCard';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { Servey } from '@/assets/icons';

function HomeServey() {
  const { servey } = HOME_TEXTS;
  return (
    <LunchCardProps padding={20}>
      <div css={containerStyles}>
        <Servey />
        <div css={wrapperStyles}>
          <span css={titleStyles}>{servey.title}</span>
          <span css={bodyStyles}>{servey.body}</span>
        </div>
      </div>
    </LunchCardProps>
  );
}

const containerStyles = css`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
`;

const titleStyles = css`
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.greyscale.grey50};
  line-height: 21px;
`;

const bodyStyles = css`
  font: ${theme.font.body.body2_600};
  line-height: 22px;
`;

export default HomeServey;
