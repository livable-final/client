import { css } from '@emotion/react';
import InvitaitionCarousel from '@/components/invitation/view/InvitaitionCarousel';

function InvitationCarouselContainer() {
  return (
    <div css={InvitationCarouselContainerStyles}>
      <div>조금 빨리 뭐시깽이</div>
      <InvitaitionCarousel />
      <InvitaitionCarousel />
    </div>
  );
}

// GUI 미확정
const InvitationCarouselContainerStyles = css`
  margin: 21px 0;
`;

export default InvitationCarouselContainer;
