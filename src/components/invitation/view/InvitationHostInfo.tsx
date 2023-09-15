import { css } from '@emotion/react';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import InvitationHostInfoItem from '@/components/invitation/view/InvitationHostInfoItem';
import usePagesStore from '@/stores/usePagesStore';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';
import { Profile } from '@/assets/icons';

// 삭제예정
const host = {
  name: '김방문',
  companyName: '식스센스',
  contact: '01012341234',
  businessCardImageUrl: '/명함/김방문.jpg',
};

function InvitationHostInfo() {
  const { setNextComponent } = usePagesStore();
  const onClickHandler = () => {
    setNextComponent('');
  };

  return (
    <div css={InvitationHostInfoStyles}>
      <Header
        title={INVITATION_VEIW_INFO_TEXTS.category.host}
        onClick={onClickHandler}
      />
      <div css={InvitationHostInfoProfileStyles}>
        <Profile />
      </div>
      <ul css={InvitationInfoItemContinerStyles}>
        <InvitationHostInfoItem
          label={INVITATION_VEIW_INFO_TEXTS.host.name}
          content={host.name}
        />
        <InvitationHostInfoItem
          label={INVITATION_VEIW_INFO_TEXTS.host.companyName}
          content={host.companyName}
        />
        <InvitationHostInfoItem
          label={INVITATION_VEIW_INFO_TEXTS.host.contact}
          content={host.contact}
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
  width: 120%;
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
  margin: 63px 4px 39px;
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
