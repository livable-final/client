import Header from '@/components/common/Header';
import LunchRoulette from '@/components/lunch/LunchRoulette';
import LunchReviewsByRest from '@/components/lunch/review/LunchReviewsByRest';
import LunchRoulettePopup from '@/components/lunch/roulette/LunchRoulettePopup';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import useRouletteStore from '@/stores/useRouletteStore';
import getRandomNumber from '@/utils/getRandomNumber';
import { css } from '@emotion/react';

function Roulette() {
  const { isOperated, isAgain, isSelected } = useRouletteStore();
  const { title, menu } = LUNCH_ROULETTE_CONSTANTS;
  const randomMenuId = getRandomNumber(menu.max);

  return (
    <>
      <Header title={title.roulette} isSticky />
      <section css={sectionStyle}>
        <LunchRoulette />
        <LunchRoulettePopup />
        {(isOperated && isAgain && isSelected && <LunchReviewsByRest />) ||
          (!isAgain && <LunchReviewsByRest menuId={randomMenuId} />)}
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
