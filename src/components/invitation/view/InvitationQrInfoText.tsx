import { InvitationQrInfoTextProps } from '@/types/invitation/view';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

function InvitationQrInfoText({ textInfo }: InvitationQrInfoTextProps) {
  return (
    <div>
      {/* 방문증 메인브랜치에 아이콘을 이미 import 시켜놓아서 임시로 div랑 스타일로 레이아웃만 잡아놓았습니다 */}
      <div css={qrInfoContainerStyles}>
        <div css={iconStyles} /> {textInfo.palce}
      </div>
      <div css={qrInfoContainerStyles}>
        <div css={iconStyles} />
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
  margin: 0 8px;
  width: 24px;
  height: 24px;
  background-color: #fff;
`;
export default InvitationQrInfoText;
