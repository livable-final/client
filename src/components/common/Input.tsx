import React from 'react';
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
  row = 2,
  maxLength = 7,
  setValue,
  value,
}: InputProps) {
  const variantData = COMMON_INPUT_COLORS[variant];

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onChangeTextAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  return (
    <div css={inputContainerStyles}>
      <div css={inputBoxStyles(variantData)}>
        {/* input icon 있는 경우 icon 영역 */}
        {inputIcon && <Location css={inputIconStyles(variantData)} />}
        {textarea === true ? (
          // input textarea
          <div css={textareaContainerStyles}>
            <textarea
              name="content"
              placeholder={placeholder}
              value={value}
              onChange={onChangeTextAreaHandler}
              cols={30}
              rows={row}
              css={inputTextareaStyles(variantData)}
              disabled={isDisabled}
              maxLength={maxLength}
            />
            <div>
              {value.length}/{maxLength + 1}
            </div>
          </div>
        ) : (
          // input defalt
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChangeInputHandler}
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
`;

const inputBoxStyles = (variantData: InputColorProps) => css`
  display: flex;
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid ${variantData.border};
  border-radius: 12px;
  font: ${variantData.font};
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

const inputIconStyles = (variantData: InputColorProps) => css`
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

const textareaContainerStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    position: relative;
    bottom: 10px;
    text-align: right;
    padding-right: 16px;
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
  border: none;
  background-color: ${variantData.backgroundColor};
  font: ${variantData.font};
  font-size: 1rem;
  resize: none;
`;

export default Input;
