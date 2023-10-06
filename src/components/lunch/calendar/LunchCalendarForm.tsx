import { useEffect, useState } from 'react';
import theme from '@/styles/theme';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import { css } from '@emotion/react';
import { RightSmall, LeftSmall } from '@/assets/icons';
import useLunchCalendarStore from '@/stores/lunch/useLunchCalendarStore';
import useAlertStore from '@/stores/common/useAlertStore';
import LunchCalendarDate from '@/components/lunch/calendar/LunchCalendarDate';
import { getReviewDetailsData } from '@/pages/api/lunch/calendarRequests';
import { ErrorProps } from '@/types/common/response';

function LunchCalendarForm() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const { setReviewDetails } = useLunchCalendarStore();
  const { openAlert } = useAlertStore();

  useEffect(() => {
    getCalendarDetailsData(year, month);
  }, []);

  const onActiveStartDateChangeHandler = async (
    activeStartDate: Date | null,
  ) => {
    if (!activeStartDate) return;

    const activeYear = new Date(activeStartDate).getFullYear();
    const activeMonth = new Date(activeStartDate).getMonth() + 1;
    setYear(activeYear);
    setMonth(activeMonth);
    getCalendarDetailsData(activeYear, activeMonth);
  };

  const getCalendarDetailsData = async (
    activeYear: number,
    activeMonth: number,
  ) => {
    try {
      const { data } = await getReviewDetailsData(activeYear, activeMonth);
      setReviewDetails(data);
    } catch (err) {
      const error = err as ErrorProps;
      openAlert('📢', error.message || '오류 발생');
    }
  };

  return (
    <Calendar
      defaultValue={new Date()}
      onActiveStartDateChange={({
        activeStartDate,
      }: {
        activeStartDate: Date | null;
      }) => onActiveStartDateChangeHandler(activeStartDate)}
      css={CalendarStyles}
      tileContent={LunchCalendarDate}
      locale="ko-KR"
      calendarType="gregory"
      formatDay={(_: unknown, date: Date) => dayjs(date).format('D')}
      prev2Label={null}
      next2Label={null}
      showNeighboringMonth={false}
      prevLabel={<LeftSmall />}
      nextLabel={<RightSmall />}
      // maxDate={new Date()}
      view="month"
    />
  );
}

const CalendarStyles = css`
  padding: 12px 0 20px;

  &.react-calendar {
    max-width: 100%;
    background-color: ${theme.palette.white};

  }

  .react-calendar--doubleView {
    width: 700px;

  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;

  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;

  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: ${theme.palette.white};
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation__label__labelText {
font: ${theme.font.subTitle.subTitle2_500};
color: ${theme.palette.greyscale.grey60};
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }

  .react-calendar__navigation button:disabled {

  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {

  }

  // 요일 section
  .react-calendar__month-view__weekdays {
    text-align: center;

    abbr {
      text-decoration: none;
      font: ${theme.font.body.body2_500};
      color: ${theme.palette.greyscale.grey50};
    }
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }

  // 토, 일 day 색상
  .react-calendar__month-view__days__day--weekend {
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: red;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  // day-tile
  .react-calendar__tile {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 100%;
    padding: 10px 0;
    text-align: center;
    line-height: 21px;
    font: ${theme.font.body.body3_400};
    // 사진이 있을 때 글자색 white로 설정하기

    abbr {
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      pointer-events: none; /* 이벤트를 이미지 아래로 전달 */
      color: ${theme.palette.greyscale.grey50};
      @media (max-width: 320px) {
        //사진이 없을 때만 설정하기
        margin-left: 3px;
      }
    }
  }

  .react-calendar__tile:disabled {
      color: ${theme.palette.greyscale.grey40};
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {

  }
  // 오늘 날짜
  .react-calendar__tile--now {
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {

  }

  .react-calendar__tile--hasActive {
    background: #76baff;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {

  }
  // 선택한 날짜
  .react-calendar__tile--active {

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {

  }

  .react-calendar--selectRange .react-calendar__tile--hover {

  }

  // 네비게이션 레이블 - button 태그
  .react-calendar__navigation__label {

  }
  // 네비게이션 레이블 - span 태그
  .react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from {
    color: ${theme.palette.greyscale.grey60};
    font: ${theme.font.subTitle.subTitle2_500};
  }
`;
export default LunchCalendarForm;
