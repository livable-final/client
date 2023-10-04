import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { InvitationHostInfoItemProps } from '@/types/invitation/view';
import { Copy } from '@/assets/icons';

function InvitationHostInfoItem({
  label,
  content,
  isContact,
}: InvitationHostInfoItemProps) {
  return (
    <div css={HostInfoItemStyles}>
      <div className="label">{label}</div>
      <div className="content">
        {content}
        {isContact && <Copy />}
      </div>
    </div>
  );
}
const HostInfoItemStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .label {
    min-width: 47px;
    padding: 20px 0;
    margin-right: 25px;
    font: ${theme.font.subTitle.subTitle1_500};
    color: ${theme.palette.greyscale.grey40};
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 12px;
    border-bottom: 1px solid ${theme.palette.greyscale.grey10};
    font: ${theme.font.subTitle.subTitle1_400};
    color: ${theme.palette.greyscale.grey60};
  }
`;

export default InvitationHostInfoItem;
