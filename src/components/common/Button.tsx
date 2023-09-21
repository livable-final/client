import { COMMON_BUTTON_COLORS } from '@/constants/common';
import { ButtonColorProps, ButtonProps } from '@/types/common/button';
import { css } from '@emotion/react';

function Button({ content, variant, isDisabled, onClick }: ButtonProps) {
  const variantData = COMMON_BUTTON_COLORS[variant];

  return (
    <button
      type="button"
      disabled={isDisabled}
      css={buttonStyles(variantData)}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

const buttonStyles = (variantData: ButtonColorProps) => css`
  display: flex;
  cursor: pointer;
  font-family: inherit;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100px;
  border-radius: 16px;
  padding: 16px 0;
  font-size: 18px;
  background: ${variantData.background};
  color: ${variantData.color};
  border: 1px solid ${variantData.color};

  &:disabled {
    pointer-events: none;
    background-color: ${variantData.isDisabled};
  }

  &:active {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.95);
  }
`;

export default Button;
