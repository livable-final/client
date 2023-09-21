import Header from '@/components/common/Header';
import usePagesStore from '@/stores/usePagesStore';
import InvitationHostInfo from '@/components/invitation/view/InvitationHostInfo';
import InvitationOfficeInfo from '@/components/invitation/view/InvitationOfficeInfo';
import InvitationViewFooter from '@/components/invitation/view/InvitationViewFooter';
import InvitationInfoContainer from '@/components/invitation/view/InvitationInfoContainer';
import InvitationCarouselContainer from '@/components/invitation/view/InvitationCarouselContainer';
import { css } from '@emotion/react';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';

function InvitationViewForm() {
  const { nextComponents, setNextComponent } = usePagesStore();
  if (nextComponents === '식스센스 초대장') {
    return <InvitationViewForm />;
  }
  if (nextComponents === `${INVITATION_VEIW_INFO_TEXTS.category.building}`) {
    return <InvitationOfficeInfo />;
  }
  if (nextComponents === `${INVITATION_VEIW_INFO_TEXTS.category.host}`) {
    return <InvitationHostInfo />;
  }

  const onClickHandler = () => {
    setNextComponent('');
  };

  return (
    <div>
      <div css={invitationViewFormStyles}>
        <Header title="식스센스 초대장" onClick={onClickHandler} />
        <InvitationInfoContainer />
        <InvitationCarouselContainer />
        <InvitationViewFooter />
      </div>
    </div>
  );
}
const invitationViewFormStyles = css`
  position: relative;
  overflow: inherit;
`;

export default InvitationViewForm;
