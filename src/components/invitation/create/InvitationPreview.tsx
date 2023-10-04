// import Image from 'next/image';
import { css } from '@emotion/react';

interface InvitationPreviewProps {
  onClick: () => void;
}

function InvitationPreview({ onClick }: InvitationPreviewProps) {
  return (
    <div
      css={backgroundStyles}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <div css={previewContainerStyles}>
        <img
          src="/invitation/preview.png"
          alt="오피스너 초대장 예시"
          css={imageStyles}
        />
        {/* <Image
          src="/invitation/preview.png"
          width={380}
          height={702}
          alt="오피스너 초대장 예시"
        /> */}
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
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

const previewContainerStyles = css`
  position: absolute;
  bottom: -24px;
  display: flex;
  justify-content: center;
`;

const imageStyles = css`
  width: 95%;
`;

export default InvitationPreview;
