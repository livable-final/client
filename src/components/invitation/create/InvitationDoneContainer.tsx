import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import InvitationDoneMessage from '@/components/invitation/create/InvitationDoneMessage';
import { css } from '@emotion/react';
import InvitationDoneBtn from './InvitationDoneBtn';

function InvitationDoneContainer() {
  const visitorList = ['고애신'];

  return (
    <div css={containerStyles}>
      <InvitationDoneMessage visitorList={visitorList} />
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
