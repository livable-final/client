import React from 'react';
import Banner from '@/components/common/Banner';
import { DUMMY_RESPONSE } from '@/constants/home/homeTexts';
import { css } from '@emotion/react';
import LunchRanking from '@/components/lunch/ranking/LunchRanking';
import LunchRecentReviews from '@/components/lunch/LunchRecentReviews';

function LunchContents() {
  // TOFIXED: 메인 홈에서 받아온 API RESPONSE DATA를 이용
  const { hasCafeteria } = DUMMY_RESPONSE;

  return (
    <div css={containerStyles}>
      <Banner hasCafeteria={hasCafeteria} />
      <LunchRanking />
      <LunchRecentReviews />
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

export default LunchContents;
