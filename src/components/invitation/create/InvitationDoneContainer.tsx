import InvitationDoneMessage from '@/components/invitation/create/InvitationDoneMessage';
import InvitationDoneBtn from '@/components/invitation/create/InvitationDoneBtn';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';

function InvitationDoneContainer() {
  const visitorsList = ['고애신'];

  return (
    <div css={containerStyles}>
      <InvitationDoneMessage visitorsList={visitorsList} />
      <InvitationDoneBtn />
    </div>
  );
}

const containerStyles = css`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 -16px;
  background-color: ${theme.palette.white};
  z-index: 1;

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 480px;
  }
  ${mq.tab} {
    max-width: 640px;
  }
`;

export default InvitationDoneContainer;
