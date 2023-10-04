import { css } from '@emotion/react';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import InvitationHostInfoItem from '@/components/invitation/view/InvitationHostInfoItem';
import Icon from '@/components/common/Icons';
import { InvitationInfoContainerProps } from '@/types/invitation/view';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';

function InvitationHostInfo({ data }: InvitationInfoContainerProps) {
  return (
    <div css={InvitationHostInfoStyles}>
      <Header title={INVITATION_VEIW_INFO_TEXTS.category.host} isBg />
      <div css={InvitationHostInfoProfileStyles}>
        <Icon icon="reviewer" size="70" />
      </div>
      <ul css={InvitationInfoItemContinerStyles}>
        <InvitationHostInfoItem
          label={INVITATION_VEIW_INFO_TEXTS.host.name}
          content={data?.hostName}
        />
        <InvitationHostInfoItem
          label={INVITATION_VEIW_INFO_TEXTS.host.companyName}
          content={data?.hostCompanyName}
        />
        <InvitationHostInfoItem
          label={INVITATION_VEIW_INFO_TEXTS.host.contact}
          content={data?.hostContact}
          isContact
        />
      </ul>
      <div css={InvitationHostInfoCardContainerSyles}>
        <div css={InvitationHostInfoCardSyles}>
          <div>{INVITATION_VEIW_INFO_TEXTS.host.card}</div>
        </div>
      </div>
      <div css={InvitationHostInfoBackGroundStyles} />
    </div>
  );
}
const InvitationHostInfoStyles = css`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`;
const InvitationHostInfoBackGroundStyles = css`
  position: absolute;
  z-index: -1;
  left: -16px;
  right: -16px;
  max-width: 1024px;
  height: 258px;
  background-clip: border-box;
  background-color: ${theme.palette.bluescale.blue10};
`;
const InvitationHostInfoProfileStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.palette.greyscale.grey30};
  background-color: ${theme.palette.bluescale.blue20};
  width: 100px;
  height: 100px;
  margin: 44px auto;
  border-radius: 50%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;
const InvitationInfoItemContinerStyles = css`
  font: ${theme.font.subTitle.subTitle1_500};
  margin-top: 30px;
`;
const InvitationHostInfoCardContainerSyles = css`
  overflow-x: scroll;
`;
const InvitationHostInfoCardSyles = css`
  width: 358px;
  height: 200px;
  margin: 62px auto 38px;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  background-color: ${theme.palette.greyscale.grey10};
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font: ${theme.font.body.body1_400};
    color: ${theme.palette.greyscale.grey50};
  }
`;

export default InvitationHostInfo;
