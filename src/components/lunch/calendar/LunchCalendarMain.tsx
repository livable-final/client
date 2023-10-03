import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { Rice } from '@/assets/icons';
import Header from '@/components/common/Header';
import Alert from '@/components/common/Alert';
import LunchCalendarWriteBtn from '@/components/lunch/calendar/LunchCalendarWriteBtn';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchCalendarForm from '@/components/lunch/calendar/LunchCalendarForm';
import LunchCalendarDetailsSlide from '@/components/lunch/calendar/LunchCalendarDetailsSlide';
import useWriteStore from '@/stores/useWriteStore';
import useAlertStore from '@/stores/useAlertStore';
import useCalendarStore from '@/stores/useCalendarStore';
import checkTodayReview from '@/utils/checkTodayReview';

function LunchCalendarMain() {
  const [isCompleted, setIsCompleted] = useState(false);
  const isChecked = useWriteStore((state) => state.isChecked);
  const reviewDetails = useCalendarStore((state) => state.reviewDetails);
  const { alertState } = useAlertStore();

  const { title, subTitle } = CALENDAR_CONTENT;

  const router = useRouter();

  useEffect(() => {
    const res = checkTodayReview(reviewDetails);
    setIsCompleted(res);
  }, [reviewDetails]);

  const onClickHeaderHandler = () => {
    router.back();
  };

  const onClickWriteBtnHandler = () => {
    router.push('/lunch/write');
  };
  const onClickPointBtnHandler = () => {
    router.push('/lunch/point');
  };

  return (
    <section>
      {alertState.isOpen && <Alert />}
      {isChecked && <LunchCalendarDetailsSlide />}
      <Header title={title.main} onClick={onClickHeaderHandler} />
      <div css={subTitleStyles}>
        <Rice />
        <LunchSubTitle userName="현수" title={subTitle.calendar} type="title" />
      </div>
      <LunchCalendarForm />
      <LunchCalendarWriteBtn
        isCompleted={isCompleted}
        onClick={!isCompleted ? onClickWriteBtnHandler : onClickPointBtnHandler}
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
