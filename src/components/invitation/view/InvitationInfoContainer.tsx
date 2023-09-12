import { css } from '@emotion/react';
import mq from '@/utils/mediaquery';
import { INVITATION_INFO_CATEGORIES } from '@/constants/invitation/viewTexts';
import InvitationInfo from '@/components/invitation/view/InvitationInfo';
import InvitationInfoCategory from '@/components/invitation/view/InvitationInfoCategory';

function InvitationInfoContainer() {
  // 방문증 정보 받아오는 컴포넌트
  return (
    <div css={ViewInfoContainerStyles}>
      <div css={ViewInfoStyles}>
        <InvitationInfo />
      </div>
      <div css={InfoCategoryContainerStyles}>
        <InvitationInfoCategory
          infoLabel={INVITATION_INFO_CATEGORIES.bilding}
        />
        <InvitationInfoCategory infoLabel={INVITATION_INFO_CATEGORIES.palce} />
        <InvitationInfoCategory infoLabel={INVITATION_INFO_CATEGORIES.iviter} />
        <InvitationInfoCategory
          infoLabel={INVITATION_INFO_CATEGORIES.parking}
        />
      </div>
    </div>
  );
}
const ViewInfoContainerStyles = css`
  width: 100%;
  ${mq.md} {
  }
  ${mq.lg} {
  }
  ${mq.tab} {
  }
`;

const ViewInfoStyles = css`
  width: 100%;
  ${mq.md} {
  }
  ${mq.lg} {
  }
  ${mq.tab} {
  }
`;

const InfoCategoryContainerStyles = css`
  display: flex;
  ${mq.md} {
  }
  ${mq.lg} {
  }
  ${mq.tab} {
  }
`;

export default InvitationInfoContainer;
