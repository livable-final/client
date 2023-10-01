import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import Toggle from '@/components/common/Toggle';
import Button from '@/components/common/Button';
import Alert from '@/components/common/Alert';
import InvitationSelectTime from '@/components/invitation/create/InvitationSelectTime';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useAlertStore from '@/stores/useAlertStore';
import useToggleStore from '@/stores/useToggleStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import getFormatDate from '@/utils/getFormatDate';
import getCommonTimes from '@/utils/getCommonTimeList';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { addMonths } from 'date-fns';
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { InvitationCreateTexts } from '@/types/invitation/create';
import { getInvitationTimeList } from '@/pages/api/invitation/createRequests';

function InvitationDateTime() {
  const { title, button }: InvitationCreateTexts = CREATE_TEXTS;
  const { closeBottomSheet } = useBottomSheetStore();
  const { alertState, openAlert } = useAlertStore();
  const { isOn } = useToggleStore();
  const { createContents } = useInvitationCreateStore();

  // Thu Oct 26 2023 00:00:00 GMT+0900 (한국 표준시)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  // API 호출 초기 데이터 [{…}, {…}]
  // { date: '2023-10-20', availableTimes: ['12:30:00', '15:00:00', '17:30:00'] }
  const [fetchData, setFetchData] = useState([]);
  const [commonTimes, setCommonTimes] = useState<string[]>([]);

  useEffect(() => {
    const fetchGetTimeList = async () => {
      try {
        const response = await getInvitationTimeList({
          commonPlaceId: createContents.commonPlaceId,
          startDate: getFormatDate(startDate), // yyyy-mm-dd
          endDate: getFormatDate(endDate), // yyyy-mm-dd
        });
        console.log(response.data);
        setFetchData(response.data);
      } catch (error) {
        openAlert('ERROR!', '예약 가능 시간 API에 문제가 생겼습니다.');
      }
    };
    fetchGetTimeList();
  }, [createContents.commonPlaceId, startDate, endDate, openAlert]);

  useEffect(() => {
    // 기존 fetchData 데이터를 날짜순으로 정렬
    // sorted : [{…}, {…}]
    // { date: '2023-10-20', availableTimes: ['12:30:00', '15:00:00', '17:30:00'] }
    if (fetchData[0]) {
      // const sorted = [...fetchData].sort(
      //   (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      // );
      // console.log(sorted);

      // 기존 fetchData 중에서 공통된 시간만 출력
      // ['15:00:00', '15:30:00', '17:00:00', '17:30:00']
      const common = getCommonTimes(fetchData);
      setCommonTimes(common);
    }
  }, [fetchData]);

  // 달력 선택 핸들러
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
            dateFormatCalendar="yyyy.MM"
            calendarClassName="calendar"
            onChange={onChange}
            minDate={new Date()}
            maxDate={addMonths(new Date(), 2)} // 현재일부터 두달 뒤까지 선택 가능
            startDate={startDate}
            endDate={endDate}
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
        {!isOn && <InvitationSelectTime commonTimes={commonTimes} />}
      </div>
      <div css={buttonWrapperStyles}>
        <Button
          content={button.done}
          variant="blue"
          onClick={() => closeBottomSheet()}
        />
      </div>
      {alertState.isOpen && <Alert />}
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
  width: 100%;
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
  display: flex;
  justify-content: center;

  .calendar {
    width: 90vw;
    max-width: 990px;
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
      justify-content: center;
      gap: 10px;
      width: 100%;
      padding-bottom: 16px;
      border-bottom: 1px solid ${theme.palette.greyscale.grey10};
      margin-bottom: 16px;
      background-color: ${theme.palette.white};

      .react-datepicker__current-month {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.palette.greyscale.grey90};
        font: ${theme.font.title.title2_600};
        line-height: 29px;
      }
      .react-datepicker__day-names {
        display: flex;
        justify-content: space-around;
      }
    }

    // 좌우 화살표
    .react-datepicker__navigation {
      position: absolute;
      top: 8px;
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

      .react-datepicker__day--keyboard-selected {
        // endDate + 각 달의 같은 날짜
        border-radius: 45%;
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
      }
      .react-datepicker__day--in-range {
        // startDate ~ endDate 범위 스타일
        border-radius: 45%;
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
      }
      .react-datepicker__day--in-selecting-range {
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
        border-radius: 45%;
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
      .react-datepicker__day--disabled {
        color: ${theme.palette.greyscale.grey30};
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
        /* opacity: 0.3; */
      }
    }
    // 날짜를 선택했을 때 현재일 스타일 (선택 전에는 적용X)
    .react-datepicker__day--today {
      color: ${theme.palette.primary};
    }
    .react-datepicker__month-text--today {
      color: ${theme.palette.primary};
    }
  }
`;
export default InvitationDateTime;
