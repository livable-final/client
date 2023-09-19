import theme from '@/styles/theme';
import { css } from '@emotion/react';

function InvitationVisitTip() {
  // 추후 API값으로 변경예정
  const VisitTipText =
    '1층 우측 계단 앞 엘리베이터를 이용하면 빠르게 올라올 수 있어요!';
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
