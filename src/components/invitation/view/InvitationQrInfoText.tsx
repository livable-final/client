import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { InvitationQrInfoTextProps } from '@/types/invitation/view';
import { LocationFill, CalendarFill } from '@/assets/icons';

function InvitationQrInfoText({ data }: InvitationQrInfoTextProps) {
  // 시간 포멧 변환
  // const startTime = data?.invitationStartTime.substring(0, 5);
  // const endTime = data?.invitationEndTime.substring(0, 5);

  // 날짜 포멧 변환
  // const changeDatefometer = (date: string) => {
  //   const [year, month, day] = data && date.split('-');
  //   const changedDate = `${year}.${month}.${day}`;
  //   return changedDate;
  // };
  // const startDate = changeDatefometer(data.invitationStartDate);
  // const endDate = changeDatefometer(data.invitationEndDate).substring(5, 10);
  return (
    <div>
      <div css={qrInfoContainerStyles}>
        <div css={iconStyles} /> <LocationFill />
        <div>{data.invitationOfficeName}</div>
      </div>
      <div css={qrInfoContainerStyles}>
        <div css={iconStyles} />
        <CalendarFill />
        <div>
          <div>
            {/* {startDate} ~ {endDate} */}
            2023.10.10
          </div>
          <div css={qrInfoTimeStyles}>
            {/* {startTime} ~ {endTime} */}
            10:00 ~ 12:00
          </div>
        </div>
      </div>
    </div>
  );
}

const qrInfoContainerStyles = css`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  gap: 4px;
  align-items: center;
  font: ${theme.font.body.body1_400};
  color: ${theme.palette.white};
  line-height: 24px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
const qrInfoTimeStyles = css`
  position: absolute;
  justify-content: flex-start;
`;
const iconStyles = css`
  display: flex;
  flex-direction: row;
`;
export default InvitationQrInfoText;
