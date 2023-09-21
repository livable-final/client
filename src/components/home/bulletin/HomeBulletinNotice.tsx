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
  gap: 12px;
  align-self: stretch;
`;

const titleStyles = css`
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.greyscale.grey50};
`;

const contentStyles = css`
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.greyscale.grey70};
`;
export default HomeBulletinNotice;
