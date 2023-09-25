import TimeSelector from '@/components/common/TimeSelector';
import createTimeSlots from '@/utils/createTimeSlots';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function InvitationSelectTime() {
  // 예상 더미 데이터 (ISO 8601 Date 형식)
  const data = {
    startTime: '2023-08-27T12:30:00Z',
    endTime: '2023-08-27T17:30:00Z',
  };

  const timeSlot = createTimeSlots(data.startTime, data.endTime);

  return (
    <div css={containerStyles}>
      <div css={wrapperStyles}>
        <span css={bodyStyles}>오전</span>
        <div css={selectorStyles}>
          {timeSlot[0].map((value) => (
            <TimeSelector
              key={value.time}
              content={value.time}
              status={value.status}
            />
          ))}
        </div>
      </div>
      <div css={wrapperStyles}>
        <span css={bodyStyles}>오후</span>
        <div css={selectorStyles}>
          {timeSlot[1].map((value) => (
            <TimeSelector
              key={value.time}
              content={value.time}
              status={value.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  padding: 0 4px;
  margin-top: 16px; // 임시

  border: 1px solid red;
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const bodyStyles = css`
  font: ${theme.font.body.body1_500};
`;

const selectorStyles = css`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 3px;
  align-self: stretch;
  flex-wrap: wrap;
`;

export default InvitationSelectTime;
