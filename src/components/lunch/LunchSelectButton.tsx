import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { Plate, Chef, Bento } from '@/assets/icons';
import { LunchSelectButtonProps } from '@/types/lunch/calendar';

function LunchSelectButton({ text, onClick }: LunchSelectButtonProps) {
  const { category } = CALENDAR_CONTENT;

  let icon;

  switch (text) {
    case category.eatOut.text:
      icon = <Plate />;
      break;
    case category.cafeteria.text:
      icon = <Chef />;
      break;
    case category.lunchBox.text:
      icon = <Bento />;
      break;
    default:
      break;
  }
  return (
    <button type="button" css={buttonStyles} onClick={onClick}>
      <div css={iconStyles}>{icon}</div>
      <p>{text}</p>
    </button>
  );
}

const buttonStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${theme.palette.greyscale.grey70};
  font: ${theme.font.body.body2_400};

  &:active {
    div {
      transform: scale(0.9);
      transition: transform 0.1s ease;
    }
  }
`;

const iconStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 100px;
  margin-bottom: 12px;
  background-color: ${theme.palette.greyscale.grey10};
`;

export default LunchSelectButton;
