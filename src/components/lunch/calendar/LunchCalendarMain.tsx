import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { Rice } from '@/assets/icons';
import { getReviewDetailsData } from '@/pages/api/lunch/calendarRequests';
import Header from '@/components/common/Header';
import Alert from '@/components/common/Alert';
import LunchCalendarWriteBtn from '@/components/lunch/calendar/LunchCalendarWriteBtn';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchCalendarForm from '@/components/lunch/calendar/LunchCalendarForm';
import LunchCalendarDetailsSlide from '@/components/lunch/calendar/LunchCalendarDetailsSlide';
import useWriteStore from '@/stores/useWriteStore';
import useAlertStore from '@/stores/useAlertStore';
import { ErrorProps } from '@/types/common/response';
import checkTodayReview from '@/utils/checkTodayReview';

function LunchCalendarMain() {
  const [isCompleted, setIsCompleted] = useState(false);
  const isChecked = useWriteStore((state) => state.isChecked);
  const { alertState, openAlert } = useAlertStore();

  const { title, subTitle } = CALENDAR_CONTENT;

  const router = useRouter();

  useEffect(() => {
    checkReviews();
  }, []);

  const checkReviews = async () => {
    try {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const { data } = await getReviewDetailsData(year, month);
      const res = checkTodayReview(data);
      setIsCompleted(res);
    } catch (err) {
      const error = err as ErrorProps;
      openAlert('📢', error.message || '리뷰 체크 오류');
    }
  };

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
