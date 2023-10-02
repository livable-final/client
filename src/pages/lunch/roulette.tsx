import Header from '@/components/common/Header';
import LunchRoulette from '@/components/lunch/LunchRoulette';
import LunchReviewsByRest from '@/components/lunch/review/LunchReviewsByRest';
import LunchRoulettePopup from '@/components/lunch/roulette/LunchRoulettePopup';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import useRouletteStore from '@/stores/useRouletteStore';
import { css } from '@emotion/react';

function Roulette() {
  const { isOperated, isAgain, isSelected } = useRouletteStore();
  const { title } = LUNCH_ROULETTE_CONSTANTS;
  return (
    <>
      <Header title={title.roulette} isSticky />
      <section css={sectionStyle}>
        <LunchRoulette />
        <LunchRoulettePopup />
        {isOperated && isAgain && isSelected && <LunchReviewsByRest />}
      </section>
    </>
  );
}

const sectionStyle = css`
  display: flex;
  flex-direction: column;
`;

export default Roulette;
