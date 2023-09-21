import theme from '@/styles/theme';
import { HomeCardProps } from '@/types/home';
import { css } from '@emotion/react';
import React from 'react';

function HomeCard({ children }: HomeCardProps) {
  return <div css={cardStyles}>{children}</div>;
}

const cardStyles = css`
  display: flex;
  padding: 0px 16px;
  align-self: stretch;
  border-radius: 16px;
  background: ${theme.palette.white};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
`;

export default HomeCard;
