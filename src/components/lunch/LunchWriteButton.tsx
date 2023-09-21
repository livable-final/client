import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { RightSmall, Gift, Plate } from '@/assets/icons';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { LunchWriteButtonProps } from '@/types/lunch/calendar';

function LunchWriteButton({ isCompleted, onClick }: LunchWriteButtonProps) {
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
      <div css={contentStyles}>
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
  padding: 28px 0;
  white-space: pre-line;
  backgorund-color: ${theme.palette.white}
  font: ${theme.font.body.body1_600};
  cursor: pointer;
`;
const contentStyles = css`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const textStyles = css`
  text-align: left;
`;

export default LunchWriteButton;
