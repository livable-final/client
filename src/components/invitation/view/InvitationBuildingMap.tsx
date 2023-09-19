import { css } from '@emotion/react';
import InvitationFindRoadBtn from './InvitationFindRoadBtn';

function InvitationBuildingMap() {
  return (
    <div css={BuildingMapStyles}>
      <InvitationFindRoadBtn />
    </div>
  );
}

const BuildingMapStyles = css`
  margin: 0 -16px 0 -16px;
`;
export default InvitationBuildingMap;
