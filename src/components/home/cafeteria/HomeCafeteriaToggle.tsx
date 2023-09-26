import { HOME_TEXTS } from '@/constants/home/homeTexts';
import theme from '@/styles/theme';
import { HomeCafeteriaToggleProps } from '@/types/home';
import { css } from '@emotion/react';

function HomeCafeteriaToggle({
  type,
  onToggle,
  isActive,
}: HomeCafeteriaToggleProps) {
  const mealType = HOME_TEXTS.cafeteria.type;
  const onClickHandler = () => {
    onToggle(mealType.indexOf(type));
  };

  return (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={isActive}
      css={containerStyles(isActive)}
    >
      {type}
    </button>
  );
}

const containerStyles = (isActive: boolean) => css`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 100px;
  font: ${theme.font.body.body4};
  line-height: 16px;
  cursor: pointer;
  background: ${isActive
    ? theme.palette.bluescale.blue40
    : theme.palette.greyscale.grey10};
  color: ${isActive ? theme.palette.white : theme.palette.greyscale.grey50};
`;

export default HomeCafeteriaToggle;
