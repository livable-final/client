import theme from '@/styles/theme';
import { CardProps } from '@/types/common/card';
import { css } from '@emotion/react';
import React from 'react';

function Card({ children, col }: CardProps) {
  return <div css={cardStyles(col)}>{children}</div>;
}

const cardStyles = (col?: boolean) => css`
  display: flex;
  flex-direction: ${col ? 'column' : 'row'};
  padding: 0px 16px;
  align-self: stretch;
  border-radius: 16px;
  background: ${theme.palette.white};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
`;

export default Card;
