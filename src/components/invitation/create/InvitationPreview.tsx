import Image from 'next/image';
import Icons from '@/components/common/Icons';
import theme from '@/styles/theme';
import { COMMON_ICON_NAMES } from '@/constants/common';
import { css } from '@emotion/react';

interface InvitationPreviewProps {
  onClick: () => void;
}

function InvitationPreview({ onClick }: InvitationPreviewProps) {
  const { common } = COMMON_ICON_NAMES;

  return (
    <div
      css={backgroundStyles}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <div css={previewContainerStyles}>
        <div css={iconStyles}>
          <Icons icon={common.exitMedium} color={theme.palette.white} />
        </div>
        <Image
          src="/invitation/invitationPreview.png"
          width={400}
          height={720}
          alt="오피스너 초대장 예시"
        />
      </div>
    </div>
  );
}

const backgroundStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

const previewContainerStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 90%; */
  /* z-index: 11; */
`;

const iconStyles = css`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
`;

export default InvitationPreview;
