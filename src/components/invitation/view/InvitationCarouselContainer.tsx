import { css } from '@emotion/react';
import mq from '@/utils/mediaquery';
import InvitaitionCarousel from '@/components/invitation/view/InvitaitionCarousel';

function InvitationCarouselContainer() {
  return (
    <div css={invitationCarouselContainerStyles}>
      <InvitaitionCarousel type="restaurant" />
      <InvitaitionCarousel type="cafe" />
    </div>
  );
}

// GUI 미확정
const invitationCarouselContainerStyles = css`
  margin-bottom: 52px;
  ${mq.tab} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
  }
`;

export default InvitationCarouselContainer;
