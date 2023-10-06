import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { getReviewDetailsData } from '@/pages/api/lunch/calendarRequests';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Alert from '@/components/common/Alert';
import LunchCalendarWriteBtn from '@/components/lunch/calendar/LunchCalendarWriteBtn';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchCalendarForm from '@/components/lunch/calendar/LunchCalendarForm';
import LunchCalendarDetailsSlide from '@/components/lunch/calendar/LunchCalendarDetailsSlide';
import useLunchWriteStore from '@/stores/lunch/useLunchWriteStore';
import useAlertStore from '@/stores/common/useAlertStore';
import { ErrorProps } from '@/types/common/response';
import checkTodayReview from '@/utils/checkTodayReview';
import useUserStore from '@/stores/common/useUserStore';

function LunchCalendarMain() {
  const [isCompleted, setIsCompleted] = useState(false);
  const isChecked = useLunchWriteStore((state) => state.isChecked);
  const { alertState, openAlert } = useAlertStore();
  const memberName = useUserStore((state) => state.memberName);

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
    <section css={pageStyles}>
      {alertState.isOpen && <Alert />}
      {isChecked && <LunchCalendarDetailsSlide />}
      <div css={contentStyles}>
        <Header title={title.main} onClick={onClickHeaderHandler} />
        <div css={subTitleStyles}>
          <LunchSubTitle
            userName={memberName}
            title={subTitle.calendar}
            type="title"
          />
        </div>
        <LunchCalendarForm />
      </div>
      <LunchCalendarWriteBtn
        isCompleted={isCompleted}
        onClick={!isCompleted ? onClickWriteBtnHandler : onClickPointBtnHandler}
      />
    </section>
  );
}

const pageStyles = css`
  margin: 0 -16px;
  height: 100vh;
  background-color: ${theme.palette.greyscale.grey5};
`;

const contentStyles = css`
  padding: 0 16px;
  background-color: ${theme.palette.white};
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.03);
`;

const subTitleStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 16px;
  background-color: ${theme.palette.white};
`;

export default LunchCalendarMain;
