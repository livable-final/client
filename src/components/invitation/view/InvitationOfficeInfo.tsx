import Header from '@/components/common/Header';
import { INVITATION_VIEW_TEXTS } from '@/constants/invitation/viewTexts';
import { css } from '@emotion/react';
import mq from '@/utils/mediaquery';
import { InvitationOfficeInfoProps } from '@/types/invitation/view';
import InvitationVisitTip from './InvitationOfficeVisitTip';
import InvitationOfficeMap from './InvitationOfficeMap';
import InvitationOfficeLocation from './InvitationOfficeLocation';

function InvitationOfficeInfo({ data }: InvitationOfficeInfoProps) {
  return (
    <div css={OfficeInfoStyles}>
      <Header title={INVITATION_VIEW_TEXTS.header.office} />

      <div css={containerStyles}>
        <InvitationOfficeLocation
          invitationOfficeName={data.invitationOfficeName}
          hostCompanyName={data.hostCompanyName}
        />

        <InvitationOfficeMap placeType={data.placeType} />

        <InvitationVisitTip invitationTip={data.invitationTip} />
      </div>
    </div>
  );
}

const OfficeInfoStyles = css`
  margin: 0 auto;

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 480px;
  }
  ${mq.tab} {
    max-width: 640px;
  }

  & > div {
    margin-bottom: 40px;
  }
`;

const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 20px;
`;

export default InvitationOfficeInfo;
