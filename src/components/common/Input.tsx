import React, { useState } from 'react';
import { css } from '@emotion/react';
import { InputColorProps, InputProps } from '@/types/common/input';
import { COMMON_INPUT_COLORS } from '@/constants/common';
import { Location } from '@/assets/icons';
import ErrorMessage from '@/components/common/ErrorMessage';

function Input({
  inputIcon,
  textarea,
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
        {inputIcon && <Location css={inputIconStyle(variantData)} />}
        {textarea === true ? (
          // input textarea
          <textarea
            name="content"
            placeholder={placeholder}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setValue(e.target.value)
            }
            cols={30}
            rows={2}
            css={inputTextareaStyles(variantData)}
            disabled={isDisabled}
          />
        ) : (
          // input defalt
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            css={inputStyles}
            disabled={isDisabled}
          />
        )}
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
  border: 1px solid ${variantData.border};
  border-radius: 12px;
  font: ${variantData.font}
  font-size: 1rem;
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

const inputStyles = () => css`
  padding: 17px 16px;
  border: none;
  border-radius: 12px;
  height: 58px;
  min-width: 100px;
  font-size: 1rem;
`;

const inputTextareaStyles = (variantData: InputColorProps) => css`
  margin: 17px 16px;
  width: 100%;
  border: none;
  background-color: ${variantData.backgroundColor};
  font: ${variantData.font};
  font-size: 1rem;
  resize: none;
`;

export default Input;
