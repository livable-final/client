import { css } from '@emotion/react';
import { Send } from '@/assets/icons';
import { InvitationVisitorListProps } from '@/types/invitation/create';
import theme from '@/styles/theme';

function InvitationDoneMessage({ visitorList }: InvitationVisitorListProps) {
  return (
    <div css={containerStyles}>
      <Send />
      <div css={messageStyles}>
        {visitorList.length === 1
          ? `${visitorList[0]}님께\n초대장을 보냈어요`
          : `${visitorList[0]}님 외 ${
              visitorList.length - 1
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
