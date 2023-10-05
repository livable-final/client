import Header from '@/components/common/Header';
import LunchRoulette from '@/components/lunch/LunchRoulette';
import LunchRouletteReviews from '@/components/lunch/roulette/LunchRouletteReviews';
import LunchRoulettePopup from '@/components/lunch/roulette/LunchRoulettePopup';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import { css } from '@emotion/react';

function Roulette() {
  const { title } = LUNCH_ROULETTE_CONSTANTS;

  return (
    <>
      <Header title={title.roulette} isSticky />
      <section css={sectionStyle}>
        <LunchRoulette />
        <LunchRoulettePopup />
        <LunchRouletteReviews />
      </section>
    </>
  );
}

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default Roulette;
