import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { COMMON_ICON_NAMES } from '@/constants/common';
import { useState } from 'react';
import { LunchCalendarReviewCategoryProps } from '@/types/lunch/calendar';
import Icons from '@/components/common/Icons';
import useWriteStore from '@/stores/useWriteStore';

function LunchCalendarReviewCategory({
  type,
  title,
}: LunchCalendarReviewCategoryProps) {
  const [isChecked, setIsChecked] = useState(false);
  const setRatingState = useWriteStore((state) => state.setRatingState);
  const { button, subCategory } = CALENDAR_CONTENT;
  const { lunch } = COMMON_ICON_NAMES;

  const onClickGoodBtnHandler = () => {
    if (!isChecked) {
      setIsChecked(true);
      if (type === `${subCategory[1].type}`) {
        setRatingState({ amount: 'GOOD' });
      } else if (type === `${subCategory[2].type}`) {
        setRatingState({ speed: 'GOOD' });
      } else if (type === `${subCategory[3].type}`) {
        setRatingState({ service: 'GOOD' });
      }
    } else if (isChecked) {
      setIsChecked(false);
      if (type === `${subCategory[1].type}`) {
        setRatingState({ amount: 'BAD' });
      } else if (type === `${subCategory[2].type}`) {
        setRatingState({ speed: 'BAD' });
      } else if (type === `${subCategory[3].type}`) {
        setRatingState({ service: 'BAD' });
      }
    }
  };

  return (
    <label css={categoryStyles}>
      <span css={titleStyles}>{title}</span>
      <button
        type="button"
        css={buttonStyles(isChecked)}
        onClick={onClickGoodBtnHandler}
      >
        <span>{button.button6.text}</span>
        <Icons icon={lunch.thumbsUp} size="18" />
      </button>
    </label>
  );
}

const categoryStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const titleStyles = css`
  font: ${theme.font.body.body1_500};
  color: ${theme.palette.greyscale.grey60};
`;
const buttonStyles = (isChecked: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 77px;
  height: 33px;
  cursor: pointer;
  border-radius: 100px;
  background-color: ${theme.palette.white};
  span {
    font: ${theme.font.body.body3_500};
    color: ${!isChecked
      ? `${theme.palette.greyscale.grey30};`
      : `${theme.palette.orange}`};
  }

  border: 1px solid
    ${!isChecked
      ? `${theme.palette.greyscale.grey20}`
      : `${theme.palette.orange}`};

  color: ${!isChecked
    ? `${theme.palette.greyscale.grey30};`
    : `${theme.palette.orange}`};
`;

export default LunchCalendarReviewCategory;
