import Image from 'next/image';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import { ReviewPhotosProps } from '@/types/lunch/reviewPhotos';

// '오늘 점심' 리뷰에 대한 사진을 담는 컨테이너
function LunchReviewPhotos({ photos, isRow }: ReviewPhotosProps) {
  const { review, ranking } = LUNCH_MAIN_CONSTANTS;

  return (
    <div css={containerStyles(isRow)}>
      <div css={wrapperStyles}>
        {photos.map((item, idx) => (
          <Image
            key={item}
            src={item}
            alt={`이미지${idx}`}
            width={isRow ? ranking.photoWidth : review.photoWidth}
            height={isRow ? ranking.photoHeight : review.photoHeight}
          />
        ))}
      </div>
    </div>
  );
}

const containerStyles = (isRow?: boolean) => css`
  display: flex;
  overflow-x: ${isRow ? 'visible' : 'auto'};
  max-width: 100%;
  object-fit: cover;
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
