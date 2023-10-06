import { Line } from '@/assets/icons';
import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { HomeBulletinNoticeProps } from '@/types/home';

function HomeBulletinNotice({ title, content }: HomeBulletinNoticeProps) {
  return (
    <div css={containerStyles}>
      <span css={titleStyles}>{title}</span>
      <Line />
      <span css={contentStyles}>{content}</span>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`;

const titleStyles = css`
  font: ${theme.font.body.body3_300};
  color: ${theme.palette.greyscale.grey50};
  line-height: 21px;
  min-width: 24px;

  @media (min-width: 320px) {
    font: ${theme.font.body.body3_400};
  }
`;

const contentStyles = css`
  font: ${theme.font.body.body3_300};
  color: ${theme.palette.greyscale.grey70};
  line-height: 21px;

  @media (min-width: 320px) {
    font: ${theme.font.body.body3_400};
  }
`;
export default HomeBulletinNotice;
