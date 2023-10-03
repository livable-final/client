import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import { useState } from 'react';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { COMMON_ICON_NAMES } from '@/constants/common';
import { LunchCalendarRatingBtnProps } from '@/types/lunch/calendar';
import useWriteStore from '@/stores/useWriteStore';

function LunchCalendarRatingBtn({ title }: LunchCalendarRatingBtnProps) {
  const [isGoodChecked, setIsGoodChecked] = useState(false);
  const [isBadChecked, setIsBadChecked] = useState(false);
  const setRatingState = useWriteStore((state) => state.setRatingState);
  const { button } = CALENDAR_CONTENT;
  const { lunch } = COMMON_ICON_NAMES;

  const onClickGoodHandler = () => {
    setIsGoodChecked(!isGoodChecked);
    setRatingState({ taste: 'GOOD' });
  };

  const onClickBadHandler = () => {
    if (!isBadChecked) {
      setIsBadChecked(true);
      setRatingState({ taste: 'BAD' });
    } else if (isBadChecked) {
      setIsBadChecked(false);
      setRatingState({ taste: 'GOOD' });
    }
  };

  return (
    <button
      type="button"
      css={buttonStyles(
        title === `${button.button5[0]}` ? isGoodChecked : isBadChecked,
      )}
      onClick={
        title === `${button.button5[0]}`
          ? onClickGoodHandler
          : onClickBadHandler
      }
    >
      {title === `${button.button5[0]}` ? (
        <div css={iconStyles(isGoodChecked)}>
          <Icons icon={lunch.smile} size="44px" />
        </div>
      ) : (
        <div css={iconStyles(isBadChecked)}>
          <Icons icon={lunch.confused} size="44px" />
        </div>
      )}
      <p>{title}</p>
    </button>
  );
}

const buttonStyles = (isChecked: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  padding: 16px 0;
  border-radius: 16px;
  border: 2px solid
    ${!isChecked
      ? `{theme.palette.greyscale.grey10}`
      : `${theme.palette.orange}`};
  background-color: ${!isChecked
    ? `${theme.palette.greyscale.grey5}`
    : `${theme.palette.white}`};

  p {
    font: ${theme.font.body.body1_500};
    color: ${!isChecked
      ? `${theme.palette.greyscale.grey50}`
      : `${theme.palette.orange}`};
  }

  svg {
    filter: ${isChecked && 'none'};
    transform: ${isChecked && 'scale(1.2)'};
    transition: ${isChecked && 'transform 0.1s ease'};
  }
`;

const iconStyles = (isChecked: boolean) => css`
  margin-bottom: 4px;

  // svg {
  //   filter: ${isChecked ? `saturate(5%)` : `none`};
  // }
`;

export default LunchCalendarRatingBtn;
