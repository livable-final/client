import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchSelectButton from '@/components/lunch/LunchSelectButton';

function LunchCalendarReview() {
  const { title, subTitle, category, button } = CALENDAR_CONTENT;
  const onClickHeaderHandler = () => {};

  const onClickButtonHandler = () => {};
  return (
    <section>
      <Header title={title.review} onClick={onClickHeaderHandler} />
      <LunchSubTitle title={subTitle.mealStyle} type="subTitle" />
      <div css={buttonListStyles}>
        <LunchSelectButton
          text={category.eatOut.text}
          onClick={onClickButtonHandler}
        />
        <LunchSelectButton
          text={category.cafeteria.text}
          onClick={onClickButtonHandler}
        />
        <LunchSelectButton
          text={category.lunchBox.text}
          onClick={onClickButtonHandler}
        />
      </div>
      <Button variant="blue" content={button.button3.text} />
    </section>
  );
}

const buttonListStyles = css`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
  padding: 0 20px;
`;

export default LunchCalendarReview;
