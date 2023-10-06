import theme from '@/styles/theme';
import { InvitationOfficeLocationProps } from '@/types/invitation/view';
import { css } from '@emotion/react';

function InvitationOfficeLocation({
  invitationOfficeName,
  hostCompanyName,
}: InvitationOfficeLocationProps) {
  return (
    <div css={OfficeLocationStyles}>
      <p>{hostCompanyName}사무실은</p>
      <p>
        <span>{invitationOfficeName}</span>에 있어요
      </p>
    </div>
  );
}

const OfficeLocationStyles = css`
  font-size: ${theme.font.title.title2_500};
  color: ${theme.palette.greyscale.grey90};
  span {
    color: ${theme.palette.primary};
  }
`;

export default InvitationOfficeLocation;
