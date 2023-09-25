import { css } from '@emotion/react';
import mq from '@/utils/mediaquery';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';
import InvitationInfo from '@/components/invitation/view/InvitationInfo';
import InvitationInfoCategory from '@/components/invitation/view/InvitationInfoCategory';

function InvitationInfoContainer() {
  // 방문증 정보 받아오는 컴포넌트
  return (
    <div css={ViewInfoContainerStyles}>
      <div css={ViewInfoStyles}>
        <InvitationInfo value={INVITATION_VEIW_INFO_TEXTS.category.code} />
      </div>
      <div css={InfoCategoryContainerStyles}>
        <InvitationInfoCategory
          value={INVITATION_VEIW_INFO_TEXTS.category.building}
        />
        <InvitationInfoCategory
          value={INVITATION_VEIW_INFO_TEXTS.category.place}
        />
        <InvitationInfoCategory
          value={INVITATION_VEIW_INFO_TEXTS.category.host}
        />
        <InvitationInfoCategory
          value={INVITATION_VEIW_INFO_TEXTS.category.parking}
        />
      </div>
    </div>
  );
}
const ViewInfoContainerStyles = css`
  margin: 40px auto 52px;
  ${mq.md} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${mq.lg} {
  }
  ${mq.tab} {
  }
`;

const ViewInfoStyles = css`
  overflow-x: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const InfoCategoryContainerStyles = css`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  margin: 0 32px;
  ${mq.md} {
    display: flex;
    margin: 0 16px;
    justify-content: center;
    gap: 8px;
    flex-wrap: nowrap;
  }
  ${mq.lg} {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
  }
`;

export default InvitationInfoContainer;
