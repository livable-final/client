import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { Smile, Confused } from '@/assets/icons';
import { LunchRatingButtonProps } from '@/types/lunch/calendar';
import { useState } from 'react';

function LunchRatingButton({ title }: LunchRatingButtonProps) {
  const { button } = CALENDAR_CONTENT;
  const [isChecked, setIsChecked] = useState(false);

  const onClickHandler = () => {
    setIsChecked(!isChecked);
  };
  let icon;

  switch (title) {
    case button.button5.good:
      icon = <Smile />;
      break;
    case button.button5.bad:
      icon = <Confused />;
      break;
    default:
      break;
  }
  return (
    <button type="button" css={buttonStyles} onClick={onClickHandler}>
      <div css={iconStyles(isChecked)}>{icon}</div>
      <p>{title}</p>
    </button>
  );
}

const buttonStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  padding: 16px 0;
  border-radius: 16px;
  border: 1px solid ${theme.palette.greyscale.grey10};
  background-color: ${theme.palette.greyscale.grey5};
  color: ${theme.palette.greyscale.grey50};
  font: ${theme.font.body.body1_500};

  // 추후 애니메이션 수정
  &:active {
    border: 2px solid ${theme.palette.orange};
    background-color: ${theme.palette.white};
    color: ${theme.palette.orange};

    svg {
      filter: none;
      transform: scale(1.2);
      transition: transform 0.2s ease;
    }
  }
`;

const iconStyles = (isChecked: boolean) => css`
  margin-bottom: 4px;

  svg {
    filter: ${isChecked ? `saturate(5%)` : `none`};
  }
`;

export default LunchRatingButton;
