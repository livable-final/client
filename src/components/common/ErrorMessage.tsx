import React from 'react';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { COMMON_ERROR_MESSAGE } from '@/constants/common';
import { ErrorIcon } from '@/assets/icons';
import { ErrorMessageProps } from '@/types/common/errorMessage';

function ErrorMessage({ errorType }: ErrorMessageProps) {
  const errorMessage = (error: string | undefined) => {
    if (error === 'test')
      return <div css={errorTextStyles}>{COMMON_ERROR_MESSAGE.test}</div>;
    if (error === 'test2')
      return <div css={errorTextStyles}>{COMMON_ERROR_MESSAGE.test2}</div>;
    return <div css={errorTextStyles}>errorType지정 안했을경우 에러메세지</div>;
  };

  return (
    <div css={errorContainerStyles}>
      <ErrorIcon color={theme.palette.state.warning} />
      {errorMessage(errorType)}
    </div>
  );
}

const errorContainerStyles = () => css`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  margin-top: 12px;
  color: ${theme.palette.state.warning};
`;

const errorTextStyles = () => css`
  display: flex;
  justify-content: left;
  text-align: center;
  align-items: center;
  margin-left: 4px;
  color: ${theme.palette.state.warning};
`;

export default ErrorMessage;
