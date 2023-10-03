import TimeSelector from '@/components/common/TimeSelector';
import createTimeSlots from '@/utils/createTimeSlots';
import useToggleStore from '@/stores/useToggleStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { InvitationSelectTimeProps, TimeSlot } from '@/types/invitation/create';
import { BoxGrey, BoxWhite } from '@/assets/icons';

function InvitationSelectTime({ commonTimes }: InvitationSelectTimeProps) {
  // commonTimes
  // ['15:00', '15:30', '17:00', '17:30']

  // [{...오전}, {...오후}]
  const [timeSlot, setTimeSlot] = useState<TimeSlot[][]>([[], []]);

  const { isOn } = useToggleStore();
  const { createContents } = useInvitationCreateStore();
  const { commonPlaceId } = createContents;
  // console.log(commonPlaceId);

  useEffect(() => {
    const res = createTimeSlots(
      JSON.parse(JSON.stringify(commonTimes)),
      commonPlaceId,
    );
    setTimeSlot(res);
  }, [commonTimes]);

  return (
    !isOn && (
      <div css={containerStyles}>
        <div css={selectorContainerStyles}>
          <div css={selectorWrapperStyles}>
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
          <div css={selectorWrapperStyles}>
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
        <div css={availableTextStyles}>
          <div css={boxWrapperStyles}>
            <BoxWhite />
            <span css={able}>선택 가능</span>
          </div>
          <div css={boxWrapperStyles}>
            <BoxGrey />
            <span css={disable}>선택 불가</span>
          </div>
        </div>
      </div>
    )
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const selectorContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const selectorWrapperStyles = css`
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

const availableTextStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const boxWrapperStyles = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const able = css`
  font: ${theme.font.body.body3_500};
  color: ${theme.palette.greyscale.grey50};
`;

const disable = css`
  font: ${theme.font.body.body3_500};
  color: ${theme.palette.greyscale.grey40};
`;

export default InvitationSelectTime;
