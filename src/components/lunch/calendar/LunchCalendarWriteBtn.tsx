import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { RightSmall, Gift, Plate } from '@/assets/icons';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { LunchCalendarWriteBtnProps } from '@/types/lunch/calendar';

function LunchCalendarWriteBtn({
  isCompleted,
  onClick,
}: LunchCalendarWriteBtnProps) {
  const { button } = CALENDAR_CONTENT;

  let icon;
  let text;
  switch (isCompleted) {
    case true:
      icon = <Gift />;
      text = button.button2.text;
      break;
    case false:
      icon = <Plate />;
      text = button.button1.text;
      break;
    default:
      break;
  }
  return (
    <button type="button" css={buttonStyles} onClick={onClick}>
      <div css={contentStyles(isCompleted)}>
        {icon}
        <span css={textStyles}>{text}</span>
      </div>
      <RightSmall />
    </button>
  );
}

const buttonStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 12px;
  padding: 28px 0;
  white-space: pre-line;
  background-color: ${theme.palette.white};
  font: ${theme.font.body.body1_600};
  cursor: pointer;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.03);
`;
const contentStyles = (isCompleted: boolean) => css`
  display: flex;
  align-items: center;
  gap: ${!isCompleted ? '12px' : '14px'};
`;

const textStyles = css`
  text-align: left;
  color: ${theme.palette.greyscale.grey50};
`;

export default LunchCalendarWriteBtn;
