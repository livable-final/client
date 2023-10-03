import TimeSelector from '@/components/common/TimeSelector';
import createTimeSlots from '@/utils/createTimeSlots';
import useToggleStore from '@/stores/useToggleStore';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { InvitationSelectTimeProps, TimeSlot } from '@/types/invitation/create';

function InvitationSelectTime({ commonTimes }: InvitationSelectTimeProps) {
  // commonTimes ['15:00', '15:30', '17:00', '17:30']

  const [timeSlot, setTimeSlot] = useState<TimeSlot[][]>([[], []]);

  const { isOn } = useToggleStore();

  useEffect(() => {
    const res = createTimeSlots(JSON.parse(JSON.stringify(commonTimes)));
    setTimeSlot(res);
  }, [commonTimes]);

  return (
    !isOn && (
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
    )
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
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
  gap: 4px;
  align-self: stretch;
  flex-wrap: wrap;
`;

export default InvitationSelectTime;
