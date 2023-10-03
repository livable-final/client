import { css } from '@emotion/react';
import { InputColorProps, InputProps } from '@/types/common/input';
import { COMMON_INPUT_COLORS } from '@/constants/common';
import { Location } from '@/assets/icons';
import ErrorMessage from '@/components/common/ErrorMessage';
import theme from '@/styles/theme';

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
  value,
  onChange,
  name,
}: InputProps) {
  const variantData = COMMON_INPUT_COLORS[variant];

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
              onChange={onChange}
              cols={30}
              rows={row}
              css={inputTextareaStyles(variantData)}
              disabled={isDisabled}
              maxLength={maxLength}
            />
            <div css={maxLengthStyles}>
              {value.length}/{maxLength + 1}
            </div>
          </div>
        ) : (
          // input default
          <input
            name={name}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            css={inputStyles}
            disabled={isDisabled}
            maxLength={maxLength}
          />
        )}
      </div>
      {/* error meassage 필요한 경우 */}
      {isError && value !== '' && <ErrorMessage errorType={errorType} />}
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
  font: ${theme.font.subTitle.subTitle2_400};
`;

const inputTextareaStyles = (variantData: InputColorProps) => css`
  margin: 17px 16px;
  border: none;
  background-color: ${variantData.backgroundColor};
  font: ${variantData.font};
  font-size: 1rem;
  resize: none;
  letter-spacing: 0;
  line-height: 24px;
`;

const maxLengthStyles = css`
  color: ${theme.palette.greyscale.grey30};
`;

export default Input;
