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

function LunchCalendarMain() {
  const [isCompleted] = useState(false);
  const { nextComponent } = usePagesStore();
  const router = useRouter();
  const { title, subTitle } = CALENDAR_CONTENT;

  const onClickHeaderHandler = () => {
    router.back();
  };

  const onClickButtonHandler = () => {
    router.push('/lunch/write');
  };

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
