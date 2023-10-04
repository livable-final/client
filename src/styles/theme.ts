const theme = {
  // 색상 팔레트
  palette: {
    title: '#162637',
    primary: '#2563EB',
    white: '#FFFFFF',
    black: '#000000',
    orange: '#FF9141',
    bluescale: {
      blue10: '#E7EEFF',
      blue20: '#CAD9FA',
      blue30: '#A6BEF4',
      blue40: '#7EA2F3',
      blue50: '#5085FB',
      blue60: '#2563EB',
      blue70: '#1A53D1',
      blue80: '#1648B6',
      blue90: '#163986',
    },
    greyscale: {
      grey5: '#F9FAFB',
      grey10: '#F0F1F3',
      grey20: '#E9EBED',
      grey30: '#C3C6CC',
      grey40: '#96A2AC',
      grey45: '#D3D3D3',
      grey50: '#747C84',
      grey60: '#4A5662',
      grey70: '#33404E',
      grey80: '#243545',
      grey90: '#162637',
    },
    state: {
      danger: '#D32F2F',
      warning: '#F13D2C',
    },
    input: {
      unabled: '#96A2AC',
      default: '#4A5662',
      enabled: '#162637',
    },
    background: {
      white: '#FFFFFF',
      home: 'linear-gradient(180deg, #FFF 0%, #FFF 5.59%, #F8F8F8 21.52%);',
    },
    popup: {
      orange:
        'linear-gradient(105deg, #ffac6f 0%, #ff9141 52.33%, #ff6b6b 88.25%, #ff9ab3 100%);',
    },
  },
  // 폰트 스케일
  font: {
    title: {
      title1: '600 normal 24px var(--pretendard)',
      title2_600: '600 normal 20px var(--pretendard)',
      title2_500: '500 normal 20px var(--pretendard)',
      title1_godo: '400 normal 18px var(--godoM)',
    },
    subTitle: {
      subTitle1_600: '600 normal 18px var(--pretendard)',
      subTitle1_500: '500 normal 18px var(--pretendard)',
      subTitle1_400: '400 normal 18px var(--pretendard)',
      subTitle2_600: '600 normal 17px var(--pretendard)',
      subTitle2_500: '500 normal 17px var(--pretendard)',
      subTitle2_400: '400 normal 17px var(--pretendard)',
    },
    body: {
      body1_600: '600 normal 16px var(--pretendard)',
      body1_500: '500 normal 16px var(--pretendard)',
      body1_400: '400 normal 16px var(--pretendard)',
      body2_600: '600 normal 15px var(--pretendard)',
      body2_500: '500 normal 15px var(--pretendard)',
      body2_400: '400 normal 15px var(--pretendard)',
      body3_500: '500 normal 14px var(--pretendard)',
      body3_400: '400 normal 14px var(--pretendard)',
      body3_300: '300 normal 11px var(--pretendard)',
      body4: '400 normal 12px var(--pretendard)',
    },
    input: {
      default: '400 normal 10px var(--pretendard)',
    },
    etc: {
      findRoad: '500 normal 12px var(--pretendard)',
      userPoint: '500 normal 13px var(--pretendard)',
      rankingNumber: '400 normal 20px var(--dnfBitBit)',
      reviewDesc: '400 normal 15px var(--yeongdeok)',
      review: '400 normal 16px var(--yeongdeokBlueroad)',
      rouletteTitle: '400 normal 24px var(--dnfBitBit)',
      rouletteContent: '400 normal 20px var(--dnfBitBit)',
      roulettePopup: '400 normal 24px var(--dnfBitBit)',
      alert: '400 normal 16px var(--godoM)',
    },
  },
};

export default theme;
