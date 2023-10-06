import { css } from '@emotion/react';
import { InvitationHostInfoItemProps } from '@/types/invitation/view';
import toast, { Toaster } from 'react-hot-toast';
import { Copy } from '@/assets/icons';
import { COMMON_ERROR_MESSAGE } from '@/constants/common/index';
import theme from '@/styles/theme';
import Alert from '@/components/common/Alert';
import useAlertStore from '@/stores/useAlertStore';

function InvitationHostInfoItem({
  label,
  content,
  isContact,
}: InvitationHostInfoItemProps) {
  const { alertState, openAlert } = useAlertStore();

  const ClickCopyhandler = async () => {
    try {
      await navigator.clipboard.writeText(content);
      toast(COMMON_ERROR_MESSAGE.copy, {
        style: {
          borderRadius: '50px',
          backgroundColor: '#4d4d4d',
          color: '#fff',
        },
      });
    } catch (error) {
      openAlert('🚨', COMMON_ERROR_MESSAGE.copyFailed);
    }
  };

  return (
    <div css={HostInfoItemStyles}>
      <div css={labelStyles}>{label}</div>
      <div css={contactStyles}>
        {content}
        {isContact && (
          <button type="button" onClick={ClickCopyhandler}>
            <Copy />
          </button>
        )}
      </div>
      {alertState.isOpen && <Alert />}
      <Toaster position="bottom-center" />
    </div>
  );
}
const HostInfoItemStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const labelStyles = css`
  min-width: 47px;
  padding: 20px 0;
  margin-right: 25px;
  font: ${theme.font.subTitle.subTitle1_500};
  color: ${theme.palette.greyscale.grey40};
`;
const contactStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 12px;
  border-bottom: 1px solid ${theme.palette.greyscale.grey10};
  font: ${theme.font.subTitle.subTitle1_400};
  color: ${theme.palette.greyscale.grey60};
`;

export default InvitationHostInfoItem;
