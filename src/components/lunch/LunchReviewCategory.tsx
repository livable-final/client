import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { ThumbsUp } from '@/assets/icons';
import { useState } from 'react';
import { LunchReviewCategoryProps } from '@/types/lunch/calendar';

function LunchReviewCategory({ title }: LunchReviewCategoryProps) {
  const [isChecked, setIsChecked] = useState(false);
  const { button } = CALENDAR_CONTENT;

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsChecked((pre) => !pre);
  };

  return (
    <div css={categoryStyles}>
      <span css={titleStyles}>{title}</span>
      <button
        type="button"
        css={buttonStyles(isChecked)}
        onClick={onClickHandler}
      >
        <span>{button.button6.text}</span>
        <ThumbsUp css={iconStyles} />
      </button>
    </div>
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
  font: ${theme.font.body.body3_500};
  border: 1px solid
    ${!isChecked
      ? `${theme.palette.greyscale.grey20}`
      : `${theme.palette.orange}`};

  color: ${!isChecked
    ? `${theme.palette.greyscale.grey40};`
    : `${theme.palette.orange}`};

  path {
    fill: ${isChecked && `${theme.palette.orange}`};
    stroke: ${isChecked && `${theme.palette.orange}`};
  }
`;
const iconStyles = css`
  margin-bottom: 4px;
`;

export default LunchReviewCategory;
