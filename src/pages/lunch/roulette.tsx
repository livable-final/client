import Header from '@/components/common/Header';
import LunchRoulette from '@/components/lunch/LunchRoulette';
import LunchReviewsByRest from '@/components/lunch/review/LunchReviewsByRest';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import useRouletteStore from '@/stores/useRouletteStore';
import { css } from '@emotion/react';

function Roulette() {
  const { isOperated, isAgain } = useRouletteStore();
  const { title } = LUNCH_ROULETTE_CONSTANTS;
  return (
    <>
      <Header title={title.roulette} isSticky />
      <section css={sectionStyle}>
        <LunchRoulette />
        {isOperated && isAgain && <LunchReviewsByRest />}
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
