import theme from '@/styles/theme';
import { InvitationBuildingInfoItemProps } from '@/types/invitation/view';
import { css } from '@emotion/react';

function InvitationBuildingInfoItem({
  item,
  content,
}: InvitationBuildingInfoItemProps) {
  return (
    <div css={InfoItemStyles}>
      <p>
        <span>{item}</span>
      </p>
      <p>{content}</p>
    </div>
  );
}

const InfoItemStyles = css`
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
  font: ${theme.font.body.body1_400};
  span {
    color: ${theme.palette.greyscale.grey50};
  }
`;

export default InvitationBuildingInfoItem;
