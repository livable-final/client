import Image from 'next/image';
import { push, pushPressed, again, againPressed } from '@/assets/images';
import { css } from '@emotion/react';
import mq from '@/utils/mediaquery';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import { RoulettePushProps } from '@/types/lunch/roulette';

function LunchRoulettePushBtn({
  isPressed,
  isAgain,
  onClick,
}: RoulettePushProps) {
  const { alt } = LUNCH_ROULETTE_CONSTANTS;

  const renderBtn = () => {
    if (isAgain) {
      return isPressed ? (
        <Image
          onClick={onClick}
          src={againPressed}
          alt={alt.push}
          fill
          sizes="100vw"
        />
      ) : (
        <Image
          onClick={onClick}
          src={again}
          alt={alt.push}
          fill
          sizes="100vw"
        />
      );
    }
    return isPressed ? (
      <Image
        onClick={onClick}
        src={pushPressed}
        alt={alt.push}
        fill
        sizes="100vw"
      />
    ) : (
      <Image onClick={onClick} src={push} alt={alt.push} fill sizes="100vw" />
    );
  };
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        css={pushBtnStyles}
        disabled={isPressed}
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

  width: 40px;
  height: 30px;
  bottom: 40px;
  left: calc((100% - 40px) / 2);

  ${mq.md} {
    width: 60px;
    height: 50px;
    bottom: 60px;
    left: calc((100% - 60px) / 2);
  }

  &:active {
    background-color: none;
  }
`;
export default LunchRoulettePushBtn;
