import { css } from '@emotion/react';
import theme from '@/styles/theme';
import React from 'react';

function InvitationQrInfoCode() {
  return (
    <div css={invitationQrInfoCodeContinerStyle}>
      <div css={codeLabelStyles}>임시출입증</div>
      {/* 큐알 코드  임시 css 적용 */}
      <div css={qrStyles} />
      <div css={alertStyles}>
        초대 시간 전후로 <br /> 1시간 사용할수 있습니다
      </div>
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
  background-color: #fff;
`;
const alertStyles = css`
  width: 182px;
  text-align: center;
  font: ${theme.font.body.body2_400};
  line-height: 22px;
`;

export default InvitationQrInfoCode;
