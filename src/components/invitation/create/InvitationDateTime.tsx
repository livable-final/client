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
import useTimeSelectorStore from '@/stores/useTimeSelectorStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import getFormatDate from '@/utils/getFormatDate';
import getCommonTimes from '@/utils/getCommonTimeList';
import parseDate from '@/utils/parseDate';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { addMonths } from 'date-fns';
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { InvitationCreateTexts } from '@/types/invitation/create';
import { getInvitationTimeList } from '@/pages/api/invitation/createRequests';
import { GetInvitationTimeListData } from '@/types/invitation/api';

function InvitationDateTime() {
  const { title, button, error }: InvitationCreateTexts = CREATE_TEXTS;
  const { closeBottomSheet } = useBottomSheetStore();
  const { alertState, openAlert } = useAlertStore();
  const { isOn, onToggle, offToggle } = useToggleStore();
  const { selectTime, clearSelectTime } = useTimeSelectorStore();
  const { createContents, setCreateContents } = useInvitationCreateStore();

  // Thu Oct 26 2023 00:00:00 GMT+0900 (한국 표준시)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  // API 호출 초기 데이터 [{…}, {…}]
  // { date: '2023-10-20', availableTimes: ['12:30:00', '15:00:00', '17:30:00'] }
  const [fetchData, setFetchData] = useState<GetInvitationTimeListData[]>();
  const [commonTimes, setCommonTimes] = useState<string[]>([]);

  useEffect(() => {
    const fetchGetTimeList = async () => {
      try {
        onToggle();
        // 스토어에 저장된 장소ID가 true이고, startDate, endDate가 바뀌었을 때 API 호출
        if (createContents.commonPlaceId && isUpdated) {
          const response = await getInvitationTimeList({
            commonPlaceId: createContents.commonPlaceId,
            startDate: getFormatDate(startDate), // yyyy-mm-dd
            endDate: getFormatDate(endDate), // yyyy-mm-dd
          });
          setFetchData(response?.data);
        }
      } catch (err: unknown) {
        openAlert('🚨', error.timeAPI);
      }
    };
    fetchGetTimeList();
  }, [createContents.commonPlaceId, startDate, endDate, isUpdated]);

  // API호출 응답값인 fetchData가 바뀔 때마다 공통된 시간 출력
  // commonTimes ['15:00', '15:30', '17:00', '17:30']
  useEffect(() => {
    if (fetchData) {
      const common = getCommonTimes(startDate, endDate, fetchData);
      setCommonTimes([...common]);
    }
    // 날짜를 다시 지정했으므로 기존 선택했던 시간 배열 초기화
    clearSelectTime();
  }, [fetchData]);

  // commonTimes.Length(가능한 시간)에 따라 종일 활성화 여부
  // 가능한 시간이 18개(09~18시)가 아닌 경우에는 토글 off하여 시간 선택 유도
  useEffect(() => {
    if (commonTimes.length !== 18) {
      // 타임 셀렉터 렌더링 이슈로 임시 setTimeout 함수 지정
      setTimeout(() => offToggle(), 200);
    } else {
      onToggle();
    }
  }, [commonTimes]);

  // startDate나 endDate가 변경될 때 isUpdated === true
  useEffect(() => {
    if (startDate && endDate) {
      setIsUpdated(true);
    }
  }, [startDate, endDate]);

  // 달력 선택 핸들러
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
    setIsUpdated(false);
  };

  // 완료 버튼 눌렀을 때 날짜, 시간 저장
  const onClick = () => {
    if (isOn) {
      // 토글 버튼 활성화 = 종일 상태일 때 (09:00 ~ 18:00 고정)
      setCreateContents('startDate', `${getFormatDate(startDate)}T09:00:00`);
      setCreateContents('endDate', `${getFormatDate(endDate)}T18:00:00`);
    } else {
      // 토글 버튼 비활성화 = 시간 선택했을 때
      setCreateContents(
        'startDate',
        `${getFormatDate(startDate)}T${selectTime[0]}:00`, // TimeSelector를 순서대로 누르지 않았을 경우 대비 정렬
      );
      setCreateContents(
        'endDate',
        `${getFormatDate(endDate)}T${parseDate(
          selectTime[selectTime.length - 1] as string,
        )}:00`,
      );
    }

    closeBottomSheet();
  };

  return (
    <div css={containerStyles}>
      <div css={dateContainerStyles}>
        <div css={titleStyles}>{title.invitationDate}</div>
        <div css={calendarStyles}>
          <DatePicker
            locale={ko}
            dateFormat="yyyy-mm-dd"
            dateFormatCalendar="yyyy.MM" // 데이트픽커 현재달 표기 포맷 (2023.10)
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
        <InvitationSelectTime commonTimes={commonTimes} />
      </div>
      <div css={buttonWrapperStyles}>
        <Button content={button.done} variant="blue" onClick={onClick} />
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
  background-image: linear-gradient(
    to top,
    ${theme.palette.white} 70%,
    transparent 30%
  );

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
        border-radius: 50%;
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
      }
      .react-datepicker__day--in-range {
        // startDate ~ endDate 범위 스타일
        border-radius: 50%;
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
      }
      .react-datepicker__day--in-selecting-range {
        border-radius: 50%;
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
      }
      .react-datepicker__day--in-selecting-range:not(
          .react-datepicker__day--in-range,
          .react-datepicker__month-text--in-range,
          .react-datepicker__quarter-text--in-range,
          .react-datepicker__year-text--in-range,

        ) {
        // startDate 선택 후 endDate까지의 range 스타일
        border-radius: 50%;
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
      width: 32px;
      height: 32px;
      color: ${theme.palette.greyscale.grey70};

      &:hover {
        border-radius: 50%;
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
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
