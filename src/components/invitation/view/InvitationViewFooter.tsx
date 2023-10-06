import { Call } from '@/assets/icons';
import { css } from '@emotion/react';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';
import theme from '@/styles/theme';

function InvitationViewFooter() {
  const { footer } = INVITATION_VEIW_INFO_TEXTS;
  const onClickCallBtnHandler = () => {
    window.location.href = `tel:${18339092}`;
  };
  return (
    <div css={invitationViewFooter}>
      <div css={footerTitleStyles}>{footer.title}</div>
      <div css={infoStyles}>
        <span>{footer.call}</span>
        <span>{footer.site}</span>
      </div>
      <button type="button" onClick={onClickCallBtnHandler} css={buttonStyles}>
        <div>{footer.btn}</div> <Call />
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
  span {
    font: ${theme.font.body.body3_400};
    line-height: 21px;
  }
`;
const buttonStyles = css`
  display: flex;
  min-width: 100px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 0 4px;
  font: ${theme.font.body.body3_500};
  color: ${theme.palette.white};
  background-color: ${theme.palette.greyscale.grey30};
  line-height: 21px;
`;
export default InvitationViewFooter;
