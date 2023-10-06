import Header from '@/components/common/Header';
import useFetch from '@/hooks/useFetch';
import usePagesStore from '@/stores/common/usePagesStore';
import InvitationQrInfo from '@/components/invitation/view/InvitationQrInfo';
import InvitationBuildingInfo from '@/components/invitation/view/InvitationBuildingInfo';
import InvitationHostInfo from '@/components/invitation/view/InvitationHostInfo';
import InvitationOfficeInfo from '@/components/invitation/view/InvitationOfficeInfo';
import InvitationViewFooter from '@/components/invitation/view/InvitationViewFooter';
import InvitationInfoContainer from '@/components/invitation/view/InvitationInfoContainer';
import InvitationCarouselContainer from '@/components/invitation/view/InvitationCarouselContainer';
import InvitationParking from '@/components/invitation/view/InvitationParking';
import { css } from '@emotion/react';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';
import useSaveStore from '@/stores/common/useSaveStore';
import { useEffect } from 'react';
import { getVisitationInfo } from '@/pages/api/invitation/viewRequests';

function InvitationViewForm() {
  const { response } = useFetch({
    fetchFn: getVisitationInfo,
  });

  const { nextComponent, setNextComponent } = usePagesStore();
  const VISITOR_TOKEN = process.env.VISITOR_TOKEN as string;
  const { setVisitorToken } = useSaveStore();

  useEffect(() => {
    setVisitorToken(VISITOR_TOKEN);
  }, [VISITOR_TOKEN, setVisitorToken]);

  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.building}`) {
    return <InvitationBuildingInfo data={response && response.data} />;
  }
  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.host}`) {
    return <InvitationHostInfo data={response && response.data} />;
  }
  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.place}`) {
    return <InvitationOfficeInfo data={response && response.data} />;
  }
  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.code}`) {
    return <InvitationQrInfo data={response && response.data} />;
  }
  if (nextComponent === `${INVITATION_VEIW_INFO_TEXTS.category.parking}`) {
    return <InvitationParking />;
  }

  const onClickHandler = () => {
    setNextComponent(`${INVITATION_VEIW_INFO_TEXTS.category.main}`);
  };

  return (
    <div>
      <div css={invitationViewFormStyles}>
        <Header
          isCloseOnly
          title={INVITATION_VEIW_INFO_TEXTS.category.main}
          onClick={onClickHandler}
        />
        <InvitationInfoContainer data={response?.data} />
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
