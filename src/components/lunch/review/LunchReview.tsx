import { Reviewer } from '@/assets/icons';
import theme from '@/styles/theme';
import { ReviewList } from '@/types/lunch/reviewList';
import getTimeDiff from '@/utils/getTimeDiff';
import { css } from '@emotion/react';
import LunchReviewRatings from '@/components/lunch/review/LunchReviewRatings';
import LunchReviewPhotos from '@/components/lunch/review/LunchReviewPhotos';

function LunchReview({ ...props }: ReviewList) {
  return (
    <div css={containerStyles}>
      <div css={profileStyles}>
        <div css={profileImageStyles}>
          <Reviewer />
        </div>
        <div css={profileDetailStyles}>
          <span>{props.memberName}</span>
          <span>
            {props.restaurantName} · {getTimeDiff(props.reviewCreatedAt)}
          </span>
        </div>
      </div>
      <div css={descStyles}>{props.reviewDescription}</div>
      <LunchReviewRatings
        taste={props.reviewTaste}
        amount={props.reviewAmount}
        service={props.reviewService}
        speed={props.reviewSpeed}
      />
      <LunchReviewPhotos photos={props.reviewImageUrl} />
    </div>
  );
}

const containerStyles = css`
  display: flex;
  padding: 20px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const profileStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  text-align: left;
`;

const profileImageStyles = css`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 5.5px 6px 6.5px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${theme.palette.greyscale.grey20};
`;

const profileDetailStyles = css`
  display: flex;
  flex-direction: column;

  > span:first-of-type {
    align-self: stretch;
    font: ${theme.font.body.body2_500};
    color: ${theme.palette.greyscale.grey90};
    line-height: 20px;
  }

  > span:last-of-type {
    align-self: stretch;
    font: ${theme.font.body.body4};
    color: ${theme.palette.greyscale.grey50};
    line-height: 16px;
  }
`;

const descStyles = css`
  font: ${theme.font.etc.reviewDesc};
  color: ${theme.palette.greyscale.grey70};
  line-height: 21px;
  letter-spacing: -0.3px;
  padding-right: calc(13%);
  text-align: left;
`;
export default LunchReview;
