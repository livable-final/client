import theme from '@/styles/theme';
import Calendar from 'react-calendar';
import Image from 'next/image';
import dayjs from 'dayjs';
import { css } from '@emotion/react';
import {
  RightSmall,
  LeftSmall,
  DateDish,
  DateDishNoPhoto,
} from '@/assets/icons';
import { DateDishPhotoProps } from '@/types/lunch/calendar';
import { useEffect, useState } from 'react';
import usePagesStore from '@/stores/usePagesStore';

function LunchCalendarForm() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const { setNextComponent } = usePagesStore();

  useEffect(() => {
    /// api/reviews/members?year=${year}&month=${month} 호출
    // 응답데이터를 전역 상태 관리해야 할 듯
    // 만약 상세데이터를 한번에 못 받는다면, 날짜 클릭 시 해당 id와 type를 받아서 전역 상태 관리한 후에 캐러셀 클릭 시 api 호출하도록 해야 한다.
  }, [year, month]);

  const onActiveStartDateChangeHandler = (activeStartDate: Date | null) => {
    if (!activeStartDate) return;

    const activeYear = new Date(activeStartDate).getFullYear();
    const activeMonth = new Date(activeStartDate).getMonth() + 1;
    setYear(activeYear);
    setMonth(activeMonth);
  };

  const onClickDayHandler = () => {
    setNextComponent('Slide');
  };

  return (
    <Calendar
      onActiveStartDateChange={({
        activeStartDate,
      }: {
        activeStartDate: Date | null;
      }) => onActiveStartDateChangeHandler(activeStartDate)}
      onClickDay={onClickDayHandler}
      css={CalendarStyles}
      tileContent={CalendarTileContent}
      locale="ko-KR"
      calendarType="gregory"
      formatDay={(_: unknown, date: Date) => dayjs(date).format('D')}
      prev2Label={null}
      next2Label={null}
      showNeighboringMonth={false}
      prevLabel={<LeftSmall />}
      nextLabel={<RightSmall />}
      view="month"
    />
  );
}

function CalendarTileContent({ date, view }: { date: Date; view: string }) {
  // 더미데이터
  const reviewDate = {
    data: [
      {
        reviewId: 1,
        type: 'RESTAURANT',
        reviewImageUrl: '',
        reviewDate: '2023-10-07',
      },
      {
        reviewId: 2,
        type: 'RESTAURANT',
        reviewImageUrl: '../../../assets/ruppy.png',
        reviewDate: '2023-10-09',
      },
      {
        reviewId: 3,
        type: 'LUNCHBOX',
        reviewImageUrl: '../../../assets/ruppy.png',
        reviewDate: '2023-10-11',
      },
      {
        reviewId: 5,
        type: 'CAFETERIA',
        reviewImageUrl: '',
        reviewDate: '2023-10-15',
      },
      {
        reviewId: 9,
        type: 'RESTAURANT',
        reviewImageUrl: '../../../assets/ruppy.png',
        reviewDate: '2023-10-21',
      },
      {
        reviewId: 11,
        type: 'CAFETERIA',
        reviewImageUrl: '../../../assets/ruppy.png',
        reviewDate: '2023-10-25',
      },
      {
        reviewId: 15,
        type: 'LUNCHBOX',
        reviewImageUrl: '',
        reviewDate: '2023-10-30',
      },
    ],
  };

  if (
    view === 'month' &&
    reviewDate?.data.find(
      (value) => value.reviewDate === dayjs(date).format('YYYY-MM-DD'),
    )
  ) {
    const filteredDate = dayjs(date).format('YYYY-MM-DD');
    const todayReviewData = reviewDate.data.filter(
      (value) => value.reviewDate === filteredDate,
    );
    return <DateDishPhoto reviewData={todayReviewData} />;
  }
  return <DateDish />;
}

function DateDishPhoto({ reviewData }: DateDishPhotoProps) {
  const myReviewDate = [...reviewData];

  if (!myReviewDate[0].reviewImageUrl) return <DateDishNoPhoto />;

  return (
    <Image
      width={44}
      height={44}
      src={myReviewDate[0].reviewImageUrl}
      alt="test"
      css={ImageStyles}
    />
  );
}

const ImageStyles = css`
  object-fit: cover;
  border-radius: 100px;
  border: 2.4px solid #e2e2e2;
  box-sizing: border-box;
`;

const CalendarStyles = css`
  margin: 12px 0 20px;

  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;

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

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
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
    color: ${theme.palette.greyscale.grey50};
    abbr {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @media (max-width: 320px) {
        //사진이 없을 때만 설정하기
        margin-left: 4px;
      }
    }
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  // 오늘 날짜
  .react-calendar__tile--now {
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }

  .react-calendar__tile--hasActive {
    background: #76baff;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  // 선택한 날짜
  .react-calendar__tile--active {

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }

  // 네비게이션 레이블 - button 태그
  .react-calendar__navigation__label {
    pointer-events: none;
  }
  // 네비게이션 레이블 - span 태그
  .react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from {
    color: ${theme.palette.greyscale.grey60};
    font: ${theme.font.subTitle.subTitle2_500};
  }
`;
export default LunchCalendarForm;
