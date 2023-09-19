import { useRef, useState } from 'react';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
import LunchWriteButton from '@/components/lunch/LunchWriteButton';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import CalendarSearch from '@/components/lunch/calendar/LunchCalendarSearch';
import LunchCalendarForm from '@/components/lunch/calendar/LunchCalendarForm';
import { Rice } from '@/assets/icons';
import LunchCalendarMenu from '@/components/lunch/calendar/LunchCalendarMenu';
import LunchSelectButton from '@/components/lunch/LunchSelectButton';
import LunchRatingButton from '@/components/lunch/LunchRatingButton';
import LunchCalendarRating from '@/components/lunch/calendar/LunchCalendarEatOut';
import LunchCalendarReview from '@/components/lunch/calendar/LunchCalendarReview';

function LunchCalendarMain() {
  const [isCompleted, setIsCompleted] = useState(false);
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const { title, subTitle, button } = CALENDAR_CONTENT;

  const onClickHandler = () => {
    console.log('Header clicked');
    setIsCompleted((pre) => !pre);
  };

  return (
    <section>
      {/* 테스트용 UI (추후 정리 예정) */}
      <Header title={title.main} onClick={onClickHandler} />
      <div css={subTitleStyles}>
        <Rice />
        <LunchSubTitle userName="현수" title={subTitle.calendar} type="title" />
      </div>
      <LunchCalendarForm />
      <LunchWriteButton isCompleted={isCompleted} />
      <Button content={button.button3.text} variant="blue" />
      <CalendarSearch />
      <LunchCalendarMenu />
      <LunchSelectButton text="외식" onClick={onClickHandler} />
      <LunchSelectButton text="구내식당" onClick={onClickHandler} />
      <LunchRatingButton
        title="맛있오"
        onClick={onClickHandler}
        isChecked={isCompleted}
      />
      <LunchRatingButton
        title="맛없오"
        onClick={onClickHandler}
        isChecked={isCompleted}
      />
      <input type="checkbox" ref={checkboxRef} name="rating" />
      <input type="checkbox" ref={checkboxRef} name="rating" />
      <LunchCalendarRating />
      <LunchCalendarReview />
    </section>
  );
}

const subTitleStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 16px;
`;

export default LunchCalendarMain;
