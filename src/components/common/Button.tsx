import COMMON_BUTTON_COLORS from '@/constants/common/constant';
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
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-family: inherit;
  width: 100%;
  margin-top: 1rem;
  min-width: 10rem;
  border-radius: 1rem;
  padding: 1rem 0;
  height: 25px;
  background: ${variantData.background};
  color: ${variantData.color};

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
