import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import Toggle from '@/components/common/Toggle';
import Button from '@/components/common/Button';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { addMonths } from 'date-fns';
import { css } from '@emotion/react';
import { useState } from 'react';
import InvitationSelectTime from '@/components/invitation/create/InvitationSelectTime';
import useBottomSheetStore from '@/stores/useBottomSheetStore';

function InvitationDateTime() {
  const { title, button } = CREATE_TEXTS;
  const { closeBottomSheet } = useBottomSheetStore();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div css={containerStyles}>
      <div css={dateContainerStyles}>
        <div css={titleStyles}>{title.invitationDate}</div>
        <div css={calendarStyles}>
          <DatePicker
            locale={ko}
            dateFormat="yyyy-mm-dd"
            calendarClassName="calendar"
            onChange={onChange}
            minDate={new Date()}
            maxDate={addMonths(new Date(), 5)}
            startDate={startDate}
            endDate={endDate}
            // 이미 예약된 날짜 비활성화 (사용여부 판단 필요)
            // excludeDateIntervals={}
            selectsRange
            inline
            showDisabledMonthNavigation
          />
        </div>
      </div>
      <div css={timeContainerStyles}>
        <div css={titleStyles}>
          {title.invitationTime}
          <Toggle />
        </div>
        <InvitationSelectTime />
      </div>
      <div css={buttonWrapperStyles}>
        <Button
          content={button.next}
          variant="blue"
          onClick={() => closeBottomSheet()}
        />
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 0 4px 0;
  overflow: scroll;
`;

const dateContainerStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const timeContainerStyles = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const titleStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 20px;
  color: ${theme.palette.title};
  font: ${theme.font.title.title2_500};
  line-height: 29px;
`;

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 280px;
  max-width: 360px;
  padding: 0 20px 20px;
  margin: 0 -6px 0;

  ${mq.md} {
    min-width: 361px;
    max-width: 480px;
  }
  ${mq.lg} {
    min-width: 481px;
    max-width: 640px;
  }
  ${mq.tab} {
    min-width: 641px;
    max-width: 1024px;
  }
`;

// 기본 캘린더 디자인 커스텀
const calendarStyles = css`
  .calendar {
    width: 100%;
    border: transparent;
    font-family: var(--pretendard);
    color: ${theme.palette.greyscale.grey70};

    // 캘린더 전체 컨테이너
    .react-datepicker__month-container {
      float: none;
      width: 100%;
    }
    // 캘린더 헤더 (현재월/요일명)
    .react-datepicker__header {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      padding-bottom: 16px;
      border-bottom: 1px solid ${theme.palette.greyscale.grey10};
      margin-bottom: 16px;
      background-color: ${theme.palette.white};

      .react-datepicker__current-month {
        color: ${theme.palette.greyscale.grey90};
        font: ${theme.font.title.title2_600};
        line-height: 29px;
      }
      .react-datepicker__day-names {
        display: flex;
        justify-content: space-around;
      }
    }
    // 날짜 선택 컨테이너
    .react-datepicker__month {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    // 한 주
    .react-datepicker__week {
      display: flex;
      justify-content: space-around;
      gap: 12px;

      .react-datepicker__day--in-range {
        border-radius: 45%;
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
      }
      .react-datepicker__day--keyboard-selected {
        // 현재일 기준으로 각 달의 같은 날짜 스타일
        border-radius: 45%;
        /* background-color: ${theme.palette.white};
        color: ${theme.palette.greyscale.grey70}; */
      }
      .react-datepicker__day--in-selecting-range:not(
          .react-datepicker__day--in-range,
          .react-datepicker__month-text--in-range,
          .react-datepicker__quarter-text--in-range,
          .react-datepicker__year-text--in-range,

        ) {
        // startDate 선택 후 endDate까지의 range 스타일
        border-radius: 45%;
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
        opacity: 0.8;
      }
    }
    .react-datepicker__day {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 49px;
      height: 32px;
      color: ${theme.palette.greyscale.grey70};

      &:hover {
        border-radius: 45%;
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
        opacity: 0.3;
      }
    }
  }
`;
export default InvitationDateTime;
