import Header from '@/components/common/Header';
import usePagesStore from '@/stores/usePagesStore';
import InvitationQrInfo from '@/components/invitation/view/InvitationQrInfo';
import InvitationBuildingInfo from '@/components/invitation/view/InvitationBuildingInfo';
import InvitationHostInfo from '@/components/invitation/view/InvitationHostInfo';
import InvitationOfficeInfo from '@/components/invitation/view/InvitationOfficeInfo';
import InvitationViewFooter from '@/components/invitation/view/InvitationViewFooter';
import InvitationInfoContainer from '@/components/invitation/view/InvitationInfoContainer';
import InvitationCarouselContainer from '@/components/invitation/view/InvitationCarouselContainer';
import { css } from '@emotion/react';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';

function InvitationViewForm() {
  const { nextComponent, setNextComponent } = usePagesStore();
  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.main}`) {
    return <InvitationViewForm />;
  }
  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.building}`) {
    return <InvitationBuildingInfo />;
  }
  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.host}`) {
    return <InvitationHostInfo />;
  }
  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.place}`) {
    return <InvitationOfficeInfo />;
  }
  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.code}`) {
    return <InvitationQrInfo />;
  }

  const onClickHandler = () => {
    setNextComponent(`${INVITATION_VEIW_INFO_TEXTS.category.main}`);
  };

  return (
    <div>
      <div css={invitationViewFormStyles}>
        <Header
          title={INVITATION_VEIW_INFO_TEXTS.category.main}
          onClick={onClickHandler}
        />
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
