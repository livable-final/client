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
  const taste = useWriteStore((state) => state.ratingState.taste);
  const setRatingState = useWriteStore((state) => state.setRatingState);
  const { button } = CALENDAR_CONTENT;
  const { lunch } = COMMON_ICON_NAMES;

  const onClickGoodHandler = () => {
    setIsGoodChecked(!isGoodChecked);
    setRatingState({ taste: 'GOOD' });
    console.log(taste);
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

  console.log(taste);
  return (
    <button
      type="button"
      css={buttonStyles}
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
      transition: transform 0.1s ease;
    }
  }
`;

const iconStyles = (isChecked: boolean) => css`
  margin-bottom: 4px;

  svg {
    filter: ${isChecked ? `saturate(5%)` : `none`};
  }
`;

export default LunchCalendarRatingBtn;
