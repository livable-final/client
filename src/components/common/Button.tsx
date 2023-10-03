import { COMMON_BUTTON_COLORS } from '@/constants/common';
import { ButtonColorProps, ButtonProps } from '@/types/common/button';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

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
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100px;
  padding: 16px 0;
  border: 1px solid ${variantData.color};
  border-radius: 16px;
  background: ${variantData.background};
  color: ${variantData.color};
  font: ${theme.font.subTitle.subTitle1_500};

  cursor: pointer;

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
