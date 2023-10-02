import Image from 'next/image';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { lockPressed, unLock } from '@/assets/images';
import useRouletteStore from '@/stores/useRouletteStore';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import { RouletteButtonProps } from '@/types/lunch/roulette';

// 룰렛 잠금 버튼 렌딩 컴포넌트
function LunchRouletteLockBtn({ onClick }: RouletteButtonProps) {
  const { alt } = LUNCH_ROULETTE_CONSTANTS;
  const { isLocked, isAgain, isOperated } = useRouletteStore();

  const renderBtn = () => {
    // 최초 룰렛 가동이 아닌 재가동일 경우
    if (isAgain) {
      return isLocked ? ( // 카테고리가 고정인 경우
        <Image src={lockPressed} alt={alt.lock} fill sizes="100vw" />
      ) : (
        <Image src={unLock} alt={alt.lock} fill sizes="100vw" />
      );
    }
    // 카테고리가 고정이면서 재가동일 경우
    return <Image src={unLock} alt={alt.lock} fill sizes="100vw" />;
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        css={pushBtnStyles}
        disabled={!isAgain || !isOperated}
      >
        &nbsp;
      </button>
      {renderBtn()}
    </>
  );
}

const pushBtnStyles = css`
  z-index: 3;
  cursor: pointer;
  position: absolute;

  width: 25px;
  height: 25px;
  top: 65px;
  right: calc((100% - 140px) / 2);

  ${mq.md} {
    width: 40px;
    height: 40px;
    top: 100px;
    right: calc((100% - 215px) / 2);
  }

  &:active {
    background-color: none;
  }
`;

export default LunchRouletteLockBtn;
