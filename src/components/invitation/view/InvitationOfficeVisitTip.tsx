import theme from '@/styles/theme';
import { InvitationVisitTipProps } from '@/types/invitation/view';
import { css } from '@emotion/react';

function InvitationVisitTip({ invitationTip }: InvitationVisitTipProps) {
  const VisitTipText = invitationTip;

  return (
    <div>
      <p>방문 TIP</p>
      <p css={VisitTipTextStyles}>{VisitTipText}</p>
    </div>
  );
}

const VisitTipTextStyles = css`
  margin-top: 5px;
  padding: 14px 24px;
  background-color: ${theme.palette.greyscale.grey5};
  border-radius: 16px;
  font: ${theme.font.body.body2_400};
  color: ${theme.palette.greyscale.grey50};
`;

export default InvitationVisitTip;
