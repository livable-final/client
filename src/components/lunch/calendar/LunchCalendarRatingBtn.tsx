import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import { useState } from 'react';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { COMMON_ICON_NAMES } from '@/constants/common';
import { LunchCalendarRatingBtnProps } from '@/types/lunch/calendar';
import useWriteStore from '@/stores/useWriteStore';

function LunchCalendarRatingBtn({
  title,
  isGood,
  isBad,
  setIsGood,
  setIsBad,
}: LunchCalendarRatingBtnProps) {
  const [isGoodChecked, setIsGoodChecked] = useState(false);
  const [isBadChecked, setIsBadChecked] = useState(false);
  const setRatingState = useWriteStore((state) => state.setRatingState);
  const { button } = CALENDAR_CONTENT;
  const { lunch } = COMMON_ICON_NAMES;

  const onClickGoodHandler = () => {
    if (!isGoodChecked) {
      setIsGoodChecked(true);
      setIsBad(0);
      setIsGood(2);
      setRatingState({ taste: 'GOOD' });
    } else if (isGoodChecked) {
      setIsGoodChecked(false);
      setIsBad(1);
      setIsGood(1);
      setRatingState({ taste: '' });
    }
  };

  const onClickBadHandler = () => {
    if (!isBadChecked) {
      setIsBadChecked(true);
      setIsBad(2);
      setIsGood(0);
      setRatingState({ taste: 'BAD' });
    } else if (isBadChecked) {
      setIsBadChecked(false);
      setIsBad(1);
      setIsGood(1);
      setRatingState({ taste: '' });
    }
  };

  return (
    <button
      type="button"
      css={buttonStyles(title === `${button.button5[0]}` ? isGood : isBad)}
      onClick={
        title === `${button.button5[0]}`
          ? onClickGoodHandler
          : onClickBadHandler
      }
    >
      {title === `${button.button5[0]}` ? (
        <div css={iconStyles}>
          <Icons icon={lunch.smile} size="44px" />
        </div>
      ) : (
        <div css={iconStyles}>
          <Icons icon={lunch.confused} size="44px" />
        </div>
      )}
      <p>{title}</p>
    </button>
  );
}

const buttonStyles = (isChecked: number) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  padding: 16px 0;
  border-radius: 16px;
  border: 2px solid
    ${isChecked === 2
      ? `${theme.palette.orange}`
      : `{theme.palette.greyscale.grey10}`};
  background-color: ${isChecked === 2
    ? `${theme.palette.white}`
    : `${theme.palette.greyscale.grey5}`};

  p {
    font: ${theme.font.body.body1_500};
    color: ${isChecked === 2
      ? `${theme.palette.orange}`
      : `${theme.palette.greyscale.grey50}`};
  }

  svg {
    filter: ${isChecked === 0 ? `saturate(5%)` : 'none'};
    transform: ${isChecked === 2 && 'scale(1.1)'};
    transition: ${isChecked === 2 && 'transform 0.1s ease'};
  }
`;

const iconStyles = () => css`
  margin-bottom: 4px;
`;

export default LunchCalendarRatingBtn;
