import { css } from '@emotion/react';
import theme from '@/styles/theme';
import React from 'react';
import useFetch from '@/hooks/useFetch';
import Image from 'next/image';
import { getVisitationQr } from '@/pages/api/invitation/viewRequests';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';

function InvitationQrInfoCode() {
  const { qr } = INVITATION_VEIW_INFO_TEXTS;
  const { response } = useFetch({
    fetchFn: getVisitationQr,
  });
  const qrData = response?.data;

  return (
    <div css={invitationQrInfoCodeContinerStyle}>
      <div css={codeLabelStyles}>{qr.title}</div>
      <div css={qrStyles}>
        <Image
          src={`data:image/png;base64,${qrData?.qr}`}
          alt={qr.title}
          width={163}
          height={163}
        />
      </div>
      <div css={alertStyles}>{qr.body}</div>
    </div>
  );
}
const invitationQrInfoCodeContinerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 34px auto;
  color: ${theme.palette.white};
`;
const codeLabelStyles = css`
  font: ${theme.font.subTitle.subTitle1_600};
  color: ${theme.palette.white};
`;
const qrStyles = css`
  margin: 18px auto;
  width: 163px;
  height: 163px;
`;

const alertStyles = css`
  width: 182px;
  text-align: center;
  font: ${theme.font.body.body2_400};
  line-height: 22px;
`;

export default InvitationQrInfoCode;
