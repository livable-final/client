import theme from '@/styles/theme';
import { css } from '@emotion/react';

function HomeCafeteriaToggle({ type }: { type: string }) {
  return <div css={containerStyles}>{type}</div>;
}

const containerStyles = css`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 100px;
  background: ${theme.palette.greyscale.grey10};
  font: ${theme.font.body.body4};
  color: ${theme.palette.greyscale.grey50};
  line-height: 16px;
`;

export default HomeCafeteriaToggle;
