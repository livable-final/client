import Image from 'next/image';
import { roulette, rouletteActive } from '@/assets/images';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';

function LunchRouletteBg({ isOperated }: { isOperated: boolean }) {
  const { alt } = LUNCH_ROULETTE_CONSTANTS;

  return isOperated ? (
    <Image src={roulette} alt={alt.bg} fill priority sizes="100vw" />
  ) : (
    <Image src={rouletteActive} alt={alt.bg} fill priority sizes="100vw" />
  );
}

export default LunchRouletteBg;
