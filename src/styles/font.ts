import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  variable: '--pretendard',
});

const godo = localFont({
  src: '../assets/fonts/GodoM.ttf',
  variable: '--godoM',
});

const gwPower = localFont({
  src: '../assets/fonts/GangwonPower.otf',
  variable: '--gwPower',
});

const yeongdeok = localFont({
  src: '../assets/fonts/Yeongdeok.ttf',
  variable: '--yeongdeok',
});

const yeongdeokBlueroad = localFont({
  src: '../assets/fonts/YeongdeokBlueroad.ttf',
  variable: '--yeongdeokBlueroad',
});

const dnfBitBit = localFont({
  src: '../assets/fonts/DNFBitBit.ttf',
  variable: '--dnfBitBit',
});

export { pretendard, godo, gwPower, yeongdeok, yeongdeokBlueroad, dnfBitBit };
