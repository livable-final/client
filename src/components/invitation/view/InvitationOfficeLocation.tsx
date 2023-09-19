import theme from '@/styles/theme';
import { css } from '@emotion/react';

function InvitationOfficeLocation() {
  const testText = {
    officeName: '식스센스',
    officeLocation: '10층 1004호',
  };
  return (
    <div css={OfficeLocationStyles}>
      <p>{testText.officeName}사무실은</p>
      <p>
        <span>{testText.officeLocation}</span>에 있어요
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
