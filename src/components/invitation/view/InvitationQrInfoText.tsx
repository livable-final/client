import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { InvitationQrInfoTextProps } from '@/types/invitation/view';
import { LocationFill, CalendarFill } from '@/assets/icons';

function InvitationQrInfoText({ textInfo }: InvitationQrInfoTextProps) {
  return (
    <div>
      <div css={qrInfoContainerStyles}>
        <div css={iconStyles} /> <LocationFill />
        <div>{textInfo.place}</div>
      </div>
      <div css={qrInfoContainerStyles}>
        <div css={iconStyles} />
        <CalendarFill />
        <div>
          <div>{textInfo.date}</div>
          <div css={qrInfoTimeStyles}>{textInfo.time}</div>
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
`;
const iconStyles = css`
  display: flex;
  flex-direction: row;
`;
export default InvitationQrInfoText;
