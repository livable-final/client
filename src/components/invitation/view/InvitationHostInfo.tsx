import { css } from '@emotion/react';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import InvitationHostInfoItem from '@/components/invitation/view/InvitationHostInfoItem';
import { Profile } from '@/assets/icons';
import { InvitationHostInfoProps } from '@/types/invitation/view';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';

function InvitationHostInfo({ data }: InvitationHostInfoProps) {
  return (
    <div css={InvitationHostInfoStyles}>
      <Header title={INVITATION_VEIW_INFO_TEXTS.category.host} isBg />
      <div css={InvitationHostInfoProfileStyles}>
        <Profile />
      </div>
      <ul css={InvitationInfoItemContinerStyles}>
        <InvitationHostInfoItem
          label={INVITATION_VEIW_INFO_TEXTS.host.name}
          content={data.hostName}
        />
        <InvitationHostInfoItem
          label={INVITATION_VEIW_INFO_TEXTS.host.companyName}
          content={data.hostCompanyName}
        />
        <InvitationHostInfoItem
          label={INVITATION_VEIW_INFO_TEXTS.host.contact}
          content={data.hostContact}
          isContact
        />
      </ul>
      <div css={InvitationHostInfoCardSyles}>
        <div>{INVITATION_VEIW_INFO_TEXTS.host.card}</div>
      </div>
      <div css={InvitationHostInfoBackGroundStyles} />
    </div>
  );
}
const InvitationHostInfoStyles = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const InvitationHostInfoBackGroundStyles = css`
  position: absolute;
  z-index: -1;
  left: -16px;
  right: -16px;
  max-width: 1024px;
  height: 258px;
  background-clip: border-box;
  background-image: linear-gradient(
    -200deg,
    rgba(97, 132, 255, 0.3) 1.42%,
    rgba(97, 132, 255, 0.16) 27.47%,
    rgba(97, 132, 255, 0.09) 57.59%,
    rgba(97, 132, 255, 0) 94.71%
  );
`;
const InvitationHostInfoProfileStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.palette.greyscale.grey30};
  background-color: ${theme.palette.white};
  width: 108px;
  height: 108px;
  margin: 44px auto;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
const InvitationInfoItemContinerStyles = css`
  margin-top: 30px;
`;
const InvitationHostInfoCardSyles = css`
  min-width: 350px;
  min-height: 158px;
  margin: 62px 4px 38px;
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
