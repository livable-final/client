import React from 'react';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { COMMON_ERROR_MESSAGE } from '@/constants/common';
import { ErrorIcon } from '@/assets/icons';
import { ErrorMessageProps } from '@/types/common/errorMessage';

function ErrorMessage({ errorType }: ErrorMessageProps) {
  const errorMessage = (error: string | undefined) => {
    if (error === 'name')
      return <div css={errorTextStyles}>{COMMON_ERROR_MESSAGE.name}</div>;
    if (error === 'contact')
      return <div css={errorTextStyles}>{COMMON_ERROR_MESSAGE.contact}</div>;
    return <div css={errorTextStyles}>{COMMON_ERROR_MESSAGE.default}</div>;
  };

  return (
    <div css={errorContainerStyles}>
      <div css={iconWrapperStyles}>
        <ErrorIcon color={theme.palette.state.warning} />
      </div>
      {errorMessage(errorType)}
    </div>
  );
}

const errorContainerStyles = css`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 4px;
  width: 100%;
  margin-top: 12px;
`;

const iconWrapperStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const errorTextStyles = css`
  display: flex;
  justify-content: left;
  text-align: center;
  align-items: center;
  color: ${theme.palette.state.warning};
  font: ${theme.font.body.body3_400};
`;

export default ErrorMessage;
