import theme from '@/styles/theme';
import { css } from '@emotion/react';
import Icons from '@/components/common/Icons';
import { UserPointProps } from '@/types/user';

function UserPoint({ point }: UserPointProps) {
  return (
    <div css={containerStyles}>
      <span css={spanStyles}>{point}</span>
      <Icons icon="coin" size="20" />
    </div>
  );
}

const containerStyles = css`
  display: flex;
  padding: 4px 10px 4px 12px;
  align-items: center;
  gap: 2px;
  border-radius: 16px;
  background: ${theme.palette.greyscale.grey10};
`;

const spanStyles = css`
  color: ${theme.palette.greyscale.grey60};
  font: ${theme.font.body.body3_500};
  line-height: 21px;
  min-width: 26px;
`;

export default UserPoint;
