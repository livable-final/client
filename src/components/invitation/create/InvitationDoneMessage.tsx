import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { Send } from '@/assets/icons';

function InvitationDoneMessage() {
  const { createContents } = useInvitationCreateStore();
  const { visitors } = createContents;

  return (
    <div css={containerStyles}>
      <Send />
      <div css={messageStyles}>
        {visitors.length === 1
          ? `${visitors[0].name}님께\n초대장을 보냈어요`
          : `${visitors[0].name}님 외 ${
              visitors.length - 1
            }명에게\n초대장을 보냈어요`}
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  height: 224px;
`;

const messageStyles = css`
  font: ${theme.font.body.body1_600};
  font-size: 22px;
  color: ${theme.palette.greyscale.grey60};
  line-height: 30px;
  text-align: center;
  white-space: pre-wrap;
`;

export default InvitationDoneMessage;
