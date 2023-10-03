import { css } from '@emotion/react';
import Banner from '@/components/common/Banner';
import LunchRanking from '@/components/lunch/ranking';
import LunchReviews from '@/components/lunch/review/LunchReviews';

// 오늘 점심 홈 컨텐츠
function LunchMainContents() {
  return (
    <div css={containerStyles}>
      <Banner hasCafeteria={false} />
      <LunchRanking />
      <LunchReviews />
    </div>
  );
}

const containerStyles = css`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export default LunchMainContents;
