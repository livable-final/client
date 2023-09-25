import Card from '@/components/common/Card';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import { css } from '@emotion/react';
import Icons from '@/components/common/Icons';
import theme from '@/styles/theme';

function HomeServey() {
  const { servey } = HOME_TEXTS;
  return (
    <Card padding={20}>
      <div css={containerStyles}>
        <Icons icon="coin" size="36" />
        <div css={wrapperStyles}>
          <span css={titleStyles}>{servey.title}</span>
          <span css={bodyStyles}>{servey.body}</span>
        </div>
      </div>
    </Card>
  );
}

const containerStyles = css`
  display: flex;
  align-items: center;
  gap: 16px;
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
  line-height: 21px;
`;

export default HomeServey;
