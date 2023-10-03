import mq from '@/utils/mediaquery';
import InvitationInfo from '@/components/invitation/view/InvitationInfo';
import InvitationInfoCategory from '@/components/invitation/view/InvitationInfoCategory';
import { css } from '@emotion/react';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';
import { InvitationInfoContainerProps } from '@/types/invitation/view';

function InvitationInfoContainer({ data }: InvitationInfoContainerProps) {
  const { category, icon } = INVITATION_VEIW_INFO_TEXTS;

  return (
    <div css={ViewInfoContainerStyles}>
      <div css={ViewInfoStyles}>
        {data && (
          <InvitationInfo
            value={INVITATION_VEIW_INFO_TEXTS.category.code}
            data={data}
          />
        )}
      </div>
      <div css={InfoCategoryContainerStyles}>
        <InvitationInfoCategory
          value={category.building}
          icon={icon.building}
        />
        <InvitationInfoCategory value={category.place} icon={icon.place} />
        <InvitationInfoCategory value={category.host} icon={icon.host} />
        <InvitationInfoCategory value={category.parking} icon={icon.parking} />
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
