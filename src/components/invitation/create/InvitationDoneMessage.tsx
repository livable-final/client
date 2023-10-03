import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import useInvitationEditStore from '@/stores/useInvitationEditStore';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { Send } from '@/assets/icons';

function InvitationDoneMessage() {
  const { createContents } = useInvitationCreateStore();
  const { editContents } = useInvitationEditStore();
  const resendVisitors = editContents.visitors;
  const createVisitors = createContents.visitors;
  console.log(createVisitors, resendVisitors);
  return (
    <div css={containerStyles}>
      <Send />
      {resendVisitors?.length === 0 ? (
        <div css={messageStyles}>
          {createVisitors?.length === 1
            ? `${createVisitors[0]?.name}님께\n초대장을 보냈어요`
            : `${createVisitors[0]?.name}님 외 ${
                createVisitors.length - 1
              }명에게\n초대장을 보냈어요`}
        </div>
      ) : (
        <div css={messageStyles}>
          {resendVisitors && resendVisitors?.length === 1
            ? `${resendVisitors[0]?.name}님께\n초대장을 다시 보냈어요`
            : `${resendVisitors && resendVisitors[0]?.name}님 외 ${
                resendVisitors && resendVisitors.length - 1
              }명에게\n초대장을 다시 보냈어요`}
        </div>
      )}
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
