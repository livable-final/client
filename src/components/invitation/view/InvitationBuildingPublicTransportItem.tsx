import { Bus, Subway } from '@/assets/icons';
import { InvitationBuildingPublicTransportItemProps } from '@/types/invitation/view';
import { css } from '@emotion/react';

function InvitationBuildingPublicTransportItem({
  platform,
  location,
}: InvitationBuildingPublicTransportItemProps) {
  let icon;
  if (platform === 'subway') {
    icon = <Subway />;
  } else if (platform === 'bus') {
    icon = <Bus />;
  }

  return (
    <div css={BuildingPublicTransportItemStyle}>
      {icon}
      <p>{location}</p>
    </div>
  );
}

const BuildingPublicTransportItemStyle = css`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export default InvitationBuildingPublicTransportItem;
