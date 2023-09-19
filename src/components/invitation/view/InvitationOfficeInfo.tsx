import Header from '@/components/common/Header';
import { INVITATION_VIEW_TEXTS } from '@/constants/invitation/viewTexts';
import usePagesStore from '@/stores/usePagesStore';
import { css } from '@emotion/react';
import InvitationVisitTip from './InvitationOfficeVisitTip';
import InvitationOfficeMap from './InvitationOfficeMap';
import InvitationOfficeLocation from './InvitationOfficeLocation';

function InvitationOfficeInfo() {
  const { setNextComponent } = usePagesStore();
  const onClickHandler = () => {
    setNextComponent('');
  };

  return (
    <div css={OfficeInfoStyles}>
      <Header
        title={INVITATION_VIEW_TEXTS.header.office}
        onClick={onClickHandler}
      />

      <InvitationOfficeLocation />

      <InvitationOfficeMap />

      <InvitationVisitTip />
    </div>
  );
}

const OfficeInfoStyles = css`
  & > div {
    margin-bottom: 40px;
  }
`;

export default InvitationOfficeInfo;
