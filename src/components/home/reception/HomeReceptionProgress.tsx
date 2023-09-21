import theme from '@/styles/theme';
import { HomeReceptionProps } from '@/types/home';
import { css } from '@emotion/react';

function HomeReceptionProgress({ state, quantity, idx }: HomeReceptionProps) {
  return (
    <div css={containerStyles}>
      <div css={eclipseStyles(idx)}>
        <span css={quantityStyles(idx)}>{quantity}</span>
      </div>
      <div css={stateStyles}>{state}</div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  gap: 12px;
`;

const eclipseStyles = (idx: number) => css`
  width: 63px;
  height: 63px;
  flex-shrink: 0;
  background-color: ${idx === 2
    ? theme.palette.bluescale.blue10
    : theme.palette.greyscale.grey10};
  border-radius: 100px;
  gap: 4px;
`;

const quantityStyles = (idx: number) => css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${theme.font.subTitle.subTitle2_500};
  color: ${idx === 2 ? theme.palette.primary : theme.palette.greyscale.grey50};
`;

const stateStyles = css`
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.greyscale.grey70};
`;

export default HomeReceptionProgress;
