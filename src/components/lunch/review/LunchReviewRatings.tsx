import Icons from '@/components/common/Icons';
import theme from '@/styles/theme';
import { RatingsProps } from '@/types/lunch/ratings';
import { css } from '@emotion/react';

function LunchReviewRatings({ taste, amount, service, speed }: RatingsProps) {
  // 평가가 GOOD인 항목의 개수 선언
  const count = [amount, service, speed].filter(
    (item) => item === 'GOOD',
  ).length;

  // 맛 평가가 GOOD인지에 대한 true-false 선언
  const isTasty = taste === 'GOOD';

  return (
    <div css={containerStyles}>
      <div css={smileIconStyles}>
        {isTasty ? (
          <Icons icon="smile" size="20px" />
        ) : (
          <Icons icon="confused" size="20px" />
        )}
      </div>
      <div css={thumbsUpStyles}>
        <Icons icon="thumbsUp" size="20px" color={`${theme.palette.orange}`} />
        <p css={countStyles}>+{count}</p>
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  align-items: center;
  gap: 6px;
  align-self: stretch;
`;

const smileIconStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 6px;
  border-radius: 100px;
  height: 30px;
  background: ${theme.palette.greyscale.grey10};

  > svg {
    margin: 4px;
  }
`;

const thumbsUpStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.5px 10px;
  gap: 5px;
  border-radius: 100px;
  background: ${theme.palette.greyscale.grey10};
`;

const countStyles = css`
  width: 17px;
  font: ${theme.font.body.body3_500};
  color: ${theme.palette.greyscale.grey60};
  line-height: 21px;
`;

export default LunchReviewRatings;
