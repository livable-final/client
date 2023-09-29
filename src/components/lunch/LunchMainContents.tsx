import React from 'react';
import Banner from '@/components/common/Banner';
import { css } from '@emotion/react';
import LunchRanking from '@/components/lunch/ranking';
import LunchReviews from '@/components/lunch/review/LunchReviews';

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
