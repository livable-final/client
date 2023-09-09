import React, { useState } from 'react';
import { css } from '@emotion/react';
import { InputColorProps, InputProps } from '@/types/common/input';
import { COMMON_INPUT_COLORS } from '@/constants/common';
import { Location } from '@/assets/icons';
import ErrorMessage from '@/components/common/ErrorMessage';

function Input({
  inputIcon,
  variant,
  placeholder,
  isDisabled,
  isError,
  errorType,
}: InputProps) {
  const [value, setValue] = useState('');
  const variantData = COMMON_INPUT_COLORS[variant];

  return (
    <div css={inputContainerStyles}>
      <div css={inputBoxStyle(variantData)}>
        {/* input icon 있는 경우 icon 영역 */}
        {inputIcon === true ? (
          <Location css={inputIconStyle(variantData)} />
        ) : null}
        {/* input textarea */}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          css={inputTextsareaStyles}
          disabled={isDisabled}
        />
      </div>
      {/* error meassage 필요한 경우 */}
      {isError && value.length <= 0 ? (
        <ErrorMessage errorType={errorType} />
      ) : null}
    </div>
  );
}

const inputContainerStyles = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
`;

const inputBoxStyle = (variantData: InputColorProps) => css`
  display: flex;
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 58px;
 
  border: 1px solid ${variantData.border};
  border-radius: 12px;
  font: ${variantData.font}
  color: ${variantData.color};
  background-color: ${variantData.backgroundColor};

  &:disabled {
    pointer-events: none;
    background-color: ${variantData.backgroundColor};
  }

  &:active {
    color: ${variantData.isFocused};
  }
`;

const inputIconStyle = (variantData: InputColorProps) => css`
  width: 24px;
  height: 24px;
  margin: 0 0 0 16px;
  color: ${variantData.color};

  &:disabled {
    pointer-events: none;
    background-color: ${variantData.backgroundColor};
  }

  &:active {
    color: ${variantData.isFocused};
  }
`;

const inputTextsareaStyles = () => css`
  padding: 17px 16px;
  border: none;
  border-radius: 12px;
  min-width: 40px;
`;

export default Input;
