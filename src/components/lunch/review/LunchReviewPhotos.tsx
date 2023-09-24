import theme from '@/styles/theme';
import { css } from '@emotion/react';
import Image from 'next/image';

function LunchReviewPhotos({ photos }: { photos: string[] }) {
  return (
    <div css={containerStyles}>
      <div css={wrapperStyles}>
        {photos.map((item, i) => (
          <Image
            key={item}
            src={item}
            alt={`이미지${i}`}
            width={115}
            height={90}
          />
        ))}
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  overflow-x: auto;
  max-width: 100%;
  padding-right: -16px;
`;

const wrapperStyles = css`
  display: flex;
  gap: 8px;

  > img {
    border-radius: 8px;
    background: ${theme.palette.greyscale.grey45} 50% / cover no-repeat;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  }
`;

export default LunchReviewPhotos;
