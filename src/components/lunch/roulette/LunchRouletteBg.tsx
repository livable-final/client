import Image from 'next/image';
import { roulette, rouletteActive } from '@/assets/images';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';

// 룰렛 백그라운드 이미지 렌딩 컴포넌트
function LunchRouletteBg({ isOperated }: { isOperated: boolean }) {
  const { alt } = LUNCH_ROULETTE_CONSTANTS;

  return isOperated ? (
    <Image
      src={roulette}
      alt={alt.bg}
      priority
      fill
      sizes="(min-width: 360px) 100vw"
    />
  ) : (
    <Image
      src={rouletteActive}
      alt={alt.bg}
      priority
      fill
      sizes="(min-width: 360px) 100vw"
    />
  );
}

export default LunchRouletteBg;
