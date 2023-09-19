import { TestMap } from '@/assets/testImg';
import { css } from '@emotion/react';

function InvitationOfficeMap() {
  return (
    <div css={MapStyles}>
      <TestMap />
    </div>
  );
}

const MapStyles = css`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 55px;
`;

export default InvitationOfficeMap;
