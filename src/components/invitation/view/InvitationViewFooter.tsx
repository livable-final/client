import theme from '@/styles/theme';
import { css } from '@emotion/react';

function InvitationViewFooter() {
  return (
    <div css={invitationViewFooter}>
      <div css={footerTitleStyles}>(주)리버블</div>
      <div css={infoStyles}>
        <span>고객센터 : 1833-9092</span>
        <span>사이트 : https://www.officener.com</span>
      </div>
      <button type="button" css={buttonStyles}>
        관리실 문의하기
      </button>
    </div>
  );
}
const invitationViewFooter = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 16px 40px;
  position: absolute;
  left: -16px;
  right: -16px;
  max-width: 1024px;
  height: 165px;
  background-color: ${theme.palette.greyscale.grey10};
  color: ${theme.palette.greyscale.grey50};
  line-height: 21px;
`;
const footerTitleStyles = css`
  font: ${theme.font.body.body3_500};
  margin-bottom: 4px;
`;
const infoStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
  font: ${theme.font.body.body3_400};
`;
const buttonStyles = css`
  display: flex;
  min-width: 100px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font: ${theme.font.body.body3_500};
  color: ${theme.palette.white};
  background-color: ${theme.palette.greyscale.grey30};
`;
export default InvitationViewFooter;
