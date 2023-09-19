import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
});

const godo = localFont({
  src: '../assets/fonts/GodoM.ttf',
  variable: '--godoM',
});

export { pretendard, godo };
