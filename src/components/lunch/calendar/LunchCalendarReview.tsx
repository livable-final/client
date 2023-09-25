import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import Header from '@/components/common/Header';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import usePagesStore from '@/stores/usePagesStore';
import LunchCalendarSelectBtn from '@/components/lunch/calendar/LunchCalendarSelectBtn';

function LunchCalendarReview() {
  const { setNextComponent } = usePagesStore();
  const { title, subTitle, category } = CALENDAR_CONTENT;

  const onClickHeaderHandler = () => {
    setNextComponent('');
  };

  return (
    <section>
      <Header title={title.review} onClick={onClickHeaderHandler} />
      <LunchSubTitle title={subTitle.mealStyle} type="subTitle" />
      <div css={buttonListStyles}>
        <LunchCalendarSelectBtn text={category.eatOut.text} />
        <LunchCalendarSelectBtn text={category.cafeteria.text} />
        <LunchCalendarSelectBtn text={category.lunchBox.text} />
      </div>
    </section>
  );
}

const buttonListStyles = css`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
  padding: 0 20px;

  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
  }
`;

export default LunchCalendarReview;
