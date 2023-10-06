import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { Chef, Bento, PlateSmall } from '@/assets/icons';
import { LunchCalendarSelectBtnProps } from '@/types/lunch/calendar';
import usePagesStore from '@/stores/common/usePagesStore';

function LunchCalendarSelectBtn({ text }: LunchCalendarSelectBtnProps) {
  const { setNextComponent } = usePagesStore();
  const { category } = CALENDAR_CONTENT;

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text === category[0].category) {
      setNextComponent('LunchCalendarSearch');
    } else if (text === category[1].category) {
      setNextComponent('LunchCalendarCafeteria');
    } else if (text === category[2].category) {
      setNextComponent('LunchCalendarLunchBox');
    }
  };

  let icon;

  switch (text) {
    case category[0].category:
      icon = <PlateSmall />;
      break;
    case category[1].category:
      icon = <Chef />;
      break;
    case category[2].category:
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
