import { Reviewer } from '@/assets/icons';
import theme from '@/styles/theme';
import { LunchReviewProps } from '@/types/lunch/reviewList';
import getTimeDiff from '@/utils/getTimeDiff';
import { css } from '@emotion/react';
import LunchReviewRatings from '@/components/lunch/review/LunchReviewRatings';
import LunchReviewPhotos from '@/components/lunch/review/LunchReviewPhotos';
import mq from '@/utils/mediaquery';

function LunchReview({ ...props }: LunchReviewProps) {
  return (
    <div css={containerStyles(props?.isRow, props?.noPad)}>
      <div css={wrapperStyles}>
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
      </div>
      <LunchReviewPhotos photos={props.reviewImageUrl} isRow={props.isRow} />
    </div>
  );
}

const containerStyles = (isRow?: boolean, noPad?: boolean) => css`
  display: flex;
  padding: ${noPad ? '20px 0px 20px 16px' : ' 20px 20px 16px'};
  align-items: flex-start;
  align-self: stretch;
  flex-direction: ${isRow ? 'row' : 'column'};
  align-items: ${isRow && 'center'};
  border-bottom: 1px solid ${theme.palette.greyscale.grey5};
  gap: 16px;

  ${mq.lg} {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  text-align: left;
  width: 220px;

  ${mq.md} {
    width: 262px;
  }

  ${mq.lg} {
    width: 350px;
  }

  ${mq.tab} {
    width: auto;
  }
`;
export default LunchReview;
