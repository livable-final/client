import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { Rice } from '@/assets/icons';
import Header from '@/components/common/Header';
import LunchCalendarWriteBtn from '@/components/lunch/calendar/LunchCalendarWriteBtn';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchCalendarForm from '@/components/lunch/calendar/LunchCalendarForm';
import LunchCalendarDetailsSlide from '@/components/lunch/calendar/LunchCalendarDetailsSlide';
import usePagesStore from '@/stores/usePagesStore';
import LunchCalendarReview from '@/components/lunch/calendar/LunchCalendarReview';
import LunchCalendarSearch from '@/components/lunch/calendar/LunchCalendarSearch';
import LunchCalendarLunchBox from '@/components/lunch/calendar/LunchCalendarLunchBox';
import LunchCalendarCafeteria from '@/components/lunch/calendar/LunchCalendarCafeteria';

function LunchCalendarMain() {
  const [isCompleted] = useState(false);
  const { nextComponent, setNextComponent } = usePagesStore();
  const router = useRouter();
  const { title, subTitle } = CALENDAR_CONTENT;

  const onClickHeaderHandler = () => {
    router.back();
  };

  const onClickButtonHandler = () => {
    setNextComponent('LunchCalendarReview');
  };

  if (nextComponent === 'LunchCalendarReview') {
    return <LunchCalendarReview />;
  }
  if (nextComponent === 'LunchCalendarSearch') {
    return <LunchCalendarSearch />;
  }
  if (nextComponent === 'LunchCalendarCafeteria') {
    return <LunchCalendarCafeteria />;
  }
  if (nextComponent === 'LunchCalendarLunchBox') {
    return <LunchCalendarLunchBox />;
  }

  return (
    <section>
      {nextComponent === 'Slide' && <LunchCalendarDetailsSlide />}
      <Header title={title.main} onClick={onClickHeaderHandler} />
      <div css={subTitleStyles}>
        <Rice />
        <LunchSubTitle userName="현수" title={subTitle.calendar} type="title" />
      </div>
      <LunchCalendarForm />
      <LunchCalendarWriteBtn
        isCompleted={isCompleted}
        onClick={onClickButtonHandler}
      />
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
