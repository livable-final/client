import Card from '@/components/common/Card';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import DUMMY_DATA from '@/constants/lunch/dummy';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import LunchReview from '@/components/lunch/review/LunchReview';

function LunchMainReviews() {
  return (
    <Card col>
      <span css={titleStyles}>{LUNCH_MAIN_CONSTANTS.reviews.title}</span>
      {DUMMY_DATA.map((item) => (
        <LunchReview key={item.reveiwId} {...item} />
      ))}
    </Card>
  );
}

const titleStyles = css`
  flex: 1 0 0;
  font: ${theme.font.body.body1_600};
  color: ${theme.palette.title};
  line-height: 24px;
  padding-top: 16px;
`;

export default LunchMainReviews;
