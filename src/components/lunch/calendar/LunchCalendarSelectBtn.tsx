import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { Plate, Chef, Bento } from '@/assets/icons';
import { LunchCalendarSelectBtnProps } from '@/types/lunch/calendar';
import usePagesStore from '@/stores/usePagesStore';

function LunchCalendarSelectBtn({ text }: LunchCalendarSelectBtnProps) {
  const { setNextComponent } = usePagesStore();
  const { category } = CALENDAR_CONTENT;

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text === category.eatOut.text) {
      setNextComponent('LunchCalendarSearch');
    } else if (text === category.cafeteria.text) {
      setNextComponent('LunchCalendarCafeteria');
    } else if (text === category.lunchBox.text) {
      setNextComponent('LunchCalendarLunchBox');
    }
  };

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
    <button type="button" css={buttonStyles} onClick={onClickHandler}>
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

export default LunchCalendarSelectBtn;
